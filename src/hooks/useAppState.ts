import { useState } from 'react';
import type { FormData, CopyResult, ResultsState, PanelState } from '../types';

const initialFormData: FormData = {
  productName: '',
  productDescription: '',
  outputType: '',
  industry: '',
  personality: '',
  priceSegment: ''
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
  const [originalFormData, setOriginalFormData] = useState<FormData>(initialFormData);
  const [results, setResults] = useState<CopyResult[]>([]);
  const [resultsState, setResultsState] = useState<ResultsState>('empty');
  const [panelState, setPanelState] = useState<PanelState>('input');

  const updateFormField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = () => {
    return formData.productName.trim() !== '' &&
           formData.productDescription.trim() !== '' &&
           formData.outputType !== '' &&
           formData.industry !== '' &&
           formData.personality !== '' &&
           formData.priceSegment !== '';
  };

  const generateCopy = () => {
    if (!isFormValid()) {
      return;
    }

    setResultsState('loading');
    setResults([]);

    // Store original form data for feedback system
    if (panelState === 'input') {
      setOriginalFormData(formData);
    }

    setTimeout(() => {
      setResults(mockResults);
      setResultsState('results');
      // Switch to feedback panel after first generation
      if (panelState === 'input') {
        setPanelState('feedback');
      }
    }, 2500);
  };

  const regenerateWithChanges = (changes: Partial<FormData>) => {
    const updatedFormData = { ...formData, ...changes };
    setFormData(updatedFormData);
    
    setResultsState('loading');
    setResults([]);

    setTimeout(() => {
      setResults(mockResults); // In real app, this would use the updated form data
      setResultsState('results');
    }, 2500);
  };

  const startFresh = () => {
    setFormData(initialFormData);
    setOriginalFormData(initialFormData);
    setResults([]);
    setResultsState('empty');
    setPanelState('input');
  };

  const resetResults = () => {
    setResults([]);
    setResultsState('empty');
    setPanelState('input');
  };

  return {
    formData,
    originalFormData,
    results,
    resultsState,
    panelState,
    updateFormField,
    generateCopy,
    regenerateWithChanges,
    startFresh,
    resetResults,
    isFormValid
  };
};