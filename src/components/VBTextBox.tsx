import type { InputHTMLAttributes } from 'react';

export type VBTextBoxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function VBTextBox({ className = '', label, ...props }: VBTextBoxProps) {
  return (
    <label className="vb-field">
      {label && <span className="vb-field__label">{label}</span>}
      <input className={`vb-textbox ${className}`} {...props} />
    </label>
  );
}
