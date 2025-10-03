/// <reference types="vite/client" />

declare global {
  interface Window {
    trackCTAClick?: (buttonType: string) => void;
    trackFormSubmit?: () => void;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
