import './App.css';
import Header from './components/Header/Header';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import EducationInfo from './components/EducationInfo/EducationInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <EducationInfo />
    </div>
  );
}

export default App;
