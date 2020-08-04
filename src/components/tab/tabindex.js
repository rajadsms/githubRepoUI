import React, { useState } from 'react';
import TabBody from './tabbody';

const Tab = (props) => {
  const [state, setState] = useState({
    comp: props.default.comp,
    name: props.default.name,
  });
  const tabClick = (data) => {
    setState({
      comp: props.bodyItem[data.target.dataset.name],
      name: data.target.dataset.name,
    });
  };
  const tabHeadList = props.menuItem.map((data) => {
    return (
      <span
        key={data.val}
        data-name={data.val}
        className={
          state.name !== data.val
            ? 'VED-menu-item'
            : 'VED-menu-item active-menu'
        }
      >
        {data.name}
      </span>
    );
  });

  return (
    <React.Fragment>
      <div className="VED-tab-menu">
        <div className="VED-clickDisable" onClick={tabClick}>
          {tabHeadList}
        </div>
      </div>
      <TabBody>{state.comp}</TabBody>
    </React.Fragment>
  );
};

export default Tab;
