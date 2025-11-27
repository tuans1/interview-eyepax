import type { PingResponse } from '../types'

const FALLBACK_API_URL = 'http://localhost:3000'

const baseUrl = (import.meta.env.VITE_API_URL ?? FALLBACK_API_URL).replace(/\/$/, '')

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    ...init,
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Request failed: ${response.status} ${response.statusText} – ${errorBody}`)
  }

  return (await response.json()) as T
}

export const apiClient = {
  get: <T>(path: string) => request<T>(path),
}

export const pingService = {
  fetchPing: () => apiClient.get<PingResponse>('/ping'),
}
