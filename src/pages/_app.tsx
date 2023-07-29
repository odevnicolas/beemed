/* eslint-disable prettier/prettier */
import { AppProps } from 'next/app';
import '../../styles/fonts.css'
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
