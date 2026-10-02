import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { C } from '@/constants/theme'
import '../global.css'

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: C.bg }}>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: C.bg },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen
            name="service-detail"
            options={{
              presentation: 'transparentModal',
              animation: 'fade',
              headerShown: false,
            }}
          />
          <Stack.Screen name="swap/new" options={{ headerShown: false }} />
          <Stack.Screen name="swap/select-colleague" options={{ headerShown: false }} />
          <Stack.Screen name="swap/review" options={{ headerShown: false }} />
          <Stack.Screen name="swap/sent" options={{ headerShown: false }} />
          <Stack.Screen name="swap/received" options={{ headerShown: false }} />
          <Stack.Screen name="overnight/new" options={{ headerShown: false }} />
          <Stack.Screen name="overnight/sent" options={{ headerShown: false }} />
          <Stack.Screen name="medical/new" options={{ headerShown: false }} />
          <Stack.Screen name="medical/sent" options={{ headerShown: false }} />
          <Stack.Screen name="medical/approved" options={{ headerShown: false }} />
          <Stack.Screen name="medical/rejected" options={{ headerShown: false }} />
          <Stack.Screen name="request-detail" options={{ headerShown: false }} />
          <Stack.Screen name="notification-detail" options={{ headerShown: false }} />
          <Stack.Screen name="reserve-convocation" options={{ headerShown: false }} />
          <Stack.Screen name="settings" options={{ headerShown: false }} />
          <Stack.Screen name="feedback/loading" options={{ headerShown: false }} />
          <Stack.Screen name="feedback/error" options={{ headerShown: false }} />
          <Stack.Screen name="feedback/empty" options={{ headerShown: false }} />
          <Stack.Screen name="feedback/no-permission" options={{ headerShown: false }} />
        </Stack>
      </View>
    </SafeAreaProvider>
  )
}
