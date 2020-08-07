import { sortByColumns, selectRowDate, changeHandler, pageSize, getFilteredData, pageCount, displayData } from '../../Redux/reducer';
import Body from './Body';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        table: state.App.table
    }
}

const mapDispatchToProps = (dispatch) => {


    return {
        pageSize: pageSize,
        onSort: (val) => {
            dispatch(sortByColumns(val))
        },
        onRowSelect: (row) => {
            dispatch(selectRowDate(row))
        },
        pageChangeHandler: ({selected}) => {
            dispatch(changeHandler(selected))
        },
        getFilteredData: getFilteredData,
        pageCount: pageCount,
        displayData: displayData
    }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(Body);

export default MainPageContainer;