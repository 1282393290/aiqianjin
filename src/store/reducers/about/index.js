import { GETBORROWCOUNT }  from '@/store/actions/actionTypes.js'
const initState={
  borrowCount:{name:'lzk'}
}

export const aboutReducer = (state=initState,action)=>{
  if(action.type==GETBORROWCOUNT){
      return {
        borrowCount:action.borrowCount.bean.borrowCount
      }
  }else{
    return state
  }
  
}