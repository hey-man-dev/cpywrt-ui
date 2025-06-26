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
      <div className="cpywrt-result-item-header">
        <div className="cpywrt-style-tag">
          {renderIcon(result.icon)}
          {result.style}
        </div>
        <div className="cpywrt-item-actions">
          <button className="cpywrt-action-button" title="Save" onClick={handleSave}>
            <Save size={16} />
          </button>
          <button className="cpywrt-action-button" title="Copy" onClick={handleCopy}>
            <Copy size={16} />
          </button>
        </div>
      </div>
      <p className="cpywrt-main-copy">"{result.copy}"</p>
      <div className="cpywrt-smart-explanation">
        <Info size={16} />
        {result.explanation}
      </div>
    </div>
  );
};

export default ResultItem;