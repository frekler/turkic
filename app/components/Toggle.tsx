'use client';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export default function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <label className="flex items-center cursor-pointer">
        <span className="text-stone-700 font-serif mr-3">{label}</span>
        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="sr-only"
          />
          <div
            className={`block w-14 h-8 rounded-full transition-colors duration-300 ${
              checked ? 'bg-amber-600' : 'bg-stone-300'
            }`}
          >
            <div
              className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 transform ${
                checked ? 'translate-x-6' : 'translate-x-0'
              } shadow-md`}
            />
          </div>
        </div>
      </label>
    </div>
  );
}