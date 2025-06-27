import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import CopyGeneratorForm from './components/CopyGeneratorForm/CopyGeneratorForm';
import FeedbackPanel from './components/FeedbackPanel/FeedbackPanel';
import ResultsPanel from './components/ResultsPanel/ResultsPanel';
import { useAppState } from './hooks/useAppState';
import './App.css';

function App() {
  const {
    formData,
    originalFormData,
    results,
    resultsState,
    panelState,
    updateFormField,
    generateCopy,
    regenerateWithChanges,
    startFresh,
    isFormValid
  } = useAppState();

  return (
    <Layout>
      <Sidebar />
      <main className="cpywrt-main-content">
        {panelState === 'input' ? (
          <CopyGeneratorForm
            formData={formData}
            onFormChange={updateFormField}
            onSubmit={generateCopy}
            isLoading={resultsState === 'loading'}
            isFormValid={isFormValid()}
          />
        ) : (
          <FeedbackPanel
            originalFormData={originalFormData}
            onRegenerateWithChanges={regenerateWithChanges}
            onStartFresh={startFresh}
          />
        )}
        <ResultsPanel
          state={resultsState}
          results={results}
        />
      </main>
    </Layout>
  );
}

export default App;