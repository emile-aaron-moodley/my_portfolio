import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Globe, 
  Terminal, 
  Cpu, 
  Zap,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Phone,
  DollarSign,
  TrendingUp,
  Users,
  ShoppingBag,
  Send,
  Plus,
  Image as ImageIcon,
  Calendar,
  Check,
  Play
} from 'lucide-react';

/**
 * UTILITIES & HOOKS
 */

const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible];
};

/**
 * INTERACTIVE DEMO COMPONENTS
 */

// 1. E-Commerce Dashboard Demo
const DashboardDemo = () => {
  const [revenue, setRevenue] = useState(12450);
  const [orders, setOrders] = useState(156);
  const [visitors, setVisitors] = useState(890);

  const simulateSale = () => {
    setRevenue(prev => prev + Math.floor(Math.random() * 100) + 50);
    setOrders(prev => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors(prev => prev + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-zinc-900 rounded-xl p-6 border border-white/10 w-full max-w-2xl mx-auto shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Analytics Overview</h3>
        <button 
          onClick={simulateSale}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
        >
          <Plus size={16} /> Simulate New Order
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <DollarSign size={16} /> Total Revenue
          </div>
          <div className="text-2xl font-bold text-white">${revenue.toLocaleString()}</div>
          <div className="text-green-500 text-xs mt-1 flex items-center gap-1"><TrendingUp size={12}/> +12.5%</div>
        </div>
        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <ShoppingBag size={16} /> Total Orders
          </div>
          <div className="text-2xl font-bold text-white">{orders}</div>
          <div className="text-green-500 text-xs mt-1 flex items-center gap-1"><TrendingUp size={12}/> +4.2%</div>
        </div>
        <div className="bg-black/40 p-4 rounded-lg border border-white/5">
          <div className="flex items-center gap-2 text-gray-400 mb-2">
            <Users size={16} /> Live Visitors
          </div>
          <div className="text-2xl font-bold text-white">{visitors}</div>
          <div className="text-purple-500 text-xs mt-1 flex items-center gap-1 animate-pulse">● Live</div>
        </div>
      </div>
      <div className="mt-6 h-32 bg-black/40 rounded-lg border border-white/5 flex items-end justify-between p-4 gap-2">
        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
          <div key={i} className="w-full bg-purple-500/20 hover:bg-purple-500/50 transition-colors rounded-t" style={{ height: `${h}%` }}></div>
        ))}
      </div>
    </div>
  );
};

// 2. Fintech App Demo
const FintechDemo = () => {
  const [balance, setBalance] = useState(5420.50);
  const [transactions, setTransactions] = useState([
    { id: 1, name: "Netflix Subscription", amount: -15.99, date: "Today" },
    { id: 2, name: "Freelance Payment", amount: 1200.00, date: "Yesterday" },
    { id: 3, name: "Grocery Store", amount: -84.30, date: "Yesterday" },
  ]);

  const sendMoney = () => {
    const amount = 50;
    if (balance >= amount) {
      setBalance(prev => prev - amount);
      setTransactions(prev => [
        { id: Date.now(), name: "Transfer to Friend", amount: -amount, date: "Just now" },
        ...prev
      ]);
    }
  };

  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 w-full max-w-sm mx-auto shadow-2xl">
      <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-6 text-white">
        <div className="text-blue-200 text-sm mb-1">Total Balance</div>
        <div className="text-4xl font-bold">${balance.toFixed(2)}</div>
        <div className="flex gap-4 mt-6">
          <button onClick={sendMoney} className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
            <Send size={16} /> Send
          </button>
          <button className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
            <Plus size={16} /> Add
          </button>
        </div>
      </div>
      <div className="p-4 bg-zinc-900">
        <h4 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">Recent Activity</h4>
        <div className="space-y-3">
          {transactions.map(t => (
            <div key={t.id} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${t.amount > 0 ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                  <DollarSign size={14} />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.date}</div>
                </div>
              </div>
              <div className={`font-medium text-sm ${t.amount > 0 ? 'text-green-500' : 'text-white'}`}>
                {t.amount > 0 ? '+' : ''}{t.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. AI Generator Demo (Live Pollinations API)
const AIDemo = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!prompt) return;
    
    setIsGenerating(true);
    setImageUrl(null);
    
    const seed = Math.floor(Math.random() * 1000000);
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=800&height=450&seed=${seed}&nologo=true`;

    const img = new Image();
    img.onload = () => {
      setImageUrl(url);
      setIsGenerating(false);
    };
    img.onerror = () => {
      setIsGenerating(false);
    };
    img.src = url;
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-zinc-900 border border-white/10 rounded-xl p-6">
      <form onSubmit={handleGenerate} className="flex gap-2 mb-6">
        <input 
          type="text" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe an image (e.g. 'cyberpunk city')" 
          className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition-colors"
        />
        <button type="submit" disabled={isGenerating || !prompt} className="bg-pink-600 hover:bg-pink-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors">
          {isGenerating ? "Generating..." : "Generate"}
        </button>
      </form>

      <div className="aspect-video bg-black/50 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden relative min-h-[250px]">
        {!imageUrl && !isGenerating && (
          <div className="text-gray-500 flex flex-col items-center">
            <ImageIcon size={48} className="mb-2 opacity-50" />
            <p>Enter a prompt to generate a real AI image</p>
          </div>
        )}
        {isGenerating && (
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-pink-500 animate-pulse">Dreaming up your image...</p>
            <p className="text-gray-500 text-xs mt-2">Powered by Pollinations.ai</p>
          </div>
        )}
        {imageUrl && (
          <div className="w-full h-full relative group animate-in fade-in duration-700">
            <img 
              src={imageUrl} 
              alt={prompt} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4">
              <p className="text-white font-medium text-sm">Generated: "{prompt}"</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// 4. Medical Portal Demo
const MedicalDemo = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const slots = ["09:00 AM", "10:30 AM", "02:00 PM", "04:15 PM"];

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-2xl">
      <div className="bg-green-600 p-6 text-white">
        <h3 className="text-lg font-bold">Dr. Sarah Smith</h3>
        <p className="text-green-100 text-sm">Cardiologist • St. Mary's Hospital</p>
      </div>
      <div className="p-6 bg-gray-50 text-gray-800">
        <h4 className="font-bold mb-4 flex items-center gap-2"><Calendar size={18} /> Available Slots Today</h4>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {slots.map((slot, i) => (
            <button 
              key={i}
              onClick={() => setSelectedSlot(i)}
              className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                selectedSlot === i 
                  ? 'bg-green-600 border-green-600 text-white shadow-lg' 
                  : 'bg-white border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-600'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
        <button 
          disabled={selectedSlot === null}
          className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
        >
          {selectedSlot !== null ? <Check size={18} /> : null}
          {selectedSlot !== null ? "Confirm Booking" : "Select a Slot"}
        </button>
      </div>
    </div>
  );
};

// 5. Social Bot Demo
const BotDemo = () => {
  const [logs, setLogs] = useState([
    { time: "10:00:01", type: "info", msg: "Bot service started..." },
    { time: "10:00:05", type: "success", msg: "Connected to Instagram API" },
  ]);

  useEffect(() => {
    const actions = [
      { type: "info", msg: "Scanning hashtag #webdev..." },
      { type: "success", msg: "Liked post ID: 89234" },
      { type: "warning", msg: "Rate limit approaching (45/60)" },
      { type: "info", msg: "Sleeping for 2s..." },
      { type: "success", msg: "New follower detected: @code_wizard" }
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < actions.length) {
        const action = actions[i];
        setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), ...action }].slice(-6));
        i++;
      } else {
        i = 0; // Loop
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto bg-black rounded-lg border border-gray-800 p-4 font-mono text-sm shadow-2xl">
      <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-gray-500 text-xs">bot_worker_v2.js</div>
      </div>
      <div className="space-y-2 h-48 overflow-y-auto">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-gray-600">[{log.time}]</span>
            <span className={
              log.type === 'success' ? 'text-green-400' : 
              log.type === 'warning' ? 'text-yellow-400' : 'text-blue-400'
            }>
              {log.type.toUpperCase()}:
            </span>
            <span className="text-gray-300">{log.msg}</span>
          </div>
        ))}
        <div className="w-2 h-4 bg-white animate-pulse inline-block"></div>
      </div>
    </div>
  );
};

/**
 * CORE COMPONENTS
 */

const RevealSection = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    const numStars = 200;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = (Math.random() - 0.5) * canvas.width * 2;
        this.y = (Math.random() - 0.5) * canvas.height * 2;
        this.z = Math.random() * canvas.width;
        this.pz = this.z;
      }
      update(speed) {
        this.z = this.z - speed;
        if (this.z < 1) {
          this.reset();
          this.z = canvas.width;
          this.pz = this.z;
        }
      }
      draw() {
        const x = (this.x / this.z) * canvas.width / 2 + canvas.width / 2;
        const y = (this.y / this.z) * canvas.height / 2 + canvas.height / 2;
        const px = (this.x / this.pz) * canvas.width / 2 + canvas.width / 2;
        const py = (this.y / this.pz) * canvas.height / 2 + canvas.height / 2;
        this.pz = this.z;
        const size = (1 - this.z / canvas.width) * 3;
        const opacity = (1 - this.z / canvas.width);
        if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.lineWidth = size;
          ctx.moveTo(px, py);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }
    }

    resizeCanvas();
    for (let i = 0; i < numStars; i++) stars.push(new Star());

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.update(10);
        star.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          EMILE.DEV
        </a>
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-white/10 p-4 flex flex-col space-y-4">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className={`group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer ${project.size === "large" ? "md:col-span-2 md:row-span-2" : "col-span-1"}`}
    >
      <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity ${project.color}`}></div>
      <div className="relative p-8 h-full flex flex-col justify-between z-10">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-sm">
              <Code2 size={24} className="text-white" />
            </div>
            <div className="flex items-center gap-2 text-xs font-bold bg-white/10 px-2 py-1 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Play size={12} fill="currentColor" /> TRY DEMO
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const DemoComponent = project.Demo;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-zinc-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl flex flex-col">
        <div className="p-6 border-b border-white/5 flex justify-between items-center sticky top-0 bg-zinc-900 z-10">
          <div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <p className="text-gray-400 text-sm">Interactive Demo</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} className="text-white" />
          </button>
        </div>
        <div className="p-8 bg-black/20 flex-1">
          <DemoComponent />
        </div>
        <div className="p-6 border-t border-white/5 bg-zinc-900 text-sm text-gray-400">
          This is a live interactive component running directly within the portfolio.
        </div>
      </div>
    </div>
  );
};

const SkillBadge = ({ icon: Icon, name }) => (
  <div className="flex items-center gap-3 px-6 py-4 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all hover:bg-blue-500/10 group">
    <Icon className="text-gray-400 group-hover:text-blue-400 transition-colors" size={24} />
    <span className="text-gray-200 font-medium">{name}</span>
  </div>
);

/**
 * MAIN APP
 */
export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      desc: "A comprehensive analytics platform for online retailers. Features real-time data visualization, inventory management, and AI-driven sales forecasting.",
      tags: ['React', 'D3.js', 'Node', 'MongoDB'],
      color: "bg-purple-500",
      size: "large",
      Demo: DashboardDemo
    },
    {
      id: 2,
      title: "Fintech Mobile App",
      desc: "Secure mobile banking application with biometric authentication and real-time transaction processing.",
      tags: ['React Native', 'Firebase', 'Redux'],
      color: "bg-blue-500",
      Demo: FintechDemo
    },
    {
      id: 3,
      title: "AI Image Generator",
      desc: "SaaS platform integrating Stable Diffusion for custom asset generation. Type a prompt to see the simulation.",
      tags: ['Next.js', 'Python', 'Stripe'],
      color: "bg-pink-500",
      Demo: AIDemo
    },
    {
      id: 4,
      title: "Medical Portal",
      desc: "HIPAA compliant patient portal for appointment scheduling. Try booking a slot below.",
      tags: ['Vue.js', 'PostgreSQL', 'Docker'],
      color: "bg-green-500",
      Demo: MedicalDemo
    },
    {
      id: 5,
      title: "Social Media Bot",
      desc: "Automated content scheduling and engagement tool. Watch the terminal logs for live actions.",
      tags: ['Node.js', 'Puppeteer', 'AWS'],
      color: "bg-orange-500",
      Demo: BotDemo
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      <StarfieldBackground />
      <Navbar />

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <RevealSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">Available for new projects</span>
            </div>
          </RevealSection>
          
          <RevealSection delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Hi, I'm Emile Moodley. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">I build digital experiences</span> that matter.
            </h1>
          </RevealSection>

          <RevealSection delay={400}>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Full-stack developer specializing in creating fluid, high-performance web applications.
            </p>
          </RevealSection>

          <RevealSection delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors w-full sm:w-auto">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-colors w-full sm:w-auto">
                Contact Me
              </a>
            </div>
          </RevealSection>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* ABOUT / STATS SECTION */}
      <section id="about" className="relative z-10 py-24 bg-black/50 backdrop-blur-lg border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { label: 'Years Experience', value: '2+' },
              { label: 'Projects Completed', value: '5' },
              { label: 'Coffee Consumed', value: '∞' },
            ].map((stat, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="text-center pt-8 md:pt-0">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Tech Stack</h2>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <RevealSection delay={100}><SkillBadge icon={Globe} name="React / Next.js" /></RevealSection>
            <RevealSection delay={150}><SkillBadge icon={Terminal} name="TypeScript" /></RevealSection>
            <RevealSection delay={200}><SkillBadge icon={Zap} name="Tailwind CSS" /></RevealSection>
            <RevealSection delay={250}><SkillBadge icon={Cpu} name="Node.js" /></RevealSection>
            <RevealSection delay={300}><SkillBadge icon={Palette} name="Figma" /></RevealSection>
            <RevealSection delay={350}><SkillBadge icon={Code2} name="Python" /></RevealSection>
            <RevealSection delay={400}><SkillBadge icon={Github} name="Git / CI/CD" /></RevealSection>
            <RevealSection delay={450}><SkillBadge icon={Globe} name="Three.js" /></RevealSection>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative z-10 py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <RevealSection>
              <h2 className="text-3xl md:text-5xl font-bold">Featured Work</h2>
              <p className="text-gray-400 mt-4 max-w-lg">
                Select a project to interact with the live demo.
              </p>
            </RevealSection>
            <RevealSection delay={200}>
              <a href="#" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors group">
                View all projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </RevealSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            {projects.map((project, index) => (
              <RevealSection key={project.id} delay={100 * (index + 1)}>
                <ProjectCard project={project} onClick={setActiveProject} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6">
          <RevealSection>
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's work together</h2>
              <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                Have a project in mind? I'm currently available for freelance work and full-time positions.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
                <a href="mailto:moodleyemile@gmail.com" className="flex items-center justify-center gap-3 text-lg font-medium text-white hover:text-blue-400 transition-colors">
                  <Mail size={24} className="text-blue-500" />
                  moodleyemile@gmail.com
                </a>
                
                <a href="tel:+27846638888" className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-colors">
                  <Phone size={20} />
                  +27 84 663 8888
                </a>
              </div>
              
              <div className="flex justify-center gap-6 text-gray-500">
                <a href="https://github.com/Emile-Moodley" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/emile-moodley-1a5207384" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 Emile Moodley. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}