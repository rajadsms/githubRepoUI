import React, { useEffect, useState } from 'react';
import './App.css';
import BioData from './bioData';
import Repositories from './repositories';
import Overview from './overview';
import Projects from './project';
import Tab from './components/tab/tabindex';

const App = () => {
  const [state, setState] = useState({ resData: {} });
  useEffect(() => {
    fetch('https://api.github.com/users/supreetsingh247', {
      method: 'GET',
    })
      .then((response) => response.json())

      .then((data) => {
        setState({
          ...state,
          resData: data,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { resData } = state;

  return (
    <div className="App">
      <div className="col-3">
        <BioData bioData={resData} />
      </div>

      <div className="VED-board col-9">
        <Tab
          menuItem={[
            { val: 'overview', name: 'Overview' },
            { val: 'repositories', name: 'Repositories' },
            { val: 'projects', name: 'Projects' },
          ]}
          bodyItem={{
            repositories: Repositories,
            overview: Overview,
            projects: Projects,
          }}
          default={{
            comp: Repositories,
            name: 'repositories',
          }}
        />
      </div>
    </div>
  );
};

export default App;
