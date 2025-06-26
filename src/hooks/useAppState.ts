import { useState } from 'react';
import type { FormData, CopyResult, ResultsState } from '../types';

const initialFormData: FormData = {
  productName: '',
  productDescription: '',
  outputType: 'Tagline',
  industry: 'Fintech',
  personality: 'Witty & Clever',
  priceSegment: 'Budget'
};

const mockResults: CopyResult[] = [
  {
    style: "Playful & Punny",
    icon: "lightbulb",
    copy: "Your money's favorite speed dating app.",
    explanation: "Uses a dating metaphor to make instant transfers feel fun and personal."
  },
  {
    style: "Smart Metaphor",
    icon: "git-fork",
    copy: "Where your wallet meets its soulmate.",
    explanation: "Personifies money to create an emotional connection with the financial service."
  },
  {
    style: "Bold & Direct",
    icon: "zap",
    copy: "Instant transfers. Zero drama.",
    explanation: "Contrasts speed with simplicity for a clear, memorable value proposition."
  },
  {
    style: "Creative Twist",
    icon: "wand-2",
    copy: "Money moves at the speed of trust.",
    explanation: "Reframes a technical feature as a trust-based relationship, adding emotional depth."
  }
];

export const useAppState = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [results, setResults] = useState<CopyResult[]>([]);
  const [resultsState, setResultsState] = useState<ResultsState>('empty');

  const updateFormField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateCopy = () => {
    if (!formData.productName.trim() || !formData.productDescription.trim()) {
      return;
    }

    setResultsState('loading');
    setResults([]);

    setTimeout(() => {
      setResults(mockResults);
      setResultsState('results');
    }, 2500);
  };

  const resetResults = () => {
    setResults([]);
    setResultsState('empty');
  };

  return {
    formData,
    results,
    resultsState,
    updateFormField,
    generateCopy,
    resetResults
  };
};