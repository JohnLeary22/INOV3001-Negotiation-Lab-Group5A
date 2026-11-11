import { BookOpen, BriefcaseBusiness, FileText, Home, Presentation, Sparkles } from 'lucide-react';
const items = [
  { id: 'home', title: 'Mission brief', icon: Home }, { id: 'learn', title: 'Learn · 10 components', icon: BookOpen },
  { id: 'practice', title: 'Negotiation practice', icon: Sparkles }, { id: 'debrief', title: 'Week 11 debrief', icon: FileText },
  { id: 'presentation', title: 'Week 12 defence', icon: Presentation }, { id: 'sources', title: 'Sources & evidence', icon: BriefcaseBusiness }
];
type Props = { route: string; go: (route: string) => void; progress: number; onExport: () => void; onImport: (file?: File) => void };
export default function Navigation({ route, go, progress, onExport, onImport }: Props) {
  return <aside className="sidebar">
    <button className="brand" onClick={() => go('home')} aria-label="Return to mission brief"><span className="brand-mark">N</span><span><b>THE NEGOTIATION LAB</b><small>INOV3001 · GROUP 5A</small></span></button>
    <div className="side-label">LEARNING PATH</div>
    <nav aria-label="Main navigation">{items.map(item => { const Icon = item.icon; const active = route === item.id || (route.startsWith('lesson-') && item.id === 'learn'); return <button key={item.id} className={`nav-link ${active ? 'active' : ''}`} onClick={() => go(item.id)}><Icon size={17} strokeWidth={1.8}/><span>{item.title}</span>{active && <span className="nav-dot"/>}</button>; })}</nav>
    <div className="sidebar-bottom"><div className="progress-caption"><span>LEARNING PROGRESS</span><b>{progress}%</b></div><div className="progress-track"><i style={{ width: `${progress}%` }}/></div>
      <p className="local-note">Your notes stay in this browser. They do not sync across devices.</p><div className="data-actions"><button onClick={onExport}>Export notes</button><label className="import-label">Import JSON<input type="file" accept="application/json,.json" onChange={event => onImport(event.target.files?.[0])}/></label></div>
    </div>
  </aside>;
}
