const SET_USER_LIST_DATA = "SET_USER_LIST_DATA";
const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_POSTS = "SET_USER_POSTS";

export function getUserList(payload) {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        dispatch({
          type: SET_USER_LIST_DATA,
          payload: {
            userList: responseData,
          },
        });
      })
      .catch((err) => {
        console.log("API Problem");
      });
  };
}


export function getUserData(payload) {
    const url = `https://jsonplaceholder.typicode.com/users/${payload.id}`;
    return (dispatch) => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          dispatch({
            type: SET_USER_DATA,
            payload: {
              userData: responseData,
            },
          });
        })
        .catch((err) => {
          console.log("API Problem");
        });
    };
  }

  export function sendDeleteRequest(payload) {
    const url = `https://jsonplaceholder.typicode.com/posts/${payload.id}`;
    return (dispatch) => {
      fetch(url,{
          method:"DELETE",
      })
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
            console.log('Deleted')
        })
        .catch((err) => {
          console.log("API Problem");
        });
    };
  }

  export function getUserPosts(payload) {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${payload.id}`;
    return (dispatch) => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          dispatch({
            type: SET_USER_POSTS,
            payload: {
              userPosts: responseData,
            },
          });
        })
        .catch((err) => {
          console.log("API Problem");
        });
    };
  }

  export function createUserPost(payload) {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    return (dispatch) => {
      fetch(url,{
          method:"POST",
          body:payload
      })
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
        })
        .catch((err) => {
          console.log("API Problem");
        });
    };
  }
