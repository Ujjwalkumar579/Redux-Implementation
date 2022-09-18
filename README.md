# Redux-Implementation![1_BuozvaOrgELROh8Ox1mmjA](https://user-images.githubusercontent.com/69383445/190924105-e6e9d940-cc10-4b5d-bcce-4d6cedada4fa.png)


---- Inside Action.type --- we define how many types of action will doing and which type of action in this project there are two action "Increment" and "Decrement"

---- Inside Action.creator --- we define the functions for the action like in this project we have to incerese value and decrease value so we made two function first was the increaseValue and sec was decreaseVale and inside that we have to returnt the type which we imported from Action.type

---- then we make "Reducer" in reducer function two parameters first was state which is initial state and sec was the action and in body of function we define the swtich case to "    jo type user de ra hai uske hisab se operation perform krna h jese increse aaraha h type me to increment     " the logic part in in reducer function and reducer always return a state "   isliye defult me hamesa return state hota hai   "

---- then RootReducer this is for combineing if you have more than one reducer;

---- then createStore isme bas createStore krna hai or usme rootReducer pass krna h that's it

---- 


