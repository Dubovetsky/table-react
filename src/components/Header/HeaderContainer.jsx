import { addNewData, selectDataBase, searchSetItem, changeHandler, searchResetItem, addItemData, createItemData } from '../../Redux/reducer';
import Header from './Header';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        table: state.App.tableDataBase,
        search: state.App.table.search,
        size: state.App.table.data.length,
        newItem: state.App.newItem,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData : async (url) => { 
            const response = await fetch(url);     
            const newData = await response.json();
            let action = addNewData(newData)
            dispatch(action);
        },
        modeSelectHandler: () => {
            dispatch(selectDataBase())
        },
        searchHandler: (val) => {
            dispatch(searchSetItem(val))
        },
        pageChangeReset: () => {
            dispatch(changeHandler(0))
        },
        searchResetItem: () => {
            dispatch(searchResetItem())
        },
        addItemData: () => {
            dispatch(addItemData())
        },
        createItemData: (item) => {
            dispatch(createItemData(item))
        }
    }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default MainPageContainer;