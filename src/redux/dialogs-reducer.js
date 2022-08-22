import React from 'react';

const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'I doter'},
        {id: 3, message: 'Hi do you speak russia'},
        {id: 4, message: 'Yo'}],

    dialogs: [
        {id: 1, name: 'Oliver'},
        {id: 2, name: 'Jack'},
        {id: 3, name: 'Harry'},
        {id: 4, name: 'Jacob'},
        {id: 5, name: 'Charley'},
        {id: 6, name: 'Thomas'}
    ]
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }

}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer