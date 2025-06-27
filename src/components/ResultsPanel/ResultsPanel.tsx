import React from 'react';
import { Sparkles, PenTool, Lightbulb, Zap } from 'lucide-react';
import type { CopyResult, ResultsState } from '../../types';
import ResultItem from './ResultItem';
import './ResultsPanel.css';

interface ResultsPanelProps {
  state: ResultsState;
  results: CopyResult[];
}

const ResultsPanel: React.FC<ResultsPanelProps> = ({ state, results }) => {
  const renderEmptyState = () => (
    <div className="results-panel-state">
      <div className="empty-state-illustration">
        <div className="icon-composition">
          <PenTool className="floating-icon pen" size={32} />
          <Sparkles className="floating-icon sparkles" size={24} />
          <Lightbulb className="floating-icon bulb" size={28} />
          <Zap className="floating-icon zap" size={20} />
        </div>
      </div>
      <h3>Your Brilliant Copy Is Just a Form Away</h3>
      <p>Fill in the details and watch us turn your product into poetry.<br />
      (Well, maybe not poetry, but definitely something people will actually read.)</p>
    </div>
  );

  const renderLoadingState = () => (
    <div className="results-panel-state">
      <div className="loading-animation">
        <div className="loading-sparkles">
          <PenTool className="sparkle sparkle-1" size={24} />
          <Lightbulb className="sparkle sparkle-2" size={20} />
          <Zap className="sparkle sparkle-3" size={22} />
          <Sparkles className="sparkle sparkle-4" size={18} />
        </div>
      </div>
      <div className="loading-messages">
        <h3>When you have to sound clever (even when you're not)</h3>
        <div className="loading-subtitle-container">
          <p className="loading-subtitle loading-subtitle-1">Training AI to make your product sound less boring than it actually is...</p>
          <p className="loading-subtitle loading-subtitle-2">Applying advanced wordplay algorithms and a dash of audacity.</p>
        </div>
      </div>
    </div>
  );

  const renderResultsState = () => (
    <div className="cpywrt-results-stack visible">
      <h2 className="cpywrt-results-header">Your Clever Copy Results</h2>
      <div className="cpywrt-results-stack-grid">
        {results.map((result, index) => (
          <ResultItem key={index} result={result} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="cpywrt-results-panel">
      {state === 'empty' && renderEmptyState()}
      {state === 'loading' && renderLoadingState()}
      {state === 'results' && renderResultsState()}
    </div>
  );
};

export default ResultsPanel;