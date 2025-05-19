export type Noticia = {
  titulo: string
  resumen: string
  fecha: string
  portada: string
  contenido: string
  imagenes: string[]
}

const noticias: Record<string, Noticia> = {
    "noticia-1": {
        titulo: "Peñacastillo se queda a las puertas de la remontada",
        resumen: "El encuentro entre Peñacastillo y Borbolla concluyó con un 3-3 que no deja satisfecho a ninguno",
        fecha: "15/04/2025",
        portada: "/imagenes/bolos/Fotos/JPG/IMG_6660.jpg",
        contenido: `
        <p>Los locales se quedan con la miel en los labios tras rozar la victoria. El encuentro arrancó con un gran nivel por parte del equipo de Noja, que logró 
        adelantarse en el marcador con un 1-2. En el tercer chico, Hermanos Borbolla embocaron dos bolas y consiguieron una ventaja notable. En el birle apenas 
        necesitaron tres tiradas para adjudicarse el chico. No obstante, decidieron seguir tirando, lo que generó ciertos murmullos y protestas en la grada. Incluso se 
        escucharon voces elevadas con frases como “¡ya vale!” o “¡basta ya!”. A pesar de ese momento puntual, el ambiente en el graderío fue respetuoso y correcto durante
        todo el encuentro.</p><br/>
        
        <p>Desde los 16 metros y con raya a medio pulgar, Peñacastillo, con un estelar <a href="/perfiles/victor-gonzalez" class="text-[#049695] font-semibold underline hover:text-[#0e6868] transition-colors">
        Víctor González</a> al frente, logró igualar el marcador. La remontada continuó en 
        el quinto chico, lanzando desde los 20 metros. Rubén Haya, leyenda viva del deporte, consiguió un emboque que puso en ventaja a los locales.</p><br/>
        
        <p>Todo se decidió en el sexto y último chico. Los santanderinos realizaron una floja tirada inicial que Borbolla supo aprovechar, a pesar de cometer dos bolas 
        nulas consecutivas. La emoción se mantuvo hasta el final, con los locales quedándose a tan solo un bolo de hacerse con la victoria. Durante el encuentro y 
        especialmente en el último chico se vió a los jugadores locales visiblemente frustrados, lamentando lo cerca que estuvieron del triunfo.</p><br/>
        
        <p>Tras el partido, tuvimos la oportunidad de conversar con Víctor González, uno de los grandes referentes del bolo palma, que puso así punto final a una intensa 
        y emocionante tarde bolística en el Mateo Grijuela.</p>
        `,
        imagenes: [
            "/imagenes/bolos/Fotos/JPG/IMG_6653.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6654.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6655.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6656.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6657.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6658.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6659.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6667.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6668.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6674.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6675.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6676.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6677.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6678.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6679.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6680.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6685.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6686.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6691.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6695.jpg?height=300&width=400",
            "/imagenes/bolos/Fotos/JPG/IMG_6697.jpg?height=300&width=400",
        ],
    },
    "noticia-2": {
        titulo: "Un salto en el tiempo en los Valles Pasiegos",
        resumen: "Nos adentramos en los Valles Pasiegos para descubrir un deporte con alma",
        fecha: "02/05/2025",
        portada: "/imagenes/salto/Fotos/image2.jpg",
        contenido: `
        <p>Una tarde cualquiera, Santander quedaba atrás en el retrovisor, un grupo de jóvenes se dirigió hacia el interior verde y secreto de Cantabria. Su destino: los Valles Pasiegos. Su propósito: conocer un deporte que, hasta ese día, les resultaba completamente ajeno. No sabían aún que estaban a punto de descubrir no solo una actividad física, sino un fragmento vivo de la identidad de una tierra.</p><br/>
        
        <p>El punto de encuentro fue Selaya, un pueblo rodeado de montañas y prados. Allí les esperaba Borja, integrante del equipo Marycumbre y conocedor de la zona. No estaba solo. Junto a él, Adrián aguardaba en su coche, guió al grupo entre estrechas carreteras que se iban curvando a lo largo del valle. Siguiéndole, comenzaron a ascender hacia la zona de Pisueña. Al llegar a una cabaña de piedra, surgió entre las sombras de esta otro joven: Alejandro. Había interrumpido sus labores en la cabaña para unirse a la demostración. Justo enfrente había una gran explanada donde pensaron que podía ser buena idea practicar allí, un prado ligeramente húmedo tras las lluvias recientes, y que iba a ser escenario del Salto Pasiego. Alejandro y Adrián, con la mirada acostumbrada al monte, analizaron el terreno durante varios minutos. Comprobaron la firmeza del suelo, tantearon posibles puntos de salto, y advirtieron: estaba húmedo, no sería fácil clavar bien la vara, pero lo intentarían. Ambos se vistieron entonces con la indumentaria tradicional del Salto Pasiego: camisa de faena y pantalón de trabajo. A esto sumaron un elemento inesperado que sorprendió a los presentes: botas con tacos, similares a las que se usan en el fútbol o el rugby. No era por estética. Aquella elección respondía a la necesidad de no resbalar al aterrizar y de clavar bien el salto, una cuestión de precisión y seguridad.</p><br/>
        
        <p>Entonces comenzó la demostración. Adrián y Alejandro tomaron sus varas, largas y firmes, y empezaron a mostrar las distintas modalidades del Salto Pasiego, ese arte de impulsarse con un palo, volar unos metros y aterrizar más allá de zanjas, piedras o incluso ríos. Desde fuera, podía parecer un simple juego rural. Pero bastó con que algunos de los presentes intentaran imitar los saltos para entender que se trataba de un desafío técnico y físico que requería no solo fuerza, sino también equilibrio, cálculo y confianza. Durante más de una hora, el grupo se sumergió en esa tradición viva. Observaron. Preguntaron. Saltaron. Y luego, cuando el cuerpo ya había sentido la exigencia de aquel ejercicio antiguo, se sentaron con los dos jóvenes para conocer más.</p><br/>
        
        <p>Adrián y Alejandro explicaron que el Salto Pasiego no nació como deporte, sino como necesidad. “Surgió porque no había puentes. Era la forma de cruzar los ríos”, contaron. “Y como no había más entretenimiento, los chavales empezaron a practicarlo como un juego”. Así, lo que comenzó como una solución práctica se transformó, con el tiempo, en una actividad recreativa, y más tarde en un símbolo de identidad pasiega. En la conversación detallaron las distintas modalidades del salto, explicaron cómo debe sujetarse la vara, cómo se calcula el impulso, cómo se ejecuta el salto de forma correcta. También hablaron de su presente, el Salto Pasiego aún se practica en algunas fiestas de pueblos, a veces incluso con premios para los ganadores. Pero fuera de esas ocasiones, es una tradición que resiste en silencio, casi en secreto, como si se negara a morir.</p><br/>
        
        <p>El sol ya había comenzado a esconderse tras las montañas cuando recogieron todo y se despidieron. El viaje de regreso a Santander fue tranquilo, quizás más reflexivo. Había algo en el aire que ya no era igual. En el silencio del coche, surgió una conclusión compartida, no sólo habían conocido un deporte nuevo. Porque el Salto Pasiego no es solo un juego ni un pasatiempo. Es el eco de una época en la que los niños no tenían más que su campo y su pueblo, y en este entretenimiento tan reducido, el Salto Pasiego era todo lo que les quedaba.</p>
        `,
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
    },
    "noticia-3": {
        titulo: "El “frisbee” en Cantabria tiene nombre y apellidos: “Corocotta Ultimate”",
        resumen: "Conoce al equipo de “Corocotta Ultimate”, único equipo de frisbee en Cantabria",
        fecha: "14/05/2025",
        portada: "/imagenes/ultimate/Fotos/IMG_6838.jpg?height=300&width=400",
        contenido: `
        <p>“Corocotta Ultimate Cantabria”, el único equipo de frisbee que hay actualmente en
        Cantabria se fundó en septiembre del 2005, cuando Nayra e Iñigo llegaron a vivir a
        Cantabria y decidieron crear el equipo con los conocimientos que habían aprendido en
        Alemania.</p><br/>
        
        <p>En España era un deporte muy desconocido y empezaron en la playa pasándose el disco.
        Poco a poco fueron formando un grupo de gente interesada en el deporte, hasta llegar a la
        actualidad que hay un grupo mixto de 40 personas con el que compiten anualmente en
        distintos torneos por toda España.</p><br/>
        
        <p>No obstante no han sido el único equipo que ha habido en Cantabria ya que coexistieron
        con otro equipo llamado “Fendisc Ultimate Frisbee”. Este equipo se disolvió en el año 2016
        por falta de gente y problemas internos.</p><br/>
        
        <p>Gracias a Corocotta este deporte sigue vivo en Cantabria y el equipo está representando a
        la región por España. En los últimos tiempos han conseguido múltiples, en Marzo de este
        año han logrado ganar el torneo “Sabe A Mixta”, organizado por la Federación Española de
        Ultimate Frisbee en Valencia y en el que participaron equipos de todo el mundo. Además
        consiguieron ser el octavo mejor equipo de España en el Campeonato Mixto de España
        enfrentándose a los mejores equipos del país.</p><br/>
        
        <p>El club cuenta con la financiación de diversas empresas que cubren gastos esenciales
        como desplazamientos, inscripciones a torneos y material deportivo. El principal
        patrocinador es la empresa “Tirso”, cuyo respaldo ha sido fundamental para el desarrollo
        del equipo y su proyección fuera de la comunidad autónoma.</p><br/>

        <p>Además cabe destacar que en el equipo hay varios internacionales por la selección
        española entre los que se encuentran <a href="/perfiles/Willy" class="text-[#049695] font-semibold underline hover:text-[#0e6868] transition-colors">
        Fernando William</a>, Ángel González ,Nicolás Fuentes,
        <a href="/perfiles/Natalia" class="text-[#049695] font-semibold underline hover:text-[#0e6868] transition-colors">
        Natalia de los Ríos</a> y Zuleima Saéz.</p><br/>

        <p>El principal desafío que afronta el club en los últimos tiempos es la escasez de jugadoras en
        su plantilla femenina. Este problema ha supuesto la no participación en el Campeonato
        Femenino lo que ha limitado a las mujeres a disputar solo el torneo mixto.
        El club ya se ha puesto manos a la obra en la actividad de reclutamiento de gente,
        especialmente a los más pequeños, con actividades en colegios e institutos para dar a
        conocer tanto al deporte como a su propio club.</p><br/>
        `,
        imagenes: [
            "/imagenes/ultimate/Fotos/IMG_6813.jpg?height=300&width=400",
            "/imagenes/ultimate/Fotos/IMG_6823.jpg?height=300&width=400",
            "/imagenes/ultimate/Fotos/IMG_6838.jpg?height=300&width=400",
            "/imagenes/ultimate/Fotos/IMG_6844.jpg?height=300&width=400",
            "/imagenes/ultimate/Fotos/IMG_6793.jpg?height=300&width=400",
        ],
    },
    "noticia-4": {
        titulo: "Cantabria se prepara para celebrar los 100 años de las palas con un torneo conmemorativo",
        resumen: "Cantabria buscará superar récords y afianzar el legado de las palas con un torneo especial",
        fecha: "16/05/2025",
        portada: "/imagenes/palas/Fotos/IMG_7115.jpg?height=300&width=400",
        contenido: `
        <p>Las <strong>palas cántabras</strong>, uno de los deportes más representativos del verano en el norte de España, están a punto de cumplir 100 años. De cara a esa fecha en la cual se celebrará el centenario de su nacimiento en las playas de la región, ya se está pensando en varios actos conmemorativos. El más destacado será un nuevo torneo internacional que busca rendir homenaje a su historia y superar algunos de los retos logrados en el pasado.</p><br/>
        
        <p>El gran referente más cercano es el <a href="https://www.santander.es/content/jugadores-veintena-paises-disputaran-mundial-palas-santander-2017" class="text-[#049695] font-semibold underline hover:text-[#0e6868] transition-colors">
      Campeonato Mundial de Palas de 2017</a>, celebrado en la Segunda Playa del Sardinero. Aquel evento reunió a más de una centena de jugadores de más de veinte nacionalidades distintas, convirtiendo a Santander durante varios días en la capital mundial de las palas. Se celebraron partidos en las categorías de parejas masculinas y mixtas. Uno de los logros más destacados fue conseguir 80 horas ininterrumpidas de juego y el campeonato dejó una huella muy positiva tanto por la participación como por el ambiente festivo.  </p><br/>
        
        <p>Ahora, con motivo del centenario, los responsables de este deporte en Cantabria quieren ir un paso más allá. El nuevo objetivo es lograr 100 horas seguidas de juego, superar la participación anterior, y ampliar la presencia internacional.</p><br/>
        
        <p>Las palas cántabras no solo son un juego, sino una parte viva de la cultura de la región. Nacidas en la arena hace casi un siglo, siguen siendo símbolo de verano, deporte y convivencia. El centenario será la oportunidad perfecta para recordarlo y que sigan siendo parte de la tradición cántabra.</p>
        `,
        imagenes: [
            "/imagenes/palas/Fotos/Screenshot_20250518_183820_Gallery.jpg?height=300&width=400",
            "/imagenes/palas/Fotos/IMG_7112.jpg?height=300&width=400",
            "/imagenes/palas/Fotos/Screenshot_20250518_183734_Gallery.jpg?height=300&width=400",
            "/imagenes/palas/Fotos/Screenshot_20250518_183727_Gallery.jpg?height=300&width=400",
            "/imagenes/palas/Fotos/IMG_7115.jpg?height=300&width=400",
        ],
    },
}

export default noticias
