// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textpage from "./Components/Textpage";
import Alerts from "./Components/Alerts";


function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1200)
  }

  const changeTheme = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'Textpage - Light mode'
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#062134';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'Textpage - Dark mode'
    }
  }
  return (


    <div>
      {/* <Router> */}

        {/* <Navbar title= "Textboots"  AboutName = "About us" /> */}
        <Navbar title="Textboots" mode={mode} changeTheme={changeTheme} />
        <Alerts alert={alert} />



        <div className="container my-5">
          {/* <Routes> */}
            {/* <Route exact path="/" element={} /> */}
            <Textpage showAlert={showAlert} Headings="Enter the text you want to analyze below" mode={mode} />
            {/* <Route exact path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}









    </div>
  );
}

export default App;
