import './App.css';
import {useEffect} from "react";
let tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, []);



    return (
    <div className="App">
      start

    </div>
  );
}

export default App;
