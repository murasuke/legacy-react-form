const menuItems = [
  { accessKey: 'F', label: 'File' },
  { accessKey: 'E', label: 'Edit' },
  { accessKey: 'V', label: 'View' },
  { accessKey: 'H', label: 'Help' },
];

export function VBMenuBar() {
  return (
    <nav className="vb-menubar" aria-label="メニュー">
      {menuItems.map(({ accessKey, label }) => (
        <span key={label}>
          <u>{accessKey}</u>
          {label.slice(1)}
        </span>
      ))}
    </nav>
  );
}
