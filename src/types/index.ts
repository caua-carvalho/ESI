export type Screen =
  | 'login' | 'home' | 'schedule' | 'requests' | 'notifications' | 'profile'
  | 'service-detail' | 'new-swap' | 'select-colleague' | 'review-swap'
  | 'swap-sent' | 'swap-received' | 'new-overnight' | 'overnight-sent'
  | 'new-medical' | 'affected-services' | 'medical-sent'
  | 'medical-approved' | 'medical-rejected' | 'request-detail'
  | 'notification-detail' | 'reserve-convocation'
  | 'service-history' | 'settings'
  | 'state-loading' | 'state-error' | 'state-empty' | 'state-no-permission'

export interface NavEntry {
  screen: Screen
  params?: Record<string, unknown>
}

export type NavigateFunction = (screen: Screen, params?: Record<string, unknown>) => void
export type GoBackFunction = () => void

export interface User {
  rank: string
  warName: string
  company: string
  classYear: string
  seniority: number
  squadron: string
}

export interface ServiceItem {
  id: string
  date: string
  full: string
  period: string
  code: string
  post: string
  start: string
  end: string
  status: string
}

export interface RequestItem {
  id: string
  type: 'swap' | 'overnight' | 'medical' | string
  title: string
  date: string
  status: string
  desc: string
}

export interface NotificationItem {
  id: string
  title: string
  body: string
  time: string
  day: 'today' | 'yesterday' | 'earlier'
  read: boolean
  type: string
}

export interface GlobalScheduleItem {
  name: string
  rank: string
  svc: string[]
}
