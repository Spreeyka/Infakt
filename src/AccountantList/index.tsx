import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Card } from '../Card';

export type AccountantType = {
  cell: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: { thumbnail: string; medium: string };
  login: {
    uuid: string;
  };
};

type AccountantResponseType = {
  results: AccountantType[];
  info: {
    page: number;
  };
};

const fetchRandomUsers = async (page: number): Promise<AccountantResponseType> => {
  const response = await axios.get(`https://randomuser.me/api/?seed=abc&gender=female&page=${page}&results=4`);
  return response.data;
};

export function useRandomUsers(page: number) {
  return useQuery(['randomUsers', page], () => fetchRandomUsers(page), {
    staleTime: 60000,
  });
}

const AccountantList = () => {
  const { data, isLoading, isError, error } = useRandomUsers(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <>
      <div
        style={{ display: 'flex', gap: '24px', marginTop: '48px', flexWrap: 'wrap', justifyContent: 'space-between' }}
      >
        {data &&
          data.results &&
          data.results.map((accountant, index) => (
            <div key={index}>
              <Card accountant={accountant}></Card>
            </div>
          ))}
      </div>
    </>
  );
};
export { AccountantList };
