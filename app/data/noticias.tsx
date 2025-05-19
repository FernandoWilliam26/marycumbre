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
        fecha: "15/07/2023",
        portada: "/imagenes/bolos/Fotos/JPG/IMG_6660.jpg",
        contenido: `
        <p>Los locales se quedan con la miel en los labios tras rozar la victoria. El encuentro arrancó con un gran nivel por parte del equipo de Noja, que logró 
        adelantarse en el marcador con un 1-2. En el tercer chico, Hermanos Borbolla embocaron dos bolas y consiguieron una ventaja notable. En el birle apenas 
        necesitaron tres tiradas para adjudicarse el chico. No obstante, decidieron seguir tirando, lo que generó ciertos murmullos y protestas en la grada. Incluso se 
        escucharon voces elevadas con frases como “¡ya vale!” o “¡basta ya!”. A pesar de ese momento puntual, el ambiente en el graderío fue respetuoso y correcto durante
        todo el encuentro.</p><br/>
        
        <p>Desde los 16 metros y con raya a medio pulgar, Peñacastillo, con un estelar Víctor González al frente, logró igualar el marcador. La remontada continuó en 
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
}

export default noticias
