import { dataService } from "../services/data.service.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export function loadData() {
    return (dispatch) => {
        dataService.query()
            .then(data => {
                //debugger
                //console.log('Data from DB:', data)
                dispatch({
                    type: 'SET_DATA',
                    data
                })
            })
            .catch(err => {
                showErrorMsg('Cannot load data')
                //console.log('Cannot load data', err)
            })
            return
    }
}

export function onRemoveData(dataId) {
    return (dispatch, getState) => {
        dataService.remove(dataId)
            .then(() => {
                //console.log('Deleted Succesfully!');
                dispatch({
                    type: 'REMOVE_DATA',
                    dataId
                })
                showSuccessMsg('Data removed')
            })
            .catch(err => {
                showErrorMsg('Cannot remove data')
                //console.log('Cannot remove data', err)
            })
    }
}

export function onAddData() {
    return (dispatch) => {
        const data = dataService.getEmptyData();
        dataService.save(data)
            .then(savedData => {
                //console.log('Added Data', savedData);
                dispatch({
                    type: 'ADD_DATA',
                    data: savedData
                })
                showSuccessMsg('Data added')
            })
            .catch(err => {
                showErrorMsg('Cannot add data')
                //console.log('Cannot add data', err)
            })
    }
}

export function onEditData(dataToSave) {
    return (dispatch) => {
        dataService.save(dataToSave)
            .then(savedData => {
                //console.log('Updated Data:', savedData);
                dispatch({
                    type: 'UPDATE_DATA',
                    data: savedData
                })
                showSuccessMsg('Data updated')
            })
            .catch(err => {
                showErrorMsg('Cannot update data')
                //console.log('Cannot save data', err)
            })
    }
}

// Demo for Optimistic Mutation (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveDataOptimistic(dataId) {

    return (dispatch, getState) => {

        dispatch({
            type: 'REMOVE_DATA',
            dataId
        })
        showSuccessMsg('Data removed')

        dataService.remove(dataId)
            .then(() => {
                //console.log('Server Reported - Deleted Succesfully');
            })
            .catch(err => {
                showErrorMsg('Cannot remove data')
                //console.log('Cannot load data', err)
                dispatch({
                    type: 'UNDO_REMOVE_DATA',
                })
            })
    }
}