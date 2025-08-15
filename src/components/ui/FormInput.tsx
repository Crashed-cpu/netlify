import React from 'react';

interface FormInputProps {
  id: string;
  name: string;
  type?: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  as?: 'input' | 'textarea' | 'select';
  options?: { value: string; label: string }[];
  rows?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  type = 'text',
  label,
  value,
  onChange,
  placeholder = '',
  required = false,
  className = '',
  as = 'input',
  options = [],
  rows = 1
}) => {
  const inputClasses = `w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent hover:border-cyan-400/30 transition-all duration-300 ${className}`;

  return (
    <div className="group">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-300 mb-1 group-hover:text-cyan-400 transition-colors duration-300"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      
      {as === 'select' ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
          required={required}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={inputClasses}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClasses}
        />
      )}
    </div>
  );
};

export default FormInput;
