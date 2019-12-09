import Http from '../../../utils/Http'
import api from '../../../utils/api'

const initialState = {
    createInfo:[],
}

export const setCreateInfo = (val)=>({
    type:'setCreateInfo',
    value:val
})

// 获取动态文章类型数据
export const requestCreateData = (params) => async (dispatch)=>{
    let data = await Http.get(api.CREATEINFO_API,{
        uid:params.uid,
        type:params.type,
        page:params.page
    })
    let action = setCreateInfo(data.items);
    dispatch(action);
}


export default (state = initialState, action)=>{
    switch (action.type) {
      case 'setCreateInfo':
        return {
          ...state,
          createInfo: action.value
        }
      default:
        return state;
    }
}