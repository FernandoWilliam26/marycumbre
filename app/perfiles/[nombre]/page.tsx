"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const perfiles = {
  "victor-gonzalez": {
    nombre: "Víctor González",
    resumen: "Actual referente del bolo palma.",
    contenido: `
      <p>Víctor González es considerado el mejor jugador actual de bolo palma.</p>
      <p>Ha ganado múltiples campeonatos nacionales y es una figura clave en la promoción del deporte.</p>
    `,
    imagen: "/imagenes/bolos/Fotos/JPG/IMG_6653.jpg"
  }
}

export default function PerfilPage() {
  const router = useRouter()
  const { nombre } = useParams()
  const perfil = perfiles[nombre as keyof typeof perfiles]

  if (!perfil) {
    return <div className="p-8 text-center">Perfil no encontrado</div>
  }

  return (
    <div className="container mx-auto p-8 bg-emerald-50">
      <Button onClick={() => router.back()} className="mb-6 bg-[#049695] hover:bg-[#0e6868]">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Button>

      <h1 className="text-4xl font-bold mb-2 text-[#049695]">{perfil.nombre}</h1>
      <p className="text-gray-600 mb-6">{perfil.resumen}</p>

      <img src={perfil.imagen} alt={perfil.nombre} className="w-full max-w-md rounded mb-6" />

      <div
        className="prose prose-lg text-gray-700"
        dangerouslySetInnerHTML={{ __html: perfil.contenido }}
      />
    </div>
  )
}
