import type { NotificationItem } from '@/types'

export const NOTIFS: NotificationItem[] = [
  { id: '1', title: 'Solicitação de troca',      body: 'S2 OLIVEIRA deseja trocar um serviço com você.',             time: '09:30', day: 'today',     read: false, type: 'swap-received'     },
  { id: '2', title: 'Pernoite aprovado',         body: 'Seu pedido de pernoite para 27/09 foi aprovado.',             time: '08:15', day: 'today',     read: false, type: 'overnight-approved' },
  { id: '3', title: 'Troca aprovada',            body: 'Sua troca com S2 COSTA foi concluída com sucesso.',           time: '18:45', day: 'yesterday', read: true,  type: 'swap-approved'      },
  { id: '4', title: 'Atestado aprovado',         body: 'Seu atestado de 15/09 foi aprovado pela Seção.',             time: '14:20', day: 'yesterday', read: true,  type: 'medical-approved'   },
  { id: '5', title: 'Convocação como reserva',   body: 'Você foi convocado como reserva para Posto Alfa em 30/09.',  time: '10:00', day: 'earlier',   read: true,  type: 'reserve'            },
  { id: '6', title: 'Escala atualizada',         body: 'Sua escala foi alterada para a semana de 28/09.',            time: '09:00', day: 'earlier',   read: true,  type: 'schedule-update'    },
]
