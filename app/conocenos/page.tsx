import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const equipo = [
  {
    nombre: "Alberto Fernández",
    rol: "Periodista",
    descripcion: "",
    imagen: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/alberto-fernandez",
  },
  {
    nombre: "Antonio Sisniega",
    rol: "Periodista",
    descripcion: "",
    imagen: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/antonio-sisniega",
  },
  {
    nombre: "Javier Montes",
    rol: "Periodista",
    descripcion: "",
    imagen: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/javier-montes",
  },
  {
    nombre: "Mario Fuertes",
    rol: "Periodista",
    descripcion: "",
    imagen: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/mario-fuertes",
  },
  {
    nombre: "Borja Antonio Martínez",
    rol: "Informático",
    descripcion: "",
    imagen: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/borja-antonio-martinez",
  },
  {
    nombre: "Fernando William Calvo",
    rol: "Informático",
    descripcion: "",
    imagen: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/fernando-william-calvo",
  },
  {
    nombre: "Eduardo Lostal",
    rol: "Informático",
    descripcion: "",
    imagen: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/eduardo-lostal",
  },
  {
    nombre: "Marcos de Blas",
    rol: "Informático",
    descripcion: "",
    imagen: "/imagenes/conocenos/Marcos.jpg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/marcos-de-blas-g%C3%B3mez-8065b3353/",
  },
  {
    nombre: "Rodrigo Villa",
    rol: "Informático",
    descripcion: "",
    imagen: "/imagenes/conocenos/Rodrigo.jpg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/rodrigo-villa-p%C3%A9rez-b78491353/",
  },
]

export default function ConocenosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-emerald-700">Nuestro Equipo</h1>

      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-lg text-gray-700">
          Somos un equipo multidisciplinar de estudiantes apasionados por el deporte y las tradiciones de Cantabria.
          Nuestro objetivo es preservar, documentar y difundir el rico patrimonio deportivo de nuestra región,
          acercándolo tanto a los cántabros como a visitantes y curiosos de todo el mundo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {equipo.map((miembro, index) => (
          <a
            key={index}
            href={miembro.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="overflow-hidden border-emerald-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative w-full h-64 overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src={miembro.imagen || "/placeholder.svg"}
                  alt={miembro.nombre}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
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
          </a>
        ))}
      </div>

      <section className="bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-emerald-700">Nuestra Misión</h2>
        <p className="text-lg text-center mb-0 text-gray-700">
          Nuestra misión es investigar, preservar y difundir los deportes tradicionales de Cantabria, contribuyendo a
          mantener vivo este importante patrimonio cultural. Trabajamos para documentar estas prácticas deportivas,
          promover su conocimiento entre las nuevas generaciones y fomentar su práctica como parte de un estilo de vida saludable y
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
