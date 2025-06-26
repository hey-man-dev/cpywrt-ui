import React from 'react';
import type { FormData } from '../../types';
import './CopyGeneratorForm.css';

interface CopyGeneratorFormProps {
  formData: FormData;
  onFormChange: (field: keyof FormData, value: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
}

const CopyGeneratorForm: React.FC<CopyGeneratorFormProps> = ({
  formData,
  onFormChange,
  onSubmit,
  isLoading = false
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

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

        <div className="cpywrt-form-group">
          <label htmlFor="output-type" className="cpywrt-label">
            Output Type
          </label>
          <select
            id="output-type"
            className="cpywrt-select"
            value={formData.outputType}
            onChange={(e) => onFormChange('outputType', e.target.value)}
          >
            <option value="Tagline">Tagline</option>
            <option value="Ad Copy">Ad Copy</option>
          </select>
        </div>

        <div className="cpywrt-form-group">
          <label htmlFor="industry" className="cpywrt-label">
            Industry
          </label>
          <select
            id="industry"
            className="cpywrt-select"
            value={formData.industry}
            onChange={(e) => onFormChange('industry', e.target.value)}
          >
            <option value="Fintech">Fintech</option>
            <option value="SaaS">SaaS</option>
            <option value="E-commerce">E-commerce</option>
          </select>
        </div>

        <div className="cpywrt-form-group">
          <label htmlFor="personality" className="cpywrt-label">
            Personality
          </label>
          <select
            id="personality"
            className="cpywrt-select"
            value={formData.personality}
            onChange={(e) => onFormChange('personality', e.target.value)}
          >
            <option value="Witty & Clever">Witty & Clever</option>
            <option value="Bold & Confident">Bold & Confident</option>
            <option value="Professional">Professional</option>
          </select>
        </div>

        <div className="cpywrt-form-group">
          <label htmlFor="price-segment" className="cpywrt-label">
            Price Segment
          </label>
          <select
            id="price-segment"
            className="cpywrt-select"
            value={formData.priceSegment}
            onChange={(e) => onFormChange('priceSegment', e.target.value)}
          >
            <option value="Budget">Budget</option>
            <option value="Mid-range">Mid-range</option>
            <option value="Premium">Premium</option>
          </select>
        </div>

        <button
          type="submit"
          className="cpywrt-button-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Clever Copy'}
        </button>
      </form>
    </div>
  );
};

export default CopyGeneratorForm;