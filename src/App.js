import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";


function App() {

    const {tg, user, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);



    return (
    <div className="App">
      start
        <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
