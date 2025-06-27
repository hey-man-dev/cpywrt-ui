import React from 'react';
import type { FormData, DropdownOption } from '../../types';
import CustomDropdown from '../common/CustomDropdown';
import './CopyGeneratorForm.css';

interface CopyGeneratorFormProps {
  formData: FormData;
  onFormChange: (field: keyof FormData, value: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
  isFormValid?: boolean;
}

const CopyGeneratorForm: React.FC<CopyGeneratorFormProps> = ({
  formData,
  onFormChange,
  onSubmit,
  isLoading = false,
  isFormValid = false
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const outputTypeOptions: DropdownOption[] = [
    { 
      value: 'Tagline', 
      label: 'Tagline',
      description: 'Short, memorable phrases that capture your brand essence'
    },
    { 
      value: 'Ad Copy', 
      label: 'Ad Copy',
      description: 'Compelling text for advertisements and marketing campaigns'
    }
  ];

  const industryOptions: DropdownOption[] = [
    { 
      value: 'Fintech', 
      label: 'Fintech',
      description: 'Financial technology and digital banking solutions'
    },
    { 
      value: 'SaaS', 
      label: 'SaaS',
      description: 'Software as a Service and business tools'
    },
    { 
      value: 'E-commerce', 
      label: 'E-commerce',
      description: 'Online retail and marketplace platforms'
    }
  ];

  const personalityOptions: DropdownOption[] = [
    { 
      value: 'Witty & Clever', 
      label: 'Witty & Clever',
      description: 'Smart wordplay and humor that engages and entertains'
    },
    { 
      value: 'Bold & Confident', 
      label: 'Bold & Confident',
      description: 'Strong, assertive messaging that commands attention'
    },
    { 
      value: 'Professional', 
      label: 'Professional',
      description: 'Polished, authoritative tone for business contexts'
    }
  ];

  const priceSegmentOptions: DropdownOption[] = [
    { 
      value: 'Budget', 
      label: 'Budget',
      description: 'Value-focused messaging for cost-conscious consumers'
    },
    { 
      value: 'Mid-range', 
      label: 'Mid-range',
      description: 'Balanced approach highlighting quality and value'
    },
    { 
      value: 'Premium', 
      label: 'Premium',
      description: 'Luxury positioning emphasizing exclusivity and quality'
    }
  ];

  return (
    <div className="cpywrt-input-panel">
      <h1 className="cpywrt-form-header">Copy Generator</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="cpywrt-form-group">
          <label htmlFor="product-name" className="cpywrt-label">
            Product Name
          </label>
          <input
            type="text"
            id="product-name"
            className="cpywrt-input"
            placeholder="e.g., Nova Wallet"
            value={formData.productName}
            onChange={(e) => onFormChange('productName', e.target.value)}
          />
        </div>

        <div className="cpywrt-form-group">
          <label htmlFor="product-desc" className="cpywrt-label">
            Product Description
          </label>
          <textarea
            id="product-desc"
            className="cpywrt-textarea"
            rows={3}
            placeholder="A secure digital wallet for instant global payments..."
            value={formData.productDescription}
            onChange={(e) => onFormChange('productDescription', e.target.value)}
          />
        </div>

        <CustomDropdown
          label="Output Type"
          options={outputTypeOptions}
          value={formData.outputType}
          onChange={(value) => onFormChange('outputType', value)}
        />

        <CustomDropdown
          label="Industry"
          options={industryOptions}
          value={formData.industry}
          onChange={(value) => onFormChange('industry', value)}
        />

        <CustomDropdown
          label="Personality"
          options={personalityOptions}
          value={formData.personality}
          onChange={(value) => onFormChange('personality', value)}
        />

        <CustomDropdown
          label="Price Segment"
          options={priceSegmentOptions}
          value={formData.priceSegment}
          onChange={(value) => onFormChange('priceSegment', value)}
        />

        <button
          type="submit"
          className="cpywrt-button-primary"
          disabled={isLoading || !isFormValid}
        >
          {isLoading ? 'Generating...' : 'Generate Clever Copy'}
        </button>
      </form>
    </div>
  );
};

export default CopyGeneratorForm;