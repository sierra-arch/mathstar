import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Volunteer — MathSTAR",
  description:
    "Help bring the wonder of math to kids in your community. Volunteer opportunities with MathSTAR — from library demos to tutoring and outreach.",
};

const roles = [
  {
    title: "Library Demo Guide",
    commitment: "2–4 hrs/month",
    body: "Help kids experience MathSTAR for the first time at public library sessions. Guide them through the headset setup, answer questions, and be there for the moment they fall in love with math.",
    tags: ["In-Person", "Libraries", "Flexible Schedule"],
    color: "#7030A0",
  },
  {
    title: "Math Mentor",
    commitment: "4–6 hrs/month",
    body: "Pair with students during or after MathSTAR sessions to reinforce concepts, answer questions, and help connect their in-game discoveries to real-world math confidence.",
    tags: ["In-Person", "1-on-1", "Math Background Helpful"],
    color: "#0891B2",
  },
  {
    title: "Community Outreach",
    commitment: "2–3 hrs/month",
    body: "Help us reach underserved families, community centers, and schools who should know about MathSTAR. Share flyers, attend community events, and help us expand access.",
    tags: ["Flexible", "Your Community", "Storytelling"],
    color: "#7030A0",
  },
  {
    title: "Fundraising Partner",
    commitment: "Varies",
    body: "Help us raise funds to subsidize library access for kids who can't afford MathSTAR at home. From local fundraisers to grant writing support — every dollar expands access.",
    tags: ["Remote or In-Person", "High Impact", "Flexible"],
    color: "#0891B2",
  },
];

export default function VolunteerPage() {
  return (
    <main className="bg-[#FAFAF8]">
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-36 pb-24 px-6 lg:px-20 bg-[#7030A0]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C49FDC] font-semibold text-sm tracking-widest uppercase mb-6">
            Volunteer
          </p>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-8">
            Be the moment that{" "}
            <span className="italic text-[#C49FDC]">changes a child.</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Our founder&apos;s trajectory changed because one person — a school custodian —
            took a moment to hand him a book. Volunteers are that person for a new generation.
          </p>
        </div>
      </section>

      {/* ── WHY VOLUNTEER ── */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5">
              Why It Matters
            </p>
            <h2 className="text-4xl font-extrabold text-[#0D0B12] leading-tight mb-6">
              The magic requires people.
            </h2>
            <div className="space-y-4 text-[#0D0B12]/60 text-lg leading-relaxed">
              <p>
                MathSTAR is a technology experience — but the most powerful part is
                the human who&apos;s there when a kid takes off the headset and says,
                &ldquo;Wait, that was algebra?&rdquo;
              </p>
              <p>
                Volunteers help us run library programs, guide first-time users,
                connect families to access, and make sure every kid who needs MathSTAR
                can find it.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {[
              { num: "10/10", label: "student satisfaction in Ellis pilot" },
              { num: "45%", label: "score jump across 3 BPL sessions" },
              { num: "8 hrs", label: "to algebra-confident" },
            ].map((s) => (
              <div
                key={s.num}
                className="bg-[#F0E6F7] rounded-2xl p-6 border border-[#7030A0]/10"
              >
                <div className="text-3xl font-extrabold text-[#7030A0] mb-1">{s.num}</div>
                <div className="text-[#0D0B12]/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROLES ── */}
      <section className="py-24 px-6 lg:px-20 bg-[#F0E6F7]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-[#7030A0] font-semibold text-sm tracking-widest uppercase mb-5">
              Volunteer Roles
            </p>
            <h2 className="text-4xl font-extrabold text-[#0D0B12] leading-tight">
              Find your fit.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-3xl p-8 border border-[#0D0B12]/8"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3
                    className="text-xl font-extrabold leading-snug"
                    style={{ color: role.color }}
                  >
                    {role.title}
                  </h3>
                  <span className="shrink-0 text-xs font-semibold text-[#0D0B12]/40 bg-[#0D0B12]/5 rounded-full px-3 py-1.5 whitespace-nowrap">
                    {role.commitment}
                  </span>
                </div>
                <p className="text-[#0D0B12]/55 text-sm leading-relaxed mb-6">
                  {role.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full border"
                      style={{ borderColor: role.color + "40", color: role.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGN UP CTA ── */}
      <section className="py-24 px-6 bg-[#7030A0]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Ready to get involved?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Send us a note with which role interests you most and a bit about yourself.
            We&apos;ll follow up within a day to find the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:volunteer@shepherdxr.org?subject=Volunteer%20Interest"
              className="px-8 py-4 rounded-full font-bold text-[#7030A0] bg-white text-base hover:bg-[#F0E6F7] transition-colors"
            >
              Express Interest →
            </a>
            <Link
              href="/donate"
              className="px-8 py-4 rounded-full font-bold text-white/80 text-base border border-white/20 hover:border-white/40 hover:text-white transition-colors"
            >
              Donate Instead
            </Link>
          </div>
          <p className="text-white/30 text-sm mt-6">volunteer@shepherdxr.org</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
