// screen where ASL gets converted into English
import React, {useState} from 'react'
import axios from 'axios'

import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  TextInput
} from 'react-native'

import IconFontisto from 'react-native-vector-icons/Fontisto'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const logo = require('../assets/Logo.png');

const ASLConverterScreen = () => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState();
  // Phone number should be in this type of format: +16471234567 (aka +1 international, then phone number)
  const [phoneNumber, setPhoneNumber] = useState();
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");

  // trying to make JSON object here
  let SMSPayload = [
    {
      phoneNumber: "none",
      message: "none"
    }
  ]

  function sendSms(){
    
    SMSPayload = [
      {
        phoneNumber: phoneNumber.toString(),
        message: "TODO: Change me!"
      }
    ]

    console.log("sendSms: Sending payload: ", SMSPayload)
    axios.post("https://asl-to-text.herokuapp.com/sms", SMSPayload)
      .then(response => {
        console.log("sendSms Response, ", response)
      })
      .catch(error => {
        console.error("sendSms Error ", error)
      })
  }

  const openEmailModal = () => {
    setModalVisible(true);
    setEmailOrPhoneNumber("email");
  }

  const openPhoneModal = () => {
    setModalVisible(true);
    setEmailOrPhoneNumber("phone number");
  }

  const openSMSModal = () => {
    setModalVisible(true);
    setEmailOrPhoneNumber("phone number");
  }

  const onSend = () => {
    setModalVisible(false);
    sendSms();
    setEmail("");
    setPhoneNumber("");
  }

  const onCancel = () => {
    setModalVisible(false);
    setEmail("");
    setPhoneNumber("");
  }

  return (

    // This View is the background
    <SafeAreaView
      style={{
        backgroundColor: "#e4eed6ff",
        flex: 1
      }}
    >

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
          backgroundColor: "#dbe8ca",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          height: "100%",
        }}>

          {emailOrPhoneNumber === "email" ?
          <Text style={{
            fontWeight: "bold",
            fontSize: 27,
            marginTop: "10%",
            textAlign: "center"
          }}>Enter your recipient's email</Text>
          : 
          <Text style={{
            fontWeight: "bold",
            fontSize: 27,
            marginTop: "10%",
            textAlign: "center"
          }}>Enter your recipient's phone number</Text>
          }

          {emailOrPhoneNumber === "email" ?
              <TextInput
              style={{
                height: 40,
                borderWidth: 1,
                borderRadius: 10,
                width: "95%",
                margin: "5%",
                padding: 10,
                fontSize: 20
              }}
              onChangeText={setEmail}
              value={email}
            />
            : 
            <TextInput
            style={{
              height: 40,
              borderWidth: 1,
              borderRadius: 10,
              width: "95%",
              margin: "5%",
              padding: 10,
              fontSize: 20
            }}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
          />
          }


          <View
            style={{
              flexDirection: 'row',
              borderWeight: 1,
              borderColor: "red",
            }}
          >
            <TouchableOpacity
              onPress={() => onCancel()}
            >
              <IconMaterialIcons name="clear" 
                size={40}
                style={{
                  marginRight: "50%",
                }}
              ></IconMaterialIcons>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onSend()}
            >
              <IconIonicons name="ios-send" 
                size={40}
                style={{
                  marginRight: "3%",
                }}
              ></IconIonicons>
            </TouchableOpacity>


          </View>

        </View>
      </Modal>


      {/* This View is the top navbar */}
      <View
        style={{
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
            marginRight: "5%",
          }}
        >
          <TouchableOpacity
            onPress={() => console.log("Clear")}
            style = {{
              alignItems: "center",
              backgroundColor: "#e7eedaff",
              padding: 10,
              borderRadius: 15,
              borderColor: "#b7b7b7",
              borderWidth: "1px",
            }}
          >
          <IconMaterialIcons name="clear" 
            size={40}
          ></IconMaterialIcons>

          </TouchableOpacity>

        </View>

      </View>

      {/* This View is where the camera viewfinder will be displayed*/}
      <View
        style={{
          width: "90%",
          height: "25%",
          backgroundColor: "black",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5%",
          borderRadius: 30,
        }}
      >
      {/* This View is where the currently interperted letter will be diplayed*/}
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: "white",
            borderRadius: 10,
            marginLeft: "auto",
            marginTop: "auto",
            justifyContent: "center",
            alignItems: "center"
          }}
        >

          <Text
            style={{
              fontSize: 50,
            }}
          
          >A</Text>

        </View>
      </View>


      {/* This View is the white background where text will be displayed */}
      <View
        style={{
          width: "90%",
          height: "45%",
          backgroundColor: "white",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5%",
          marginBottom: "5%",
          borderRadius: 30,
        }}
      ></View>

      {/* This View is where the SMS, call, and email buttons will be displayed */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: "space-evenly",
        }}
      >
        {/* Email Button */}
        <TouchableOpacity
          onPress={() => openEmailModal()}
          style = {{
            height: 75,
            width: 75,
            backgroundColor: "#e7eedaff",
            borderRadius: "100%",
            borderColor: "#b7b7b7",
            borderWidth: "1px",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <IconMaterialCommunityIcons name="email" 
            size={40}
          ></IconMaterialCommunityIcons>

        </TouchableOpacity>

        {/* Phone Button */}
        <TouchableOpacity
          onPress={() => openPhoneModal()}
          style = {{
            height: 75,
            width: 75,
            backgroundColor: "#e7eedaff",
            borderRadius: "100%",
            borderColor: "#b7b7b7",
            borderWidth: "1px",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <IconIonicons name="call" 
            size={40}
          ></IconIonicons>

        </TouchableOpacity>

       {/* SMS Button */}
       <TouchableOpacity
          onPress={() => openSMSModal()}
          style = {{
            height: 75,
            width: 75,
            backgroundColor: "#e7eedaff",
            borderRadius: "100%",
            borderColor: "#b7b7b7",
            borderWidth: "1px",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <IconMaterialIcons name="sms" 
            size={40}
          ></IconMaterialIcons>

        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}


export default ASLConverterScreen