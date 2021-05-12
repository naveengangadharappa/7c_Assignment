import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin_Layout from './Layout/Admin_Layout';
import Default from './Layout/Default';
import Navbar from './Components/NavBar/Navbar';
import Sidebar_cls from './Components/SideBar/Sidebar_cls';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="parent">
        <BrowserRouter>
          <Sidebar_cls />
          <Switch>
            <Route path='/' exact component={Admin_Layout} />
            <Route path='/Settings' exact component={Admin_Layout} />
            <Route path='/Products' exact component={Default} />
            <Route path='/Sales' exact component={Default} />
            <Route path='/Script' exact component={Default} />
            <Route path='/Customer' exact component={Default} />
            <Route path='/Demo' exact component={Default} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
