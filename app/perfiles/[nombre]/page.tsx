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
  },
  "jose-manuel-torres":{
    nombre: "José Manuel Torres",
    contenido: `
      <p>José Manuel Torres nacido en Vioño (Cantabria) es un exfutbolista y empresario y una persona muy vinculada con el deporte de las palas en su región, Cantabria. Torres ha dedicado más de una década a jugar a las palas, en los últimos años se ha involucrado profundamente en su profesionalización y expansión. Es fundador y presidente de la Escuela de Palas Cántabra, una entidad clave en la organización de eventos y en la difusión de este deporte tanto a nivel local como internacional.</p>
      <p>En 2017, fue uno de los principales impulsores del Campeonato Mundial de Palas celebrado en la Segunda Playa del Sardinero en Santander. Este evento reunió a los cien mejores jugadores del mundo y buscó batir varios récords, como reunir a 1103 personas jugando simultáneamente, jugar durante 80 horas seguidas y contar con participantes de más de 60 nacionalidades.</p>
      <p>José Manuel también ha sido pionero en la introducción de recursos tecnológicos en el deporte como el uso de radares para medir la velocidad de la bola y automatizar la puntuación en las competiciones.</p>
      <p>Uno sus sueños es que las palas se convierta en “patrimonio inmaterial de la ciudad” y recuerda que en menos de 2 años se cumplirá un siglo desde los primeros inicios de las palas en la región y les gustaría superarse con un nuevo gran torneo mundial en Santander que superasen el ya creado en 2017. El reto sería además de superar a esas 1103 personas que ya jugaron a la vez también es que se jugasen 100 horas seguidas para conmemorar los 100 años de historia.</p>
      <p>A largo plazo el gran reto de las palas sería que fuese deporte olímpico, lo ve posible y cree que todo es sentarse a conversar con otros países en los que también se practica este deporte.</p>
    `,
    imagen: "/imagenes/palas/Fotos/Screenshot_20250518_183734_Gallery.jpg"
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
