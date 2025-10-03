import { BrowserRouter as Router, Routes, Route } from "react-router";
import { LanguageProvider } from "@/react-app/contexts/LanguageContext";
import HomePage from "@/react-app/pages/Home";
import TermsAndConditions from "@/react-app/pages/TermsAndConditions";
import PrivacyPolicy from "@/react-app/pages/PrivacyPolicy";
import CookiesPolicy from "@/react-app/pages/CookiesPolicy";

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terminos" element={<TermsAndConditions />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
