import Http from '../../../utils/Http'
import api from '../../../utils/api'

const initialState = {
    NavigaterList:[],
    TagList:[],
}


// 同步action
export const setNavigaterList = (val)=>({
    type:'setNavigaterList',
    value:val
})

export const setTagList = (val)=>({
    type:'setTagList',
    value:val
})

export const addNavigaterList = (val)=>({
    type:'addNavigaterList',
    value:val
})

// 异步action
export const requestNavigaterData = (url,params)=>async(dispatch)=>{
    let result = await Http.get(url,{
        page:params
    });
    if(params<=1){
        let action = setNavigaterList(result.items);
        dispatch(action);
    } else{
        let action = addNavigaterList(result.items);
        dispatch(action);
    }
}

// 请求内容页面数据
export const requestTagList = ()=>async(dispatch)=>{
    let result = await Http.get(api.NAVIGATER_TAG);
    let action = setTagList(result);
    dispatch(action);
}

export default (state = initialState,action)=>{
    switch(action.type){
        case 'setNavigaterList':
           return{
               ...state,
               NavigaterList:action.value
            }
        case 'setTagList':
            return{
                ...state,
                TagList:action.value
        }
        case 'addNavigaterList':
            return{
                ...state,
                NavigaterList:[...state.NavigaterList,...action.value]
            }
        default:
           return state;
    }
}