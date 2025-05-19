import { notFound } from "next/navigation"
import noticias from "@/app/data/noticias"
import Image from "next/image"

type Props = {
  params: { id: string }
}

export default function NoticiaPage({ params }: Props) {
  const noticia = noticias[params.id]

  if (!noticia) return notFound()

  return (
    <div className="container mx-auto px-4 py-8 bg-emerald-50">
      <article className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#049695]">{noticia.titulo}</h1>
        <p className="text-sm text-[#049695] mb-2">{noticia.fecha}</p>

        {noticia.portada && (
          <img src={noticia.portada} alt={noticia.titulo} className="rounded-lg shadow-md mb-6 w-full max-h-[400px] object-cover mx-auto" />
        )}

        <div
          className="prose prose-lg text-left max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: noticia.contenido }}
        />
      </article>

      {noticia.imagenes.length > 1 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-[#049695]">Más imágenes</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
            {noticia.imagenes.slice(1).map((imagen, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] h-[300px] overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 snap-center"
              >
                <img src={imagen} alt={`Imagen ${index + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
