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
      Well, maybe not poetry, but definitely something people will actually read.</p>
    </div>
  );

  const renderLoadingState = () => (
    <div className="results-panel-state">
      <div className="loader"></div>
      <p>Crafting your clever copy...</p>
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