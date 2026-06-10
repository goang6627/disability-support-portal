import type { SupportRequest } from '../data/types'

const STORAGE_KEY = 'accessible-hue-support-requests'

export function createRequestId(date = new Date()) {
  const day = date.toISOString().slice(0, 10).replaceAll('-', '')
  const randomPart =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID().slice(0, 4).toUpperCase()
      : Math.random().toString(36).slice(2, 6).toUpperCase()

  return `YC-${day}-${randomPart}`
}

export function getStoredRequests(): SupportRequest[] {
  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) {
    return []
  }

  try {
    return JSON.parse(raw) as SupportRequest[]
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return []
  }
}

export function saveSupportRequest(request: SupportRequest) {
  const existingRequests = getStoredRequests()
  localStorage.setItem(STORAGE_KEY, JSON.stringify([request, ...existingRequests]))
}

export function clearStoredRequests() {
  localStorage.removeItem(STORAGE_KEY)
}
