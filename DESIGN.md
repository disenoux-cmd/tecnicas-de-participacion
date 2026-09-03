---
name: "Técnicas de Participación"
description: "Una partitura editorial e interactiva para activar el pensamiento y distribuir la voz."
colors:
  deep-ink: "#102f4d"
  soft-ink: "#35536b"
  cool-paper: "#fcfdfb"
  reader-canvas: "#e8edf0"
  pure-white: "#ffffff"
  direction-orange: "#e75d2f"
  burnt-orange: "#a93a18"
  pulse-yellow: "#ffc928"
  support-blue: "#147fa3"
  rule: "#cbd7dc"
  nav-active: "#1a4262"
  information-wash: "#e6f1f4"
  success: "#14745a"
  success-wash: "#e8f5ef"
  error: "#c94c36"
  error-wash: "#fff0eb"
  disabled-surface: "#dce3e6"
  disabled-text: "#91a4b4"
typography:
  display:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(4.2rem, 9.2vw, 8rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Barlow, sans-serif"
    fontSize: "clamp(2.35rem, 5vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Barlow, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 700
    lineHeight: 1.05
  body:
    fontFamily: "Atkinson Hyperlegible, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Barlow, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.04em"
rounded:
  square: "0"
  circle: "9999px"
spacing:
  hairline: "4px"
  compact: "8px"
  control: "12px"
  inset: "18px"
  section: "24px"
  generous: "42px"
components:
  action-primary:
    backgroundColor: "{colors.burnt-orange}"
    textColor: "{colors.pure-white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "14px 18px"
  action-dark:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.pure-white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "14px 18px"
  action-disabled:
    backgroundColor: "{colors.disabled-surface}"
    textColor: "{colors.disabled-text}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "14px 18px"
  index-current:
    backgroundColor: "{colors.nav-active}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.square}"
    padding: "11px 12px"
  tab-selected:
    backgroundColor: "{colors.pulse-yellow}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.square}"
    padding: "12px 20px"
  technique-selected:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.pure-white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "18px"
  decision-default:
    backgroundColor: "{colors.pure-white}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.square}"
    padding: "16px"
  pause-beat:
    backgroundColor: "{colors.burnt-orange}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.circle}"
    size: "96px"
---

# Design System: Técnicas de Participación

## Overview

**Creative North Star: "Partitura de facilitación"**

El sistema convierte una lectura pedagógica en una partitura de pausas, voces y retornos. Una hoja de papel blanco frío flota sobre un lienzo gris azulado; tinta azul profunda, reglas finas, marcas editoriales y acentos rítmicos ordenan la experiencia sin parecer una colección de tarjetas.

La composición es serena y documental, pero no pasiva: los cambios de voz, la pausa de cinco segundos y las decisiones de aula hacen visible el esfuerzo cognitivo. La identidad institucional aparece en el logotipo y en una paleta contenida de azul oscuro, naranja y amarillo.

**Key Characteristics:**
- Hoja paginada central con índice lateral y progreso persistente.
- Geometría editorial recta, atravesada por círculos de pulso y secuencia.
- Titulares condensados y expresivos; lectura corporal altamente legible.
- Interacciones locales breves con estado visible y retroalimentación inmediata.

## Colors

La paleta combina papel y tinta fríos con naranja direccional y amarillo de pulso; azul medio, verde y rojo se reservan para apoyo y estados.

### Primary
- **Tinta profunda:** estructura el índice, titulares, texto dominante, escenas y selecciones activas.
- **Naranja de dirección:** señala secciones, progreso, recorridos y énfasis pedagógico.
- **Naranja quemado:** da mayor contraste a acciones primarias y al pulso interactivo.

### Secondary
- **Amarillo de pulso:** marca la voz activa, proporciones, etiquetas y momentos de atención.
- **Azul de apoyo:** identifica alternativas y confirmaciones no evaluativas.

### Tertiary
- **Verde de logro / lavado de logro:** confirma una decisión correcta sin convertir el éxito en espectáculo.
- **Rojo de revisión / lavado de revisión:** indica una decisión incorrecta con tono formativo, no punitivo.

### Neutral
- **Papel frío:** superficie principal de lectura.
- **Lienzo del lector:** separa visualmente la hoja del navegador.
- **Tinta suave:** párrafos secundarios, subtítulos y metadatos.
- **Regla fría:** divisores, bordes y estructura de partitura.
- **Lavado informativo:** apartes de contexto y cierre en Moodle.
- **Blanco puro:** texto sobre fondos oscuros y opciones de decisión.

**The Pulse Rule.** Amarillo y naranja indican ritmo, dirección o atención; no funcionan como relleno decorativo general.

**The Gentle Error Rule.** El error siempre combina borde rojo y lavado cálido, manteniendo texto en tinta profunda y lenguaje de revisión.

## Typography

**Display Font:** Barlow (con respaldo sans-serif)
**Body Font:** Atkinson Hyperlegible (con respaldo sans-serif)
**Label Font:** Barlow (con respaldo sans-serif)

**Character:** Barlow aporta ritmo condensado, dirección editorial y números enfáticos. Atkinson Hyperlegible mantiene clara la lectura instruccional y diferencia el contenido sostenido de las marcas de navegación.

### Hierarchy
- **Display:** peso fuerte, escala fluida y línea cerrada; se reserva para la portada y el cierre.
- **Headline:** escala fluida y tracking negativo; titula cada hoja con autoridad compacta.
- **Title:** tamaño medio y peso fuerte; organiza apartes, escenas y bloques explicativos.
- **Body:** peso regular y línea amplia; sostiene la lectura, normalmente dentro de 52–68 caracteres.
- **Label:** pequeño, fuerte y espaciado; identifica secuencias, materias, marcas y navegación.

**The Two-Voice Rule.** Barlow dirige y marca el compás; Atkinson Hyperlegible explica. No intercambiar sus funciones sin una razón semántica.

## Layout

En escritorio, el lector usa una cuadrícula de dos columnas: índice fijo de 250px y escenario flexible. La hoja se centra con un ancho máximo de 1020px, sombra ambiental y padding fluido; los controles anterior/siguiente y la barra de progreso comparten su ancho.

El ritmo espacial alterna insetos compactos de control con separaciones amplias entre argumentos. Las hojas organizan contenido mediante columnas asimétricas, reglas horizontales y secuencias lineales, evitando cuadrículas repetitivas de tarjetas.

A 900px, el índice lateral desaparece y se reemplaza por marca superior, contador e índice numérico de seis posiciones; la hoja se limita a 720px. A 620px, columnas y escenas se apilan, los selectores pasan a filas, la secuencia de cuatro pasos se convierte en 2×2, el padding baja a 24px y los controles inferiores se compactan sin perder su objetivo táctil.

**The One-Sheet Rule.** Cada momento ocupa una sola hoja visual y conserva navegación y progreso fuera de su contenido.

## Elevation & Depth

La hoja y el pulso principal son los únicos elementos elevados. El resto del sistema obtiene profundidad mediante contraste tonal, reglas de 1px y fondos completos; las acciones ganan una elevación breve solo al pasar el puntero.

### Shadow Vocabulary
- **Hoja ambiental** (`0 18px 48px rgba(20, 48, 70, .15)`): separa el documento del lienzo del lector.
- **Pulso cálido** (`0 14px 28px rgba(169, 58, 24, .24)`): refuerza el botón circular de pausa.
- **Acción elevada** (`0 10px 22px rgba(169, 64, 30, .24)`): aparece únicamente en hover de la acción primaria.

**The Paper-First Rule.** Las superficies permanecen planas dentro de la hoja; no añadir sombras a cada bloque de contenido.

## Shapes

El lenguaje base es ortogonal: botones, selectores, escenas, paneles y hoja no usan radio. Los círculos están reservados para pulsos, numeración de secuencias, respuestas y confirmaciones. Bordes finos y líneas continuas evocan pentagramas, compases y anotaciones editoriales.

**The Meaningful Circle Rule.** Un círculo siempre representa pulso, orden, opción o confirmación; nunca es un adorno vacío.

## Components

### Buttons
- **Shape:** rectángulos sin radio; objetivos táctiles de al menos 44px. El pulso de pausa es la excepción circular.
- **Primary:** fondo naranja quemado, texto blanco, etiqueta Barlow fuerte e inseto compacto.
- **Hover / Focus:** la acción sube 2px y recibe sombra cálida; todo botón o enlace enfocado usa un contorno naranja de 3px con offset de 4px.
- **Disabled:** lavado gris azulado y texto apagado; no se desplaza ni conserva sombra.
- **Text:** fondo transparente y regla inferior; se usa para reiniciar o avanzar sin competir con la acción principal.

### Chips
- **Style:** la etiqueta de materia usa amarillo, tinta profunda, forma rectangular y texto Barlow compacto.
- **State:** es informativa, no interactiva; los estados elegibles se expresan mediante botones segmentados.

### Cards / Containers
- **Corner Style:** siempre recto.
- **Background:** papel, blanco, tinta profunda o lavados tonales según jerarquía.
- **Shadow Strategy:** solo la hoja exterior se eleva; los contenedores internos usan borde o contraste.
- **Border:** reglas frías para agrupación y tinta profunda para escenas o estructura principal.
- **Internal Padding:** 18–44px según densidad y tamaño de pantalla.

### Navigation
- El índice de escritorio es vertical, oscuro y persistente; el estado actual combina fondo azul activo, texto blanco y barra amarilla en el margen.
- En móvil, la navegación se convierte en seis números del mismo ancho; el actual invierte a tinta profunda sobre blanco.
- Los controles inferiores son simétricos, transparentes y flanquean una barra de progreso naranja de 3px.

### Selectors and Decisions
- Los selectores usan `aria-pressed` y cambian mediante fondo completo, subrayado naranja o amarillo según su jerarquía.
- Las decisiones mantienen fondo blanco y marcador azul hasta elegirse; el resultado correcto usa verde y el incorrecto rojo, ambos con feedback textual en una región viva.

### Pause Instrument
- Cinco líneas horizontales, etiquetas verticales y puntos de voz construyen la firma visual de la portada.
- El pulso circular cuenta de cinco a cero con números tabulares, deshabilita la repetición mientras corre y revela “VOZ” al finalizar.
- La entrada de hoja, el pulso y el feedback usan la curva de aceleración expresiva; con movimiento reducido, todas las animaciones y transiciones se reducen a 0.01ms.

## Do's and Don'ts

### Do:
- **Do** conservar la hoja fría, la tinta profunda y las reglas finas como estructura dominante.
- **Do** usar marcas musicales y editoriales para explicar secuencia, pausa, voz o retorno.
- **Do** mantener foco visible, regiones vivas, etiquetas accesibles y controles de al menos 44px.
- **Do** apilar composiciones a 620px y ofrecer una navegación equivalente antes de ocultar el índice lateral.

### Don't:
- **Don't** convertir el recurso en una cuadrícula de tarjetas intercambiables.
- **Don't** redondear paneles y controles rectangulares; los círculos tienen significado reservado.
- **Don't** usar naranja o amarillo como decoración sin una función de ritmo o dirección.
- **Don't** depender solo del color para explicar acierto, error, selección o progreso.
