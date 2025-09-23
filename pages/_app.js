// _app.js is a top level react component that wraps all the pages in your application.
import '../styles/global.css';
export default function App({component,pageProps}) {
    return (
        <component {...pageProps}/>
    )
}