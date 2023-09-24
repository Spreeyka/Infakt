import { useInfiniteQuery } from 'react-query';

const fetchRandomUsers = async ({ pageParam = 1 }) => {
  const res = await fetch(`https://randomuser.me/api/?seed=abc&gender=female&page=${pageParam}&results=4`);
  const data = await res.json();
  return data;
};

export function useRandomUsers() {
  return useInfiniteQuery('randomUsers', fetchRandomUsers, {
    getNextPageParam: (lastPage) => {
      if (lastPage.info.page < lastPage.info.results) {
        return lastPage.info.page + 1;
      }
      return undefined;
    },
  });
}
