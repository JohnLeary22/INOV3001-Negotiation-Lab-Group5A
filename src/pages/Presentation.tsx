import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Maximize, Minimize, Play, RotateCcw } from 'lucide-react';
import { defenceQuestions } from '../content/defenceQuestions';
import { presentationSlides as slides } from '../content/presentation';
import type { PresentationGraphic as GraphicType } from '../content/presentationGraphics';
import ProgressIndicator from '../components/ProgressIndicator';
import PresentationGraphic from '../components/PresentationGraphic';
import '../styles/presentation.css';

type Props = { toggleProjector: () => void; projector: boolean };
type TimerProps = { seconds: number; running: boolean; toggle: () => void; reset: () => void };
const highlightedTerms = ['MaisonLuxe', 'Al-Nour', 'Hofstede', 'Hall', 'Meyer', 'US$500,000', '3%', 'Month 24', 'Month 20', '60-room', '10-year', 'core brand and safety', 'acceleration charge', 'verbal agreement in principle'];
const highlightedPattern = new RegExp(`(${highlightedTerms.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

function PresentationTimer({ seconds, running, toggle, reset }: TimerProps) {
  return <div className="presentation-timer" aria-label="12-minute rehearsal timer">
    <span className="block-label">12-MINUTE REHEARSAL</span>
    <div className="timer-display" aria-live="polite">{String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}</div>
    <div className="timer-buttons">
      <button aria-label={running ? 'Pause timer' : 'Start timer'} onClick={toggle}><Play size={15}/>{running ? 'Pause' : 'Start'}</button>
      <button aria-label="Reset timer" onClick={reset}><RotateCcw size={14}/>Reset</button>
    </div>
  </div>;
}

function SlideNotes({ index, slide, projector }: { index: number; slide: (typeof slides)[number]; projector: boolean }) {
  return <div className={`slide-support ${projector ? 'presenter-support' : ''}`}>
    <details className="evidence"><summary>Evidence reference</summary><p>{slide.evidence}</p></details>
    <details className="speaker-notes"><summary>{index < 3 ? 'Presenter script' : 'Rough prep notes'} · {Math.floor(slide.seconds / 60)}:{String(slide.seconds % 60).padStart(2, '0')}</summary><p className="presenter-cue"><b>Presenter cue:</b> {slide.cue}</p><p style={{ whiteSpace: 'pre-line' }}>{slide.script}</p></details>
  </div>;
}

export default function Presentation({ toggleProjector, projector }: Props) {
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(720);
  const [running, setRunning] = useState(false);
  const slide = slides[index];
  const prev = () => setIndex(current => Math.max(0, current - 1));
  const next = () => setIndex(current => Math.min(slides.length - 1, current + 1));

  useEffect(() => {
    if (!running || seconds <= 0) {
      if (seconds <= 0) setRunning(false);
      return;
    }
    const timer = window.setInterval(() => setSeconds(current => current - 1), 1000);
    return () => window.clearInterval(timer);
  }, [running, seconds]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (['INPUT', 'TEXTAREA', 'SELECT', 'SUMMARY'].includes(target.tagName) || target.isContentEditable) return;
      if (event.key === 'ArrowLeft') { event.preventDefault(); prev(); }
      else if (event.key === 'ArrowRight') { event.preventDefault(); next(); }
      else if (event.key === 'Escape' && projector) toggleProjector();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [projector, toggleProjector]);

  const timerProps: TimerProps = { seconds, running, toggle: () => setRunning(value => !value), reset: () => { setSeconds(720); setRunning(false); } };
  return <div className={`page presentation-page ${projector ? 'projector' : ''}`}>
    <div className="presentation-top">
      <div><h1>Present the process.</h1></div>
      <button className="button secondary" onClick={toggleProjector}>{projector ? <Minimize size={16}/> : <Maximize size={16}/>} {projector ? 'Exit presenter mode' : 'Presenter mode'}</button>
    </div>

    {projector && <div className="presenter-toolbar"><button className="presenter-exit" onClick={toggleProjector}><Minimize size={15}/> Exit presenter mode</button><PresentationTimer {...timerProps}/><span className="presenter-toolbar-count">{String(index + 1).padStart(2, '0')} / {slides.length}</span></div>}
    <div className="presentation-layout">
      <main className="slide-wrap">
        {!projector && <ProgressIndicator current={index + 1} total={slides.length}/>}
        <article className="slide" aria-label={`Slide ${index + 1}: ${slide.title}`}>
          <span className="block-label">{slide.label}</span>
          <h2>{slide.title}</h2>
          <ul>{slide.points.map(item => <li key={item}>{item.split(highlightedPattern).map((part, partIndex) => highlightedTerms.some(term => term.toLowerCase() === part.toLowerCase()) ? <strong className="slide-emphasis" key={`${part}-${partIndex}`}>{part}</strong> : part)}</li>)}</ul>
          <div className="slide-visual"><PresentationGraphic type={slide.graphic as GraphicType}/></div>
          <SlideNotes key={index} index={index} slide={slide} projector={projector}/>
        </article>
        <div className="slide-controls">
          <button className="button secondary" onClick={prev} disabled={index === 0}><ArrowLeft size={16}/> Previous</button>
          <span>{String(index + 1).padStart(2, '0')} / {slides.length}</span>
          <button className="button primary" onClick={next} disabled={index === slides.length - 1}>Next <ArrowRight size={16}/></button>
        </div>
      </main>
      {!projector && <aside className="presentation-aside">
        <PresentationTimer {...timerProps}/>
        <div className="slide-index" aria-label="Choose a slide">{slides.map((item, i) => <button key={item.label} className={index === i ? 'current' : ''} aria-current={index === i ? 'step' : undefined} onClick={() => setIndex(i)}><span>{String(i + 1).padStart(2, '0')}</span>{item.title}</button>)}</div>
      </aside>}
    </div>
    {projector && <>
      <button className="presenter-nav presenter-prev" aria-label="Previous slide" onClick={prev} disabled={index === 0}><ChevronLeft size={28}/></button>
      <button className="presenter-nav presenter-next" aria-label="Next slide" onClick={next} disabled={index === slides.length - 1}><ChevronRight size={28}/></button>
    </>}
    <section className="defence-section">
      <p className="overline">ORAL DEFENCE · PRACTISE THE REASONING</p><h2>Questions worth preparing for.</h2>
      <p className="page-intro">Use the recorded terms for facts. Separate those facts from analysis, inference and recommendations.</p>
      <div className="question-grid">{defenceQuestions.map((item, i) => <details className={`defence-question ${item.featured ? 'featured' : ''}`} key={item.q}><summary><span>{String(i + 1).padStart(2, '0')}</span>{item.q}</summary><p>{item.a}</p></details>)}</div>
    </section>
  </div>;
}
