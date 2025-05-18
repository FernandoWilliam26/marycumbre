"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { X } from "lucide-react"

// Datos de ejemplo para las noticias
const noticias = {
  "salto-pasiego": {
    "noticia-1": {
      titulo: "Campeonato Regional de Salto Pasiego 2023",
      resumen: "El pasado fin de semana se celebró en Vega de Pas el Campeonato Regional de Salto Pasiego con récord de participación.",
      fecha: "15/07/2023",
      portada: "/placeholder.svg",
      contenido: `
        <p>El pasado fin de semana se celebró en Vega de Pas el Campeonato Regional de Salto Pasiego con récord de participación. Más de 50 saltadores de todas las edades se dieron cita en esta tradicional competición que cada año gana más adeptos.</p><br/>
        
        <p>La competición se desarrolló en un ambiente festivo y con gran afluencia de público. Los participantes demostraron una gran técnica y habilidad en los saltos, superando obstáculos de diversa dificultad.</p><br/>
        
        <p>En la categoría senior masculina, el ganador fue Juan Martínez, de Vega de Pas, quien logró un salto de 5,8 metros, estableciendo un nuevo récord del campeonato. En la categoría femenina, María Gómez, de San Pedro del Romeral, se alzó con el triunfo tras realizar un impecable salto de 4,2 metros.</p><br/>
        
        <p>Los organizadores se mostraron muy satisfechos con el desarrollo del evento y ya han anunciado que el próximo año se introducirán nuevas categorías para fomentar la participación de los más jóvenes.</p>
      `,
      imagenes: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    },
    "noticia-2": {
      titulo: "Exhibición de Salto Pasiego en la Feria de Tradiciones",
      resumen: "Los mejores saltadores de la región realizaron una exhibición durante la Feria de Tradiciones Cántabras.",
      fecha: "22/05/2023",
      portada: "/placeholder.svg",
      contenido: `
        <p>Los mejores saltadores de la región realizaron una exhibición durante la Feria de Tradiciones Cántabras celebrada el pasado fin de semana en Santander. La demostración de salto pasiego fue uno de los eventos más esperados y aplaudidos por el público asistente.</p><br/>
        
        <p>Durante la exhibición, los saltadores mostraron diferentes técnicas y estilos, explicando al público la historia y evolución de esta práctica tradicional. Además, se realizaron saltos sobre diferentes obstáculos, recreando situaciones que los pasiegos encontraban en su día a día en las montañas de Cantabria.</p><br/>
        
        <p>La exhibición contó con la participación de saltadores de diferentes generaciones, desde veteranos con décadas de experiencia hasta jóvenes promesas que están aprendiendo las técnicas tradicionales.</p><br/>
        
        <p>El evento sirvió también para promocionar el próximo Campeonato Regional que se celebrará en julio en Vega de Pas, y que este año espera contar con un número récord de participantes.</p>
      `,
      imagenes: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    },
    "noticia-3": {
      titulo: "Nuevas categorías juveniles en el Salto Pasiego",
      resumen: "La Federación Cántabra ha anunciado la creación de nuevas categorías juveniles para fomentar este deporte entre los más jóvenes.",
      fecha: "10/04/2023",
      portada: "/placeholder.svg",
      contenido: `
        <p>La Federación Cántabra ha anunciado la creación de nuevas categorías juveniles para fomentar el salto pasiego entre los más jóvenes. Esta iniciativa busca asegurar el relevo generacional en este deporte tradicional tan arraigado en la cultura de Cantabria.</p><br/>
        
        <p>Las nuevas categorías incluirán competiciones para niños y niñas de entre 8 y 12 años, y de 13 a 16 años. Para estas categorías se adaptarán tanto las pértigas como las distancias y obstáculos, garantizando la seguridad de los participantes mientras aprenden las técnicas básicas.</p><br/>
        
        <p>Además, se organizarán talleres y entrenamientos específicos para los más jóvenes, impartidos por saltadores veteranos que transmitirán sus conocimientos y experiencia a las nuevas generaciones.</p><br/>
        
        <p>La primera competición con estas nuevas categorías se celebrará el próximo mes de junio en San Pedro del Romeral, coincidiendo con las fiestas locales.</p>
      `,
      imagenes: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    },
  },
  "bolo-palma": {
    "noticia-1": {
      titulo: "Peñacastillo se queda a las puertas de la remontada",
      resumen: "El encuentro entre Peñacastillo y Borbolla concluyó con un 3-3 que no deja satisfecho a ninguno.",
      fecha: "15/07/2023",
      portada: "/imagenes/bolos/Fotos/JPG/IMG_6660.jpg",
      contenido: `
        <p>Los locales se quedan con la miel en los labios tras rozar la victoria. El encuentro arrancó con un gran nivel por parte del equipo de Noja, que logró 
        adelantarse en el marcador con un 1-2. En el tercer chico, Hermanos Borbolla embocaron dos bolas y consiguieron una ventaja notable. En el birle apenas 
        necesitaron tres tiradas para adjudicarse el chico. No obstante, decidieron seguir tirando, lo que generó ciertos murmullos y protestas en la grada. Incluso se 
        escucharon voces elevadas con frases como “¡ya vale!” o “¡basta ya!”. A pesar de ese momento puntual, el ambiente en el graderío fue respetuoso y correcto durante
        todo el encuentro.</p><br/>
        
        <p>Desde los 16 metros y con raya a medio pulgar, Peñacastillo, con un estelar Víctor González al frente, logró igualar el marcador. La remontada continuó en 
        el quinto chico, lanzando desde los 20 metros. Rubén Haya, leyenda viva del deporte, consiguió un emboque que puso en ventaja a los locales.</p><br/>
        
        <p>Todo se decidió en el sexto y último chico. Los santanderinos realizaron una floja tirada inicial que Borbolla supo aprovechar, a pesar de cometer dos bolas 
        nulas consecutivas. La emoción se mantuvo hasta el final, con los locales quedándose a tan solo un bolo de hacerse con la victoria. Durante el encuentro y 
        especialmente en el último chico se vió a los jugadores locales visiblemente frustrados, lamentando lo cerca que estuvieron del triunfo.</p><br/>
        
        <p>Tras el partido, tuvimos la oportunidad de conversar con Víctor González, uno de los grandes referentes del bolo palma, que puso así punto final a una intensa 
        y emocionante tarde bolística en el Mateo Grijuela.</p>
      `,
      imagenes: [
        "/imagenes/bolos/Fotos/JPG/IMG_6653.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6654.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6655.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6656.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6657.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6658.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6659.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6667.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6668.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6674.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6675.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6676.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6677.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6678.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6679.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6680.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6685.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6686.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6691.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6695.jpg?height=300&width=400",
        "/imagenes/bolos/Fotos/JPG/IMG_6697.jpg?height=300&width=400",
      ],
    },
  }
}

export default function NoticiaPage() {
  const router = useRouter()
  const params = useParams()
  const deporte = params.deporte as string
  const id = params.id as string

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Intentar obtener la noticia
  const noticia = noticias[deporte as keyof typeof noticias]?.[id as keyof (typeof noticias)[keyof typeof noticias]]

  if (!noticia) {
    return (
      <div className="container mx-auto px-4 py-16 text-center bg-emerald-50">
        <h1 className="text-2xl font-bold mb-4 text-[#049695]">Noticia no encontrada</h1>
        <Button onClick={() => router.back()} className="bg-[#049695] hover:bg-[##0e6868]">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-emerald-50">
      <Button onClick={() => router.back()} className="mb-6 bg-[#049695] hover:bg-[##0e6868]">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Button>

      <article className="max-w-4xl mx-auto text-center">
        {/* TÍTULO */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#049695]">{noticia.titulo}</h1>

        {/* RESUMEN */}
        {noticia.resumen && (
          <p className="text-base text-gray-500 mb-4 px-4">{noticia.resumen}</p>
        )}

        {/* FECHA */}
        <p className="text-sm text-[#049695] mb-8">{noticia.fecha}</p>

        {/* IMAGEN DE PORTADA */}
        {noticia.portada && (
          <div className="mb-12 flex justify-center">
            <div className="w-full md:w-3/4 lg:w-2/3">
              <Image
                src={noticia.portada || "/placeholder.svg"}
                alt={noticia.titulo}
                width={800}
                height={400}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* CONTENIDO */}
        <div
          className="prose prose-lg max-w-none mb-12 text-gray-700 text-left"
          dangerouslySetInnerHTML={{ __html: noticia.contenido }}
        />

        {/* CARRUSEL DE IMÁGENES */}
        {noticia.imagenes.length > 1 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-[#049695]">Más imágenes</h2>
            <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
              {noticia.imagenes.slice(1).map((imagen, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px] h-[300px] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer snap-center"
                  onClick={() => setSelectedImage(imagen)}
                >
                  <Image
                    src={imagen || "/placeholder.svg"}
                    alt={`Imagen ${index + 2} de ${noticia.titulo}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* MODAL PARA VER IMAGEN AMPLIADA */}
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
                  src={selectedImage}
                  alt="Imagen ampliada"
                  width={1200}
                  height={800}
                  className="max-h-[80vh] w-auto mx-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
