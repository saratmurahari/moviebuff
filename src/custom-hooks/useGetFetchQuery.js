import { useQueryClient } from 'react-query'

export const useGetFetchQuery = (key) => {
  const queryClient = useQueryClient()

  return queryClient.getQueryData(key)
}
