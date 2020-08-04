import React from 'react';
import RowSubHeader from './rowSubHeader';

const RowList = (props) => {
  const listData = props.listData;

  let list =
    listData.length &&
    listData.map((data) => {
      let subHeader = [
        data.language,
        data.updated_at,
        data.stargazers_count,
        data.forks_count,
        data.license ? data.license.name : '',
      ];
      return (
        <div key={data.name} className="">
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <RowSubHeader subHeader={subHeader} />
        </div>
      );
    });
  return <div>{list}</div>;
};
export default RowList;
