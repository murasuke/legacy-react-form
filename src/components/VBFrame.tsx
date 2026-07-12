import type { ReactNode } from 'react';

type VBFrameProps = {
  title: string;
  children: ReactNode;
};

export function VBFrame({ title, children }: VBFrameProps) {
  return (
    <fieldset className="vb-groupbox">
      <legend>{title}</legend>
      <div className="grid gap-2">{children}</div>
    </fieldset>
  );
}
