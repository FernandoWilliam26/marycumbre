import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import DiskWithImage from "@/components/DiskImage3D"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const deportes = [
  {
    id: "salto-pasiego",
    nombre: "Salto pasiego",
    descripcion: "Tradicional salto con pértiga de los Valles Pasiegos",
    imagen: "/imagenes/salto/Fotos/BorjafotoPasiego.jpg?height=200&width=300",
  },
  {
    id: "bolo-palma",
    nombre: "Bolo palma",
    descripcion: "El juego de bolos más popular y extendido en Cantabria",
    imagen: "/imagenes/bolos/Fotos/JPG/IMG_6596copia.jpg?height=200&width=300",
  },
  {
    id: "ultimate",
    nombre: "Ultimate",
    descripcion: "Deporte de equipo jugado con un frisbee",
    imagen: "/imagenes/ultimate/Fotos/IMG_6823.jpg?height=200&width=300",
  },
  {
    id: "palas",
    nombre: "Palas",
    descripcion: "Juego de playa tradicional con palas de madera",
    imagen: "/imagenes/palas/Fotos/Screenshot_20250518_183826_Gallery.jpg?height=300&width=400",
  }
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#049695]">Marycumbre</h1>
          <p className="text-lg mb-6 text-gray-700">
            Sumérgete en la esencia de Cantabria a través de su tradición deportiva, un reflejo de la pasión, la fuerza y el arraigo de su gente. Cada disciplina cuenta una historia que sigue viva en el corazón de la región.
          </p>
          <p className="text-lg mb-6 text-gray-700">
            En esta página encontrarás un recorrido por los deportes más representativos de Cantabria. También juegos autóctonos como el bolo palma, actividades de playa
            como las palas, o deportes modernos que han encontrado en Cantabria un nuevo hogar como el ultimate. Acompáñanos y conoce un patrimonio
            deportivo único que sigue latiendo con fuerza generación tras generación.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
          <DiskWithImage imageUrl="/imagenes/logo/marycumbre.png" />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#049695]">Nuestros deportes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {deportes.map((deporte) => (
            <Link href={`/deporte/${deporte.id}`} key={deporte.id} className="block">
              <Card className="overflow-hidden border-emerald-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer h-full">
                <Image
                  src={deporte.imagen || "/placeholder.svg"}
                  alt={deporte.nombre}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <CardHeader>
                  <CardTitle className="text-emerald-700">{deporte.nombre}</CardTitle>
                  <CardDescription>{deporte.descripcion}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-12 mb-4">
        <h2 className="text-3xl font-bold text-center text-[#049695]">Documental</h2>

        <div className="w-full aspect-video max-w-4xl">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/ocXDkqFd_AU?start=27"
            title="Documental Salto Pasiego - Mar y Cumbre"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>



      <section className="bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center text-[#049695]">Tradición y cultura</h2>
        <p className="text-lg text-center mb-6 text-gray-700">
          Los deportes tradicionales de Cantabria son mucho más que simples actividades físicas; son manifestaciones
          culturales que reflejan la historia, las costumbres y el carácter de sus gentes. A través de ellos, se
          transmiten valores como el esfuerzo, la superación y el trabajo en equipo.
        </p>
        <div className="flex justify-center">
          <Button
            asChild
            className="bg-[#049695] hover:bg-[#0e6868] transition-all duration-300"
          >
            <Link href="/conocenos">Conoce nuestro equipo</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
