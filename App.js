import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native'
import colors from './src/utils/colors'

export default function App() {
  return(
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={styles.safeArea}>
        <Text>
          Cotizador de prestamos
        </Text>
      </SafeAreaView>
      <View>
        <Text>
          Resultado
        </Text>
      </View>
      <View>
        <Text>
          Footer!!
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    alignItems: "center"
  }
})