import './App.css';
import {Route, Switch} from 'react-router-dom'
import Nav from './components/nav'
import Main from './pages/main'
import Stocks from './pages/stocks'
import Stock from './pages/stock'
import About from './pages/about'

function App() {
  return (
    <div className="App">
     <Nav />
     <Switch>
       <Route exact path="/">
         <Main />
       </Route>
       <Route path="/stocks">
         <Stocks />
       </Route>
       <Route path="/stocks/:symbol" render={(routerProps) => <Stock {...routerProps}/>}/>
       <Route>
         <About />
       </Route>
     </Switch>
    </div>
  );
}

export default App;
