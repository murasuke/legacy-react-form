import { LoginPage } from './pages/LoginPage';
import { EmployeeMasterPage } from './pages/EmployeeMasterPage';
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
  return <SimpleMaster />;
}

export default App;
