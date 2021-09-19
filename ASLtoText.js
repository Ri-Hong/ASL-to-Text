import * as tmImage from "@teachablemachine/image";
import React, { useEffect } from "react";

const URL = "https://teachablemachine.withgoogle.com/models/n1IT01v7D/";

let letter, webcam, model, maxPredictions;
let predictionObj = {};
let SecpredictionObj = {};

async function RenderASL(WEBCAM) {
	const modelURL = URL + "model.json";
	const metadataURL = URL + "metadata.json";

	// load the model and metadata
	// Refer to tmImage.loadFromFiles() in the API to support files from a file picker
	// or files from your local hard drive
	// Note: the pose library adds "tmImage" object to your window (window.tmImage)
	model = await tmImage.load(modelURL, metadataURL);
	maxPredictions = model.getTotalClasses();

	// Convenience function to setup a webcam
	const flip = true; // whether to flip the webcam
	webcam = new tmImage.Webcam(1000, 700, flip); // width, height, flip
	WEBCAM.current = webcam;
	console.log(WEBCAM);

	await webcam.setup(); // request access to the webcam

	window.requestAnimationFrame(loop);

	document.getElementById("webcam-container").appendChild(webcam.canvas);
}

async function loop() {
	webcam.update(); // update the webcam frame
	await predict();
	window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function predict() {
	// predict can take in an image, video or canvas html element
	const prediction = await model.predict(webcam.canvas);
	for (let i = 0; i < maxPredictions; i++) {
		predictionObj[prediction[i].className] =
			prediction[i].probability.toFixed(2);
	}
	CalpPrediction();
}

function CalpPrediction() {
	let highestVal = 0;
	const entries = Object.entries(predictionObj);
	for (const [key, value] of entries) {
		let secEntries = Object.entries(SecpredictionObj);
		if (secEntries.indexOf(value) !== -1) {
			// value exist
			if (secEntries[key] < value) {
				SecpredictionObj[key] = value;
			}
		} else {
			SecpredictionObj[key] = value;
		}
		if (value > highestVal) {
			highestVal = value;
			letter = key;
			// console.log(letter);
		}
	}
}

const ASLtoText = ({ ASLletter, WEBCAM }) => {
	RenderASL(WEBCAM);
	console.log(webcam);

	useEffect(() => {
		ASLletter.current = letter;
	}, [letter]);

	return <div></div>;
};

export default ASLtoText;
