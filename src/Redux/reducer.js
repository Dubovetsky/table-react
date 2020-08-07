import _ from 'lodash';

const ADD_NEW_DATA = 'ADD_NEW_DATA';
const ADD_ITEM_DATA = 'ADD_ITEM_DATA';
const CREATE_ITEM_DATA = 'CREATE_ITEM_DATA';
const SORT_BY_COLUMNS = 'SORT_BY_COLUMNS';
const SEARCH_SET_ITEM = 'SEARCH_SET_ITEM';
const SELECT_DATA_BASE = 'SELECT_DATA_BASE';
const SELECT_ROW_DATE = 'SELECT_ROW_DATE';
const CHANGE_HANDLER = 'CHANGE_HANDLER';

let initialState = {
    newItem: {
        validItem: false,
        createItem: {
            address: {
                city: undefined,
                state: undefined,
                streetAddress: undefined,
                zip: undefined,
            },
            description: "null",
            email: undefined,
            firstName: undefined,
            id: undefined,
            lastName: undefined,
            phone: undefined
        }
    },
    table: {
        isModeSelected: false,
        isLoading: false,
        data: [],
        search: '',
        sort: 'asc',
        sortUnicode: '\u2191',
        sortField: 'id',
        row: null,
        currentPage: 0,
    },
    tableDataBase: {
        sUrl: `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`,
        bUrl: `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    }
}

const reducer = (state = initialState, action) => {
    let newState = { ...state, table: { ...state.table }, newItem: { ...state.newItem } };
    switch (action.type) {
        case ADD_NEW_DATA:
            newState.table.isLoading = false;
            newState.table.data = _.orderBy(action.nData, newState.table.sortField, newState.table.sort);
            return newState;
        case ADD_ITEM_DATA:
            newState.table.data = [newState.newItem.createItem, ...newState.table.data];
            newState.newItem = initialState.newItem;
            newState.table.search = initialState.table.search;
            newState.table.currentPage = initialState.table.currentPage;
            newState.table.sortField = initialState.table.sortField;
            newState.table.sort = initialState.table.sort;
            newState.table.sortUnicode = newState.table.sort === initialState.table.sort ? '\u2191' : '\u2193';
            return newState;
        case SORT_BY_COLUMNS:
            let cloneData = newState.table.data.concat();
            if (newState.table.sortField === action.nData) {
                newState.table.sort = newState.table.sort === initialState.table.sort ? 'desc' : 'asc';
            }
            newState.table.sortUnicode = newState.table.sort === initialState.table.sort ? '\u2191' : '\u2193';
            newState.table.sortField = action.nData;
            newState.table.data = _.orderBy(cloneData, newState.table.sortField, newState.table.sort);
            return newState;
        case SEARCH_SET_ITEM:
            newState.table.search = action.nData;
            return newState;
        case SELECT_DATA_BASE:
            newState.table.isModeSelected = true;
            newState.table.isLoading = true;
            return newState;
        case SELECT_ROW_DATE:
            newState.table.row = action.nData;
            return newState;
        case CHANGE_HANDLER:
            newState.table.currentPage = action.nData;
            return newState;
        case CREATE_ITEM_DATA:
            newState.newItem.createItem = { ...newState.newItem.createItem, ...action.nData };
            newState.newItem.validItem = !!newState.newItem.createItem.id &&
                                         !!newState.newItem.createItem.firstName &&
                                         !!newState.newItem.createItem.lastName &&
                                         !!newState.newItem.createItem.email &&
                                         !!newState.newItem.createItem.phone;
            return newState;
        default:
            return newState;
    }
}

export const addNewData = (newData) => ({ type: ADD_NEW_DATA, nData: newData });
export const addItemData = () => ({ type: ADD_ITEM_DATA });
export const createItemData = (itemData) => ({ type: CREATE_ITEM_DATA, nData: itemData });
export const sortByColumns = (val) => ({ type: SORT_BY_COLUMNS, nData: val });
export const searchSetItem = (search) => ({ type: SEARCH_SET_ITEM, nData: search });
export const searchResetItem = () => ({ type: SEARCH_SET_ITEM, nData: '' });
export const selectDataBase = () => ({ type: SELECT_DATA_BASE });
export const selectRowDate = (row) => ({ type: SELECT_ROW_DATE, nData: row });
export const changeHandler = (selected) => ({ type: CHANGE_HANDLER, nData: selected });

export const getFilteredData = (props) => {
    if (!props) {
        return [];
    }
    if (!props.search) {
        return props.data
    }
    let result = props.data.filter(item => {
        return (
            item["firstName"].toLowerCase().includes(props.search.toLowerCase()) ||
            item["lastName"].toLowerCase().includes(props.search.toLowerCase()) ||
            item["email"].toLowerCase().includes(props.search.toLowerCase()) ||
            item["phone"].toLowerCase().includes(props.search.toLowerCase())
        );
    });
    if (!result.length) {
        result = props.data
    }
    else return result;
};

export const pageCount = (props) => {
    let data = getFilteredData(props.table) || []
    return Math.ceil(data.length / pageSize());
};

export const displayData = (props) => {
    let chunk = _.chunk(getFilteredData(props.table), pageSize())[props.table.currentPage];
    return chunk ? chunk : [];
};

export const pageSize = () => { return 50; };

export default reducer;
