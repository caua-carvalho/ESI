import { useState } from 'react'
import { C, codeColor } from '@/constants/theme'
import { AppBar, Field, Textarea, CodeChip, Icon, Card, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface NewMedicalScreenProps {
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function NewMedicalScreen({ nav, goBack }: NewMedicalScreenProps) {
  const [step, setStep]         = useState(1)
  const [symptoms, setSymptoms] = useState('')
  const [hasPhoto, setHasPhoto] = useState(false)

  const affectedSvcs = [
    { code: 'UCA',  label: '28 SET · TARDE', post: 'Posto Alfa' },
    { code: 'DCTA', label: '29 SET · MANHÃ', post: 'Posto Bravo' },
    { code: 'UCA',  label: '30 SET · MANHÃ', post: 'Posto Charlie' },
  ]

  return (
    <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
      <AppBar title="Enviar atestado" subtitle={`Etapa ${step} de 5`} onBack={step > 1 ? () => setStep(s => s - 1) : goBack} />
      <div style={{ height: 3, background: C.surface3, margin: '0 20px 18px' }}>
        <div style={{ height: '100%', width: `${(step / 5) * 100}%`, background: C.green, borderRadius: 2, transition: 'width 0.3s' }} />
      </div>

      <div style={{ flex: 1, padding: '0 20px 36px', overflowY: 'auto' }}>
        {/* Step 1: Soldier data */}
        {step === 1 && (
          <>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 16 }}>Dados do militar</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {[
                ['Patente', 'S2'],
                ['Nome de guerra', 'SILVA'],
                ['Turma', '2024'],
                ['Antiguidade', '12'],
                ['Esquadrilha', 'Alpha'],
              ].map(([l, v]) => (
                <Field key={l} label={l} value={v} readOnly />
              ))}
            </div>
            <PrimaryBtn label="Próximo →" onClick={() => setStep(2)} />
          </>
        )}

        {/* Step 2: Period + symptoms */}
        {step === 2 && (
          <>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 16 }}>Período da dispensa</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
              <Field label="Início" value="2026-09-28" onChange={() => {}} type="date" />
              <Field label="Fim"    value="2026-09-30" onChange={() => {}} type="date" />
              <Textarea label="Sintomas" value={symptoms} onChange={setSymptoms} placeholder="Descreva os sintomas..." />
            </div>
            <PrimaryBtn label="Ver serviços afetados →" onClick={() => setStep(3)} disabled={!symptoms} />
          </>
        )}

        {/* Step 3: Affected services */}
        {step === 3 && (
          <>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 8 }}>Serviços afetados</div>
            <div style={{ fontSize: 14, color: C.text2, marginBottom: 18, lineHeight: 1.5 }}>
              Identificamos estes serviços dentro do período informado.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
              {affectedSvcs.map((s, i) => (
                <div key={i} style={{ background: C.surface2, borderRadius: 12, padding: '12px 14px', border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 3, height: 32, borderRadius: 2, background: codeColor(s.code).fg }} />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                      <CodeChip code={s.code} size="xs" />
                      <div style={{ fontSize: 11, color: C.text3, fontFamily: '"JetBrains Mono",monospace' }}>{s.label}</div>
                    </div>
                    <div style={{ fontSize: 13, color: C.text2 }}>{s.post}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: C.surface3, borderRadius: 10, padding: '9px 13px', display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 22 }}>
              <Icon name="info" size={13} color={C.text3} />
              <div style={{ fontSize: 12, color: C.text3, lineHeight: 1.5 }}>Os serviços são identificados automaticamente pela sua escala.</div>
            </div>
            <PrimaryBtn label="Continuar →" onClick={() => setStep(4)} />
          </>
        )}

        {/* Step 4: Photo upload */}
        {step === 4 && (
          <>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 8 }}>Documento</div>
            <div style={{ fontSize: 14, color: C.text2, marginBottom: 20, lineHeight: 1.5 }}>Adicione a foto do atestado médico.</div>
            {!hasPhoto ? (
              <div style={{ border: `2px dashed ${C.borderMed}`, borderRadius: 16, padding: '36px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, marginBottom: 22 }}>
                <Icon name="photo" size={40} color={C.text3} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 15, color: C.text, fontWeight: 500, marginBottom: 4 }}>Adicionar foto do atestado</div>
                  <div style={{ fontSize: 13, color: C.text3 }}>Toque para selecionar</div>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {['Câmera', 'Galeria'].map(opt => (
                    <button
                      key={opt}
                      className="tap"
                      onClick={() => setHasPhoto(true)}
                      style={{
                        background: C.surface3,
                        border: `1px solid ${C.borderMed}`,
                        borderRadius: 10,
                        padding: '10px 16px',
                        fontSize: 14,
                        color: C.text2,
                        cursor: 'pointer',
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ marginBottom: 22 }}>
                <div style={{ background: C.greenBg, borderRadius: 14, height: 160, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, border: `1px solid ${C.green}20`, marginBottom: 10 }}>
                  <Icon name="check" size={32} color={C.green} />
                  <div style={{ fontSize: 14, color: C.text2 }}>Foto adicionada</div>
                </div>
                <button className="tap" onClick={() => setHasPhoto(false)} style={{ background: 'none', border: 'none', color: C.text2, fontSize: 13, cursor: 'pointer', textDecoration: 'underline' }}>
                  Substituir foto
                </button>
              </div>
            )}
            <PrimaryBtn label="Revisar atestado →" onClick={() => setStep(5)} disabled={!hasPhoto} />
          </>
        )}

        {/* Step 5: Review */}
        {step === 5 && (
          <>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 16 }}>Revisar atestado</div>
            <Card style={{ marginBottom: 14 }}>
              {[
                { l: 'Militar',           v: 'S2 SILVA' },
                { l: 'Período',           v: '28/09 a 30/09' },
                { l: 'Sintomas',          v: symptoms || 'Febre e mal-estar geral' },
                { l: 'Documento',         v: 'Foto adicionada ✓' },
                { l: 'Serviços afetados', v: '3 serviços identificados' },
              ].map((it, i) => (
                <div key={it.l} style={{ padding: '9px 0', borderTop: i > 0 ? `1px solid ${C.border}` : 'none' }}>
                  <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>{it.l}</div>
                  <div style={{ fontSize: 14, color: C.text }}>{it.v}</div>
                </div>
              ))}
            </Card>
            <div style={{ background: C.surface3, borderRadius: 12, padding: '11px 14px', marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: C.text3, fontWeight: 600, marginBottom: 3 }}>Próximo passo</div>
              <div style={{ fontSize: 13, color: C.text2, lineHeight: 1.5 }}>Seu atestado será enviado para análise da Seção.</div>
            </div>
            <PrimaryBtn label="Enviar atestado" onClick={() => nav('medical-sent')} />
          </>
        )}
      </div>
    </div>
  )
}
export default NewMedicalScreen
