import './App.css';
import {useEffect} from "react";


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
