import React from 'react';
import { Layout } from './Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AccountantList } from './AccountantList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AccountantDetails } from './AccountantDetails';

// Deploy na netlify

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    Component() {
      return (
        <Layout>
          <AccountantList />
        </Layout>
      );
    },
  },
  {
    path: '/ksiegowi/:id',
    Component() {
      return <AccountantDetails />;
    },
  },
]);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
