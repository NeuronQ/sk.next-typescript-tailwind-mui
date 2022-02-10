import useSWR, { SWRResponse } from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function useAllPostIds() {
  const { data, error } = useSWR('/api/hello', fetcher)
  return {
    postIds: data?.postIds,
    isLoading: !error && !data,
    isError: error,
  }
}
