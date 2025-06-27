import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './CustomDropdown.css';

interface DropdownOption {
  value: string;
  label: string;
  description?: string;
}

interface CustomDropdownProps {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  options,
  value,
  onChange,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHoveredOption(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(option => option.value === value);
  const hoveredOptionData = options.find(option => option.value === hoveredOption);

  const handleOptionSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setHoveredOption(null);
  };

  return (
    <div className={`custom-dropdown-container ${className}`}>
      <label className="cpywrt-label">{label}</label>
      
      <div className="custom-dropdown-wrapper" ref={dropdownRef}>
        <button
          type="button"
          className={`custom-dropdown-trigger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="custom-dropdown-value">
            {selectedOption?.label || 'Select...'}
          </span>
          <ChevronDown 
            size={16} 
            className={`custom-dropdown-icon ${isOpen ? 'rotated' : ''}`}
          />
        </button>

        {isOpen && (
          <div 
            className="custom-dropdown-content"
            onMouseLeave={() => setHoveredOption(null)}
          >
            <div className="custom-dropdown-options">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`custom-dropdown-option ${
                    option.value === value ? 'selected' : ''
                  } ${option.value === hoveredOption ? 'hovered' : ''}`}
                  onClick={() => handleOptionSelect(option.value)}
                  onMouseEnter={() => setHoveredOption(option.value)}
                >
                  <span className="option-label">{option.label}</span>
                </button>
              ))}
            </div>
            
            <div className={`custom-dropdown-description ${!hoveredOptionData?.description ? 'empty' : ''}`}>
              {hoveredOptionData?.description ? (
                <div className="description-content">
                  <h4>{hoveredOptionData.label}</h4>
                  <p>{hoveredOptionData.description}</p>
                </div>
              ) : (
                <div className="empty-description-text">
                  Hover over an option to see its description
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;