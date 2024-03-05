import { fetchMovie } from '@/lib/axiosInstance'

export const getPopularMovie = async () => {
  return (await fetchMovie.get('/movie/popular?language=en-US&page=1')).data
}
