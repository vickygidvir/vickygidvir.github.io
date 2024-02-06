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
      dropShadow: {
        red: [
          "0 0px 20px rgba(236,58,139, 0.35)",
          "0 0px 65px rgba(236,58,139, 0.3)"
        ],
        yellow: [
          "0 0px 20px rgba(254,246,91, 0.35)",
          "0 0px 65px rgba(254,246,91, 0.3)"
        ]
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
        padding: {
          DEFAULT: '1.5rem',
          lg: '55px'

        },
      },
      colors: {
        "yellow-color": '#FFD15C',
        "red-color": '#bf1650',
        "grey-color": '#8B88B1',
        "blue-container": '#191d3a'
      }
    },
  },
  plugins: [],
}

