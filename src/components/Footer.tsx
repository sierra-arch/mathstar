import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0F0620] border-t border-white/5 px-6 lg:px-16 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-white.png"
            alt="ShepherdXR"
            width={32}
            height={32}
            className="object-contain opacity-70"
          />
          <span className="font-extrabold text-base text-white/70 tracking-tight">MathSTAR</span>
        </div>
        <p className="text-white/30 text-sm text-center">
          &copy; {new Date().getFullYear()} ShepherdXR. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://shepherdxr.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-sm hover:text-white/70 transition-colors"
          >
            shepherdxr.org
          </a>
        </div>
      </div>
    </footer>
  );
}
