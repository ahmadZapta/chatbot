document.addEventListener('DOMContentLoaded', function () {
  var link = document.createElement('link');
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

h1,h2,h3,h4,h5,h6,p,ul{
    padding: 0;
    margin: 0;
}

body{
    font-family: Arial, sans-serif;
    font-style: normal;
}

.d-flex{
    display: flex;
}

.flex-column{
    flex-direction: column;
}

.justify-content-center{
    justify-content: center;
}

.justify-content-between{
    justify-content: space-between;
}

.align-items-center{
    align-items: center;
}

.position-relatvie{
    position: relative;
}

.chat-wraper{
    overflow: hidden;
}

.chat-header{
    background-color: rgb(23, 23, 23);
    padding: 16px;
    border-radius: 16px 16px 0 0;
}

.user-profile{
    gap: 12px;
}

.profile-icon{
    width: 32px;
    height: 32px;
    border: 2px solid #FFF;
    border-radius: 50%;
    object-fit: contain;
}

.status{
    position: absolute;
    bottom: 3px;
    right: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: gray;
}

.status.active{
    background: rgb(34 197 94);
}

.status-text {
    font-size: 12px;
    line-height: 16px;
    color: #f0f3f5;
}

.close-chat{
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.header-title{
    font-size: 20px;
    line-height: 25px;
    font-weight: 500;
    color: white;
}
.main {
    margin: 0;
    position: absolute;
    right: 20px;
    bottom: 70px;
    overflow: hidden;
}

.main.overflow{
    
}

.chat-container {
    width: 480px;
    height: 80vh;
    background-color: white;
    /* border-radius: 10px; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    display: flex;
    flex-direction: column;
    position: relative;
    // transform: translate(100%, 100%);
    opacity: 0;
    transform: scale(0);
    transform-origin: right bottom;
    transition: all 0.3s ease;
    transition-property: transform, opacity;
    /* border: 1px solid rgb(229, 229, 229); */
}

.chat-container.show{
    // transform: translate(0, 0);
    transform: scale(1);
    opacity: 1;
    
}

.chat-box {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
    scrollbar-width: 0;
    border: 1px solid rgb(229, 229, 229);
    display: flex;
    flex-direction: column;
}

.chat-box::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.input-container {
    display: flex;
    align-items: center;
    padding: 16px;
    background-color: rgb(247, 249, 250);
    border-right: 1px solid rgb(229, 229, 229);
    border-left: 1px solid rgb(229, 229, 229);
}

.messege-field-wraper{
    background-color: rgb(255, 255, 255);
    padding: 4px 16px;
    gap: 8px;
    border: 1px solid rgb(223, 225, 229);
    border-radius: 160px;
    flex: 1;
    height: 42px;
}
#text-input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    line-height: 18px;
    font-size: 14px;
    height: 100%;
}

#text-input::placeholder{
    color: rgb(172, 172, 172);
}

#send-btn, #file-btn, #record-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    background: transparent;
    color: white;
    cursor: pointer;
}

#send-btn{
    background-color: transparent !important;
    width: fit-content !important;
    height: fit-content !important;
}

.recording-animation {
  display: none;
  align-items: center;
  position: absolute;
  bottom: 51px;
  right: 15px;
  // transform: translateX(-50%);
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  border-radius: 24px;
  font-weight: bold;
}

.recording-control {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin: 0 5px;
}

#recording-time {
  margin: 0 5px;
  font-size: 12px;
}

.wave {
  display: flex;
  align-items: center;
  height: 20px;
  margin: 0 10px;
  flex: 1;
}

.wave span {
  display: block;
  width: 3px;
  height: 10px;
  background: white;
  margin-right: 1px;
  animation: wave 2s infinite ease-in-out;
}

.wave span:nth-child(1) {
  animation-delay: -1.1s;
}

.wave span:nth-child(2) {
  animation-delay: -1.0s;
}

.wave span:nth-child(3) {
  animation-delay: -0.9s;
}

.wave span:nth-child(4) {
  animation-delay: -0.8s;
}

.wave span:nth-child(5) {
  animation-delay: -0.7s;
}

.wave span:nth-child(6) {
  animation-delay: -0.6s;
}

.wave span:nth-child(7) {
  animation-delay: -0.5s;
}

.wave span:nth-child(8) {
  animation-delay: -0.4s;
}

.wave span:nth-child(9) {
  animation-delay: -0.3s;
}

.wave span:nth-child(10) {
  animation-delay: -0.2s;
}

.wave span:nth-child(11) {
  animation-delay: -0.1s;
}

.wave span:nth-child(12) {
  animation-delay: 0s;
}

@keyframes wave {
  0%, 40%, 100% {
    transform: scaleY(0.3);
  }
  20% {
    transform: scaleY(1);
  }
}

.wave.paused span {
  animation-play-state: paused;
}


.message {
    margin: 8px 0;
    padding: 12px;
    border-radius: 16px;
    max-width: 75%;
    width: fit-content;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
}

.user{
    background-color: #007bff;
    color: white;
    align-self: flex-end;
    
    border-top-right-radius: 0;
    background-color: rgb(23, 23, 23);
    border: 1px solid rgb(23, 23, 23);
    margin-left: auto;
}

.user.image,
.user.audio {
    padding: 0;
    background-color: transparent;
}

.user img{
  border: 2px solid rgb(23, 23, 23);
  border-radius: 16px;
  border-top-right-radius: 0;
}

.bot {
    color: #333;
    align-self: flex-start;
    text-align: left;
    border-top-left-radius: 0;
    background-color: rgb(240, 243, 245);
    min-width: 50px !important;
    min-height: 44px;
}

.timestamp {
    font-size: 0.7em;
    color: #666;
    display: flex;
    align-items: center;
    gap: 8px;
}

.user + .timestamp{
    justify-content: end !important;
}

.typing {
    display: inline-block;
    width: 3px;
    height: 3px;
    margin: 0 2px;
    border-radius: 50%;
    background-color: #000;
    animation: typing-blink 1s infinite;
}

.typing:nth-child(2) {
    animation-delay: 0.2s;
}

.typing:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typing-blink {
    0%, 100% {
        opacity: 0.2;
    }
    50% {
        opacity: 1;
    }
}

.no-bg,
.no-bg-audio {
    background-color: transparent !important;
    padding: 0 !important;
}

.no-bg-audio{
  border: none;
}

.date-label {
    margin-left: auto;
    margin-right: auto;
    margin-top: 6px;
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 16px;
    color: rgb(55, 68, 212);
    padding: 8px 16px;
    background-color: rgb(233, 234, 250);
    width: fit-content;
    border-radius: 6px;
}

.powered-by{
    padding-bottom: 16px;
    background-color: rgb(247, 249, 250);
    border-radius: 0 0 16px 16px;
    border: 1px solid rgb(229, 229, 229);
    border-top: 0;
}

.power-text,
.power-text a{
    font-size: 12px;
    line-height: 16px;
    color: rgb(113 ,120, 128);
    text-align: center;
}

.power-text a{
    text-decoration: none;
    font-weight: 700;
}

.timestamp span{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    background-color: rgb(240, 243, 245)
}

.timestamp img {
    width: 12px;
    height: 12px;
}

/* Button animation */
.animated-btn{
    position: fixed;
	bottom: 20px;
	right: 20px;
    width: fit-content;
    display: flex;
	justify-content: center;
	align-items: center;
}

.btn-whatsapp-pulse {
    background: rgb(23, 23, 23);
	display: flex;
	border-radius: 50%;
    border: none;
    width: 56px;
    height: 56px;
}

.chat-icon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.btn-whatsapp-pulse {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.chat-icon {
    transition:  opacity 0.5s ease;
}

@keyframes rotate {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}
@keyframes rotate2 {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

.animate-icon {
    animation: rotate 0.3s alternate;
}

.arrowDown.animate-icon {
    animation: rotate2 0.3s alternate;
}

.d-none {
    opacity: 0;
    visibility: hidden;
}

button[disabled]{
  opacity: 0.5;
  pointer-events: none;
}


/* .d-none{
    display: none;
} */

@media(max-width: 768px){
    .main {
        right: 15px;
        bottom: 60px;
    }
    .btn-whatsapp-pulse{
        transform: scale(0.8);
    }
}

@media(max-width: 520px){

    .main{
        right: 0;
    }
    .chat-container{
        width: 284px;
    }

    #send-btn, #file-btn, #record-btn{
        width: 30px;
        height: 30px;
        background: transparent;
    }

    #send-btn svg path, #file-btn svg path, #record-btn svg path{
        fill: black !important;
    }
    .chat-box {
        padding: 12px;
    }
    .chat-header{
        padding: 10px 12px;
    }

    .input-container{
        padding-left: 12px;
        padding-right: 12px;
    }
    .recording-animation{
      padding: 10px;
    }
    #recording-time {
        margin: 0 2px;
        font-size: 11px;
    }
}
  `;
  document.head.appendChild(style);
  document.title = 'Chatbot';
});

let mediaRecorder = null;
let isRecorderSetup = false;
let isRecording = false;
let audioChunks = [];
let recordingAnimation;
let botResponding = false;
let recordingInterval;
let recordingStartTime;
let isPaused = false;
let pauseTime;

document.addEventListener('DOMContentLoaded', function () {
  const htmlContent = `
    <div class="animated-btn">
    <button
      type="button"
      class="btn-whatsapp-pulse btn-whatsapp-pulse-border"
    >
      <svg
        class="chat-icon messageIcon"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path
          d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"
          fill="#FFF"
        ></path>
      </svg>
  
      <svg
        class="chat-icon arrowDown d-none"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path
          d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
          fill="#FFF"
        ></path>
      </svg>
    </button>
  
    <div class="chat-wraper">
      <div class="main overflow">
        <div class="chat-container">
          <div
            class="chat-header d-flex align-items-center justify-content-between"
          >
            <div class="user-profile d-flex align-items-center">
              <div class="position-relatvie" style="width: fit-content">
                <img
                  class="profile-icon"
                  width="32"
                  height="32"
                  src="https://api.gptflow.app/storage/v1/object/public/chatbot-icons/09689e25-23bb-4f09-a154-0800e9cbf3b6.png"
                  alt="chatbot-icon"
                />
                <div class="status active"></div>
              </div>
              <div class="profile">
                <h2 class="header-title">Kepler AI</h2>
                <p class="status-text">Online</p>
              </div>
            </div>
            <button class="close-chat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path
                  d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                  fill="#FFF"
                ></path>
              </svg>
            </button>
          </div>
          <div class="chat-box" id="chat-box"></div>
          <div class="input-container">
            <div
              class="d-flex align-items-center justify-content-between messege-field-wraper"
            >
              <input
                type="text"
                id="text-input"
                placeholder="Ask a question..."
                autocomplete="off"
              />
              <button id="send-btn">
                <svg
                  width="13"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                    fill="#000"
                  />
                </svg>
              </button>
            </div>
            <input
              type="file"
              id="file-input"
              accept="image/*,audio/*"
              style="display: none"
            />
            <button id="file-btn">
              <svg
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"
                  fill="#000"
                />
              </svg>
            </button>
            <button id="record-btn">
              <svg
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"
                  fill="#000"
                />
              </svg>
            </button>
          </div>
          <div class="powered-by">
            <p class="power-text">Powered by <a href="#">Kepler AI</a></p>
          </div>
          <div class="recording-animation" id="recording-animation">
  <button id="delete-recording" class="recording-control">
    <svg width="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
    </svg>
  </button>
  <span id="recording-time">00:00</span>
  <div class="wave">
  <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <button id="pause-recording" class="recording-control">
    <svg width="16" height="16" fill="currentColor">
      <path d="M5.5 3.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-1zm4 0a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-1z"/>
    </svg>
  </button>
  <button id="send-recording" class="recording-control">
    <svg width="14" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
    </svg>
  </button>
</div>

        </div>
      </div>
    </div>
  </div>
    `;

    document.body.innerHTML += htmlContent;

    document.body.addEventListener('click', function (event) {
      const target = event.target.closest('button, .btn-whatsapp-pulse, .close-chat');
    
      if (!target) return;
    
      switch (target.id) {
        case 'send-btn':
          sendMessage();
          break;
        case 'file-btn':
          document.getElementById('file-input').click();
          break;
        case 'record-btn':
          toggleRecording();
          break;
      }
    
      if (target.classList.contains('close-chat')) {
        document.querySelector('.btn-whatsapp-pulse').click();
      } else if (target.classList.contains('btn-whatsapp-pulse')) {
        toggleChat();
      }
    });
    
    document.body.addEventListener('change', function (event) {
      if (event.target.id === 'file-input') {
        handleFile(event);
      }
    });

    const textInput = document.getElementById('text-input');
    const sendButton = document.getElementById('send-btn');

    sendButton.disabled = textInput.value.trim() === '';

    textInput.addEventListener('input', function () {
      if (!botResponding && !isRecording) {
        sendButton.disabled = textInput.value.trim() === '';
      }
    });
    
    textInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' && !sendButton.disabled) {
        sendMessage();
      }
    });

    recordingAnimation = document.getElementById('recording-animation');
    const recordButton = document.getElementById('record-btn');
    let isDeleting = false;

    function requestMicrophoneAccess() {
      return navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorder = new MediaRecorder(stream);
          recordButton.disabled = false;
    
          mediaRecorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
          };
    
          mediaRecorder.onstop = () => {
            if (!isDeleting) { // Only process if not deleting
              const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
              const audioUrl = URL.createObjectURL(audioBlob);
              addMessageToChatBox('user', `<audio controls src="${audioUrl}"></audio>`, 'no-bg-audio');
              simulateBotResponse();
            } else {
              isDeleting = false; // Reset the flag
            }
            audioChunks = [];
            mediaRecorder.stream.getTracks().forEach(track => track.stop());
            mediaRecorder = null;
          };
    
          return true;
        })
        .catch((error) => {
          console.error('Error accessing microphone:', error);
          alert('Failed to access microphone. Please allow microphone access.');
          
          return false;
        });
    }
    
    function toggleRecording() {
      if (!mediaRecorder) {
        requestMicrophoneAccess().then((accessGranted) => {
          if (accessGranted) {
            startRecording();
          }
        });
      } else {
        startRecording();
      }
    }

    function startRecording() {
      if (mediaRecorder.state === 'inactive') {
        mediaRecorder.start();
        isRecording = true;
        if (recordingAnimation) {
          recordingAnimation.style.display = 'flex';
        }
        document.title = 'Chatbot (Recording...)';
        recordingStartTime = Date.now();
        recordingInterval = setInterval(updateRecordingTime, 1000); // Update time every second
        console.log('Recording started');
      } else {
        mediaRecorder.stop();
        isRecording = false;
        if (recordingAnimation) {
          recordingAnimation.style.display = 'none';
        }
        clearInterval(recordingInterval);
        document.title = 'Chatbot';
        console.log('Recording stopped');
      }
    }
    

    function updateRecordingTime() {
      const elapsed = Math.floor((Date.now() - recordingStartTime) / 1000);
      const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
      const seconds = String(elapsed % 60).padStart(2, '0');
      document.getElementById('recording-time').textContent = `${minutes}:${seconds}`;
    }
    

    document.getElementById('delete-recording').addEventListener('click', () => {
      const wave = document.querySelector('.wave');
      isDeleting = true; // Set the flag to true
      if (mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
      }
      audioChunks = [];
      if (recordingAnimation) {
        recordingAnimation.style.display = 'none';
      }
      clearInterval(recordingInterval);
      document.title = 'Chatbot';
      console.log('Recording deleted');
      isRecording = false;
      wave.classList.remove('paused');
      const pauseButton = document.getElementById('pause-recording');
      pauseButton.innerHTML = `
        <svg width="16" height="16" fill="currentColor">
          <path d="M5 3h2v10H5zm4 0h2v10H9z"/>
        </svg>
      `;
    });
    
document.getElementById('pause-recording').addEventListener('click', () => {
  const pauseButton = document.getElementById('pause-recording');
  const wave = document.querySelector('.wave');
  if (mediaRecorder.state === 'recording') {
    mediaRecorder.pause();
    clearInterval(recordingInterval); // Stop updating the time when paused
    pauseTime = Date.now(); // Store the pause time
    isPaused = true;
    wave.classList.add('paused');
    console.log('Recording paused');
    
    // Change the pause icon to a play icon
    pauseButton.innerHTML = `
      <svg width="16" height="16" fill="currentColor">
        <path d="M4.5 3.5L10.5 8L4.5 12.5V3.5Z"/>
      </svg>
    `;
  } else if (mediaRecorder.state === 'paused') {
    mediaRecorder.resume();
    recordingStartTime += Date.now() - pauseTime; // Adjust the start time to account for pause duration
    recordingInterval = setInterval(updateRecordingTime, 1000); // Resume updating the time
    isPaused = false;
    wave.classList.remove('paused');
    console.log('Recording resumed');
    
    // Change the play icon back to a pause icon
    pauseButton.innerHTML = `
      <svg width="16" height="16" fill="currentColor">
        <path d="M5 3h2v10H5zm4 0h2v10H9z"/>
      </svg>
    `;
  }
  isRecording = true;
});

document.getElementById('send-recording').addEventListener('click', () => {
  const wave = document.querySelector('.wave');
  if (mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
  }
  if (recordingAnimation) {
    recordingAnimation.style.display = 'none';
  }
  clearInterval(recordingInterval);
  document.title = 'Chatbot';
  isRecording = false;
  wave.classList.remove('paused');
  const pauseButton = document.getElementById('pause-recording');
      pauseButton.innerHTML = `
        <svg width="16" height="16" fill="currentColor">
          <path d="M5 3h2v10H5zm4 0h2v10H9z"/>
        </svg>
      `;
});
    


    let counter = 0;
    function toggleChat() {
      let chatContainer = document.querySelector('.chat-container');
      let chatContent = document.querySelector('.chat-box');
      let chatMain = document.querySelector('.main');

      if(counter == 0){
        
          const currentDate = new Date().toDateString();
      
          if (lastMessageDate !== currentDate) {
            const dateLabel = document.createElement('div');
            dateLabel.classList.add('date-label');
            dateLabel.innerText = currentDate;
            chatContent.appendChild(dateLabel);
            lastMessageDate = currentDate;
          }
        simulateBotResponse();
        counter++;
      }
      let messageIcon = document.querySelector('.messageIcon');
      let arrowDown = document.querySelector('.arrowDown');
    
      messageIcon.classList.toggle('d-none');
      arrowDown.classList.toggle('d-none');
    
      if (!messageIcon.classList.contains('d-none')) {
        messageIcon.classList.add('animate-icon');
        arrowDown.classList.remove('animate-icon');
      } else {
        arrowDown.classList.add('animate-icon');
        messageIcon.classList.remove('animate-icon');
      }
    
      chatContainer.classList.toggle('show');
      if (chatContainer.classList.contains('show')) {
        // Check if already at the bottom
        if (chatContent.scrollTop + chatContent.clientHeight >= chatContent.scrollHeight) {
          chatContent.scrollTop = 0; // Set to top first
      }
      
      setTimeout(() => {
          chatContent.style.scrollBehavior = 'smooth';
          chatContent.scrollTop = chatContent.scrollHeight;
          setTimeout(() => {
              chatContent.style.scrollBehavior = 'auto'; 
          }, 500); 
      }, 300); 
      }
      if (chatMain.classList.contains("overflow")) {
        setTimeout(() => {
          chatMain.classList.toggle("overflow");
        }, 400);
      } else {
        chatMain.classList.toggle("overflow");
      }
    }
   
    
    var lastMessageDate = null;
    
    function handleFile(event) {
      const file = event.target.files[0];
      const allowedTypes = ['image/jpeg', 'image/png'];
      const chatBox = document.getElementById('chat-box');
    
      if (file && allowedTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const fileURL = e.target.result;
          addMessageToChatBox('user', `<img src="${fileURL}" alt="Image" style="max-width: 100%;">`, 'no-bg');
          simulateBotResponse();
        };
        reader.readAsDataURL(file);
        event.target.value = '';
      } else {
        alert('Only JPG and PNG images are allowed.');
      }
    }
    
    
    function simulateBotResponse() {
      const chatBox = document.getElementById('chat-box');
      const typingIndicator = document.createElement('div');
      typingIndicator.classList.add('message', 'bot');
      typingIndicator.innerHTML = '<span class="typing"></span><span class="typing"></span><span class="typing"></span>';
      chatBox.appendChild(typingIndicator);
      chatBox.scrollTop = chatBox.scrollHeight;
    
      const sendButton = document.getElementById('send-btn');
      const recordingButton = document.getElementById('record-btn');
      const addFileButton = document.getElementById('file-btn');
      botResponding = true; // Set flag to true
      sendButton.disabled = true; // Disable send button
      addFileButton.disabled = true; // Disable send button
      recordingButton.disabled = true; // Disable send button
    
      setTimeout(() => {
        chatBox.removeChild(typingIndicator);
        const botMessage = 'This is a bot response.';
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'bot');
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        typeMessage(botMessage, messageElement, () => {
          botResponding = false; // Set flag to false
          sendButton.disabled = document.getElementById('text-input').value.trim() === ''; // Re-enable send button if input is not empty
          addFileButton.disabled = false; // Disable send button
          recordingButton.disabled = false;
          // Append timestamp after bot message is fully typed
          const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
          const timestampElement = document.createElement('div');
          timestampElement.classList.add('timestamp');
          timestampElement.innerHTML = `<span><img src="https://zaptatech.com/frontend-assets/images/icons/favicon.svg" alt="Bot Icon" width="10" height="10"> </span>${currentTime}`;
          chatBox.appendChild(timestampElement);
          chatBox.scrollTop = chatBox.scrollHeight;
        });
      }, 1000);
    }
    
    
    function typeMessage(text, element, callback) {
      let index = 0;
      const chatBox = document.getElementById('chat-box');
      chatBox.scrollTop = chatBox.scrollHeight;
      const typingSpeed = 50; // Adjust typing speed (milliseconds per character)
      const interval = setInterval(() => {
        if (index < text.length) {
          element.textContent += text[index];
          index++;
          chatBox.scrollTop = chatBox.scrollHeight; // Keep chat scrolled to bottom
        } else {
          clearInterval(interval);
          if (callback) callback();
        }
      }, typingSpeed);
    }
    
    function addMessageToChatBox(sender, message, additionalClass = '') {
      const chatBox = document.getElementById('chat-box');
      chatBox.scrollTop = chatBox.scrollHeight;
      const currentDate = new Date().toDateString();
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    
      if (lastMessageDate !== currentDate) {
        const dateLabel = document.createElement('div');
        dateLabel.classList.add('date-label');
        dateLabel.innerText = currentDate;
        chatBox.appendChild(dateLabel);
        lastMessageDate = currentDate;
      }
    
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', sender);
      if (additionalClass) {
        messageElement.classList.add(additionalClass);
      }
      messageElement.innerHTML = message;
    
      const timestampElement = document.createElement('div');
      timestampElement.classList.add('timestamp');
      if (sender === 'bot') {
        timestampElement.innerHTML = `<span><img src="path-to-bot-icon.png" alt="Bot Icon" style="width: 12px; height: 12px; margin-right: 4px;"> ${currentTime}</span>`;
      } else {
        timestampElement.innerText = currentTime;
      }
    
      chatBox.appendChild(messageElement);
      chatBox.appendChild(timestampElement);
      chatBox.scrollTop = chatBox.scrollHeight;
      
    }
    
    
    
    
    function sendMessage() {
      const textInput = document.getElementById('text-input');
      const message = textInput.value.trim();
      if (message) {
        addMessageToChatBox('user', message);
        textInput.value = '';
        simulateBotResponse();
      }
    }
    
  
  });    