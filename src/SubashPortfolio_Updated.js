import React, { useEffect, useState } from "react";

const SubashPortfolio = () => {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [revealed, setRevealed] = useState({ email: false, phone: false });

  useEffect(() => {
    document.title = "Subash R — ECE Engineer";
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.body.className = saved === "light" ? "light-mode" : "";
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const downloadResume = () => {
    window.location.href = "https://drive.google.com/uc?export=download&id=1n6KZqkIEOXTvVx8jowSJR4lXwl8ey0SD";
  };
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.body.className = next === "light" ? "light-mode" : "";
    localStorage.setItem("theme", next);
  };
  const reveal = (key) => setRevealed((r) => ({ ...r, [key]: true }));

  const navItems = ["home", "about", "resume", "projects", "coding", "contact"];

  const skills = [
    { title: "Programming", icon: "⟨/⟩", items: ["Python", "C · Embedded C", "VHDL / Verilog", "MATLAB"] },
    { title: "Frameworks", icon: "⚙", items: ["TensorFlow · TF Lite", "ResNet-50 · CNN · LSTM", "KiCad · STM32CubeIDE", "VS Code · Arduino IDE"] },
    { title: "Hardware", icon: "◈", items: ["ESP32-S3 · STM32H743", "TI BQ76952 · Arduino", "LoRa · GPS Modules", "PCB Design"] },
    { title: "Domains", icon: "◉", items: ["Embedded Systems", "Battery Management", "Edge AI · IoT", "Digital Logic Design"] },
    { title: "Soft Skills", icon: "◎", items: ["Communication", "Problem Solving", "Collaboration", "Fast Learner"] },
    { title: "Languages", icon: "Aa", items: ["English", "Tamil"] },
  ];

  const projects = [
    {
      num: "01", color: "#2563EB",
      title: "SAFE-LFP BMS",
      subtitle: "Physics-Aware Fault Detection · Team ZENSTORM · 2025–2026",
      stack: "ESP32-S3 · STM32H743 · TI BQ76952 · TensorFlow Lite · Python",
      desc: "BMS for a ~1 kWh LFP pack detecting faults without pre-labeled training data. Fuses 7 sensor modalities on-device in under 10 ms, delivering a 45-cycle early warning advantage over threshold-based systems.",
      tags: ["ESP32-S3", "STM32H743", "TF Lite", "Edge AI", "BMS"],
    },
    {
      num: "02", color: "#0284C7",
      title: "AI Plant Disease Detector",
      subtitle: "Semester 6 Project · ECE Dept. · 2026",
      stack: "Python · MATLAB · TensorFlow · ResNet-50 · CNN",
      desc: "ResNet-50/CNN classifier identifying plant diseases from leaf images. Web interface delivers instant predictions with confidence scores for easy interpretation.",
      tags: ["ResNet-50", "CNN", "TensorFlow", "MATLAB"],
    },
    {
      num: "03", color: "#0369A1",
      title: "LoRa GPS Tracker",
      subtitle: "Semester 4 Project · ECE Dept. · 2024",
      stack: "LoRa · GPS Module · Low-Power MCU",
      desc: "Long-range GPS tracking over LoRa, optimised for low power in remote or battery-operated setups. Sends boundary-breach alerts in under one second.",
      tags: ["LoRa", "GPS", "IoT", "Low Power"],
    },
  ];

  const achievements = [
    { medal: "🥇", rank: "1st Place", event: "Electric Scope", venue: "GEC Coimbatore · 2026" },
    { medal: "🥇", rank: "1st Place", event: "Visual to Virtual", venue: "GEC Coimbatore · 2026" },
    { medal: "🥈", rank: "2nd Place", event: "Shark Tank", venue: "GEC Coimbatore · 2026" },
    { medal: "🎯", rank: "Participant", event: "Multiverse Hackathon", venue: "MKCE Karur · 2026" },
  ];

  const certifications = [
    { name: "Introduction to Internet of Things", org: "NPTEL", score: "73%", icon: "📡" },
    { name: "Machine Learning & Deep Learning Fundamentals", org: "NPTEL", score: "54%", icon: "🧠" },
  ];

  const codingProfiles = [
    { name: "LeetCode", abbr: "LC", username: "rsubash_1127", url: "https://leetcode.com/u/subash_r1127/", hue: "#F97316" },
    { name: "CodeChef", abbr: "CC", username: "subashr_1127", url: "https://www.codechef.com/users/subashr_1127", hue: "#854D0E" },
    { name: "HackerRank", abbr: "HR", username: "subash11122005", url: "https://www.hackerrank.com/subashr11122005", hue: "#16A34A" },
  ];

  const socialLinks = [
    { name: "GitHub", handle: "@subashr1127", url: "https://github.com/subashr1127", icon: "⌥" },
    { name: "LinkedIn", handle: "Subash R", url: "https://www.linkedin.com/in/subash-r1125", icon: "in" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        /* ── TOKENS ── */
        :root {
          /* blues */
          --blue-50:  #EFF6FF;
          --blue-100: #DBEAFE;
          --blue-200: #BFDBFE;
          --blue-400: #60A5FA;
          --blue-500: #3B82F6;
          --blue-600: #2563EB;
          --blue-700: #1D4ED8;
          --blue-900: #1E3A8A;

          /* dark-mode surfaces */
          --bg:       #0F1117;
          --bg-2:     #161B27;
          --bg-card:  #1C2336;
          --bg-hover: #212B40;
          --border:   rgba(59,130,246,0.18);
          --border-h: rgba(59,130,246,0.5);

          /* text */
          --text-h:   #E2E8F0;
          --text-b:   #94A3B8;
          --text-m:   #475569;

          /* accent */
          --acc:      #3B82F6;
          --acc-l:    #60A5FA;
          --acc-d:    #1D4ED8;

          --radius:   14px;
          --radius-sm: 8px;
          --shadow-h: 0 0 0 1px rgba(59,130,246,0.35), 0 12px 32px rgba(59,130,246,0.18), 0 4px 12px rgba(0,0,0,0.4);
          --transition: all 0.22s cubic-bezier(0.34,1.2,0.64,1);

          --mono: 'JetBrains Mono', monospace;
          --sans: 'Inter', system-ui, sans-serif;
          --display: 'Syne', system-ui, sans-serif;
        }

        body.light-mode {
          --bg:       #F8FAFF;
          --bg-2:     #EEF2FF;
          --bg-card:  #FFFFFF;
          --bg-hover: #EFF6FF;
          --border:   rgba(59,130,246,0.15);
          --border-h: rgba(37,99,235,0.45);

          --text-h:   #0F172A;
          --text-b:   #334155;
          --text-m:   #94A3B8;

          --acc:      #2563EB;
          --acc-l:    #3B82F6;
          --acc-d:    #1D4ED8;

          --shadow-h: 0 0 0 1px rgba(37,99,235,0.2), 0 12px 32px rgba(37,99,235,0.12), 0 4px 16px rgba(0,0,0,0.06);
        }

        /* ── RESET ── */
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior: smooth; font-size: 16px; }

        body {
          font-family: var(--sans);
          background: var(--bg);
          color: var(--text-b);
          line-height: 1.7;
          min-height: 100vh;
          transition: background 0.35s, color 0.35s;
        }

        /* ── HEADER ── */
        header {
          position: sticky; top:0; z-index:100;
          background: rgba(15,17,23,0.82);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(16px) saturate(1.4);
          transition: background 0.35s;
        }
        body.light-mode header {
          background: rgba(248,250,255,0.88);
        }

        nav {
          max-width: 1200px; margin: 0 auto;
          padding: 0 2rem;
          height: 64px;
          display: flex; align-items: center; justify-content: space-between;
          position: relative;
        }

        .logo {
          font-family: var(--display);
          font-size: 1.15rem; font-weight: 800;
          color: var(--acc); letter-spacing: -0.02em;
          line-height: 1;
        }
        .logo-sub {
          display: block;
          font-family: var(--sans); font-size: 0.58rem;
          letter-spacing: 0.12em; font-weight: 400;
          color: var(--text-m); margin-top: 3px;
          text-transform: uppercase;
        }

        nav ul { display:flex; list-style:none; align-items:center; gap: 0.25rem; }

        nav li button {
          font-family: var(--sans); font-size: 0.8rem; font-weight: 500;
          background: none; border: none; cursor: pointer;
          color: var(--text-b); padding: 0.45rem 0.85rem;
          border-radius: var(--radius-sm);
          transition: color 0.15s, background 0.15s;
          letter-spacing: 0.01em;
        }
        nav li button:hover { color: var(--acc); background: rgba(59,130,246,0.08); }

        .theme-btn {
          font-family: var(--mono) !important;
          font-size: 0.72rem !important; font-weight: 500 !important;
          background: rgba(59,130,246,0.1) !important;
          color: var(--acc-l) !important;
          border: 1px solid var(--border) !important;
          border-radius: var(--radius-sm) !important;
          padding: 0.4rem 0.9rem !important;
          cursor: pointer !important;
          transition: var(--transition) !important;
          letter-spacing: 0.05em !important;
        }
        .theme-btn:hover {
          background: var(--acc) !important;
          color: #fff !important;
          border-color: var(--acc) !important;
        }

        .hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:4px; }
        .hamburger span { width:22px; height:2px; background:var(--acc); border-radius:2px; transition: all 0.28s ease; display:block; }
        .hamburger.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity:0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }

        /* ── HERO ── */
        #home {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center;
          padding: 7rem 2rem 5rem;
          position: relative; overflow: hidden;
          border-bottom: 1px solid var(--border);
        }

        .hero-glow {
          position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 70% 55% at 50% -5%, rgba(59,130,246,0.13) 0%, transparent 65%),
            radial-gradient(ellipse 40% 30% at 80% 80%, rgba(29,78,216,0.07) 0%, transparent 60%);
        }

        .hero-dots {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(59,130,246,0.12) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
        }

        .hero-inner { position:relative; z-index:1; max-width:780px; margin:0 auto; }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 999px;
          padding: 0.4rem 1.1rem;
          font-size: 0.75rem; font-weight: 500; letter-spacing: 0.06em;
          color: var(--acc-l); text-transform: uppercase;
          margin-bottom: 2rem;
        }
        .hero-badge::before { content:''; width:6px; height:6px; border-radius:50%; background:var(--acc-l); display:inline-block; }

        .hero-name {
          font-family: var(--display);
          font-size: clamp(3.2rem, 9vw, 6rem);
          font-weight: 800; line-height: 1.0;
          color: var(--text-h);
          letter-spacing: -0.03em;
          margin-bottom: 0.5rem;
        }

        .hero-name-accent { color: var(--acc); }

        .hero-divider {
          width: 56px; height: 3px;
          background: linear-gradient(90deg, var(--acc), var(--acc-l));
          border-radius: 2px;
          margin: 1.6rem auto;
        }

        .hero-role {
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 400; color: var(--text-b);
          margin-bottom: 1.5rem;
          letter-spacing: 0.01em;
        }

        .hero-bio {
          font-size: clamp(0.95rem, 1.3vw, 1.05rem);
          color: var(--text-m); max-width:600px; margin: 0 auto 3rem;
          line-height: 1.85;
        }

        .hero-cta { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }

        .btn-primary {
          font-family: var(--sans); font-size: 0.85rem; font-weight: 600;
          background: var(--acc); color: #fff;
          border: none; border-radius: var(--radius-sm);
          padding: 0.8rem 2rem; cursor: pointer;
          transition: var(--transition);
          letter-spacing: 0.02em;
          text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem;
        }
        .btn-primary:hover { background: var(--blue-700); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,0.35); }

        .btn-outline {
          font-family: var(--sans); font-size: 0.85rem; font-weight: 600;
          background: transparent; color: var(--acc);
          border: 1.5px solid var(--acc);
          border-radius: var(--radius-sm);
          padding: 0.8rem 2rem; cursor: pointer;
          transition: var(--transition);
          text-decoration: none; display: inline-flex; align-items: center;
        }
        .btn-outline:hover { background: rgba(59,130,246,0.1); transform: translateY(-2px); }

        /* ── SECTIONS ── */
        section { padding: clamp(4rem,6vw,6rem) clamp(1.5rem,4vw,2rem); border-bottom: 1px solid var(--border); }
        .container { max-width:1200px; margin:0 auto; }

        .sec-eyebrow {
          font-family: var(--mono); font-size: 0.7rem; font-weight: 500;
          color: var(--acc); letter-spacing: 0.14em; text-transform: uppercase;
          display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.7rem;
        }
        .sec-eyebrow::before { content:''; flex: 0 0 20px; height:1px; background:var(--acc); }

        .sec-title {
          font-family: var(--display);
          font-size: clamp(1.9rem, 4vw, 2.8rem);
          font-weight: 800; color: var(--text-h);
          letter-spacing: -0.02em; line-height: 1.1;
          margin-bottom: 3rem;
        }

        /* ── CARD BASE ── */
        .card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }
        .card::before {
          content:''; position:absolute; inset:0; border-radius: var(--radius);
          background: linear-gradient(135deg, rgba(59,130,246,0.04), transparent 50%);
          opacity:0; transition: opacity 0.22s;
          pointer-events: none;
        }
        .card:hover {
          border-color: var(--border-h);
          transform: translateY(-6px) scale(1.01);
          box-shadow: var(--shadow-h);
          background: var(--bg-hover);
        }
        .card:hover::before { opacity:1; }

        /* ── SKILLS ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
        }

        .skill-card {
          padding: 1.75rem;
        }

        .skill-icon {
          font-family: var(--mono);
          font-size: 1.1rem; color: var(--acc);
          margin-bottom: 1rem;
          display: inline-flex; align-items:center; justify-content:center;
          width: 40px; height: 40px;
          background: rgba(59,130,246,0.1);
          border-radius: var(--radius-sm);
        }

        .skill-card h3 {
          font-family: var(--sans); font-size: 0.75rem; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--text-h); margin-bottom: 1.1rem;
        }

        .skill-list { list-style:none; }
        .skill-list li {
          font-size: 0.92rem; color: var(--text-b);
          padding: 0.38rem 0;
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: 0.6rem;
        }
        .skill-list li:last-child { border-bottom: none; }
        .skill-list li::before {
          content: '';
          flex: 0 0 5px; height: 5px;
          background: var(--acc); border-radius: 50%;
        }

        /* ── TIMELINE / EXPERIENCE ── */
        .exp-card {
          padding: 2.5rem;
          display: flex; gap: 2rem;
        }
        .exp-line {
          display: flex; flex-direction: column; align-items: center;
          flex-shrink: 0;
        }
        .exp-dot {
          width: 14px; height: 14px;
          background: var(--acc); border-radius: 50%;
          border: 3px solid var(--bg-card);
          box-shadow: 0 0 0 2px var(--acc);
          flex-shrink:0;
          margin-top: 4px;
        }
        .exp-stem { flex:1; width:2px; background: linear-gradient(to bottom, var(--acc), transparent); margin-top:6px; }
        .exp-body h3 { font-family:var(--display); font-size:1.2rem; font-weight:700; color:var(--text-h); margin-bottom:0.3rem; }
        .exp-body .meta {
          font-family:var(--mono); font-size:0.72rem; color:var(--acc-l);
          margin-bottom:1.2rem; letter-spacing:0.04em;
        }
        .exp-body ul { list-style:none; }
        .exp-body ul li {
          font-size:0.95rem; color:var(--text-b);
          padding:0.3rem 0; display:flex; gap:0.7rem; align-items:flex-start;
        }
        .exp-body ul li::before { content:'→'; color:var(--acc); font-size:0.8rem; margin-top:3px; flex-shrink:0; }

        /* ── PROJECTS ── */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px,1fr));
          gap: 1.5rem;
        }

        .project-card { padding: 0; }

        .project-card-top {
          height: 8px;
          border-radius: var(--radius) var(--radius) 0 0;
        }

        .project-card-body { padding: 1.8rem 2rem 2rem; }

        .project-num {
          font-family: var(--mono); font-size: 0.7rem; font-weight: 500;
          color: var(--text-m); letter-spacing: 0.1em;
          margin-bottom: 0.8rem;
        }

        .project-card h3 {
          font-family: var(--display); font-size: 1.3rem; font-weight: 700;
          color: var(--text-h); margin-bottom: 0.3rem; line-height: 1.2;
        }

        .project-subtitle {
          font-size: 0.78rem; color: var(--text-m);
          margin-bottom: 1rem; letter-spacing: 0.02em;
        }

        .project-stack {
          font-family: var(--mono); font-size: 0.72rem;
          color: var(--acc-l); margin-bottom: 1rem;
          padding: 0.5rem 0.75rem;
          background: rgba(59,130,246,0.07);
          border-radius: var(--radius-sm);
          border-left: 2px solid var(--acc);
        }

        .project-desc { font-size:0.92rem; color:var(--text-b); line-height:1.75; margin-bottom:1.3rem; }

        .tags { display:flex; flex-wrap:wrap; gap:0.4rem; }
        .tag {
          font-family: var(--mono); font-size:0.65rem; font-weight:500;
          color: var(--acc-l);
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 999px;
          padding: 0.2rem 0.65rem;
          letter-spacing: 0.04em;
        }

        /* ── EDUCATION ── */
        .edu-list { display:flex; flex-direction:column; gap:1rem; }

        .edu-card {
          padding: 1.75rem 2rem;
          display: grid; grid-template-columns: 1fr auto; gap: 1rem; align-items:center;
        }

        .edu-card h3 { font-family:var(--display); font-size:1.05rem; font-weight:700; color:var(--text-h); margin-bottom:0.25rem; }
        .edu-card .inst { font-size:0.88rem; color:var(--text-b); }
        .edu-right { text-align:right; }
        .edu-year {
          font-family: var(--mono); font-size:0.7rem; color:var(--acc-l);
          margin-bottom:0.2rem; white-space:nowrap;
        }
        .edu-score { font-size:0.82rem; font-weight:600; color:var(--text-h); }

        /* ── ACHIEVEMENTS ── */
        .achieve-grid {
          display: grid; grid-template-columns: repeat(auto-fit,minmax(250px,1fr)); gap:1.25rem;
        }

        .achieve-card { padding:1.75rem; display:flex; align-items:flex-start; gap:1.1rem; }

        .achieve-medal { font-size:2rem; flex-shrink:0; line-height:1; }

        .achieve-rank {
          font-family: var(--mono); font-size:0.65rem; font-weight:500;
          color:var(--acc); letter-spacing:0.1em; text-transform:uppercase;
          display:block; margin-bottom:0.3rem;
        }
        .achieve-card h4 { font-family:var(--display); font-size:1rem; font-weight:700; color:var(--text-h); margin-bottom:0.2rem; }
        .achieve-venue { font-size:0.82rem; color:var(--text-m); }

        /* ── CERTIFICATIONS ── */
        .certs-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.25rem; }

        .cert-card { padding:1.75rem; display:flex; gap:1rem; align-items:flex-start; }
        .cert-icon {
          font-size:1.6rem; flex-shrink:0;
          width:48px; height:48px;
          display:flex; align-items:center; justify-content:center;
          background: rgba(59,130,246,0.1); border-radius:var(--radius-sm);
        }
        .cert-card h4 { font-size:0.95rem; font-weight:600; color:var(--text-h); margin-bottom:0.3rem; line-height:1.4; }
        .cert-org { font-family:var(--mono); font-size:0.68rem; color:var(--acc); letter-spacing:0.08em; }
        .cert-score { font-size:0.8rem; color:var(--text-m); margin-top:0.3rem; }

        /* ── CODING PROFILES ── */
        .profiles-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:1.25rem; }

        .profile-card { padding:2rem; }

        .profile-abbr {
          width:48px; height:48px;
          display:flex; align-items:center; justify-content:center;
          border-radius:12px;
          font-family:var(--display); font-size:0.85rem; font-weight:800;
          color:#fff; margin-bottom:1.2rem;
        }

        .profile-card h3 { font-family:var(--display); font-size:1.05rem; font-weight:700; color:var(--text-h); margin-bottom:0.25rem; }
        .profile-handle { font-family:var(--mono); font-size:0.8rem; color:var(--text-m); margin-bottom:1.2rem; }

        .profile-link {
          font-family:var(--sans); font-size:0.78rem; font-weight:600;
          color:var(--acc); text-decoration:none;
          display:inline-flex; align-items:center; gap:0.3rem;
          padding:0.45rem 1rem;
          background: rgba(59,130,246,0.08);
          border:1px solid rgba(59,130,246,0.2);
          border-radius:var(--radius-sm);
          transition: background 0.18s, color 0.18s, border-color 0.18s;
        }
        .profile-link:hover { background:var(--acc); color:#fff; border-color:var(--acc); }

        /* ── SOCIAL ── */
        .social-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1.25rem; max-width:560px; }
        .social-card { padding:1.75rem; }
        .social-icon {
          width:40px; height:40px;
          background: rgba(59,130,246,0.1); border-radius:var(--radius-sm);
          display:flex; align-items:center; justify-content:center;
          font-family:var(--mono); font-size:0.8rem; font-weight:700;
          color:var(--acc); margin-bottom:1rem;
        }
        .social-card h3 { font-size:0.72rem; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-m); margin-bottom:0.5rem; }
        .social-card a { font-weight:500; color:var(--text-h); text-decoration:none; font-size:0.95rem; transition:color 0.15s; }
        .social-card a:hover { color:var(--acc); }

        /* ── RESUME ── */
        .resume-box {
          padding: 3rem; max-width:620px;
        }
        .resume-box p { font-size:1rem; color:var(--text-b); line-height:1.8; margin-bottom:2rem; }

        /* ── CONTACT ── */
        .contact-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1.25rem; max-width:840px; }
        .contact-card { padding:2rem; }
        .contact-label {
          font-family:var(--mono); font-size:0.68rem; font-weight:500;
          letter-spacing:0.12em; text-transform:uppercase;
          color:var(--acc); margin-bottom:0.9rem; display:block;
        }
        .contact-card p { font-size:0.95rem; color:var(--text-b); }

        .reveal-btn {
          font-family:var(--mono); font-size:0.72rem; font-weight:500;
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.22);
          color: var(--acc); border-radius:var(--radius-sm);
          padding:0.45rem 1rem; cursor:pointer;
          transition: background 0.18s, color 0.18s;
          letter-spacing:0.04em;
        }
        .reveal-btn:hover { background:var(--acc); color:#fff; }

        .revealed-link { font-size:0.95rem; color:var(--acc-l); text-decoration:none; font-weight:500; transition:color 0.15s; }
        .revealed-link:hover { color:var(--acc); }

        /* ── FOOTER ── */
        footer {
          background:var(--bg-2); border-top:1px solid var(--border);
          padding:2rem; text-align:center;
        }
        footer p { font-family:var(--mono); font-size:0.72rem; letter-spacing:0.06em; color:var(--text-m); }
        footer span { color:var(--acc); }

        /* ── RESPONSIVE ── */
        @media (max-width:900px) {
          nav ul {
            position:absolute; top:64px; left:0; right:0;
            background: rgba(15,17,23,0.97);
            flex-direction:column; align-items:flex-start;
            padding:1rem 1.5rem 1.5rem; gap:0.1rem;
            border-bottom:1px solid var(--border); display:none;
          }
          body.light-mode nav ul { background: rgba(248,250,255,0.98); }
          nav ul.open { display:flex; }
          .hamburger { display:flex; }
          nav li button { width:100%; text-align:left; }
        }
        @media (max-width:640px) {
          .edu-card { grid-template-columns:1fr; }
          .edu-right { text-align:left; }
          .hero-cta { flex-direction:column; align-items:stretch; }
          .btn-primary,.btn-outline { justify-content:center; }
          .exp-card { flex-direction:column; gap:1rem; }
          .exp-line { flex-direction:row; align-items:center; }
          .exp-stem { width:100%; height:2px; margin:0 6px; background: linear-gradient(to right, var(--acc), transparent); }
        }
      `}</style>

      {/* ── HEADER ── */}
      <header>
        <nav>
          <div className="logo">
            Subash R
            <span className="logo-sub">Electronics · Communication · Edge AI</span>
          </div>
          <ul className={isMenuOpen ? "open" : ""}>
            {navItems.map((id) => (
              <li key={id}>
                <button onClick={() => { scrollTo(id); setIsMenuOpen(false); }}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
            <li>
              <button className="theme-btn" onClick={toggleTheme}>
                {theme === "light" ? "◑ Dark" : "◐ Light"}
              </button>
            </li>
          </ul>
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(p => !p)}>
            <span /><span /><span />
          </div>
        </nav>
      </header>

      <main>

        {/* ── HERO ── */}
        <section id="home">
          <div className="hero-glow" />
          <div className="hero-dots" />
          <div className="hero-inner">
            <span className="hero-badge">ECE Engineer · Class of 2027</span>
            <h1 className="hero-name">
              <span className="hero-name-accent">Subash</span> R
            </h1>
            <div className="hero-divider" />
            <p className="hero-role">Embedded Systems · Battery Management · Machine Learning on Edge</p>
            <p className="hero-bio">
              Building at the intersection of hardware and software — from battery fault detection running on microcontrollers to CNN classifiers in a browser. I care about things that work on real devices in the real world.
            </p>
            <div className="hero-cta">
              <button className="btn-primary" onClick={() => scrollTo("contact")}>Get In Touch →</button>
              <button className="btn-outline" onClick={downloadResume}>Download Résumé</button>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about">
          <div className="container">
            <span className="sec-eyebrow">Expertise</span>
            <h2 className="sec-title">Technical Profile</h2>
            <div className="skills-grid">
              {skills.map((s) => (
                <div className="card skill-card" key={s.title}>
                  <div className="skill-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <ul className="skill-list">
                    {s.items.map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESUME ── */}
        <section id="resume">
          <div className="container">
            <span className="sec-eyebrow">Document</span>
            <h2 className="sec-title">Résumé</h2>
            <div className="card resume-box">
              <p>A complete record of my education, projects, experience, and technical skills — available as a PDF download.</p>
              <button className="btn-primary" onClick={downloadResume}>Download PDF Résumé ↓</button>
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section>
          <div className="container">
            <span className="sec-eyebrow">Academic Background</span>
            <h2 className="sec-title">Education</h2>
            <div className="edu-list">
              {[
                { deg: "B.E — Electronics & Communication Engineering", inst: "Sathyabama Institute of Science and Technology, Chennai", year: "2023 – 2027", score: "CGPA 8.2 / 10" },
                { deg: "Higher Secondary · Class XII", inst: "Velammal Vidhyashram, Padappai", year: "2022 – 2023", score: "71.2%" },
                { deg: "Senior Secondary · Class X", inst: "Velammal Vidhyashram, Padappai", year: "2020 – 2021", score: "80%" },
              ].map((e) => (
                <div className="card edu-card" key={e.deg}>
                  <div>
                    <h3>{e.deg}</h3>
                    <p className="inst">{e.inst}</p>
                  </div>
                  <div className="edu-right">
                    <p className="edu-year">{e.year}</p>
                    <p className="edu-score">{e.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section>
          <div className="container">
            <span className="sec-eyebrow">Industry</span>
            <h2 className="sec-title">Experience</h2>
            <div className="card exp-card">
              <div className="exp-line">
                <div className="exp-dot" />
                <div className="exp-stem" />
              </div>
              <div className="exp-body">
                <h3>In-Plant Training Intern</h3>
                <p className="meta">NPCIL — Madras Atomic Power Station, Kalpakkam · 2025</p>
                <ul>
                  <li>Observed live nuclear power plant control and instrumentation systems at scale.</li>
                  <li>Gained exposure to industrial electrical systems, plant safety procedures, and large-scale automation engineering.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects">
          <div className="container">
            <span className="sec-eyebrow">Work</span>
            <h2 className="sec-title">Projects</h2>
            <div className="projects-grid">
              {projects.map((p) => (
                <div className="card project-card" key={p.num}>
                  <div className="project-card-top" style={{ background: p.color }} />
                  <div className="project-card-body">
                    <p className="project-num">Project {p.num}</p>
                    <h3>{p.title}</h3>
                    <p className="project-subtitle">{p.subtitle}</p>
                    <p className="project-stack">{p.stack}</p>
                    <p className="project-desc">{p.desc}</p>
                    <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS ── */}
        <section>
          <div className="container">
            <span className="sec-eyebrow">Recognition</span>
            <h2 className="sec-title">Achievements</h2>
            <div className="achieve-grid">
              {achievements.map((a, i) => (
                <div className="card achieve-card" key={i}>
                  <div className="achieve-medal">{a.medal}</div>
                  <div>
                    <span className="achieve-rank">{a.rank}</span>
                    <h4>{a.event}</h4>
                    <p className="achieve-venue">{a.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section>
          <div className="container">
            <span className="sec-eyebrow">Credentials</span>
            <h2 className="sec-title">Certifications</h2>
            <div className="certs-grid">
              {certifications.map((c, i) => (
                <div className="card cert-card" key={i}>
                  <div className="cert-icon">{c.icon}</div>
                  <div>
                    <h4>{c.name}</h4>
                    <p className="cert-org">{c.org}</p>
                    <p className="cert-score">Score: {c.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CODING PROFILES ── */}
        <section id="coding">
          <div className="container">
            <span className="sec-eyebrow">Online Presence</span>
            <h2 className="sec-title">Coding Profiles</h2>
            <div className="profiles-grid">
              {codingProfiles.map((p) => (
                <div className="card profile-card" key={p.name}>
                  <div className="profile-abbr" style={{ background: p.hue }}>{p.abbr}</div>
                  <h3>{p.name}</h3>
                  <p className="profile-handle">@{p.username}</p>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="profile-link">
                    Visit Profile →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOCIAL ── */}
        <section>
          <div className="container">
            <span className="sec-eyebrow">Networks</span>
            <h2 className="sec-title">Connect</h2>
            <div className="social-grid">
              {socialLinks.map((l) => (
                <div className="card social-card" key={l.name}>
                  <div className="social-icon">{l.icon}</div>
                  <h3>{l.name}</h3>
                  <a href={l.url} target="_blank" rel="noopener noreferrer">{l.handle}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact">
          <div className="container">
            <span className="sec-eyebrow">Reach Out</span>
            <h2 className="sec-title">Get In Touch</h2>
            <div className="contact-grid">
              <div className="card contact-card">
                <span className="contact-label">Email</span>
                {revealed.email
                  ? <a href="mailto:subash11122005@gmail.com" className="revealed-link">subash11122005@gmail.com</a>
                  : <button className="reveal-btn" onClick={() => reveal("email")}>[ Reveal Address ]</button>}
              </div>
              <div className="card contact-card">
                <span className="contact-label">Phone</span>
                {revealed.phone
                  ? <a href="tel:+919043958279" className="revealed-link">+91 9043958279</a>
                  : <button className="reveal-btn" onClick={() => reveal("phone")}>[ Reveal Number ]</button>}
              </div>
              <div className="card contact-card">
                <span className="contact-label">Location</span>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <p>© 2025 <span>Subash R</span> · All rights reserved · Built with React</p>
      </footer>
    </>
  );
};

export default SubashPortfolio;