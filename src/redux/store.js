import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import React from 'react';

export let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'hi, how are you', likesCount: 15 },
                { id: 2, message: "It's my first post", likesCount: 20 },
                { id: 3, message: "LALA", likesCount: 23 },
                { id: 4, message: "fSDKSDefs", likesCount: 21 },
            ],
            newPostText: ""
        },

        dialogsPage: {

            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'I like drink juice' },
                { id: 3, message: 'Hi do you speak russia' },
                { id: 4, message: 'Yo' }],

            dialogs: [
                { id: 1, name: 'Oliver' },
                { id: 2, name: 'Jack ' },
                { id: 3, name: 'Harry ' },
                { id: 4, name: 'Jacob ' },
                { id: 5, name: 'Charley ' },
                { id: 6, name: 'Thomas ' }
            ],
            newMessageBody: ""
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log("State change")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)


        this._callSubscriber(this._state);

    }
}



export default store;

