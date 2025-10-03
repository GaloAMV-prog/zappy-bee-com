import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { LeadSchema } from "../shared/types";

const app = new Hono<{ Bindings: Env }>();

// API route to detect user country from Cloudflare headers
app.get("/api/country", async (c) => {
  try {
    // Get country from Cloudflare headers
    const country = c.req.header('CF-IPCountry') || 'US';
    return c.json({ country: country.toUpperCase() });
  } catch (error) {
    console.error("Error detecting country:", error);
    return c.json({ country: 'US' }, 500);
  }
});

// API route to handle lead form submission
app.post("/api/leads", zValidator("json", LeadSchema), async (c) => {
  const { name, email, company } = c.req.valid("json");

  try {
    // Insert lead into database
    await c.env.DB.prepare(
      "INSERT INTO leads (name, email, company) VALUES (?, ?, ?)"
    ).bind(name, email, company).run();

    return c.json({ 
      success: true, 
      message: "Thank you, you'll soon have access to your free trial" 
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    return c.json({ 
      success: false, 
      message: "There was an error. Please try again." 
    }, 500);
  }
});

export default app;
