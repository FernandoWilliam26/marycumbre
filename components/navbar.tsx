"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const deportes = [
  { id: "salto-pasiego", nombre: "Salto Pasiego" },
  { id: "bolo-palma", nombre: "Bolo Palma" },
  { id: "ultimate", nombre: "Ultimate" },
  { id: "palas", nombre: "Palas" },
  { id: "remo", nombre: "Remo" },
  { id: "futbol-playa", nombre: "Fútbol Playa" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-emerald-600 to-teal-500 text-white backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block text-white text-xl">Marycumbre</span>
        </Link>

        <nav className="hidden md:flex items-center justify-end">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-yellow-300">
              Inicio
            </Link>
            <div className="relative group">
              <Button variant="ghost" className="text-sm font-medium transition-colors hover:text-yellow-300">
                Deportes
              </Button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  {deportes.map((deporte) => (
                    <Link
                      key={deporte.id}
                      href={`/deporte/${deporte.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-100 hover:text-emerald-700"
                    >
                      {deporte.nombre}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/conocenos" className="text-sm font-medium transition-colors hover:text-yellow-300">
              Conócenos
            </Link>
          </div>
        </nav>

        <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-emerald-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <div className="space-y-2 pl-2">
                <p className="text-sm font-medium">Deportes:</p>
                {deportes.map((deporte) => (
                  <Link
                    key={deporte.id}
                    href={`/deporte/${deporte.id}`}
                    className="block text-sm transition-colors hover:text-emerald-600 pl-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {deporte.nombre}
                  </Link>
                ))}
              </div>
              <Link
                href="/conocenos"
                className="text-sm font-medium transition-colors hover:text-emerald-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Conócenos
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
