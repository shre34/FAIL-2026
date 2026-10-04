import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, CalendarDays, MapPin, Sparkles } from "lucide-react";
import "./styles.css";

const photos = Object.values(import.meta.glob("/public/assets/photos/*", {eager:true,query:"?url",import:"default"}));

function App(){
 return <div className="site">
  <div className="grain"/>
  <header className="nav"><a className="brand" href="#home"><span>IEEE</span><b>BEC</b></a><nav><a href="#about">About</a><a href="#editions">Editions</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="#contact">Join F.A.I.L <ArrowUpRight size={16}/></a></header>
  <main id="home">
   <section className="hero">
    <div className="orb"/>
    <div className="eyebrow"><span className="dot"/> BEC-IEEE STUDENT BRANCH · PRESENTS</div>
    <motion.h1 initial={{opacity:0,y:45}} animate={{opacity:1,y:0}} transition={{duration:.8}}>F.A.I.L <em>3.0</em></motion.h1>
    <p className="tagline">First Attempt in <strong>Innovative Learning.</strong></p>
    <p className="intro">Your first attempt doesn't have to be perfect. It just has to begin.</p>
    <div className="hero-actions"><a className="primary" href="#about">Explore the experience <ArrowDown size={17}/></a><span>Basaveshwara Engineering College<br/>Bagalkote, Karnataka</span></div>
    <div className="hero-meta"><div><CalendarDays/><span><b>17–18 OCTOBER</b><small>2026</small></span></div><div><MapPin/><span><b>BEC CAMPUS</b><small>Bagalkote</small></span></div><div><Sparkles/><span><b>LEARN · TRY · FAIL</b><small>Repeat better.</small></span></div></div>
   </section>
   <section id="about" className="about section"><div className="section-kicker">01 / THE IDEA</div><div className="about-grid"><h2>Failure is not<br/><i>the opposite</i> of learning.</h2><div><p className="lead">F.A.I.L 3.0 is a space for first-year minds to experiment, collaborate, make mistakes and discover what they can build.</p><p>Presented by the BEC-IEEE Student Branch, the event brings professional skills, digital tools, teamwork and innovative learning together in one hands-on experience.</p><a className="text-link" href="#editions">See where we've been <ArrowUpRight size={17}/></a></div></div></section>
   <section id="editions" className="editions section"><div className="section-kicker">02 / THE ARCHIVE</div><div className="edition-head"><h2>Before <i>3.0</i></h2><p>Every attempt leaves something behind.</p></div><div className="gallery">{photos.slice(0,12).map((src,i)=><motion.figure key={src} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:(i%4)*.07}}><img src={src} alt={"F.A.I.L archive "+(i+1)}/><figcaption>F.A.I.L <b>{i%2===0?"2.0":"2025"}</b></figcaption></motion.figure>)}</div></section>
   <section className="statement"><span>THE FIRST ATTEMPT</span><h2>Try something<br/><i>worth failing at.</i></h2></section>
   <section id="contact" className="contact section"><div className="section-kicker">03 / FIND US</div><h2>Ready to make<br/><i>your first attempt?</i></h2><div className="contact-row"><div><span>HOSTED BY</span><b>Basaveshwara Engineering College</b><small>Bagalkote, Karnataka</small></div><div><span>ORGANIZED BY</span><b>BEC-IEEE Student Branch</b><small>IEEE Student Branch · STB35261</small></div><a className="primary" href="https://www.becieee.org/" target="_blank">BEC-IEEE <ArrowUpRight size={17}/></a></div></section>
  </main>
  <footer><span>F.A.I.L 3.0 © 2026</span><span>FIRST ATTEMPT IN INNOVATIVE LEARNING</span><a href="#home">Back to top ↑</a></footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);