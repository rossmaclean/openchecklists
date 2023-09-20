import './Checklists.css';
import React, { useEffect, useState } from 'react';
import Checklist from '../flipbooks/Checklist';

function Checklists() {
  const [checklists, setChecklists] = useState([]);
  const [checklist, setChecklist] = useState();

  useEffect(() => {
    fetch(
      'https://api.github.com/repos/rossmaclean/openchecklists/git/trees/main?recursive=2',
    )
      .then((res) => res.json())
      .then((res) => {
        const cl = res.tree
          .filter((i) => i.path.includes('checklists/'))
          .map((i) => i.path.replace('checklists/', ''))
          .map((i) => i.replace('.yaml', ''));
        setChecklists(cl);
        setChecklist(cl[0]);
      })
      .catch((err) => {
        console.log('unable to fetch checklists ', err);
      });
  }, []);

  const pickChecklist = (e) => {
    setChecklist(checklists.filter((cl) => cl === e.target.value)[0]);
  };

  return (
    <div>
      {checklists && checklist && (
        <div>
          <select onChange={pickChecklist}>
            {checklists.map((cl) => (
              <option value={cl} key={cl}>{cl.toUpperCase()}</option>
            ))}
          </select>
          <Checklist aircraft={checklist} />
        </div>
      )}
    </div>
  );
}

export default Checklists;
