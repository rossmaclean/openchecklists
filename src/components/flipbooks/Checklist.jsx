import './Checklist.css';
import React, { useEffect, useState } from 'react';
import * as YAML from 'yaml';

function Checklist({ aircraft }) {
  const baseUrl = 'https://raw.githubusercontent.com/rossmaclean/openchecklists/main/checklists/';
  const [checklist, setChecklist] = useState();

  useEffect(() => {
    const url = `${baseUrl + aircraft}.yaml`;
    fetch(url)
      .then((res) => res.text())
      .then((res) => {
        setChecklist(YAML.parse(res));
      });
  }, [aircraft]);

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
              {checklist.items.map((i) => (
                <tr key={i.name}>
                  <td>
                    <table style={{
                      border: '1px solid teal',
                      width: '100%',
                      marginBottom: '0.5rem',
                    }}
                    >
                      <thead>
                        <tr>
                          <td
                            colSpan={2}
                            style={{
                              backgroundColor: 'teal',
                              color: 'white',
                              textAlign: 'center',
                            }}
                          >
                            <h4>{i.name.toUpperCase()}</h4>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        {i.items.map((item, index) => {
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Checklist;
