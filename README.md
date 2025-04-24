Driver Safety & Distraction Detection
This is my hackathon project based on  driver monitoring simulation that uses MediaPipe Face Mesh and TensorFlow.js to detect signs of driver fatigue or distraction. It analyzes eye closure, head direction, and yawning to simulate a smart safety assistant in a driving environment.

Features
Real-Time Face Tracking: Uses MediaPipe Face Mesh for detecting facial landmarks in live video.

Fatigue Detection: Detects when the driver’s eyes are closed for more than 3 seconds.

Distraction Detection: Detects if the driver is looking left, right, up, or down for more than 2 seconds.

Yawn Detection: Detects if the driver's mouth is open (indicating a yawn) for more than 2 seconds.

Simulation Control: Includes road animation, background music, and a beeping sound to simulate real vehicle behavior.

Break Suggestion Counter: Recommends the driver to take a break after 3 distractions or fatigue detections.

How It Works
The system uses the webcam to capture real-time facial data.

Facial landmarks are processed to determine:

Eye openness (for fatigue detection)

Head yaw/pitch (for distraction detection)

Mouth gap (for yawn detection)

When any of the above conditions are met for a defined duration, the system:

Pauses road animation

Increases music volume

Plays a warning beep

Updates the driver status on screen

Technologies Used
HTML/CSS/JavaScript

MediaPipe Face Mesh – for facial landmark tracking

TensorFlow.js – for real-time model execution in the browser

Camera Utils – for handling webcam feed

Web Audio/Video APIs – for audio playback and control

Usage
Open the application in a browser.

Click the Start Simulation button.

Grant access to your webcam if prompted.

Observe how the system detects:

Closed eyes (fatigue)

Looking away (distraction)

Yawning

The simulation stops and alerts the user when these behaviors are detected.

You can reset the break counter with the Reset Break Count button.

Requirements
A modern browser (Chrome recommended)

Webcam access
