import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { C } from '@/constants/theme'

export interface FieldProps {
  label: string
  value: string
  onChange?: (v: string) => void
  onChangeText?: (v: string) => void
  type?: string
  placeholder?: string
  readOnly?: boolean
  secureTextEntry?: boolean
}

export function Field({
  label,
  value,
  onChange,
  onChangeText,
  type = 'text',
  placeholder,
  readOnly,
  secureTextEntry,
}: FieldProps) {
  const handleChange = onChangeText ?? onChange

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor={C.text3}
        editable={!readOnly}
        secureTextEntry={secureTextEntry || type === 'password'}
        style={[
          styles.input,
          { color: readOnly ? C.text2 : C.text },
        ]}
      />
    </View>
  )
}

export interface TextareaProps {
  label: string
  value: string
  onChange?: (v: string) => void
  onChangeText?: (v: string) => void
  placeholder?: string
  rows?: number
}

export function Textarea({
  label,
  value,
  onChange,
  onChangeText,
  placeholder,
  rows = 4,
}: TextareaProps) {
  const handleChange = onChangeText ?? onChange

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor={C.text3}
        multiline
        numberOfLines={rows}
        textAlignVertical="top"
        style={[
          styles.input,
          styles.textarea,
          { height: rows * 24 + 20 },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: C.text2,
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    backgroundColor: C.surface3,
    borderWidth: 1,
    borderColor: C.borderMed,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  textarea: {
    lineHeight: 20,
  },
})
