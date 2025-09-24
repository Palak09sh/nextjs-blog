// _app.js is a top level react component that wraps all the pages in your application.
// `pages/_app.js`
import '../styles/global.css';
 
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}