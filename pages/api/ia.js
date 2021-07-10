import { addIdea } from 'firebasedata'

const defaults = {
  prompt:
    '-Una plataforma que ayuda a las personas a vender fácilmente muebles usados, artículos para el hogar y otros artículos.\n\n-Un bot de chat que te ayuda a encontrar los vuelos más baratos a tu destino, establecer alertas para cuando bajan los precios y manejar toneladas de otras tareas relacionadas con los viajes. La startup se enfoca en ayudar a los viajeros a administrar sus itinerarios y aprovechar al máximo su viaje.\n\n-Una startup que utiliza inteligencia artificial para detectar fraudes con tarjetas de crédito. \n\n-Una herramienta que conecta la educación con las oportunidades laborales en los Europa, al vincular a los empleadores con los trabajos vacantes.\n\n-Una plataforma que une a las personas que tienen una habitación libre en su casa con las que necesitan un lugar para quedarse.\n\n-Una red de tutores en todo el mundo a los que se les paga por alumno, y los alumnos pueden recibir lecciones de cualquier persona.\n\n-Una plataforma que ayuda a los empleadores a gestionar a los trabajadores remotos. También proporciona servicios de RRHH.\n\n-Una startup para rastrear la eficiencia energética de su hogar de forma gratuita.\n\n-Una startup que ayuda a organizaciones sin fines de lucro a desarrollar una estrategia de redes sociales para sus causas beneficas.\n\n-Una plataforma que conecta a los restaurantes y sus clientes, y les permite pedir comida para llevar y entrega desde sus teléfonos.\n\n-Una startup que ayuda a las universidades y escuelas secundarias a brindarles a los estudiantes educación técnica y profesional.\n\n-Una startup que está construyendo una red de microrredes de energía solar, lo que permite a los usuarios autogenerar su propia energía.\n\n-Una empresa que vende tecnología para ayudar a las personas mayores a mantener su independencia.\n\n-Una plataforma de impresión 3D que ayuda a los propietarios de empresas a crear productos impresos en 3D\n\n-Un nuevo servicio que permite a las marcas crear URL personalizadas para su contenido.\n\n-Una aplicación de mensajería para ayudar a las personas a conectarse con su gobierno local. Su objetivo es hacer que el gobierno sea más accesible y transparente para el público.\n\n-Una startup que ayuda a las personas a elegir dónde vivir basándose en lo que está sucediendo en su vida, no solo en lo que pueden pagar.\n\n-Una herramienta que ayuda a los emprendedores a escribir los mejores lanzamientos posibles para los inversores ángeles.\n\n-Un chatbot basado en inteligencia artificial que lo ayuda con sus objetivos de acondicionamiento físico. El bot ofrece entrenamientos personalizados basados ​​en sus objetivos, metas e historial.\n\n-Una herramienta de aprendizaje automático para recomendar libros según el historial de lectura de un usuario.\n\n-Una startup que ayuda a estudiantes y otros jóvenes profesionales a encontrar a otras personas de su edad que quieran vivir juntos.\n\n-Una empresa que está desarrollando software para restaurantes que les ayuda a administrar sus menús, listas de invitados y pedidos de comida.\n\n-Una startup que ayuda a las personas a descubrir la mejor manera de comprar una casa (por ejemplo, si comprar una casa antigua o renovar una existente)\n\n-Una startup que facilita a los empleados el acceso a beneficios corporativos como seguros, vacaciones y planes de jubilación.\n\n-Una herramienta basada en datos que ayuda a las empresas a crear mejores sitios web al observar los recorridos de los usuarios que realizan a través de Internet.\n\n-La startup está construyendo una plataforma digital para permitir a los agricultores monitorear y administrar la salud de sus cultivos.\n\n-Una startup que vende ropa diseñada por estudiantes de escuelas de moda.\n\n-Una empresa de ciencia de datos que ayuda a las personas a comprender mejor sus datos personales.\n\n-Una startup que ayuda a las personas a elaborar planes para la casa de sus sueños y luego les ayuda a encontrar contratistas para construirla.\n\n-Una startup que permite a las empresas rastrear los movimientos de sus empleados dentro y fuera de la oficina mediante GPS.\n\n-Un dispositivo que puede medir cuánto necesita una planta para regar sus raíces y enviar esos datos a una aplicación móvil.\n\n-Una herramienta para ayudar a equipos de todos los tamaños a gestionar todo el proceso de obtención de una patente desde una idea hasta un producto funcional.\n\n-',
  temperature: 0.5,
  max_tokens: 120,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ['\n']
}

const getOpenAI = async () => {
  try {
    const request = { ...defaults }

    const response = await fetch(
      'https://api.openai.com/v1/engines/ada/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENIO_ID}`
        },
        body: JSON.stringify(request)
      }
    )
    const { choices } = await response.json()
    const [{ text }] = choices

    return text
  } catch (error) {
    console.error({ error })
  }
}

const ia = async (req, res) => {
  const response = await getOpenAI()

  await addIdea({
    text: response,
    likes: 0,
    dislikes: 0
  })

  res.status(200).json({ Idea: response })
}

export default ia
