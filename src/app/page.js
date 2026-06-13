"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Mic, 
  Music, 
  Sparkles, 
  Utensils, 
  Users, 
  Heart, 
  ShieldAlert, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Crown,
  Star
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

// Custom Instagram Icon SVG
const InstagramIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Home() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#020006] text-slate-100 selection:bg-amber-500/30 overflow-x-hidden bg-grain"
      style={{
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      }}
    >
      {/* Dynamic Spotlight Effect */}
      <div className="pointer-events-none fixed inset-0 z-30 spotlight" />

      {/* Background Decor */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-900/10 blur-[120px] animate-pulse-slow" />
        <ParticleBackground />
      </div>

      <main className="relative z-10">
        
        {/* 1. HERO SECTION - BOLDER & ASYMMETRIC */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-7xl mx-auto flex flex-col items-center text-center"
          >
            {/* Student Organized Sticker */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="sticker bg-amber-400 text-black px-6 py-2 font-black text-sm uppercase tracking-[0.2em] mb-12 flex items-center gap-2"
            >
              <Star className="w-4 h-4 fill-current" />
              Student Organized
              <Star className="w-4 h-4 fill-current" />
            </motion.div>

            <div className="relative mb-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-amber-500 font-bold tracking-[0.4em] uppercase text-sm md:text-base mb-4"
              >
                MIT & MITM B.Tech Batch &apos;26 Presents
              </motion.p>
              
              <h1 className="relative group">
                <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter italic">
                  FAREWELL
                </span>
                <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter text-gold-gradient -mt-4 sm:-mt-8 md:-mt-12 ml-4 md:ml-20">
                  2026
                </span>
                {/* Decorative Element */}
                <div className="absolute -top-10 -right-10 hidden lg:block w-32 h-32 border-4 border-dashed border-amber-500/20 rounded-full animate-spin-slow" />
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-3xl text-slate-400 max-w-2xl font-light leading-tight mt-4 flex flex-col gap-4"
            >
              <span>One Last Night. <span className="marker-underline text-white font-medium italic">Endless Memories.</span></span>
              <span className="text-sm md:text-base font-bold tracking-[0.2em] text-amber-500/80 uppercase">
                &quot;College didn&apos;t give you the Perfect Ending, Let&apos;s create one by ourselves.&quot;
              </span>
              <span className="text-base md:text-lg text-purple-400 font-bold italic mt-2 animate-pulse">
                &quot;Juniors, come witness the legacy. One night to bridge the gap and celebrate the legends of &apos;26!&quot;
              </span>
            </motion.p>

            {/* Premium CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-16 flex flex-col sm:flex-row gap-6 items-center"
            >
              <a
                href="https://chat.whatsapp.com/HbR4vn97EAcKdCfbUUkG5f"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-5 bg-emerald-500 text-black font-black text-xl rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 fill-current" />
                  JOIN THE SQUAD
                </span>
              </a>
              
              <a
                href="https://instagram.com/mit_btech_farewell_2026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-purple-400 font-bold tracking-widest text-sm transition-colors group"
              >
                <InstagramIcon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                STAY UPDATED / @INSTA
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </section>


        {/* 2. DATE & VENUE - UPDATED */}
        <section className="py-32 px-4 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "WHEN", value: "21 JUNE 2026", sub: "SUNDAY", icon: Calendar, accent: "text-amber-500", highlight: true },
              { label: "WHERE", value: "ATHARV PALACE", sub: "UJJAIN (PREMIUM VENUE)", icon: MapPin, accent: "text-rose-500", glow: true },
              { label: "PASSES", value: "OUT SOON", sub: "STAY TUNED", icon: Mic, accent: "text-cyan-500" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group p-1"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-amber-500/50 transition-colors ${item.accent}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="font-black tracking-[0.3em] text-xs text-slate-500 uppercase">{item.label}</span>
                  </div>
                  <h3 className={`text-3xl font-black transition-colors tracking-tight leading-none ${item.highlight ? 'text-amber-400' : 'group-hover:text-amber-400'} ${item.glow ? 'animate-glow-gold' : ''}`}>
                    {item.value}
                  </h3>
                  {item.sub && (
                    <p className={`mt-2 font-bold text-sm tracking-widest ${item.glow ? 'text-amber-500 animate-pulse' : 'text-slate-500 uppercase'}`}>
                      {item.sub}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* 3. HIGHLIGHTS - POLAROID GRID */}
        <section className="py-32 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-sm font-black text-amber-500 tracking-[0.4em] uppercase mb-4">The Experience</h2>
                <p className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
                  WHAT <span className="text-transparent border-t-2 border-amber-500/20" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>AWAITS</span> YOU?
                </p>
              </div>
              <p className="text-slate-500 font-medium max-w-xs md:text-right italic">
                A carefully curated night for the class of &apos;26 to celebrate four years of madness.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 px-4">
              {[
                { title: "ELITE DJ NIGHT", icon: Music, color: "bg-fuchsia-500", desc: "Experience bone-shaking bass with our premium club-grade sound system and guest DJ." },
                { title: "LIGHT & MAGIC", icon: Sparkles, color: "bg-amber-500", desc: "Stunning synchronized laser shows and immersive lighting to set the perfect mood." },
                { title: "PRIME FOOD", icon: Utensils, color: "bg-rose-500", desc: "Indulge in a premium multi-cuisine dinner buffet crafted to perfection.", highlight: true },
                { title: "NETWORKING", icon: Users, color: "bg-cyan-500", desc: "Reconnect, chat, and forge lifelong links with your classmates." },
                { title: "MEMORIES", icon: Heart, color: "bg-purple-500", desc: "Capture beautiful moments that will stay with you long after graduation." }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, rotate: idx % 2 === 0 ? -5 : 5, scale: 0.9 }}
                  whileInView={{ opacity: 1, rotate: idx % 2 === 0 ? -2 : 2, scale: 1 }}
                  whileHover={{ rotate: 0, scale: 1.05, zIndex: 20 }}
                  viewport={{ once: true }}
                  className={`polaroid-card group cursor-pointer ${card.highlight ? 'ring-4 ring-amber-500/30' : ''}`}
                >
                  <div className={`aspect-square w-full mb-4 flex items-center justify-center ${card.color} rounded-sm group-hover:animate-pulse transition-transform`}>
                    <card.icon className="w-16 h-16 text-white drop-shadow-lg" />
                  </div>
                  <h4 className="font-black text-xl mb-2 uppercase tracking-tighter">{card.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-700 font-medium">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* 4. IMPORTANT INFO - THE "NOTICE BOARD" */}
        <section className="py-32 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              
              {/* Information List */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="sticker bg-white text-black px-6 py-2 font-black text-xs uppercase tracking-widest inline-block mb-8">
                  Official Guidelines
                </div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-12 uppercase leading-none">
                  IMPORTANT <br/><span className="text-amber-500">INFORMATION</span>
                </h2>
                
                <div className="space-y-8">
                  {[
                    "All MIT & MITM B.Tech Students Allowed (1st to 4th Year)",
                    "Event Date: 21st June 2026 (Sunday)",
                    "Revealed Venue: Atharv Palace, Ujjain",
                    "College ID required for registration & entry",
                    "Entry passes will be out soon - Stay Tuned!",
                    "Student's Organized Event for Students, No institution involved"
                  ].map((info, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex gap-6 items-start group"
                    >
                      <div className="mt-1 flex items-center justify-center w-8 h-8 rounded-full border-2 border-amber-500/30 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 group-hover:text-black" />
                      </div>
                      <p className="text-lg md:text-xl font-bold text-slate-300 group-hover:text-white transition-colors">{info}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Security - Red Notice */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-12 bg-rose-600 text-white rounded-3xl sticker mt-12 lg:mt-24 shadow-[0_0_50px_rgba(225,29,72,0.3)]"
              >
                <ShieldAlert className="w-12 h-12 mb-8" />
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">
                  Strict Security <br/>& Policy
                </h3>
                <ul className="space-y-4">
                  {[
                    "Professional Bouncers for Security",
                    "Tobacco Strictly Prohibited",
                    "Cigarettes Strictly Prohibited",
                    "Alcohol Strictly Prohibited",
                    "Misconduct Will Lead To Removal",
                    "Entry Only With Verification"
                  ].map((rule, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-black text-sm uppercase tracking-widest border-b border-white/20 pb-4 last:border-0">
                      <span className="w-2 h-2 bg-white rounded-full" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>


        {/* 5. ORGANIZING TEAM - THE VIP PASS */}
        <section className="py-32 px-4 bg-[#03000a]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-black text-purple-500 tracking-[0.4em] uppercase mb-12">Who&apos;s Running The Show?</h2>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative max-w-xl mx-auto"
            >
              {/* The "VIP Pass" Card */}
              <div className="relative bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-500/40 p-12 rounded-[2rem] overflow-hidden group hover:border-amber-400 transition-colors shadow-[0_0_50px_rgba(0,0,0,1)]">
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full" />
                <div className="absolute top-6 right-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Crown className="w-20 h-20 text-amber-500" />
                </div>
                
                <div className="relative flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-amber-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-amber-500 shadow-2xl bg-zinc-800">
                      <Image 
                        src="/nilesh.png" 
                        alt="Nilesh Panchal" 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-16 h-1 bg-amber-500 mb-8 rounded-full" />
                  <span className="text-amber-500 font-black text-xs tracking-[0.4em] uppercase mb-2">HEAD ORGANIZER</span>
                  <h3 className="text-5xl font-black tracking-tighter text-white uppercase mb-1">Nilesh Panchal</h3>
                  <p className="text-slate-500 font-bold tracking-widest text-xs uppercase mb-10">CSE FINAL YEAR &apos;26</p>
                  
                  <div className="w-full h-px bg-white/5 mb-10" />

                  <div className="flex flex-col w-full gap-4">
                    <a
                      href="tel:+917773095684"
                      className="w-full flex items-center justify-center gap-3 py-4 bg-white text-black font-black uppercase text-sm rounded-xl hover:bg-amber-400 transition-colors shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      CALL: 7773095684
                    </a>
                    <a
                      href="https://wa.me/917773095684"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 py-4 border-2 border-emerald-500/50 text-emerald-400 font-black uppercase text-sm rounded-xl hover:bg-emerald-500/10 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WHATSAPP NILESH
                    </a>
                  </div>
                </div>

                {/* Decorative Holes like a real pass */}
                <div className="absolute -left-4 top-1/2 w-8 h-8 bg-[#03000a] rounded-full" />
                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-[#03000a] rounded-full" />
              </div>

              {/* Anchor Mentions */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/5"
              >
                <div className="p-2 bg-amber-500/20 rounded-lg">
                  <Mic className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">HOST / ANCHOR</span>
                  <span className="font-bold text-slate-200">To Be Announced Soon</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>


        {/* 6. WHATSAPP & INSTA - THE SOCIAL HUB */}
        <section className="py-32 px-4 border-t border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-6">
                GET <br/><span className="text-emerald-500">CONNECTED</span>
              </h2>
              <p className="text-slate-400 max-w-md mx-auto font-medium">
                Don&apos;t miss any announcements regarding passes, dates, venue locations, or schedules. Stay connected with the core batch!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {/* WhatsApp Card */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://chat.whatsapp.com/HbR4vn97EAcKdCfbUUkG5f"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-10 bg-emerald-500 rounded-[2.5rem] flex flex-col justify-between min-h-[300px] shadow-[0_20px_50px_rgba(16,185,129,0.2)]"
              >
                <MessageCircle className="w-12 h-12 text-black" />
                <div>
                  <h3 className="text-black font-black text-4xl leading-none mb-4 uppercase tracking-tighter">JOIN THE <br/>OFFICIAL GROUP</h3>
                  <div className="flex items-center gap-2 text-black/60 font-black text-xs uppercase tracking-widest">
                    TAP TO JOIN <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>

              {/* Instagram Card */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://instagram.com/mit_btech_farewell_2026"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-10 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 rounded-[2.5rem] flex flex-col justify-between min-h-[300px] shadow-[0_20px_50px_rgba(239,68,68,0.2)]"
              >
                <InstagramIcon className="w-12 h-12 text-white" />
                <div>
                  <h3 className="text-white font-black text-4xl leading-none mb-4 uppercase tracking-tighter">FOLLOW ON <br/>INSTAGRAM</h3>
                  <div className="flex items-center gap-2 text-white/60 font-black text-xs uppercase tracking-widest">
                    @mit_btech_farewell_2026 <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </section>


        {/* 7. FOOTER */}
        <footer className="py-24 px-4 bg-black relative border-t border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <span className="text-5xl md:text-7xl font-black tracking-tighter opacity-10 uppercase mb-12 select-none">
              BY STUDENTS FOR STUDENTS
            </span>
            
            <div className="max-w-2xl text-center space-y-8">
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed uppercase tracking-[0.2em] font-bold">
                Disclaimer: This farewell event is independently organized by students and is not affiliated with or managed by Mahakal Institute of Technology, Mahakal Institute of Technology & Management, or any educational institution.
              </p>
              <div className="w-12 h-1 bg-amber-500 mx-auto opacity-50" />
              <p className="text-slate-700 text-[10px] font-black tracking-[0.5em] uppercase">
                &copy; {new Date().getFullYear()} B.Tech Batch 2026. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
