import Link from "next/link"
import noticias from "@/app/data/noticias"

export default function NoticiasPage() {
  return (
    <div className="container mx-auto px-4 py-10 bg-emerald-50">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#049695]">Periódico marycumbre</h1>
      <p className="text-center text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
        Descubre las últimas noticias, reportajes y momentos inolvidables de los deportes tradicionales de Cantabria. 
        ¡La actualidad deportiva con sabor local, como nunca antes te la habían contado!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(noticias).map(([id, noticia]) => (
          <Link href={`/noticias/${id}`} key={id}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4 h-full">
              <img src={noticia.portada} alt={noticia.titulo} className="w-full h-48 object-cover rounded mb-4" />
              <h2 className="text-xl font-bold text-[#049695]">{noticia.titulo}</h2>
              <p className="text-sm text-gray-500 mb-2">{noticia.fecha}</p>
              <p className="text-gray-700">{noticia.resumen}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
