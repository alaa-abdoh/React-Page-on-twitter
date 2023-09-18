import LeftBar from "./components/LeftBar"
import './App.css';
import Content from "./components/Content";

function App() {
  return (
    <div className="page">
      <div className="container">
        <LeftBar/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
