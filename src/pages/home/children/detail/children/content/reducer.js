import 'whatwg-fetch'
import Http from '../../../../../../utils/Http'
import api from '../../../../../../utils/api'

const initialState = {
    DetailList:[],
    CommentList:{},
    infoList:[]
}

// 同步action
export const setDetailList = (val)=>({
    type:'setDetailList',
    value:val
})

export const setCommentList = (val)=>({
    type:'setCommentList',
    value:val
})

// 异步action
export const requestDetailData = (detailId,objectType)=>async(dispatch)=>{
    let result = await Http.get(api.DETAIL_DATA_API,{
        pageSize:6,
        objectType:objectType,
        objectId:detailId,
    })
    let action = setDetailList(result.data);
    dispatch(action);
}

// 请求评论数据
export const requestCommentList = (detailId,objectType,lastId)=>async(dispatch)=>{
    let result = await Http.get(api.COMMENT_LIST_NEWS,{
        lastId:lastId,
        lastRecommend:0,
        objType:objectType,
        objId:detailId,
    })
    let action = setCommentList(result.data);
    dispatch(action);
}
// 请求更多的评论数据


// 
export default (state = initialState,action)=>{
    switch(action.type){
        case 'setDetailList':
           return{
               ...state,
               DetailList:action.value
            }
        case 'setCommentList':
            return{
                ...state,
                CommentList:action.value
            }
        default:
           return state;
    }
}