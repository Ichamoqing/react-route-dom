// 管理api 
export const HOST = 'http://localhost:3000';

// 获取首页数据
const INDEX_DATA_API = '/api//discoverListNew'

// 获取详情页的数据
const DETAIL_DATA_API = '/api/content/other'

// 获取详情页的评论数据
const COMMENT_LIST_NEWS = '/api/comment/getDetailCommentsNew';

// 获取动态页面的tag标签
const NAVIGATER_TAG = '/v1/news/tag'

// 获取个人用户界面的数据
const USERINFO_API = 'https://opser.api.dgtle.com/v1/user/profile'

// 获取动态文章的数据
const CREATEINFO_API = 'https://opser.api.dgtle.com/v1/user/create-info'


export default {
    INDEX_DATA_API,
    DETAIL_DATA_API,
    COMMENT_LIST_NEWS,
    NAVIGATER_TAG,
    USERINFO_API,
    CREATEINFO_API
}