import React from 'react';
import '../../App.css';
import Loader from './Loader/Loader';
import Paginate from './Paginate/Paginate';
import Table from './Table/Table';
import DetailRowView from "./DetailRowView/DetailRowView";

const Body = (props) => {

  let onSort = (val) => {
    props.onSort(val);
  }
  let onRowSelect = (row) => {
    props.onRowSelect(row);
  }
  let pageChangeHandler = (page) => {
    props.pageChangeHandler(page);
  }
  const pageCount = () => {
    return props.pageCount(props);
  }
  
  const displayData = props.displayData(props);

  let dataSize = () => {
    return pageCount() > 1 ? props.table.data.length : displayData.length;
  }
  
  if (props.table.isLoading) {
    return (<Loader />)
  }
  else {
    return (
      <div className='b'>
        <div className="container">
          {props.table.data.length > 0 &&
            <React.Fragment>
              <Table
                data={displayData}
                onSort={onSort}
                sort={props.table.sortUnicode}
                sortField={props.table.sortField}
                onRowSelect={onRowSelect}
              />
            </React.Fragment>
          }
          <Paginate pageCount={pageCount} 
                    pageChangeHandler={pageChangeHandler} 
                    currentPage={props.table.currentPage} 
                    size={dataSize} 
                    pageSize={props.pageSize} />
          {
            props.table.row ? <DetailRowView clearRow={onRowSelect.bind(this, null)} person={props.table.row} /> : null
          }
        </div>
      </div>
    )
  }
}

export default Body;
