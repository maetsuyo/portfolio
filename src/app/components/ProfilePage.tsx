export default function ProfilePageComponent() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6">プロフィール</h2>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">自己紹介</h3>
        <p className="text-lg leading-relaxed">
          学校ではプログラミングやインフラはもちろんのこと、主にサイバーセキュリティについて学んでおります。また、学校外での活動として、主に資格取得とCTFなどのセキュリティイベントにも積極的に参加して知識と技術力の向上に励んでおります。
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">スキル</h3>
        <ul className="list-decimal list-inside space-y-2 text-lg">
          <li>
            <strong>プログラミング言語: </strong>Python(Django), TypeScript(Next.js), PHP
          </li>
          <li>
            <strong>使用ツール: </strong>Burp Suite / OWASP ZAP / Nessus / WireShark / Process Monitor
          </li>
          <li>
            <strong>資格: </strong>CompTIA Security+, CompTIA Network+, Certified Cybersecurity Technician, 情報セキュリティマネジメント, AWS Certified Cloud Practitioner, G検定
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">サマーインターンシップ参加実績</h3>
        <p className="text-lg leading-relaxed">
          <ul>
            <li>三井物産セキュアディレクション株式会社 診断エンジニアコース（4日間）</li>
            <li>ストーンビートセキュリティ株式会社（3日間）</li>
            <li>エムオーテックス株式会社 開発コース（2日間）</li>
            <li>GMOサイバーセキュリティ byイエラエ株式会社 Web診断部門コース（5日間）</li>
          </ul>
        </p>
      </section>
    </div>
  );
}