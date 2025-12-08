import React, { useEffect, useState } from "react";

const SubashPortfolio = () => {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Set document title & load saved theme
  useEffect(() => {
    document.title = "Subash R - ECE Engineer & Developer";

    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1RxhAMHZj1HhdRNuZD-_5oyd0JFLtO5IX";
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }

    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Track active section and scroll position
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Find active section
      const sections = ["home", "about", "resume", "projects", "coding", "contact"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Coding profiles data
  const codingProfiles = [
    {
      name: "LeetCode",
      icon: "🔗",
      username: "subash_r127",
      url: "https://leetcode.com/u/subash_r127/",
      verified: true,
      problemsSolved: 100,
    },
    {
      name: "GeeksforGeeks",
      icon: "🎯",
      username: "subash12gec",
      url: "https://www.geeksforgeeks.org/user/subash12gec/",
      verified: true,
    },
    {
      name: "CodeChef",
      icon: "👨‍💻",
      username: "subashr_1127",
      url: "https://www.codechef.com/users/subashr_1127",
      verified: true,
    },
    {
      name: "CodeForces",
      icon: "⚡",
      username: "subash_r127",
      url: "https://codeforces.com/profile/subash_r127",
      verified: true,
    },
    {
      name: "HackerRank",
      icon: "🏆",
      username: "subashr1127",
      url: "https://www.hackerrank.com/subashr1127",
      verified: true,
    },
  ];

  // Social links data
  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/subashr1127",
      username: "@subashr1127",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://www.linkedin.com/in/subash-r1125",
      username: "Subash R",
    },
  ];

  return (
    <>
      {/* Inline CSS from original HTML */}
      <style>{`
        :root {
            --primary: #00F0FF;
            --primary-dark: #00D4E0;
            --secondary: #8B5CF6;
            --bg-dark: #0F172A;
            --bg-darker: #1E293B;
            --text-primary: #F1F5F9;
            --text-secondary: #CBD5E1;
            --accent-electric: #00F0FF;
            --accent-purple: #7C3AED;
            --success: #10B981;
            --border: rgba(148, 163, 184, 0.15);
            --dusty-gray: #78716C;
            --light-gray: #D5CCCC;
        }

        body.light-mode {
            --bg-dark: #F8FAFC;
            --bg-darker: #FFFFFF;
            --text-primary: #1E293B;
            --text-secondary: #475569;
            --border: rgba(51, 65, 85, 0.12);
            --primary: #0FA5D4;
            --primary-dark: #0D92C0;
            --secondary: #8B5CF6;
            --accent-electric: #00D4E0;
            --accent-purple: #7C3AED;
        }

        body.light-mode header {
            background: rgba(248, 250, 252, 0.95);
            border-bottom: 2px solid var(--primary);
            box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
        }

        body.light-mode .skill-card,
        body.light-mode .timeline-item,
        body.light-mode .project-card,
        body.light-mode .stat-box,
        body.light-mode .education-item,
        body.light-mode .contact-box,
        body.light-mode .coding-profile-card,
        body.light-mode .social-box {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(99, 102, 241, 0.15);
        }

        body.light-mode .project-header {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(123, 58, 237, 0.1));
        }

        body.light-mode h2::after {
            box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
        }

        body.light-mode .skill-card:hover,
        body.light-mode .project-card:hover,
        body.light-mode .contact-box:hover,
        body.light-mode .coding-profile-card:hover,
        body.light-mode .social-box:hover {
            background: rgba(255, 255, 255, 0.95);
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.2), 0 15px 35px rgba(99, 102, 241, 0.1);
        }

        body.light-mode nav button:hover {
            color: var(--primary);
        }

        body.light-mode .btn-primary {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }

        body.light-mode .btn-primary:hover {
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.5), 0 10px 25px rgba(99, 102, 241, 0.2);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
            font-size: clamp(14px, 1vw + 0.4vh, 18px);
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, var(--bg-dark) 0%, #1a2847 50%, var(--bg-darker) 100%);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            transition: background 0.5s ease;
        }

        body.light-mode {
            background: linear-gradient(135deg, #F0F4F8 0%, #E8F1F8 50%, #FFFFFF 100%);
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes glowPulse {
            0%, 100% {
                box-shadow: 0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(157, 78, 221, 0.1);
            }
            50% {
                box-shadow: 0 0 30px rgba(0, 240, 255, 0.5), 0 0 60px rgba(157, 78, 221, 0.2);
            }
        }

        .theme-toggle {
            background: linear-gradient(135deg, var(--primary), #A78BFA);
            border: none;
            color: #000;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            font-size: 0.9rem;
        }

        .theme-toggle:hover {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
            transform: translateY(-2px);
        }

        header {
            background: rgba(15, 23, 42, 0.8);
            border-bottom: 2px solid var(--primary);
            position: sticky;
            top: 0;
            z-index: 100;
            backdrop-filter: blur(12px);
            box-shadow: 0 4px 20px rgba(99, 102, 241, 0.1);
        }

        nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            position: relative;
        }

        .logo {
            font-size: clamp(1.2rem, 2.5vw, 1.5rem);
            font-weight: 700;
            background: linear-gradient(135deg, var(--primary), #A78BFA);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: 2px;
            text-transform: uppercase;
            animation: fadeInUp 0.8s ease-out;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
        }

        nav button {
            color: var(--text-secondary);
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 500;
            cursor: pointer;
            border: none;
            background: none;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            font-family: inherit;
            position: relative;
        }

        nav button::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--primary), #7C3AED);
            transition: width 0.3s ease;
        }

        nav button:hover {
            color: var(--primary);
        }

        nav button:hover::after {
            width: 100%;
        }

        nav button.active-nav {
            color: var(--primary);
        }

        nav button.active-nav::after {
            width: 100%;
        }

        .scroll-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, var(--primary), #A78BFA);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            transition: all 0.3s ease;
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
            opacity: 0;
            pointer-events: none;
            z-index: 99;
        }

        .scroll-to-top.show {
            opacity: 1;
            pointer-events: all;
        }

        .scroll-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 30px rgba(0, 240, 255, 0.5);
        }

        .hamburger {
            display: none;
            flex-direction: column;
            gap: 4px;
            cursor: pointer;
        }

        .hamburger span {
            width: 24px;
            height: 3px;
            background: #E5E7EB;
            border-radius: 999px;
            transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
            transform: translateY(6px) rotate(45deg);
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
            transform: translateY(-6px) rotate(-45deg);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 clamp(1rem, 4vw, 2rem);
        }

        .hero {
            padding: clamp(5rem, 8vw, 8rem) clamp(1.5rem, 4vw, 2rem) 6rem;
            text-align: center;
            background: linear-gradient(135deg, rgba(0, 240, 255, 0.08) 0%, rgba(157, 78, 221, 0.05) 100%);
            border-bottom: 2px solid var(--border);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(0, 240, 255, 0.1), transparent);
            border-radius: 50%;
            pointer-events: none;
        }

        .hero-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .avatar {
            width: clamp(110px, 16vw, 150px);
            height: clamp(110px, 16vw, 150px);
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary), var(--accent-purple));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: clamp(2.5rem, 5vw, 4rem);
            margin: 0 auto 2rem;
            box-shadow: 0 0 40px rgba(0, 240, 255, 0.4), 0 0 80px rgba(157, 78, 221, 0.2);
            animation: glowPulse 3s ease-in-out infinite, fadeInUp 1s ease-out;
            border: 2px solid var(--accent-electric);
        }

        h1 {
            font-size: clamp(2.2rem, 4vw, 3.5rem);
            margin-bottom: 0.5rem;
            background: linear-gradient(135deg, var(--primary), #A78BFA, #7C3AED);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 1s ease-out;
            letter-spacing: 0.5px;
        }

        .title {
            font-size: clamp(1.1rem, 2.3vw, 1.5rem);
            background: linear-gradient(135deg, var(--primary), #A78BFA);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.5rem;
            animation: fadeInUp 1.2s ease-out;
            font-weight: 600;
        }

        .bio {
            color: var(--text-secondary);
            font-size: clamp(0.95rem, 1.1vw, 1.1rem);
            margin-bottom: 2rem;
            line-height: 1.8;
            animation: fadeInUp 1.4s ease-out;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 2rem;
        }

        .btn {
            padding: 0.8rem 1.8rem;
            border-radius: 0.5rem;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            font-family: inherit;
            min-width: 150px;
            text-align: center;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--primary), #A78BFA);
            color: #000;
            border: 2px solid var(--primary);
        }

        .btn-primary:hover {
            background: linear-gradient(135deg, #A78BFA, var(--primary));
            transform: translateY(-3px);
            box-shadow: 0 0 30px rgba(0, 240, 255, 0.5), 0 10px 25px rgba(0, 240, 255, 0.2);
        }

        .btn-secondary {
            border: 2px solid var(--primary);
            color: var(--primary);
            background: transparent;
        }

        .btn-secondary:hover {
            background: rgba(0, 240, 255, 0.1);
            transform: translateY(-3px);
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
        }

        section {
            padding: clamp(3rem, 5vw, 5rem) clamp(1rem, 3vw, 2rem);
            border-bottom: 1px solid var(--border);
        }

        h2 {
            font-size: clamp(1.8rem, 3vw, 2.5rem);
            margin-bottom: 3rem;
            background: linear-gradient(135deg, var(--primary), #A78BFA);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
            padding-bottom: 1.5rem;
            animation: fadeInUp 0.8s ease-out;
            text-align: center;
        }

        h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, var(--primary), #A78BFA, #7C3AED);
            border-radius: 2px;
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 2rem;
        }

        .skill-card {
            background: rgba(30, 41, 59, 0.6);
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid var(--border);
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            backdrop-filter: blur(10px);
            animation: fadeInUp 0.8s ease-out;
        }

        .skill-card:hover {
            border-color: var(--primary);
            transform: translateY(-10px);
            box-shadow: 0 0 30px rgba(0, 240, 255, 0.3), 0 15px 35px rgba(0, 240, 255, 0.1);
            background: rgba(30, 41, 59, 0.8);
        }

        .skill-card h3 {
            color: var(--primary);
            margin-bottom: 1rem;
            font-size: 1.3rem;
            font-weight: 700;
        }

        .skill-list {
            list-style: none;
        }

        .skill-list li {
            padding: 0.5rem 0;
            color: var(--text-secondary);
            display: flex;
            align-items: center;
        }

        .skill-list li::before {
            content: '▸';
            color: var(--primary);
            margin-right: 0.8rem;
            font-size: 1.2rem;
            text-shadow: 0 0 8px rgba(0, 240, 255, 0.5);
        }

        .timeline {
            max-width: 800px;
        }

        .timeline-item {
            padding: 2rem;
            margin-bottom: 2rem;
            background: rgba(30, 41, 59, 0.6);
            border-left: 4px solid var(--primary);
            border-radius: 0.75rem;
            transition: all 0.4s ease;
            backdrop-filter: blur(10px);
            animation: fadeInUp 0.8s ease-out;
        }

        .timeline-item:hover {
            border-left-color: var(--accent-electric);
            transform: translateX(8px);
            box-shadow: 0 0 25px rgba(0, 240, 255, 0.2);
        }

        .timeline-item h3 {
            background: linear-gradient(135deg, var(--primary), var(--accent-electric));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
            font-weight: 700;
        }

        .timeline-item .meta {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 2rem;
        }

        .project-card {
            background: rgba(30, 41, 59, 0.6);
            border-radius: 1rem;
            overflow: hidden;
            border: 1px solid var(--border);
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            display: flex;
            flex-direction: column;
            backdrop-filter: blur(10px);
            animation: fadeInUp 0.8s ease-out;
        }

        .project-card:hover {
            border-color: var(--primary);
            transform: translateY(-12px);
            box-shadow: 0 0 40px rgba(0, 240, 255, 0.3), 0 20px 50px rgba(0, 240, 255, 0.15);
        }

        .project-header {
            height: 160px;
            background: linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(157, 78, 221, 0.15));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            box-shadow: inset 0 0 30px rgba(0, 240, 255, 0.1);
        }

        .project-body {
            padding: 2rem;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .project-card h3 {
            background: linear-gradient(135deg, var(--primary), var(--accent-electric));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
            font-weight: 700;
        }

        .project-tag {
            display: inline-block;
            background: rgba(0, 240, 255, 0.1);
            border: 1px solid rgba(0, 240, 255, 0.3);
            color: var(--primary);
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.8rem;
            margin-right: 0.5rem;
            margin-top: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .project-tag:hover {
            background: rgba(0, 240, 255, 0.2);
            box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
        }

        .education-list {
            display: grid;
            gap: 2rem;
        }

        .education-item {
            background: rgba(30, 41, 59, 0.6);
            padding: 2rem;
            border-radius: 1rem;
            border-left: 4px solid var(--accent-electric);
            backdrop-filter: blur(10px);
            animation: fadeInUp 0.8s ease-out;
            transition: all 0.3s ease;
        }

        .education-item:hover {
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
        }

        .education-item h3 {
            background: linear-gradient(135deg, var(--primary), var(--accent-electric));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.3rem;
            font-weight: 700;
        }

        .education-item .institution {
            color: var(--text-secondary);
            font-size: 0.95rem;
            margin-bottom: 0.5rem;
        }

        .education-item .details {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            text-align: center;
        }

        .stat-box {
            background: rgba(30, 41, 59, 0.6);
            padding: 2.5rem 2rem;
            border-radius: 1rem;
            border: 1px solid var(--border);
            backdrop-filter: blur(10px);
            transition: all 0.4s ease;
            animation: fadeInUp 0.8s ease-out;
        }

        .stat-box:hover {
            box-shadow: 0 0 30px rgba(0, 240, 255, 0.25);
            border-color: var(--primary);
            transform: translateY(-5px);
        }

        .stat-number {
            font-size: 2.4rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary), var(--accent-electric));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
        }

        .stat-label {
            color: var(--text-secondary);
            font-size: 0.95rem;
        }

        /* Coding Profiles Grid */
        .coding-profiles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 2rem;
        }

        .coding-profile-card {
            background: rgba(30, 41, 59, 0.6);
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid var(--border);
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            backdrop-filter: blur(10px);
            animation: fadeInUp 0.8s ease-out;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .coding-profile-card:hover {
            border-color: var(--primary);
            transform: translateY(-10px);
            box-shadow: 0 0 30px rgba(0, 240, 255, 0.3), 0 15px 35px rgba(0, 240, 255, 0.1);
            background: rgba(30, 41, 59, 0.8);
        }

        .profile-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }

        .profile-icon {
            font-size: 2rem;
        }

        .profile-name {
            color: var(--primary);
            font-weight: 700;
            font-size: 1.1rem;
        }

        .verified-badge {
            color: var(--primary);
            font-size: 0.9rem;
            font-weight: 600;
        }

        .profile-username {
            color: var(--text-secondary);
            font-size: 0.9rem;
            word-break: break-word;
        }

        .profile-link {
            display: inline-block;
            margin-top: 0.5rem;
            padding: 0.6rem 1.2rem;
            background: linear-gradient(135deg, var(--primary), #A78BFA);
            color: #000;
            text-decoration: none;
            border-radius: 0.5rem;
            font-weight: 600;
            font-size: 0.85rem;
            transition: all 0.3s ease;
            text-align: center;
        }

        .profile-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
        }

        /* Social Links Grid */
        .social-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 2rem;
            max-width: 600px;
            margin: 0 auto;
        }

        .social-box {
            background: rgba(30, 41, 59, 0.6);
            padding: 2rem;
            border-radius: 1.5rem;
            border: 2px solid var(--border);
            text-align: center;
            backdrop-filter: blur(10px);
            transition: all 0.4s ease;
            animation: fadeInUp 0.8s ease-out;
        }

        .social-box:hover {
            border-color: var(--primary);
            box-shadow: 0 0 40px rgba(0, 240, 255, 0.2);
            transform: translateY(-5px);
        }

        .social-box-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .social-box h3 {
            color: var(--primary);
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            font-weight: 700;
        }

        .social-item {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .social-item a {
            color: var(--primary);
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 600;
            word-break: break-word;
        }

        .social-item a:hover {
            color: #A78BFA;
            text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }

        .social-item p {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 2rem;
            max-width: 900px;
            margin: 0 auto;
        }

        .contact-box {
            background: rgba(30, 41, 59, 0.6);
            padding: 2rem;
            border-radius: 1.5rem;
            border: 2px solid var(--border);
            text-align: center;
            backdrop-filter: blur(10px);
            transition: all 0.4s ease;
            animation: fadeInUp 0.8s ease-out;
        }

        .contact-box:hover {
            border-color: var(--primary);
            box-shadow: 0 0 40px rgba(0, 240, 255, 0.2);
            transform: translateY(-5px);
        }

        .contact-box-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .contact-box h3 {
            color: var(--primary);
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            font-weight: 700;
        }

        .contact-item {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .contact-item a {
            color: var(--primary);
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 600;
            word-break: break-word;
        }

        .contact-item a:hover {
            color: #A78BFA;
            text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
        }

        .contact-item p {
            color: var(--text-secondary);
        }

        .resume-container {
            max-width: 1000px;
            margin: 0 auto;
        }

        .resume-viewer {
            background: rgba(30, 41, 59, 0.6);
            padding: 2rem;
            border-radius: 1rem;
            border: 2px solid var(--border);
            backdrop-filter: blur(10px);
            animation: fadeInUp 0.8s ease-out;
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
        }

        .resume-download-btn {
            display: inline-block;
            background: linear-gradient(135deg, var(--primary), var(--accent-electric));
            color: #000;
            padding: 0.8rem 1.8rem;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            margin-top: 0;
            width: 100%;
            max-width: 300px;
        }

        .resume-download-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 0 30px rgba(0, 240, 255, 0.5);
        }

        footer {
            background: var(--bg-darker);
            padding: 2rem;
            text-align: center;
            border-top: 1px solid var(--border);
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        @media (max-width: 900px) {
            nav {
                padding: 0.75rem 1.25rem;
            }

            nav ul {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(15, 23, 42, 0.98);
                padding: 1rem 1.5rem 1.5rem;
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
                display: none;
            }

            nav ul.active {
                display: flex;
            }

            .hamburger {
                display: flex;
            }

            .theme-toggle {
                width: 100%;
                text-align: center;
                margin-top: 0.5rem;
            }
        }

        @media (max-width: 768px) {
            h1 {
                font-size: clamp(2rem, 6vw, 2.5rem);
            }

            h2 {
                font-size: 2rem;
            }

            .title {
                font-size: 1.2rem;
            }

            section {
                padding: 3rem 1.25rem;
            }

            .cta-buttons {
                flex-direction: column;
            }

            .btn {
                width: 100%;
            }

            nav {
                flex-direction: row;
                gap: 1rem;
            }

            .logo {
                font-size: 1.2rem;
            }

            .contact-grid,
            .social-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>

      <div>
        <header>
          <nav>
            <div className="logo">SUBASH R</div>
            <ul id="navMenu" className={isMenuOpen ? "active" : ""}>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("home");
                    closeMenu();
                  }}
                  className={activeSection === "home" ? "active-nav" : ""}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("about");
                    closeMenu();
                  }}
                  className={activeSection === "about" ? "active-nav" : ""}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("resume");
                    closeMenu();
                  }}
                  className={activeSection === "resume" ? "active-nav" : ""}
                >
                  Resume
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("projects");
                    closeMenu();
                  }}
                  className={activeSection === "projects" ? "active-nav" : ""}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("coding");
                    closeMenu();
                  }}
                  className={activeSection === "coding" ? "active-nav" : ""}
                >
                  Coding
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("contact");
                    closeMenu();
                  }}
                  className={activeSection === "contact" ? "active-nav" : ""}
                >
                  Contact
                </button>
              </li>
              <li>
                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === "light" ? "🌕 Light" : "🌑 Dark"}
                </button>
              </li>
            </ul>
            <div
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              id="hamburger"
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section id="home" className="hero">
            <div className="hero-content">
              <div className="avatar">👨‍💻</div>
              <h1>Subash R</h1>
              <p className="title">Electronics & Communication Engineer</p>
              <p className="bio">
                I am an aspiring engineer exploring embedded systems, wireless communication, and software development with experience working with Python, C, and project-based implementation, including a LoRa-based GPS tracking system.
                I aim to develop innovative solutions driven by curiosity, precision, and continuous learning.
              </p>
              <div className="cta-buttons">
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </button>
                <a
                  href="mailto:subash11122005@gmail.com"
                  className="btn btn-secondary"
                >
                  Email Me
                </a>
              </div>
            </div>
          </section>

          {/* About / Skills Section */}
          <section id="about" className="container">
            <h2>About Me</h2>
            <div className="skills-grid">
              <div className="skill-card">
                <h3>💻 Technical Skills</h3>
                <ul className="skill-list">
                  <li>Python</li>
                  <li>C Programming</li>
                  <li>IoT & LoRa Technology</li>
                  <li>GPS Systems</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>🎯 Soft Skills</h3>
                <ul className="skill-list">
                  <li>Effective Communication</li>
                  <li>Problem Solving</li>
                  <li>Quick Learner</li>
                  <li>Team Collaboration</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>🌍 Languages</h3>
                <ul className="skill-list">
                  <li>English</li>
                  <li>Tamil</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="container">
            <h2>Resume</h2>
            <div className="resume-container">
              <div className="resume-viewer">
                <button
                  className="resume-download-btn"
                  onClick={downloadResume}
                >
                  📄 Download Resume
                </button>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="container">
            <h2>Education</h2>
            <div className="education-list">
              <div className="education-item">
                <h3>B.E - Electronics & Communication Engineering</h3>
                <p className="institution">
                  Sathyabama Institute of Science and Technology, Chennai
                </p>
                <p className="details">2023-2027 | CGPA: 8.2/10</p>
              </div>

              <div className="education-item">
                <h3>Higher Secondary</h3>
                <p className="institution">Velammal Vidhyashram, Padappai</p>
                <p className="details">2022-2023 | Score: 71.2%</p>
              </div>

              <div className="education-item">
                <h3>Senior Secondary</h3>
                <p className="institution">Velammal Vidhyashram, Padappai</p>
                <p className="details">2020-2021 | Score: 80%</p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="container">
            <h2>Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <h3>Internship - Inplant Training</h3>
                <p className="meta">
                  2025 | Madras Atomic Power Station, Kalpakkam, Tamil Nadu
                </p>
                <p>
                  Gained hands-on experience in power station operations and industrial systems.
                  Enhanced understanding of atomic energy systems and safety protocols.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="container">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">📍</div>
                <div className="project-body">
                  <h3>LoRa Based GPS Tracker Alert System</h3>
                  <p>
                    A wireless IoT solution using LoRa technology for real-time GPS tracking with
                    alert capabilities. Semester 4 project demonstrating application of wireless
                    communication principles.
                  </p>
                  <span className="project-tag">LoRa</span>
                  <span className="project-tag">GPS</span>
                  <span className="project-tag">IoT</span>
                </div>
              </div>
            </div>
          </section>

          {/* Coding Profiles Section */}
          <section id="coding" className="container">
            <h2>Coding Profiles</h2>
            <div className="coding-profiles-grid">
              {codingProfiles.map((profile, index) => (
                <div key={index} className="coding-profile-card">
                  <div className="profile-header">
                    <div>
                      <div className="profile-icon">{profile.icon}</div>
                      <div className="profile-name">{profile.name}</div>
                    </div>
                  </div>
                  <div className="profile-username">@{profile.username}</div>
                  {profile.problemsSolved && (
                    <div className="profile-username">
                      Problems Solved: {profile.problemsSolved}
                    </div>
                  )}
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link"
                  >
                    Visit Profile →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Social Links Section */}
          <section className="container">
            <h2>Connect With Me</h2>
            <div className="social-grid">
              {socialLinks.map((link, index) => (
                <div key={index} className="social-box">
                  <div className="social-box-icon">{link.icon}</div>
                  <h3>{link.name}</h3>
                  <div className="social-item">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.username}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Highlights Section */}
          <section className="container">
            <h2>Highlights</h2>
            <div className="stats">
              <div className="stat-box">
                <div className="stat-number">8.2</div>
                <div className="stat-label">Current CGPA</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">2</div>
                <div className="stat-label">Languages</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">⚫</div>
                <div className="stat-label">Karate Black Belt</div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="container">
            <h2>Get In Touch</h2>
            <div className="contact-grid">
              <div className="contact-box">
                <div className="contact-box-icon">📧</div>
                <h3>Email</h3>
                <div className="contact-item">
                  <a href="mailto:subash11122005@gmail.com">
                    subash11122005@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-box">
                <div className="contact-box-icon">📞</div>
                <h3>Phone</h3>
                <div className="contact-item">
                  <a href="tel:+919043958279">+91 9043958279</a>
                </div>
              </div>
              <div className="contact-box">
                <div className="contact-box-icon">📍</div>
                <h3>Location</h3>
                <div className="contact-item">
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <button
          className={`scroll-to-top ${showScrollTop ? "show" : ""}`}
          onClick={scrollToTop}
          title="Scroll to top"
        >
          ↑
        </button>

        <footer>
          <p>
            &copy; 2025 Subash R. All rights reserved. | Built with React &amp; Node.js
          </p>
        </footer>
      </div>
    </>
  );
};

export default SubashPortfolio;
    