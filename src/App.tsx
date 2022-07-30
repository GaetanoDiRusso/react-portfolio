import { InfoInteractorUseCase, StrapiRemoteRepositoryImpl } from 'core';
import MainView from 'pages/Main/MainView';

export const intercatorUseCase = new InfoInteractorUseCase(new StrapiRemoteRepositoryImpl())

function App() {
  return (
    <MainView/>
  );
}

export default App;
