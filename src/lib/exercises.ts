import { Exercise } from "./types";

export const EXERCISES: Exercise[] = [
  // ---------- PIERNAS ----------
  {
    id: "sentadilla-bw",
    type: "fuerza",
    name: "Sentadilla con peso corporal",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "Párate con los pies al ancho de los hombros. Baja flexionando rodillas y cadera como si fueras a sentarte en una silla, manteniendo el pecho arriba y el peso en los talones. Sube empujando el suelo con los talones hasta quedar de pie.",
  },
  {
    id: "sentadilla-goblet",
    type: "fuerza",
    name: "Sentadilla goblet con kettlebell",
    bodyParts: ["piernas", "core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Sostén la kettlebell verticalmente contra el pecho, con ambas manos bajo el asa. Baja en sentadilla manteniendo el torso erguido y los codos apuntando hacia las rodillas. Sube empujando el suelo con los talones.",
  },
  {
    id: "zancada-alterna",
    type: "fuerza",
    name: "Zancada alterna",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "De pie, da un paso largo hacia adelante. Baja el cuerpo hasta que ambas rodillas formen un ángulo de 90° (la rodilla de atrás casi toca el suelo). Empuja con la pierna de adelante para volver a la posición inicial y repite con la otra pierna.",
  },
  {
    id: "zancada-kb",
    type: "fuerza",
    name: "Zancada con kettlebell en goblet",
    bodyParts: ["piernas", "core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Sostén la kettlebell contra el pecho como en la sentadilla goblet. Da zancadas alternas hacia adelante manteniendo el torso vertical y el core firme durante todo el movimiento.",
  },
  {
    id: "zancada-lateral",
    type: "fuerza",
    name: "Zancada lateral",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "De pie, da un paso amplio hacia un lado. Flexiona la rodilla de esa pierna bajando la cadera hacia atrás, mientras la otra pierna queda extendida y recta. Empuja de vuelta al centro y repite hacia el otro lado.",
  },
  {
    id: "peso-muerto-kb",
    type: "fuerza",
    name: "Peso muerto rumano con kettlebell",
    bodyParts: ["piernas", "espalda"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "De pie, sostén la kettlebell con ambas manos frente a los muslos. Con las rodillas casi rectas, empuja la cadera hacia atrás (como cerrando una puerta con el glúteo) manteniendo la espalda recta, no encorvada. Baja hasta sentir el estiramiento en la parte de atrás del muslo y vuelve extendiendo la cadera.",
  },
  {
    id: "peso-muerto-una-pierna-kb",
    type: "movilidad-equilibrio",
    name: "Peso muerto a una pierna con kettlebell",
    bodyParts: ["piernas", "core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "De pie sobre una pierna, con la kettlebell en la mano del mismo lado. Inclina el torso hacia adelante mientras levantas la pierna libre hacia atrás en línea recta, como una balanza. Mantén el equilibrio y vuelve a la posición inicial de forma controlada.",
  },
  {
    id: "puente-gluteo",
    type: "fuerza",
    name: "Puente de glúteo",
    bodyParts: ["piernas", "core"],
    equipment: ["ninguno"],
    instructions:
      "Acuéstate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo. Aprieta los glúteos y eleva la cadera hasta formar una línea recta desde las rodillas hasta los hombros. Baja controlado sin dejar caer la cadera de golpe.",
  },
  {
    id: "puente-gluteo-kb",
    type: "fuerza",
    name: "Puente de glúteo con kettlebell",
    bodyParts: ["piernas", "core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Igual que el puente de glúteo: acostado boca arriba con rodillas flexionadas, pero con la kettlebell apoyada sobre la cadera (sujétala con ambas manos) para añadir resistencia al elevar y bajar.",
  },
  {
    id: "sentadilla-bulgara",
    type: "movilidad-equilibrio",
    name: "Sentadilla búlgara (pie atrás elevado)",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "De espaldas a una silla, apoya el empeine de un pie sobre el asiento. Con la otra pierna al frente, baja en sentadilla flexionando esa rodilla hasta casi 90°, y sube empujando con esa misma pierna.",
  },
  {
    id: "sentadilla-salto",
    type: "pliometrico",
    name: "Sentadilla con salto",
    bodyParts: ["piernas", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "Baja en sentadilla como en la sentadilla normal y, desde ahí, salta explosivamente hacia arriba extendiendo todo el cuerpo. Aterriza suave, doblando las rodillas, y cae directo en la siguiente sentadilla.",
  },
  {
    id: "sentadilla-sumo-kb",
    type: "fuerza",
    name: "Sentadilla sumo con kettlebell",
    bodyParts: ["piernas"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Separa los pies más que el ancho de hombros con las puntas apuntando hacia afuera. Sostén la kettlebell con ambas manos colgando entre las piernas y baja en sentadilla profunda, manteniendo las rodillas alineadas con los pies.",
  },
  {
    id: "step-up-kb",
    type: "movilidad-equilibrio",
    name: "Step up con kettlebell",
    bodyParts: ["piernas"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Frente a una superficie estable (un escalón o banco), sostén la kettlebell en posición goblet contra el pecho. Sube apoyando todo el pie de una pierna sobre la superficie, sin impulsarte con la de atrás, y baja controlado. Alterna la pierna que inicia.",
  },
  {
    id: "swing-kb",
    type: "cardio-metabolico",
    name: "Kettlebell swing",
    bodyParts: ["piernas", "cardio", "espalda"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Pies al ancho de hombros con la kettlebell en el suelo entre ellos. Toma la kettlebell y, con un movimiento de cadera (no de brazos), impúlsala hacia adelante hasta la altura del pecho. Deja que baje entre las piernas por gravedad y repite el impulso de cadera de inmediato.",
  },
  {
    id: "wall-sit",
    type: "isometrico",
    name: "Wall sit (silla contra la pared)",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "Apoya toda la espalda contra una pared y desliza el cuerpo hacia abajo hasta que las rodillas formen 90°, como si estuvieras sentado en una silla invisible. Mantén la posición sin moverte durante todo el tiempo indicado.",
  },
  {
    id: "calf-raise",
    type: "fuerza",
    name: "Elevación de talones (pantorrilla)",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "De pie, eleva los talones lo más alto posible quedando de puntillas, apretando la pantorrilla en la parte alta. Baja controlado sin dejar caer los talones de golpe.",
  },

  // ---------- ESPALDA ----------
  {
    id: "superman",
    type: "isometrico",
    name: "Superman",
    bodyParts: ["espalda", "core"],
    equipment: ["ninguno"],
    instructions:
      "Acuéstate boca abajo con brazos extendidos al frente. Eleva simultáneamente brazos, pecho y piernas del suelo, aprieta la espalda baja y los glúteos, mantén 1-2 segundos y baja controlado.",
  },
  {
    id: "remo-kb-una-mano",
    type: "fuerza",
    name: "Remo con kettlebell a una mano",
    bodyParts: ["espalda", "brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Apoya una mano y la rodilla del mismo lado sobre una banca o silla, con la espalda paralela al suelo. Con la mano libre, sostén la kettlebell y tira de ella hacia la cadera, manteniendo el codo pegado al cuerpo. Baja controlado y repite.",
  },
  {
    id: "remo-kb-doble",
    type: "fuerza",
    name: "Remo con dos kettlebells (o una en el centro)",
    bodyParts: ["espalda", "brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "De pie con una kettlebell en cada mano (o una sola, sostenida con ambas), inclina el torso hacia adelante manteniendo la espalda recta, no encorvada. Tira de la kettlebell hacia el abdomen apretando los omóplatos como si los juntaras, y baja controlado.",
  },
  {
    id: "peso-muerto-kb-espalda",
    type: "fuerza",
    name: "Peso muerto con kettlebell",
    bodyParts: ["espalda", "piernas"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Coloca la kettlebell en el suelo entre tus pies. Flexiona cadera y rodillas para agarrarla manteniendo la espalda recta (no redondeada). Sube extendiendo cadera y rodillas al mismo tiempo hasta quedar totalmente de pie.",
  },
  {
    id: "good-morning-kb",
    type: "fuerza",
    name: "Good morning con kettlebell",
    bodyParts: ["espalda", "piernas"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "De pie, sostén la kettlebell contra el pecho. Con las rodillas ligeramente flexionadas y la espalda recta, inclina el torso hacia adelante desde la cadera (no desde la zona baja de la espalda) y vuelve a la posición vertical apretando los glúteos.",
  },
  {
    id: "extension-espalda",
    type: "isometrico",
    name: "Extensión de espalda baja",
    bodyParts: ["espalda", "core"],
    equipment: ["ninguno"],
    instructions:
      "Acuéstate boca abajo con las manos detrás de la cabeza o extendidas al frente. Eleva solo el pecho del suelo contrayendo la espalda baja, sin tirar del cuello, y baja controlado.",
  },
  {
    id: "perro-pajaro",
    type: "movilidad-equilibrio",
    name: "Bird dog (perro de caza)",
    bodyParts: ["espalda", "core"],
    equipment: ["ninguno"],
    instructions:
      "Ponte en cuadrupedia (manos bajo los hombros, rodillas bajo la cadera). Extiende al mismo tiempo un brazo hacia adelante y la pierna opuesta hacia atrás, manteniendo la cadera y la espalda sin moverse. Vuelve a la posición inicial y alterna al otro lado.",
  },
  {
    id: "pull-apart-imaginario",
    type: "isometrico",
    name: "Pull-apart isométrico de espalda alta",
    bodyParts: ["espalda"],
    equipment: ["ninguno"],
    instructions:
      "Extiende los brazos al frente a la altura de los hombros, como si sostuvieras una banda elástica. Lleva los codos hacia atrás apretando los omóplatos con fuerza (sin usar peso ni banda, solo la contracción muscular), mantén 1-2 segundos y suelta.",
  },
  {
    id: "renegade-row-kb",
    type: "movilidad-equilibrio",
    name: "Renegade row con kettlebell",
    bodyParts: ["espalda", "core", "brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Ponte en posición de plancha alta con una mano apoyada sobre la kettlebell y la otra en el suelo, pies separados para dar estabilidad. Tira de la kettlebell hacia la cadera de ese lado sin rotar el torso, bájala y repite con el otro brazo.",
  },

  // ---------- PECHO ----------
  {
    id: "flexion-estandar",
    type: "fuerza",
    name: "Flexión de pecho estándar",
    bodyParts: ["pecho", "brazos", "core"],
    equipment: ["ninguno"],
    instructions:
      "En posición de plancha con las manos apoyadas un poco más ancho que los hombros, baja el pecho hacia el suelo manteniendo todo el cuerpo en línea recta (sin arquear ni levantar la cadera). Empuja el suelo para volver arriba.",
  },
  {
    id: "flexion-rodillas",
    type: "fuerza",
    name: "Flexión con rodillas apoyadas",
    bodyParts: ["pecho", "brazos"],
    equipment: ["ninguno"],
    instructions:
      "Igual que la flexión de pecho estándar, pero apoyando las rodillas en el suelo en vez de los pies, para reducir el peso que cargan los brazos. Mantén una línea recta desde las rodillas hasta la cabeza.",
  },
  {
    id: "flexion-diamante",
    type: "fuerza",
    name: "Flexión diamante",
    bodyParts: ["pecho", "brazos"],
    equipment: ["ninguno"],
    instructions:
      "Coloca las manos juntas bajo el pecho, con los pulgares e índices formando un diamante o triángulo. Baja el pecho hacia las manos manteniendo el cuerpo recto y empuja de vuelta arriba; esta variante exige más al tríceps.",
  },
  {
    id: "flexion-amplia",
    type: "fuerza",
    name: "Flexión con manos amplias",
    bodyParts: ["pecho"],
    equipment: ["ninguno"],
    instructions:
      "Apoya las manos notablemente más separadas que el ancho de los hombros. Baja el pecho hacia el suelo de forma controlada manteniendo el cuerpo recto, y empuja de vuelta arriba.",
  },
  {
    id: "flexion-declinada",
    type: "fuerza",
    name: "Flexión declinada (pies elevados)",
    bodyParts: ["pecho", "brazos"],
    equipment: ["ninguno"],
    instructions:
      "Apoya los pies sobre una silla o superficie elevada y las manos en el suelo, quedando en diagonal con la cadera más alta que los hombros. Baja el pecho hacia el suelo y empuja de vuelta arriba; esta posición trabaja más la parte superior del pecho.",
  },
  {
    id: "press-pecho-kb",
    type: "fuerza",
    name: "Press de pecho con kettlebell en el suelo",
    bodyParts: ["pecho", "brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Acostado boca arriba, sostén la kettlebell sobre el pecho con un brazo, empuja hacia arriba extendiendo el codo y baja controlado.",
  },
  {
    id: "pullover-kb",
    type: "fuerza",
    name: "Pullover con kettlebell",
    bodyParts: ["pecho", "espalda"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Acostado boca arriba, sostén la kettlebell con ambas manos sobre el pecho, baja los brazos hacia atrás de la cabeza y vuelve.",
  },
  {
    id: "flexion-explosiva",
    type: "pliometrico",
    name: "Flexión explosiva (aplauso opcional)",
    bodyParts: ["pecho", "brazos", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "Realiza una flexión de pecho, pero al empujar hacia arriba hazlo con fuerza explosiva para que las manos se despeguen del suelo (con o sin aplauso). Aterriza suave con los brazos ligeramente flexionados y controla la bajada hacia la siguiente repetición.",
  },
  {
    id: "plancha-desplazamiento",
    type: "movilidad-equilibrio",
    name: "Plancha con desplazamiento lateral (walk out)",
    bodyParts: ["pecho", "core", "brazos"],
    equipment: ["ninguno"],
    instructions:
      "Desde la posición de plancha alta, desplaza manos y pies hacia un lado manteniendo la cadera estable y el cuerpo recto, luego vuelve al centro y repite hacia el otro lado.",
  },

  // ---------- CORE ----------
  {
    id: "plancha",
    type: "isometrico",
    name: "Plancha abdominal",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Apoya los antebrazos y las puntas de los pies en el suelo, con los codos bajo los hombros. Aprieta el abdomen y los glúteos para mantener el cuerpo en una línea recta de la cabeza a los talones, sin dejar caer ni levantar la cadera.",
  },
  {
    id: "plancha-lateral",
    type: "isometrico",
    name: "Plancha lateral",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Recuéstate de lado apoyando el antebrazo (codo bajo el hombro) y el borde exterior del pie de abajo. Eleva la cadera del suelo hasta formar una línea recta de la cabeza a los pies, sin dejar que la cadera se hunda.",
  },
  {
    id: "abdominal-bicicleta",
    type: "fuerza",
    name: "Abdominal bicicleta",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Acuéstate boca arriba con las manos detrás de la cabeza y las piernas elevadas. Lleva un codo hacia la rodilla contraria mientras extiendes la otra pierna, alternando lados en un movimiento continuo de pedaleo.",
  },
  {
    id: "elevacion-piernas",
    type: "fuerza",
    name: "Elevación de piernas",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Acuéstate boca arriba con las piernas extendidas y las manos apoyadas a los lados o bajo la cadera para proteger la espalda baja. Eleva las piernas juntas hasta 90° y baja controlado, sin dejar que los pies toquen el suelo entre repeticiones.",
  },
  {
    id: "mountain-climber",
    type: "cardio-metabolico",
    name: "Mountain climbers",
    bodyParts: ["core", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "En posición de plancha alta con los brazos extendidos, lleva una rodilla hacia el pecho y luego la otra, alternando rápido como si corrieras manteniendo la cadera baja y estable.",
  },
  {
    id: "russian-twist-kb",
    type: "fuerza",
    name: "Russian twist con kettlebell",
    bodyParts: ["core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Siéntate con las rodillas flexionadas, el torso inclinado ligeramente hacia atrás y los pies levantados del suelo. Sostén la kettlebell con ambas manos y gira el torso llevándola de un lado al otro, tocando el suelo junto a la cadera en cada lado.",
  },
  {
    id: "v-ups",
    type: "fuerza",
    name: "V-ups",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Acuéstate boca arriba con brazos y piernas extendidos. Eleva al mismo tiempo el torso y las piernas rectas, formando una V con el cuerpo, y trata de tocar los pies con las manos. Baja controlado sin dejar caer todo de golpe.",
  },
  {
    id: "dead-bug",
    type: "movilidad-equilibrio",
    name: "Dead bug",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Acuéstate boca arriba con los brazos hacia el techo y las rodillas flexionadas a 90° sobre la cadera. Baja lentamente un brazo hacia atrás y la pierna opuesta hacia el suelo al mismo tiempo, manteniendo la espalda baja pegada al suelo sin arquearla. Vuelve al centro y alterna.",
  },
  {
    id: "plancha-toques-hombro",
    type: "isometrico",
    name: "Plancha con toques al hombro",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "En posición de plancha alta con los pies bien separados para dar estabilidad, toca el hombro contrario con una mano y luego con la otra, alternando, sin dejar que la cadera se balancee de lado a lado.",
  },
  {
    id: "kb-halo",
    type: "movilidad-equilibrio",
    name: "Kettlebell halo",
    bodyParts: ["core", "brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "De pie, sostén la kettlebell por el asa cerca del pecho, con ambas manos. Rótala alrededor de la cabeza describiendo un círculo completo, pasándola de una mano a otra por detrás de la cabeza. Completa las repeticiones en una dirección y luego alterna hacia el otro lado.",
  },
  {
    id: "sit-up",
    type: "fuerza",
    name: "Abdominal sit-up",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Acuéstate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo. Sube el torso completo hasta quedar sentado, ayudándote con un balanceo suave de los brazos, y baja controlado hasta el suelo.",
  },
  {
    id: "hollow-hold",
    type: "isometrico",
    name: "Hollow body hold",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Acuéstate boca arriba con brazos y piernas extendidos. Eleva ligeramente hombros y piernas del suelo, presionando la espalda baja contra el piso para formar una curva suave con el cuerpo. Mantén la posición sin moverte.",
  },

  // ---------- BRAZOS ----------
  {
    id: "curl-biceps-kb",
    type: "fuerza",
    name: "Curl de bíceps con kettlebell",
    bodyParts: ["brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "De pie con el brazo extendido junto al cuerpo, sostén la kettlebell con una mano (palma hacia adelante). Flexiona el codo llevando la kettlebell hacia el hombro sin mover el codo del costado, y baja controlado.",
  },
  {
    id: "press-hombro-kb",
    type: "fuerza",
    name: "Press de hombro con kettlebell",
    bodyParts: ["brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Sostén la kettlebell junto al hombro con el codo hacia abajo (posición de 'rack'). Empuja hacia arriba extendiendo el codo por completo hasta que el brazo quede recto sobre la cabeza, y baja controlado de vuelta al hombro.",
  },
  {
    id: "triceps-extension-kb",
    type: "fuerza",
    name: "Extensión de tríceps con kettlebell",
    bodyParts: ["brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "De pie o sentado, sostén la kettlebell con ambas manos por encima de la cabeza. Baja la kettlebell detrás de la cabeza flexionando solo los codos (los brazos superiores no se mueven), y extiéndelos de vuelta hacia arriba.",
  },
  {
    id: "fondos-triceps",
    type: "fuerza",
    name: "Fondos de tríceps en silla",
    bodyParts: ["brazos"],
    equipment: ["ninguno"],
    instructions:
      "Apoya las manos en el borde de una silla, con las piernas extendidas al frente y los talones en el suelo. Baja el cuerpo flexionando los codos hacia atrás, y empuja con los brazos para volver arriba.",
  },
  {
    id: "elevacion-lateral-kb",
    type: "fuerza",
    name: "Elevación lateral con kettlebell",
    bodyParts: ["brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "De pie con la kettlebell en una mano junto al costado, eleva el brazo hacia el lado (no hacia adelante) hasta la altura del hombro, con el codo ligeramente flexionado. Baja controlado sin dejarla caer de golpe.",
  },
  {
    id: "curl-martillo-kb",
    type: "fuerza",
    name: "Curl martillo con kettlebell",
    bodyParts: ["brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "De pie, sostén la kettlebell por el asa con la palma mirando hacia el cuerpo (posición neutra, como un martillo). Flexiona el codo llevando la kettlebell hacia el hombro sin girar la muñeca, y baja controlado.",
  },
  {
    id: "arm-circles",
    type: "movilidad-equilibrio",
    name: "Círculos de brazos",
    bodyParts: ["brazos"],
    equipment: ["ninguno"],
    instructions:
      "De pie con los brazos extendidos a los lados a la altura de los hombros, realiza círculos pequeños y controlados. Ve aumentando el tamaño del círculo progresivamente durante el ejercicio.",
  },
  {
    id: "plancha-arriba-abajo",
    type: "fuerza",
    name: "Plancha arriba-abajo (plank up-down)",
    bodyParts: ["brazos", "core"],
    equipment: ["ninguno"],
    instructions:
      "Desde plancha alta, baja apoyando primero un antebrazo y luego el otro hasta quedar en plancha de antebrazos. Sube de nuevo a plancha alta empujando un brazo a la vez, alternando cuál brazo inicia el movimiento en cada repetición.",
  },

  // ---------- FULL BODY ----------
  {
    id: "burpee",
    type: "cardio-metabolico",
    name: "Burpee",
    bodyParts: ["full-body", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "Baja a sentadilla y apoya las manos en el suelo. Lleva los pies de un salto hacia atrás hasta quedar en posición de plancha. Puedes agregar una flexión de pecho aquí. Lleva los pies de vuelta junto a las manos y salta hacia arriba con los brazos extendidos.",
  },
  {
    id: "burpee-sin-salto",
    type: "cardio-metabolico",
    name: "Burpee sin salto",
    bodyParts: ["full-body", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "Igual que el burpee: baja a sentadilla, lleva los pies atrás a plancha y vuelve a traerlos. Pero en lugar de saltar al final, simplemente ponte de pie de forma controlada; es la versión de bajo impacto para las articulaciones.",
  },
  {
    id: "kb-clean",
    type: "pliometrico",
    name: "Kettlebell clean (cargada)",
    bodyParts: ["full-body", "brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Con la kettlebell colgando entre las piernas (como en el swing), impúlsala con fuerza usando la cadera y tira de ella hacia arriba, llevándola de un solo movimiento hasta apoyarla junto al hombro, con el codo pegado al cuerpo (posición de 'rack'). Baja controlado y repite.",
  },
  {
    id: "kb-snatch",
    type: "pliometrico",
    name: "Kettlebell snatch (una mano)",
    bodyParts: ["full-body", "cardio"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Con la kettlebell colgando entre las piernas, impúlsala con la cadera hacia arriba y, sin detenerte en el hombro, deja que la mano rote alrededor del asa para que la kettlebell termine bloqueada con el brazo extendido sobre la cabeza. Bájala controlada por el mismo camino y repite.",
  },
  {
    id: "kb-clean-and-press",
    type: "pliometrico",
    name: "Clean and press con kettlebell",
    bodyParts: ["full-body", "brazos", "piernas"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Primero lleva la kettlebell junto al hombro con el codo pegado al cuerpo (clean). Desde ahí, sin pausa, empújala hacia arriba hasta extender el brazo completamente sobre la cabeza (press). Baja controlada y repite.",
  },
  {
    id: "kb-thruster",
    type: "pliometrico",
    name: "Kettlebell thruster",
    bodyParts: ["full-body", "piernas"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Con la kettlebell junto al hombro (posición de rack), baja en sentadilla completa. Al subir, usa el impulso de las piernas para empujar la kettlebell directo sobre la cabeza en un solo movimiento continuo.",
  },
  {
    id: "kb-turkish-getup",
    type: "movilidad-equilibrio",
    name: "Turkish get-up con kettlebell",
    bodyParts: ["full-body", "core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Acuéstate boca arriba con la kettlebell sostenida con el brazo extendido hacia el techo (bloqueado). Sin dejar de mirar la kettlebell, incorpórate apoyándote en el codo, luego en la mano, pasa la pierna por debajo y ponte de pie paso a paso. Vuelve a acostarte siguiendo la misma secuencia en reversa. Empieza con peso ligero o sin peso hasta dominar la técnica.",
  },
  {
    id: "jumping-jacks",
    type: "cardio-metabolico",
    name: "Jumping jacks",
    bodyParts: ["full-body", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "De pie con brazos junto al cuerpo, salta abriendo las piernas y llevando los brazos por encima de la cabeza al mismo tiempo. Salta de nuevo para volver a la posición inicial, manteniendo un ritmo constante.",
  },
  {
    id: "oso-crawl",
    type: "movilidad-equilibrio",
    name: "Bear crawl (gateo de oso)",
    bodyParts: ["full-body", "core"],
    equipment: ["ninguno"],
    instructions:
      "Ponte en cuadrupedia con las rodillas ligeramente elevadas del suelo (unos centímetros). Avanza moviendo una mano y el pie del lado opuesto al mismo tiempo, manteniendo la cadera a la misma altura y sin balancearse.",
  },
  {
    id: "kb-swing-una-mano",
    type: "cardio-metabolico",
    name: "Kettlebell swing a una mano",
    bodyParts: ["full-body", "cardio", "espalda"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Igual que el kettlebell swing tradicional: impulsa la kettlebell con la cadera hasta la altura del pecho. La diferencia es que la sostienes con una sola mano; cambia de mano en cada serie para trabajar ambos lados.",
  },

  // ---------- CARDIO / HIIT ----------
  {
    id: "high-knees",
    type: "cardio-metabolico",
    name: "High knees (rodillas altas)",
    bodyParts: ["cardio", "piernas"],
    equipment: ["ninguno"],
    instructions:
      "Corre en el mismo lugar llevando las rodillas lo más alto posible (idealmente hasta la altura de la cadera), a un ritmo rápido y constante, con los brazos moviéndose como al correr.",
  },
  {
    id: "skater-jump",
    type: "pliometrico",
    name: "Skater jumps (saltos laterales)",
    bodyParts: ["cardio", "piernas"],
    equipment: ["ninguno"],
    instructions:
      "Salta lateralmente de un pie a otro, cruzando ligeramente la pierna de atrás por detrás de la de apoyo, imitando el movimiento de un patinador. Mantén el equilibrio un instante en cada aterrizaje antes de saltar al otro lado.",
  },
  {
    id: "sentadilla-salto-tuck",
    type: "pliometrico",
    name: "Tuck jump (salto con rodillas al pecho)",
    bodyParts: ["cardio", "piernas"],
    equipment: ["ninguno"],
    instructions:
      "Desde de pie, salta hacia arriba llevando ambas rodillas hacia el pecho en el punto más alto del salto. Aterriza suave, flexionando las rodillas para amortiguar, y repite de inmediato.",
  },
  {
    id: "shadow-boxing",
    type: "cardio-metabolico",
    name: "Shadow boxing (sombra de boxeo)",
    bodyParts: ["cardio", "brazos", "core"],
    equipment: ["ninguno"],
    instructions:
      "Ponte en posición de guardia (puños cerca de la cara, un pie ligeramente adelantado). Lanza combinaciones de golpes al aire rotando la cadera y los hombros con cada golpe, y desplázate con pasos ligeros entre combinaciones.",
  },
  {
    id: "sprint-en-lugar",
    type: "cardio-metabolico",
    name: "Sprint en el lugar",
    bodyParts: ["cardio"],
    equipment: ["ninguno"],
    instructions:
      "Corre en el mismo lugar al máximo esfuerzo posible, levantando las rodillas y moviendo los brazos con fuerza, manteniendo el core firme para no perder la postura.",
  },
  {
    id: "plank-jack",
    type: "cardio-metabolico",
    name: "Plank jacks",
    bodyParts: ["cardio", "core"],
    equipment: ["ninguno"],
    instructions:
      "En posición de plancha alta con los brazos extendidos, salta abriendo los pies hacia afuera y luego ciérralos de un salto, manteniendo la cadera estable y sin subir ni bajar durante el movimiento.",
  },
  {
    id: "kb-swing-cardio",
    type: "cardio-metabolico",
    name: "Kettlebell swing continuo",
    bodyParts: ["cardio", "piernas", "espalda"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Realiza el kettlebell swing (impulso de cadera, no de brazos) de forma continua y a ritmo constante durante todo el tiempo indicado, sin pausas entre repeticiones, para mantener elevada la frecuencia cardíaca.",
  },

  // ---------- MOVILIDAD / EQUILIBRIO ----------
  {
    id: "movilidad-cadera-90-90",
    type: "movilidad-equilibrio",
    name: "Movilidad de cadera 90/90",
    bodyParts: ["piernas", "core"],
    equipment: ["ninguno"],
    instructions:
      "Siéntate en el suelo con una pierna doblada a 90° hacia adelante y la otra doblada a 90° hacia atrás. Manteniendo el torso erguido, rota lentamente para llevar ambas piernas hacia el lado contrario, y repite de un lado a otro.",
  },
  {
    id: "estiramiento-mundial",
    type: "movilidad-equilibrio",
    name: "World's greatest stretch",
    bodyParts: ["full-body", "piernas"],
    equipment: ["ninguno"],
    instructions:
      "Da un paso largo hacia adelante hasta quedar en zancada profunda. Apoya la mano del lado de la pierna de atrás en el suelo, junto al pie delantero, y rota el torso llevando el otro brazo hacia el techo siguiéndolo con la mirada. Vuelve al centro y alterna de lado.",
  },
  {
    id: "equilibrio-una-pierna",
    type: "movilidad-equilibrio",
    name: "Equilibrio a una pierna con alcance",
    bodyParts: ["piernas", "core"],
    equipment: ["ninguno"],
    instructions:
      "Párate sobre una pierna con la otra ligeramente elevada. Manteniendo el equilibrio, inclina el torso hacia adelante y trata de alcanzar el suelo con la mano contraria a la pierna de apoyo. Vuelve a ponerte de pie despacio y repite.",
  },
  {
    id: "gato-camello",
    type: "movilidad-equilibrio",
    name: "Gato-camello",
    bodyParts: ["espalda", "core"],
    equipment: ["ninguno"],
    instructions:
      "Ponte en cuadrupedia (manos bajo hombros, rodillas bajo cadera). Arquea la espalda hacia el techo metiendo la barbilla al pecho (posición de gato), y luego hunde el abdomen hacia el suelo levantando la cabeza y la cadera (posición de camello). Alterna entre ambas de forma lenta y controlada.",
  },
  {
    id: "rotacion-toracica",
    type: "movilidad-equilibrio",
    name: "Rotación torácica en cuadrupedia",
    bodyParts: ["espalda", "core"],
    equipment: ["ninguno"],
    instructions:
      "Ponte en cuadrupedia con una mano detrás de la cabeza. Rota el torso llevando ese codo hacia el techo, siguiéndolo con la mirada, y luego llévalo hacia adentro, por debajo del brazo de apoyo. Repite varias veces y cambia de lado.",
  },
  {
    id: "circulos-cadera",
    type: "movilidad-equilibrio",
    name: "Círculos de cadera",
    bodyParts: ["piernas", "core"],
    equipment: ["ninguno"],
    instructions:
      "De pie con las manos en la cintura y los pies al ancho de los hombros, realiza círculos amplios con la cadera, como si movieras un aro. Haz varias repeticiones en una dirección y luego en la otra.",
  },

  // ---------- ISOMÉTRICO ----------
  {
    id: "sumo-isometrico",
    type: "isometrico",
    name: "Sentadilla sumo isométrica",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "Separa los pies más que el ancho de hombros con las puntas hacia afuera. Baja a la posición más profunda de la sentadilla sumo que puedas mantener con buena forma, y quédate ahí sin moverte durante todo el tiempo indicado.",
  },
  {
    id: "superman-hold",
    type: "isometrico",
    name: "Superman mantenido",
    bodyParts: ["espalda", "core"],
    equipment: ["ninguno"],
    instructions:
      "Acuéstate boca abajo con los brazos extendidos al frente. Eleva brazos, pecho y piernas del suelo al mismo tiempo, y mantén la posición sin bajar nada durante todo el tiempo indicado, respirando de forma controlada.",
  },
  {
    id: "flexion-isometrica",
    type: "isometrico",
    name: "Flexión isométrica a media bajada",
    bodyParts: ["pecho", "brazos"],
    equipment: ["ninguno"],
    instructions:
      "Colócate en posición de flexión de pecho y baja hasta la mitad del recorrido, con los codos aproximadamente a 90°. Mantén esa posición exacta sin subir ni bajar más durante todo el tiempo indicado.",
  },

  // ---------- PLIOMÉTRICO ----------
  {
    id: "salto-unilateral",
    type: "pliometrico",
    name: "Salto unilateral (bound)",
    bodyParts: ["piernas", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "Párate sobre una pierna y salta hacia adelante lo más lejos que puedas, aterrizando controlado sobre esa misma pierna sin perder el equilibrio. Vuelve al punto de partida y repite, luego alterna a la otra pierna.",
  },
  {
    id: "salto-lateral-continuo",
    type: "pliometrico",
    name: "Saltos laterales continuos",
    bodyParts: ["piernas", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "Imagina una línea en el suelo frente a ti. Salta rápidamente de un lado al otro de esa línea manteniendo los pies juntos y las rodillas ligeramente flexionadas para amortiguar cada aterrizaje.",
  },

  // ---------- CARDIO METABÓLICO ----------
  {
    id: "sprint-lateral",
    type: "cardio-metabolico",
    name: "Sprint lateral (shuffle)",
    bodyParts: ["cardio", "piernas"],
    equipment: ["ninguno"],
    instructions:
      "Ponte en posición atlética con las rodillas semiflexionadas. Desplázate rápidamente hacia un lado con pasos cortos y laterales, sin cruzar los pies, y luego hacia el otro lado.",
  },

  // ---------- FUERZA (carga cargada) ----------
  {
    id: "farmer-carry-kb",
    type: "fuerza",
    name: "Farmer's carry con kettlebell",
    bodyParts: ["full-body", "brazos", "core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Sostén la kettlebell con una mano, colgando junto al costado del cuerpo. Camina en el lugar o en línea recta manteniendo el torso erguido, los hombros nivelados y el core firme, sin inclinarte hacia el lado de la carga.",
  },

  // ---------- PORTERO (GOALKEEPER) ----------
  {
    id: "portero-posicion-base",
    type: "isometrico",
    name: "Posición base de portero",
    bodyParts: ["portero", "piernas"],
    equipment: ["ninguno"],
    instructions:
      "Ponte en posición atlética baja: rodillas flexionadas, peso en la punta de los pies, brazos ligeramente adelantados y listos para reaccionar. Mantén la posición sin enderezarte durante todo el tiempo indicado, como si esperaras un remate.",
  },
  {
    id: "portero-reaccion-lateral",
    type: "pliometrico",
    name: "Reacción lateral explosiva",
    bodyParts: ["portero", "piernas", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "Desde la posición base de portero, da un paso explosivo hacia un lado como si fueras a interceptar un balón, y vuelve rápido al centro. Alterna de lado a cada repetición, manteniendo siempre las rodillas flexionadas.",
  },
  {
    id: "portero-zambullida-lateral",
    type: "pliometrico",
    name: "Zambullida lateral controlada",
    bodyParts: ["portero", "core", "full-body"],
    equipment: ["ninguno"],
    instructions:
      "Desde la posición base, impúlsate lateralmente hacia el suelo con los brazos extendidos como si atajaras un balón, apoyando primero el antebrazo y el costado de la cadera para amortiguar. Vuelve de pie de forma controlada y repite hacia el otro lado. Empieza despacio hasta dominar la caída.",
  },
  {
    id: "portero-salto-alcance",
    type: "pliometrico",
    name: "Salto de alcance (reflejo alto)",
    bodyParts: ["portero", "piernas"],
    equipment: ["ninguno"],
    instructions:
      "Desde la posición base, salta explosivamente hacia arriba y hacia un lado extendiendo un brazo por encima de la cabeza, como si desviaras un balón por arriba del travesaño. Aterriza suave y vuelve a la posición base, alternando el lado y el brazo que extiendes.",
  },
  {
    id: "portero-pies-rapidos",
    type: "cardio-metabolico",
    name: "Pies rápidos en el lugar",
    bodyParts: ["portero", "cardio", "piernas"],
    equipment: ["ninguno"],
    instructions:
      "En posición atlética baja, mueve los pies muy rápido tocando el suelo en el mismo lugar, casi sin levantar los talones, como calentamiento de reflejos antes de reaccionar a un disparo. Mantén el ritmo constante durante todo el tiempo indicado.",
  },

  // ---------- MUAY THAI ----------
  {
    id: "rodillazo-alterno",
    type: "cardio-metabolico",
    name: "Rodillazos alternos (knee strikes)",
    bodyParts: ["muay-thai", "core", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "De pie en guardia, lleva una rodilla con fuerza hacia el frente y arriba, como si golpearas un blanco a la altura del abdomen, usando la cadera para generar potencia. Baja el pie y repite con la otra pierna, alternando a buen ritmo.",
  },
  {
    id: "rodillazo-salto",
    type: "pliometrico",
    name: "Rodillazo con salto (jumping knee)",
    bodyParts: ["muay-thai", "cardio", "piernas"],
    equipment: ["ninguno"],
    instructions:
      "Desde guardia, salta impulsándote con ambas piernas y, en el aire, lleva una rodilla con fuerza hacia el pecho como en un rodillazo explosivo. Aterriza suave con ambos pies y repite alternando la pierna que golpea.",
  },
  {
    id: "patada-frontal-alterna",
    type: "movilidad-equilibrio",
    name: "Patada frontal alterna (shadow)",
    bodyParts: ["muay-thai", "piernas", "core"],
    equipment: ["ninguno"],
    instructions:
      "De pie en guardia, lanza una patada frontal al aire extendiendo la pierna desde la cadera, empujando con la cadera hacia adelante como si golpearas con la planta del pie. Vuelve a guardia con control (sin dejar caer la pierna de golpe) y alterna de lado.",
  },
  {
    id: "patada-circular-alterna",
    type: "movilidad-equilibrio",
    name: "Patada circular alterna (shadow)",
    bodyParts: ["muay-thai", "piernas", "core"],
    equipment: ["ninguno"],
    instructions:
      "De pie en guardia, gira sobre el pie de apoyo y lanza una patada circular al aire rotando la cadera por completo, como si golpearas con la espinilla. Vuelve a guardia con control y alterna de pierna en cada repetición.",
  },
  {
    id: "muay-thai-clinch-knees",
    type: "fuerza",
    name: "Rodillazos en clinch simulado",
    bodyParts: ["muay-thai", "core", "brazos"],
    equipment: ["ninguno"],
    instructions:
      "Entrelaza las manos detrás de la cabeza como si sujetaras el cuello de un compañero en clinch. Tira suavemente hacia abajo mientras lanzas rodillazos alternos con fuerza hacia el frente, manteniendo el torso erguido y el core firme durante todo el movimiento.",
  },
];

export function getExerciseById(id: string): Exercise | undefined {
  return EXERCISES.find((e) => e.id === id);
}
