import Link from "next/link"
import { Instagram, Youtube, Mail, Phone } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="border-t bg-[#049695] text-white">
      <div className="container py-10 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* BLOQUE 1 */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-lg font-bold">Marycumbre</h3>
            <p className="text-sm">Descubre y disfruta de los deportes tradicionales de Cantabria con nosotros.</p>
            <p className="text-xs">&copy; {new Date().getFullYear()} Marycumbre.</p>
          </div>

          {/* BLOQUE 2 */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-lg font-bold">Contacto</h3>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:marycumbre2025@gmail.com"
                className="text-sm hover:underline"
              >
                marycumbre2025@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="text-sm">+34 942 123 456</span>
            </div>
          </div>

          {/* BLOQUE 3 */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-lg font-bold">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/marycumbre/" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://www.tiktok.com/@marycumbre_can" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <FaTiktok className="h-6 w-6" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
