import { useQuery } from '@tanstack/vue-query'
import { getPopularMovie, getTrendingToday } from '../services/movie.service'

export const useGetPopularMovie = () => {
  return useQuery({
    queryKey: ['popular'],
    queryFn: getPopularMovie
  })
}

export const useTrendingToday = () => {
  return useQuery({
    queryKey: ['trending'],
    queryFn: getTrendingToday
  })
}
