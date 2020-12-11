import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'

export default function App() {
  return(
    <>
      <SafeAreaView style={styles.safeArea}>
        <Text>
          Formulario
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
    backgroundColor: '#f00',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    alignItems: "center"
  }
})