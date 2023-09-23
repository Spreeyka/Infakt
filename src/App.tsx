import React from 'react';
import { Layout } from './Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AccountantList } from './AccountantList';

const queryClient = new QueryClient();

// refactor
// Przycisk pozwalający na załadowanie kolejnych kart z informacjami o księgowych
// Instalacja React Router
// Dodanie routingu
// Kliknięcie w dowiedz się więcej robi przekierowanie
// Wygląd strony po przekierowaniu
// Deploy na netlify

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <AccountantList />
      </Layout>
    </QueryClientProvider>
  );
};
