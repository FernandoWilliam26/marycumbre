import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const deportes = [
  {
    id: "salto-pasiego",
    nombre: "Salto Pasiego",
    descripcion: "Tradicional salto con pértiga de los Valles Pasiegos",
    imagen: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "bolo-palma",
    nombre: "Bolo Palma",
    descripcion: "El juego de bolos más popular y extendido en Cantabria",
    imagen: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "ultimate",
    nombre: "Ultimate",
    descripcion: "Deporte de equipo jugado con un disco volador",
    imagen: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "palas",
    nombre: "Palas",
    descripcion: "Juego de playa tradicional con palas de madera",
    imagen: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "remo",
    nombre: "Remo",
    descripcion: "Deporte acuático tradicional en la costa cantábrica",
    imagen: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "futbol-playa",
    nombre: "Fútbol Playa",
    descripcion: "Variante del fútbol jugado en las playas de Cantabria",
    imagen: "/placeholder.svg?height=200&width=300",
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-700">Marycumbre</h1>
          <p className="text-lg mb-6 text-gray-700">
            Descubre la rica tradición deportiva de Cantabria, una región con un patrimonio cultural único que se
            refleja en sus deportes rurales y costeros. Desde los ancestrales saltos pasiegos hasta las emocionantes
            regatas de traineras, Cantabria ofrece un abanico de actividades deportivas que forman parte esencial de su
            identidad.
          </p>
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 transition-all duration-300">
            <Link href="/deporte/salto-pasiego">Explorar Deportes</Link>
          </Button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Paisaje de Cantabria"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-emerald-700">Nuestros Deportes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <section className="bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-4 text-center text-emerald-700">Tradición y Cultura</h2>
        <p className="text-lg text-center mb-6 text-gray-700">
          Los deportes tradicionales de Cantabria son mucho más que simples actividades físicas; son manifestaciones
          culturales que reflejan la historia, las costumbres y el carácter de sus gentes. A través de ellos, se
          transmiten valores como el esfuerzo, la superación y el trabajo en equipo.
        </p>
        <div className="flex justify-center">
          <Button
            asChild
            className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 transition-all duration-300"
          >
            <Link href="/conocenos">Conoce Nuestro Equipo</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
