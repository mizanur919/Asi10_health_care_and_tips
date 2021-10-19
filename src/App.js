// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import Login from './Pages/Login/Login';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Signup from './Pages/Login/Signup/Signup';
import Footer from './Pages/Shared/Footer/Footer';
import TalkToExperts from './Pages/TalkToExperts/TalkToExperts';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/servicedetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/talktoexperts">
              <TalkToExperts></TalkToExperts>
            </PrivateRoute>
            <Route className="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
