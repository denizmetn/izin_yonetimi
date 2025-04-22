module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Tailwind'in tarayacağı dosyalar
  theme: {
    extend: {
      colors: {
        "pastel-blue": "#d0ebff",
        "pastel-blue-light": "#e3f2fd",
        "pastel-blue-dark": "#b3d9ff",
        "pastel-pink": "#ffd6e7",
        "pastel-pink-dark": "#ffb3cf",
        "pastel-green": "#d4f8e8",
        "pastel-green-dark": "#b2f2d9",
        "pastel-yellow": "#fff3bf",
        "pastel-yellow-dark": "#ffe066",
        "pastel-purple": "#e5dbff",
        "pastel-gray": "#adb5bd",
        "pastel-white": "#f8f9fa",
      },
    },
  },
  plugins: [],
};
