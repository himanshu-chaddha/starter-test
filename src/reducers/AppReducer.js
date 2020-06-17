const intialState = {
    userList:[],
    userData:[],
    userPosts:[],
    postList:[]
}

const AppReducer = (state = intialState,action) => {
    switch(action.type) {
        case "SET_USER_LIST_DATA": {
            return {
                ...state,
                userList: action.payload.userList
            }
        }
        case "SET_USER_DATA": {
            return {
                ...state,
                userData: action.payload.userData
            }
        }
        case "SET_USER_POSTS": {
            return {
                ...state,
                userPosts: action.payload.userPosts
            }
        }
        case "SET_POST_LIST_DATA": {
            return {
                ...state,
                postList: action.payload.userList
            }
        }
        default:
            return state;
    }
}

export default AppReducer;