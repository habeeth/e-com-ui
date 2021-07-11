
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './containers/HomePage/Index';
import ProductListPage from './containers/ProductListPage';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/:slug' component={ProductListPage} />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
