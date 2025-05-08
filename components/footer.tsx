import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
      <div className="container py-10 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Marycumbre</h3>
            <p className="text-sm">Descubre y disfruta de los deportes tradicionales de Cantabria con nosotros.</p>
            <p className="text-xs">&copy; {new Date().getFullYear()} Marycumbre. Todos los derechos reservados.</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">Contacto</h3>
            <p className="text-sm">Email: info@marycumbre.com</p>
            <p className="text-sm">Teléfono: +34 942 123 456</p>
            <p className="text-sm">Dirección: Calle Principal 123, Santander, Cantabria</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <FaTiktok className="h-6 w-6" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
            <div className="pt-2 space-x-4 text-sm">
              <Link href="#" className="hover:text-yellow-300 transition-colors duration-300">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-yellow-300 transition-colors duration-300">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
