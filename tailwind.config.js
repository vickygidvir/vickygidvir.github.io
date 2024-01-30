/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        "link": 'url("https://jthemes.net/themes/html/bolby/demo/images/dots-bg-light.svg")'
      },
      keyframes: {

        buttonPush: {
          '50%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },

        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        mouse: {
          "0%": {
            top: "29%"
          },
          "15%": {
            top: "50%"
          },
          "50%": {
            top: "50%"
          },
          "100%": {
            top: "29%"

          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }

      },

      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'mouse-wheel': 'mouse 2s linear infinite',
        'button-push': 'buttonPush 0.4s linear 1'
      },
      container: {
        center: true,
        padding: '55px',
      },
      colors: {
        "yellow-color": '#FFD15C',
        "red-color": '#FF4B60',
        "grey-color": '#8B88B1',
        "blue-container": '#302F4e'
      }
    },
  },
  plugins: [],
}

