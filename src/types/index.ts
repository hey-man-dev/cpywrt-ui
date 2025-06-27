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
  _refinementType?: string;
  _punchierOptions?: string[];
}

export interface MenuItem {
  label: string;
  icon?: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
}

export interface MenuSection {
  title?: string;
  items: MenuItem[];
}

export type ResultsState = 'empty' | 'loading' | 'results';
export type PanelState = 'input' | 'feedback';

export interface AppState {
  formData: FormData;
  results: CopyResult[];
  resultsState: ResultsState;
}

export interface DropdownOption {
  value: string;
  label: string;
  description?: string;
}