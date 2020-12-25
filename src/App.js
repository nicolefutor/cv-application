import './App.css';
import Header from './components/Header/Header';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import WorkInfo from './components/WorkInfo/WorkInfo'
import EducationInfo from './components/EducationInfo/EducationInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <WorkInfo />
      <EducationInfo />
    </div>
  );
}

export default App;
