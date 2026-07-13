import { LoginPage } from './pages/LoginPage';
import { EmployeeMasterPage } from './pages/EmployeeMasterPage';
import { VBButton } from './components/VBButton';
import { SimpleMaster } from './pages/SimpleMaster';
import { ModernMaster } from './pages/ModernMaster';
import { Vb6StyleGuidePage } from './pages/Vb6StyleGuidePage';

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
  if (isPathMatch(pathname, '/login')) {
    return <LoginPage />;
  } else if (isPathMatch(pathname, '/guide')) {
    return <Vb6StyleGuidePage />;
  } else if (isPathMatch(pathname, '/employee-master')) {
    return <EmployeeMasterPage />;
  } else if (isPathMatch(pathname, '/modern-master')) {
    return <ModernMaster />;
  }

  // ルートと未定義パスは社員台帳画面をデフォルト表示する。
  return (
    <div className="m-3">
      <button
        className="
          border py-0.5 px-4 bg-[#c0c0c0]
          border-l-white border-t-white border-r-[#404040] border-b-[#404040]
          shadow-[inset_-1px_-1px_0_#808080,inset_1px_1px_0_#dfdfdf]
"
      >
        OK
      </button>{' '}
      <br /> <br />
      <button
        className="
          border py-0.5 px-4 bg-[#c0c0c0]
          border-l-white border-t-white
          border-r-[#404040] border-b-[#404040]
          shadow-[inset_-1px_-1px_0_#808080,inset_1px_1px_0_#dfdfdf]
          active:border-t-[#404040] active:border-l-[#404040]
        active:border-r-white active:border-b-white
          active:shadow-[inset_1px_1px_0_#808080]
          active:translate-x-[1px] active:translate-y-[1px]"
      >
        OK
      </button>{' '}
      <br /> <br />
      <VBButton>ボタン</VBButton>
      <br />
      <br />
      <input
        type="text"
        className="border py-0.5 px-2 bg-white"
        value="テキスト"
      />
    </div>
  );
}

export default App;
