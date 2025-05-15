"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { X } from "lucide-react"

const deportes = {
  "salto-pasiego": {
    nombre: "Salto Pasiego",
    portada: "/placeholder.svg?height=600&width=1200",
    historia:
      "El salto pasiego es una técnica tradicional de los habitantes de los Valles Pasiegos en Cantabria. Utilizando un palo largo o 'cuatropea' como pértiga, los pasiegos saltaban sobre los arroyos, muros de piedra y terrenos accidentados mientras se desplazaban con sus ganados por las laderas montañosas. Esta práctica surgió como una necesidad para moverse por el terreno escarpado de la región, y con el tiempo se convirtió en una habilidad distintiva y en una competición deportiva.",
    reglas:
      "En la competición moderna de salto pasiego, los participantes utilizan una pértiga de madera de avellano de unos 3 metros de longitud. El objetivo es superar obstáculos o distancias horizontales, apoyando la pértiga en el suelo y elevándose para salvar el obstáculo. Se valora tanto la distancia alcanzada como la técnica y el estilo del saltador. Las competiciones suelen organizarse en diferentes categorías según la edad y experiencia de los participantes.",
    imagenes: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    noticias: [
      {
        id: "noticia-1",
        titulo: "Campeonato Regional de Salto Pasiego 2023",
        fecha: "15/07/2023",
        resumen:
          "El pasado fin de semana se celebró en Vega de Pas el Campeonato Regional de Salto Pasiego con récord de participación.",
      },
      {
        id: "noticia-2",
        titulo: "Exhibición de Salto Pasiego en la Feria de Tradiciones",
        fecha: "22/05/2023",
        resumen:
          "Los mejores saltadores de la región realizaron una exhibición durante la Feria de Tradiciones Cántabras.",
      },
      {
        id: "noticia-3",
        titulo: "Nuevas categorías juveniles en el Salto Pasiego",
        fecha: "10/04/2023",
        resumen:
          "La Federación Cántabra ha anunciado la creación de nuevas categorías juveniles para fomentar este deporte entre los más jóvenes.",
      },
    ],
  },
  "bolo-palma": {
    nombre: "Bolo Palma",
    portada: "/imagenes/bolos/Fotos/JPG/IMG_6596.jpg?height=600&width=1200",
    historia:
      "El bolo palma es el juego de bolos más extendido y popular en Cantabria, con raíces que se remontan varios siglos atrás. Este deporte tradicional se ha transmitido de generación en generación y forma parte esencial del patrimonio cultural cántabro. Las primeras referencias escritas datan del siglo XVI, aunque se cree que su práctica es mucho más antigua. A lo largo del siglo XX, el bolo palma se organizó como deporte federado, estableciéndose competiciones regulares y un reglamento oficial.",
    reglas:
      "El juego consiste en lanzar bolas (normalmente de madera) desde una distancia determinada para derribar el mayor número posible de bolos (piezas cilíndricas de madera). La bolera tradicional tiene forma rectangular y cuenta con 9 bolos dispuestos en tres filas, más un décimo bolo llamado 'emboque'. Los jugadores realizan varios lanzamientos o 'tiradas' desde diferentes posiciones. La puntuación depende del número de bolos derribados y de si se consigue el 'emboque', que otorga puntos adicionales.",
    imagenes: [
      "/imagenes/bolos/Fotos/JPG/IMG_6564.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6565.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6566.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6567.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6572.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6573.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6574.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6591.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6595.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6597.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6599.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6602.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6603.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6604.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6605.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6610.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6653.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6655.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6656.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6658.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6667.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6668.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6675.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6676.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6678.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6680.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6695.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6697.jpg?height=300&width=400",

    ],
    noticias: [
      {
        id: "noticia-1",
        titulo: "Peñacastillo se queda a las puertas de la remontada",
        fecha: "05/04/2025",
        resumen:
          "El encuentro entre Peñacastillo y Borbolla concluyó con un 3-3 que no deja satisfecho a ninguno.",
      },
      {
        id: "noticia-2",
        titulo: "Inauguración de la nueva bolera municipal de Santander",
        fecha: "05/06/2023",
        resumen:
          "El Ayuntamiento de Santander ha inaugurado una nueva bolera municipal que cumple con todos los estándares de competición.",
      },
      {
        id: "noticia-3",
        titulo: "Torneo Internacional de Bolo Palma en Santander",
        fecha: "15/05/2023",
        resumen:
          "Santander acogerá el próximo mes el Torneo Internacional de Bolo Palma con participantes de varios países.",
      },
    ],
  },
  ultimate: {
    nombre: "Ultimate",
    portada: "/placeholder.svg?height=600&width=1200",
    historia:
      "Aunque el Ultimate no es un deporte tradicional de Cantabria, ha ganado popularidad en la región en las últimas décadas. Este deporte fue inventado en Estados Unidos en la década de 1960 y llegó a España en los años 80. En Cantabria, comenzó a practicarse en 2005. Con el tiempo, se han formado clubes locales y se organizan torneos regulares, especialmente en la modalidad de playa, aprovechando el litoral cántabro. Actualmente el único equipo en activo es Corocotta Ultimate Cantabria.",
    reglas:
      "El Ultimate se juega con un disco volador (frisbee) en un campo rectangular con zonas de gol en ambos extremos. Los equipos, generalmente de 7 jugadores, intentan avanzar el disco mediante pases hasta completar uno en la zona de gol contraria. El jugador con el disco no puede correr y tiene un tiempo limitado para pasarlo. Si el disco cae al suelo, toca fuera del campo o es interceptado, la posesión pasa al equipo contrario. Una característica distintiva es que se juega sin árbitros, basándose en el 'espíritu de juego' y la deportividad de los participantes.",
    imagenes: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    noticias: [
      {
        id: "noticia-1",
        titulo: "Torneo de Ultimate Playa en Laredo",
        fecha: "12/08/2023",
        resumen:
          "Este fin de semana se celebrará en la playa de Laredo el torneo anual de Ultimate con participación de equipos de toda España.",
      },
      {
        id: "noticia-2",
        titulo: "El club Ultimate Cantabria clasifica para el Campeonato Nacional",
        fecha: "20/06/2023",
        resumen:
          "Por primera vez en su historia, el club Ultimate Cantabria ha conseguido clasificarse para el Campeonato Nacional que se celebrará en Valencia.",
      },
    ],
  },
  palas: {
    nombre: "Palas",
    portada: "/placeholder.svg?height=600&width=1200",
    historia:
      "El juego de palas es una actividad recreativa muy arraigada en las playas del norte de España, incluidas las de Cantabria. Aunque no tiene un origen específicamente cántabro, forma parte de la cultura playera de la región desde hace generaciones. Las palas, en su formato actual con raquetas de madera, se popularizaron a mediados del siglo XX como una actividad de ocio veraniega. En Cantabria, es habitual ver a familias y grupos de amigos jugando a palas en playas como El Sardinero, Laredo o Castro Urdiales durante los meses de verano.",
    reglas:
      "El juego de palas consiste en golpear una pelota (generalmente de goma o tenis) con raquetas de madera, intentando mantenerla en el aire el mayor tiempo posible. No existe un campo delimitado oficial ni un sistema de puntuación estandarizado, ya que principalmente es una actividad recreativa. Sin embargo, en algunos torneos informales que se organizan en las playas, se establecen reglas específicas como áreas de juego, número de toques permitidos o sistemas de puntuación similares a los del tenis o voleibol.",
    imagenes: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    noticias: [
      {
        id: "noticia-1",
        titulo: "Torneo de Palas en la playa de El Sardinero",
        fecha: "05/08/2023",
        resumen:
          "Este domingo se celebrará el tradicional torneo de palas en la playa de El Sardinero con categorías para todas las edades.",
      },
      {
        id: "noticia-2",
        titulo: "Nuevas zonas habilitadas para jugar a palas en las playas de Santander",
        fecha: "01/07/2023",
        resumen:
          "El Ayuntamiento de Santander ha habilitado nuevas zonas específicas para la práctica de palas en sus playas para evitar molestias a otros usuarios.",
      },
      {
        id: "noticia-3",
        titulo: "Campeonato de Palas de Cantabria",
        fecha: "15/06/2023",
        resumen:
          "El próximo mes se celebrará el Campeonato de Palas de Cantabria en la playa de Laredo con importantes premios.",
      },
      {
        id: "noticia-4",
        titulo: "Nuevas palas ecológicas fabricadas en Cantabria",
        fecha: "01/05/2023",
        resumen:
          "Una empresa cántabra ha lanzado una línea de palas fabricadas con materiales sostenibles y respetuosos con el medio ambiente.",
      },
    ],
  },
  remo: {
    nombre: "Remo",
    portada: "/placeholder.svg?height=600&width=1200",
    historia:
      "El remo en Cantabria tiene una larga tradición vinculada a la actividad pesquera y marítima de la región. Las regatas de traineras, embarcaciones originalmente utilizadas para la pesca, se remontan al siglo XIX cuando las diferentes cofradías de pescadores competían por llegar primero a los bancos de pesca o al puerto para vender el pescado. Con el tiempo, estas competiciones informales evolucionaron hacia un deporte organizado. En Cantabria, localidades como Castro Urdiales, Laredo, Santoña y Pedreña tienen una fuerte tradición remera, con clubes históricos que han conseguido importantes éxitos a nivel nacional.",
    reglas:
      "Las regatas de traineras se disputan con embarcaciones de 12 metros de eslora tripuladas por 13 remeros y un patrón. La competición consiste en recorrer una distancia determinada (habitualmente entre 3 y 5 kilómetros) en el menor tiempo posible. El recorrido suele ser de ida y vuelta con una ciaboga (giro) en el punto intermedio. Las regatas pueden disputarse en línea recta o en un campo de regatas con calles. La Liga ACT (Asociación de Clubes de Traineras) es la competición más prestigiosa, donde participan los mejores clubes del Cantábrico, incluidos varios equipos cántabros.",
    imagenes: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    noticias: [
      {
        id: "noticia-1",
        titulo: "La trainera de Pedreña consigue la victoria en la Bandera de Santander",
        fecha: "25/07/2023",
        resumen:
          "En una emocionante regata, la tripulación de Pedreña se impuso por escaso margen en la tradicional Bandera de Santander.",
      },
      {
        id: "noticia-2",
        titulo: "Comienza la temporada de regatas en Cantabria",
        fecha: "10/06/2023",
        resumen:
          "Este fin de semana arranca oficialmente la temporada de regatas en Cantabria con la disputa de la primera jornada de la Liga Regional.",
      },
      {
        id: "noticia-3",
        titulo: "Nuevas traineras para los clubes cántabros",
        fecha: "15/05/2023",
        resumen:
          "Varios clubes cántabros han presentado sus nuevas embarcaciones para la próxima temporada de regatas.",
      },
    ],
  },
  "futbol-playa": {
    nombre: "Fútbol Playa",
    portada: "/placeholder.svg?height=600&width=1200",
    historia:
      "El fútbol playa, aunque no es originario de Cantabria, ha encontrado en las playas cántabras un escenario ideal para su práctica y desarrollo. Este deporte comenzó a popularizarse a nivel internacional en la década de 1990, y llegó a las costas cántabras a finales de esa década. Desde entonces, ha ido ganando adeptos, especialmente durante los meses de verano. En playas como El Sardinero, Laredo o Somo se organizan torneos veraniegos que atraen a numerosos participantes y espectadores. Cantabria ha acogido también competiciones oficiales de ámbito nacional e internacional, contribuyendo a la promoción de este deporte en la región.",
    reglas:
      "El fútbol playa se juega en un campo rectangular de arena con porterías más pequeñas que las del fútbol convencional. Los equipos están formados por cinco jugadores, incluyendo el portero, y los partidos se dividen en tres periodos de 12 minutos cada uno. Las reglas favorecen el juego ofensivo y espectacular, permitiendo realizar sustituciones ilimitadas y penalizando la pasividad en el juego. Los empates se resuelven con prórroga y, si es necesario, tanda de penaltis. Una característica distintiva es que muchas faltas se sancionan con tiros libres directos sin barrera, lo que aumenta las posibilidades de gol.",
    imagenes: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    noticias: [
      {
        id: "noticia-1",
        titulo: "Santander acogerá una etapa del Circuito Nacional de Fútbol Playa",
        fecha: "15/07/2023",
        resumen:
          "La playa de El Sardinero será sede de una de las etapas del Circuito Nacional de Fútbol Playa durante el primer fin de semana de agosto.",
      },
      {
        id: "noticia-2",
        titulo: "Abierta la inscripción para el Torneo de Fútbol Playa de Laredo",
        fecha: "01/06/2023",
        resumen:
          "Ya está abierto el plazo de inscripción para el tradicional Torneo de Fútbol Playa de Laredo que celebrará su XX edición este verano.",
      },
      {
        id: "noticia-3",
        titulo: "La selección cántabra de fútbol playa se prepara para el Campeonato de España",
        fecha: "15/05/2023",
        resumen:
          "La selección cántabra de fútbol playa ha comenzado los entrenamientos de cara al próximo Campeonato de España que se celebrará en Cádiz.",
      },
    ],
  },
}

export default function DeportePage() {
  const params = useParams()
  const id = params.id as string
  const deporte = deportes[id as keyof typeof deportes]
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!deporte) {
    return <div className="container mx-auto px-4 py-16 text-center">Deporte no encontrado</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-emerald-50">
      <h1 className="text-4xl font-bold mb-6 text-center text-emerald-700">{deporte.nombre}</h1>

      <div className="mb-12">
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={deporte.portada || "/placeholder.svg?height=600&width=1200"}
            alt={deporte.nombre}
            fill
            className="object-cover"
          />
          
        </div>
      </div>

      <section className="mb-12 bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4 text-emerald-700">Historia</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{deporte.historia}</p>
      </section>

      <section className="mb-12 bg-gradient-to-r from-teal-100 to-emerald-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4 text-emerald-700">Reglas Básicas</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{deporte.reglas}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-emerald-700">Galería de Imágenes</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
          {deporte.imagenes.map((imagen, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] h-[300px] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer snap-center"
              onClick={() => setSelectedImage(imagen)}
            >
              <Image
                src={imagen || "/placeholder.svg"}
                alt={`${deporte.nombre} imagen ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 overflow-hidden">
        <h2 className="text-2xl font-bold mb-4 text-emerald-700">Últimas Noticias</h2>
        <Separator className="mb-6 bg-emerald-200" />

        <div className="flex space-x-6 pb-4 overflow-x-auto snap-x">
          {deporte.noticias.map((noticia, index) => (
            <Link
              href={`/noticias/${id}/${noticia.id}`}
              key={index}
              className={`snap-start flex-shrink-0 ${index < 2 ? "w-full md:w-[calc(50%-0.75rem)]" : "w-3/4 md:w-[calc(25%-0.75rem)]"}`}
            >
              <Card className="h-full border-emerald-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-teal-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-emerald-700">{noticia.titulo}</h3>
                  <p className="text-sm text-teal-500 mb-2">{noticia.fecha}</p>
                  <p className="text-gray-700">{noticia.resumen}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Modal para ver imágenes en pantalla completa */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-1 z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X className="h-6 w-6 text-emerald-700" />
            </button>
            <div className="bg-white p-2 rounded-lg">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Imagen ampliada"
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
