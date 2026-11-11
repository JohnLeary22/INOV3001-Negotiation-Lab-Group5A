import { ExternalLink } from 'lucide-react';
import type { Lesson } from '../content/lessons';
import { lessonEvidence, sources } from '../content/sources';
export default function EvidencePanel({ lesson }: { lesson: Lesson }) {
  const references = lesson.sources.map(id => sources.find(source => source.id === id)).filter((source): source is (typeof sources)[number] => Boolean(source));
  return <details className="evidence"><summary>Evidence & sources <span>{lesson.page}</span></summary><div className="evidence-body"><p><b>Submitted report:</b> {lesson.page}. References use the printed page numbers in the final Group 5A report.</p><p><b>Why this supports our Week 11 plan:</b> {lessonEvidence[lesson.id]}</p><ul>{references.map(source => <li key={source.id}><b>{source.url ? <a href={source.url} target="_blank" rel="noreferrer">{source.title}<ExternalLink size={12}/></a> : source.title}</b> — {source.detail}</li>)}</ul><p className="evidence-caution">Separate shared case facts, Group 5A’s private report positions, published research, practice hypotheses and actual simulation evidence.</p></div></details>;
}
export function SourceLink({ title, url }: { title: string; url: string }) { return url ? <a className="source-link" href={url} target="_blank" rel="noreferrer">{title}<ExternalLink size={14}/></a> : <span className="source-link muted">{title}</span>; }
