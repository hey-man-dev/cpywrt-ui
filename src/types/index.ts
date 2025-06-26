export interface CopyResult {
  style: string;
  icon: string;
  copy: string;
  explanation: string;
}

export interface FormData {
  productName: string;
  productDescription: string;
  outputType: string;
  industry: string;
  personality: string;
  priceSegment: string;
}

export interface MenuItem {
  label: string;
  icon?: string;
  href?: string;
  active?: boolean;
}

export interface MenuSection {
  title?: string;
  items: MenuItem[];
}

export type ResultsState = 'empty' | 'loading' | 'results';

export interface AppState {
  formData: FormData;
  results: CopyResult[];
  resultsState: ResultsState;
}