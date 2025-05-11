import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Marycumbre",
  description: "Descubre los deportes rurales y tradicionales de Cantabria",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/imagenes/logo/marycumbreico.ico" sizes="any" />
        <title>Marycumbre</title>
        <meta name="description" content="Descubre los deportes rurales y tradicionales de Cantabria" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-emerald-50`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
