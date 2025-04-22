// let eyesClosedStart = null;
// let isStopped = false;

// const music = document.getElementById("music");
// const beep = document.getElementById("beep");
// const statusText = document.getElementById("status");
// const startButton = document.getElementById("startButton");
// const video = document.getElementById("video");

// startButton.addEventListener("click", async () => {
//     music.volume = 0.2;
//     await music.play().catch(console.error);
//     startButton.style.display = "none";
//     statusText.textContent = "Status: Running";

//     const faceMesh = new FaceMesh({
//         locateFile: file => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
//     });

//     faceMesh.setOptions({
//         maxNumFaces: 1,
//         refineLandmarks: true,
//         minDetectionConfidence: 0.5,
//         minTrackingConfidence: 0.5
//     });

//     faceMesh.onResults(onResults);

//     const camera = new Camera(video, {
//         onFrame: async () => {
//             await faceMesh.send({ image: video });
//         },
//         width: 640,
//         height: 480
//     });
//     camera.start();
// });

// // Utility: Calculate distance between 2 points
// function distance(a, b) {
//     return Math.hypot(a.x - b.x, a.y - b.y);
// }

// // Decide if eyes are closed using Eye Aspect Ratio (simplified)
// function onResults(results) {
//     if (!results.multiFaceLandmarks.length) return;

//     const landmarks = results.multiFaceLandmarks[0];

//     // Left eye: upper (386), lower (374)
//     // Right eye: upper (159), lower (145)
//     const leftEye = distance(landmarks[386], landmarks[374]);
//     const rightEye = distance(landmarks[159], landmarks[145]);

//     const avgEyeOpenness = (leftEye + rightEye) / 2;
//     const threshold = 0.015;

//     const eyesClosed = avgEyeOpenness < threshold;
//     checkEyesClosed(eyesClosed);
// }

// function checkEyesClosed(closed) {
//     const now = Date.now();

//     if (closed) {
//         if (!eyesClosedStart) eyesClosedStart = now;
//         if ((now - eyesClosedStart) >= 4000 && !isStopped) {
//             stopCar();
//         }
//     } else {
//         eyesClosedStart = null;
//         if (isStopped) resumeCar();
//     }
// }

// function stopCar() {
//     document.querySelectorAll(".tree").forEach(tree => {
//         tree.style.animationPlayState = 'paused';
//     });
//     music.volume = 1.0;
//     beep.play().catch(console.error);
//     isStopped = true;
//     statusText.textContent = "Status: Stopped! Eyes closed!";
// }

// function resumeCar() {
//     document.querySelectorAll(".tree").forEach(tree => {
//         tree.style.animationPlayState = 'running';
//     });
//     music.volume = 0.2;
//     isStopped = false;
//     statusText.textContent = "Status: Running";
// }
