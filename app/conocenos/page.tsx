import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const equipo = [
  {
    nombre: "Alberto Fernández",
    rol: "Estudiante de Periodismo y Título de Experto en Relaciones Internacionales",
    descripcion: "",
    imagen: "/imagenes/conocenos/Alberto.jpeg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/alberto-fern%C3%A1ndez-cruz-b94377307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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
    rol: "Estudiante de Grado en Ingeniería Informática || Becario de desarrollo frontend en Soincon EMI Suite 4.0",
    descripcion: "",
    imagen: "/imagenes/conocenos/Borja.jpeg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/borja-antonio-mart%C3%ADnez-fern%C3%A1ndez-36109220a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    nombre: "Fernando William Calvo Méndez",
    rol: "Estudiante de Grado en Ingeniería Informática ||",
    descripcion: "",
    imagen: "/imagenes/conocenos/Fernando.jpg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/fernando-william-calvo-m%C3%A9ndez-95606a168?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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
    rol: "Estudiante en Universidad Europea del Atlántico || Becario en NTT Data",
    descripcion: "",
    imagen: "/imagenes/conocenos/Marcos.jpg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/marcos-de-blas-g%C3%B3mez-8065b3353/",
  },
  {
    nombre: "Rodrigo Villa",
    rol: "Estudiante de Grado en Ingeniería Informática || Becario en NTT DATA",
    descripcion: "",
    imagen: "/imagenes/conocenos/Rodrigo.jpg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/rodrigo-villa-p%C3%A9rez-b78491353/",
  },
]

export default function ConocenosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#049695]">Nuestro Equipo</h1>

      <div className="mb-8">
        <div className="relative w-[400px] h-[500px] mb-8 ml-auto mr-auto rounded-lg overflow-hidden shadow-lg">
          <Image
            src={"/imagenes/conocenos/AllGroup.jpeg"}
            alt={'AllGroup image'}
            fill
            className="object-cover aspect-square"
          />

        </div>
      </div>

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
                <CardTitle className="text-[#049695]">{miembro.nombre}</CardTitle>
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
        <h2 className="text-2xl font-bold mb-4 text-center text-[#049695]">Nuestra Misión</h2>
        <p className="text-lg text-center mb-0 text-gray-700">
          Nuestra misión es investigar, preservar y difundir los deportes tradicionales de Cantabria, contribuyendo a
          mantener vivo este importante patrimonio cultural. Trabajamos para documentar estas prácticas deportivas,
          promover su conocimiento entre las nuevas generaciones y fomentar su práctica como parte de un estilo de vida saludable y
          conectado con nuestras raíces.
        </p>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#049695]">¿Quieres colaborar con nosotros?</h2>
        <p className="text-lg mb-6 text-gray-700">
          Si tienes conocimientos sobre deportes tradicionales de Cantabria, fotografías históricas, testimonios o
          cualquier material que pueda enriquecer nuestro proyecto, nos encantaría contar con tu colaboración. Juntos
          podemos contribuir a preservar este valioso patrimonio.
        </p>
      </section>
    </div>
  )
}
