import DashboardLayout from "@/components/DashboardLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </main>
  );
}
