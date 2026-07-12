import type { FormHTMLAttributes, ReactNode } from 'react';

type VBFormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
};

export function VBForm({ children, ...formProps }: VBFormProps) {
  return (
    <form className="vb-form" {...formProps}>
      {children}
    </form>
  );
}
