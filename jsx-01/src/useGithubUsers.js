import useSWR, { mutate } from "swr";

export function useGithubUser(username) {
  const fetcherFn = username
    ? () => fetch(`https://api.github.com/users/${username}`).then((response) => response.json())
    : null;

  const { data, error } = useSWR(fetcherFn);

  const refetch = () => mutate(fetcherFn());

  return {
    user: data,
    error,
    isLoading: !data && !error,
    refetch,
  };
}



