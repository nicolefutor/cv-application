import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import WorkInfo from './components/WorkInfo'
import EducationInfo from './components/EducationInfo';
import SkillsInfo from './components/SkillsInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <WorkInfo />
      <EducationInfo />
      <SkillsInfo />
    </div>
  );
}

export default App;
