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
    imagen: "/imagenes/bolos/Fotos/JPG/IMG_6596copia.jpg?height=200&width=300",
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
      <section className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-700">Marycumbre</h1>
          <p className="text-lg mb-6 text-gray-700">
            Sumérgete en la esencia de Cantabria a través de su tradición deportiva, un reflejo de la pasión, la fuerza y el arraigo de su gente. Desde los antiguos 
            saltos pasiegos hasta las emocionantes regatas de traineras, cada disciplina cuenta una historia que sigue viva en el corazón de la región. 
          </p>
          <p className="text-lg mb-6 text-gray-700">
            En esta página encontrarás un recorrido por los deportes más representativos de Cantabria. También juegos autóctonos como el bolo palma, actividades de playa 
            como las palas y el fútbol playa, o deportes modernos que han encontrado en Cantabria un nuevo hogar como el ultimate. Acompáñanos y conoce un patrimonio 
            deportivo único que sigue latiendo con fuerza generación tras generación.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
          <div className="w-full max-w-[450px]">
            <Image
              src="/imagenes/logo/marycumbre.png?height=500&width=500"
              alt="Paisaje de Cantabria"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
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
