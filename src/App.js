import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'

// Routes
import About from './containers/About'
import Error404 from './containers/errors/Error404'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navigation />
      </div>
      {/* If the route matches "/" exactly, render all this stuff, otherwise don't. */}
      <Route path="/" exact render={(prop) => (
        <div className="mx-2">
          <h1 className="font-bold text-3xl mb-2">BoggyGoFast V3!</h1>
          <p className="mb-4">Now with 50% more temporary text!</p>
        </div>
      )} />

      <Route path="/about" component={About} />
      <Route path="/404" exact component={Error404} />

      <Footer />
    </Router>
  );
}

export default App;
