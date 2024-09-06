import "@/styles/globals.css";
import "@/styles/fonts.css";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

export default function App({ Component, pageProps }) {
  return (
    <HydrationOverlay>
      <Component {...pageProps} />
    </HydrationOverlay>
  );
}
