import { presentationGraphicData, presentationGraphicLabels, type PresentationGraphic } from '../content/presentationGraphics';

type Props = { type: PresentationGraphic };
const Navy = '#20313f';
const Gold = '#d7bf8e';
const Cream = '#f5f2ea';
const Burgundy = '#9b5960';

function Label({ x, y, children, size = 18, fill = Cream, weight = 500, anchor = 'start' }: { x: number; y: number; children: string; size?: number; fill?: string; weight?: number; anchor?: 'start' | 'middle' | 'end' }) {
  return <text x={x} y={y} textAnchor={anchor} fill={fill} fontSize={size} fontWeight={weight}>{children}</text>;
}
function Card({ x, y, width, height, children, accent = false }: { x: number; y: number; width: number; height: number; children: React.ReactNode; accent?: boolean }) {
  return <g><rect x={x} y={y} width={width} height={height} rx="10" fill={accent ? '#34434a' : Navy} stroke={accent ? Gold : '#52606a'} strokeWidth="1.5"/>{children}</g>;
}

export default function PresentationGraphic({ type }: Props) {
  const shared = { role: 'img' as const, 'aria-label': presentationGraphicLabels[type], viewBox: '0 0 1000 300', preserveAspectRatio: 'xMidYMid meet' as const };
  switch (type) {
    case 'partnership':
      return <svg {...shared} className="presentation-graphic partnership-graphic">
        <Card x={24} y={12} width={385} height={176}><Label x={48} y={44} fill={Gold} size={16} weight={700}>MAISONLUXE · FRANCE</Label>{presentationGraphicData.partnership.maisonLuxe.map((line, i) => <Label key={line} x={48} y={82 + i * 34}>{line}</Label>)}<Label x={48} y={157} fill={Gold} size={15}>CONTRIBUTES</Label></Card>
        <Card x={591} y={12} width={385} height={176}><Label x={615} y={44} fill={Gold} size={16} weight={700}>AL-NOUR · SAUDI ARABIA</Label>{presentationGraphicData.partnership.alNour.map((line, i) => <Label key={line} x={615} y={82 + i * 34}>{line}</Label>)}<Label x={615} y={157} fill={Gold} size={15}>CONTRIBUTES</Label></Card>
        <path d="M220 190 C250 225 390 216 445 243" fill="none" stroke={Gold} strokeWidth="3"/><path d="M780 190 C750 225 610 216 555 243" fill="none" stroke={Gold} strokeWidth="3"/>
        <circle cx="500" cy="221" r="8" fill={Gold}/><path d="M500 229v14" stroke={Gold} strokeWidth="3"/>
        <rect x="285" y="243" width="430" height="48" rx="8" fill={Burgundy}/><Label x={500} y={274} size={20} weight={700} fill={Cream} anchor="middle">{presentationGraphicData.partnership.outcome}</Label>
      </svg>;
    case 'tradeoffs':
      return <svg {...shared} className="presentation-graphic tradeoff-graphic">
        <Label x={28} y={24} fill={Gold} size={14} weight={700}>FIVE CONNECTED ISSUES</Label>
        {presentationGraphicData.tradeoffs.issues.map((text, i) => { const x = 24 + i * 196; return <g key={text}><rect x={x} y="40" width="168" height="42" rx="21" fill="#34434a" stroke="#69757b"/><Label x={x + 84} y={67} size={16} anchor="middle">{text}</Label></g>; })}
        <path d="M108 82v29h392M304 82v29h196M500 82v29M696 82v29h-196M892 82v29H500" fill="none" stroke="#69757b" strokeWidth="2"/>
        <rect x="250" y="101" width="500" height="54" rx="19" fill="#273a45" stroke={Gold}/><text x="500" y="120" textAnchor="middle" fill={Gold} fontSize="15" fontWeight="700"><tspan x="500">CONDITIONAL PACKAGE ·</tspan><tspan x="500" dy="18">NOT EQUAL FLEXIBILITY</tspan></text>
        <path d="M205 203H388" stroke={Gold} strokeWidth="3"/><path d="m377 196 12 7-12 7" fill="none" stroke={Gold} strokeWidth="3"/>
        <path d="M612 203H795" stroke={Gold} strokeWidth="3"/><path d="m623 196-12 7 12 7" fill="none" stroke={Gold} strokeWidth="3"/>
        {presentationGraphicData.tradeoffs.exchanges.map(([benefit, trade], i) => { const x = i === 0 ? 296 : 704; return <g key={benefit}><Label x={x} y={177} size={15} anchor="middle">{benefit}</Label><Label x={x} y={226} fill={Gold} size={15} anchor="middle">{trade}</Label></g>; })}
        <rect x="26" y="250" width="948" height="38" rx="7" fill="#34434a"/><Label x={500} y={275} size={16} anchor="middle">{presentationGraphicData.tradeoffs.guardrail}</Label>
      </svg>;
    case 'frameworks':
      return <svg {...shared} className="presentation-graphic framework-graphic">
        <Label x={35} y={28} fill={Gold} size={14} weight={700}>FRAMEWORK</Label><Label x={330} y={28} fill={Gold} size={14} weight={700}>PRACTICAL ACTION</Label><Label x={704} y={28} fill={Gold} size={14} weight={700}>DOCUMENTED LINK</Label>
        {presentationGraphicData.frameworks.map(([framework, practice, action], index) => { const y = 44 + index * 82; return <g key={framework}><rect x="24" y={y} width="952" height="68" rx="8" fill={index === 1 ? '#2b3a43' : '#263844'} stroke="#4e5e67"/><Label x={48} y={y + 41} size={20} fill={Gold} weight={700}>{framework}</Label><path d={`M225 ${y + 34}h64`} stroke={Gold} strokeWidth="2"/><Label x={310} y={y + 34} size={16}>{practice}</Label><path d={`M620 ${y + 34}h45`} stroke={Gold} strokeWidth="2"/><Label x={682} y={y + 39} size={15}>{action}</Label></g>; })}
        <Label x={500} y={280} size={13} fill={Gold} anchor="middle">Planning lenses, not explanations of behaviour by nationality</Label>
      </svg>;
    case 'timeline':
      return <svg {...shared} className="presentation-graphic timeline-graphic">
        <path d="M126 84H870" stroke="#718087" strokeWidth="4"/><path d="m858 76 14 8-14 8" fill="none" stroke={Gold} strokeWidth="3"/>
        {[126, 500, 870].map((x, i) => <circle key={x} cx={x} cy="84" r="10" fill={i === 2 ? Gold : Burgundy} stroke={Cream} strokeWidth="2"/>)}
        {presentationGraphicData.timeline.map((stage, i) => { const x = 20 + i * 325; return <Card key={stage.title} x={x} y={111} width={310} height={170} accent={i === 2}><Label x={x + 22} y={140} fill={Gold} size={15} weight={700}>{stage.title}</Label>{stage.lines.map((line, j) => <Label key={line} x={x + 22} y={i === 0 ? 177 + j * 24 : i === 1 ? 181 + j * 28 : 172 + j * 25} size={i === 2 && j === 0 ? 16 : i === 2 && j === 3 ? 13 : 14} fill={i === 2 && j === 3 ? Gold : Cream} weight={i === 2 && j === 0 ? 700 : 500}>{line}</Label>)}</Card>; })}
      </svg>;
    case 'success':
      return <svg {...shared} className="presentation-graphic success-graphic">
        <Label x={25} y={29} fill={Gold} size={14} weight={700}>OBSERVED ACTION</Label><Label x={370} y={29} fill={Gold} size={14} weight={700}>RECORDED RESULT</Label><Label x={700} y={29} fill={Gold} size={14} weight={700}>CAUTIOUS INTERPRETATION</Label>
        {presentationGraphicData.success.map(([action, result, meaning], index) => { const y = 48 + index * 79; return <g key={action}><rect x="18" y={y} width="964" height="63" rx="8" fill="#293b46" stroke="#53636b"/><Label x={40} y={y + 37} size={16}>{action}</Label><path d={`M318 ${y + 31}h27`} stroke={Gold} strokeWidth="2"/><Label x={360} y={y + 30} size={16} fill={Cream}>{result}</Label><path d={`M655 ${y + 31}h25`} stroke={Gold} strokeWidth="2"/><Label x={694} y={y + 27} size={14}>{meaning}</Label></g>; })}
        <Label x={500} y={280} size={13} fill={Gold} anchor="middle">Reported process evidence ≠ commercial performance</Label>
      </svg>;
    case 'challenges':
      return <svg {...shared} className="presentation-graphic challenge-graphic">
        <Label x={25} y={28} fill={Gold} size={14} weight={700}>DOCUMENTED CHALLENGE</Label><Label x={370} y={28} fill={Gold} size={14} weight={700}>CONSEQUENCE</Label><Label x={700} y={28} fill={Gold} size={14} weight={700}>UNDERLYING ISSUE</Label>
        {presentationGraphicData.challenges.map(([problem, consequence, issue], index) => { const y = 48 + index * 78; return <g key={problem}><rect x="18" y={y} width="964" height="62" rx="8" fill="#302f36" stroke="#6e5558"/><circle cx="43" cy={y + 31} r="8" fill={Burgundy}/><Label x={63} y={y + 37} size={16}>{problem}</Label><path d={`M318 ${y + 31}h27`} stroke={Gold} strokeWidth="2"/><Label x={360} y={y + 37} size={15}>{consequence}</Label><path d={`M655 ${y + 31}h25`} stroke={Gold} strokeWidth="2"/><Label x={694} y={y + 37} size={15}>{issue}</Label></g>; })}
        <Label x={500} y={280} size={13} fill={Gold} anchor="middle">Possible staffing pressure was not quantified; motive is not established</Label>
      </svg>;
    case 'improvements':
      return <svg {...shared} className="presentation-graphic improvement-graphic">
        <rect x="22" y="16" width="430" height="218" rx="12" fill="#293a45" stroke="#627078"/><rect x="548" y="16" width="430" height="218" rx="12" fill="#34434a" stroke={Gold}/>
        <Label x={52} y={49} fill="#c3cbd0" size={15} weight={700}>{presentationGraphicData.improvements.leftTitle}</Label><Label x={578} y={49} fill={Gold} size={15} weight={700}>{presentationGraphicData.improvements.rightTitle}</Label>
        {presentationGraphicData.improvements.left.map((line, i) => <Label key={line} x={52} y={96 + i * 27} size={i > 1 ? 17 : 18}>{line}</Label>)}
        {presentationGraphicData.improvements.right.map((line, i) => <Label key={line} x={578} y={96 + i * 27} size={i > 1 ? 17 : 18}>{line}</Label>)}
        <path d="M460 145h78" stroke={Gold} strokeWidth="4"/><path d="m525 134 16 11-16 11" fill="none" stroke={Gold} strokeWidth="4"/>
        <rect x="22" y="248" width="956" height="38" rx="7" fill="#273a45" stroke="#627078"/><Label x={500} y={267} size={13} fill={Gold} anchor="middle">{presentationGraphicData.improvements.footer}</Label>
      </svg>;
    case 'learning':
      return <svg {...shared} className="presentation-graphic learning-graphic">
        <path d="M90 195 C280 195 260 126 435 126 S595 195 760 195 S865 155 930 89" fill="none" stroke="#66757c" strokeWidth="5"/>
        {presentationGraphicData.learning.map(([x, y, heading, line1, line2], i) => <g key={heading}><circle cx={x} cy={y} r="17" fill={i === 3 ? Gold : Burgundy} stroke={Cream} strokeWidth="2"/><rect x={x - 87} y={y + 27} width="174" height="72" rx="8" fill="#293a45" stroke="#596870"/><Label x={x} y={y + 48} fill={Gold} size={12} weight={700} anchor="middle">{heading}</Label><Label x={x} y={y + 68} size={12} anchor="middle">{line1}</Label><Label x={x} y={y + 88} size={12} anchor="middle">{line2}</Label></g>)}
      </svg>;
  }
}
