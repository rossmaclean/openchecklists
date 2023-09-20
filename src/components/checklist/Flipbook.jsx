import './Flipbook.css';
import React, { useEffect, useState } from 'react';
import * as YAML from 'yaml';

function Flipbook({ aircraft }) {
  const baseUrl = 'https://raw.githubusercontent.com/rossmaclean/openchecklists/main/checklists/';
  const [checklist, setChecklist] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [nextName, setNextName] = useState('');
  const [prevName, setPrevName] = useState('');

  useEffect(() => {
    const url = `${baseUrl + aircraft}.yaml`;
    fetch(url)
      .then((res) => res.text())
      .then((res) => {
        setChecklist(YAML.parse(res));
        setPrevName('Disabled');
        setNextName(checklist.items[1].name);
      });
  }, [aircraft]);

  useEffect(() => {
    if (checklist) {
      if (currentIndex >= checklist.items.length - 1) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
      if (currentIndex - 1 < 0) {
        setPrevDisabled(true);
      } else {
        setPrevDisabled(false);
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    if (checklist) {
      if (currentIndex + 1 < checklist.items.length) {
        setNextName(checklist.items[currentIndex + 1].name);
      }
      if (currentIndex > 0) {
        setPrevName(checklist.items[currentIndex - 1].name);
      }
    }
  }, [currentIndex]);

  return (
  // <Grid container spacing={2}>
  //   <Grid item xs={8}>
  //     <Item>xs=8</Item>
  //   </Grid>
  //   <Grid item xs={4}>
  //     <Item>xs=4</Item>
  //   </Grid>
  //   <Grid item xs={4}>
  //     <Item>xs=4</Item>
  //   </Grid>
  //   <Grid item xs={8}>
  //     <Item>xs=8</Item>
  //   </Grid>
  // </Grid>
    <div>
      {checklist && (
        <div>
          <h3>
            {checklist.name.toUpperCase()}
            {' '}
            Checklist
          </h3>
          <table style={{ maxWidth: '500px', width: '100%' }}>
            <tbody>
              <tr key={checklist.items[currentIndex].name}>
                <td>
                  <table style={{
                    border: '1px solid brown',
                    width: '100%',
                    marginBottom: '0.5rem',
                  }}
                  >
                    <thead>
                      <tr>
                        <td
                          colSpan={2}
                          style={{
                            backgroundColor: 'brown',
                            color: 'white',
                            textAlign: 'center',
                          }}
                        >
                          <h4>{checklist.items[currentIndex].name.toUpperCase()}</h4>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {checklist.items[currentIndex].items.map((item, index) => {
                        let color = index % 2 === 0 ? 'black' : 'white';
                        let bgColor = index % 2 === 0 ? 'white' : 'grey';
                        if (item.color) {
                          color = 'white';
                          bgColor = item.color;
                        }
                        return (
                          <tr
                            key={item.name + item.confirmation}
                            style={{
                              backgroundColor: bgColor,
                              color,
                              fontWeight: item.quickstart ? 'bold' : 'normal',
                            }}
                          >
                            <td style={{ textAlign: 'left' }}>{item.name}</td>
                            <td style={{ textAlign: 'right' }}>{item.confirmation}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <button
        type="button"
        onClick={() => setCurrentIndex(currentIndex - 1)}
        disabled={prevDisabled}
      >
        {prevName}
      </button>
      <button
        type="button"
        onClick={() => setCurrentIndex(currentIndex + 1)}
        disabled={nextDisabled}
      >
        {nextName}
      </button>
    </div>
  );
}

export default Flipbook;
