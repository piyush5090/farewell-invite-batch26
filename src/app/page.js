"use client";

import { motion } from "framer-motion";
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
  Crown
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

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#03000a]">
      
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft colorful ambient glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-900/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] rounded-full bg-purple-700/10 blur-[130px] animate-pulse-slow" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] animate-pulse-slow" />
        
        {/* Particle Canvas */}
        <ParticleBackground />
      </div>

      {/* Main Content Wrappers */}
      <div className="relative z-10 flex flex-col w-full">

        {/* 1. HERO SECTION */}
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center max-w-4xl"
          >
            {/* Student Organized Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-8 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Student Organized Event
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg font-medium tracking-widest text-purple-300 uppercase sm:text-xl md:text-2xl"
            >
              MIT & MITM B.Tech Batch &apos;26
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-4 text-6xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl font-sans"
            >
              Farewell <span className="text-gold-gradient font-black block sm:inline">2026</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6 text-xl text-slate-300 max-w-xl font-light sm:text-2xl"
            >
              One Last Night. <span className="text-amber-400 font-medium">Endless Memories.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="https://chat.whatsapp.com/HbR4vn97EAcKdCfbUUkG5f"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-lg shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.4)] transition-all duration-300 active:scale-95"
              >
                <MessageCircle className="w-5.5 h-5.5 fill-current" />
                Join WhatsApp Group
              </a>
              <a
                href="https://instagram.com/mit_btech_farewell_2026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-panel bg-white/5 hover:bg-white/10 text-white font-semibold text-lg border border-purple-500/30 hover:border-purple-400/50 shadow-lg hover:shadow-purple-500/10 transition-all duration-300 active:scale-95"
              >
                <InstagramIcon className="w-5.5 h-5.5 text-purple-400" />
                Follow on Instagram
              </a>
            </motion.div>
          </motion.div>
        </section>


        {/* 2. COUNTDOWN / ANNOUNCEMENT SECTION */}
        <section className="py-24 px-4 w-full max-w-6xl mx-auto z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="w-full text-center mb-12"
          >
            {/* Announcement Card */}
            <div className="inline-block px-8 py-6 rounded-2xl glass-panel-gold border-amber-500/20 bg-amber-500/5 text-amber-200 text-xl md:text-2xl font-bold tracking-wide shadow-[0_0_30px_rgba(212,175,55,0.05)] animate-pulse-slow">
              🎉 Event Date Announcement Coming Soon
            </div>
          </motion.div>

          {/* TBA Detail Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            {[
              { title: "Date", desc: "To Be Announced", icon: Calendar, color: "text-amber-400 border-amber-500/10" },
              { title: "Venue", desc: "To Be Announced", icon: MapPin, color: "text-purple-400 border-purple-500/10" },
              { title: "Anchor", desc: "To Be Announced", icon: Mic, color: "text-blue-400 border-blue-500/10" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`flex flex-col items-center p-8 rounded-2xl glass-panel text-center hover:bg-white/5 border transition-all duration-300 ${item.color.split(" ")[1]}`}
              >
                <div className="p-4 rounded-full bg-white/5 mb-4 border border-white/10">
                  <item.icon className={`w-8 h-8 ${item.color.split(" ")[0]}`} />
                </div>
                <h3 className="text-slate-400 uppercase text-xs font-semibold tracking-widest">{item.title}</h3>
                <p className="mt-2 text-2xl font-black text-white">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>


        {/* 3. ABOUT EVENT */}
        <section className="py-24 px-4 w-full bg-black/40 border-y border-purple-950/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-sm font-semibold tracking-widest text-amber-400 uppercase">Highlights</h2>
              <p className="mt-2 text-4xl font-extrabold sm:text-5xl text-white">What Awaits You?</p>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-amber-500 mx-auto mt-4 rounded-full" />
            </motion.div>

            {/* Grid of about cards */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {[
                { title: "DJ Night", icon: Music, desc: "Lose yourself to absolute bass, beats, and tracks curated by our guest DJ.", color: "text-fuchsia-400" },
                { title: "Dance Floor", icon: Sparkles, desc: "A premium energetic space designed for you to dance all night long.", color: "text-amber-400" },
                { title: "Premium Food", icon: Utensils, desc: "Indulge in a premium multi-cuisine dinner buffet crafted to perfection.", color: "text-rose-400" },
                { title: "Networking", icon: Users, desc: "Reconnect, chat, and forge lifelong links with your classmates.", color: "text-cyan-400" },
                { title: "Memories Forever", icon: Heart, desc: "Capture beautiful moments that will stay with you long after graduation.", color: "text-purple-400" }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="flex flex-col p-6 rounded-2xl glass-panel border-white/5 hover:border-purple-500/20 transition-all duration-300"
                >
                  <div className="p-3 w-fit rounded-xl bg-purple-950/20 border border-purple-500/10 mb-4">
                    <card.icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* 5. IMPORTANT INFORMATION */}
        <section className="py-24 px-4 w-full bg-black/40 border-y border-purple-950/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-sm font-semibold tracking-widest text-amber-400 uppercase">Guidelines</h2>
              <p className="mt-2 text-4xl font-extrabold sm:text-5xl text-white">Important Information</p>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-amber-500 mx-auto mt-4 rounded-full" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                "Only MIT & MITM B.Tech Batch 2026 Students Allowed",
                "Event Date Will Be Announced Soon",
                "Prime Venue In Ujjain To Be Disclosed Soon",
                "Id will be required for registration",
                "Entry pass will be provided after registration which is imp for entry",
                "Student's Organized Event for Students, No institution involved"
              ].map((info, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-5 rounded-2xl glass-panel-gold bg-amber-500/[0.01] hover:bg-amber-500/[0.04] transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 font-medium text-sm md:text-base leading-relaxed">{info}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* 6. SECURITY & RULES SECTION */}
        <section className="py-24 px-4 w-full max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold tracking-widest text-rose-500 uppercase flex items-center justify-center gap-1.5">
              <ShieldAlert className="w-4 h-4 animate-bounce" />
              Safety Protocols
            </h2>
            <p className="mt-2 text-4xl font-extrabold sm:text-5xl text-white">Security & Rules</p>
            <div className="w-16 h-1 bg-rose-600 mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {[
              "Tobacco Strictly Prohibited",
              "Cigarettes Strictly Prohibited",
              "Alcohol Strictly Prohibited",
              "Misconduct Will Lead To Removal",
              "Entry Only With Verification"
            ].map((rule, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col items-center p-6 rounded-2xl bg-rose-950/15 hover:bg-rose-950/25 border border-rose-500/20 text-center shadow-[0_0_15px_rgba(244,63,94,0.05)] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-500/10 text-rose-400 mb-3 border border-rose-500/30">
                  <span className="font-bold text-lg">!</span>
                </div>
                <h4 className="text-slate-200 font-bold text-sm md:text-base leading-snug">{rule}</h4>
              </motion.div>
            ))}
          </motion.div>
        </section>


        {/* 7. ORGANIZING TEAM SECTION */}
        <section className="py-24 px-4 w-full bg-black/40 border-y border-purple-950/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-sm font-semibold tracking-widest text-amber-400 uppercase">The Crew</h2>
              <p className="mt-2 text-4xl font-extrabold sm:text-5xl text-white">Organizing Team</p>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-amber-500 mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-lg mx-auto">
              
              {/* Highlighted Head Organizer Card */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="relative p-8 rounded-3xl glass-panel-gold border-amber-500/30 bg-amber-500/[0.02] shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:animate-glow-gold transition-all duration-500 text-center"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 border border-yellow-300 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  <Crown className="w-6 h-6 text-black fill-current" />
                </div>
                
                <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block mt-4">Head Organizer</span>
                <h3 className="mt-2 text-3xl font-black text-white">Nilesh Panchal</h3>
                <p className="text-slate-400 text-sm font-medium mt-1">CSE Final Year</p>
                
                {/* Contact and Phone */}
                <div className="mt-6 flex flex-col items-center gap-3">
                  <a
                    href="tel:+917773095684"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-102"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    Call Nilesh: 7773095684
                  </a>
                  <a
                    href="https://wa.me/917773095684"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-102"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    WhatsApp Nilesh
                  </a>
                </div>
              </motion.div>

              {/* Smaller flanking mentions for Marketing and Anchor */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-2"
              >
                {/* Anchor */}
                <motion.div
                  variants={fadeInUp}
                  className="p-5 rounded-2xl glass-panel border-white/5 hover:border-purple-500/10 text-center transition-all duration-300"
                >
                  <Mic className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Anchor</span>
                  <h4 className="text-amber-400 font-bold text-base mt-1">To Be Announced Soon</h4>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* 8. WHATSAPP SECTION */}
        <section className="py-24 px-4 w-full max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl glass-panel border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 via-black to-[#03000a] shadow-[0_0_40px_rgba(16,185,129,0.05)] text-center relative overflow-hidden"
          >
            {/* Ambient emerald blur */}
            <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-emerald-500/10 blur-[80px]" />
            
            <span className="text-emerald-400 font-extrabold text-xs uppercase tracking-widest">Connect Instantly</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl text-white">Join The Official Student Group</h2>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Don&apos;t miss any announcements regarding passes, dates, venue locations, or schedules. Stay connected with the core batch!
            </p>
            
            <div className="mt-8 flex justify-center">
              <a
                href="https://chat.whatsapp.com/HbR4vn97EAcKdCfbUUkG5f"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:scale-102"
              >
                <MessageCircle className="w-5.5 h-5.5 fill-current" />
                Join WhatsApp Group
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>
        </section>


        {/* 9. INSTAGRAM SECTION */}
        <section className="py-24 px-4 w-full bg-black/40 border-t border-purple-950/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl glass-panel border-purple-500/20 bg-gradient-to-br from-purple-950/20 via-black to-[#03000a] shadow-[0_0_40px_rgba(147,51,234,0.05)]"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <InstagramIcon className="w-8 h-8 text-white" />
              </div>
              <span className="text-purple-300 font-extrabold text-xs uppercase tracking-widest">Instagram Community</span>
              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">@mit_btech_farewell_2026</h3>
              <p className="mt-3 text-slate-400 max-w-md mx-auto text-sm md:text-base leading-relaxed">
                Tune in to view official event posters, countdown highlights, memories, and announcements on social media.
              </p>
              
              <div className="mt-8 flex justify-center">
                <a
                  href="https://instagram.com/mit_btech_farewell_2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-black font-extrabold text-base transition-all duration-300 hover:scale-102 shadow-lg"
                >
                  Follow On Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </section>


        {/* 10. FOOTER */}
        <footer className="py-16 px-4 w-full bg-[#020008] border-t border-purple-950/40 relative z-10 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            
            {/* By Students, For Students tagline */}
            <div className="text-xl font-bold tracking-wide text-white uppercase flex items-center gap-2">
              <span className="text-gold-gradient font-black">By Students, For Students</span>
            </div>
            
            <div className="w-12 h-0.5 bg-purple-500/20 my-6 rounded-full" />
            
            {/* Disclaimer */}
            <p className="text-slate-500 text-xs sm:text-sm max-w-3xl leading-relaxed font-light">
              <span className="text-slate-400 font-bold uppercase tracking-wider block mb-2 text-[10px]">Disclaimer</span>
              This farewell event is independently organized by students and is not affiliated with or managed by Mahakal Institute of Technology, Mahakal Institute of Technology & Management, or any educational institution.
            </p>
            
            <p className="mt-8 text-slate-600 text-xs font-light">
              &copy; {new Date().getFullYear()} B.Tech Batch 2026. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
