import './App.css';
import  {Route} from "react-router-dom";
import Home from "./views/Home/Home"
import Form from './views/form/Form';
import LandingPage from './views/LadingPage/LadingPage';
import Detail from './views/Detail/Detail';
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>

      <Route exact path="/Home" component={Home}/>

      <Route exact path="/Create" component={Form}/>

      <Route exact path="/Detail/:id" component={Detail}/>
    </div>
  );
}

export default App;
