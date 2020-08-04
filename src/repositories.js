import React, { useEffect, useState } from 'react';
import RowList from './components/rowList';

const Repositories = (props) => {
  const [state, setState] = useState({
    storeData: [],
    datatoDisplay: [],
    languageData: [],
    typeData: [],
  });
  const [searchPhrase, setSearchPhrase] = useState({
    keyword: '',
    selectedLang: 'All',
    selectedType: 'All',
  });

  useEffect(() => {
    fetch('https://api.github.com/users/supreetsingh247/repos', {
      method: 'GET',
    })
      .then((response) => response.json())

      .then((data) => {
        let languages = [];
        let types = [];
        data.forEach((item) => {
          let lang = item.language;
          if (lang && languages.indexOf(lang) === -1) languages.push(lang);
          let type = item.type;
          if (type && !types.includes(type) === -1) types.push(type);
        });
        setState({
          ...state,
          storeData: data,
          datatoDisplay: data,
          languageData: languages,
          typeData: types,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { datatoDisplay, storeData, typeData, languageData } = state;
  const { keyword, selectedLang, selectedType } = searchPhrase;

  useEffect(() => {
    applyFilters(searchPhrase);
  }, [keyword, selectedLang, selectedType]);

  const onSearchChange = (e) => {
    setSearchPhrase({
      ...searchPhrase,
      keyword: e.target.value,
    });
  };

  const onLanguageChange = (e) => {
    setSearchPhrase({
      ...searchPhrase,
      selectedLang: e.target.value,
    });
  };
  const onTypeChange = (e) => {
    setSearchPhrase({
      ...searchPhrase,
      selectedType: e.target.value,
    });
  };

  const applyFilters = (params) => {
    const { selectedLang, selectedType, keyword } = params;
    let datatoDisplayTemp = [];
    //Function to filter
    Object.keys(storeData).forEach((item) => {
      if (
        (!keyword ||
          storeData[item].name.toLowerCase().includes(keyword.toLowerCase())) &&
        (selectedLang === 'All' ||
          (storeData[item].language &&
            storeData[item].language.toLowerCase() === selectedLang)) &&
        (selectedType === 'All' ||
          (storeData[item].type &&
            storeData[item].type.toLowerCase() === selectedType))
      ) {
        datatoDisplayTemp.push(storeData[item]);
      }
    });
    setState({
      ...state,
      datatoDisplay: datatoDisplayTemp,
    });
  };

  return (
    <div className="outerPanel-repo">
      <div className="searchBar">
        <input
          type="text"
          className="search"
          onChange={(e) => onSearchChange(e)}
          placeholder="Find a repository"
        />
        <select name="type" onChange={(e) => onLanguageChange(e)}>
          <option value="All">All</option>
          {languageData.map((lang) => (
            <option key={lang} value={lang.toLowerCase()}>
              {lang}
            </option>
          ))}
        </select>
        <select name="language" onChange={(e) => onTypeChange(e)}>
          <option value="All">All</option>
          {typeData.map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="listView">
        <RowList listData={datatoDisplay} />
      </div>
    </div>
  );
};

export default Repositories;
