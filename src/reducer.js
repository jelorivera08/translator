const reducer = (
  state = {
    wordToBeTranslated: '',
    to: '',
    translatedWord: '',
    translating: false,
    errorEncountered: false
  },
  action
) => {
  switch (action.type) {
    case 'UPDATE_WORD_TO_BE_TRANSLATED':
      state = { ...state, wordToBeTranslated: action.value };
      break;
    case 'TO_LANGUAGE':
      state = { ...state, to: action.value };
      break;
    case 'TRANSLATE_WORD':
      state = {
        ...state,
        translatedWord: action.translatedWord,
        translating: false
      };
      break;
    case 'TRANSLATE_API_CALL':
      state = { ...state, translating: true };
      break;
    case 'ERROR_IS_ENCOUNTERED':
      state = { ...state, errorEncountered: true };
      break;
    case 'ERROR_AVERTED':
      state = { ...state, errorEncountered: false };
      break;
    default:
      return state;
  }
  console.log(action.type, action.state);
  return state;
};

export default reducer;
