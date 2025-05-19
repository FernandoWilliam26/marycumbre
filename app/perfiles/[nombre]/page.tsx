"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const perfiles = {
  "victor-gonzalez": {
    nombre: "Víctor González",
    resumen: "",
    contenido: `
      <h2 class="text-2xl font-bold mb-4">“Los tiempos han cambiado mucho, no es como hace años que todo el mundo se reunía en la bolera”</h2>

      <p class="mb-4">Víctor González Fernández es considerado el mejor jugador del mundo en la actualidad y uno de los mejores de la historia, nacido el 8 de julio de 1994 en Santander, Cantabria. Juega en Peña Bolística Peñacastillo con los que ha ganado 7 campeonatos.</p>

      <p class="mb-4">Desde joven Víctor fue impulsado por su familia quienes le inculcaron su pasión por los bolos. A los 7 años comenzó a jugar en la Escuela de Astillero, continuó en Anievas y más tarde se unió a Peñacastillo.</p>

      <h3 class="text-xl font-semibold mt-8 mb-2">Una charla tras el partido</h3>
      <p class="mb-4">Tuvimos la oportunidad de charlar con él en el Mateo Grijuela al <a href="/noticias/noticia-1" class="text-[#049695] font-semibold underline hover:text-[#0e6868] transition-colors">
      finalizar su partido contra Hermanos Borbolla</a>.</p>
      <p class="mb-4">Para comenzar nos habló del día a día de un jugador de bolos profesional: “son días totalmente normales, no es ningún deportista de élite”, añadió que trabaja por las mañanas y entrena 2 o 3 días a la semana más un día de partido. En verano, entre torneos y competiciones individuales, “el verano lo tenemos muy corto y no puedes disfrutar casi de él porque todas las competiciones son en verano”. Su temporada va de marzo a octubre.</p>

      <p class="mb-4"> Vivir de los bolos no es posible actualmente. Según nos contó, algunos jugadores de alto nivel consiguen contratos importantes y premios individuales, pero los ingresos de televisión son casi inexistentes. La mayor parte del dinero proviene de los patrocinadores, con alguna ayuda del Gobierno de Cantabria.</p>

      <p class="mb-4">“El futuro de los bolos fue otro tema del que se habló y nos comentó sobre cómo cree que evolucionará el deporte “está claro que este deporte ha envejecido mucho y hay menos afición debido a que la gente mayor va faltando por desgracia” “los tiempos han cambiado mucho, no es como hace años que todo el mundo se reunía en la bolera” nos comentaba también que ahora mucha gente no sabe ni qué son los bolos. Las medidas que se están tomando para intentar rejuvenecer el deporte es ir a los colegios a darlo a conocer, que los niños jueguen, lo conozcan y no solo un día sino durante todo un trimestre. Para Víctor lo más importante es entenderlo.
”.</p>

      <p class="mb-4">En los últimos tiempos mucha gente a raíz de la asociación del Racing de Santander con equipos de baloncesto y kárate está solicitando la creación de un equipo de bolos asociado con el club santanderino. Esto opinaba Víctor sobre el tema “Hace años ya hubo un equipo del Racing y es algo bueno porque tienen muchos aficionados y se podría dar a conocer”.</p>

      <p class="mb-4">Víctor es uno de los jugadores con mayor palmarés en la historia de los bolos aún así sigue teniendo mucha motivación para seguir superándose, “volver a repetir lo del año pasado es un reto, es muy difícil pero acercarnos sería hacer una gran temporada” la temporada pasada fue muy exitosa para Víctor y para su equipo e igualarlo o acercarse a ello es su objetivo. Individualmente está a las puertas de conseguir otro récord, el de 5 campeonatos seguidos ya que lleva 4 pero declara que él no se centra en eso “quiero vivir el día a día con el equipo, intentar ganar y lo individual irá llegando”.</p>

      <h3 class="text-xl font-semibold mt-10 mb-2">📜 Palmarés</h3>
      <ul class="list-disc pl-6 space-y-1 text-gray-800">
        <li>Peñas: Peñacastillo (16), EB Peñacastillo (1), EB Toño Gómez (3), EB El Astillero</li>
        <li>7 Ligas ganadas / 13 jugadas (Máx. Categ.)</li>
        <li>11 Copas (3 Copas Cantabria + 2 Copas F.E.B. + 2 Copas Apebol + 4 Supercopas)</li>
        <li>6 Campeonatos Nacionales de Peñas por Parejas de 1ª Categoría</li>
        <li>6 Campeonatos Regionales de Peñas por Parejas de 1ª Categoría</li>
        <li>5 Campeonatos Nacionales Individuales de 1ª Categoría</li>
        <li>4 Campeonatos Regionales Individuales de 1ª Categoría</li>
        <li>5 Circuitos de Puntos de 1ª Categoría</li>
        <li>6 Circuitos de Bolos de 1ª Categoría</li>
        <li>157 Concursos ganados de 1ª Categoría Individual</li>
        <li>7 Veces Selección Española</li>
        <li>5 Veces Selección Cántabra</li>
        <li>8 Veces Maestro</li>
        <li>4 Campeonatos Nacionales Sub-23</li>
        <li>1 Campeonato Regional de Peñas por Parejas de 3ª Categoría</li>
        <li>1 Campeonato Nacional Individual de 3ª Categoría</li>
        <li>1 Campeonato Nacional Individual de Categoría Juvenil</li>
        <li>1 Campeonato Nacional Individual de Categoría Cadete</li>
        <li>2 Campeonatos Regionales Individuales de Categoría Cadete</li>
        <li>1 Campeonato Regional Individual de Categoría Alevín</li>
        <li>Récord Cpto. de España 1ª = 757 (Santander, 2021)</li>
        <li>Récord Cpto. Regional 1ª = 751 (Cueto, 2018)</li>
        <li>Récord Circuito de Bolos = 144,00 (2021)</li>
        <li>Récord Cpto. Nacional Parejas 1ª (4v.) = 1.124 (Pancar, 2023, con Rubén Haya)</li>
        <li>Récord Cpto. Nacional 3ª = 666 (Colombres, 2010)</li>
        <li>Récord Cpto. Regional Cadete = 724 (Noja, 2009)</li>
        <li>Récord Cpto. Regional Universitario = 432 (Cueto, 2014)</li>
        <li>1 Campeonato Regional Universitario</li>
        <li>2 Liga Infantil (2007 y 2008)</li>
        <li>1 Liga Alevín (2006)</li>
        <li>3 Premio Bolístico Gala Deporte de Cantabria (2018, 2021 y 2023)</li>
      </ul>
    `,
    imagen: "/imagenes/perfiles/victorgonzalez.jpg"
  },
  "jose-manuel-torres": {
    nombre: "José Manuel Torres",
    resumen: "",
    contenido: `

      <p class="mb-4">
        José Manuel Torres, nacido en Burgos, es un deportista y empresario muy vinculado con
         el deporte de las palas en Cantabria. Torres ha
        dedicado más de una década a jugar a las palas, en los últimos años se ha involucrado
        profundamente en su profesionalización y expansión. Es fundador y presidente de la
        Escuela de Palas Cántabra, una entidad clave en la organización de eventos y en la
        difusión de este deporte tanto a nivel local como internacional.
      </p>

      <h3 class="text-xl font-semibold mt-8 mb-2">El Mundial de palas de 2017</h3>

      <p class="mb-4">
        En 2017, fue uno de los principales impulsores del Campeonato Mundial de Palas
        celebrado en la Segunda Playa del Sardinero en Santander. Este evento reunió a los cien
        mejores jugadores del mundo y buscó batir varios récords, como reunir a 1103 personas
        jugando simultáneamente, jugar durante 80 horas seguidas y contar con participantes de
        más de 60 nacionalidades.
      </p>

      <h3 class="text-xl font-semibold mt-8 mb-2">Innovación en el deporte</h3>

      <p class="mb-4">
       José Manuel también ha sido pionero en la organización de eventos de palas de gran nivel a escala internacional, 
       logrando reunir jugadores de varios países, y además batiendo recórds nunca antes logrados.
      </p>

      <h3 class="text-xl font-semibold mt-8 mb-2">Visión y sueños para el futuro</h3>

      <p class="mb-4">
        Hemos tenido la suerte de poder charlar con él para conocer mejor la historia de las palas, sus reglas y su futuro.
      </p>

      <p class="mb-4">
        Recuerda que en menos de dos años se cumplirá un siglo desde los primeros inicios de las palas en la región. Para celebrarlo, sueña con organizar un nuevo gran torneo mundial en Santander que supere al de 2017. El reto: batir el récord de personas jugando simultáneamente y alcanzar las 100 horas seguidas de juego para conmemorar los 100 años de historia.
      </p>

      <p class="mb-4">
        Uno sus sueños es que las palas se convierta en “patrimonio inmaterial de la ciudad” y
        recuerda que en menos de 2 años se cumplirá un siglo desde los primeros inicios de las
        palas en la región y les gustaría superarse con un nuevo gran torneo mundial en Santander
        que superasen el ya creado en 2017. El reto sería además de superar a esas 1103
        personas que ya jugaron a la vez también es que se jugasen 100 horas seguidas para
        conmemorar los 100 años de historia.
        A largo plazo el gran reto de las palas sería que fuese deporte olímpico, lo ve posible y cree
        que todo es sentarse a conversar con otros países en los que también se practica este
        deporte.
      </p>
    `,
    imagen: "/imagenes/perfiles/josemanueltorres.jpg"
  },
  "Willy": {
    nombre: "Fernando William \"Willy\" Calvo Méndez",
    resumen: "",
    contenido: `

      <p class="mb-4">
        Willy es un joven que compagina sus estudios de informática en la Universidad Europea
        del Atlántico con el ultimate frisbee, su verdadera pasión. Actualmente juega para el único
        equipo cántabro “Corocotta Ultimate”, con el que quedó en octava posición del
        campeonato español en la última temporada. También es internacional con la selección
        española, con la que disputó el “WU24” en Logroño.
      </p>

      <p class="mb-4">
        A pesar de jugar con la selección en césped Willy nos confesó que prefiere la arena que es
        donde más acostumbrado está a jugar debido a que con el equipo practica el deporte sobre
        esa superficie. Aún así está abierto a jugar en todas las superficies y sobre todo disfruta
        mucho de su pasión por este deporte.
      </p>

      <p class="mb-4">
        Por otro lado nos contó que este año “Corocotta” disputará el campeonato de España
        mixto y la financiación para poder entrar en el torneo, desplazamientos y demás gastos se
        financiarán gracias a su acuerdo de patrocinio con la empresa “Tirso”.
      </p>
    `,
    imagen: "/imagenes/perfiles/Fernando.JPG"
  },
  "Adrian": {
    nombre: "Adrián Yepez",
    resumen: "",
    contenido: `

      <p class="mb-4">
        Adrián es un joven nacido en Venezuela (Caracas) y lleva viviendo 6 años en Cantabria y juega en el único equipo de Ultimate Frisbee de Cantabria, “Corocotta Ultimate”. Hace 3 años mientras estudiaba en la Universidad Europea del Atlántico conoció el deporte gracias a una compañera de clase, se reunieron un grupo de amigos a jugarlo y casualmente 2 semanas más tarde el equipo de Corocotta fue de visita a la uni a darse a conocer. Desde ese día Adrián se enamoró del ultimate y desde hace 2 años que entrena ya con el primer equipo.  
      </p>

      <p class="mb-4">
        Anteriormente había practicado fútbol y nos comentaba que el Ultimate es parecido y que le encanta la competitividad que se respira. “Empezó como un hobbie pero actualmente me lo tomo muy en serio” nos comentaba el joven con orígenes en Caracas, que a pesar de su “poco” tiempo como jugador de este deporte ya ha participado en torneos tanto nacionales como internacionales. 
      </p> 

      <p class="mb-4">
        Por último, el deseo de Adrián es darle más visibilidad al Ultimate en Cantabria ya que nos contó que hace unos años desapareció otro equipo que había en Santander y se quedaron solos. Está contento con las medidas que está llevando a cabo su equipo para dar a conocerse ya que están yendo a los colegios a enseñar a los más pequeños todo sobre su deporte.
      </p>
    `,
    imagen: "/imagenes/perfiles/Adrian.jpg"
  },
  "Natalia": {
    nombre: "Natalia de los Ríos",
    resumen: "",
    contenido: `

      <p class="mb-4">
        Natalia es una joven santanderina y una de las pocas jugadoras de Ultimate en toda Cantabria. Juega en el único equipo cántabro “Corocotta Ultimate”, el cual está conformado en su gran mayoría por hombres. Esto es un problema para Natalia y el resto de sus compañeras ya que no tienen el número necesario para jugar torneos femeninos y únicamente pueden jugar torneos mixtos. 
      </p>
      <p class="mb-4">
        Nos cuenta que hay chicas que bajan a entrenar algún día pero que son muy pocas las que tienen el compromiso necesario para formar parte del equipo, cree que esto es debido a que el Ultimate es un deporte muy físico. Aún así anima a todas las chicas de la ciudad a darle una oportunidad al deporte y así poder cumplir su objetivo de jugar torneos femeninos. 
      </p>
      <p class="mb-4">
        Natalia desde pequeña estuvo involucrada en el deporte gracias a su tío que la enseñó a jugar. El equipo lo conoció gracias a una profesora del instituto que le informó sobre la existencia del equipo y desde hace 3 años que forma parte de él.
      </p>
    `,
    imagen: "/imagenes/perfiles/Natalia.jpeg"
  },
  "adrian-garcia": {
    nombre: "Adrián García",
    resumen: "",
    contenido: `

      <p class="mb-4">
        Residente de la zona de los Valles Pasiegos es uno de los pocos jóvenes que a día de hoy sigue practicando el salto pasiego. Compite al año por diferentes modalidades de salto en algunas fiestas de pueblo. 
      </p>
      <p class="mb-4">
        De pequeño se fue aficionando al salto pasiego cuando iba con sus abuelos a las fiestas de los pueblos. A los dieciséis años le pidió a su abuelo que le cortara un palo para comenzar a saltar ya que en su época él también fue saltador. Su primer concurso fue el de la Virgen de Valvanuz en Selaya.
      </p>
      <p class="mb-4">
        Ante la ausencia de personas que practiquen este deporte él es uno de los jóvenes que lo promueven, le gustan más las modalidades de “salto pasiego” o “triple salto” además destaca por su agilidad y por el conocimiento de la técnica de salto y del reglamento.
      </p>
    `,
    imagen: ""
  },
  "alejandro-fernandez": {
    nombre: "Adrián García",
    resumen: "",
    contenido: `

      <p class="mb-4">
        Residente de la zona de los Valles pasiegos es uno de los pocos jóvenes que a día de hoy sigue practicando el salto pasiego. Compite al año por diferentes modalidades de salto en algunas fiestas de pueblo. 
      </p>
      <p class="mb-4">
        A los once años descubrió el salto pasiego en La Concha y tras tiempo practicando en casa decidió apuntarse a un concurso hace aproximadamente cuatro años, más tarde comenzó a ganar algunos premios por esta práctica. A día de hoy se ve como uno de los pocos jóvenes que mantienen vivo este deporte tan tradicional de la zona de donde es originario.
      </p>
      <p class="mb-4">
        En el documental se muestra como un gran especialista en la modalidad de “rayar”, tanto a un palo como a dos y en la modalidad de “andar al palo”, destacando por su gran fuerza y técnica.
      </p>
    `,
    imagen: ""
  },
  
}

export default function PerfilPage() {
  const router = useRouter()
  const { nombre } = useParams()
  const perfil = perfiles[nombre as keyof typeof perfiles]

  if (!perfil) {
    return <div className="p-8 text-center">Perfil no encontrado</div>
  }

  return (
    <div className="container mx-auto p-8 bg-emerald-50">
      <Button onClick={() => router.back()} className="mb-6 bg-[#049695] hover:bg-[#0e6868]">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver
      </Button>

      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Contenido textual */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2 text-[#049695] text-center w-full">{perfil.nombre}</h1>
          {perfil.resumen && <p className="text-gray-600 mb-4">{perfil.resumen}</p>}
          <div
            className="prose prose-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: perfil.contenido }}
          />
        </div>

        {/* Imagen al lado derecho en pantallas grandes */}
        <div className="w-full max-w-sm flex-shrink-0">
          <img src={perfil.imagen} alt={perfil.nombre} className="rounded shadow-md w-full" />
        </div>
      </div>
    </div>
  )
}
