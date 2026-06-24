type FieldProps = {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  step?: number;
  min?: number;
};

export default function Field({
  label,
  value,
  onChange,
  suffix,
  step = 1,
  min = 0,
}: FieldProps) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <div className="relative">
        <input
          type="number"
          className="field-input"
          value={Number.isNaN(value) ? "" : value}
          min={min}
          step={step}
          onChange={(e) => onChange(parseFloat(e.target.value))}
        />
        {suffix && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-ink-400">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}
