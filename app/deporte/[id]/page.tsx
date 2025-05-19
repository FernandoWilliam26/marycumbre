"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { X } from "lucide-react"
import { useEffect } from "react"

const deportes = {
  "salto-pasiego": {
    nombre: "Salto pasiego",
    historia:
      "El salto pasiego es una técnica tradicional de los habitantes de los Valles Pasiegos en Cantabria. Utilizando un palo largo o 'cuatropea' como pértiga, los pasiegos saltaban sobre los arroyos, muros de piedra y terrenos accidentados mientras se desplazaban con sus ganados por las laderas montañosas. Esta práctica surgió como una necesidad para moverse por el terreno escarpado de la región, y con el tiempo se convirtió en una habilidad distintiva y en una competición deportiva.",
    reglas:
      "En la competición moderna de salto pasiego, los participantes utilizan una pértiga de madera de avellano de unos 3 metros de longitud. El objetivo es superar obstáculos o distancias horizontales, apoyando la pértiga en el suelo y elevándose para salvar el obstáculo. Se valora tanto la distancia alcanzada como la técnica y el estilo del saltador. Las competiciones suelen organizarse en diferentes categorías según la edad y experiencia de los participantes.",
    imagenes: [
      "/imagenes/salto/Fotos/image.png",
      "/imagenes/salto/Fotos/image4.png",
      "/imagenes/salto/Fotos/BorjafotoPasiego.jpg?height=200&width=300",
      "/imagenes/salto/Fotos/image5.png",
      "/imagenes/salto/Fotos/image6.png",
      "/imagenes/salto/Fotos/image2.jpg",
      "/imagenes/salto/Fotos/image3.png",
      "/imagenes/salto/Fotos/image9.png",
      "/imagenes/salto/Fotos/image7.png",
      "/imagenes/salto/Fotos/image8.png",

    ],
    imagenesPortada: [
      "/imagenes/salto/Fotos/image.png",
      "/imagenes/salto/Fotos/BorjafotoPasiego.jpg?height=200&width=300",
      "/imagenes/salto/Fotos/image5.png",
      "/imagenes/salto/Fotos/image2.jpg",
      "/imagenes/salto/Fotos/image7.png",
    ],
    noticias: [
    ],
    enlacesTexto: {
      "": ""
    }
  },
  "bolo-palma": {
    nombre: "Bolo palma",
    historia:`
      <p>El bolo palma es una modalidad de los bolos tradicional cántabra, este deporte se practica en todas partes de España dónde se encuentran distintas peñas balísticas fundadas por gente de la Tierruca que está viviendo fuera, sobretodo en Madrid, País Vasco, Cataluña , Valencia y Castilla y León aunque también hay algunas peñas pequeñas en Mallorca o Murcia.</p>
      <p>En cuanto a los orígenes la primera referencia que hay sobre esta modalidad es de 1627 cuando el alcalde de Santander prohibió su práctica en la calle, pero fue a finales del Siglo XIX cuando se empezaron a mover los principios para la formalización de un reglamento conjunto para toda la región. El 14 de septiembre de 1914 en la localidad de Torrelavega nació la Federación Bolística Montañesa pero no duraría mucho ya que pasado el año hubo conflictos entre santanderinos y torrelaveguenses.</p>
      <p>En 1941 por fin se creó la definitiva Real Federación Española con D.Antonio Gorordo como presidente. La primera sede fue en el Café Boulevard de Santander. Actualmente la sede se encuentra en el Complejo Municipal Ruth Beitia de La Albericia.</p>
      <p>A partir de los años 50 se instauró el plano competitivo, el primer Campeonato de España. En ese campeonato se forjaron leyendas como Pedro Lanza, Antonio Saiz “El Bolo” u Óscar González, unos de los mejores de la historia. Víctor González es el mejor jugador del momento y una vez que se retire también entrará en este olimpo, aunque está claro que él ya es uno de los jugadores más importantes en este deporte.</p>
      <p>Otro de los hitos más importantes en la historia de este deporte fue la construcción de boleras cubiertas que empezaron a inaugurarse a partir del año 1980. Esto fue un gran paso para poder continuar con la actividad durante todo el año a pesar de las circunstancias meteorológicas.</p>
      <p>En los tiempos más recientes cabe destacar la declaración de Bolo Palma como Bien de Interés Cultural Inmaterial de Cantabria en 2015, un reconocimiento de valor histórico, social y cultural.</p>
      <p>En la actualidad el deporte está en horas bajas respecto a la popularidad del mismo, un gran problema es que la media de edad de los espectadores es elevada y no está llegando a enganchar a las nuevas generaciones. Esto hace que el deporte empiece a estar en peligro de extinción. Desde los estamentos se está buscando dar a conocer el deporte con distintas medidas como charlas en colegios, excursiones a boleras o la inclusión del deporte en la materia de Educación Física en colegios e institutos.</p>

     `,
    reglas: `
      <p><strong>1. Dos equipos con 4 jugadores cada uno.</strong></p>
      <ul class="list-disc pl-6">
        <li><strong>Fase 1 (Tiro):</strong> Cada jugador lanza dos bolas desde el fondo de la bolera.</li>
        <li><strong>Fase 2 (Birle):</strong> Una vez se lanzan las 8 bolas los 4 jugadores las vuelven a tirar (birlar) desde el punto en el que se haya quedado la bola.</li>
      </ul>

      <p><strong>2. El partido se divide en 6 mangas llamadas “chicos”. ¿Cómo se consiguen los “chicos”? Cada “chico” se puede resolver de dos maneras:</strong></p>
      <ul class="list-disc pl-6">
        <li>Si en la primera ronda alguno de los equipos llega a 40 obliga al otro a hacer más bolos.</li>
        <li>Si en la primera ronda ninguno llega a los 40 bolos se hace una segunda tanda y al finalizar se suman los bolos tirados en ambas y gana el que más haya tirado.Si empatasen se haría otra ronda.</li>
        <li><strong>Ejemplo:</strong> El equipo 1 tira 35 bolos en la primera ronda y el equipo 2 hace 37. En la segunda ronda el equipo 1 tira 38 (35+38=73) entonces el equipo 2 para ganar necesitaría hacer 36 bolos (37+37=74).</li>
      </ul>

      <p><strong>3. ¿Cuál es el valor de cada bolo?</strong></p>
      <ul class="list-disc pl-6">
        <li>Cada bolo cuenta como 1 excepto si solo se derriba el bolo central que el valor de este sería 2. <strong>Ejemplo:</strong> Cuarta publicación</li>
        <li>En la fase 1 (Tiro) los jugadores pueden sumar bolos adicionales (Pueden ser 10, 20 o más) si con la bola derriba un bolo y luego la bola va por dentro del emboque o se derriba. El Emboque es un bolo pequeño que se coloca a un costado del cajón.</li>
        <li>Si no se derriba ningún bolo se suman 0 puntos pero la bola sigue siendo válida para luego jugar con ella en el “birle”. Esto se denomina en forma coloquial como “coneja”.</li>
      </ul>

      <p><strong>4. ⁠¿Todas las bolas son válidas? NO:</strong></p>
      <ul class="list-disc pl-6">
        <li><strong>Bola nula:</strong> cuando en la fase de “tiro” la bola no bota entre la raya marcada por el árbitro y el primer bolo la bola queda inhabilitada.</li>
        <li><strong>Bola queda:</strong> si la bola no pasa la raya posterior al cajón de bolos la bola también queda inhabilitada.</li>
      </ul>
    `,
    imagenes: [
      "/imagenes/bolos/Fotos/JPG/IMG_6564.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6565.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6566.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6567.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6572.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6573.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6574.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6591.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6595.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6597.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6599.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6602.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6603.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6604.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6605.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6610.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6653.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6655.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6656.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6658.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6667.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6668.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6675.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6676.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6678.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6680.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6695.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6697.jpg?height=300&width=400",
    ],
    imagenesPortada: [
      "/imagenes/bolos/Fotos/JPG/IMG_6564.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6565.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6595.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6597.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6599.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6602.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6603.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6604.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6605.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6653.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6656.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6667.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6668.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6675.jpg?height=300&width=400",
      "/imagenes/bolos/Fotos/JPG/IMG_6697.jpg?height=300&width=400",
    ],
    noticias: [
      {
        id: "noticia-1",
        titulo: "Peñacastillo se queda a las puertas de la remontada",
        fecha: "05/04/2025",
        resumen:
          "El encuentro entre Peñacastillo y Borbolla concluyó con un 3-3 que no deja satisfecho a ninguno.",
      },
    ],
    enlacesTexto: {
      "Víctor González": "/perfiles/victor-gonzalez",
      "Federación Bolística Montañesa": "https://maderadeser.com/informacion/publicaciones/publicacion/federacion-bolistica-montanesa/",
      "Complejo Municipal Ruth Beitia": "https://www.santanderdeportes.com/static.php?c=8"
    }
  },
  ultimate: {
    nombre: "Ultimate",
    historia:`
      <p>Aunque el Ultimate no es un deporte tradicional de Cantabria, ha ganado popularidad en la región en las últimas décadas. Este deporte fue inventado en Estados Unidos en la década de 1960 y llegó a España en los años 80. En Cantabria, comenzó a practicarse en 2005. Con el tiempo, se han formado clubes locales y se organizan torneos regulares, especialmente en la modalidad de playa, aprovechando el litoral cántabro.</p>
      <p>Actualmente el único equipo en activo es Corocotta Ultimate Cantabria. El club ha conseguido obtener varios campeonatos de España a lo largo de su historia y es considerado uno de los mejores clubes de España. También ha participado en competiciones europeas e internacionales, destacando un cuarto puesto en un europeo (EBUCC 2023) y una gran participación en el mundial de clubes (WBUCC 2024). Hemos hablado con Willy, Adrián y Natalia sobre el deporte y el futuro del club.</p>
    `,
    reglas: `
      <h3><strong>1. Objetivo del juego</strong></h3>
      <ul class="list-disc pl-6">
        <li>Dos equipos de 5 jugadores cada uno intentan anotar puntos lanzando un disco volador (frisbee) entre ellos.</li>
        <li>El objetivo es atrapar el disco dentro de la zona de anotación del equipo contrario para anotar un punto.</li>
      </ul>

      <h3><strong>2. Inicio del juego</strong></h3>
      <ul class="list-disc pl-6">
        <li>Cada punto comienza con un saque llamado <em>'pull'</em>, donde el equipo defensor lanza el disco al equipo atacante.</li>
      </ul>

      <h3><strong>3. Movimiento del disco</strong></h3>
      <ul class="list-disc pl-6">
        <li>El disco no se puede correr. El jugador que lo tiene debe mantener un pie de pivote y solo puede pasarlo.</li>
        <li>Tiene 10 segundos para lanzar el disco. Un defensor (marker) cuenta en voz alta.</li>
      </ul>

      <h3><strong>4. Cambio de posesión</strong></h3>
      <ul class="list-disc pl-6">
        <li>Si el disco cae al suelo, es interceptado, sale fuera o se agota el tiempo, la posesión pasa al otro equipo.</li>
      </ul>

      <h3><strong>5. Anotación</strong></h3>
      <ul>
        <li>Se anota un punto si un jugador atrapa el disco dentro de la zona de anotación rival. Luego los equipos cambian de lado.</li>
      </ul>

      <h3><strong>6. Contacto físico</strong></h3>
      <ul class="list-disc pl-6">
        <li>Está prohibido. Cualquier contacto se considera falta. El Ultimate es un deporte sin contacto.</li>
      </ul>

      <h3><strong>7. Espíritu del juego</strong></h3>
      <ul class="list-disc pl-6">
        <li>No hay árbitros oficiales. Los jugadores hacen cumplir las reglas con honestidad, fomentando el respeto mutuo.</li>
      </ul>
    `,
    imagenes: [
    "/imagenes/ultimate/Fotos/IMG_3891.JPG?height=300&width=400",
    "/imagenes/ultimate/Fotos/IMG_3900.JPG?height=300&width=400",
    "/imagenes/ultimate/Fotos/IMG_3912.JPG?height=300&width=400",
    "/imagenes/ultimate/Fotos/IMG_3913.JPG?height=300&width=400",
    "/imagenes/ultimate/Fotos/IMG_3914.JPG?height=300&width=400",
    "/imagenes/ultimate/Fotos/IMG_4724.jpg?height=300&width=400",
    "/imagenes/ultimate/Fotos/IMG_6810.jpg?height=300&width=400",
    "/imagenes/ultimate/Fotos/IMG_6813.jpg?height=300&width=400",
    "/imagenes/ultimate/Fotos/IMG_6823.jpg?height=300&width=400",
    "/imagenes/ultimate/Fotos/IMG_6838.jpg?height=300&width=400",
    "/imagenes/ultimate/Fotos/IMG_6844.jpg?height=300&width=400",
    "/imagenes/ultimate/Fotos/IMG_6793.jpg?height=300&width=400",
    "/imagenes/ultimate/Fotos/IMG_6795.jpg?height=300&width=400",
    ],
    imagenesPortada: [
      "/imagenes/ultimate/Fotos/IMG_3891.JPG?height=300&width=400",
      "/imagenes/ultimate/Fotos/IMG_3900.JPG?height=300&width=400",
      "/imagenes/ultimate/Fotos/IMG_3912.JPG?height=300&width=400",
      "/imagenes/ultimate/Fotos/IMG_6823.jpg?height=300&width=400",
      "/imagenes/ultimate/Fotos/IMG_6838.jpg?height=300&width=400",
    ],
    noticias: [
    ],
    enlacesTexto: {
      "Willy": "/perfiles/Willy",
      "Adrián": "/perfiles/Adrian",
      "Natalia": "/perfiles/Natalia",
      "Corocotta Ultimate Cantabria": "https://corocotta.es/quienes-somos/",
      "EBUCC 2023": "https://live.ebucc.eu/scores2023/team/mixed/corocotta-97?view=live/index",
      "WBUCC 2024": "https://wbucc.org/"
    }
  },
  palas: {
    nombre: "Palas",
    historia:`
      <p>Las palas cántabras son un deporte tradicional muy arraigado en la costa de Cantabria,especialmente en playas como El Sardinero en Santander, Comillas, Suances o Laredo.Aunque su origen exacto no está perfectamente documentado, se sabe que este juego se practica en Cantabria desde 1927.</p>
      <p>Se empieza a jugar con unos chavales que son los 'Cinco de Ribalaygua' que eran un grupo de empleados en los almacenes de Ribalaygua que se construyeron unas palas de madera y empiezan jugando en la orilla de la playa de El Sardinero.</p>
      <p>En la orilla era donde se empezó a practicar pero poco a poco fue evolucionando y cada veziban subiendo más.</p>
      <p>En 1965 jugar a las palas ya era un éxito en Cantabria y así se puede ver en fotos de la época en las que las playas estaban abarrotadas de gente jugando.</p>
      <p>Hasta el momento uno de los hitos más importantes de la historia de las palas cántabras fue en 2017 cuando de la mano de la Escuela de Palas Cántabra y de José Manuel Torres se organizó el Campeonato Mundial de Palas celebrado en la Segunda Playa de El Sardinero. Participaron 1103 personas de 60 países distintos durante 80 horas seguidas de actividad.</p>
      <p>En 2 años se cumplirá un siglo de vida de este deporte en la región y el objetivo que tiene la Escuela y José Manuel es celebrarlo con una segunda edición del campeonato aún más grande en el que se lleguen a jugar hasta 100 horas seguidas.</p>
    `,
    reglas:`
      <p><strong>FORMATO</strong></p>
      <ul class="list-disc pl-6">
        <li>Respecto a la evolución del deporte, antiguamente solo se jugaba 1 vs 1 y actualmente es muy frecuente ver partidas de 3 jugadores donde uno para y dos pegan, y partidas de 4 donde 2 paran y 2 pegan.</li>
      </ul>

      <p><strong>DISTANCIA</strong></p>
      <ul class="list-disc pl-6">
        <li>Otro cambio relevante ha sido la distancia que con el paso de los años ha evolucionado, antiguamente los jugadores solían colocarse a una distancia mayor, sin embargo esta distancia ha ido disminuyendo progresivamente.</li>
      </ul>

      <p><strong>MATERIALES</strong></p>
      <ul class="list-disc pl-6">
        <li>Las palas antiguamente pesaban el doble que las de ahora y en España sus materiales están compuestos por un 90% de madera lo que las sigue haciendo bastante pesadas. Sin embargo, en otros países como Brasil o Israel las palas son muy ligeras debido a que están fabricadas con fibra de carbono lo que hace que su peso sea de aproximadamente 200 gramos. En España también se están fabricando palas más ligeras, entre los 350 y 450 gramos pero las tradicionales cántabras rondan los 600 gramos.</li>
      </ul>
      `,
    imagenes: [
      "/imagenes/palas/Fotos/Screenshot_20250518_183828_Gallery.jpg?height=300&width=400",
      "/imagenes/palas/Fotos/Screenshot_20250518_183803_Gallery.jpg?height=300&width=400",
      "/imagenes/palas/Fotos/IMG_7114.jpg?height=300&width=400",
      "/imagenes/palas/Fotos/Screenshot_20250518_183826_Gallery.jpg?height=300&width=400",
      "/imagenes/palas/Fotos/Screenshot_20250518_183831_Gallery.jpg?height=300&width=400",
    ],
    imagenesPortada: [
      "/imagenes/palas/Fotos/Screenshot_20250518_183820_Gallery.jpg?height=300&width=400",
      "/imagenes/palas/Fotos/IMG_7112.jpg?height=300&width=400",
      "/imagenes/palas/Fotos/Screenshot_20250518_183734_Gallery.jpg?height=300&width=400",
      "/imagenes/palas/Fotos/Screenshot_20250518_183727_Gallery.jpg?height=300&width=400",
      "/imagenes/palas/Fotos/IMG_7115.jpg?height=300&width=400",
    ],
    noticias: [
    ],
    enlacesTexto: {
      "José Manuel Torres": "/perfiles/jose-manuel-torres",
      "Escuela de Palas Cántabra": "http://escueladepalas.com/",
      "Campeonato Mundial de Palas": "https://www.santander.es/content/jugadores-veintena-paises-disputaran-mundial-palas-santander-2017"
    }
  }
}

export default function DeportePage() {
  const params = useParams()
  const id = params.id as string
  const deporte = deportes[id as keyof typeof deportes]
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const insertarEnlaces = (texto: string, mapaEnlaces: Record<string, string> = {}): string => {
    let textoModificado = texto

    Object.entries(mapaEnlaces).forEach(([palabra, url]) => {
      const isInternal = url.startsWith("/")
      const enlace = isInternal
        ? `<a href="${url}" class="text-blue-600 underline hover:text-blue-800">${palabra}</a>`
        : `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800">${palabra}</a>`

      const palabraEscapada = palabra.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
      const regex = new RegExp(`\\b${palabraEscapada}\\b`, "g")

      textoModificado = textoModificado.replace(regex, enlace)
    })

    return textoModificado
  }

  useEffect(() => {
    if (!deporte || !deporte.imagenesPortada || deporte.imagenesPortada.length === 0) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % deporte.imagenesPortada.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [deporte])


  if (!deporte) {
    return <div className="container mx-auto px-4 py-16 text-center">Deporte no encontrado</div>
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-emerald-50">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#049695]">{deporte.nombre}</h1>

      <div className="mb-12">
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden shadow-lg">
          {deporte.imagenesPortada.length > 0 && (
            <Image
              src={deporte.imagenesPortada[currentSlide]}
              alt={`${deporte.nombre} portada ${currentSlide + 1}`}
              fill
              className="object-cover transition-opacity duration-1000"
              key={currentSlide}
            />
          )}
        </div>
      </div>

      <section className="mb-12 bg-gradient-to-r from-emerald-100 to-teal-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4 text-[#049695]">Historia</h2>
        <div
          className="prose prose-2xl text-gray-700"
          dangerouslySetInnerHTML={{
            __html: insertarEnlaces(deporte.historia, deporte.enlacesTexto || {})
          }}
        />
      </section>

      <section className="mb-12 bg-gradient-to-r from-teal-100 to-emerald-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-4 text-[#049695]">Reglas básicas</h2>
        <div
          className="prose prose-2xl text-gray-700"
          dangerouslySetInnerHTML={{ __html: deporte.reglas }}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#049695]">Galería de imágenes</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory">
          {deporte.imagenes.map((imagen, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] h-[300px] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer snap-center"
              onClick={() => setSelectedImage(imagen)}
            >
              <Image
                src={imagen || "/placeholder.svg"}
                alt={`${deporte.nombre} imagen ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal para ver imágenes en pantalla completa */}
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
                src={selectedImage || "/placeholder.svg"}
                alt="Imagen ampliada"
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
