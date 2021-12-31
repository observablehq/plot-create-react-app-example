import * as Plot from "@observablehq/plot";
import './App.css';
import {useEffect, useRef} from 'react';

function App() {
  const headerRef = useRef();

  useEffect(() => {
    const chart = Plot.plot({
      style: {
        background: "transparent"
      },
      marks: [
        Plot.ruleY([0]),
        Plot.line({length: 200}, {x: (_, i) => i, y: Math.random})
      ]
    });
    headerRef.current.append(chart);
    return () => chart.remove();
  }, []);

  return (
    <div className="App">
      <header className="App-header" ref={headerRef}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
