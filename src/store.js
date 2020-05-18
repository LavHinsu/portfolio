function reducer(state = { data: "", user_data: "" }, action) {

  switch (action.type) {

    case "FETCH_DATA":
      if (action.data != null) {
        return {
          ...state,
          data: action.data
        };
      }
      break

    case "FETCH_USER_DATA":
      return {
        ...state,
        user_data: action.data
      }
    default:
      return state;
  }
}

export default reducer;
