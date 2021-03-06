const initialState = {
  posts: [],
  following: [],
  followers: [],
};

const currentUser = (state = initialState, action) => {
  let data;

  switch (action.type) {
    case "SIGN_UP":
      data = action.payload;
      return { ...state, ...data };

    case "SIGN_IN":
      data = action.payload;
      return { ...state, ...data };

    case "GET_CURRENT_USER_DATA":
      data = action.payload;
      return { ...state, ...data };

    case "GET_CURRENT_USER_POSTS":
      return { ...state, posts: action.payload };

    case "GET_CURRENT_USER_FOLLOWERS":
      return { ...state, followers: action.payload };

    case "GET_CURRENT_USER_FOLLOWING":
      return { ...state, following: action.payload };

    case "LOGOUT":
      return action.payload;

    default:
      return state;
  }
};

export default currentUser;
