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
    },
    { 
      value: 'Food', 
      label: 'Food',
      description: 'Restaurants, food delivery, and culinary services'
    },
    { 
      value: 'Fashion', 
      label: 'Fashion',
      description: 'Clothing, accessories, and lifestyle brands'
    },
    { 
      value: 'Healthcare', 
      label: 'Healthcare',
      description: 'Medical services, wellness, and health tech'
    },
    { 
      value: 'Education', 
      label: 'Education',
      description: 'Learning platforms, courses, and educational tools'
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
      value: 'Playful & Fun', 
      label: 'Playful & Fun',
      description: 'Light-hearted, energetic tone that creates joy'
    },
    { 
      value: 'Professional & Trustworthy', 
      label: 'Professional & Trustworthy',
      description: 'Polished, reliable messaging that builds confidence'
    },
    { 
      value: 'Warm & Friendly', 
      label: 'Warm & Friendly',
      description: 'Approachable, personal tone that feels welcoming'
    },
    { 
      value: 'Edgy & Provocative', 
      label: 'Edgy & Provocative',
      description: 'Bold, unconventional messaging that challenges norms'
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
      description: 'High-end positioning with quality and sophistication'
    },
    { 
      value: 'Luxury', 
      label: 'Luxury',
      description: 'Ultra-premium messaging emphasizing exclusivity and prestige'
    }
  ];

  return (
    <div className="cpywrt-input-panel">
      <h1 className="cpywrt-form-header">Generate Clever Copy</h1>
      
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