import { useMemo, useState } from 'react';
import { Download } from 'lucide-react';
const fields = [
 ['proposed','What we proposed'],['counterpart','What Al-Nour proposed'],['questions','Important questions asked'],['concessions','Concessions requested and made'],['misunderstandings','Any misunderstandings'],['observations','Cultural or communication observations'],['agreements','Agreements and unresolved issues'],['worked','What worked well'],['didNotWork','What did not work well'],['change','What we would change'],['learned','What we learned']
] as const;
type Props={values:Record<string,string>; update:(values:Record<string,string>)=>void};
export default function Debrief({values,update}:Props) {
 const [generated,setGenerated]=useState(false);
 const summary=useMemo(()=>fields.filter(([key])=>values[key]?.trim()).map(([key,label])=>`${label}\n${values[key].trim()}`).join('\n\n'),[values]);
 const download=()=>{if(!summary)return;const blob=new Blob([`Group 5A · Week 11 simulation debrief\n\n${summary}\n`],{type:'text/plain'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='group5a-week11-debrief.txt';a.click();URL.revokeObjectURL(url);};
 return <div className="page"><p className="overline">WEEK 11 · ACTUAL SIMULATION RECORD</p><h1>Record what happened.</h1><div className="debrief-grid">{fields.map(([key,label])=><label key={key} className="debrief-field"><span>{label}</span><textarea rows={key==='agreements'||key==='observations'?3:2} value={values[key]||''} onChange={event=>update({...values,[key]:event.target.value})} placeholder="Add a brief note from the simulation…"/></label>)}</div><div className="debrief-actions"><button className="button primary" onClick={()=>setGenerated(true)}>Generate organised summary</button><button className="button secondary" onClick={download} disabled={!summary}><Download size={15}/> Download summary</button><span>Saved in this browser</span></div>{generated&&<section className="summary-preview"><p className="block-label">SUMMARY · ENTERED NOTES ONLY</p>{summary?<pre>{summary}</pre>:<p>No simulation notes have been entered yet. Add actual observations above to create a summary.</p>}</section>}</div>;
}
