// screen where ASL gets converted into English
import React from 'react'
import { Text} from 'react-native';

import {
  View,
  Image,
  Button
} from 'react-native'

const logo = require('../assets/ASL-to-Text Logo.png');

const ASLConverterScreen = () => {

  return (

    // This View is the background
    <View
      style={{
        backgroundColor: "#e4eed6ff",
        flex: 1
      }}
    >

      {/* This View is the top navbar */}
      <View
        style={{
          backgroundColor: "#daecc3ff",
          flex: 0.15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {/* These are the elements inside the navbar */}
        {/* Logo */}
        <View
          style={{
            alignItems:"center",
            justifyContent:"center"
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100
            }}
            source={logo}
          ></Image>
        </View>


        {/* The two buttons */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: "center",
          }}
        >
          <Button
            title="Clear"
            onPress={() => console.log("Clear")}
          ></Button>

          {/* Some padding */}
          <View
            style={{
              paddingLeft: 10
            }}
          ></View>

          <Button
            title="Read"
            onPress={() => console.log("Read")}
          ></Button>

          {/* Some padding */}
          <View
            style={{
              paddingLeft: 20
            }}
          ></View>

        </View>

      </View>

      {/* This View is the white background where text will be displayed */}
      <View
        style={{
          width: "90%",
          height: "80%",
          backgroundColor: "white"
        }}
      ></View>

    </View>
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