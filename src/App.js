import './App.css';
import Checklists from "./components/checklists/Checklists";
import Flipbook from "./components/checklist/Flipbook";

function App() {
  return (
      <div className={'app-container'}>
        <Checklists/>
        {/*<Flipbook aircraft={'c152'}/>*/}
      </div>
  );
}

export default App;
