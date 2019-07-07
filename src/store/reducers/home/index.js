const initState = {
  bannerList: [],
  questionList: [],
  scrollList: [],
  aiyinbaoList: [],
}

export const homeReducer = (state=initState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'GETBANNERLIST':
      newState.bannerList = action.list
      return newState
    case 'GETQUESTIONLIST':
      newState.questionList = action.list
      return newState
    case 'GETSCROLLLIST':
      newState.scrollList = action.list
      return newState
    case 'GETAIYINBAOLIST':
      newState.aiyinbaoList = action.list
      return newState
    default: 
      return state
  }
}