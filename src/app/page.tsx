import Image from "next/image";
import { SiX, SiGithub, SiZenn } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-900 min-h-screen text-white">
      <div>
        <Image
          src="/profile/profile-2.jpg"
          alt="profile"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div>
        <p className="text-2xl font-light tracking-wider leading-relaxed font-sans">
          OCA大阪デザイン&テクノロジー専門学校
        </p>
      </div>
      <div>
        <p className="text-4xl font-light leading-snug font-sans">
          前田 剛志
        </p>
      </div>
      <div className="flex space-x-5 text-2xl">
        <a
          href="https://x.com/maetsuyo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="hover:scale-125 transition-transform duration-200"
        >
          <SiX />
        </a>
        <a
          href="https://zenn.dev/maetsuyo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Zenn"
          className="hover:scale-125 transition-transform duration-200"
        >
          <SiZenn color="#00bfff"/>
        </a>
        <a
          href="https://github.com/maetsuyo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-125 transition-transform duration-200"
        >
          <SiGithub />
        </a>
      </div>
    </div>
  );
}