import 'whatwg-fetch'
import Http from '../../../../../utils/Http'
import api from '../../../../../utils/api'

const initialState = {
    ContentList: []
}

// 同步action
export const setContentList = (val)=>({
    type:'setContentList',
    value:val
})
// 合并数据
export const setMoreContentList = (val)=>({
    type:'setMoreContentList',
    value:val
})


// 异步action
export const requestContentData = () => async (dispatch)=>{
    let {data} = await Http.get(api.INDEX_DATA_API,{
        contentType:0,
        p:1,
        ps:10,
        recommendLevel:3,
        activity:0
    })
    let action = setContentList(data);
    dispatch(action);
}
// 请求更多数据
let p = 1;
export const requestMoreContentData = ()=> async (dispatch)=>{
    p = p + 1;
    let {data} = await Http.get(api.INDEX_DATA_API,{
        contentType:0,
        p:p,
        ps:10,
        recommendLevel:3,
        activity:0
    })
    let action = setMoreContentList(data);
    dispatch(action);
}




export default (state = initialState, action)=>{
    switch (action.type) {
      case 'setContentList':
        return {
          ...state,
          ContentList: action.value.content
        }
      case 'setMoreContentList':
        return {
          ...state,
          ContentList: [...state.ContentList,...action.value.content]
        }
      default:
        return state;
    }
    
  }