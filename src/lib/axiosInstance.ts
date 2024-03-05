import { apiKey, baseUrl } from '@/env'
import axios from 'axios'

export const fetchMovie = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: apiKey
  }
})
