import './App.css';
import NewCard from './components/NewCard/NewCard';
import NewLabelContainer from './components/NewLabelContainer/NewLabelContainer';
import SamplePage from './pages/SamplePage/SamplePage';

function App() {
  return (
    <div className="App">
      <SamplePage/>
      <NewCard />
      <NewLabelContainer/>
    </div>
  );
}

export default App;
