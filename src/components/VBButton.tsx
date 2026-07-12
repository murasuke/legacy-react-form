import type { ButtonHTMLAttributes } from 'react';

export type VBButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export function VBButton({
  className = '',
  children,
  label,
  ...props
}: VBButtonProps) {
  return (
    <button className={`vb-button ${className}`} {...props}>
      {label ?? children}
    </button>
  );
}
