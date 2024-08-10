import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body>
        <div>jseifjesofiesjoij</div>
        {/* Layout UI */}
        <NextUIProvider>
          <main>{children}</main>
        </NextUIProvider>
      </body>
    </html>
  )
}
