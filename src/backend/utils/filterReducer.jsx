function filterReducer(state, action) {
  switch (action.type) {
    case "RESET":
      return { ...state, filterSelect: action.payload };
    case "SET_CATEGORY":
      return { ...state, filterSelect: action.payload };
    default:
      return { ...state };
  }
}
export { filterReducer };
