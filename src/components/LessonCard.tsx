import { ArrowUpRight, Check } from 'lucide-react';
import type { Lesson } from '../content/lessons';
export default function LessonCard({ lesson, done, onOpen }: { lesson: Lesson; done: boolean; onOpen: () => void }) {
  return <button className="lesson-card" onClick={onOpen}><span className="lesson-number">{String(lesson.id).padStart(2, '0')}</span><div className="lesson-card-copy"><h3>{lesson.title}</h3><p>{lesson.short}</p></div><span className={`lesson-status ${done ? 'done' : ''}`}>{done ? <Check size={16}/> : <ArrowUpRight size={17}/>}</span></button>;
}
