import { fetchMovie } from '@/lib/axiosInstance'

export const getPopularMovie = async () => {
  return (await fetchMovie.get('/movie/popular?language=en-US&page=1')).data
}

export const getTrendingToday = async () => {
  return (await fetchMovie.get('/trending/all/day?language=en-US')).data
}
