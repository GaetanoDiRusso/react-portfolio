import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryProvider = new QueryClient();
const showQueryDevtools = process.env.REACT_APP_NODE_ENV !== 'production'

root.render(
  <QueryClientProvider client={queryProvider}>
    <React.StrictMode>
      <App />
      {showQueryDevtools && <ReactQueryDevtools initialIsOpen={false}/>}
    </React.StrictMode>
  </QueryClientProvider>
);