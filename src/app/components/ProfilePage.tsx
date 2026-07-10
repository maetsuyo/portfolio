const languages = [
  { name: "Python", sub: "Django", icon: "https://cdn.simpleicons.org/python/ffffff" },
  { name: "TypeScript", sub: "Next.js", icon: "https://cdn.simpleicons.org/typescript/ffffff" },
  { name: "PHP", sub: "Laravel", icon: "https://cdn.simpleicons.org/php/ffffff" },
];

const tools = [
  { name: "Burp Suite", icon: "https://cdn.simpleicons.org/burpsuite/ffffff" },
  { name: "Kali Linux", icon: "https://cdn.simpleicons.org/kalilinux/ffffff" },
  { name: "OWASP ZAP", icon: "https://cdn.simpleicons.org/owasp/ffffff" },
  { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark/ffffff" },
  { name: "Nikto", icon: "https://api.iconify.design/mdi/radar.svg?color=%23ffffff" },
  { name: "Nessus", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/tenable.svg", invert: true },
  { name: "Process Monitor", icon: "https://api.iconify.design/material-symbols/troubleshoot.svg?color=%23ffffff" },
];

const certifications = [
  "Certified Network Defender",
  "Certified Cybersecurity Technician",
  "CompTIA Security+",
  "CompTIA Network+",
  "情報セキュリティマネジメント",
  "G検定",
  "AWS Certified Cloud Practitioner",
  "情報技術検定2級",
  "第一種電気工事士",
  "第二種電気工事士",
];

const internships = [
  { company: "三井物産セキュアディレクション株式会社", course: "診断エンジニアコース", days: 4 },
  { company: "ストーンビートセキュリティ株式会社", course: null, days: 3 },
  { company: "エムオーテックス株式会社", course: "開発コース", days: 2 },
  { company: "エムオーテックス株式会社", course: "セキュリティ診断コース", days: 2 },
  { company: "GMOサイバーセキュリティ byイエラエ株式会社", course: "Web診断部門コース", days: 5 },
];

export default function ProfilePageComponent() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-up">プロフィール</h2>

      <section className="mb-10 bg-white/5 rounded-2xl p-6 animate-fade-in-up [animation-delay:100ms]">
        <h3 className="text-2xl font-semibold mb-3 text-cyan-400">自己紹介</h3>
        <p className="leading-relaxed text-gray-200 text-xl">
          現在はWebアプリケーションの脆弱性診断のアルバイトをしています。
        </p>
      </section>

      <section className="mb-10 animate-fade-in-up [animation-delay:200ms]">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">スキル</h3>

        <div className="mb-8">
          <p className="text-lg font-medium text-gray-500 uppercase tracking-widest mb-4">
            プログラミング言語
          </p>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-200 rounded-xl p-5 w-28"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={lang.icon} alt={lang.name} className="w-10 h-10" />
                <div className="text-center">
                  <p className="text-base font-medium">{lang.name}</p>
                  <p className="text-base text-gray-400">{lang.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg font-medium text-gray-500 uppercase tracking-widest mb-4">
            ツール
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-200 rounded-lg px-4 py-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-5 h-5"
                  style={tool.invert ? { filter: "brightness(0) invert(1)" } : undefined}
                />
                <span className="text-base">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-lg font-medium text-gray-500 uppercase tracking-widest mb-4">
            資格
          </p>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="bg-cyan-950/60 border border-cyan-700/40 text-cyan-300 text-base rounded-full px-3 py-1 hover:bg-cyan-900/60 transition-colors duration-200"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10 animate-fade-in-up [animation-delay:300ms]">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
          サマーインターンシップ参加実績
        </h3>
        <div className="space-y-3">
          {internships.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/5 hover:bg-white/10 transition-colors duration-200 rounded-xl p-4"
            >
              <div className="mt-2 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <div>
                <p className="text-xl font-medium">{item.company}</p>
                <p className="text-xl text-gray-400">
                  {item.course
                    ? `${item.course}（${item.days}日間）`
                    : `（${item.days}日間）`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/5 rounded-2xl p-6 animate-fade-in-up [animation-delay:400ms]">
        <h3 className="text-2xl font-semibold mb-3 text-cyan-400">その他</h3>
        <p className="text-base text-gray-400">
          サイバーセキュリティを学ぶうえで大切にしていること — 記載予定
        </p>
      </section>
    </div>
  );
}
