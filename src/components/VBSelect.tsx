import type { SelectHTMLAttributes } from 'react';

export type VBSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

export function VBSelect({ className = '', label, children, ...props }: VBSelectProps) {
  return (
    <label className="vb-field">
      {label && <span className="vb-field__label">{label}</span>}
      <select className={`vb-select ${className}`} {...props}>
        {children}
      </select>
    </label>
  );
}
