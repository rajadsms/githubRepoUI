import React from 'react';

const RowSubHeader = (props) => {
  const { subHeader } = props;

  return (
    <div className="subHeaderContainer">
      {subHeader.map((data) => {
        return data === 0 || (data && <span>{data}</span>);
      })}
    </div>
  );
};

export default RowSubHeader;
