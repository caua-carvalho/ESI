import type { GlobalScheduleItem } from '@/types'

export const GLOBAL_SCH: GlobalScheduleItem[] = [
  { name: 'S2 SILVA',    rank: 'S2', svc: ['UCA', 'SSV', 'DCTA', '', 'UCA', '', 'SSV']    },
  { name: 'S2 OLIVEIRA', rank: 'S2', svc: ['DCTA', 'PP', '', 'IEAV', '', 'TACF', '']      },
  { name: 'S2 COSTA',    rank: 'S2', svc: ['', 'UCA', 'IEAV', 'PP', 'DCTA', '', 'UCA']    },
  { name: 'S1 MARTINS',  rank: 'S1', svc: ['SSV', '', 'UCA', '', 'PP', 'UCA', '']         },
  { name: 'S2 ALMEIDA',  rank: 'S2', svc: ['TACF', 'DCTA', 'SSV', 'UCA', '', 'PP', 'DCTA'] },
  { name: 'S1 FERREIRA', rank: 'S1', svc: ['', 'IEAV', '', 'SSV', 'UCA', '', 'IEAV']      },
  { name: 'CB SANTOS',   rank: 'CB', svc: ['UCA', '', 'TACF', 'UCA', '', 'SSV', '']       },
  { name: 'CB LIMA',     rank: 'CB', svc: ['', 'SSV', 'PP', '', 'IEAV', 'DCTA', 'UCA']    },
]
