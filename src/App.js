import './App.css';
import './normalize.css'
import Navigation from './componenet/Navigation';
import Billboard from './componenet/Billboard';
import Titles from './componenet/Titles';
import Footer from './componenet/Footer';

function App() {
  return (
    <div className="App">
      <Billboard />
      <Navigation />
      <Titles />
      <Footer />
    </div>
  );
}

export default App;
