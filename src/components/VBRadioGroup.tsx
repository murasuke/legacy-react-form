import type { ChangeEventHandler } from 'react';

export type VBRadioOption = {
  value: string;
  label: string;
};

export type VBRadioGroupProps = {
  label: string;
  name: string;
  options: readonly VBRadioOption[];
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  legendClassName?: string;
  layout?: 'group' | 'field';
};

export function VBRadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  className = '',
  legendClassName = '',
  layout = 'group',
}: VBRadioGroupProps) {
  const radioOptions = (
    <div className="vb-radio-group__options">
      {options.map((option) => (
        <label className="vb-radio-option" key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );

  if (layout === 'field') {
    return (
      <div className={`vb-field vb-radio-field ${className}`}>
        <span className="vb-field__label">{label}</span>
        {radioOptions}
      </div>
    );
  }

  return (
    <fieldset className={`vb-radio-group ${className}`}>
      <legend className={legendClassName}>{label}</legend>
      {radioOptions}
    </fieldset>
  );
}
