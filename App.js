import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ASLConverterScreen from "./app/screens/ASLConverterScreen";
import ASLtoText from "./ASLtoText";

export default function App() {
	/*
	If useState is use, webcam gets refresh, making the program crash.
	If useRef is use, Letter doesn't get update.
	*/
	const ASLletter = useRef("");
	return (
		<>
			<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8.3/dist/teachablemachine-image.min.js"></script>
			<ASLConverterScreen ASLletter={ASLletter} />
			<ASLtoText ASLletter={ASLletter} />
			{console.log(ASLletter.current)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "dodgerblue",
		alignItems: "center",
		justifyContent: "center",
	},
});
