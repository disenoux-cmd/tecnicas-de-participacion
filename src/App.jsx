import { useEffect, useRef, useState } from 'react'
import logo from '../docs/excolombia.png'

const pages = [
  { short: 'Apertura', title: 'Dinamizar la palabra' },
  { short: 'Participar', title: 'Participar es tomar parte' },
  { short: 'El tiempo', title: 'Cada segundo puede pensar' },
  { short: 'La tríada', title: 'Tres gestos, una misma intención' },
  { short: 'Practicar', title: 'Puesta en escena' },
  { short: 'Cerrar', title: 'Antes pensaba. Ahora sé.' },
]

const techniques = [
  {
    id: 'espera',
    label: 'Tiempo de espera',
    mark: 'pausa',
    definition: 'Formula una pregunta reflexiva y ofrece entre 3 y 5 segundos de silencio absoluto antes de permitir o solicitar una respuesta.',
    steps: ['Pregunta con claridad, sin añadir explicaciones.', 'Modela el silencio con un gesto no verbal.', 'Permite que cada estudiante estructure o ensaye su respuesta.', 'Asigna el turno cuando el tiempo de pensamiento haya terminado.'],
    reason: 'Dar tiempo de espera es dar espacio al pensamiento profundo. Sin esa pausa, solo participan quienes procesan más rápido.',
    example: '“Analicen la muestra de agua del río. ¿De dónde podrían provenir estos microplásticos? Tendrán 5 segundos de silencio para pensar”.',
  },
  {
    id: 'frio',
    label: 'Llamada en frío',
    mark: 'voz',
    definition: 'Lanza una pregunta abierta y llama directamente a un o una estudiante por su nombre, haya levantado la mano o no.',
    steps: ['Usa un tono cálido: participar nunca es un castigo.', 'Hazla predecible: cualquier persona puede aportar.', 'Da primero tiempo suficiente para procesar.', 'Distribuye la palabra de manera transparente y sistemática.'],
    reason: 'Mantiene a todo el grupo cognitivamente activo y evita perder minutos esperando siempre las mismas manos.',
    example: '“Escriban una frase breve. Tienen 10 segundos. Ahora saquemos un palito… Sofía, cuéntanos en inglés dónde ubicaste el libro”.',
  },
  {
    id: 'boomerang',
    label: 'Pregunta Boomerang',
    mark: 'retorno',
    definition: 'Cuando alguien dice “no sé” o se equivoca, la pregunta rebota hacia otra voz y regresa a la persona inicial para completar el aprendizaje.',
    steps: ['Lanza la pregunta a la persona A.', 'Pide una pista o respuesta a la persona B.', 'Escuchen y capturen el rastro correcto.', 'Vuelve a A para que explique con sus propias palabras.'],
    reason: 'Equivocarse es una parada, no una salida. La técnica sostiene el estándar y convierte al grupo en fuente de aprendizaje.',
    example: '“Escuchemos a Laura. ¿Cómo completarías la frase? Gracias. Juan, ahora dilo con tus propias palabras para cerrar la idea”.',
  },
]

const cases = [
  {
    subject: 'STEM',
    title: 'El silencio frente al panel solar',
    situation: 'Preguntas qué pasaría si la inclinación del panel solar no fuera correcta. Nadie responde de inmediato y sientes que el tiempo corre.',
    options: [
      { text: 'Dar la respuesta para avanzar cuanto antes.', correct: false, feedback: 'Al responder tú, asumes el esfuerzo cognitivo. El grupo pierde la oportunidad de indagar y consolidar la relación causa-efecto.' },
      { text: 'Asignar 5 segundos de silencio y anunciar que después elegirás una voz.', correct: true, feedback: 'La pausa garantiza procesamiento para todo el grupo y convierte el silencio en tiempo efectivo de aprendizaje.' },
    ],
  },
  {
    subject: 'Bilingüismo',
    title: 'El “no sé” durante el diálogo',
    situation: 'Después de una llamada en frío, un estudiante te mira con timidez y dice: “No sé, profe”.',
    options: [
      { text: 'Decirle que preste más atención y pasar a otra persona.', correct: false, feedback: 'Dejarlo salir sin responder convierte el “no sé” en una vía para abandonar el esfuerzo cognitivo.' },
      { text: 'Pedir una pista a otra voz y regresar al estudiante inicial.', correct: true, feedback: 'El rebote normaliza el error, sostiene una expectativa alta y permite que la primera persona alcance el éxito con apoyo.' },
    ],
  },
]

function ArrowIcon({ direction = 'right' }) {
  return (
    <svg className={`icon ${direction === 'left' ? 'icon--left' : ''}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 6l6 6-6 6" />
    </svg>
  )
}

function Staff({ seconds, running, onPause }) {
  return (
    <div className="staff">
      {[0, 1, 2, 3, 4].map((line) => <span className="staff__line" style={{ '--line': line }} key={line} aria-hidden="true" />)}
      <span className="staff__voice staff__voice--one" aria-hidden="true">PREGUNTA</span>
      <button className={`staff__beat ${running ? 'is-active' : ''}`} onClick={onPause} disabled={running} aria-label={running ? `Pausa de pensamiento: ${seconds} segundos` : 'Experimentar una pausa de cinco segundos'}>{seconds === 0 ? 'VOZ' : `${seconds}″`}</button>
      <span className="staff__voice staff__voice--two" aria-hidden="true">PIENSA</span>
      <span className="staff__voice staff__voice--three" aria-hidden="true">COMPARTE</span>
    </div>
  )
}

function CoverPage({ goNext }) {
  const [seconds, setSeconds] = useState(5)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return undefined
    if (seconds === 0) {
      const finish = window.setTimeout(() => setRunning(false), 0)
      return () => window.clearTimeout(finish)
    }
    const timer = window.setTimeout(() => setSeconds((value) => value - 1), 1000)
    return () => window.clearTimeout(timer)
  }, [running, seconds])

  function startPause() {
    setSeconds(5)
    setRunning(true)
  }

  return (
    <div className="page-body cover-page">
      <div className="cover-copy">
        <h1 tabIndex="-1">Dinamizar<br />la palabra</h1>
        <p className="lead">Estrategias para activar la voz de todos y todas.</p>
      </div>
      <Staff seconds={seconds} running={running} onPause={startPause} />
      <div className="opening-note">
        <p>Imagina que lanzas una pregunta desafiante. Las mismas dos manos se levantan; el resto del salón se sumerge en silencio.</p>
        <p>La participación equitativa no consiste en escuchar solo a quienes se atreven primero, sino en crear un espacio seguro donde <strong>cada voz sea valorada y cada mente permanezca activa.</strong></p>
        <button className="action-button" onClick={goNext}>Comenzar la activación <ArrowIcon /></button>
      </div>
    </div>
  )
}

function ParticipationPage() {
  const [note, setNote] = useState('accion')
  return (
    <div className="page-body reading-page">
      <header className="page-heading">
        <span className="section-mark" aria-hidden="true">//</span>
        <div><h1 tabIndex="-1">Participar es tomar parte</h1><p>Antes de elegir una técnica, afinemos el significado.</p></div>
      </header>
      <div className="definition-score">
        <div className="note-tabs" role="group" aria-label="Perspectivas sobre participación">
          <button aria-pressed={note === 'accion'} onClick={() => setNote('accion')}>Participar es acción</button>
          <button aria-pressed={note === 'dialogo'} onClick={() => setNote('dialogo')}>Comunidad de diálogo</button>
        </div>
        <figure className="quotation">
          <span className="quote-mark" aria-hidden="true">“</span>
          {note === 'accion' ? (
            <blockquote>Participar es hacer algo, tomar parte y contribuir a un resultado. En la actividad y en su producto, cada persona encuentra una oportunidad de crecimiento.</blockquote>
          ) : (
            <blockquote>La participación en la escuela es comunicación, decisión y ejecución: un intercambio permanente de conocimientos y experiencias que construye acciones conjuntas.</blockquote>
          )}
          <figcaption>{note === 'accion' ? 'Adaptado de Ferreiro (2005)' : 'Adaptado de Murcia'}</figcaption>
        </figure>
      </div>
      <div className="ratio-block">
        <div className="ratio-visual" aria-label="70 por ciento estudiantes y 30 por ciento guía docente"><strong>70</strong><span>/</span><strong>30</strong></div>
        <div><h2>Cambia quién lleva la melodía</h2><p>Busca que el 70% del tiempo y del esfuerzo cognitivo esté en manos de tus estudiantes, mientras tu guía ocupa el 30%. No es hablar menos por hablar menos: es diseñar para que el grupo piense, dialogue y produzca más.</p></div>
      </div>
    </div>
  )
}

function TimePage() {
  const [seconds, setSeconds] = useState(5)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return undefined
    if (seconds === 0) {
      const finish = window.setTimeout(() => setRunning(false), 0)
      return () => window.clearTimeout(finish)
    }
    const timer = window.setTimeout(() => setSeconds((value) => value - 1), 1000)
    return () => window.clearTimeout(timer)
  }, [running, seconds])

  function startPause() {
    setSeconds(5)
    setRunning(true)
  }

  return (
    <div className="page-body time-page">
      <header className="page-heading">
        <span className="section-mark" aria-hidden="true">||</span>
        <div><h1 tabIndex="-1">Cada segundo puede pensar</h1><p>El silencio intencionado no es tiempo vacío.</p></div>
      </header>
      <div className="pause-lab">
        <div className={`countdown ${running ? 'is-running' : ''}`} aria-live="polite">
          <span>{seconds}</span><small>{seconds === 0 ? 'Ahora, una voz.' : 'segundos'}</small>
        </div>
        <div className="pause-copy">
          <h2>Experimenta la pausa</h2>
          <p>Piensa: <strong>¿qué cambia en una respuesta cuando nadie compite por ser la primera persona en hablar?</strong></p>
          <button className="action-button action-button--dark" onClick={startPause} disabled={running}>{running ? 'Pensando…' : seconds === 0 ? 'Repetir la pausa' : 'Iniciar 5 segundos'}</button>
        </div>
      </div>
      <div className="time-consequences">
        <article><span>silencio → ritmo</span><h2>Elimina el tiempo muerto</h2><p>Una rutina conocida reemplaza la súplica por participación y mantiene la interacción en movimiento.</p></article>
        <article><span>equidad → atención</span><h2>Distribuye la oportunidad</h2><p>Incluye a quienes necesitan más tiempo para procesar y evita sobreexponer siempre a las mismas voces.</p></article>
        <article><span>tiempo → profundidad</span><h2>Abre espacio para comprender</h2><p>La fricción que desaparece se convierte en indagación, retroalimentación y metacognición colectiva.</p></article>
      </div>
    </div>
  )
}

function TechniquesPage() {
  const [activeId, setActiveId] = useState('espera')
  const active = techniques.find((technique) => technique.id === activeId)
  return (
    <div className="page-body techniques-page">
      <header className="page-heading">
        <span className="section-mark" aria-hidden="true">≋</span>
        <div><h1 tabIndex="-1">Tres gestos, una intención</h1><p>Selecciona cada movimiento para leer su partitura.</p></div>
      </header>
      <div className="technique-selector" role="group" aria-label="Técnicas de participación">
        {techniques.map((technique, index) => (
          <button key={technique.id} aria-pressed={activeId === technique.id} onClick={() => setActiveId(technique.id)}>
            <span>{index + 1}</span>{technique.label}<small>{technique.mark}</small>
          </button>
        ))}
      </div>
      <div className="technique-detail">
        <div className="technique-definition"><p>{active.definition}</p><aside><strong>Por qué importa</strong>{active.reason}</aside></div>
        <div className="method-line">
          {active.steps.map((step, index) => <div key={step}><span>{index + 1}</span><p>{step}</p></div>)}
        </div>
        <blockquote className="classroom-voice"><span>En el aula</span>{active.example}</blockquote>
      </div>
    </div>
  )
}

function PracticePage() {
  const [activeCase, setActiveCase] = useState(0)
  const [answers, setAnswers] = useState({})
  const current = cases[activeCase]
  const selected = answers[activeCase]
  const answer = selected !== undefined ? current.options[selected] : null
  return (
    <div className="page-body practice-page">
      <header className="page-heading">
        <span className="section-mark" aria-hidden="true">↗</span>
        <div><h1 tabIndex="-1">Puesta en escena</h1><p>Lee la situación y elige el siguiente gesto docente.</p></div>
      </header>
      <div className="case-switch" role="group" aria-label="Casos de práctica">
        {cases.map((item, index) => <button key={item.title} aria-pressed={activeCase === index} onClick={() => setActiveCase(index)}>Caso {index + 1}<span>{item.subject}</span></button>)}
      </div>
      <section className="case-scene">
        <div className="scene-script"><span className="subject-label">{current.subject}</span><h2>{current.title}</h2><p>{current.situation}</p></div>
        <div className="decision-area">
          <h3>¿Qué harías a continuación?</h3>
          {current.options.map((option, index) => (
            <button className={`decision ${selected === index ? (option.correct ? 'is-correct' : 'is-incorrect') : ''}`} key={option.text} onClick={() => setAnswers((value) => ({ ...value, [activeCase]: index }))} aria-pressed={selected === index}>
              <span>{String.fromCharCode(65 + index)}</span>{option.text}
            </button>
          ))}
          <div className={`feedback ${answer ? 'is-visible' : ''}`} aria-live="polite">
            {answer && <><strong>{answer.correct ? 'La decisión sostiene el aprendizaje.' : 'Pausa y revisa el foco.'}</strong><p>{answer.feedback}</p></>}
          </div>
        </div>
      </section>
    </div>
  )
}

function ClosingPage({ restart }) {
  return (
    <div className="page-body closing-page">
      <header className="closing-title"><span aria-hidden="true">↺</span><h1 tabIndex="-1">Antes pensaba.<br />Ahora sé.</h1></header>
      <p className="closing-intro">Has recorrido tres formas de cuidar la voz y el pensamiento de todo el grupo. Ahora lleva esta partitura a tu propia práctica.</p>
      <div className="reflection-prompts">
        <article><span>Antes pensaba</span><p>que un aula participativa era aquella en la que…</p></article>
        <article><span>Ahora sé</span><p>que el Tiempo de Espera, la Llamada en Frío y las Preguntas Boomerang cuidan el tiempo efectivo porque…</p></article>
      </div>
      <aside className="moodle-note"><div className="check-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="m7 16 6 6L26 9" /></svg></div><div><h2>Haz visible tu pensamiento</h2><p>Abre tu Bitácora de Metacognición Digital en Moodle y completa allí la rutina. Ese será tu registro personal de aprendizaje.</p></div></aside>
      <button className="text-button" onClick={restart}>Volver al inicio <span aria-hidden="true">↺</span></button>
    </div>
  )
}

function App() {
  const [page, setPage] = useState(0)
  const headingRef = useRef(null)

  function goTo(nextPage) {
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.requestAnimationFrame(() => document.querySelector('.sheet h1')?.focus({ preventScroll: true }))
  }

  function renderPage() {
    if (page === 0) return <CoverPage goNext={() => goTo(1)} />
    if (page === 1) return <ParticipationPage />
    if (page === 2) return <TimePage />
    if (page === 3) return <TechniquesPage />
    if (page === 4) return <PracticePage />
    return <ClosingPage restart={() => goTo(0)} />
  }

  return (
    <div className="app-shell" ref={headingRef}>
      <a className="skip-link" href="#documento">Saltar al contenido</a>
      <aside className="reader-nav" aria-label="Índice del recurso">
        <img src={logo} alt="Enseña por Colombia" />
        <nav>
          {pages.map((item, index) => (
            <button key={item.short} className={page === index ? 'is-current' : ''} onClick={() => goTo(index)} aria-current={page === index ? 'page' : undefined}>
              <span>{String(index + 1).padStart(2, '0')}</span>{item.short}
            </button>
          ))}
        </nav>
        <p className="nav-note">Una guía para que cada mente tenga tiempo y cada voz tenga lugar.</p>
      </aside>
      <main id="documento" className="reader-stage">
        <div className="mobile-brand"><img src={logo} alt="Enseña por Colombia" /><span>{page + 1} / {pages.length}</span></div>
        <nav className="mobile-index" aria-label="Índice del recurso">
          {pages.map((item, index) => <button key={item.short} onClick={() => goTo(index)} aria-current={page === index ? 'page' : undefined} aria-label={`${index + 1}. ${item.short}`}>{index + 1}</button>)}
        </nav>
        <article className={`sheet sheet--${page + 1}`}>{renderPage()}</article>
        <footer className="reader-controls">
          <button onClick={() => goTo(page - 1)} disabled={page === 0}><ArrowIcon direction="left" /> Anterior</button>
          <div className="progress-track" role="progressbar" aria-label="Progreso de lectura" aria-valuemin="1" aria-valuemax={pages.length} aria-valuenow={page + 1}><span style={{ transform: `scaleX(${(page + 1) / pages.length})` }} /></div>
          <button onClick={() => goTo(page + 1)} disabled={page === pages.length - 1}>Siguiente <ArrowIcon /></button>
        </footer>
      </main>
    </div>
  )
}

export default App
