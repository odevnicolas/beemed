

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/*/.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'verde-social': '#798977',
        'verde-social-icons': '#9af697',
        'verde-social-icons-hover': '#6ff569',
        'footerColor': '#798977',
        'iconColor': '#69e372',
        'colorGreen': '#9BF798',
        'colorButton': '#9AF890',
        'BackColor': 'rgb(33, 39, 32)',
        'ColorFooter': '#495748',
        'ContainerProced1': '#CBF3D0',
        'ContainerProced2': '#ABF5B1',
        'ContainerFrase': '#848484',
        'ContainerFraseProced': '#568654',
      },
      boxShadow: {
        'custom': '-1.2246467996456087e-15px 20px 18px 0px rgba(155, 247, 152, 0.60)',
      },
    },
  },
  plugins: [],
}
