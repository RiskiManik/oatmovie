import { Client, Account } from 'appwrite'

export const client = new Client()

const endpoint = import.meta.env.VITE_APPWRITE_API_ENFPOINT
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID

client.setEndpoint(endpoint).setProject(projectId)

export const account = new Account(client)
export { ID } from 'appwrite'
