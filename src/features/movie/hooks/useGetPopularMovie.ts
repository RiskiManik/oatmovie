import { useQuery } from '@tanstack/vue-query'
import { getPopularMovie } from '../services/movie.service'

export const useGetPopularMovie = () => {
  return useQuery({
    queryKey: ['popular'],
    queryFn: getPopularMovie
  })
}
