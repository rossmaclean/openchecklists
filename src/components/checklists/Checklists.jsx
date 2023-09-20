import './Checklists.css';
import React, { useEffect, useState } from 'react';
import Checklist from '../flipbooks/Checklist';
import { getChecklists } from '../../services/ChecklistService';
import Flipbook from '../checklist/Flipbook';

function Checklists() {
  const [checklists, setChecklists] = useState([]);
  const [checklist, setChecklist] = useState();
  const [flipbook, setFlipbook] = useState(false);

  useEffect(() => {
    getChecklists()
      .then((res) => {
        setChecklists(res);
        setChecklist(res[0]);
      });
  }, []);

  const pickChecklist = (e) => {
    setChecklist(checklists.filter((cl) => cl === e.target.value)[0]);
  };

  return (
    <div>
      {checklists && checklist && (
        <div>
          <label htmlFor="flipbook-checkbox">
            <input type="checkbox" id="flipbook-checkbox" onChange={() => setFlipbook(!flipbook)} />
            Flipbook?
          </label>
          <select onChange={pickChecklist}>
            {checklists.map((cl) => (
              <option value={cl} key={cl}>{cl.toUpperCase()}</option>
            ))}
          </select>
          {flipbook && <Flipbook aircraft={checklist} /> }
          {!flipbook && <Checklist aircraft={checklist} /> }
        </div>
      )}
    </div>
  );
}

export default Checklists;
