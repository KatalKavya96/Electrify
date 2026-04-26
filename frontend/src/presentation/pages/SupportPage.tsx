import { useState } from "react";
import HomeSidebar from "../components/home/HomeSidebar";
import HomeHeader from "../components/home/HomeHeader";
import { HelpCircle, PhoneCall, ChevronDown, ShieldAlert, Activity } from "lucide-react";

const FAQS = [
  {
    question: "How do I start a charging session?",
    answer: "Once you arrive at the station, connect the charger to your vehicle. Open the app, go to your booking, and click 'Start Session'. The machine will begin delivering power once authenticated."
  },
  {
    question: "What should I do if a machine is not working?",
    answer: "If a machine is unresponsive, please report it immediately via the 'Report Issue' button on the station details page or call the helpline number listed for that specific station."
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel your booking up to 30 minutes before the start time through the 'My Bookings' page. Refunds are processed automatically based on the cancellation policy."
  },
  {
    question: "How do I pay for my charging?",
    answer: "We support UPI, Credit/Debit cards, and Net Banking. You can pay at the time of booking or after the session is completed depending on the station's policy."
  }
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#050B16] text-white">
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,199,255,0.12),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(139,226,138,0.08),_transparent_22%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-[1700px] gap-5 p-4">
          <HomeSidebar />

          <main className="min-w-0 flex-1">
            <HomeHeader />

            <div className="mt-4 flex flex-col gap-6 lg:flex-row">
              {/* Left Column: Help Categories & FAQ */}
              <div className="flex-1 space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/[0.08]">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                      <PhoneCall className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold">24/7 Support</h3>
                    <p className="text-sm text-slate-400">Call us for immediate technical assistance.</p>
                    <button className="mt-4 text-sm font-semibold text-cyan-400">+91 1800-456-7890</button>
                  </div>

                  <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/[0.08]">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                      <Activity className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold">System Status</h3>
                    <p className="text-sm text-slate-400">All systems are currently operational and stations are online.</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Operational</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <h2 className="mb-6 flex items-center text-xl font-bold text-white">
                    <HelpCircle className="mr-2 h-6 w-6 text-cyan-400" />
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-3">
                    {FAQS.map((faq, index) => (
                      <div 
                        key={index} 
                        className={`overflow-hidden rounded-2xl border border-white/5 bg-white/2 transition-all ${openFaq === index ? 'ring-1 ring-cyan-500/30' : ''}`}
                      >
                        <button 
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          className="flex w-full items-center justify-between p-4 text-left hover:bg-white/5"
                        >
                          <span className="font-medium text-slate-200">{faq.question}</span>
                          <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq === index && (
                          <div className="border-t border-white/5 p-4 text-sm leading-relaxed text-slate-400 animate-in fade-in slide-in-from-top-1 duration-300">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="w-full lg:w-[380px]">
                <div className="sticky top-4 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-white">Contact Us</h2>
                    <p className="text-sm text-slate-400">Drop us a message and we'll get back to you soon.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-500">Subject</label>
                      <select className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5">
                        <option>Technical Issue</option>
                        <option>Payment Query</option>
                        <option>Account Support</option>
                        <option>Station Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-500">Message</label>
                      <textarea 
                        rows={5}
                        placeholder="Describe your issue..."
                        className="w-full rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 placeholder:text-slate-600 resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={formSubmitted}
                      className="flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-sm font-bold text-white transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                    >
                      {formSubmitted ? "Sent Successfully!" : "Send Message"}
                    </button>

                    <div className="mt-6 flex items-start gap-3 rounded-2xl bg-amber-500/10 p-4">
                      <ShieldAlert className="h-5 w-5 flex-shrink-0 text-amber-500" />
                      <p className="text-xs leading-relaxed text-amber-200/80">
                        For critical emergencies at a station, please call the station helpline directly.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
