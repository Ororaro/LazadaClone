import './App.css';
import Header from './components/layouts/Header'
import Section1 from './components/homepages/Section1/Section1';
import { Section2 } from './components/homepages/Section2/Section2';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Section1 />
        <Section2 />
      <Footer />
    </div>
  );
}

export default App;
