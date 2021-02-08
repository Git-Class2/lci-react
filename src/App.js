import React from 'react';
import './App.css';
import Mubarak from './Mubarak';
import Footer from './Footer';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './Home';
import blog from './blog';
import gallery from './gallery';
import shop from './shop';


function App() {
  return(
    <Router>

      <div>

        <Header/>
        
    
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mubarak" component={Mubarak} />
          <Route path="/blog" component={blog} />
          <Route path="/gallery" component={gallery} />
          <Route path="/shop" component={shop} />
         
        </Switch>
        <Footer/>
      

      </div>

    </Router>
  );
}
// const Home = () =>(
//   <div>
//     <h1>Homepage</h1>
//   </div>
// );

export default App;