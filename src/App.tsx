import { EmployeeMasterPage } from './pages/EmployeeMasterPage';
import { ModernMaster } from './pages/ModernMaster';
import { Vb6StyleGuidePage } from './pages/Vb6StyleGuidePage';
import { ComponentSamplePage } from './pages/ComponentSamplePage';

function isPathMatch(path: string, pattern: string): boolean {
  const normalizedPath = path.replace(/\/+$/, '') || '/';
  const normalizedPattern = pattern.replace(/\/+$/, '') || '/';
  return (
    normalizedPath === normalizedPattern ||
    normalizedPath.startsWith(normalizedPattern + '/')
  );
}

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  // 画面が増えた場合は、ここにパスごとの分岐を追加する。
  if (isPathMatch(pathname, '/guide')) {
    return <Vb6StyleGuidePage />;
  } else if (isPathMatch(pathname, '/employee-master')) {
    return <EmployeeMasterPage />;
  } else if (isPathMatch(pathname, '/modern-master')) {
    return <ModernMaster />;
  } else if (isPathMatch(pathname, '/components')) {
    return <ComponentSamplePage />;
  }

  const pages = [
    {
      href: '/components',
      category: '部品資料',
      title: 'コンポーネント一覧',
      description: 'src/components の全部品を、操作できる1つのフォームで確認します。',
    },
    {
      href: '/employee-master',
      category: '画面見本',
      title: '社員台帳（VB6風）',
      description: '業務アプリらしい密度と立体感を再現した社員台帳です。',
    },
    {
      href: '/modern-master',
      category: '比較資料',
      title: '社員マスタ（現代風）',
      description: '同じ題材を、現代的なレイアウトとスタイルで表現しています。',
    },
    {
      href: '/guide',
      category: '技術資料',
      title: 'VB6 UI スタイルガイド',
      description: 'React と Tailwind CSS でVB6風UIを作る考え方を紹介します。',
    },
  ];

  return (
    <main className="min-h-screen bg-[#008080] p-2 text-[13px] text-black sm:p-5">
      <div className="mx-auto max-w-[860px] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] bg-[#c0c0c0] p-1 shadow-[3px_3px_0_#000]">
        <header className="border border-[#000080] bg-[#000080] px-3 py-3 text-white">
          <p className="text-[11px] font-bold tracking-[0.14em] text-[#ffff00]">
            LEGACY REACT FORM OFFICIAL WEB SITE
          </p>
          <h1 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">
            VB6風フォーム サンプルギャラリー
          </h1>
          <p className="mt-1 text-[12px]">
            React + TypeScriptで再現する、懐かしい業務アプリケーション画面
          </p>
        </header>

        <nav className="mt-1 flex flex-wrap gap-x-1 border border-[#808080] bg-[#d4d0c8] px-2 py-1" aria-label="メインメニュー">
          <a className="font-bold text-[#000080] underline" href="/">HOME</a>
          <span aria-hidden="true">｜</span>
          <a className="text-[#000080] underline" href="/components">部品一覧</a>
          <span aria-hidden="true">｜</span>
          <a className="text-[#000080] underline" href="/guide">技術資料</a>
          <span aria-hidden="true">｜</span>
          <a className="text-[#000080] underline" href="https://github.com/murasuke/legacy-react-form">GitHub</a>
        </nav>

        <div className="mt-1 border border-[#808080] bg-white p-3">
          <div className="border border-dashed border-[#808000] bg-[#ffffcc] px-3 py-2 text-center text-[#800000]">
            <span className="font-bold">◆ お知らせ ◆</span>
            <span className="ml-2">VB6風UIコンポーネントの表示サンプルを公開中です。</span>
          </div>

          <section className="mt-4" aria-labelledby="page-list-title">
            <h2 id="page-list-title" className="border-l-8 border-[#ff0000] bg-[#000080] px-2 py-1 text-[15px] font-bold text-white">
              サンプルページのご案内
            </h2>
            <p className="my-3 leading-6">
              下記のメニューから各サンプルをご覧ください。青い見出しをクリックすると画面を表示します。
            </p>

            <div className="grid gap-2 sm:grid-cols-2">
              {pages.map((page) => (
                <article key={page.href} className="vb-raised bg-[#d4d0c8] p-3">
                  <p className="text-[11px] font-bold text-[#800000]">
                    ［{page.category}］
                  </p>
                  <h3 className="mt-1 text-[15px] font-bold">
                    <a href={page.href} className="text-[#0000ee] underline visited:text-[#551a8b]">
                      ■ {page.title}
                    </a>
                  </h3>
                  <p className="mt-2 leading-5">{page.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-4 border border-[#808080] bg-[#eeeeee] p-2" aria-label="動作環境">
            <p className="font-bold text-[#000080]">■ 動作環境</p>
            <p className="mt-1">Vite 8 ／ React 19 ／ TypeScript 6 ／ Tailwind CSS 4</p>
          </section>
        </div>

        <footer className="mt-1 border border-[#808080] bg-[#000080] px-3 py-2 text-center text-[11px] text-white">
          <p>Copyright (c) 2026 murasuke. All rights reserved.</p>
          <p className="mt-1 text-[#ffff00]">このページは 800×600 以上の画面サイズでご覧ください。</p>
        </footer>
      </div>
    </main>
  );
}

export default App;
