import { Mail, MapPin, PhoneCall, Clock, Send, ShieldCheck } from "lucide-react";
import HomeHeader from "../components/home/HomeHeader";
import HomeSidebar from "../components/home/HomeSidebar";

const CONTACT_CHANNELS = [
  {
    title: "Support Hotline",
    detail: "+91 1800-456-7890",
    description: "Round-the-clock assistance for charging issues.",
    icon: PhoneCall,
    accent: "text-cyan-400",
    bg: "bg-cyan-500/10"
  },
  {
    title: "Email Us",
    detail: "support@electrify.com",
    description: "Share feedback or request assistance.",
    icon: Mail,
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Head Office",
    detail: "Bengaluru, India",
    description: "EV Hub, 5th Block, Koramangala.",
    icon: MapPin,
    accent: "text-amber-400",
    bg: "bg-amber-500/10"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050B16] text-white">
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,199,255,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(139,226,138,0.1),transparent_22%),linear-gradient(180deg,#071120_0%,#050B16_40%,#06101B_100%)]" />
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[90px_90px]" />

        <div className="relative mx-auto flex min-h-screen max-w-425 gap-5 p-4">
          <HomeSidebar />

          <main className="min-w-0 flex-1">
            <HomeHeader />

            <section className="mt-6 space-y-6">
              <header className="rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400/80">
                    Contact
                  </p>
                  <span className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                    Avg response: 6 hrs
                  </span>
                  <span className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    99.2% uptime
                  </span>
                </div>
                <h1 className="mt-3 text-3xl font-bold">We are here to help</h1>
                <p className="mt-2 max-w-2xl text-sm text-slate-400">
                  Reach out to our support crew for quick troubleshooting, billing questions, or station guidance. We respond within 24 hours on business days.
                </p>
              </header>

              <div className="grid gap-4 lg:grid-cols-3">
                {CONTACT_CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={channel.title}
                      className="rounded-2xl border border-white/10 bg-white/3 p-5 transition hover:bg-white/6 hover:shadow-[0_20px_60px_rgba(8,16,32,0.35)]"
                    >
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${channel.bg} ${channel.accent}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{channel.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{channel.description}</p>
                      <p className="mt-3 text-sm font-semibold text-slate-200">{channel.detail}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl">
                  <h2 className="text-xl font-bold">Send a message</h2>
                  <p className="mt-1 text-sm text-slate-400">Tell us how we can assist you with your charging journey.</p>

                  <form className="mt-5 grid gap-4">
                    <div className="h-px w-full bg-white/5" />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-semibold text-slate-500">Full name</label>
                        <input
                          type="text"
                          placeholder="Jane Doe"
                          className="mt-2 h-11 w-full rounded-lg border border-white/10 bg-black/30 px-4 text-sm text-white outline-none focus:border-cyan-500/60 focus:ring-4 focus:ring-cyan-500/10"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500">Email address</label>
                        <input
                          type="email"
                          placeholder="jane@domain.com"
                          className="mt-2 h-11 w-full rounded-lg border border-white/10 bg-black/30 px-4 text-sm text-white outline-none focus:border-cyan-500/60 focus:ring-4 focus:ring-cyan-500/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-500">Topic</label>
                      <select className="mt-2 h-11 w-full rounded-lg border border-white/10 bg-black/30 px-4 text-sm text-white outline-none focus:border-cyan-500/60 focus:ring-4 focus:ring-cyan-500/10">
                        <option>Charging issue</option>
                        <option>Billing question</option>
                        <option>Station feedback</option>
                        <option>Partnership inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-500">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Describe your issue in detail."
                        className="mt-2 w-full rounded-lg border border-white/10 bg-black/30 p-4 text-sm text-white outline-none focus:border-cyan-500/60 focus:ring-4 focus:ring-cyan-500/10 placeholder:text-slate-600"
                      />
                    </div>

                    <button
                      type="button"
                      className="flex h-11 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-cyan-600 to-blue-600 text-sm font-semibold text-white transition hover:scale-[1.02]"
                    >
                      <Send className="h-4 w-4" />
                      Send message
                    </button>
                  </form>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-cyan-400">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Working hours</h3>
                        <p className="mt-1 text-sm text-slate-400">Mon - Sat: 8:00 AM - 9:00 PM</p>
                        <p className="text-sm text-slate-400">Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Priority response</h3>
                        <p className="mt-1 text-sm text-slate-400">
                          Enterprise partners get a 2-hour response SLA with dedicated account managers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl">
                    <h3 className="text-lg font-semibold">Response timeline</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-400">
                      <li className="flex items-center justify-between">
                        <span>General inquiries</span>
                        <span className="text-slate-200">&lt; 24 hrs</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Billing issues</span>
                        <span className="text-slate-200">&lt; 12 hrs</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>On-site outages</span>
                        <span className="text-slate-200">&lt; 2 hrs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
