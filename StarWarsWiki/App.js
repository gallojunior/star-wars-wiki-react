import React from 'react'
import { Splash } from './src/screens/Splash'
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'
import * as SplashScreen from 'expo-splash-screen'
import { theme } from './src/styles'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
    SourceSansPro_900Black,
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  } else {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <Splash />
    </ThemeProvider>
  )
}
