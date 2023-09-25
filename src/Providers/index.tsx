import React from 'react';
import { QueryClientProvider } from './QueryClient';
import { Router } from './router';

const Providers = () => {
  return (
    <>
      <QueryClientProvider>
        <Router />
      </QueryClientProvider>
    </>
  );
};
export { Providers };
