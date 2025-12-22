module.exports = {
    theme: {
      extend: {
        fontWeight: {
          // Keep compatibility with existing "font-regular" usage across the codebase
          regular: "400",
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-12px)' },
          },
        },
        animation: {
          float: 'float 3s ease-in-out infinite',
        },
      },
    },
  }
  