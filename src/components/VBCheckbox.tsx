import type { InputHTMLAttributes } from 'react';

export type VBCheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label: string;
};

export function VBCheckbox({
  className = '',
  label,
  ...props
}: VBCheckboxProps) {
  return (
    <label className="vb-checkbox">
      <input
        type="checkbox"
        className={`vb-checkbox__input ${className}`}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
}
