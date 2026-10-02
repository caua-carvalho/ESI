import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
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
    <SafeAreaView style={styles.safeArea}>
      <AppBar
        title="Enviar atestado"
        subtitle={`Etapa ${step} de 5`}
        onBack={step > 1 ? () => setStep(s => s - 1) : goBack}
      />
      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressBar,
            { width: `${(step / 5) * 100}%` },
          ]}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Step 1: Soldier data */}
        {step === 1 && (
          <View>
            <Text style={styles.sectionTitle}>Dados do militar</Text>
            <View style={styles.form}>
              {[
                ['Patente', 'S2'],
                ['Nome de guerra', 'SILVA'],
                ['Turma', '2024'],
                ['Antiguidade', '12'],
                ['Esquadrilha', 'Alpha'],
              ].map(([l, v]) => (
                <Field key={l} label={l} value={v} readOnly />
              ))}
            </View>
            <PrimaryBtn label="Próximo →" onPress={() => setStep(2)} />
          </View>
        )}

        {/* Step 2: Period + symptoms */}
        {step === 2 && (
          <View>
            <Text style={styles.sectionTitle}>Período da dispensa</Text>
            <View style={styles.form}>
              <Field label="Início" value="28/09/2026" onChangeText={() => {}} />
              <Field label="Fim"    value="30/09/2026" onChangeText={() => {}} />
              <Textarea
                label="Sintomas"
                value={symptoms}
                onChangeText={setSymptoms}
                placeholder="Descreva os sintomas..."
              />
            </View>
            <PrimaryBtn
              label="Ver serviços afetados →"
              onPress={() => setStep(3)}
              disabled={!symptoms}
            />
          </View>
        )}

        {/* Step 3: Affected services */}
        {step === 3 && (
          <View>
            <Text style={styles.sectionTitle}>Serviços afetados</Text>
            <Text style={styles.sectionDesc}>
              Identificamos estes serviços dentro do período informado.
            </Text>
            <View style={styles.svcsList}>
              {affectedSvcs.map((s, i) => (
                <View key={i} style={styles.svcItem}>
                  <View
                    style={[
                      styles.colorBar,
                      { backgroundColor: codeColor(s.code).fg },
                    ]}
                  />
                  <View>
                    <View style={styles.svcCodeRow}>
                      <CodeChip code={s.code} size="xs" />
                      <Text style={styles.svcLabel}>{s.label}</Text>
                    </View>
                    <Text style={styles.svcPost}>{s.post}</Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={styles.infoBox}>
              <Icon name="info" size={13} color={C.text3} />
              <Text style={styles.infoText}>
                Os serviços são identificados automaticamente pela sua escala.
              </Text>
            </View>
            <PrimaryBtn label="Continuar →" onPress={() => setStep(4)} />
          </View>
        )}

        {/* Step 4: Photo upload */}
        {step === 4 && (
          <View>
            <Text style={styles.sectionTitle}>Documento</Text>
            <Text style={styles.sectionDesc}>Adicione a foto do atestado médico.</Text>
            {!hasPhoto ? (
              <View style={styles.uploadArea}>
                <Icon name="photo" size={40} color={C.text3} />
                <View style={styles.uploadTextWrap}>
                  <Text style={styles.uploadTitle}>Adicionar foto do atestado</Text>
                  <Text style={styles.uploadSubtitle}>Toque para selecionar</Text>
                </View>
                <View style={styles.uploadBtns}>
                  {['Câmera', 'Galeria'].map(opt => (
                    <Pressable
                      key={opt}
                      onPress={() => setHasPhoto(true)}
                      style={({ pressed }) => [
                        styles.photoOptionBtn,
                        { opacity: pressed ? 0.75 : 1 },
                      ]}
                    >
                      <Text style={styles.photoOptionText}>{opt}</Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            ) : (
              <View style={styles.photoAddedSection}>
                <View style={styles.photoAddedCard}>
                  <Icon name="check" size={32} color={C.green} />
                  <Text style={styles.photoAddedText}>Foto adicionada</Text>
                </View>
                <Pressable onPress={() => setHasPhoto(false)} style={styles.replaceBtn}>
                  <Text style={styles.replaceText}>Substituir foto</Text>
                </Pressable>
              </View>
            )}
            <PrimaryBtn
              label="Revisar atestado →"
              onPress={() => setStep(5)}
              disabled={!hasPhoto}
            />
          </View>
        )}

        {/* Step 5: Review */}
        {step === 5 && (
          <View>
            <Text style={styles.sectionTitle}>Revisar atestado</Text>
            <Card style={styles.reviewCard}>
              {[
                { l: 'Militar',           v: 'S2 SILVA' },
                { l: 'Período',           v: '28/09 a 30/09' },
                { l: 'Sintomas',          v: symptoms || 'Febre e mal-estar geral' },
                { l: 'Documento',         v: 'Foto adicionada ✓' },
                { l: 'Serviços afetados', v: '3 serviços identificados' },
              ].map((it, i) => (
                <View
                  key={it.l}
                  style={[
                    styles.metaRow,
                    { borderTopWidth: i > 0 ? 1 : 0 },
                  ]}
                >
                  <Text style={styles.metaLabel}>{it.l}</Text>
                  <Text style={styles.metaValue}>{it.v}</Text>
                </View>
              ))}
            </Card>
            <View style={styles.nextStepBox}>
              <Text style={styles.nextStepTitle}>Próximo passo</Text>
              <Text style={styles.nextStepDesc}>
                Seu atestado será enviado para análise da Seção.
              </Text>
            </View>
            <PrimaryBtn
              label="Enviar atestado"
              onPress={() => nav('medical-sent')}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: C.bg,
  },
  progressTrack: {
    height: 3,
    backgroundColor: C.surface3,
    marginHorizontal: 20,
    marginBottom: 18,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: C.green,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: C.text,
    marginBottom: 16,
  },
  sectionDesc: {
    fontSize: 14,
    color: C.text2,
    marginBottom: 18,
    lineHeight: 20,
  },
  form: {
    gap: 12,
    marginBottom: 20,
  },
  svcsList: {
    gap: 8,
    marginBottom: 14,
  },
  svcItem: {
    backgroundColor: C.surface2,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: C.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  colorBar: {
    width: 3,
    height: 32,
    borderRadius: 2,
  },
  svcCodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  svcLabel: {
    fontSize: 11,
    color: C.text3,
  },
  svcPost: {
    fontSize: 13,
    color: C.text2,
  },
  infoBox: {
    backgroundColor: C.surface3,
    borderRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 13,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'flex-start',
    marginBottom: 22,
  },
  infoText: {
    fontSize: 12,
    color: C.text3,
    lineHeight: 18,
    flex: 1,
  },
  uploadArea: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: C.borderMed,
    borderRadius: 16,
    paddingVertical: 36,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 14,
    marginBottom: 22,
  },
  uploadTextWrap: {
    alignItems: 'center',
  },
  uploadTitle: {
    fontSize: 15,
    color: C.text,
    fontWeight: '500',
    marginBottom: 4,
  },
  uploadSubtitle: {
    fontSize: 13,
    color: C.text3,
  },
  uploadBtns: {
    flexDirection: 'row',
    gap: 10,
  },
  photoOptionBtn: {
    backgroundColor: C.surface3,
    borderWidth: 1,
    borderColor: C.borderMed,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  photoOptionText: {
    fontSize: 14,
    color: C.text2,
  },
  photoAddedSection: {
    marginBottom: 22,
  },
  photoAddedCard: {
    backgroundColor: C.greenBg,
    borderRadius: 14,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(120,175,105,0.2)',
    marginBottom: 10,
  },
  photoAddedText: {
    fontSize: 14,
    color: C.text2,
  },
  replaceBtn: {
    alignItems: 'center',
  },
  replaceText: {
    color: C.text2,
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  reviewCard: {
    marginBottom: 14,
  },
  metaRow: {
    paddingVertical: 9,
    borderTopColor: C.border,
  },
  metaLabel: {
    fontSize: 10,
    color: C.text3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  metaValue: {
    fontSize: 14,
    color: C.text,
  },
  nextStepBox: {
    backgroundColor: C.surface3,
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  nextStepTitle: {
    fontSize: 11,
    color: C.text3,
    fontWeight: '600',
    marginBottom: 3,
  },
  nextStepDesc: {
    fontSize: 13,
    color: C.text2,
    lineHeight: 18,
  },
})

export default NewMedicalScreen
