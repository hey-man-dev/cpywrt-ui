import React, { useState } from 'react';
import { Palette, Zap, Target, Globe } from 'lucide-react';
import type { FormData } from '../../types';
import SimpleDropdown from '../common/SimpleDropdown';
import './FeedbackPanel.css';

interface FeedbackPanelProps {
  originalFormData: FormData;
  onRegenerateWithChanges: (changes: Partial<FormData>) => void;
  onStartFresh: () => void;
}

type FeedbackMode = 'menu' | 'personality' | 'punchier' | 'refocus';

const FeedbackPanel: React.FC<FeedbackPanelProps> = ({
  originalFormData,
  onRegenerateWithChanges,
  onStartFresh
}) => {
  const [mode, setMode] = useState<FeedbackMode>('menu');
  const [newPersonality, setNewPersonality] = useState(originalFormData.personality);
  const [newFocus, setNewFocus] = useState(originalFormData.productDescription);
  const [punchierOptions, setPunchierOptions] = useState({
    shorter: false,
    energetic: false,
    actionWords: false
  });

  const personalityOptions = [
    { value: 'Witty & Clever', label: 'Witty & Clever' },
    { value: 'Bold & Confident', label: 'Bold & Confident' },
    { value: 'Playful & Fun', label: 'Playful & Fun' },
    { value: 'Professional & Trustworthy', label: 'Professional & Trustworthy' },
    { value: 'Warm & Friendly', label: 'Warm & Friendly' },
    { value: 'Edgy & Provocative', label: 'Edgy & Provocative' }
  ];

  const handlePersonalityChange = () => {
    onRegenerateWithChanges({ personality: newPersonality });
    setMode('menu');
  };

  const handlePunchierChange = () => {
    const selectedOptions = Object.entries(punchierOptions)
      .filter(([_, selected]) => selected)
      .map(([key, _]) => key);
    
    if (selectedOptions.length === 0) return;
    
    onRegenerateWithChanges({ 
      _refinementType: 'punchier',
      _punchierOptions: selectedOptions
    });
    setMode('menu');
  };

  const togglePunchierOption = (option: keyof typeof punchierOptions) => {
    setPunchierOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const handleRefocusChange = () => {
    onRegenerateWithChanges({ 
      productDescription: newFocus,
      _refinementType: 'refocus'
    });
    setMode('menu');
  };

  const renderMenu = () => (
    <div className="feedback-panel">
      <h1 className="feedback-header">Perfect Your Copy</h1>
      <p className="feedback-subtitle">Choose what to adjust:</p>
      
      <div className="feedback-options">
        <button 
          className="feedback-option-btn"
          onClick={() => setMode('personality')}
        >
          <div className="option-icon">
            <Palette size={20} />
          </div>
          <div className="option-content">
            <h3>Change the Personality</h3>
            <p>Try a different vibe</p>
          </div>
        </button>

        <button 
          className="feedback-option-btn"
          onClick={() => setMode('punchier')}
        >
          <div className="option-icon">
            <Zap size={20} />
          </div>
          <div className="option-content">
            <h3>Make it Punchier</h3>
            <p>More energy and impact</p>
          </div>
        </button>

        <button 
          className="feedback-option-btn"
          onClick={() => setMode('refocus')}
        >
          <div className="option-icon">
            <Target size={20} />
          </div>
          <div className="option-content">
            <h3>Refocus the Core Message</h3>
            <p>Clarify your main point</p>
          </div>
        </button>

        <button 
          className="feedback-option-btn disabled"
          disabled
        >
          <div className="option-icon">
            <Globe size={20} />
          </div>
          <div className="option-content">
            <h3>Add Cultural Flavor</h3>
            <p>Make it locally relevant</p>
            <span className="coming-soon">(Coming Soon)</span>
          </div>
        </button>
      </div>

      <button 
        className="start-fresh-btn"
        onClick={onStartFresh}
      >
        ↻ Start completely fresh
      </button>
    </div>
  );

  const renderPersonalityMode = () => (
    <div className="feedback-panel">
      <h1 className="feedback-header">Choose New Personality</h1>
      
      <div className="current-selection">
        <span>Current: {originalFormData.personality}</span>
      </div>

      <SimpleDropdown
        options={personalityOptions}
        value={newPersonality}
        onChange={setNewPersonality}
        placeholder="Select personality"
      />

      <button 
        className="cpywrt-button-primary"
        onClick={handlePersonalityChange}
        disabled={newPersonality === originalFormData.personality}
      >
        Regenerate with New Personality
      </button>

      <button 
        className="back-btn"
        onClick={() => setMode('menu')}
      >
        ← Back to options
      </button>
    </div>
  );

  const renderPunchierMode = () => (
    <div className="feedback-panel">
      <h1 className="feedback-header">Boost the Energy</h1>
      
      <div className="refinement-checklist">
        <div 
          className={`checklist-item ${punchierOptions.shorter ? 'selected' : ''}`}
          onClick={() => togglePunchierOption('shorter')}
        >
          <span>Make it shorter and snappier</span>
        </div>
        <div 
          className={`checklist-item ${punchierOptions.energetic ? 'selected' : ''}`}
          onClick={() => togglePunchierOption('energetic')}
        >
          <span>Add more energy and excitement</span>
        </div>
        <div 
          className={`checklist-item ${punchierOptions.actionWords ? 'selected' : ''}`}
          onClick={() => togglePunchierOption('actionWords')}
        >
          <span>Focus on action words</span>
        </div>
      </div>

      <button 
        className="cpywrt-button-primary"
        onClick={handlePunchierChange}
        disabled={!Object.values(punchierOptions).some(Boolean)}
      >
        Regenerate with Changes
      </button>

      <button 
        className="back-btn"
        onClick={() => setMode('menu')}
      >
        ← Back to options
      </button>
    </div>
  );

  const renderRefocusMode = () => (
    <div className="feedback-panel">
      <h1 className="feedback-header">Clarify Your Key Point</h1>
      
      <div className="cpywrt-form-group">
        <label className="cpywrt-label">
          What's the single most important idea?
        </label>
        <textarea
          className="cpywrt-textarea"
          rows={4}
          value={newFocus}
          onChange={(e) => setNewFocus(e.target.value)}
          placeholder="Describe the key message you want to emphasize..."
        />
      </div>

      <button 
        className="cpywrt-button-primary"
        onClick={handleRefocusChange}
        disabled={newFocus.trim() === ''}
      >
        Regenerate with New Focus
      </button>

      <button 
        className="back-btn"
        onClick={() => setMode('menu')}
      >
        ← Back to options
      </button>
    </div>
  );

  switch (mode) {
    case 'personality':
      return renderPersonalityMode();
    case 'punchier':
      return renderPunchierMode();
    case 'refocus':
      return renderRefocusMode();
    default:
      return renderMenu();
  }
};

export default FeedbackPanel;