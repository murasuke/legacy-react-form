type VBStatusBarProps = {
  message?: string;
};

export function VBStatusBar({ message = 'Ready' }: VBStatusBarProps) {
  return (
    <footer className="vb-statusbar">
      <span>{message}</span>
      <span className="vb-statusbar__grip" aria-hidden="true">◢</span>
    </footer>
  );
}
