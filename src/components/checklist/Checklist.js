import './Checklist.css';

const c152 = [
  {
    "name": "PREFLIGHT INSPECTION",
    "items": [
      {
        "name": "Fuel/Load-manager",
        "confirmation": "SET / CHECK CG"
      },
      {
        "name": "JPL Mod - EFB Options / W&B",
        "confirmation": "SET"
      },
      {
        "name": "Ignition",
        "confirmation": "OFF"
      },
      {
        "name": "Master Switch",
        "confirmation": "ON"
      },
      {
        "name": "Fuel Quantity",
        "confirmation": "CHECK"
      },
      {
        "name": "Master Switch",
        "confirmation": "OFF"
      },
      {
        "name": "Fuel Valve (Floor)",
        "confirmation": "OPEN"
      },
      {
        "name": "Outside Inspection",
        "confirmation": "Perform"
      }
    ]
  },
  {
    "name": "BEFORE STARTING ENGINE",
    "items": [
      {
        "name": "Parking Brake",
        "confirmation": "SET"
      },
      {
        "name": "Fuel Valve (Floor)",
        "confirmation": "OPEN"
      },
      {
        "name": "Radios & Electrical Equipment",
        "confirmation": "OFF"
      },
      {
        "name": "Circuit Breakers",
        "confirmation": "CHECK IN"
      }
    ]
  },
  {
    "name": "STARTING THE ENGINE",
    "items": [
      {
        "name": "Master Switch (BAT & ALT)",
        "confirmation": "ON"
      },
      {
        "name": "Nav Lights",
        "confirmation": "AS REQ / ON"
      },
      {
        "name": "Beacon",
        "confirmation": "ON"
      },
      {
        "name": "Mixture",
        "confirmation": "RICH"
      },
      {
        "name": "Carb Heat",
        "confirmation": "COLD"
      },
      {
        "name": "Primer",
        "confirmation": "AS REQ (up to 3 strokes)"
      },
      {
        "name": "Throttle",
        "confirmation": "OPEN 1/2 INCH"
      },
      {
        "name": "Ignition",
        "confirmation": "START, then BOTH"
      },
      {
        "name": "Oil Pressure",
        "confirmation": "CHECK",
        "subtext": "If no oil pressure is indicating within 30 secs, turn off the engine"
      },
      {
        "name": "Ammeter",
        "confirmation": "CHECK"
      }
    ]
  }
]

function Checklist({value}) {

  return (
      <div>
        <h3>{value.toUpperCase()} Checklist</h3>
        <table>
          <tbody>
          {c152.map(i => {
            return (
                <tr key={i.name}>
                  <td>
                    <table style={{
                      border: '1px solid grey',
                      width: '100%',
                      marginBottom: '0.5rem'
                    }}>
                      <thead>
                      <tr>
                        <td colSpan={'2'} style={{
                          backgroundColor: 'gray',
                          color: 'white',
                          textAlign: 'center'
                        }}><h4>{i.name.toUpperCase()}</h4></td>
                      </tr>
                      </thead>
                      <tbody>
                      {i.items.map((item, index) => {
                        return (
                            <tr key={item.name + item.confirmation} style={{
                              backgroundColor: index % 2 === 0 ? 'white'
                                  : 'grey',
                              color: index % 2 === 0 ? 'black' : 'white'
                            }}>
                              <td style={{textAlign: 'left'}}>{item.name}</td>
                              <td style={{textAlign: 'right'}}>{item.confirmation}</td>
                            </tr>
                        )
                      })}
                      </tbody>
                    </table>
                  </td>
                </tr>
            )
          })}
          </tbody>
        </table>
      </div>
  );
}

export default Checklist;
