// ─── DESIGN TOKENS ────────────────────────────────────────────
export const C = {
  bg:          '#090C12',
  surface:     '#101420',
  surface2:    '#161B26',
  surface3:    '#1C222F',
  elevated:    '#232B3A',
  text:        '#EDF2FF',
  text2:       '#8893A6',
  text3:       '#4D5668',
  green:       '#78AF69',
  greenBg:     'rgba(120,175,105,0.13)',
  amber:       '#E0A94A',
  amberBg:     'rgba(224,169,74,0.13)',
  red:         '#DC5454',
  redBg:       'rgba(220,84,84,0.13)',
  blue:        '#4D8EE0',
  blueBg:      'rgba(77,142,224,0.13)',
  purple:      '#8A67E0',
  purpleBg:    'rgba(138,103,224,0.13)',
  gray:        '#6A7586',
  grayBg:      'rgba(106,117,134,0.13)',
  border:      'rgba(255,255,255,0.07)',
  borderMed:   'rgba(255,255,255,0.11)',
} as const

export const CODE_COLORS: Record<string, { fg: string; bg: string }> = {
  UCA:     { fg: C.blue,   bg: C.blueBg   },
  SSV:     { fg: C.gray,   bg: C.grayBg   },
  DCTA:    { fg: C.green,  bg: C.greenBg  },
  TACF:    { fg: C.purple, bg: C.purpleBg },
  PP:      { fg: C.amber,  bg: C.amberBg  },
  IEAV:    { fg: '#5BC3E0', bg: 'rgba(91,195,224,0.13)' },
  DEFAULT: { fg: C.gray,   bg: C.grayBg   },
}

export const codeColor = (code: string) => CODE_COLORS[code] ?? CODE_COLORS.DEFAULT
