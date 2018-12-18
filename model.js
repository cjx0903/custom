export const initialState = {
    tourLine: {},
    advisorInfo: {},
    responseStatus: {},
    lineInfo: {},
    currentQuery: {},
    isShowTourLineAndQuotePrice: false,
    authorizationLetterAttachmentId: '',
    isShowLoading: false, //是否显示加载中gif
    isShowLoadingFail: false, //是否显示加载失败
    isShowMask: false, //是否显示遮罩层
    isShowHotelMask: false, //是否显示酒店弹框
    isShowSightMask: false, //是否显示景点弹框
    isShowHotelStore:false, //是否显示酒店评分
    isShowHotelSever:false, //是否显示酒店设备
    isHasHotelInfo:false, //是否显示酒店信息
    commentItems:[], //酒店点评信息
    isShowComment:false, //是否显示酒店点评
    hotelName:'', //酒店名字
    hotelMark:'', //酒店评分
    hotelAddress:'', //酒店地址
    htlServiceItems:[],  //酒店设备列表
    bigPicItems:[], //酒店大图
    smallPicItems:[], //酒店小图
    bigPicItemsSight: [], //景点大图
    smallPicItemsSight: [], //景点小图
    isShowSceneScore: false, //是否显示景点评分
    isShowSceneTime: false, //是否显示景点开放时间
    isShowCommentSight: false, //是否显示景点点评信息
    commentItemsSight: [], //是否显示景点点评列表
    sceneTitle: '', //景点标题
    sceneNameEn: '', //景点英文标题
    sceneMark: '', //景点评分
    sceneTime: '', //景点开放时间
    sceneAddress: '', //景点地址
    sceneIntroduce: '', //景点介绍
    sightImgPoiIdArr: [],
    resourcePoiIdArr: [],
    headSwiperImg: [], //首页轮播图片
    dayCountTourlineInfo: 0
}