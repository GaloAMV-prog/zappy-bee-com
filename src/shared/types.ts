import z from "zod";

/**
 * Types shared between the client and server go here.
 */

export const LeadSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un email válido"),
  company: z.string().min(2, "El nombre de la empresa debe tener al menos 2 caracteres"),
});

export type LeadType = z.infer<typeof LeadSchema>;
