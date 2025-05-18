"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { X } from "lucide-react"
import { useEffect } from "react"

const deportes = {
  "salto-pasiego": {
    nombre: "Salto Pasiego",
    historia:
      "El salto pasiego es una técnica tradicional de los habitantes de los Valles Pasiegos en Cantabria. Utilizando un palo largo o 'cuatropea' como pértiga, los pasiegos saltaban sobre los arroyos, muros de piedra y terrenos accidentados mientras se desplazaban con sus ganados por las laderas montañosas. Esta práctica surgió como una necesidad para moverse por el terreno escarpado de la región, y con el tiempo se convirtió en una habilidad distintiva y en una competición deportiva.",
    reglas:
      "En la competición moderna de salto pasiego, los participantes utilizan una pértiga de madera de avellano de unos 3 metros de longitud. El objetivo es superar obstáculos o distancias horizontales, apoyando la pértiga en el suelo y elevándose para salvar el obstáculo. Se valora tanto la distancia alcanzada como la técnica y el estilo del saltador. Las competiciones suelen organizarse en diferentes categorías según la edad y experiencia de los participantes.",
    imagenes: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    imagenesPortada: [
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
    enlacesTexto: {
    "":""
    }
  },
  "bolo-palma": {
    nombre: "Bolo Palma",
    historia:
      "El bolo palma es una modalidad de los bolos tradicional cántabra, este deporte se practica en todas partes de España dónde se encuentran distintas peñas balísticas fundadas por gente de la Tierruca que está viviendo fuera, sobretodo en Madrid, País Vasco, Cataluña , Valencia y Castilla y León aunque también hay algunas peñas pequeñas en Mallorca o Murcia.\n\n" +
      "En cuanto a los orígenes la primera referencia que hay sobre esta modalidad es de 1627 cuando el alcalde de Santander prohibió su práctica en la calle, pero fue a finales del Siglo XIX cuando se empezaron a mover los principios para la formalización de un reglamento conjunto para toda la región. El 14 de septiembre de 1914 en la localidad de Torrelavega nació la Federación Bolística Montañesa pero no duraría mucho ya que pasado el año hubo conflictos entre santanderinos y torrelaveguenses.\n\n" +
      "En 1941 por fin se creó la definitiva Real Federación Española con D.Antonio Gorordo como presidente. La primera sede fue en el Café Boulevard de Santander. Actualmente la sede se encuentra en el Complejo Municipal Ruth Beitia de La Albericia.\n\n" + 
      "A partir de los años 50 se instauró el plano competitivo, el primer Campeonato de España. En ese campeonato se forjaron leyendas como Pedro Lanza, Antonio Saiz “El Bolo” u Óscar González, unos de los mejores de la historia. Víctor González es el mejor jugador del momento y una vez que se retire también entrará en este olimpo, aunque está claro que él ya es uno de los jugadores más importantes en este deporte.\n\n" +
      "Otro de los hitos más importantes en la historia de este deporte fue la construcción de boleras cubiertas que empezaron a inaugurarse a partir del año 1980. Esto fue un gran paso para poder continuar con la actividad durante todo el año a pesar de las circunstancias meteorológicas.\n\n" +
      "En los tiempos más recientes cabe destacar la declaración de Bolo Palma como Bien de Interés Cultural Inmaterial de Cantabria en 2015, un reconocimiento de valor histórico, social y cultural.\n\n" +
      "En la actualidad el deporte está en horas bajas respecto a la popularidad del mismo, un gran problema es que la media de edad de los espectadores es elevada y no está llegando a enganchar a las nuevas generaciones. Esto hace que el deporte empiece a estar en peligro de extinción. Desde los estamentos se está buscando dar a conocer el deporte con distintas medidas como charlas en colegios, excursiones a boleras o la inclusión del deporte en la materia de Educación Física en colegios e institutos.",

    reglas:
      "1.⁠ ⁠Dos equipos con 4 jugadores cada uno.\n\n" +
      "- Fase 1 (Tiro): Cada jugador lanza dos bolas desde el fondo de la bolera.\n\n" +
      "- Fase 2 (Birle): Una vez se lanzan las 8 bolas los 4 jugadores las vuelven a tirar (birlar) desde el punto en el que se haya quedado la bola.\n\n" +
      "2.⁠ ⁠El partido se divide en 6 mangas que se denominan como “chicos”. ¿Cómo se consiguen los “chicos”? Cada “chico” se puede resolver de dos maneras:\n\n" +
      "- Si en la primera ronda alguno de los equipos llega a 40 obliga al otro a hacer más bolos.\n\n" +
      "- Si en la primera ronda ninguno llega a los 40 bolos se hace una segunda tanda y al finalizar se suman los bolos tirados en ambas y gana el que más haya tirado.Si empatasen se haría otra ronda. EJEMPLO:\n\n" +
      "- El equipo 1 tira 35 bolos en la primera ronda y el equipo 2 hace 37. En la segunda ronda el equipo 1 tira 38 (35+38=73) entonces el equipo 2 para ganar necesitaría hacer 36 bolos (37+37=74).\n\n" +
      "3.⁠ ⁠¿Cuál es el valor de cada bolo?\n\n" +
      "- Cada bolo cuenta como 1 EXCEPTO si SOLO se derriba el bolo central que el valor de este sería 2. Ejemplo: Cuarta publicación\n\n" +
      "- En la fase 1 (Tiro) los jugadores pueden sumar bolos adicionales (Pueden ser 10, 20 o más) si con la bola derriba un bolo y luego la bola va por dentro del emboque o se derriba. El Emboque es un bolo pequeño que se coloca a un costado del cajón.\n\n" +
      "- Si no se derriba ningún bolo se suman 0 puntos pero la bola sigue siendo válida para luego jugar con ella en el “birle”. Esto se denomina en forma coloquial como “coneja”.\n\n" +
      "4.⁠ ⁠¿Todas las bolas son válidas? NO:\n\n" +
      "- Bola NULA: cuando en la fase de “tiro” la bola no bota entre la raya marcada por el árbitro y el primer bolo la bola queda inhabilitada.\n\n" +
      "- Bola QUEDA: si la bola no pasa la raya posterior al cajón de bolos la bola también queda inhabilitada.",
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
    imagenesPortada: [
      "/imagenes/bolos/Fotos/JPG/IMG_6564.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6565.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6595.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6597.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6599.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6602.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6603.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6604.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6605.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6653.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6656.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6667.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6668.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6675.jpg?height=300&width=400",
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
    ],
    enlacesTexto: {
    "Víctor González": "/perfiles/victor-gonzalez",
    "Federación Bolística Montañesa": "https://maderadeser.com/informacion/publicaciones/publicacion/federacion-bolistica-montanesa/",
    "Complejo Municipal Ruth Beitia": "https://www.santanderdeportes.com/static.php?c=8"
    }
  },
  ultimate: {
    nombre: "Ultimate",
    historia:
      "Aunque el Ultimate no es un deporte tradicional de Cantabria, ha ganado popularidad en la región en las últimas décadas. Este deporte fue inventado en Estados Unidos en la década de 1960 y llegó a España en los años 80. En Cantabria, comenzó a practicarse en 2005. Con el tiempo, se han formado clubes locales y se organizan torneos regulares, especialmente en la modalidad de playa, aprovechando el litoral cántabro. Actualmente el único equipo en activo es Corocotta Ultimate Cantabria.",
    reglas:
      "El Ultimate se juega con un disco volador (frisbee) en un campo rectangular con zonas de gol en ambos extremos. Los equipos, de 5 jugadores, intentan avanzar el disco mediante pases hasta completar uno en la zona de gol contraria. El jugador con el disco no puede correr y tiene un tiempo limitado para pasarlo. Si el disco cae al suelo, toca fuera del campo o es interceptado, la posesión pasa al equipo contrario. Una característica distintiva es que se juega sin árbitros, basándose en el 'espíritu de juego' y la deportividad de los participantes.",
    imagenes: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    imagenesPortada: [
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
    enlacesTexto: {
    "":""
    }
  },
  palas: {
    nombre: "Palas",
    historia:
      "El juego de palas es una actividad recreativa muy arraigada en las playas del norte de España, incluidas las de Cantabria. Aunque no tiene un origen específicamente cántabro, forma parte de la cultura playera de la región desde hace generaciones. Las palas, en su formato actual con raquetas de madera, se popularizaron a mediados del siglo XX como una actividad de ocio veraniega. En Cantabria, es habitual ver a familias y grupos de amigos jugando a palas en playas como El Sardinero, Laredo o Castro Urdiales durante los meses de verano.",
    reglas:
      "El juego de palas consiste en golpear una pelota (generalmente de goma o tenis) con raquetas de madera, intentando mantenerla en el aire el mayor tiempo posible. No existe un campo delimitado oficial ni un sistema de puntuación estandarizado, ya que principalmente es una actividad recreativa. Sin embargo, en algunos torneos informales que se organizan en las playas, se establecen reglas específicas como áreas de juego, número de toques permitidos o sistemas de puntuación similares a los del tenis o voleibol.",
    imagenes: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    imagenesPortada: [
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
    enlacesTexto: {
    "":""
    }
  }
}

export default function DeportePage() {
  const params = useParams()
  const id = params.id as string
  const deporte = deportes[id as keyof typeof deportes]
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const insertarEnlaces = (texto: string, mapaEnlaces: Record<string, string> = {}): string => {
    let textoModificado = texto

    Object.entries(mapaEnlaces).forEach(([palabra, url]) => {
      const isInternal = url.startsWith("/")
      const enlace = isInternal
        ? `<a href="${url}" class="text-blue-600 underline hover:text-blue-800">${palabra}</a>`
        : `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">${palabra}</a>`

      const palabraEscapada = palabra.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
      const regex = new RegExp(`\\b${palabraEscapada}\\b`, "g")

      textoModificado = textoModificado.replace(regex, enlace)
    })

    return textoModificado
  }




  useEffect(() => {
    if (!deporte || !deporte.imagenesPortada || deporte.imagenesPortada.length === 0) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % deporte.imagenesPortada.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [deporte])


  if (!deporte) {
    return <div className="container mx-auto px-4 py-16 text-center">Deporte no encontrado</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-emerald-50">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#049695]">{deporte.nombre}</h1>

      <div className="mb-12">
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden shadow-lg">
          {deporte.imagenesPortada.length > 0 && (
            <Image
              src={deporte.imagenesPortada[currentSlide]}
              alt={`${deporte.nombre} portada ${currentSlide + 1}`}
              fill
              className="object-cover transition-opacity duration-1000"
              key={currentSlide}
            />
          )}
        </div>
      </div>

      <section className="mb-12 bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4 text-[#049695]">Historia</h2>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          {deporte.historia.split('\n\n').map((parrafo, index) => (
            <p
              key={index}
              className="text-gray-700"
              dangerouslySetInnerHTML={{
                __html: insertarEnlaces(parrafo, deporte.enlacesTexto || {})
              }}
            />
          ))}
        </div>
      </section>

      <section className="mb-12 bg-gradient-to-r from-teal-100 to-emerald-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4 text-[#049695]">Reglas Básicas</h2>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          {deporte.reglas.split('\n\n').map((parrafo, index) => (
            <p key={index}>{parrafo}</p>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#049695]">Galería de Imágenes</h2>
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
        <h2 className="text-2xl font-bold mb-4 text-[#049695]">Últimas Noticias</h2>
        <Separator className="mb-6 bg-emerald-200" />

        <div className="flex space-x-6 pb-4 overflow-x-auto snap-x">
          {deporte.noticias.map((noticia, index) => (
            <Link
              href={`/noticias/${id}/${noticia.id}`}
              key={index}
              className={`snap-start flex-shrink-0 ${
                index < 2 ? "w-full md:w-[calc(50%-0.75rem)]" : "w-3/4 md:w-[calc(25%-0.75rem)]"
              }`}
            >
              <Card className="h-full border-emerald-200 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-teal-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#049695]">{noticia.titulo}</h3>
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
              <X className="h-6 w-6 text-[#049695]" />
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
