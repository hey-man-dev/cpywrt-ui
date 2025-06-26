import React from 'react';
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
      <h3>The Perfect Copy Awaits</h3>
      <p>Fill in the details to begin.</p>
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