"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const deportes = [
  { id: "salto-pasiego", nombre: "Salto Pasiego" },
  { id: "bolo-palma", nombre: "Bolo Palma" },
  { id: "ultimate", nombre: "Ultimate" },
  { id: "palas", nombre: "Palas" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#049695] text-white backdrop-blur ">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/imagenes/logo/marycumbre.png"
            alt="Logo Marycumbre"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="hidden font-bold sm:inline-block text-white text-xl">Marycumbre</span>
        </Link>


        <nav className="hidden md:flex items-center justify-end">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-yellow-300">
              Inicio
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium transition-colors hover:text-yellow-300 focus:outline-none">
                Deportes <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md bg-[#049695] text-white opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50 shadow-lg">
                <div className="py-1">
                  {deportes.map((deporte) => (
                    <Link
                      key={deporte.id}
                      href={`/deporte/${deporte.id}`}
                      className="block px-4 py-2 text-sm text-white  hover:text-yellow-300"
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


        <div className={`${isMenuOpen ? 'h-auto p-4' : 'h-0'} overflow-hidden md:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-emerald-600 to-teal-500 border-b duration-300`}>
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
      </div>
    </header>
  )
}
