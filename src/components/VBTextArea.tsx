import type { TextareaHTMLAttributes } from 'react';

export type VBTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export function VBTextArea({
  className = '',
  label,
  ...props
}: VBTextAreaProps) {
  return (
    <label className="vb-field vb-textarea-field">
      {label && <span className="vb-field__label">{label}</span>}
      <textarea className={`vb-textarea ${className}`} {...props} />
    </label>
  );
}
