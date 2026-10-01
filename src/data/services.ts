import type { ServiceItem } from '@/types'

export const SERVICES: ServiceItem[] = [
  { id: '1', date: '28/09', full: 'SEG · 28 SET', period: 'Manhã', code: 'PP',  post: 'Portao Principal',    start: '06:00', end: '15:00', status: 'Escalado' },
  { id: '3', date: '29/09', full: 'TER · 29 SET', period: 'Manhã', code: 'DCTA', post: 'Posto Bravo',   start: '06:00', end: '12:00', status: 'Escalado' },
  { id: '4', date: '29/09', full: 'TER · 29 SET', period: 'Tarde', code: 'PP',   post: 'Posto Charlie', start: '14:00', end: '18:00', status: 'Escalado' },
  { id: '5', date: '30/09', full: 'QUA · 30 SET', period: 'Manhã', code: 'PP',  post: 'Portao Principal',    start: '06:00', end: '15:00', status: 'Escalado' },
  { id: '6', date: '01/10', full: 'QUI · 01 OUT', period: 'Tarde', code: 'IEAV', post: 'Portaria IEAV',    start: '14:00', end: '18:00', status: 'Escalado' },
  { id: '7', date: '02/10', full: 'SEX · 02 OUT', period: 'Manhã', code: 'TACF', post: 'Teste de Avaliação do Condicionamento Físico',   start: '06:00', end: '12:00', status: 'Escalado' },
  { id: '8', date: '04/10', full: 'DOM · 04 OUT', period: 'Manhã', code: 'SSV',  post: 'Saindo de Servico', start: '06:00', end: '12:00', status: 'Escalado' },
]
