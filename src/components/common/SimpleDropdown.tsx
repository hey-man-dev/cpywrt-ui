import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './SimpleDropdown.css';

interface SimpleDropdownOption {
  value: string;
  label: string;
}

interface SimpleDropdownProps {
  label?: string;
  options: SimpleDropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SimpleDropdown: React.FC<SimpleDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="simple-dropdown-container" ref={dropdownRef}>
      {label && (
        <label className="simple-dropdown-label">{label}</label>
      )}
      
      <div className="simple-dropdown-wrapper">
        <button
          type="button"
          className={`simple-dropdown-trigger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="simple-dropdown-value">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown 
            className={`simple-dropdown-icon ${isOpen ? 'rotated' : ''}`} 
            size={16} 
          />
        </button>

        {isOpen && (
          <div className="simple-dropdown-content">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`simple-dropdown-option ${
                  option.value === value ? 'selected' : ''
                }`}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleDropdown;