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
      <div>
        <SiX />
        <SiZenn
          color="#00bfff"
        />
        <SiGithub />
      </div>
    </div>
  );
}