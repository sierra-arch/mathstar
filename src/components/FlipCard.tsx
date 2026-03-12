import Image from "next/image";

interface FlipCardProps {
  name: string;
  role: string;
  focus: string;
  bio: string;
  photo: string;
  color: string;
  size?: "large" | "small";
}

export default function FlipCard({ name, role, focus, bio, photo, color, size = "large" }: FlipCardProps) {
  if (size === "small") {
    return (
      <div className="bg-white rounded-2xl p-5 border border-[#0D0B12]/8 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-xl mx-auto mb-3 overflow-hidden">
          <Image src={photo} alt={name} width={56} height={56} className="w-full h-full object-cover object-top" />
        </div>
        <p className="font-extrabold text-[#0D0B12] text-sm leading-snug mb-1">{name}</p>
        <p className="text-[#0D0B12]/45 text-xs leading-snug mb-3">{role}</p>
        <p className="text-[#0D0B12]/55 text-xs leading-relaxed">{bio}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 border border-[#0D0B12]/8 flex gap-6 items-start">
      <div className="w-20 h-20 rounded-2xl shrink-0 overflow-hidden">
        <Image src={photo} alt={name} width={80} height={80} className="w-full h-full object-cover object-top" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-extrabold text-[#0D0B12] text-lg leading-snug">{name}</p>
        <p className="font-semibold text-sm mb-1" style={{ color }}>{role}</p>
        <p className="text-[#0D0B12]/35 text-xs italic mb-3">&ldquo;{focus}&rdquo;</p>
        <p className="text-[#0D0B12]/60 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
