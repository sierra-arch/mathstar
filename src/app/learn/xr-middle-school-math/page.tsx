import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Empowering Middle School Math Success with XR Technology — ShepherdXR",
  description:
    "XR technology is bridging the arithmetic-to-algebra gap — making abstract concepts visual, engaging, and accessible for diverse learners.",
};

export default function XRArticlePage() {
  return (
    <main className="bg-white">
      <Nav />

      {/* Hero */}
      <div className="relative w-full h-[52vh] min-h-[360px] overflow-hidden">
        <Image
          src="/Stock Images/pexels-julia-m-cameron-4144150.jpg"
          alt="Student engaged in learning with technology"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04131a]/80 via-[#04131a]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-12 max-w-4xl mx-auto w-full">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full text-[#0891B2] bg-white/90 mb-4">
            Research
          </span>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">
            Empowering Middle School Math Success with XR Technology
          </h1>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 lg:px-0 py-16">

        <p className="text-ink/40 text-sm mb-10">May 8, 2024</p>

        <p className="text-ink/80 text-lg leading-relaxed mb-8">
          The transition from arithmetic to algebra is a critical moment in every student&apos;s math journey.
          For many middle schoolers, this leap can be daunting — often leading to frustration and
          disengagement. With the surge of Extended Reality (XR) technology, educators now have innovative
          tools to turn this challenge into an engaging and effective learning adventure.
        </p>

        <h2 className="text-2xl font-extrabold text-ink mb-4">What is Extended Reality (XR)?</h2>
        <p className="text-ink/75 text-base leading-relaxed mb-12">
          Extended Reality (XR) is an umbrella term encompassing Virtual Reality (VR), Augmented Reality
          (AR), and Mixed Reality (MR). These technologies create immersive digital environments that
          blend the physical and virtual worlds. In education, XR offers interactive and experiential
          learning opportunities — breaking the monotony of traditional teaching methods.
        </p>

        <h2 className="text-2xl font-extrabold text-ink mb-4">Why Middle School Math Needs XR</h2>
        <p className="text-ink/75 text-base leading-relaxed mb-6">
          Many students hit a roadblock when transitioning from arithmetic to algebra. This phase requires
          a shift in thinking — from concrete numerical operations to abstract reasoning. Without proper
          support, students may struggle to make this shift, losing confidence and interest in math.
        </p>
        <p className="text-ink/75 text-base leading-relaxed mb-4">XR technology addresses these challenges by:</p>
        <ul className="space-y-3 mb-12">
          {[
            "Visualizing abstract concepts: XR brings algebraic ideas to life, making them easier to grasp",
            "Encouraging active engagement: interactive XR experiences maintain attention and make learning fun",
            "Providing personalized learning: adaptive XR platforms can tailor lessons to each student's pace and style",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-ink/75 text-base leading-relaxed">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-[#0891B2] shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-extrabold text-ink mb-5">Practical Applications in the Classroom</h2>
        <div className="space-y-6 mb-12">
          {[
            {
              title: "Virtual Math Adventures",
              body: "Students embark on virtual adventures where they solve math puzzles to progress through a storyline — solving equations unlocks new worlds.",
            },
            {
              title: "Interactive Geometry",
              body: "XR tools allow students to manipulate 3D shapes, explore their properties, and understand geometric concepts in a hands-on way.",
            },
            {
              title: "Real-World Math Scenarios",
              body: "AR apps overlay math problems onto real-world objects, helping students see the practical applications of their lessons.",
            },
            {
              title: "Collaborative Problem-Solving",
              body: "Multiplayer XR platforms enable students to work on math challenges together in a shared virtual space, fostering teamwork.",
            },
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-[#0891B2]/30 pl-6">
              <h3 className="font-bold text-ink mb-1">{item.title}</h3>
              <p className="text-ink/65 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-extrabold text-ink mb-5">Benefits for Diverse Learners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            { title: "Improved Understanding", body: "Making abstract concepts tangible helps students grasp challenging topics more effectively." },
            { title: "Increased Engagement", body: "The immersive nature of XR keeps students interested and motivated to learn." },
            { title: "Enhanced Retention", body: "Experiential learning methods improve knowledge retention compared to traditional methods." },
            { title: "Accessibility", body: "XR tools can be adapted for students on IEPs, ensuring inclusive learning for all." },
          ].map((item, i) => (
            <div key={i} className="bg-[#F7F2FF] rounded-2xl p-6">
              <h3 className="font-bold text-ink mb-2 text-sm">{item.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-extrabold text-ink mb-5">Overcoming Common Challenges</h2>
        <div className="space-y-4 mb-12">
          {[
            { q: "Cost of implementation", a: "Schools can start with affordable AR apps and scale up gradually. Grants and partnerships with ed-tech organizations can help offset costs." },
            { q: "Technical barriers", a: "Ensure your school has the necessary infrastructure — reliable internet and compatible devices — before rolling out XR tools." },
            { q: "Resistance to change", a: "Providing training and showcasing the benefits of XR helps educators and parents get on board quickly." },
          ].map((item, i) => (
            <div key={i} className="border border-[#0891B2]/15 rounded-xl p-6">
              <h3 className="font-bold text-ink mb-2 text-sm">{item.q}</h3>
              <p className="text-ink/60 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <p className="text-ink/75 text-base leading-relaxed">
          Extended Reality is transforming middle school math education by making learning interactive,
          engaging, and effective. By addressing the challenges of the arithmetic-to-algebra transition,
          XR empowers students to overcome obstacles and build real confidence in math.
        </p>
      </article>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#E0F7FA] to-[#F7F2FF] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#0891B2] font-semibold text-sm tracking-widest uppercase mb-4">The Results</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-ink mb-5 leading-tight">
            The numbers are{" "}
            <em className="not-italic italic text-[#7030A0]">extraordinary.</em>
          </h2>
          <p className="text-ink/60 text-lg mb-8">
            See the full data, pilot findings, and student outcomes from both MathSTAR programs.
          </p>
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 bg-[#0891B2] text-white font-bold px-8 py-4 rounded-full hover:bg-[#0772a0] transition-colors text-base"
          >
            See the full results →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
