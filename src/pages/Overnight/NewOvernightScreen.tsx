import { useState } from 'react'
import { C } from '@/constants/theme'
import { AppBar, Segmented, Field, Textarea, Icon, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface NewOvernightScreenProps {
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function NewOvernightScreen({ nav, goBack }: NewOvernightScreenProps) {
  const [mode, setMode]     = useState('Uma data')
  const [date, setDate]     = useState('2026-09-30')
  const [reason, setReason] = useState('')

  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <AppBar title="Solicitar pernoite" onBack={goBack} />
      <div style={{ padding: '0 20px 36px' }}>
        <div style={{ fontSize: 14, color: C.text2, lineHeight: 1.5, marginBottom: 18 }}>
          Informe quando você precisa permanecer no alojamento.
        </div>
        <div style={{ marginBottom: 16 }}>
          <Segmented options={['Uma data', 'Período']} value={mode} onChange={setMode} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 18 }}>
          <Field label={mode === 'Uma data' ? 'Data' : 'Início'} value={date} onChange={setDate} type="date" />
          {mode === 'Período' && <Field label="Fim" value="2026-10-02" onChange={() => {}} type="date" />}
          <Textarea label="Motivo" value={reason} onChange={setReason} placeholder="Descreva o motivo do pernoite..." />
        </div>
        <div style={{ background: C.surface3, borderRadius: 12, padding: '11px 14px', display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 22 }}>
          <Icon name="info" size={14} color={C.text3} />
          <div style={{ fontSize: 13, color: C.text3, lineHeight: 1.5 }}>
            Seu pedido será enviado ao sargento responsável pela sua companhia.
          </div>
        </div>
        <PrimaryBtn label="Enviar pedido" onClick={() => nav('overnight-sent')} disabled={!reason} />
      </div>
    </div>
  )
}
export default NewOvernightScreen
