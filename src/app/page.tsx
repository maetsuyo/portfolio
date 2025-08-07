import Image from "next/image";
import { SiX, SiGithub, SiZenn } from "react-icons/si";

export default function Home() {
  return (
    <div>
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
        OCA大阪デザイン&テクノロジー専門学校
      </div>
      <div>
        前田剛志
      </div>
      <div>
        <SiX />
        <SiGithub />
        <SiZenn />
      </div>
    </div>
  );
}