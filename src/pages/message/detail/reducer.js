import 'whatwg-fetch'
import Http from '../../../utils/Http'

const initialState = {
    detailInfo: {},
    commentList:[],
    hotcommentList:[],
}

// 同步action
export const setDetailInfo = (val)=>({
    type:'setDetailInfo',
    value:val
})
export const setCommentList = (val)=>({
    type:'setCommentList',
    value:val
})
export const setHotCommentList =(val)=>({
    type:'setHotCommentList',
    value:val
})

// 异步action 请求详情页数据
export const requestDetailInfo = (params) => async (dispatch)=>{
    var result = await Http.get('https://opser.api.dgtle.com/v1/article/view/'+params.id,{
        expand:'is_like,is_favourite,likelist,is_focus'
    })
    if(!result.id){
        var result = await Http.get('https://opser.api.dgtle.com/v1/news/detail/'+params.id,{
            expand:'is_like,is_favourite,likelist,is_focus'
        })
    }
    console.log(result);
    let action = setDetailInfo(result);
    dispatch(action);
}


// 请求热评数据
export const requestHotCommentList = (params) => async (dispatch)=>{
    let url = 'https://opser.api.dgtle.com/v1/hot-comments/'+params.id+'/'+params.type;
    let result = await Http.get(url);
    console.log(result);
    let action = setHotCommentList(result.items);
    dispatch(action);
}

// 请求评论数据
export const requestCommentList = (params) => async (dispatch)=>{
    
    let url = 'https://opser.api.dgtle.com/v1/comments/'+params.id+'/'+params.type
    let result = await Http.get(url);
    console.log(result.items);
    let action = setCommentList(result.items);
    dispatch(action);
}



export default (state = initialState, action)=>{
    switch (action.type) {
      case 'setDetailInfo':
        return {
          ...state,
          detailInfo: action.value
        }
      case 'setHotCommentList':
        return {
          ...state,
          hotcommentList: action.value
        }
      case 'setCommentList':
        return {
          ...state,
          commentList: action.value
        }
      default:
        return state;
    }
    
  }