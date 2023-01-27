import logo from './logo.svg';
import './App.css';
import MeteoComponents from './components/MeteoComponents';
import Header from './components/Header';
import FormComponents from './components/FormComponents';


function App() {


  return (
    <div className="h-screen bg-[#1B1D1F]">
      <Header />
      <MeteoComponents />
      {/* <Meteo  /> */}
    </div>
  );
}

export default App;
