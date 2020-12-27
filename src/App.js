import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import WorkInfo from './components/WorkInfo'
import EducationInfo from './components/EducationInfo';
import SkillsInfo from './components/SkillsInfo';

function App() {
  return (
    <div className="bg-gray-700 min-h-screen m-0 p-3">
      <Header />
      <div className='bg-black rounded-lg p-0 m-3 transform translate-y-2'>
        <div className='bg-gray-300 m-2 ml-1  rounded-lg transform -translate-x-4 -translate-y-4 p-4 space-y-4'>
          <PersonalInfo />
          <WorkInfo />
          <EducationInfo />
          <SkillsInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
