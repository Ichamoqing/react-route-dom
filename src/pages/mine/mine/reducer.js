import Http from '../../../utils/Http'
import api from '../../../utils/api'

const initialState = {
    userinfo:{}
}

export const setUserinfo = (val)=>({
    type:'setUserinfo',
    value:val
})

// 获取用户界面的数据
export const requestUserData = (params) => async (dispatch)=>{
    let data = await Http.get(api.USERINFO_API,{
        uid:params
    })
    let action = setUserinfo(data);
    dispatch(action);
}





export default (state = initialState, action)=>{
    switch (action.type) {
      case 'setUserinfo':
        return {
          ...state,
          userinfo: action.value
        }
      default:
        return state;
    }
}