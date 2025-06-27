import React from 'react';
import { Lightbulb, GitFork, Zap, Wand2, Info, Save, Copy } from 'lucide-react';
import type { CopyResult } from '../../types';

interface ResultItemProps {
  result: CopyResult;
}

const ResultItem: React.FC<ResultItemProps> = ({ result }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb size={16} />;
      case 'git-fork':
        return <GitFork size={16} />;
      case 'zap':
        return <Zap size={16} />;
      case 'wand-2':
        return <Wand2 size={16} />;
      default:
        return <Lightbulb size={16} />;
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result.copy);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSave = () => {
    console.log('Save functionality to be implemented');
  };

  return (
    <div className="cpywrt-result-item">
      <div className="cpywrt-style-tag">
        {renderIcon(result.icon)}
        <span className="style-label">{result.style}</span>
      </div>
      
      <div className="cpywrt-copy-container">
        <p className="cpywrt-main-copy">"{result.copy}"</p>
        <div className="cpywrt-item-actions">
          <button className="cpywrt-action-button copy-btn" title="Copy to clipboard" onClick={handleCopy}>
            <Copy size={18} />
            <span>Copy</span>
          </button>
          <button className="cpywrt-action-button save-btn" title="Save to favorites" onClick={handleSave}>
            <Save size={18} />
            <span>Save</span>
          </button>
        </div>
      </div>
      
      <div className="cpywrt-explanation">
        <div className="explanation-label">
          <Info size={14} />
          <span>Why this works</span>
        </div>
        <p className="explanation-text">{result.explanation}</p>
      </div>
    </div>
  );
};

export default ResultItem;