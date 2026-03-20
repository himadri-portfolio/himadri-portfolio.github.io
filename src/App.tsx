import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Code2, 
  Monitor, 
  Cpu, 
  Music, 
  ExternalLink, 
  Mail, 
  Github, 
  Linkedin, 
  CheckCircle2,
  ArrowRight,
  Sun,
  Moon
} from "lucide-react";

const PROJECTS = [
  {
    title: "Bhasha Mitra (ভাষা মিত্র)",
    tagline: "Bangla Language Assistant powered by Google Gemini",
    category: "AI / NLP / Office Add-in",
    description: "A professional Microsoft Word Add-in that brings advanced AI writing assistance to Bengali writers. Handles complex linguistic nuances like Sadhu-Cholito mixing and Unicode normalization.",
    tags: ["React 18", "Fluent UI v9", "Gemini AI", "Office.js", "TypeScript"],
    link: "https://bhashamitra.top",
    stats: "Version 3.5.0.0",
    highlights: [
      "Custom Unicode normalizer for ZWJ/ZWNJ",
      "Anchor-based Word replacement engine",
      "110+ Bengali drafting templates"
    ]
  },
  {
    title: "Institution Office Task Reminder",
    tagline: "Offline-first task management for institutional teams.",
    category: "Desktop / Workflow / Automation",
    description: "A professional task management application built for educational institutions in Bangladesh. Features a robust offline-first architecture with cloud synchronization.",
    tags: ["Python 3.10", "PySide6 (Qt6)", "SQLite", "Google Apps Script", "PyInstaller"],
    link: "#",
    stats: "v2.0.1",
    highlights: [
      "Hybrid Offline-First Sync Architecture",
      "Conflict-Safe Cloud Merge Engine",
      "Incremental SQLite UPSERT logic"
    ]
  }
];

const SERVICES = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to institutional and linguistic needs, focusing on high-performance and user-centric design.",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: "Hardware Solutions",
    description: "Expert computer hardware sales, diagnostics, and repairs through Multiplus Computer, ensuring your infrastructure is robust.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "IT Consultancy",
    description: "Strategic technical advice for businesses looking to modernize their hardware and software ecosystems.",
    icon: <Monitor className="w-6 h-6" />
  }
];

const SKILLS = [
  { category: "Languages", items: ["TypeScript", "Python", "C#", "SQL", "Bengali (Native)"] },
  { category: "Frontend", items: ["React 18", "Vite", "Tailwind CSS", "Fluent UI", "Office.js"] },
  { category: "Backend", items: ["Node.js", "Express", "Google Apps Script", "SQLite", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "PyInstaller", "Qt/PySide6", "Gemini AI API", "VS Code"] }
];

const EXPERIENCE = [
  {
    role: "Proprietor & Lead Consultant",
    company: "Multiplus Computer",
    period: "2015 - Present",
    description: "Leading a premier computer service and hardware shop in Mathbaria. Managing technical operations, hardware diagnostics, and providing specialized IT consultancy for local businesses and institutions."
  },
  {
    role: "Independent Software Developer",
    company: "Self-Employed",
    period: "2018 - Present",
    description: "Developing specialized software solutions including Bhasha Mitra (AI Bengali Assistant) and institutional task management systems. Focused on solving local linguistic and administrative challenges."
  }
];

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-zinc-950 text-zinc-50' : 'bg-zinc-50 text-zinc-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-500 ${isDark ? 'bg-zinc-950/80 border-zinc-800' : 'bg-white/80 border-zinc-100'}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-xl">HB.</span>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
              <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Projects</a>
              <a href="#services" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Services</a>
              <a href="#experience" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Skills</a>
              <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">About</a>
              <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Contact</a>
            </div>
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors ${isDark ? 'bg-zinc-800 text-zinc-400 hover:text-zinc-50' : 'bg-zinc-100 text-zinc-500 hover:text-zinc-900'}`}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <header className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider transition-colors ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>
                Software Developer & Business Owner
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                Himadri Biswas. <br />
                <span className={isDark ? 'text-zinc-600' : 'text-zinc-400'}>Expert Software Developer in Bangladesh.</span>
              </h1>
              <p className={`text-xl max-w-2xl mb-10 leading-relaxed transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Based in Bangladesh, I lead <span className={`font-medium underline underline-offset-4 ${isDark ? 'text-zinc-50' : 'text-zinc-900'}`}>Multiplus Computer</span> while building specialized software solutions for linguistics and institutional productivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className={`px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 ${isDark ? 'bg-zinc-50 text-zinc-950 hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}
                >
                  Let's Talk <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#projects" 
                  className={`px-8 py-4 border rounded-full font-medium transition-all ${isDark ? 'border-zinc-800 hover:bg-zinc-900' : 'border-zinc-200 hover:bg-zinc-50'}`}
                >
                  View Work
                </a>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Projects Section */}
        <section id="projects" className={`py-24 border-y transition-colors ${isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-100'} px-6`}>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Software</h2>
                <p className={`max-w-md transition-colors ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>Specialized tools developed to solve real-world linguistic and administrative challenges.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {PROJECTS.map((project, idx) => (
                <article 
                  key={idx}
                  className={`group p-8 rounded-3xl border transition-all duration-500 flex flex-col h-full ${isDark ? 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-500' : 'bg-zinc-50/50 border-zinc-100 hover:border-zinc-900'}`}
                >
                  <div className="mb-6">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{project.category}</span>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded transition-colors ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>{project.stats}</span>
                    </div>
                    <h3 className={`text-2xl font-bold mt-2 transition-colors ${isDark ? 'group-hover:text-zinc-50' : 'group-hover:text-zinc-900'}`}>{project.title}</h3>
                    <p className="text-sm text-zinc-400 mt-1 italic">{project.tagline}</p>
                  </div>
                  <p className={`mb-6 flex-grow leading-relaxed transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-500">
                        <CheckCircle2 className={`w-3 h-3 ${isDark ? 'text-zinc-50' : 'text-zinc-900'}`} />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={`px-3 py-1 text-[10px] font-bold uppercase rounded-md transition-colors ${isDark ? 'bg-zinc-800 text-zinc-500' : 'bg-zinc-100 text-zinc-500'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all"
                  >
                    {project.link === "#" ? "Coming Soon" : "Visit Website"} <ExternalLink className="w-4 h-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Deep Dive - Bhasha Mitra */}
        <section className={`py-24 px-6 transition-colors ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Engineering Excellence: Bhasha Mitra</h2>
                <div className={`space-y-6 leading-relaxed transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <p>
                    Developing a Bengali writing assistant required solving unique linguistic challenges that generic AI models often miss. 
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className={`p-4 rounded-2xl border transition-colors ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-100'}`}>
                      <h4 className={`font-bold mb-1 text-sm ${isDark ? 'text-zinc-50' : 'text-zinc-900'}`}>Unicode Normalization</h4>
                      <p className="text-xs">Custom logic to handle ZWJ/ZWNJ characters and য/য় variants, ensuring consistent text processing across all Word versions.</p>
                    </div>
                    <div className={`p-4 rounded-2xl border transition-colors ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-100'}`}>
                      <h4 className={`font-bold mb-1 text-sm ${isDark ? 'text-zinc-50' : 'text-zinc-900'}`}>Anchor-Based Replacement</h4>
                      <p className="text-xs">A robust replacement engine that prevents positional drift during multi-pass AI corrections within MS Word documents.</p>
                    </div>
                    <div className={`p-4 rounded-2xl border transition-colors ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-100'}`}>
                      <h4 className={`font-bold mb-1 text-sm ${isDark ? 'text-zinc-50' : 'text-zinc-900'}`}>Register Detection</h4>
                      <p className="text-xs">Advanced Sadhu-Cholito mixing detection to maintain stylistic consistency in formal and informal Bengali writing.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`order-1 md:order-2 rounded-3xl p-8 aspect-video flex flex-col justify-center transition-colors ${isDark ? 'bg-zinc-900 text-zinc-50' : 'bg-zinc-900 text-white'}`}>
                <div className="font-mono text-[10px] opacity-50 mb-4 uppercase tracking-widest">Tech Stack / Architecture</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-zinc-500 text-[10px] uppercase mb-1">Frontend</div>
                    <div className="text-sm font-bold">React 18 + TS</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[10px] uppercase mb-1">UI Library</div>
                    <div className="text-sm font-bold">Fluent UI v9</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[10px] uppercase mb-1">AI Engine</div>
                    <div className="text-sm font-bold">Gemini 2.5/3.0</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[10px] uppercase mb-1">Integration</div>
                    <div className="text-sm font-bold">Office.js</div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium">Active Development: v3.5.0.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive - Task Reminder */}
        <section className={`py-24 px-6 border-b transition-colors ${isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-white border-zinc-100'}`}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className={`rounded-3xl p-8 flex flex-col justify-center border transition-colors ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'}`}>
                <div className="font-mono text-[10px] text-zinc-400 mb-6 uppercase tracking-widest">System Architecture</div>
                <div className="space-y-4">
                  <div className={`p-4 rounded-xl border text-center font-bold text-sm transition-colors ${isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-50' : 'bg-white border-zinc-200 text-zinc-900'}`}>Windows Desktop App (PySide6)</div>
                  <div className="flex justify-center">
                    <div className="w-px h-6 bg-zinc-300" />
                  </div>
                  <div className={`p-4 rounded-xl text-center font-bold text-sm transition-colors ${isDark ? 'bg-zinc-50 text-zinc-950' : 'bg-zinc-900 text-white'}`}>SyncService (Thread-Safe)</div>
                  <div className="flex justify-between px-8">
                    <div className="w-px h-6 bg-zinc-300" />
                    <div className="w-px h-6 bg-zinc-300" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-3 rounded-xl border text-center text-xs font-medium transition-colors ${isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-50' : 'bg-white border-zinc-200 text-zinc-900'}`}>SQLite (Local)</div>
                    <div className={`p-3 rounded-xl border text-center text-xs font-medium transition-colors ${isDark ? 'bg-zinc-800 border-zinc-700 text-zinc-50' : 'bg-white border-zinc-200 text-zinc-900'}`}>Google Apps Script</div>
                  </div>
                  <div className="flex justify-end px-12">
                    <div className="w-px h-6 bg-zinc-300" />
                  </div>
                  <div className="flex justify-end">
                    <div className={`w-1/2 p-3 rounded-xl border text-center text-xs font-medium transition-colors ${isDark ? 'bg-zinc-950 text-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200 text-zinc-900'}`}>Google Sheets (Cloud)</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Robust Offline-First Architecture</h2>
                <div className={`space-y-6 leading-relaxed transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  <p>
                    Built for the specific connectivity challenges of institutions, this task manager ensures zero data loss through a sophisticated hybrid sync engine.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${isDark ? 'bg-zinc-50 text-zinc-950' : 'bg-zinc-900 text-white'}`}>01</div>
                      <div>
                        <h4 className={`font-bold text-sm ${isDark ? 'text-zinc-50' : 'text-zinc-900'}`}>Conflict-Safe Cloud Merge</h4>
                        <p className="text-xs mt-1">An action-aware "dirty task map" tracks pending changes per task ID, ensuring local edits always win during cloud pulls.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${isDark ? 'bg-zinc-50 text-zinc-950' : 'bg-zinc-900 text-white'}`}>02</div>
                      <div>
                        <h4 className={`font-bold text-sm ${isDark ? 'text-zinc-50' : 'text-zinc-900'}`}>Incremental UPSERT Logic</h4>
                        <p className="text-xs mt-1">Uses SQLite WAL mode and true UPSERT logic to handle database updates efficiently without blocking the UI thread.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${isDark ? 'bg-zinc-50 text-zinc-950' : 'bg-zinc-900 text-white'}`}>03</div>
                      <div>
                        <h4 className={`font-bold text-sm ${isDark ? 'text-zinc-50' : 'text-zinc-900'}`}>Thread-Safe Background Ops</h4>
                        <p className="text-xs mt-1">Background cloud sync runs on Qt's thread pool with RLock protection, keeping the user interface fluid and responsive.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Multiplus Computer Services</h2>
              <p className={`max-w-lg mx-auto transition-colors ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>Comprehensive computer services in Mathbaria and Barisal. From the code that runs your business to the hardware that powers it.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xl transition-colors ${isDark ? 'bg-zinc-50 text-zinc-950 shadow-zinc-900' : 'bg-zinc-900 text-white shadow-zinc-200'}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className={`text-sm leading-relaxed transition-colors ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`py-24 px-6 transition-colors ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-16">Professional Journey</h2>
            <div className="space-y-12">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="grid md:grid-cols-[200px_1fr] gap-8">
                  <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest">{exp.period}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <div className={`text-sm font-medium mb-4 ${isDark ? 'text-zinc-500' : 'text-zinc-900'}`}>{exp.company}</div>
                    <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-24 px-6 transition-colors ${isDark ? 'bg-zinc-900/10' : 'bg-zinc-50'}`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Technical Arsenal</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {SKILLS.map((skill, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-center gap-2 text-sm font-medium">
                        <div className={`w-1 h-1 rounded-full ${isDark ? 'bg-zinc-50' : 'bg-zinc-900'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Personal Section */}
        <section id="about" className={`py-24 px-6 overflow-hidden relative transition-colors ${isDark ? 'bg-zinc-900 text-zinc-50' : 'bg-zinc-900 text-white'}`}>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-8">Beyond the Screen.</h2>
                <div className={`space-y-6 leading-relaxed transition-colors ${isDark ? 'text-zinc-400' : 'text-zinc-400'}`}>
                  <p>
                    I believe that technology should be as harmonious as music. When I'm not optimizing Bengali grammar algorithms or repairing hardware, you'll find me immersed in melodies.
                  </p>
                  <p>
                    As a singer and musician, I bring a unique rhythmic perspective to my development work—focusing on flow, structure, and the human experience behind every interface.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
                      <Music className="w-4 h-4" /> Musician
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
                      <CheckCircle2 className="w-4 h-4" /> Problem Solver
                    </div>
                  </div>
                </div>
              </div>
              <div className={`aspect-square rounded-3xl border flex items-center justify-center p-12 transition-colors ${isDark ? 'bg-zinc-800 border-white/10' : 'bg-zinc-800 border-white/10'}`}>
                <div className="text-center">
                  <div className="w-24 h-24 bg-zinc-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Music className="w-10 h-10 text-zinc-400" />
                  </div>
                  <p className="text-zinc-500 italic">"Code is logic, Music is soul."</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Let's build something meaningful.</h2>
            <p className={`mb-12 max-w-md mx-auto transition-colors ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>Available for software collaborations, hardware consultancy, or just a chat about tech and music.</p>
            
            <div className="flex flex-col items-center gap-8">
              <a 
                href="mailto:youngsunsonsignup@gmail.com" 
                className={`text-2xl md:text-4xl font-medium transition-all underline underline-offset-8 ${isDark ? 'hover:text-zinc-400' : 'hover:text-zinc-500'}`}
              >
                youngsunsonsignup@gmail.com
              </a>
              
              <div className="flex gap-6">
                <a href="https://github.com/himadribiswas" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-full border transition-all ${isDark ? 'border-zinc-800 hover:bg-zinc-900' : 'border-zinc-100 hover:bg-zinc-50'}`} aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/himadribiswas" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-full border transition-all ${isDark ? 'border-zinc-800 hover:bg-zinc-900' : 'border-zinc-100 hover:bg-zinc-50'}`} aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://facebook.com/BhashaMitraAI" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-full border transition-all ${isDark ? 'border-zinc-800 hover:bg-zinc-900' : 'border-zinc-100 hover:bg-zinc-50'}`} aria-label="Facebook">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-12 border-t px-6 transition-colors ${isDark ? 'border-zinc-900' : 'border-zinc-100'}`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Himadri Biswas. All rights reserved.
          </p>
          <p className="text-zinc-400 text-sm">
            Designed for high performance & minimal footprint.
          </p>
        </div>
      </footer>
    </div>
  );
}
