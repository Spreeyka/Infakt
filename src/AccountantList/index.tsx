import React from 'react';

import { CircularProgress } from '@mui/material';
import { Card } from '../Card';
import { useRandomUsers } from '../hooks/useInfiniteFetch';
import { ContainedButton, FlexCenteredWrapper, StyledList } from './styles';
import { AccountantType } from './types';

const AccountantList = () => {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useRandomUsers();

  if (status === 'loading') {
    return (
      <FlexCenteredWrapper>
        <CircularProgress />
      </FlexCenteredWrapper>
    );
  }

  if (status === 'error') {
    return <FlexCenteredWrapper>Wystąpił błąd: {(error as Error).message}</FlexCenteredWrapper>;
  }

  return (
    <>
      {data?.pages.map((page, pageIndex) => (
        <StyledList key={pageIndex}>
          {page.results.map((accountant: AccountantType) => (
            <Card accountant={accountant} key={accountant.email}></Card>
          ))}
        </StyledList>
      ))}
      <FlexCenteredWrapper>
        <ContainedButton onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage ? 'Wczytywanie' : 'Wczytaj więcej'}
        </ContainedButton>
      </FlexCenteredWrapper>
    </>
  );
};
export { AccountantList };
