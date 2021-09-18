// screen where ASL gets converted into English
import React from 'react'

import {
  SafeAreaView,
  View,
  Image,
  Button
} from 'react-native'

const logo = require('../assets/Logo.png');

const ASLConverterScreen = () => {

  return (

    // This View is the background
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
          height: "12%",
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {/* These are the elements inside the navbar */}
        {/* Logo */}
        <Image
          style={{
            width: 100,
            height: 100,
            marginLeft: "5%"
          }}
          source={logo}
        ></Image>


        {/* The two buttons */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: "center",
            border: "3px solid red",
          }}
        >
          <Button
            title="Clear"
            onPress={() => console.log("Clear")}
            style={{
              paddingRight: 10
            }}
          ></Button>

          <Button
            title="Read"
            onPress={() => console.log("Read")}
            style={{
              marginRight: 30,
            }}
          ></Button>

        </View>

      </View>

      {/* This View is the white background where text will be displayed */}
      <View
        style={{
          width: "90%",
          height: "85%",
          backgroundColor: "white",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5%",
          marginBottom: "5%",
          borderRadius: 30,
        }}
      ></View>

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