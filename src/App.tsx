import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import CopyGeneratorForm from './components/CopyGeneratorForm/CopyGeneratorForm';
import ResultsPanel from './components/ResultsPanel/ResultsPanel';
import { useAppState } from './hooks/useAppState';
import './App.css';

function App() {
  const {
    formData,
    results,
    resultsState,
    updateFormField,
    generateCopy
  } = useAppState();

  return (
    <Layout>
      <Sidebar />
      <main className="cpywrt-main-content">
        <CopyGeneratorForm
          formData={formData}
          onFormChange={updateFormField}
          onSubmit={generateCopy}
          isLoading={resultsState === 'loading'}
        />
        <ResultsPanel
          state={resultsState}
          results={results}
        />
      </main>
    </Layout>
  );
}

export default App;