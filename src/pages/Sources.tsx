import { sources } from '../content/sources';
import { SourceLink } from '../components/EvidencePanel';
export default function Sources() {
  return <div className="page"><h1>Sources & evidence.</h1><div className="source-list">{sources.map((source,i)=><article className="source-item" key={source.id}><span>{String(i+1).padStart(2,'0')}</span><div><h3><SourceLink title={source.title} url={source.url || ''}/></h3><p>{source.detail}</p></div></article>)}</div></div>;
}
