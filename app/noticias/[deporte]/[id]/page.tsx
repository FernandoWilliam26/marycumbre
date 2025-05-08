"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// Datos de ejemplo para las noticias
const noticias = {
  "salto-pasiego": {
    "noticia-1": {
      titulo: "Campeonato Regional de Salto Pasiego 2023",
      fecha: "15/07/2023",
      contenido: `
        <p>El pasado fin de semana se celebró en Vega de Pas el Campeonato Regional de Salto Pasiego con récord de participación. Más de 50 saltadores de todas las edades se dieron cita en esta tradicional competición que cada año gana más adeptos.</p>
        
        <p>La competición se desarrolló en un ambiente festivo y con gran afluencia de público. Los participantes demostraron una gran técnica y habilidad en los saltos, superando obstáculos de diversa dificultad.</p>
        
        <p>En la categoría senior masculina, el ganador fue Juan Martínez, de Vega de Pas, quien logró un salto de 5,8 metros, estableciendo un nuevo récord del campeonato. En la categoría femenina, María Gómez, de San Pedro del Romeral, se alzó con el triunfo tras realizar un impecable salto de 4,2 metros.</p>
        
        <p>Los organizadores se mostraron muy satisfechos con el desarrollo del evento y ya han anunciado que el próximo año se introducirán nuevas categorías para fomentar la participación de los más jóvenes.</p>
      `,
      imagenes: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    },
    "noticia-2": {
      titulo: "Exhibición de Salto Pasiego en la Feria de Tradiciones",
      fecha: "22/05/2023",
      contenido: `
        <p>Los mejores saltadores de la región realizaron una exhibición durante la Feria de Tradiciones Cántabras celebrada el pasado fin de semana en Santander. La demostración de salto pasiego fue uno de los eventos más esperados y aplaudidos por el público asistente.</p>
        
        <p>Durante la exhibición, los saltadores mostraron diferentes técnicas y estilos, explicando al público la historia y evolución de esta práctica tradicional. Además, se realizaron saltos sobre diferentes obstáculos, recreando situaciones que los pasiegos encontraban en su día a día en las montañas de Cantabria.</p>
        
        <p>La exhibición contó con la participación de saltadores de diferentes generaciones, desde veteranos con décadas de experiencia hasta jóvenes promesas que están aprendiendo las técnicas tradicionales.</p>
        
        <p>El evento sirvió también para promocionar el próximo Campeonato Regional que se celebrará en julio en Vega de Pas, y que este año espera contar con un número récord de participantes.</p>
      `,
      imagenes: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    },
    "noticia-3": {
      titulo: "Nuevas categorías juveniles en el Salto Pasiego",
      fecha: "10/04/2023",
      contenido: `
        <p>La Federación Cántabra ha anunciado la creación de nuevas categorías juveniles para fomentar el salto pasiego entre los más jóvenes. Esta iniciativa busca asegurar el relevo generacional en este deporte tradicional tan arraigado en la cultura de Cantabria.</p>
        
        <p>Las nuevas categorías incluirán competiciones para niños y niñas de entre 8 y 12 años, y de 13 a 16 años. Para estas categorías se adaptarán tanto las pértigas como las distancias y obstáculos, garantizando la seguridad de los participantes mientras aprenden las técnicas básicas.</p>
        
        <p>Además, se organizarán talleres y entrenamientos específicos para los más jóvenes, impartidos por saltadores veteranos que transmitirán sus conocimientos y experiencia a las nuevas generaciones.</p>
        
        <p>La primera competición con estas nuevas categorías se celebrará el próximo mes de junio en San Pedro del Romeral, coincidiendo con las fiestas locales.</p>
      `,
      imagenes: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    },
  },
  // Añadir más noticias para otros deportes siguiendo el mismo formato
}

export default function NoticiaPage() {
  const router = useRouter()
  const params = useParams()
  const deporte = params.deporte as string
  const id = params.id as string

  // Intentar obtener la noticia
  const noticia = noticias[deporte as keyof typeof noticias]?.[id as keyof (typeof noticias)[keyof typeof noticias]]

  if (!noticia) {
    return (
      <div className="container mx-auto px-4 py-16 text-center bg-emerald-50">
        <h1 className="text-2xl font-bold mb-4 text-emerald-700">Noticia no encontrada</h1>
        <Button onClick={() => router.back()} className="bg-emerald-600 hover:bg-emerald-700">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-emerald-50">
      <Button onClick={() => router.back()} className="mb-6 bg-emerald-600 hover:bg-emerald-700">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Button>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-emerald-700">{noticia.titulo}</h1>
        <p className="text-sm text-teal-600 mb-6">{noticia.fecha}</p>

        <div className="mb-8">
          <Image
            src={noticia.imagenes[0] || "/placeholder.svg"}
            alt={noticia.titulo}
            width={800}
            height={500}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div
          className="prose prose-lg max-w-none mb-8 text-gray-700"
          dangerouslySetInnerHTML={{ __html: noticia.contenido }}
        />

        {noticia.imagenes.length > 1 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 text-emerald-700">Más imágenes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {noticia.imagenes.slice(1).map((imagen, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={imagen || "/placeholder.svg"}
                    alt={`Imagen ${index + 2} de ${noticia.titulo}`}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
