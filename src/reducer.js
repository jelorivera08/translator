const reducer = (state = { wordToBeTranslated: '' }, action) => {
  switch (action.type) {
    case 'UPDATE_WORD_TO_BE_TRANSLATED':
      state = { ...state, wordToBeTranslated: action.value };
      break;
    default:
      return state;
  }
  return state;
};

export default reducer;
