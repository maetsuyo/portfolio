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
  {
    name: "Certified Network Defender",
    description: "EC-Council認定。ネットワークの防御・保護技術に関する国際資格。",
  },
  {
    name: "Certified Cybersecurity Technician",
    description: "EC-Council認定。サイバーセキュリティの基礎技術力を証明する国際資格。",
  },
  {
    name: "CompTIA Security+",
    description: "CompTIA認定。情報セキュリティ全般の基礎知識を問う国際資格。",
  },
  {
    name: "CompTIA Network+",
    description: "CompTIA認定。ネットワークの基礎知識・構築運用スキルを問う国際資格。",
  },
  {
    name: "情報セキュリティマネジメント",
    description: "IPA（情報処理推進機構）が実施する、情報セキュリティ管理に関する国家資格。",
  },
  {
    name: "G検定",
    description: "JDLA（日本ディープラーニング協会）主催。ディープラーニングの基礎知識を問う検定。",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    description: "AWS認定。クラウドおよびAWSサービスの基礎知識を問う資格。",
  },
  {
    name: "情報技術検定2級",
    description: "情報技術に関する基礎的な知識・技能を問う検定試験。",
  },
  {
    name: "第一種電気工事士",
    description: "全ての一般用・自家用電気工作物の工事に従事できる国家資格。",
  },
  {
    name: "第二種電気工事士",
    description: "一般用電気工作物（住宅・小規模店舗等）の工事に従事できる国家資格。",
  },
];

const internships = [
  {
    company: "三井物産セキュアディレクション株式会社",
    course: "診断エンジニアコース",
    days: 4,
    content:
      "Webの脆弱性診断を体験しました。Webサイトのクローリングから手動診断や自動診断をおこない、最終日には4人ほどのチームで発見した脆弱性についてプレゼンをおこないました。",
  },
  {
    company: "ストーンビートセキュリティ株式会社",
    course: null,
    days: 3,
    content:
      "ペネトレーションテスト・Webの脆弱性診断・フォレンジックなどを幅広く浅く体験しました。最終日には3日間を通して感じたことをプレゼンしました。",
  },
  {
    company: "エムオーテックス株式会社",
    course: "開発コース",
    days: 2,
    content:
      "3人ほどのチームでAWSを用いてログ管理アプリを制作しました。最終日には制作するうえでの工夫や3日間を通して感じたことをプレゼンしました。",
  },
  {
    company: "エムオーテックス株式会社",
    course: "セキュリティ診断コース",
    days: 2,
    content:
      "前半はWebの脆弱性についてハンズオンで学び、後半は4人ほどのチームで簡易的なCTFに挑戦しました。",
  },
  {
    company: "GMOサイバーセキュリティ byイエラエ株式会社",
    course: "Web診断部門コース",
    days: 5,
    content:
      "Webの脆弱性診断の一連の流れ（クローリング・診断・報告書作成）を体験しました。実際に診断するWebサイトの環境を自分で構築し、その環境に対して診断をおこない発見した脆弱性について報告書にまとめました。",
  },
];

const works = [
  {
    name: "SQLインジェクションを体験できるサイト",
    content:
      "Webアプリケーションの脆弱性である、SQLインジェクションを体験できるサイトを制作しました。脆弱なサイトと対策されたサイトを作りそれぞれの動作の違いをわかるようにしました。",
  },
  {
    name: "ブラウザベースで使えるメモアプリ",
    content: "簡単なメモアプリを制作しました。メモには重要度と期限を設定できるようにしました。",
  },
  {
    name: "タイピングゲーム制作",
    content:
      "ログインしてプレイできるタイピングゲームを制作しました。結果画面で正確率やタイプミスした文字を見れるようにしました。",
  },
  {
    name: "自身でCTFを解くAIエージェント",
    content:
      "CTFの問題の情報を入力し、ボタン1つ押すだけで問題を解きFLAGを取得してくれるAIエージェントを制作しています。",
  },
];

export default function ProfilePageComponent() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-8 cyber-text">プロフィール</h2>

      <section className="mb-10 bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <h3 className="text-2xl font-semibold mb-3 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,212,255,0.45)]">自己紹介</h3>
        <p className="leading-relaxed text-slate-200 text-xl">
          現在はWebアプリケーションの脆弱性診断のアルバイトをしています。
        </p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,212,255,0.45)]">スキル</h3>

        <div className="mb-8">
          <p className="text-lg font-medium text-slate-500 uppercase tracking-widest mb-4">
            プログラミング言語
          </p>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex flex-col items-center gap-2 bg-slate-900/90 backdrop-blur-sm border border-white/10 hover:bg-slate-800/90 hover:border-emerald-500/30 transition-all duration-200 rounded-xl p-5 w-28"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={lang.icon} alt={lang.name} className="w-10 h-10" />
                <div className="text-center">
                  <p className="text-base font-medium">{lang.name}</p>
                  <p className="text-base text-slate-400">{lang.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg font-medium text-slate-500 uppercase tracking-widest mb-4">
            ツール
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-sm border border-white/10 hover:bg-slate-800/90 hover:border-emerald-500/30 transition-all duration-200 rounded-lg px-4 py-2"
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
          <p className="text-lg font-medium text-slate-500 uppercase tracking-widest mb-4">
            資格
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-3">
            {certifications.map((cert) => (
              <span key={cert.name} className="group relative">
                <span className="inline-block bg-emerald-950/40 border border-emerald-700/30 text-emerald-200 text-base rounded-full px-3 py-1 cursor-default transition-colors duration-200 group-hover:border-cyan-400/50 group-hover:bg-emerald-950/60 group-hover:text-cyan-100">
                  {cert.name}
                </span>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-64 -translate-x-1/2 translate-y-1 rounded-xl border border-cyan-500/30 bg-slate-900/95 px-4 py-3 text-sm leading-relaxed text-slate-200 opacity-0 shadow-[0_0_20px_rgba(0,212,255,0.15)] backdrop-blur-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {cert.description}
                  <span className="absolute left-1/2 top-full -mt-px h-3 w-3 -translate-x-1/2 rotate-45 rounded-xs border-b border-r border-cyan-500/30 bg-slate-900/95" />
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,212,255,0.45)]">
          サマーインターンシップ参加実績
        </h3>
        <div className="space-y-3">
          {internships.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="mt-2 w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <div>
                <p className="text-xl font-medium">{item.company}</p>
                <p className="text-xl text-slate-400">
                  {item.course
                    ? `${item.course}（${item.days}日間）`
                    : `（${item.days}日間）`}
                </p>
                <p className="mt-2 leading-relaxed text-slate-300">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,212,255,0.45)]">
          制作物
        </h3>
        <div className="space-y-3">
          {works.map((item) => (
            <div key={item.name} className="flex items-start gap-4 bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="mt-2 w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <div>
                <p className="text-xl font-medium">{item.name}</p>
                <p className="mt-2 leading-relaxed text-slate-300">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
