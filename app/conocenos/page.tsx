import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const equipo = [
  {
    nombre: "Ana García",
    rol: "Directora del Proyecto",
    descripcion:
      "Historiadora especializada en tradiciones cántabras con más de 15 años de experiencia en la investigación de deportes rurales.",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Carlos Martínez",
    rol: "Investigador Principal",
    descripcion:
      "Doctor en Antropología Cultural, centrado en el estudio de las manifestaciones deportivas tradicionales del norte de España.",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Elena Fernández",
    rol: "Coordinadora de Contenidos",
    descripcion:
      "Periodista deportiva con amplia experiencia en la cobertura de competiciones de deportes tradicionales.",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Miguel Sánchez",
    rol: "Fotógrafo",
    descripcion: "Fotógrafo profesional especializado en eventos deportivos y culturales de Cantabria.",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Laura Pérez",
    rol: "Diseñadora Web",
    descripcion:
      "Diseñadora UX/UI con pasión por la cultura cántabra y experiencia en proyectos de divulgación cultural.",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Javier López",
    rol: "Desarrollador Frontend",
    descripcion: "Ingeniero informático especializado en desarrollo web con React y tecnologías modernas.",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Sofía Ruiz",
    rol: "Desarrolladora Backend",
    descripcion: "Programadora con experiencia en arquitectura de sistemas y bases de datos para proyectos culturales.",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Daniel Torres",
    rol: "Especialista en 3D",
    descripcion:
      "Modelador 3D y animador con experiencia en la recreación virtual de elementos deportivos y culturales.",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Patricia Gómez",
    rol: "Community Manager",
    descripcion:
      "Experta en redes sociales y comunicación digital, apasionada de los deportes tradicionales cántabros.",
    imagen: "/placeholder.svg?height=300&width=300",
  },
]

export default function ConocenosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-emerald-700">Nuestro Equipo</h1>

      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-700">
          Somos un equipo multidisciplinar de profesionales apasionados por la cultura y las tradiciones de Cantabria.
          Nuestro objetivo es preservar, documentar y difundir el rico patrimonio deportivo de nuestra región,
          acercándolo tanto a los cántabros como a visitantes y curiosos de todo el mundo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {equipo.map((miembro, index) => (
          <Card
            key={index}
            className="overflow-hidden border-emerald-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={miembro.imagen || "/placeholder.svg"}
                alt={miembro.nombre}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-emerald-700">{miembro.nombre}</CardTitle>
              <CardDescription className="font-medium">{miembro.rol}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{miembro.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-emerald-700">Nuestra Misión</h2>
        <p className="text-lg text-center mb-0 text-gray-700">
          Nuestra misión es investigar, preservar y difundir los deportes tradicionales de Cantabria, contribuyendo a
          mantener vivo este importante patrimonio cultural. Trabajamos para documentar estas prácticas deportivas,
          promover su conocimiento entre las Trabajamos para documentar estas prácticas deportivas, promover su
          conocimiento entre las nuevas generaciones y fomentar su práctica como parte de un estilo de vida saludable y
          conectado con nuestras raíces.
        </p>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-700">¿Quieres colaborar con nosotros?</h2>
        <p className="text-lg mb-6 text-gray-700">
          Si tienes conocimientos sobre deportes tradicionales de Cantabria, fotografías históricas, testimonios o
          cualquier material que pueda enriquecer nuestro proyecto, nos encantaría contar con tu colaboración. Juntos
          podemos contribuir a preservar este valioso patrimonio.
        </p>
      </section>
    </div>
  )
}
