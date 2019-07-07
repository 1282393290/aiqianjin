import { GETBORROWCOUNT,GETCOMMONLIST}  from '@/store/actions/actionTypes.js'
const initState={
  borrowCount:{name:'lzk'},
  commonList:[]
}

export const aboutReducer = (state=initState,action)=>{
  // if(action.type==GETBORROWCOUNT){
  //     return {
  //       borrowCount:action.borrowCount.bean.borrowCount
  //     }
  // }
  // if((action.type==GETCOMMONLIST){
  //   return {
  //     commonList:action.commonList.bean
  //   }
  // }
  //   return state
    switch(action.type){
      case GETBORROWCOUNT:
      return {
              borrowCount:action.borrowCount.bean.borrowCount
            }
      case GETCOMMONLIST:
      return {
              commonList:action.commonList.bean
          }
          default:
          return state
    }
    
  
}