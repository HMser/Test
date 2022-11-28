function render(sessionid){
return `<html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" /> 
    </head>
    <h1 id="sessionID">${sessionid}</h1>
    <div class="main">
      <button style="--content: 'COPY CODE'" onclick="copy()" id="button">
        <div class="left" ></div>
        COPY CODE
        <div class="right"></div>
      </button>
    </div>
    <script src="/socket.io/socket.io.js"></script>
    <script>
      async function copy() {
        let text = document.getElementById("sessionID").innerText;
        await navigator.clipboard.writeText(text);
        document.getElementById("button").innerText = "COPIED";
        var socket = io();
        socket.emit("reset", "now");
      }
    </script>
    <style>
      @import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:200,900");
  
      :root {
        --text-color: hsla(210, 50%, 85%, 1);
        --shadow-color: hsla(210, 40%, 52%, 0.4);
        --btn-color: hsl(210, 80%, 42%);
        --bg-color: #141218;
      }
  
      * {
        box-sizing: border-box;
      }
  
      html,
      body {
        width: 100%;
        height: 100%;
        background-color: var(--bg-color);
      }
      h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        color: aliceblue;
      }
      .main {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      button {
        position: relative;
        padding: 10px 20px;
        border: none;
        background: none;
        cursor: pointer;
  
        font-family: "Source Code Pro";
        font-weight: 900;
        text-transform: uppercase;
        font-size: 30px;
        color: var(--text-color);
  
        background-color: var(--btn-color);
        box-shadow: var(--shadow-color) 2px 2px 22px;
        border-radius: 4px;
        z-index: 0;
        overflow: hidden;
      }
  
      button:focus {
        outline-color: transparent;
        box-shadow: var(--btn-color) 2px 2px 22px;
      }
  
      .right::after,
      button::after {
        content: var(--content);
        display: block;
        position: absolute;
        white-space: nowrap;
        padding: 40px 40px;
        pointer-events: none;
      }
  
      button::after {
        font-weight: 200;
        top: -30px;
        left: -20px;
      }
  
      .right,
      .left {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
      }
      .right {
        left: 66%;
      }
      .left {
        right: 66%;
      }
      .right::after {
        top: -30px;
        left: calc(-66% - 20px);
  
        background-color: var(--bg-color);
        color: transparent;
        transition: transform 0.4s ease-out;
        transform: translate(0, -90%) rotate(0deg);
      }
  
      button:hover .right::after {
        transform: translate(0, -47%) rotate(0deg);
      }
  
      button .right:hover::after {
        transform: translate(0, -50%) rotate(-7deg);
      }
  
      button .left:hover ~ .right::after {
        transform: translate(0, -50%) rotate(7deg);
      }
  
      /* bubbles */
      button::before {
        content: "";
        pointer-events: none;
        opacity: 0.6;
        background: radial-gradient(
            circle at 20% 35%,
            transparent 0,
            transparent 2px,
            var(--text-color) 3px,
            var(--text-color) 4px,
            transparent 4px
          ),
          radial-gradient(
            circle at 75% 44%,
            transparent 0,
            transparent 2px,
            var(--text-color) 3px,
            var(--text-color) 4px,
            transparent 4px
          ),
          radial-gradient(
            circle at 46% 52%,
            transparent 0,
            transparent 4px,
            var(--text-color) 5px,
            var(--text-color) 6px,
            transparent 6px
          );
  
        width: 100%;
        height: 300%;
        top: 0;
        left: 0;
        position: absolute;
        animation: bubbles 5s linear infinite both;
      }
  
      @keyframes bubbles {
        from {
          transform: translate();
        }
        to {
          transform: translate(0, -66.666%);
        }
      }
    </style>
    
  </html>
`   
}
module.exports = render