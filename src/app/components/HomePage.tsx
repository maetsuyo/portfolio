import Image from "next/image";
import { SiX, SiGithub, SiZenn } from "react-icons/si";

export default function HomePageComponent() {
  return (
    <div className="flex flex-col justify-center items-center h-full select-none">
      <div className="-mt-4">
        <Image
          src="/profile/profile_OCA.jpg"
          alt="profile"
          width={288}
          height={288}
          className="w-72 h-72 rounded-full border border-white/10 object-cover"
          priority
        />
      </div>

      <div className="mt-12 text-center fade-in-up" style={{ animationDelay: "0.15s" }}>
        <p className="text-lg font-light tracking-[0.28em] text-slate-200 font-mono">
          OCA大阪デザイン&テクノロジー専門学校
        </p>
      </div>

      <div className="mt-4 fade-in-up" style={{ animationDelay: "0.3s" }}>
        <p className="text-5xl font-light tracking-[0.35em] cyber-text mb-8">
          佐々木 湧生
        </p>
      </div>

      <div className="flex items-center gap-6 fade-in-up" style={{ animationDelay: "0.45s" }}>
        <div className="h-px w-14 bg-linear-to-r from-transparent to-cyan-500/50" />
        <div className="flex space-x-8 text-2xl">
          {[
            { href: "https://x.com/maetsuyo",      label: "X",      Icon: SiX      },
            { href: "https://zenn.dev/maetsuyo",    label: "Zenn",   Icon: SiZenn   },
            { href: "https://github.com/maetsuyo", label: "GitHub", Icon: SiGithub },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-300 hover:text-cyan-300 hover:scale-125 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]"
            >
              <Icon />
            </a>
          ))}
        </div>
        <div className="h-px w-14 bg-linear-to-l from-transparent to-emerald-500/50" />
      </div>
    </div>
  );
}
