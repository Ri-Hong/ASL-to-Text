// screen where ASL gets converted into English
import React from 'react'
import { Text} from 'react-native';

import {
  View,
  SafeAreaView
} from 'react-native'

const ASLConverterScreen = () => {
  return (

    // This SafeAreaView is the background
    <SafeAreaView
      style={{
        backgroundColor: "#e4eed6ff",
        flex: 1
      }}
    >

      {/* This View is the top navbar */}
      <View
        style={{
          backgroundColor: "#daecc3ff",
          flex: 0.2
        }}
      >
      </View>

    </SafeAreaView>
  )
}

    // // Text Area
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#e4eed6ff"
    //   }}
    // >

    //   {/* Top Bar */}
    //   <View
    //     style={{
    //       flex: 5,
    //       backgroundColor: "#daecc3ff"
    //     }}
    //   ></View>

    // </View>

export default ASLConverterScreen