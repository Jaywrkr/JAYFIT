# JAYFIT

App minimalista de entrenamiento (blanco/negro). Sesiones organizadas por zona del
cuerpo (piernas, espalda, pecho, core, brazos, full body, cardio/HIIT), cada una con
dificultad (principiante / intermedio / avanzado / extremo) y equipo (sin equipo o
kettlebell de 10 kg / 15 lb / 10 lb).

Sin backend: los ejercicios y sesiones viven como datos estáticos en `src/lib`, y el
build es 100% estático/SSG salvo el reproductor de entrenamiento.

## Desarrollo

```bash
npm install
npm run dev
```

## Estructura

- `src/lib/exercises.ts` — banco de ejercicios (bodyweight + kettlebell).
- `src/lib/sessions.ts` — sesiones armadas a partir de esos ejercicios.
- `src/lib/workout.ts` — lógica de timers (construye la secuencia de pasos de cada sesión).
- `src/app/page.tsx` — listado de sesiones con filtros (zona, dificultad, equipo).
- `src/app/session/[id]/page.tsx` — detalle de una sesión.
- `src/app/session/[id]/entrenar/page.tsx` — reproductor de entrenamiento con temporizador.

## Deploy

Pensado para desplegar directo en Vercel (proyecto Next.js estándar, sin variables de
entorno necesarias).
