import React from 'react';
import ModeSelector from './ModeSelector/ModeSelector';
import Search from './Search/Search';
import '../../App.css';

const Header = (props) => {
  let setFetchData = (url) => {
    props.fetchData(url)
  };
  let modeSelectHandler = (url) => {
    props.searchResetItem();
    props.modeSelectHandler();
    setFetchData(url);
  }

  return (
    <div className='h'>
      <div className="container">
        <div className='selector'>
          <ModeSelector onSelect={modeSelectHandler} table={props.table} />
          </div>
        <div className='search' >
          <Search 
            size={props.size} 
            search={props.search} 
            pageChangeReset={props.pageChangeReset} 
            onSearch={props.searchHandler} 
            addItemData={props.addItemData}
            createItemData={props.createItemData}
            newItem={props.newItem} />
        </div>
      </div>
    </div>
  );
}

export default Header;
