import type { RequestItem } from '@/types'

export const REQUESTS: RequestItem[] = [
  { id: '1', type: 'swap',      title: 'Troca de serviço',   date: '28/09', status: 'pending-colleague', desc: 'S2 OLIVEIRA' },
  { id: '2', type: 'overnight', title: 'Pedido de pernoite', date: '27/09', status: 'pending-sergeant',  desc: '30 de setembro' },
  { id: '3', type: 'medical',   title: 'Atestado',           date: '15/09', status: 'approved',          desc: '15/09 a 16/09' },
  { id: '4', type: 'swap',      title: 'Troca de serviço',   date: '10/09', status: 'rejected',          desc: 'S2 COSTA' },
]
