import { Exercise } from "./types";

export const EXERCISES: Exercise[] = [
  // ---------- PIERNAS ----------
  {
    id: "sentadilla-bw",
    name: "Sentadilla con peso corporal",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "Pies al ancho de hombros, baja flexionando rodillas y cadera como si te sentaras, pecho arriba, sube empujando por los talones.",
  },
  {
    id: "sentadilla-goblet",
    name: "Sentadilla goblet con kettlebell",
    bodyParts: ["piernas", "core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Sostén la kettlebell contra el pecho con ambas manos, baja en sentadilla manteniendo el torso erguido, sube empujando el suelo.",
  },
  {
    id: "zancada-alterna",
    name: "Zancada alterna",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "Da un paso largo hacia adelante, baja hasta que ambas rodillas formen 90°, vuelve al centro y alterna la pierna.",
  },
  {
    id: "zancada-kb",
    name: "Zancada con kettlebell en goblet",
    bodyParts: ["piernas", "core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Sostén la kettlebell frente al pecho y realiza zancadas alternas manteniendo el torso vertical.",
  },
  {
    id: "zancada-lateral",
    name: "Zancada lateral",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "Da un paso amplio hacia un lado, flexiona esa rodilla manteniendo la otra pierna extendida, vuelve al centro y alterna.",
  },
  {
    id: "peso-muerto-kb",
    name: "Peso muerto rumano con kettlebell",
    bodyParts: ["piernas", "espalda"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Sostén la kettlebell con ambas manos frente a los muslos, empuja la cadera hacia atrás manteniendo espalda recta, baja hasta sentir el estiramiento en isquiotibiales y vuelve.",
  },
  {
    id: "peso-muerto-una-pierna-kb",
    name: "Peso muerto a una pierna con kettlebell",
    bodyParts: ["piernas", "core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Con la kettlebell en una mano, inclina el torso hacia adelante mientras levantas la pierna contraria hacia atrás, mantén el equilibrio y vuelve a la posición inicial.",
  },
  {
    id: "puente-gluteo",
    name: "Puente de glúteo",
    bodyParts: ["piernas", "core"],
    equipment: ["ninguno"],
    instructions:
      "Acostado boca arriba, rodillas flexionadas, eleva la cadera apretando glúteos hasta formar una línea recta de rodillas a hombros.",
  },
  {
    id: "puente-gluteo-kb",
    name: "Puente de glúteo con kettlebell",
    bodyParts: ["piernas", "core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Igual que el puente de glúteo, con la kettlebell apoyada sobre la cadera para añadir resistencia.",
  },
  {
    id: "sentadilla-bulgara",
    name: "Sentadilla búlgara (pie atrás elevado)",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "Apoya el empeine de un pie sobre una silla o superficie elevada detrás de ti, baja en sentadilla con la pierna delantera.",
  },
  {
    id: "sentadilla-salto",
    name: "Sentadilla con salto",
    bodyParts: ["piernas", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "Baja en sentadilla y salta explosivamente hacia arriba, aterriza suave volviendo a la sentadilla.",
  },
  {
    id: "sentadilla-sumo-kb",
    name: "Sentadilla sumo con kettlebell",
    bodyParts: ["piernas"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Pies bien separados apuntando afuera, sostén la kettlebell con ambas manos entre las piernas, baja en sentadilla profunda.",
  },
  {
    id: "step-up-kb",
    name: "Step up con kettlebell",
    bodyParts: ["piernas"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Sube a una superficie estable con una pierna sosteniendo la kettlebell en goblet, baja controlado y alterna.",
  },
  {
    id: "swing-kb",
    name: "Kettlebell swing",
    bodyParts: ["piernas", "cardio", "espalda"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Pies al ancho de hombros, kettlebell entre las piernas, impulsa la cadera hacia adelante para balancear la kettlebell hasta la altura del pecho, deja que baje entre las piernas y repite.",
  },
  {
    id: "wall-sit",
    name: "Wall sit (silla contra la pared)",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "Apoya la espalda en una pared y baja hasta formar 90° en las rodillas, mantén la posición isométrica.",
  },
  {
    id: "calf-raise",
    name: "Elevación de talones (pantorrilla)",
    bodyParts: ["piernas"],
    equipment: ["ninguno"],
    instructions:
      "De pie, sube el peso sobre las puntas de los pies elevando los talones lo más alto posible, baja controlado.",
  },

  // ---------- ESPALDA ----------
  {
    id: "superman",
    name: "Superman",
    bodyParts: ["espalda", "core"],
    equipment: ["ninguno"],
    instructions:
      "Acostado boca abajo, eleva simultáneamente brazos, pecho y piernas del suelo, mantén 1-2s y baja controlado.",
  },
  {
    id: "remo-kb-una-mano",
    name: "Remo con kettlebell a una mano",
    bodyParts: ["espalda", "brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Apoya una mano y rodilla sobre una superficie estable, con la otra mano tira de la kettlebell hacia la cadera manteniendo el codo cerca del cuerpo.",
  },
  {
    id: "remo-kb-doble",
    name: "Remo con dos kettlebells (o una en el centro)",
    bodyParts: ["espalda", "brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Inclina el torso hacia adelante con espalda recta, tira de las kettlebells hacia el abdomen apretando los omóplatos, baja controlado.",
  },
  {
    id: "peso-muerto-kb-espalda",
    name: "Peso muerto con kettlebell",
    bodyParts: ["espalda", "piernas"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Con la kettlebell entre los pies, flexiona cadera y rodillas para tomarla, sube extendiendo cadera y rodillas con espalda neutra.",
  },
  {
    id: "good-morning-kb",
    name: "Good morning con kettlebell",
    bodyParts: ["espalda", "piernas"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Con la kettlebell sostenida contra el pecho, inclina el torso hacia adelante con rodillas ligeramente flexionadas y espalda recta, vuelve a la vertical.",
  },
  {
    id: "extension-espalda",
    name: "Extensión de espalda baja",
    bodyParts: ["espalda", "core"],
    equipment: ["ninguno"],
    instructions:
      "Acostado boca abajo con manos detrás de la cabeza o extendidas, eleva el pecho del suelo contrayendo la espalda baja.",
  },
  {
    id: "perro-pajaro",
    name: "Bird dog (perro de caza)",
    bodyParts: ["espalda", "core"],
    equipment: ["ninguno"],
    instructions:
      "En cuadrupedia, extiende brazo y pierna opuestos manteniendo la cadera estable, vuelve y alterna.",
  },
  {
    id: "pull-apart-imaginario",
    name: "Pull-apart isométrico de espalda alta",
    bodyParts: ["espalda"],
    equipment: ["ninguno"],
    instructions:
      "Brazos extendidos al frente a la altura de los hombros, lleva los codos hacia atrás apretando los omóplatos con fuerza, mantén y suelta.",
  },
  {
    id: "renegade-row-kb",
    name: "Renegade row con kettlebell",
    bodyParts: ["espalda", "core", "brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "En posición de plancha con una mano sobre la kettlebell, rema tirando hacia la cadera alternando lados sin rotar el torso.",
  },

  // ---------- PECHO ----------
  {
    id: "flexion-estandar",
    name: "Flexión de pecho estándar",
    bodyParts: ["pecho", "brazos", "core"],
    equipment: ["ninguno"],
    instructions:
      "Manos al ancho de hombros, baja el pecho hacia el suelo manteniendo el cuerpo recto, empuja de vuelta arriba.",
  },
  {
    id: "flexion-rodillas",
    name: "Flexión con rodillas apoyadas",
    bodyParts: ["pecho", "brazos"],
    equipment: ["ninguno"],
    instructions:
      "Igual que la flexión estándar pero con las rodillas apoyadas en el suelo para reducir la carga.",
  },
  {
    id: "flexion-diamante",
    name: "Flexión diamante",
    bodyParts: ["pecho", "brazos"],
    equipment: ["ninguno"],
    instructions:
      "Manos juntas formando un diamante bajo el pecho, baja y empuja para enfatizar tríceps y pecho interno.",
  },
  {
    id: "flexion-amplia",
    name: "Flexión con manos amplias",
    bodyParts: ["pecho"],
    equipment: ["ninguno"],
    instructions:
      "Manos más separadas que el ancho de hombros, baja controlado enfatizando el pecho.",
  },
  {
    id: "flexion-declinada",
    name: "Flexión declinada (pies elevados)",
    bodyParts: ["pecho", "brazos"],
    equipment: ["ninguno"],
    instructions:
      "Con los pies apoyados en una superficie elevada y manos en el suelo, realiza la flexión enfatizando pecho superior.",
  },
  {
    id: "press-pecho-kb",
    name: "Press de pecho con kettlebell en el suelo",
    bodyParts: ["pecho", "brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Acostado boca arriba, sostén la kettlebell sobre el pecho con un brazo, empuja hacia arriba extendiendo el codo y baja controlado.",
  },
  {
    id: "pullover-kb",
    name: "Pullover con kettlebell",
    bodyParts: ["pecho", "espalda"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Acostado boca arriba, sostén la kettlebell con ambas manos sobre el pecho, baja los brazos hacia atrás de la cabeza y vuelve.",
  },
  {
    id: "flexion-explosiva",
    name: "Flexión explosiva (aplauso opcional)",
    bodyParts: ["pecho", "brazos", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "Realiza una flexión con impulso explosivo para despegar las manos del suelo, aterriza suave y controla la bajada.",
  },
  {
    id: "plancha-desplazamiento",
    name: "Plancha con desplazamiento lateral (walk out)",
    bodyParts: ["pecho", "core", "brazos"],
    equipment: ["ninguno"],
    instructions:
      "Desde plancha alta, desplaza el cuerpo hacia un lado con manos y pies, vuelve al centro y repite al otro lado.",
  },

  // ---------- CORE ----------
  {
    id: "plancha",
    name: "Plancha abdominal",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Apoya antebrazos y puntas de los pies, mantén el cuerpo en línea recta apretando abdomen y glúteos.",
  },
  {
    id: "plancha-lateral",
    name: "Plancha lateral",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Apoyado sobre un antebrazo y el borde del pie, mantén el cuerpo alineado sin dejar caer la cadera.",
  },
  {
    id: "abdominal-bicicleta",
    name: "Abdominal bicicleta",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Acostado boca arriba, lleva codo hacia rodilla contraria alternando en un movimiento de pedaleo.",
  },
  {
    id: "elevacion-piernas",
    name: "Elevación de piernas",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Acostado boca arriba, con piernas extendidas, elévalas hasta 90° y baja controlado sin tocar el suelo.",
  },
  {
    id: "mountain-climber",
    name: "Mountain climbers",
    bodyParts: ["core", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "En posición de plancha alta, lleva las rodillas alternadamente hacia el pecho a ritmo rápido.",
  },
  {
    id: "russian-twist-kb",
    name: "Russian twist con kettlebell",
    bodyParts: ["core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Sentado con el torso inclinado hacia atrás y pies ligeramente elevados, gira la kettlebell de lado a lado tocando el suelo.",
  },
  {
    id: "v-ups",
    name: "V-ups",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Acostado boca arriba, eleva simultáneamente piernas y torso formando una V, toca los pies con las manos.",
  },
  {
    id: "dead-bug",
    name: "Dead bug",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Acostado boca arriba con brazos y piernas en 90°, extiende brazo y pierna opuestos hacia el suelo sin arquear la espalda baja, vuelve y alterna.",
  },
  {
    id: "plancha-toques-hombro",
    name: "Plancha con toques al hombro",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "En plancha alta, toca el hombro contrario con una mano alternando sin balancear la cadera.",
  },
  {
    id: "kb-halo",
    name: "Kettlebell halo",
    bodyParts: ["core", "brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Sostén la kettlebell por el asa cerca del pecho y rótala alrededor de la cabeza describiendo un círculo, alterna la dirección.",
  },
  {
    id: "sit-up",
    name: "Abdominal sit-up",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Acostado boca arriba con rodillas flexionadas, sube el torso completo hasta quedar sentado, baja controlado.",
  },
  {
    id: "hollow-hold",
    name: "Hollow body hold",
    bodyParts: ["core"],
    equipment: ["ninguno"],
    instructions:
      "Acostado boca arriba, eleva ligeramente hombros y piernas del suelo formando una curva, mantén la posición isométrica.",
  },

  // ---------- BRAZOS ----------
  {
    id: "curl-biceps-kb",
    name: "Curl de bíceps con kettlebell",
    bodyParts: ["brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "De pie, sostén la kettlebell con una mano y flexiona el codo llevándola hacia el hombro, baja controlado.",
  },
  {
    id: "press-hombro-kb",
    name: "Press de hombro con kettlebell",
    bodyParts: ["brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Desde la posición de rack (kettlebell junto al hombro), empuja hacia arriba extendiendo el codo y baja controlado.",
  },
  {
    id: "triceps-extension-kb",
    name: "Extensión de tríceps con kettlebell",
    bodyParts: ["brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Sostén la kettlebell con ambas manos detrás de la cabeza, extiende los codos hacia arriba y baja controlado.",
  },
  {
    id: "fondos-triceps",
    name: "Fondos de tríceps en silla",
    bodyParts: ["brazos"],
    equipment: ["ninguno"],
    instructions:
      "Apoya las manos en el borde de una silla o superficie estable, baja el cuerpo flexionando los codos y empuja de vuelta arriba.",
  },
  {
    id: "elevacion-lateral-kb",
    name: "Elevación lateral con kettlebell",
    bodyParts: ["brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Con la kettlebell en una mano, eleva el brazo lateralmente hasta la altura del hombro con codo ligeramente flexionado, baja controlado.",
  },
  {
    id: "curl-martillo-kb",
    name: "Curl martillo con kettlebell",
    bodyParts: ["brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Sostén la kettlebell por el asa en posición neutra y flexiona el codo hacia el hombro, baja controlado.",
  },
  {
    id: "arm-circles",
    name: "Círculos de brazos",
    bodyParts: ["brazos"],
    equipment: ["ninguno"],
    instructions:
      "Brazos extendidos a los lados, realiza círculos pequeños y controlados, aumentando el rango progresivamente.",
  },
  {
    id: "plancha-arriba-abajo",
    name: "Plancha arriba-abajo (plank up-down)",
    bodyParts: ["brazos", "core"],
    equipment: ["ninguno"],
    instructions:
      "Desde plancha alta, baja a antebrazos uno a uno y vuelve a subir alternando el brazo que inicia.",
  },

  // ---------- FULL BODY ----------
  {
    id: "burpee",
    name: "Burpee",
    bodyParts: ["full-body", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "Baja a sentadilla, lleva los pies atrás a plancha, haz una flexión opcional, vuelve a sentadilla y salta arriba.",
  },
  {
    id: "burpee-sin-salto",
    name: "Burpee sin salto",
    bodyParts: ["full-body", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "Igual que el burpee, pero en lugar de saltar al final simplemente ponte de pie, versión de bajo impacto.",
  },
  {
    id: "kb-clean",
    name: "Kettlebell clean (cargada)",
    bodyParts: ["full-body", "brazos"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Desde el suelo o balanceo, lleva la kettlebell explosivamente hasta la posición de rack junto al hombro con codo pegado al cuerpo.",
  },
  {
    id: "kb-snatch",
    name: "Kettlebell snatch (una mano)",
    bodyParts: ["full-body", "cardio"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Con un balanceo entre las piernas, impulsa la kettlebell en un solo movimiento hasta dejarla bloqueada sobre la cabeza.",
  },
  {
    id: "kb-clean-and-press",
    name: "Clean and press con kettlebell",
    bodyParts: ["full-body", "brazos", "piernas"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Lleva la kettlebell a la posición de rack (clean) y luego empújala sobre la cabeza (press) en un movimiento continuo.",
  },
  {
    id: "kb-thruster",
    name: "Kettlebell thruster",
    bodyParts: ["full-body", "piernas"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Desde la posición de rack, baja en sentadilla y al subir impulsa la kettlebell sobre la cabeza en un solo movimiento.",
  },
  {
    id: "kb-turkish-getup",
    name: "Turkish get-up con kettlebell",
    bodyParts: ["full-body", "core"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Acostado con la kettlebell bloqueada sobre un brazo extendido, ponte de pie siguiendo la secuencia controlada y vuelve a acostarte igual.",
  },
  {
    id: "jumping-jacks",
    name: "Jumping jacks",
    bodyParts: ["full-body", "cardio"],
    equipment: ["ninguno"],
    instructions:
      "Salta abriendo piernas y brazos simultáneamente, luego vuelve a la posición inicial, mantén ritmo constante.",
  },
  {
    id: "oso-crawl",
    name: "Bear crawl (gateo de oso)",
    bodyParts: ["full-body", "core"],
    equipment: ["ninguno"],
    instructions:
      "En cuadrupedia con rodillas ligeramente elevadas del suelo, avanza moviendo mano y pie opuestos manteniendo la cadera estable.",
  },
  {
    id: "kb-swing-una-mano",
    name: "Kettlebell swing a una mano",
    bodyParts: ["full-body", "cardio", "espalda"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Igual que el swing tradicional, sosteniendo la kettlebell con una sola mano y alternando en cada serie.",
  },

  // ---------- CARDIO / HIIT ----------
  {
    id: "high-knees",
    name: "High knees (rodillas altas)",
    bodyParts: ["cardio", "piernas"],
    equipment: ["ninguno"],
    instructions:
      "Corre en el mismo lugar llevando las rodillas lo más alto posible a ritmo rápido.",
  },
  {
    id: "skater-jump",
    name: "Skater jumps (saltos laterales)",
    bodyParts: ["cardio", "piernas"],
    equipment: ["ninguno"],
    instructions:
      "Salta lateralmente de un pie al otro imitando el movimiento de patinaje, mantén el equilibrio en cada aterrizaje.",
  },
  {
    id: "sentadilla-salto-tuck",
    name: "Tuck jump (salto con rodillas al pecho)",
    bodyParts: ["cardio", "piernas"],
    equipment: ["ninguno"],
    instructions:
      "Salta llevando ambas rodillas hacia el pecho en el aire, aterriza suave y repite.",
  },
  {
    id: "shadow-boxing",
    name: "Shadow boxing (sombra de boxeo)",
    bodyParts: ["cardio", "brazos", "core"],
    equipment: ["ninguno"],
    instructions:
      "Lanza combinaciones de golpes al aire manteniendo guardia alta y rotando la cadera, desplázate con pasos ligeros.",
  },
  {
    id: "sprint-en-lugar",
    name: "Sprint en el lugar",
    bodyParts: ["cardio"],
    equipment: ["ninguno"],
    instructions:
      "Corre en el mismo lugar al máximo esfuerzo posible, brazos activos, mantén el core firme.",
  },
  {
    id: "plank-jack",
    name: "Plank jacks",
    bodyParts: ["cardio", "core"],
    equipment: ["ninguno"],
    instructions:
      "En posición de plancha alta, salta abriendo y cerrando los pies manteniendo la cadera estable.",
  },
  {
    id: "kb-swing-cardio",
    name: "Kettlebell swing continuo",
    bodyParts: ["cardio", "piernas", "espalda"],
    equipment: ["kb-10kg", "kb-15lb", "kb-10lb"],
    instructions:
      "Realiza swings de kettlebell de forma continua a ritmo constante para elevar la frecuencia cardíaca.",
  },
];

export function getExerciseById(id: string): Exercise | undefined {
  return EXERCISES.find((e) => e.id === id);
}
