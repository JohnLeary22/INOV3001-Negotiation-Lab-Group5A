import { useEffect, useState } from 'react';
import { Maximize, ShieldAlert } from 'lucide-react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Lesson from './pages/Lesson';
import Practice from './pages/Practice';
import Debrief from './pages/Debrief';
import Presentation from './pages/Presentation';
import Sources from './pages/Sources';
import { useAppData } from './hooks';
function readRoute() { return window.location.hash.replace(/^#\/?/, '') || 'home'; }
export default function App() {
  const { data, update, exportData, importData } = useAppData();
  const [route, setRoute] = useState(readRoute);
  const [projector, setProjector] = useState(false);
  useEffect(() => { const onHash = () => setRoute(readRoute()); window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash); }, []);
  const go = (to: string) => { window.location.hash = to; setRoute(to); window.scrollTo({ top: 0, behavior: 'instant' }); };
  const openLesson = (id: number) => go(`lesson-${id}`);
  const progress = Math.round(data.completed.length / 10 * 100);
  let page;
  if (route === 'home') page = <Home go={go}/>;
  else if (route === 'learn') page = <Learn completed={data.completed} open={openLesson} goHome={() => go('home')}/>;
  else if (route.startsWith('lesson-')) page = <Lesson id={Number(route.slice(7)) || 1} answers={data.answers} setAnswer={(key,value)=>update({answers:{...data.answers,[key]:value}})} completed={data.completed} markDone={id=>update({completed:Array.from(new Set([...data.completed,id])).sort((a,b)=>a-b)})} move={openLesson} back={()=>go('learn')}/>;
  else if (route === 'practice') page = <Practice roles={data.roles} setRole={(role,name)=>update({roles:{...data.roles,[role]:name}})}/>;
  else if (route === 'debrief') page = <Debrief values={data.debrief} update={debrief=>update({debrief})}/>;
  else if (route === 'presentation') page = <Presentation toggleProjector={()=>setProjector(value=>!value)} projector={projector}/>;
  else page = <Sources/>;
  return <div className={`app-shell ${projector?'projector-mode':''}`}><Navigation route={route} go={go} progress={progress} onExport={exportData} onImport={importData}/><main className="main-area"><div className="topbar"><div className="confidential"><ShieldAlert size={15}/><span>Public learning copy · Source documents excluded</span></div><button className="topbar-action" onClick={()=>{go('presentation');setProjector(true)}}><Maximize size={15}/> Presentation mode</button></div>{page}</main></div>;
}
