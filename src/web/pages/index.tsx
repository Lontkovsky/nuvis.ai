import { motion } from "framer-motion";
import {
  Download,
  Play,
  Shield,
  EyeOff,
  Brain,
  Zap,
  Sparkles,
  CheckCircle2,
  Star,
  ArrowRight,
  Cpu,
  GraduationCap,
  MessageSquare,
} from "lucide-react";

const comparisonCompetitors = [
  { key: "interviewCoder", label: "Interview Coder" },
  { key: "cluely", label: "Cluely" },
  { key: "otter", label: "Otter" },
  { key: "avoma", label: "Avoma" },
  { key: "sensei", label: "Sensei" },
  { key: "finalRound", label: "Final Round AI" },
  { key: "metaview", label: "Metaview" },
  { key: "fireflies", label: "Fireflies" },
  { key: "fathom", label: "Fathom" },
  { key: "grain", label: "Grain" },
] as const;

type CompetitorKey = (typeof comparisonCompetitors)[number]["key"];

type ComparisonRow = {
  feature: string;
  nuvis: string;
  highlight?: boolean;
} & Record<CompetitorKey, string>;

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Local-first processing (audio + screen)",
    nuvis: "✅",
    interviewCoder: "✗",
    cluely: "✗",
    otter: "✗",
    avoma: "✗",
    sensei: "🔶",
    finalRound: "✗",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Stealth screen-share proof (never shows)",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶*",
    otter: "✗",
    avoma: "✗",
    sensei: "✗",
    finalRound: "✗",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Real-time candidate coaching",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶",
    otter: "✗",
    avoma: "✗",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Pre-flight interview brief",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶",
    otter: "✗",
    avoma: "✗",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Post-call debrief + next steps",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶",
    otter: "🔶",
    avoma: "🔶",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "🔶",
    fireflies: "🔶",
    fathom: "🔶",
    grain: "🔶",
  },
  {
    feature: "CV/GitHub auto-import",
    nuvis: "✅",
    interviewCoder: "✗",
    cluely: "✗",
    otter: "✗",
    avoma: "✗",
    sensei: "✗",
    finalRound: "🔶",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Your Story Vault (STAR narratives)",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "✗",
    otter: "✗",
    avoma: "✗",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "System Design hints in real time",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶",
    otter: "✗",
    avoma: "✗",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Company + role-specific prep packs",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶",
    otter: "✗",
    avoma: "✗",
    sensei: "✗",
    finalRound: "🔶",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Offline mode",
    nuvis: "✅",
    interviewCoder: "✗",
    cluely: "✗",
    otter: "✗",
    avoma: "✗",
    sensei: "✗",
    finalRound: "✗",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Latency under 200ms",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶",
    otter: "✗",
    avoma: "🔶",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "✗",
    fireflies: "🔶",
    fathom: "🔶",
    grain: "🔶",
  },
  {
    feature: "No meeting bot joins your call",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "✗",
    otter: "✗",
    avoma: "✗",
    sensei: "✗",
    finalRound: "✗",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Hidden from recordings",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶",
    otter: "✗",
    avoma: "✗",
    sensei: "✗",
    finalRound: "✗",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Works with any call app (Zoom, Meet, Teams)",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶",
    otter: "🔶",
    avoma: "🔶",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "🔶",
    fireflies: "🔶",
    fathom: "🔶",
    grain: "🔶",
  },
  {
    feature: "Adaptive coaching to your style",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶",
    otter: "✗",
    avoma: "✗",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Multi-language support",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶",
    otter: "🔶",
    avoma: "🔶",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "🔶",
    fireflies: "🔶",
    fathom: "🔶",
    grain: "🔶",
  },
  {
    feature: "Private memory of your projects",
    nuvis: "✅",
    interviewCoder: "✗",
    cluely: "✗",
    otter: "✗",
    avoma: "✗",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Practice interview mode",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "✗",
    otter: "✗",
    avoma: "✗",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Shadow Practice Mode (score + replay)",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "✗",
    otter: "✗",
    avoma: "✗",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Custom prompts per role",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶",
    otter: "✗",
    avoma: "🔶",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "🔶",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Candidate-first templates",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "✗",
    otter: "✗",
    avoma: "✗",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "✗",
    fireflies: "✗",
    fathom: "✗",
    grain: "✗",
  },
  {
    feature: "Install time < 2 minutes",
    nuvis: "✅",
    interviewCoder: "🔶",
    cluely: "🔶",
    otter: "✗",
    avoma: "🔶",
    sensei: "🔶",
    finalRound: "🔶",
    metaview: "🔶",
    fireflies: "🔶",
    fathom: "🔶",
    grain: "🔶",
  },
  {
    feature: "Price / month",
    nuvis: "€15",
    interviewCoder: "€49+",
    cluely: "€75",
    otter: "€20",
    avoma: "€50+",
    sensei: "€29",
    finalRound: "€99+",
    metaview: "€50+",
    fireflies: "€19+",
    fathom: "€24+",
    grain: "€19+",
    highlight: true,
  },
];

const killerFeatures = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Pre-flight Intelligence",
    bullets: [
      "Instant company + role brief in 60s",
      "Top questions, traps, and perfect answers",
      "Custom prep pack based on YOUR CV",
    ],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Adaptive Real-time Coaching",
    bullets: [
      "Live STAR prompts and story recall",
      "System Design hints on demand",
      "Tone + confidence nudges mid-answer",
    ],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Your Story Vault",
    bullets: [
      "Imports CV + GitHub automatically",
      "Builds proof-rich STAR narratives",
      "Recalls exact metrics and wins",
    ],
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Shadow Practice Mode",
    bullets: [
      "Mock interviews with scoring",
      "Record, replay, and fix weak spots",
      "Actionable post-call debriefs",
    ],
  },
  {
    icon: <EyeOff className="w-6 h-6" />,
    title: "100% Undetectable Stealth",
    bullets: [
      "Invisible overlay in screen share",
      "No bot joins your meetings",
      "Local-first & 100% private",
    ],
  },
];

const testimonials = [
  {
    name: "Ivan K.",
    role: "Senior React Dev",
    company: "Remote-first SaaS",
    quote:
      "3 interviews → FAANG offer. Nuvis remembered my projects better than I did.",
    avatar: "https://i.pravatar.cc/150?img=12",
    link: "https://linkedin.com/in/ivan-k",
  },
  {
    name: "Marta L.",
    role: "Backend Engineer",
    company: "Fintech scale-up",
    quote:
      "The stealth overlay is unreal. My answers got sharper in the first week.",
    avatar: "https://i.pravatar.cc/150?img=32",
    link: "https://linkedin.com/in/marta-l",
  },
  {
    name: "Oleh S.",
    role: "Staff Engineer",
    company: "Cloud infra",
    quote:
      "Pre-flight briefs saved me hours. Walked in knowing the exact risks.",
    avatar: "https://i.pravatar.cc/150?img=53",
    link: "https://linkedin.com/in/oleh-s",
  },
  {
    name: "Nina P.",
    role: "Product Engineer",
    company: "Healthcare AI",
    quote:
      "Post-call debriefs are ruthless in the best way. You fix mistakes fast.",
    avatar: "https://i.pravatar.cc/150?img=47",
    link: "https://linkedin.com/in/nina-p",
  },
  {
    name: "Danylo M.",
    role: "Full-stack",
    company: "B2B SaaS",
    quote:
      "Cheaper than Cluely and actually invisible. No contest.",
    avatar: "https://i.pravatar.cc/150?img=19",
    link: "https://linkedin.com/in/danylo-m",
  },
  {
    name: "Kira T.",
    role: "ML Engineer",
    company: "Edge AI",
    quote:
      "Local-first means I can use it on sensitive interviews. Zero cloud risk.",
    avatar: "https://i.pravatar.cc/150?img=25",
    link: "https://linkedin.com/in/kira-t",
  },
  {
    name: "Artem H.",
    role: "iOS Engineer",
    company: "Consumer apps",
    quote:
      "Shadow Practice Mode nailed my weak spots. Landed the role in 2 weeks.",
    avatar: "https://i.pravatar.cc/150?img=8",
    link: "https://linkedin.com/in/artem-h",
  },
  {
    name: "Sofia V.",
    role: "Data Engineer",
    company: "E-commerce",
    quote:
      "Nuvis feels like a personal brain. It remembers every story, perfectly.",
    avatar: "https://i.pravatar.cc/150?img=44",
    link: "https://linkedin.com/in/sofia-v",
  },
  {
    name: "Andrii N.",
    role: "Solutions Architect",
    company: "Cloud platform",
    quote:
      "The system design hints are surgical. It feels like a senior mentor.",
    avatar: "https://i.pravatar.cc/150?img=59",
    link: "https://linkedin.com/in/andrii-n",
  },
];

const testimonialLoop = [...testimonials, ...testimonials];

const faqs = [
  {
    q: "Will it get detected?",
    a: "Nuvis uses a truly invisible stealth overlay that never appears in screen share or recordings. No bots. No surprises.",
  },
  {
    q: "Local or cloud?",
    a: "Local-first and 100% private. Audio and screen are processed on-device. Cloud upload is off by default.",
  },
  {
    q: "Mac or Windows?",
    a: "Both. Native apps for macOS and Windows with the same stealth overlay engine.",
  },
  {
    q: "Does it work with Zoom / Meet / Teams?",
    a: "Yes. Nuvis is app-agnostic and works with any call or interview platform.",
  },
  {
    q: "Is this just transcription?",
    a: "No. It’s a candidate-first copilot: pre-flight brief, real-time coaching, and post-call debrief.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No lock-ins. Upgrade, downgrade, or cancel in one click.",
  },
];

const pricing = [
  {
    name: "Free",
    price: "€0",
    desc: "Try the core engine",
    features: [
      "1 interview per week",
      "Basic real-time hints",
      "Local-only processing",
      "Limited Story Vault",
    ],
    cta: "Start Free",
  },
  {
    name: "Personal",
    price: "€15/mo",
    desc: "Most popular",
    features: [
      "Unlimited interviews",
      "Full Story Vault + CV/GitHub import",
      "Pre-flight brief + post-call debrief",
      "Stealth overlay + no bot",
      "Shadow Practice Mode",
    ],
    cta: "Go Personal",
    highlight: true,
  },
  {
    name: "Power",
    price: "€35/mo",
    desc: "For heavy hitters",
    features: [
      "Everything in Personal",
      "Advanced System Design coaching",
      "Custom role playbooks",
      "Priority model updates",
    ],
    cta: "Unlock Power",
  },
];

const Home = () => {
  return (
    <main className="relative bg-background text-foreground">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-primary text-background px-4 py-2 rounded-lg font-bold"
      >
        Skip to content
      </a>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold tracking-tight">Nuvis</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Invisible Copilot
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#comparison" className="hover:text-primary transition-colors">
              Comparison
            </a>
            <a href="#video" className="hover:text-primary transition-colors">
              Demo
            </a>
            <a href="#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="#social-proof" className="hover:text-primary transition-colors">
              Proof
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden sm:inline-flex btn-secondary px-4 py-2 text-sm"
            >
              See Pricing
            </a>
            <a href="#cta" className="btn-primary px-4 py-2 text-sm">
              Start Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden pt-28 pb-16 h-[1200px]"
      >
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-40"
            src="/videos/panda.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/og-image.png"
          />
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.35em]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Join 1,247 engineers crushing interviews
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-black max-w-4xl"
          >
            Crush interviews without getting caught.
            <br />
            <span className="text-primary">Your invisible AI copilot.</span>
            <br />
            <span className="text-muted-foreground">
              15€/mo vs 75€ Cluely Pro + Undetectable.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            Nuvis is your personal brain for interviews: it remembers YOUR
            stories, CV, and GitHub, then coaches you before, during, and after
            every call. No BS. Works. Cheaper. Private.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 grid gap-2 text-sm sm:text-base"
          >
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <span>
                <strong>Local-first & 100% private</strong> — processes audio and
                screen on-device, no cloud upload by default.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <span>
                <strong>Truly invisible stealth overlay</strong> — never shows in
                screen share or recording (unlike Cluely/Otter).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <span>
                <strong>Cheaper than Cluely, better than Otter</strong> — €15/mo vs
                €75/mo Cluely Pro + Undetectable.
              </span>
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#pricing" className="btn-primary w-full sm:w-auto flex items-center gap-2">
              <Download className="w-5 h-5" />
              Start Free — No Card Required
            </a>
            <a href="#video" className="btn-secondary w-full sm:w-auto flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo (60s)
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-secondary"
          >
            <span className="px-3 py-1 rounded-full bg-secondary/15 border border-secondary/40">
              Limited-time: 50% off first 3 months
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 glass border-white/10 rounded-3xl p-6 max-w-3xl"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Built for candidates first: pre-flight brief, real-time coaching,
                  and post-call debrief. All invisible. All local.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span>Local-first & private</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="relative py-24 bg-background/95">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              Why Nuvis beats everyone
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              No fluff. No bot. No cloud spying. Just real coaching, stealth
              overlay, and a price that makes Cluely look absurd.
            </p>
          </motion.div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 glass">
            <table className="w-full min-w-[2000px] text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="px-6 py-4 sticky left-0 z-10 bg-card/95">
                    Feature
                  </th>
                  <th className="px-6 py-4">Nuvis</th>
                  {comparisonCompetitors.map((competitor) => (
                    <th key={competitor.key} className="px-6 py-4">
                      {competitor.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-white/5 ${
                      row.highlight ? "bg-secondary/15 text-secondary" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-foreground/90 sticky left-0 bg-card/95">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 font-semibold">{row.nuvis}</td>
                    {comparisonCompetitors.map((competitor) => (
                      <td key={competitor.key} className="px-6 py-4">
                        {row[competitor.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            *Cluely stealth overlay requires an extra €25/mo add-on.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="#pricing" className="btn-primary w-full sm:w-auto flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#video" className="btn-secondary w-full sm:w-auto">
              See It Live
            </a>
          </div>
        </div>
      </section>

      {/* Video Block */}
      <section id="video" className="relative py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              See Nuvis crush a live System Design interview
            </h2>
            <p className="text-muted-foreground mt-4">
              Watch the stealth overlay appear, solve a tough question, and
              disappear — all without showing up on screen share.
            </p>
          </motion.div>

          <div className="mt-12 relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/10" />
            <video
              className="w-full h-full object-cover"
              src="/videos/panda.mp4"
              controls
              poster="/og-image.png"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-6 text-center">
            “Watch Nuvis crush a live System Design interview (you never see the
            overlay!)”
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="btn-primary w-full sm:w-auto">
              Start Free
            </a>
            <a href="#features" className="btn-secondary w-full sm:w-auto">
              See Killer Features
            </a>
          </div>
        </div>
      </section>

      {/* Killer Features */}
      <section id="features" className="relative py-24 bg-background/95">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              Killer features built for candidates
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Built for candidates first: pre-flight brief, real-time coaching,
              and post-call debrief. Your personal brain, always on.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {killerFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass border-white/10 rounded-3xl p-6 hover:border-primary/40 transition-all"
              >
                <div className="flex items-center gap-3 text-primary">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <a href="#pricing" className="btn-primary w-full sm:w-auto">
              Start Free Trial
            </a>
            <a href="#social-proof" className="btn-secondary w-full sm:w-auto">
              See Proof
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social-proof" className="relative py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              Engineers who landed offers, faster
            </h2>
            <p className="text-muted-foreground mt-4">
              Real candidates. Real offers. Nuvis is the unfair advantage that
              stays invisible.
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="overflow-hidden">
              <div className="marquee">
                {testimonialLoop.map((t, idx) => (
                  <div
                    key={`${t.name}-${idx}`}
                    className="min-w-[260px] max-w-[320px] glass border-white/10 rounded-3xl p-6"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={`Portrait of ${t.name}`}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {t.role} @ {t.company}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-foreground">“{t.quote}”</p>
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary"
                    >
                      LinkedIn
                      <ArrowRight className="w-3 h-3" />
                    </a>
                    <div className="mt-4 flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="marquee marquee-reverse">
                {testimonialLoop.map((t, idx) => (
                  <div
                    key={`${t.name}-reverse-${idx}`}
                    className="min-w-[260px] max-w-[320px] glass border-white/10 rounded-3xl p-6"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={`Portrait of ${t.name}`}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {t.role} @ {t.company}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-foreground">“{t.quote}”</p>
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary"
                    >
                      LinkedIn
                      <ArrowRight className="w-3 h-3" />
                    </a>
                    <div className="mt-4 flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="uppercase tracking-[0.2em] text-xs">
              Used by engineers @
            </span>
            {[
              "Cloudflare",
              "Stripe",
              "Shopify",
              "Booking.com",
              "Revolut",
              "Remote",
              "Glovo",
              "EPAM",
            ].map((logo) => (
              <span
                key={logo}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5"
              >
                {logo}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="#pricing" className="btn-primary w-full sm:w-auto">
              Start Free
            </a>
            <a href="#cta" className="btn-secondary w-full sm:w-auto">
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-24 bg-background/95">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">Pricing</h2>
            <p className="text-muted-foreground mt-4">
              Cheaper than Cluely, better than Otter. Pick your weapon.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 glass ${
                  plan.highlight ? "highlight-card" : "border-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.desc}</p>
                  </div>
                  {plan.highlight && (
                    <span className="text-xs uppercase tracking-[0.2em] text-primary border border-primary/50 px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="mt-6 text-4xl font-black">{plan.price}</div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-primary text-background hover:bg-primary/90"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-secondary">
            <Sparkles className="w-4 h-4" />
            Limited-time: 50% off first 3 months on Personal and Power.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">FAQ</h2>
            <p className="text-muted-foreground mt-4">
              The short answers. No corporate nonsense.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a href="#cta" className="btn-primary w-full sm:w-auto">
              Start Free
            </a>
            <a href="#pricing" className="btn-secondary w-full sm:w-auto">
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="cta"
        className="relative py-24 bg-gradient-to-br from-primary/20 via-background to-background"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass border-primary/30 rounded-[32px] p-10 md:p-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Start Free Trial — No Card Required
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Get the invisible AI interview copilot built for candidates first.
              Local-first. 100% private. Cheaper than Cluely. Better than Otter.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="btn-primary w-full sm:w-auto flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download for Mac
              </a>
              <a href="#" className="btn-secondary w-full sm:w-auto flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                Download for Windows
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span>Local-first</span>
              <span>Invisible</span>
              <span>15€/mo</span>
              <span>Built for candidates</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 border-t border-white/10 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass border-white/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">
                Ready to pass your next interview?
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mt-3">
                Download Nuvis and crush your next call.
              </h3>
              <p className="text-muted-foreground mt-3 max-w-xl text-sm">
                Invisible. Local-first. Built for candidates. The fastest way to
                walk in prepared and walk out with an offer.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary"
              >
                Become an Affiliate
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a href="#" className="btn-primary w-full sm:w-auto">
                Download for Mac
              </a>
              <a href="#" className="btn-secondary w-full sm:w-auto">
                Download for Windows
              </a>
            </div>
          </div>

          <div className="relative mt-12">
            <div className="text-[18vw] sm:text-[12vw] md:text-[96px] font-black tracking-tight text-white/5 leading-none">
              Nuvis
            </div>
            <div className="mt-2 h-px w-full bg-white/60" />
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-4 text-sm text-muted-foreground">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Sparkles className="w-4 h-4 text-primary" />
                Nuvis
              </div>
              <p className="text-sm">
                The invisible AI interview copilot. Pre-flight brief, real-time
                coaching, post-call debrief. No cloud by default.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                Legal
              </div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
                <li><a href="#" className="hover:text-primary">Security</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                Pages
              </div>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-primary">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
                <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                Compare
              </div>
              <ul className="space-y-2">
                <li><a href="#comparison" className="hover:text-primary">Nuvis vs Cluely</a></li>
                <li><a href="#comparison" className="hover:text-primary">Nuvis vs Interview Coder</a></li>
                <li><a href="#comparison" className="hover:text-primary">Nuvis vs Otter</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span>© 2026 Nuvis. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                All systems online
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary">Affiliate</a>
              <a href="#" className="hover:text-primary">Status</a>
              <a href="#" className="hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
