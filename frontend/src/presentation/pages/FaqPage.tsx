import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import HomeHeader from "../components/home/HomeHeader";
import HomeSidebar from "../components/home/HomeSidebar";

const FAQS = [
  {
    question: "How do I locate nearby charging stations?",
    answer: "Use the Stations page and enable location access. The map highlights available stations with real-time status updates."
  },
  {
    question: "Can I reschedule a booking?",
    answer: "Yes. Open My Bookings, select a booking, and choose Reschedule up to 30 minutes before the start time."
  },
  {
    question: "What payment methods are supported?",
    answer: "We accept UPI, credit/debit cards, and net banking. Some stations also allow post-session billing."
  }
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#050B16] text-white">
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,199,255,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(139,226,138,0.1),transparent_22%),linear-gradient(180deg,#071120_0%,#050B16_40%,#06101B_100%)]" />
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[90px_90px]" />

        <div className="relative mx-auto flex min-h-screen max-w-425 gap-5 p-4">
          <HomeSidebar />

          <main className="min-w-0 flex-1">
            <HomeHeader />

            <section className="mt-6 space-y-5">
              <header className="rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80">FAQ</p>
                    <h1 className="mt-1 text-2xl font-bold">Quick answers</h1>
                  </div>
                </div>
                <p className="mt-3 max-w-2xl text-sm text-slate-400">
                  Find the most common questions about charging, bookings, and payments.
                </p>
              </header>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <div
                    key={faq.question}
                    className={`rounded-2xl border border-white/10 bg-white/3 transition ${openIndex === index ? "shadow-[0_18px_40px_rgba(8,16,32,0.35)]" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-4 text-left"
                    >
                      <span className="text-sm font-semibold text-slate-200">{faq.question}</span>
                      <span className={`flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 ${openIndex === index ? "bg-cyan-500/15 text-cyan-300" : "bg-white/5 text-slate-400"}`}>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                        />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/10 px-4 pb-4 text-sm text-slate-400">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
