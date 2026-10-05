import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import {motion, AnimatePresence} from "framer-motion";
import {ArrowUpRight, CalendarDays, MapPin, X, ChevronLeft, ChevronRight, Menu, Camera, BriefcaseBusiness, Globe2} from "lucide-react";
import "./styles.css";
import "./hero-final.css";

const info={"/":"home","/about":"about","/archive":"archive","/register":"register","/contact":"contact"};
function go(path){history.pushState({},"",path);window.dispatchEvent(new PopStateEvent("popstate"));}
function Reveal({children,className=""}){return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.6,ease:[.22,1,.36,1]}}>{children}</motion.div>}
function Header(){const [menu,setMenu]=useState(false);return <header className="nav"><div className="brand-links"><a className="logo-link" href="https://www.becbgk.edu/" target="_blank" rel="noreferrer"><img src="/assets/bec-logo.png" alt="Basaveshwar Engineering College"/></a><span className="brand-divider"/><a className="logo-link ieee-link" href="https://www.becieee.org/" target="_blank" rel="noreferrer"><img src="/assets/bec-ieee.png" alt="BEC-IEEE"/></a></div><nav className={menu?"open":""}><a href="/" onClick={e=>{e.preventDefault();go("/")}}>Home</a><a href="/about" onClick={e=>{e.preventDefault();go("/about")}}>About</a><a href="/archive" onClick={e=>{e.preventDefault();go("/archive")}}>Archive</a><a href="/contact" onClick={e=>{e.preventDefault();go("/contact")}}>Contact</a></nav><a className="nav-cta" href="https://forms.gle/1rRLvXhasNbVpUtr5" target="_blank" rel="noreferrer">REGISTER <ArrowUpRight size={14}/></a><button className="menu-btn" onClick={()=>setMenu(!menu)}><Menu/></button></header>}
function Footer(){return <footer><div className="footer-top"><div className="footer-brand"><img src="/assets/bec-logo.png" alt="BEC"/><img className="footer-ieee" src="/assets/bec-ieee.png" alt="BEC-IEEE"/></div><div className="socials" aria-label="Official links"><a className="social-box" href="https://www.instagram.com/bec_ieee/" target="_blank" rel="noreferrer" aria-label="Instagram"><Camera className="social-icon"/><ArrowUpRight className="social-arrow"/></a><a className="social-box" href="https://www.linkedin.com/company/bec-ieee/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness className="social-icon"/><ArrowUpRight className="social-arrow"/></a><a className="social-box" href="https://www.becieee.org/" target="_blank" rel="noreferrer" aria-label="BEC-IEEE website"><Globe2 className="social-icon"/><ArrowUpRight className="social-arrow"/></a></div></div><div className="footer-bottom"><span>F.A.I.L 2026  BEC-IEEE</span><span>DESIGNED & DEVELOPED BY <b>SHREYAS SURESH RATHOD</b></span></div></footer>}function Home(){return <main><section className="hero home-hero"><div className="hero-grid-lines"/><div className="circuit circuit-a"/><div className="circuit circuit-b"/><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-inner"><Reveal><div className="kicker">B. V. V. SANGHA'S  |  BASAVESHWAR ENGINEERING COLLEGE  |  BAGALKOTE</div></Reveal><Reveal><div className="present">IEEE STUDENT BRANCH <span>STB35261</span><i>PRESENTS</i></div></Reveal><div className="hero-title-row"><Reveal><h1 aria-label="F.A.I.L"><span>F</span><span>A</span><span>I</span><span>L</span></h1></Reveal><Reveal className="hero-year"><strong><span>20</span><span>26</span></strong></Reveal></div><Reveal><p className="tagline">FIRST ATTEMPT <span>IN</span> INNOVATIVE LEARNING</p></Reveal><Reveal><p className="hero-description">A two-day learning experience for freshers - where ideas become experiments, experiments become lessons, and the first attempt is the point.</p></Reveal><Reveal><div className="event-meta"><div><CalendarDays/><span>17-18 OCTOBER 2026</span></div><div><MapPin/><span>MAIN BUILDING, BEC</span></div><a href="https://forms.gle/1rRLvXhasNbVpUtr5" target="_blank" rel="noreferrer" className="button">REGISTER NOW <ArrowUpRight/></a></div></Reveal></div><div className="hero-graphic" aria-hidden="true"><div className="motion-halo halo-1"/><div className="motion-halo halo-2"/><div className="motion-orbit orbit-x"><i/></div><div className="motion-orbit orbit-y"><i/></div><div className="motion-sweep sweep-a"/><div className="motion-sweep sweep-b"/><div className="motion-pulse pulse-a"/><div className="motion-pulse pulse-b"/><div className="motion-node node-1"/><div className="motion-node node-2"/><div className="motion-node node-3"/><div className="motion-node node-4"/></div></section><section className="home-intro section"><Reveal><div className="section-label">01  WHY F.A.I.L EXISTS</div><div className="home-intro-grid"><div><span className="eyebrow">FIFTH EDITION  |  FIRST TRY</span><h2>You don't need<br/>permission to <em>begin.</em></h2></div><div><p className="lead">F.A.I.L 2026 is the fifth edition of the BEC-IEEE Student Branch experience, created especially for first-year students.</p><p>It is a space to meet people, learn practical skills, explore digital tools and try ideas before you know exactly where they will lead.</p><a className="text-link" href="/about" onClick={e=>{e.preventDefault();go("/about")}}>UNDERSTAND THE EVENT <ArrowUpRight/></a></div></div></Reveal></section><section className="home-features"><div className="section feature-wrap"><Reveal><div className="section-label">02  WHAT YOU WILL FIND</div></Reveal>{[["01","LEARN BY DOING","Workshops, challenges and hands-on sessions built for students making their first serious attempt."],["02","MEET PEOPLE","Find teammates, mentors and seniors who can turn an idea into something you can actually build."],["03","BUILD SKILLS","Explore practical tools, communication, problem solving and technical thinking beyond the classroom."],["04","TRY SOMETHING","F.A.I.L is about the first attempt - not about getting everything right the first time."]].map(f=><Reveal key={f[0]}><article className="home-feature"><span>{f[0]}</span><div><h3>{f[1]}</h3><p>{f[2]}</p></div><ArrowUpRight/></article></Reveal>)}</div></section><section className="home-break"><div className="break-word">MAKE<br/><em>THE ATTEMPT.</em></div><div className="break-caption">THE IDEA IS SIMPLE - TRY SOMETHING YOU HAVE NEVER TRIED BEFORE.</div></section><section className="home-final"><div><span>17-18 OCTOBER 2026  BEC, BAGALKOTE</span><h2>Your first attempt<br/><em>starts here.</em></h2><a href="https://forms.gle/1rRLvXhasNbVpUtr5" target="_blank" rel="noreferrer" className="button">REGISTER FOR F.A.I.L 2026 <ArrowUpRight/></a></div></section></main>}
function About(){const cards=[["01","Professional skills","Build habits and skills that employers and teams look for from day one."],["02","Digital tools","Get hands-on with the tools modern engineers use every day."],["03","Innovative learning","Learn by trying. A first attempt is allowed to go wrong."],["04","Teamwork & mentorship","Work with teams and mentors who have been where you are."]];return <main className="page-main"><section className="page-hero"><span>F.A.I.L 2026</span><h1>ABOUT<br/><em>THE ATTEMPT.</em></h1></section><section className="section"><div className="section-label">01  ABOUT BEC-IEEE</div><div className="wide-copy"><p className="lead">In January 1994, the IEEE Student Branch (STB35261) of Basaveshwar Engineering College, Bagalkot, was established by Dr. Suresh H. Jangamshetti, a Senior Member of IEEE and a visionary in engineering education.</p><p>Known as BEC-IEEE, the branch was founded to promote technical excellence, professional development, innovation and networking among students. Over the years it has organized workshops, technical talks, competitions, humanitarian initiatives and professional activities.</p><a className="text-link bec-ieee-link" href="https://www.becieee.org/" target="_blank" rel="noreferrer">KNOW MORE ABOUT BEC-IEEE <ArrowUpRight/></a></div></section><section className="section dark"><div className="section-label">02  ABOUT F.A.I.L 2026</div><div className="split"><h2>Don't wait<br/>to be <em>ready.</em></h2><p className="lead">F.A.I.L 2026 (First Attempt in Innovative Learning) is the fifth edition of the BEC-IEEE Student Branch's flagship event for first-year students. It introduces professional skills, digital tools and innovative learning through teamwork and mentorship.</p></div><div className="feature-list">{cards.map(c=><Reveal key={c[0]}><article><span>{c[0]}</span><h3>{c[1]}</h3><p>{c[2]}</p></article></Reveal>)}</div></section><section className="quote"><div>FIRST ATTEMPT</div><h2>Try.<br/>Learn.<br/><em>Repeat.</em></h2></section></main>}
const fail20=
[
  "/assets/fail20/DSC_0001.JPG",
  "/assets/fail20/DSC_0106.JPG",
  "/assets/fail20/DSC_0158.JPG",
  "/assets/fail20/DSC_0205.JPG",
  "/assets/fail20/DSC_0261.JPG",
  "/assets/fail20/DSC_0307.JPG",
  "/assets/fail20/DSC_0355.JPG",
  "/assets/fail20/DSC_0409.JPG",
  "/assets/fail20/DSC_0456.JPG",
  "/assets/fail20/DSC_0507.JPG"
];
const fail2024=
[
  "/assets/photos/055_DSC_8186.JPG",
  "/assets/photos/056_DSC_8187.JPG",
  "/assets/photos/057_DSC_8189.JPG",
  "/assets/photos/058_DSC_8192.JPG",
  "/assets/photos/059_DSC_8196.JPG",
  "/assets/photos/060_DSC_8197.JPG",
  "/assets/photos/061_DSC_8198.JPG",
  "/assets/photos/062_DSC_8209.JPG",
  "/assets/photos/063_DSC_8212.JPG",
  "/assets/photos/064_DSC_8213.JPG",
  "/assets/photos/065_DSC_8216.JPG",
  "/assets/photos/066_DSC_8217.JPG",
  "/assets/photos/067_DSC_8220.JPG",
  "/assets/photos/068_DSC_8223.JPG",
  "/assets/photos/069_DSC_8227.JPG",
  "/assets/photos/070_DSC_8228.JPG",
  "/assets/photos/071_DSC_8232.JPG",
  "/assets/photos/072_DSC_8233.JPG",
  "/assets/photos/073_DSC_8236.JPG",
  "/assets/photos/074_DSC_8237.JPG",
  "/assets/photos/075_DSC_8239.JPG",
  "/assets/photos/076_DSC_8240.JPG",
  "/assets/photos/077_DSC_8242.JPG",
  "/assets/photos/078_DSC_8244.JPG",
  "/assets/photos/079_DSC_8246.JPG",
  "/assets/photos/080_DSC_8264.JPG",
  "/assets/photos/081_DSC_8265.JPG",
  "/assets/photos/082_DSC_8266.JPG",
  "/assets/photos/083_DSC_8268.JPG",
  "/assets/photos/084_DSC_8269.JPG",
  "/assets/photos/085_DSC_8270.JPG",
  "/assets/photos/086_DSC_8273.JPG",
  "/assets/photos/087_DSC_8274.JPG",
  "/assets/photos/088_DSC_8279.JPG",
  "/assets/photos/089_DSC_8280.JPG",
  "/assets/photos/090_DSC_8281.JPG",
  "/assets/photos/091_DSC_8282.JPG",
  "/assets/photos/092_DSC_8283.JPG",
  "/assets/photos/093_DSC_8284.JPG",
  "/assets/photos/094_DSC_8286.JPG",
  "/assets/photos/095_DSC_8287.JPG",
  "/assets/photos/096_DSC_8289.JPG",
  "/assets/photos/097_DSC_8290.JPG",
  "/assets/photos/098_DSC_8291.JPG",
  "/assets/photos/099_DSC_8293.JPG",
  "/assets/photos/100_DSC_8294.JPG",
  "/assets/photos/101_DSC_8296.JPG",
  "/assets/photos/102_DSC_8297.JPG",
  "/assets/photos/103_DSC_8297.JPG",
  "/assets/photos/104_DSC_8310.JPG"
];
const fail2025=
[
  "/assets/photos/006_20251012_192153.jpg",
  "/assets/photos/007_20251012_192156.jpg",
  "/assets/photos/008_20251012_192343.jpg",
  "/assets/photos/009_20251012_192348.jpg",
  "/assets/photos/010_20251012_192609.jpg",
  "/assets/photos/011_20251012_192612.jpg",
  "/assets/photos/012_20251012_192737.jpg",
  "/assets/photos/013_20251012_192740.jpg",
  "/assets/photos/014_20251012_192741.jpg",
  "/assets/photos/015_20251012_192927.jpg",
  "/assets/photos/016_20251012_193052.jpg",
  "/assets/photos/017_20251012_193144.jpg",
  "/assets/photos/018_20251012_193147.jpg",
  "/assets/photos/019_20251012_193236.jpg",
  "/assets/photos/020_20251012_193240.jpg",
  "/assets/photos/021_DSC_0002.JPG",
  "/assets/photos/022_DSC_0004.JPG",
  "/assets/photos/023_DSC_0213.JPG",
  "/assets/photos/024_DSC_0214.JPG",
  "/assets/photos/025_DSC_0217.JPG",
  "/assets/photos/026_DSC_0221.JPG",
  "/assets/photos/027_DSC_0222.JPG",
  "/assets/photos/028_DSC_0225.JPG",
  "/assets/photos/029_DSC_0227.JPG",
  "/assets/photos/030_DSC_0228.JPG",
  "/assets/photos/031_DSC_0231.JPG",
  "/assets/photos/032_DSC_0233.JPG",
  "/assets/photos/033_DSC_0235.JPG",
  "/assets/photos/034_DSC_0237.JPG",
  "/assets/photos/035_DSC_0238.JPG",
  "/assets/photos/036_DSC_0241.JPG",
  "/assets/photos/037_DSC_0244.JPG",
  "/assets/photos/038_DSC_0245.JPG",
  "/assets/photos/039_DSC_0246.JPG",
  "/assets/photos/040_DSC_0248.JPG",
  "/assets/photos/041_DSC_0251.JPG",
  "/assets/photos/042_DSC_0254.JPG",
  "/assets/photos/043_DSC_0257.JPG",
  "/assets/photos/044_DSC_0259.JPG",
  "/assets/photos/045_DSC_0261.JPG",
  "/assets/photos/046_DSC_0263.JPG",
  "/assets/photos/047_DSC_0264.JPG",
  "/assets/photos/048_DSC_0265.JPG",
  "/assets/photos/049_DSC_0267.JPG",
  "/assets/photos/050_DSC_0268.JPG",
  "/assets/photos/051_DSC_0269.JPG",
  "/assets/photos/052_DSC_0270.JPG",
  "/assets/photos/053_DSC_0272.JPG",
  "/assets/photos/054_DSC_0273.JPG"
];
function Folder({edition,year,images,onOpen,onBack}){return <main className="page-main archive-page"><section className="page-hero folder-hero"><button className="folder-back" onClick={onBack}><ChevronLeft/> BACK TO ARCHIVE</button><span>ARCHIVE / {year}</span><h1>{edition}<br/><em>PHOTO FILES.</em></h1></section><section className="section folder-section"><Reveal><div className="folder-toolbar"><div><div className="section-label">FOLDER / {year}</div><h2>{images.length} <em>memories.</em></h2></div><p>Every selected photograph from this edition, arranged as a visual archive. Click any image to view it full-screen.</p></div></Reveal><div className="folder-grid">{images.map((src,i)=><Reveal key={src}><button className="folder-photo" onClick={()=>onOpen(i)}><img src={src} alt={edition+" photo "+(i+1)} loading="lazy"/><span>{String(i+1).padStart(2,"0")}</span></button></Reveal>)}</div></section></main>}
function Archive(){const [folder,setFolder]=useState(null);const [viewer,setViewer]=useState(null);const [extra,setExtra]=useState({a:[],b:[],c:[]});useEffect(()=>{fetch("/assets/archive/archive-manifest.json").then(r=>r.ok?r.json():{}).then(m=>setExtra({a:m.fail20||[],b:m.fail2024||[],c:m.fail2025||[]})).catch(()=>{});},[]);const sets={a:[...fail20,...extra.a],b:[...fail2024,...extra.b],c:[...fail2025,...extra.c]};const meta={a:["F.A.I.L 2.0","THE SECOND EDITION"],b:["F.A.I.L 2024","2024 EDITION"],c:["F.A.I.L 2025","2025 EDITION"]};const current=folder?sets[folder]:[];const openViewer=i=>setViewer({index:i});const move=d=>setViewer(v=>({...v,index:(v.index+d+current.length)%current.length}));if(folder)return <><Folder edition={meta[folder][0]} year={meta[folder][1]} images={current} onBack={()=>{setFolder(null);setViewer(null)}} onOpen={openViewer}/>{viewer&&<AnimatePresence><motion.div className="viewer archive-viewer" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setViewer(null)}><button className="viewer-close" onClick={()=>setViewer(null)}><X/></button><button className="viewer-prev" onClick={e=>{e.stopPropagation();move(-1)}}><ChevronLeft/></button><motion.img key={current[viewer.index]} src={current[viewer.index]} onClick={e=>e.stopPropagation()} initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}}/><button className="viewer-next" onClick={e=>{e.stopPropagation();move(1)}}><ChevronRight/></button><div className="viewer-caption">{meta[folder][0]} <span>{viewer.index+1} / {current.length}</span></div></motion.div></AnimatePresence>}</>;return <main className="page-main archive-page"><section className="page-hero"><span>MEMORIES / PREVIOUS EDITIONS</span><h1>THE<br/><em>ARCHIVE.</em></h1></section><section className="section archive-section"><Reveal><div className="archive-intro"><div><div className="section-label">THE YEARS BEFORE 2026</div><h2>Three folders.<br/><em>One story.</em></h2></div><p>Open an edition to enter its photo folder. Every year keeps its own collection of memories.</p></div></Reveal><div className="archive-cards"><Reveal><button className="archive-card folder-card" onClick={()=>setFolder("a")}><div className="archive-card-image"><img src="/assets/fail20/fail20-cover.jpg" alt="F.A.I.L 2.0 cover"/><div className="archive-card-shade"/><span className="archive-card-number">01</span><span className="archive-card-open">OPEN FOLDER <ArrowUpRight/></span></div><div className="archive-card-info"><div><span>THE SECOND EDITION</span><h2>F.A.I.L 2.0</h2></div><p>The beginning of the F.A.I.L story — experiments, people and first attempts.</p><b>{sets.a.length} PHOTOS / OPEN FOLDER</b></div></button></Reveal><Reveal><button className="archive-card folder-card" onClick={()=>setFolder("b")}><div className="archive-card-image"><img src="/assets/fail2024/fail2024-cover.jpg" alt="F.A.I.L 2024 cover"/><div className="archive-card-shade"/><span className="archive-card-number">02</span><span className="archive-card-open">OPEN FOLDER <ArrowUpRight/></span></div><div className="archive-card-info"><div><span>2024 EDITION</span><h2>F.A.I.L 2024</h2></div><p>A new chapter of F.A.I.L, bringing fresh ideas, teams and memories together.</p><b>{sets.b.length} PHOTOS / OPEN FOLDER</b></div></button></Reveal><Reveal><button className="archive-card folder-card" onClick={()=>setFolder("c")}><div className="archive-card-image"><img src={fail2025[0]} alt="F.A.I.L 2025 cover"/><div className="archive-card-shade"/><span className="archive-card-number">03</span><span className="archive-card-open">OPEN FOLDER <ArrowUpRight/></span></div><div className="archive-card-info"><div><span>2025 EDITION</span><h2>F.A.I.L 2025</h2></div><p>The edition that led into F.A.I.L 2026 — a growing archive of attempts and learning.</p><b>{sets.c.length} PHOTOS / OPEN FOLDER</b></div></button></Reveal></div></section></main>}
function Register(){const [submitted,setSubmitted]=useState(false);return <main className="page-main"><section className="page-hero"><span>F.A.I.L 2026 / REGISTRATION</span><h1>MAKE THE<br/><em>ATTEMPT.</em></h1></section><section className="section register-section"><div className="register-grid"><div className="register-intro"><div className="section-label">REGISTRATION</div><h2>F.A.I.L 2026</h2><p className="lead">Exclusively for freshers. Registration fee: <b>Rs. 60</b>.</p><div className="register-details"><div><CalendarDays/><b>17-18 Oct 2026</b></div><div><MapPin/><b>Main Building, BEC</b></div></div><p className="note">Use the QR code/payment details provided by the organizing team. After payment, submit your UTR and screenshot with your registration.</p></div><form onSubmit={e=>{e.preventDefault();setSubmitted(true)}} className="reg-form"><label>Email ID<input required type="email"/></label><label>Name<input required/></label><label>CSN<input required/></label><label>Department<input required/></label><label>WhatsApp Number<input required type="tel"/></label><div className="payment-box"><span>REGISTRATION FEE</span><strong>Rs. 60</strong><img className="register-qr" src="/assets/register-qr.png" alt="Scan to register"/><a className="qr-link" href="https://forms.gle/1rRLvXhasNbVpUtr5" target="_blank" rel="noreferrer">SCAN TO REGISTER </a><small>Registration form link from the official F.A.I.L 2026 poster.</small></div><label>UTR / Transaction ID<input required/></label><label>Payment Screenshot<input required type="file" accept="image/*"/></label><label className="check"><input required type="checkbox"/> I have completed the 60 payment.</label><button className="button" type="submit">SUBMIT REGISTRATION <ArrowUpRight/></button>{submitted&&<p className="form-success">Details captured in the page. The final submission connection will be wired to the official registration sheet before deployment.</p>}</form></div></section></main>}
function Contact(){const contacts=[["Bharatesh B","Chair, BEC-IEEE","9113218190"],["Sangamesh K","Vice-Chair, BEC-IEEE","9844873832"],["Apporva Joshi","Operating Committee Chair","8123520663"],["Pranav R Pattan","Operating Committee Vice Chair","8310760194"],["Vishwanath Diggavi","MDC Chair","9686937632"],["Shreyas Suresh Rathod","Webmaster","9632380805"]];return <main className="page-main"><section className="page-hero"><span>BEC-IEEE / F.A.I.L 2026</span><h1>GET IN<br/><em>TOUCH.</em></h1></section><section className="section"><div className="section-label">CONTACTS</div><div className="contact-intro"><p className="lead">Questions about the event or registration? Reach out to the BEC-IEEE team.</p></div><div className="contact-grid">{contacts.map(c=><article key={c[0]}><span>{c[1]}</span><h3>{c[0]}</h3><a href={"tel:"+c[2]}>{c[2]}</a></article>)}</div></section></main>}
function App(){const [path,setPath]=useState(window.location.pathname);const [intro,setIntro]=useState(true);useEffect(()=>{const f=()=>setPath(window.location.pathname);addEventListener("popstate",f);const t=setTimeout(()=>setIntro(false),3300);return()=>{removeEventListener("popstate",f);clearTimeout(t)}},[]);useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"});},[path]);const page=info[path]?path:"/";return <div className="site"><AnimatePresence>{intro&&<motion.div className="intro" initial={{opacity:1}} exit={{opacity:0}} transition={{duration:.9,ease:[.76,0,.24,1]}}><div className="intro-word" aria-hidden="true">BEC-IEEE</div><div className="intro-content"><motion.div className="intro-logos" initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8}}><img src="/assets/bec-logo.png" alt="BEC"/><span/><img src="/assets/bec-ieee.png" alt="BEC-IEEE"/></motion.div><div className="intro-title-wrap"><motion.h1 className="intro-fail-title" initial={{opacity:0,scale:1.65}} animate={{opacity:1,scale:1}} transition={{delay:.45,duration:1.25,ease:[.22,1,.36,1]}}><span>F</span><i>.</i><span>A</span><i>.</i><span>I</span><i>.</i><span>L</span></motion.h1><motion.b className="intro-year" initial={{opacity:0,x:60}} animate={{opacity:1,x:0}} transition={{delay:.9,duration:.7}}><span>20</span><span>26</span></motion.b></div><motion.div className="intro-line" initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:1.15,duration:.8}}/><motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.35}}>FIRST ATTEMPT IN INNOVATIVE LEARNING</motion.p></div></motion.div>}</AnimatePresence><Header/>{page==="/"&&<Home/>}{page==="/about"&&<About/>}{page==="/archive"&&<Archive/>}{page==="/register"&&<Register/>}{page==="/contact"&&<Contact/>}<Footer/></div>}
createRoot(document.getElementById("root")).render(<App/>);




