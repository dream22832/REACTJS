import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";
import React from "react";



let state = {
    posts: [
        {id: 1, message: 'hi, how are you', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20},
        {id: 3, message: "BLALAL", likesCount: 23},
        {id: 4, message: "fDSFSDfsd", likesCount: 21},
    ]
};


/*--------------------------------------------------------------------------------*/


test('length of posts should be incremented', () => {
    //1. test data
    let action =addPostActionCreator("it-kamasutra.com")

    //2. action
    let newState = profileReducer(state  ,action)

    //3. expoctation
    expect(newState.posts.length).toBe(5)

});


/*--------------------------------------------------------------------------------*/


test('message of new post should be correct', () => {
    //1. test data
    let action =addPostActionCreator("it-kamasutra.com")

    //2. action
    let newState = profileReducer(state  ,action)

    //3. expoctation
    expect(newState.posts[4].message).toBe("it-kamasutra.com")
});


/*--------------------------------------------------------------------------------*/


test('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1)

    //2. action
    let newState = profileReducer(state  ,action)

    //3. expoctation
    expect(newState.posts.length).toBe(3)
});


/*--------------------------------------------------------------------------------*/


test(`after deleting length shouldn't be decrement id id is incorrect `, () => {
    //1. test data
    let action = deletePost(10000)

    //2. action
    let newState = profileReducer(state  ,action)

    //3. expoctation
    expect(newState.posts.length).toBe(4)
});


