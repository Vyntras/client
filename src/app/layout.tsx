import type { Metadata } from "next";
import "./globals.css";




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
        <main>{children}</main>
      </body>
    </html>
  )
}
