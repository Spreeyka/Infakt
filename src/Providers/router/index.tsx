import React from 'react';

import { AccountantList } from '../../AccountantList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AccountantDetails } from '../../AccountantDetails';

import { Layout } from '../../Layout';

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
      return (
        <Layout>
          <AccountantDetails />
        </Layout>
      );
    },
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};
export { Router };
