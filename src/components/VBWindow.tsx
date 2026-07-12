import type { ReactNode } from 'react';
import { VBMenuBar } from './VBMenuBar';
import { VBStatusBar } from './VBStatusBar';
import { VBTitleBar } from './VBTitleBar';

export type VBFormProps = {
  title: string;
  children: ReactNode;
  status?: string;
  showMenu?: boolean;
};

export function VBWindow({
  title,
  children,
  status = 'Ready',
  showMenu = false,
}: VBFormProps) {
  return (
    <main className="vb-desktop">
      <section className="vb-window" aria-label={title}>
        <VBTitleBar title={title} />
        {showMenu && <VBMenuBar />}
        <div className="vb-client-area">{children}</div>
        <VBStatusBar message={status} />
      </section>
    </main>
  );
}
