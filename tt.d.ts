/**
 * 抖音小游戏 API TypeScript 类型定义
 * 基于抖音开放平台官方文档生成
 * @see https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/develop/api/overview
 * @date 2025-08-18
 */

// ==================== 基础类型定义 ====================

/**
 * 通用回调函数基础类型
 * @description 所有API回调的基础接口，提供统一的成功、失败和完成回调
 */
interface BaseCallback<T = any> {
    /** 
     * 接口调用成功的回调函数
     * @param res 成功回调的结果数据
     */
    success?: (res: T) => void;
    /** 
     * 接口调用失败的回调函数
     * @param res 失败回调的错误信息，包含errMsg字段
     */
    fail?: (res: { errMsg: string;[key: string]: any }) => void;
    /** 
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     * @param res 完成回调的结果数据或错误信息
     */
    complete?: (res: T | { errMsg: string;[key: string]: any }) => void;
}

/**
 * 基础选项类型，继承自BaseCallback
 * @description 为需要额外配置参数的API提供基础类型
 */
interface BaseOptions extends BaseCallback<any> { }

/**
 * 安全区域信息
 * @description 设备屏幕的安全显示区域，避开刘海、圆角等区域
 */
interface SafeArea {
    /** 安全区域左上角横坐标，单位px */
    left: number;
    /** 安全区域右下角横坐标，单位px */
    right: number;
    /** 安全区域左上角纵坐标，单位px */
    top: number;
    /** 安全区域右下角纵坐标，单位px */
    bottom: number;
    /** 安全区域的宽度，单位逻辑像素 */
    width: number;
    /** 安全区域的高度，单位逻辑像素 */
    height: number;
}

/**
 * 设备性能评分
 * @description 设备各项性能指标的评分，用于性能优化和适配
 */
interface DeviceScore {
    /** CPU 性能分数，数值越高性能越好 */
    cpu: number;
    /** GPU 性能分数，数值越高性能越好 */
    gpu: number;
    /** 内存性能分数，数值越高性能越好 */
    memory: number;
    /** 设备综合性能评分 */
    overall: number;
}

// ==================== 系统信息相关 ====================

/**
 * 系统信息
 * @description 设备和系统的详细信息，包括硬件参数、软件版本等
 */
interface SystemInfo {
    /** 操作系统版本信息 */
    system: string;
    /** 操作系统平台类型 */
    platform: 'ios' | 'android';
    /** 设备品牌名称 */
    brand: string;
    /** 设备型号 */
    model: string;
    /** 宿主应用版本号 */
    version: string;
    /** 宿主应用名称 */
    appName: 'Toutiao' | 'Douyin' | 'news_article_lite' | 'douyin_lite' | 'aweme_hotsoon' | 'XiGua' | 'novel_fm' | 'novelapp';
    /** 客户端基础库版本 */
    SDKVersion: string;
    /** 屏幕宽度，单位px */
    screenWidth: number;
    /** 屏幕高度，单位px */
    screenHeight: number;
    /** 可使用窗口宽度，单位px */
    windowWidth: number;
    /** 可使用窗口高度，单位px */
    windowHeight: number;
    /** 设备安全区域信息 */
    safeArea: SafeArea;
    /** 设备像素比 */
    pixelRatio: number;
    /** 设备性能评分信息 */
    deviceScore: DeviceScore;
    /** 设备当前方向 */
    deviceOrientation: 'portrait' | 'landscape';
}

// ==================== 生命周期相关 ====================

/**
 * 来源信息
 * @description 小程序启动时的来源应用信息
 */
interface ReferrerInfo {
    /** 来源小程序、公众号或App的appId */
    appId: string;
    /** 来源小程序传递的数据 */
    extraData: Record<string, any>;
}

/**
 * 启动参数
 * @description 小游戏启动时获取的参数信息
 */
interface LaunchOptions {
    /** 启动参数，包含自定义字段和特殊字段 */
    query: Record<string, any>;
    /** 启动场景值 */
    scene: string;
    /** 小游戏基本信息，包括宿主Id，gameId等参数 */
    extra: {
        /** 宿主id */
        aid: number;
        /** 小游戏appId */
        appId: string;
        /** 小游戏的版本信息 */
        mpVersion: string;
        /** 启动场景的补充信息 */
        launch_from?: string;
    };
}

/**
 * 小游戏显示回调参数
 * @description 小游戏从后台切换到前台时的回调参数
 */
interface OnShowCallbackResult {
    /** 启动时的query参数 */
    query: Record<string, string>;
    /** 启动场景值 */
    scene: string;
    /** 来源信息，从其他应用进入时返回 */
    refererInfo: ReferrerInfo;
    /** 唤起小游戏页面的来源方式 */
    showFrom: 0 | 10;
    /** 启动场景字段，可选 */
    launch_from?: string;
    /** 启动位置字段，可选 */
    location?: string;
}

// ==================== 网络请求相关 ====================

/**
 * 网络请求参数
 * @description HTTP网络请求的配置选项
 */
interface RequestOption extends BaseCallback<RequestSuccessCallbackResult> {
    /** 开发者服务器接口地址 */
    url: string;
    /** 请求的参数数据，支持 object、array、ArrayBuffer 类型 */
    data?: string | Record<string, any> | ArrayBuffer;
    /** 设置请求的header，默认为 {"content-type": "application/json"} */
    header?: Record<string, string>;
    /** HTTP请求方法，默认为 GET */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS';
    /** 期望返回的数据类型，支持 json、string，默认为 json */
    dataType?: 'json' | 'string';
    /** 期望响应的数据类型，支持 text 或 arraybuffer，默认为 text */
    responseType?: 'text' | 'arraybuffer';
}

/**
 * 网络请求成功回调结果
 * @description HTTP请求成功时的响应数据
 */
interface RequestSuccessCallbackResult {
    /** 开发者服务器返回的数据 */
    data: string | Record<string, any> | ArrayBuffer;
    /** 开发者服务器返回的HTTP状态码 */
    statusCode: number;
    /** 开发者服务器返回的HTTP Response Header */
    header: Record<string, string>;
    /** 调用结果信息 */
    errMsg: string;
}

/**
 * 网络请求任务对象
 * @description 用于控制网络请求的任务对象
 */
interface RequestTask {
    /** 中断请求任务 */
    abort(): void;
    /** 监听HTTP Response Header事件 */
    onHeadersReceived(callback: (res: { header: any }) => void): void;
    /** 取消监听HTTP Response Header事件 */
    offHeadersReceived(callback?: (res: { header: any }) => void): void;
}

/**
 * 请求性能信息
 * @description 网络请求的性能统计数据
 */
interface RequestProfile {
    /** 第一个 HTTP 重定向发生时的时间戳 */
    redirectStart: number;
    /** 最后一个 HTTP 重定向完成时的时间戳 */
    redirectEnd: number;
    /** 组件准备好使用 HTTP 请求抓取资源的时间戳 */
    fetchStart: number;
    /** DNS 域名查询开始的时间戳 */
    domainLookupStart: number;
    /** DNS 域名查询完成的时间戳 */
    domainLookupEnd: number;
    /** HTTP（TCP） 开始建立连接的时间戳 */
    connectStart: number;
    /** HTTP（TCP） 完成建立连接的时间戳 */
    connectEnd: number;
    /** HTTPS 连接开始的时间戳 */
    SSLconnectionStart: number;
    /** HTTPS 连接完成的时间戳 */
    SSLconnectionEnd: number;
    /** HTTP 请求读取真实文档开始的时间戳 */
    requestStart: number;
    /** HTTP 请求读取真实文档结束的时间戳 */
    requestEnd: number;
    /** HTTP 响应全部接收完成的时间戳 */
    responseStart: number;
    /** HTTP 响应全部接收完成的时间戳 */
    responseEnd: number;
    /** 当次请求连接过程中实时 rtt */
    rtt: number;
    /** 评估的网络状态 slow 2g/2g/3g/4g */
    estimate_nettype: string;
    /** 协议层根据多个请求评估的 rtt */
    httpRttEstimate: number;
    /** 协议层根据多个请求评估的带宽 */
    transportRttEstimate: number;
}

/** 下载文件参数 */
interface DownloadFileOption extends BaseCallback<DownloadFileSuccessCallbackResult> {
    /** 下载资源的 url */
    url: string;
    /** 指定文件下载后存储的路径 */
    filePath?: string;
    /** HTTP 请求的 Header，Header 中不能设置 Referer */
    header?: Record<string, string>;
}

/** 下载文件成功回调结果 */
interface DownloadFileSuccessCallbackResult {
    /** 临时文件路径 */
    tempFilePath: string;
    /** 网络请求过程中一些调试信息 */
    profile?: RequestProfile;
    /** 调用结果 */
    errMsg: string;
}

/** 下载任务对象 */
interface DownloadTask {
    /** 中断下载任务 */
    abort(): void;
    /** 监听下载进度变化事件 */
    onProgressUpdate(callback: (res: { progress: number; totalBytesWritten: number; totalBytesExpectedToWrite: number }) => void): void;
    /** 取消监听下载进度变化事件 */
    offProgressUpdate(callback?: (res: { progress: number; totalBytesWritten: number; totalBytesExpectedToWrite: number }) => void): void;
    /** 监听 HTTP Response Header 事件 */
    onHeadersReceived(callback: (res: { header: any }) => void): void;
    /** 取消监听 HTTP Response Header 事件 */
    offHeadersReceived(callback?: (res: { header: any }) => void): void;
}

/** 上传文件参数 */
interface UploadFileOption extends BaseCallback<UploadFileSuccessCallbackResult> {
    /** 开发者服务器地址 */
    url: string;
    /** 要上传文件资源的路径 */
    filePath: string;
    /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
    name: string;
    /** HTTP 请求 Header，Header 中不能设置 Referer */
    header?: Record<string, string>;
    /** HTTP 请求中其他额外的 form data */
    formData?: Record<string, any>;
}

/** 上传文件成功回调结果 */
interface UploadFileSuccessCallbackResult {
    /** 开发者服务器返回的数据 */
    data: string;
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number;
    /** 调用结果 */
    errMsg: string;
}

/** 上传任务对象 */
interface UploadTask {
    /** 中断上传任务 */
    abort(): void;
    /** 监听上传进度变化事件 */
    onProgressUpdate(callback: (res: { progress: number; totalBytesSent: number; totalBytesExpectedToSend: number }) => void): void;
    /** 取消监听上传进度变化事件 */
    offProgressUpdate(callback?: (res: { progress: number; totalBytesSent: number; totalBytesExpectedToSend: number }) => void): void;
    /** 监听 HTTP Response Header 事件 */
    onHeadersReceived(callback: (res: { header: any }) => void): void;
    /** 取消监听 HTTP Response Header 事件 */
    offHeadersReceived(callback?: (res: { header: any }) => void): void;
}

/** 连接 WebSocket 参数 */
interface ConnectSocketOption extends BaseCallback {
    /** 开发者服务器 wss 接口地址 */
    url: string;
    /** HTTP Header，Header 中不能设置 Referer */
    header?: Record<string, string>;
    /** 子协议数组 */
    protocols?: string[];
}

/** WebSocket 任务对象 */
interface SocketTask {
    /** 通过 WebSocket 连接发送数据 */
    send(option: { data: string | ArrayBuffer; success?: () => void; fail?: (res: any) => void; complete?: () => void }): void;
    /** 关闭 WebSocket 连接 */
    close(option?: { code?: number; reason?: string; success?: () => void; fail?: (res: any) => void; complete?: () => void }): void;
    /** 监听 WebSocket 连接打开事件 */
    onOpen(callback: (res: { header: any }) => void): void;
    /** 监听 WebSocket 接受到服务器的消息事件 */
    onMessage(callback: (res: { data: string | ArrayBuffer }) => void): void;
    /** 监听 WebSocket 错误事件 */
    onError(callback: (res: { errMsg: string }) => void): void;
    /** 监听 WebSocket 连接关闭事件 */
    onClose(callback: (res: { code: number; reason: string }) => void): void;
}

/** 发送 WebSocket 消息参数 */
interface SendSocketMessageOption extends BaseCallback {
    /** 需要发送的内容 */
    data: string | ArrayBuffer;
}

/** 关闭 WebSocket 连接参数 */
interface CloseSocketOption extends BaseCallback {
    /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因 */
    code?: number;
    /** 一个可读的字符串，表示连接被关闭的原因 */
    reason?: string;
}

// ==================== 存储相关 ====================

/**
 * 设置本地存储的参数接口
 * 用于将数据存储到本地缓存中
 */
interface SetStorageOption extends BaseCallback {
    /** 本地缓存中指定的 key，用作存储标识符 */
    key: string;
    /** 需要存储的内容，支持任意类型的数据 */
    data: any;
}

/**
 * 获取本地存储的参数接口
 * 用于从本地缓存中读取指定key的数据
 */
interface GetStorageOption extends BaseCallback<GetStorageSuccessCallbackResult> {
    /** 本地缓存中指定的 key，用于查找对应的存储数据 */
    key: string;
}

/**
 * 获取存储成功的回调结果
 * 包含从本地缓存中读取到的数据和操作状态
 */
interface GetStorageSuccessCallbackResult {
    /** key对应的存储内容，类型与存储时保持一致 */
    data: any;
    /** 调用结果信息，通常为 "getStorage:ok" */
    errMsg: string;
}

/**
 * 移除本地存储的参数接口
 * 用于删除本地缓存中指定key的数据
 */
interface RemoveStorageOption extends BaseCallback {
    /** 本地缓存中指定的 key，用于标识要删除的存储项 */
    key: string;
}

// ==================== UI 交互相关 ====================

/**
 * 显示消息提示框的参数接口
 * 用于在页面中显示临时的消息提示
 */
interface ShowToastOption extends BaseCallback {
    /** 提示的内容文本，显示在Toast中央 */
    title: string;
    /** 图标类型，决定Toast显示的图标样式 */
    icon?: 'success' | 'loading' | 'none' | 'fail';
    /** 自定义图标的本地路径，当icon为none时可使用 */
    image?: string;
    /** 提示的延迟时间，单位毫秒，默认1500ms */
    duration?: number;
    /** 是否显示透明蒙层，防止触摸穿透，默认false */
    mask?: boolean;
}

/**
 * 显示模态对话框的参数接口
 * 用于显示一个包含标题、内容和操作按钮的模态对话框
 */
interface ShowModalOption extends BaseCallback<ShowModalSuccessCallbackResult> {
    /** 提示的标题文本，显示在对话框顶部 */
    title?: string;
    /** 提示的内容文本，显示在对话框主体部分 */
    content?: string;
    /** 是否显示取消按钮，默认为true */
    showCancel?: boolean;
    /** 取消按钮的文字，最多 4 个字符，默认为"取消" */
    cancelText?: string;
    /** 取消按钮的文字颜色，支持十六进制颜色值 */
    cancelColor?: string;
    /** 确认按钮的文字，最多 4 个字符，默认为"确定" */
    confirmText?: string;
    /** 确认按钮的文字颜色，支持十六进制颜色值 */
    confirmColor?: string;
}

/**
 * 显示模态对话框成功回调的结果
 * 包含用户的操作选择信息
 */
interface ShowModalSuccessCallbackResult {
    /** 为 true 时，表示用户点击了确定按钮 */
    confirm: boolean;
    /** 为 true 时，表示用户点击了取消按钮 */
    cancel: boolean;
    /** 调用结果信息，通常为 "showModal:ok" */
    errMsg: string;
}

/**
 * 显示加载提示框的参数接口
 * 用于显示一个带有加载动画的提示框
 */
interface ShowLoadingOption extends BaseCallback {
    /** 提示的内容文本，显示在加载动画下方 */
    title: string;
    /** 是否显示透明蒙层，防止触摸穿透，默认false */
    mask?: boolean;
}

// ==================== 媒体相关 ====================

/** 游戏录屏管理器 */
interface GameRecorderManager {
    /** 开始录屏 */
    start(option?: {
        duration?: number;
        success?: () => void;
        fail?: (res: { errMsg: string }) => void;
        complete?: () => void;
    }): void;

    /** 结束录屏 */
    stop(): void;

    /** 暂停录屏 */
    pause(): void;

    /** 恢复录屏 */
    resume(): void;

    /** 监听录屏开始事件 */
    onStart(callback: () => void): void;

    /** 监听录屏结束事件 */
    onStop(callback: (res: { videoPath: string }) => void): void;

    /** 监听录屏暂停事件 */
    onPause(callback: () => void): void;

    /** 监听录屏恢复事件 */
    onResume(callback: () => void): void;

    /** 监听录屏错误事件 */
    onError(callback: (res: { errMsg: string }) => void): void;
}

/** 录音管理器 */
interface RecorderManager {
    /** 开始录音 */
    start(option?: {
        duration?: number;
        sampleRate?: number;
        numberOfChannels?: number;
        encodeBitRate?: number;
        format?: 'mp3' | 'aac' | 'wav' | 'PCM';
        frameSize?: number;
    }): void;

    /** 暂停录音 */
    pause(): void;

    /** 继续录音 */
    resume(): void;

    /** 停止录音 */
    stop(): void;

    /** 监听录音开始事件 */
    onStart(callback: () => void): void;

    /** 监听录音暂停事件 */
    onPause(callback: () => void): void;

    /** 监听录音继续事件 */
    onResume(callback: () => void): void;

    /** 监听录音结束事件 */
    onStop(callback: (res: { tempFilePath: string }) => void): void;

    /** 监听录音错误事件 */
    onError(callback: (res: { errMsg: string }) => void): void;
}

/** 选择图片参数 */
interface ChooseImageOption extends BaseCallback<ChooseImageSuccessCallbackResult> {
    /** 最多可以选择的图片张数 */
    count?: number;
    /** 所选的图片的尺寸 */
    sizeType?: Array<'original' | 'compressed'>;
    /** 选择图片的来源 */
    sourceType?: Array<'album' | 'camera'>;
}

/** 选择图片成功回调结果 */
interface ChooseImageSuccessCallbackResult {
    /** 图片的本地临时文件路径列表 */
    tempFilePaths: string[];
    /** 图片的本地临时文件列表 */
    tempFiles: Array<{
        path: string;
        size: number;
    }>;
    /** 调用结果 */
    errMsg: string;
}

/** 预览图片参数 */
interface PreviewImageOption extends BaseCallback {
    /** 需要预览的图片链接列表 */
    urls: string[];
    /** 当前显示图片的链接 */
    current?: string;
}

/** 保存图片到相册参数 */
interface SaveImageToPhotosAlbumOption extends BaseCallback {
    /** 图片文件路径，可以是临时文件路径或永久文件路径 */
    filePath: string;
}

/** 压缩图片参数 */
interface CompressImageOption extends BaseCallback<CompressImageSuccessCallbackResult> {
    /** 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径 */
    src: string;
    /** 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效） */
    quality?: number;
}

/** 压缩图片成功回调结果 */
interface CompressImageSuccessCallbackResult {
    /** 压缩后图片的临时文件路径 */
    tempFilePath: string;
    /** 调用结果 */
    errMsg: string;
}

/** 获取图片信息参数 */
interface GetImageInfoOption extends BaseCallback<GetImageInfoSuccessCallbackResult> {
    /** 图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径 */
    src: string;
}

/** 获取图片信息成功回调结果 */
interface GetImageInfoSuccessCallbackResult {
    /** 图片原始宽度，单位px */
    width: number;
    /** 图片原始高度，单位px */
    height: number;
    /** 图片的本地路径 */
    path: string;
    /** 图片的方向 */
    orientation: 'up' | 'down' | 'left' | 'right' | 'up-mirrored' | 'down-mirrored' | 'left-mirrored' | 'right-mirrored';
    /** 图片的格式 */
    type: string;
    /** 调用结果 */
    errMsg: string;
}

/** 选择视频参数 */
interface ChooseVideoOption extends BaseCallback<ChooseVideoSuccessCallbackResult> {
    /** 拍摄视频最长拍摄时间，单位秒 */
    maxDuration?: number;
    /** 默认拉起的是前置或者后置摄像头 */
    camera?: 'back' | 'front';
    /** 视频选择的来源 */
    sourceType?: Array<'album' | 'camera'>;
    /** 是否压缩所选择的视频文件 */
    compressed?: boolean;
}

/** 选择视频成功回调结果 */
interface ChooseVideoSuccessCallbackResult {
    /** 选定视频的临时文件路径 */
    tempFilePath: string;
    /** 选定视频的时间长度 */
    duration: number;
    /** 选定视频的数据量大小 */
    size: number;
    /** 返回选定视频的长 */
    height: number;
    /** 返回选定视频的宽 */
    width: number;
    /** 调用结果 */
    errMsg: string;
}

/** 保存视频到相册参数 */
interface SaveVideoToPhotosAlbumOption extends BaseCallback {
    /** 视频文件路径，可以是临时文件路径也可以是永久文件路径 */
    filePath: string;
}

/** 获取视频信息参数 */
interface GetVideoInfoOption extends BaseCallback<GetVideoInfoSuccessCallbackResult> {
    /** 视频文件路径，可以是临时文件路径也可以是永久文件路径 */
    src: string;
}

/** 获取视频信息成功回调结果 */
interface GetVideoInfoSuccessCallbackResult {
    /** 画面方向 */
    orientation: 'up' | 'down' | 'left' | 'right';
    /** 视频格式 */
    type: string;
    /** 视频长度 */
    duration: number;
    /** 视频大小，单位 kB */
    size: number;
    /** 视频的长，单位 px */
    height: number;
    /** 视频的宽，单位 px */
    width: number;
    /** 视频帧率 */
    fps: number;
    /** 视频的比特率，单位 kbps */
    bitrate: number;
    /** 调用结果 */
    errMsg: string;
}

/** 音频上下文 */
interface InnerAudioContext {
    /** 音频源地址 */
    src: string;
    /** 是否自动播放 */
    autoplay: boolean;
    /** 是否自动循环 */
    loop: boolean;
    /** 是否遵循系统静音开关 */
    obeyMuteSwitch: boolean;
    /** 当前音频总时长，单位 s，只读 */
    readonly duration: number;
    /** 当前音频进度，单位 s，只读 */
    readonly currentTime: number;
    /** 当前音频是否处于暂停状态，只读 */
    readonly paused: boolean;
    /** 当前音频已缓冲部分，只读 */
    readonly buffered: number;
    /** 当前音量，只读，范围 0~1 */
    readonly volume: number;

    /** 播放 */
    play(): void;
    /** 暂停 */
    pause(): void;
    /** 停止 */
    stop(): void;
    /** 跳转到指定位置 */
    seek(position: number): void;
    /** 销毁当前实例 */
    destroy(): void;

    /** 监听音频播放事件 */
    onPlay(callback: () => void): void;
    /** 监听音频暂停事件 */
    onPause(callback: () => void): void;
    /** 监听音频停止事件 */
    onStop(callback: () => void): void;
    /** 监听音频自然播放结束事件 */
    onEnded(callback: () => void): void;
    /** 监听音频播放错误事件 */
    onError(callback: (res: { errMsg: string }) => void): void;
    /** 监听音频加载中事件 */
    onWaiting(callback: () => void): void;
    /** 监听音频进度更新事件 */
    onTimeUpdate(callback: () => void): void;
    /** 监听音频可以开始播放事件 */
    onCanplay(callback: () => void): void;

    /** 取消监听音频播放事件 */
    offPlay(callback?: () => void): void;
    /** 取消监听音频暂停事件 */
    offPause(callback?: () => void): void;
    /** 取消监听音频停止事件 */
    offStop(callback?: () => void): void;
    /** 取消监听音频自然播放结束事件 */
    offEnded(callback?: () => void): void;
    /** 取消监听音频播放错误事件 */
    offError(callback?: (res: { errMsg: string }) => void): void;
    /** 取消监听音频加载中事件 */
    offWaiting(callback?: () => void): void;
    /** 取消监听音频进度更新事件 */
    offTimeUpdate(callback?: () => void): void;
    /** 取消监听音频可以开始播放事件 */
    offCanplay(callback?: () => void): void;
}

// ==================== 文件系统相关 ====================

/** 文件系统管理器 */
interface FileSystemManager {
    /** 读取本地文件内容 */
    readFile(option: {
        filePath: string;
        encoding?: 'ascii' | 'base64' | 'binary' | 'hex' | 'ucs2' | 'ucs-2' | 'utf16le' | 'utf-16le' | 'utf-8' | 'utf8' | 'latin1';
        success?: (res: { data: string | ArrayBuffer }) => void;
        fail?: (res: { errMsg: string }) => void;
        complete?: () => void;
    }): void;

    /** 同步读取本地文件内容 */
    readFileSync(filePath: string, encoding?: string): string | ArrayBuffer;

    /** 写文件 */
    writeFile(option: {
        filePath: string;
        data: string | ArrayBuffer;
        encoding?: string;
        success?: () => void;
        fail?: (res: { errMsg: string }) => void;
        complete?: () => void;
    }): void;

    /** 同步写文件 */
    writeFileSync(filePath: string, data: string | ArrayBuffer, encoding?: string): void;

    /** 删除文件 */
    unlink(option: {
        filePath: string;
        success?: () => void;
        fail?: (res: { errMsg: string }) => void;
        complete?: () => void;
    }): void;

    /** 同步删除文件 */
    unlinkSync(filePath: string): void;
}

// ==================== 设备相关 ====================

/** 加速度数据 */
interface AccelerometerData {
    /** X 轴 */
    x: number;
    /** Y 轴 */
    y: number;
    /** Z 轴 */
    z: number;
}

/** 陀螺仪数据 */
interface GyroscopeData {
    /** x 轴的角速度 */
    x: number;
    /** y 轴的角速度 */
    y: number;
    /** z 轴的角速度 */
    z: number;
    /** 姿态角值，围绕 Z 轴旋转，也叫翻滚角 */
    roll?: number;
    /** 姿态角值，围绕 X 轴旋转，也叫俯仰角 */
    pitch?: number;
    /** 姿态角值，围绕 Y 轴旋转，也叫偏航角 */
    yaw?: number;
    /** 从设备启动到现在经过的时间戳，单位是 ms */
    t?: number;
    /** 数据是否有效的标示，值为 -1 时表示数据无效 */
    result?: number;
}

/** 罗盘数据 */
interface CompassData {
    /** 面对的方向度数 */
    direction: number;
    /** 精度 */
    accuracy: string | number;
}

/** 振动参数 */
interface VibrateShortOption extends BaseCallback {
    /** 振动强度类型 */
    type?: 'heavy' | 'medium' | 'light';
}

/** 长振动参数 */
interface VibrateLongOption extends BaseCallback { }

/** 扫码参数 */
interface ScanCodeOption extends BaseCallback<ScanCodeSuccessCallbackResult> {
    /** 是否只能从相机扫码，不允许从相册选择图片 */
    onlyFromCamera?: boolean;
    /** 扫码类型 */
    scanType?: Array<'barCode' | 'qrCode' | 'datamatrix' | 'pdf417'>;
}

/** 扫码成功回调结果 */
interface ScanCodeSuccessCallbackResult {
    /** 所扫码的内容 */
    result: string;
    /** 所扫码的类型 */
    scanType: 'QR_CODE' | 'AZTEC' | 'CODABAR' | 'CODE_39' | 'CODE_93' | 'CODE_128' | 'DATA_MATRIX' | 'EAN_8' | 'EAN_13' | 'ITF' | 'MAXICODE' | 'PDF_417' | 'RSS_14' | 'RSS_EXPANDED' | 'UPC_A' | 'UPC_E' | 'UPC_EAN_EXTENSION';
    /** 所扫码的字符集 */
    charSet: string;
    /** 当所扫的码为当前小程序的合法二维码时，会返回此字段，内容为二维码携带的 path */
    path: string;
    /** 原始数据，base64编码 */
    rawData: string;
    /** 调用结果 */
    errMsg: string;
}

/** 剪贴板参数 */
interface SetClipboardDataOption extends BaseCallback {
    /** 剪贴板的内容 */
    data: string;
}

/** 获取剪贴板参数 */
interface GetClipboardDataOption extends BaseCallback<GetClipboardDataSuccessCallbackResult> { }

/** 获取剪贴板成功回调结果 */
interface GetClipboardDataSuccessCallbackResult {
    /** 剪贴板的内容 */
    data: string;
    /** 调用结果 */
    errMsg: string;
}

/** 屏幕亮度参数 */
interface SetScreenBrightnessOption extends BaseCallback {
    /** 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮 */
    value: number;
}

/** 获取屏幕亮度参数 */
interface GetScreenBrightnessOption extends BaseCallback<GetScreenBrightnessSuccessCallbackResult> { }

/** 获取屏幕亮度成功回调结果 */
interface GetScreenBrightnessSuccessCallbackResult {
    /** 屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮 */
    value: number;
    /** 调用结果 */
    errMsg: string;
}

/** 设置是否保持常亮状态参数 */
interface SetKeepScreenOnOption extends BaseCallback {
    /** 是否保持屏幕常亮 */
    keepScreenOn: boolean;
}

// ==================== 开放接口相关 ====================

/** 登录参数 */
interface LoginOption extends BaseCallback<LoginSuccessCallbackResult> {
    /** 超时时间，单位ms */
    timeout?: number;
}

/** 登录成功回调结果 */
interface LoginSuccessCallbackResult {
    /** 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 api，使用 code 换取 openid 和 session_key 等信息 */
    code: string;
    /** 调用结果 */
    errMsg: string;
}

/** 检查登录状态参数 */
interface CheckSessionOption extends BaseCallback {
}

/** 获取用户信息参数 */
interface GetUserInfoOption extends BaseCallback<GetUserInfoSuccessCallbackResult> {
    /** 是否带上登录态信息 */
    withCredentials?: boolean;
    /** 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 */
    lang?: 'zh_CN' | 'zh_TW' | 'en';
}

/** 获取用户信息成功回调结果 */
interface GetUserInfoSuccessCallbackResult {
    /** 用户信息对象，不包含 openid 等敏感信息 */
    userInfo: UserInfo;
    /** 不包括敏感信息的原始数据字符串，用于计算签名 */
    rawData: string;
    /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息 */
    signature: string;
    /** 包括敏感数据在内的完整用户信息的加密数据 */
    encryptedData: string;
    /** 加密算法的初始向量 */
    iv: string;
    /** 调用结果 */
    errMsg: string;
}

/** 用户信息 */
interface UserInfo {
    /** 用户昵称 */
    nickName: string;
    /** 用户头像图片的 URL */
    avatarUrl: string;
    /** 用户性别 */
    gender: 0 | 1 | 2;
    /** 用户所在国家 */
    country: string;
    /** 用户所在省份 */
    province: string;
    /** 用户所在城市 */
    city: string;
    /** 显示 country，province，city 所用的语言 */
    language: 'zh_CN' | 'zh_TW' | 'en';
}

/** 授权参数 */
interface AuthorizeOption extends BaseCallback {
    /** 需要获取权限的 scope */
    scope: string;
}

/** 获取设置参数 */
interface GetSettingOption extends BaseCallback<GetSettingSuccessCallbackResult> {
}

/** 获取设置成功回调结果 */
interface GetSettingSuccessCallbackResult {
    /** 用户授权结果 */
    authSetting: AuthSetting;
    /** 调用结果 */
    errMsg: string;
}

/** 用户授权设置信息 */
interface AuthSetting {
    /** 是否授权用户信息，对应接口 tt.getUserInfo */
    'scope.userInfo'?: boolean;
    /** 是否授权地理位置，对应接口 tt.getLocation */
    'scope.userLocation'?: boolean;
    /** 是否授权摄像头，对应接口 tt.camera */
    'scope.camera'?: boolean;
    /** 是否授权录音功能，对应接口 tt.getRecorderManager */
    'scope.record'?: boolean;
    /** 是否授权保存到相册 tt.saveImageToPhotosAlbum, tt.saveVideoToPhotosAlbum */
    'scope.writePhotosAlbum'?: boolean;
}

/** 打开设置页参数 */
interface OpenSettingOption extends BaseCallback<OpenSettingSuccessCallbackResult> {
}

/** 打开设置页成功回调结果 */
interface OpenSettingSuccessCallbackResult {
    /** 用户授权结果 */
    authSetting: AuthSetting;
    /** 调用结果 */
    errMsg: string;
}

/** 分享参数 */
interface ShareAppMessageOption {
    /** 转发标题，不传则默认使用当前小游戏的昵称 */
    title?: string;
    /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径 */
    imageUrl?: string;
    /** 查询字符串，必须是 key1=val1&key2=val2 的格式 */
    query?: string;
    /** 转发的类型 */
    channel?: 'token' | 'invite' | 'challenge';
    /** 审核通过的图片 ID，imageUrl 和 templateId 都存在时优先使用 imageUrl */
    templateId?: string;
    /** 独立分享 id，分享卡片 imageUrl 中必须包含此 id */
    extra?: {
        videoTopics?: string[];
    };
    /** 接口调用成功的回调函数 */
    success?: (res: { errMsg: string }) => void;
    /** 接口调用失败的回调函数 */
    fail?: (res: { errMsg: string }) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: (res: { errMsg: string }) => void;
}

/** 监听用户点击右上角菜单的「转发」按钮时触发的事件的回调函数参数 */
interface OnShareAppMessageCallbackResult {
    /** 转发标题，不传则默认使用当前小游戏的昵称 */
    title?: string;
    /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径 */
    imageUrl?: string;
    /** 查询字符串，必须是 key1=val1&key2=val2 的格式 */
    query?: string;
}

/** 显示分享菜单参数 */
interface ShowShareMenuOption extends BaseCallback {
    /** 是否使用带 shareTicket 的转发 */
    withShareTicket?: boolean;
    /** 分享菜单的样式，只在字节跳动小程序中支持 */
    menus?: Array<'shareAppMessage' | 'shareTimeline'>;
}

/** 隐藏分享菜单参数 */
interface HideShareMenuOption extends BaseCallback {
}

/** 获取分享信息参数 */
interface GetShareInfoOption extends BaseCallback<GetShareInfoSuccessCallbackResult> {
    /** shareTicket */
    shareTicket: string;
    /** 超时时间，单位 ms */
    timeout?: number;
}

/** 获取分享信息成功回调结果 */
interface GetShareInfoSuccessCallbackResult {
    /** 错误信息 */
    errMsg: string;
    /** 包括敏感数据在内的完整转发信息的加密数据 */
    encryptedData: string;
    /** 加密算法的初始向量 */
    iv: string;
}

/** 创建激励视频广告参数 */
interface CreateRewardedVideoAdOption {
    /** 广告单元 id */
    adUnitId: string;
    /** 多倍播放 */
    multiton?: boolean;
    /** 进度条配置 */
    progressTip?: boolean;
}

/** 激励视频广告组件 */
interface RewardedVideoAd {
    /** 显示激励视频广告 */
    show(): Promise<any>;
    /** 加载激励视频广告 */
    load(): Promise<any>;
    /** 销毁激励视频广告 */
    destroy(): void;
    /** 监听激励视频广告加载事件 */
    onLoad(callback: () => void): void;
    /** 取消监听激励视频广告加载事件 */
    offLoad(callback?: () => void): void;
    /** 监听激励视频错误事件 */
    onError(callback: (res: { errMsg: string; errCode: number }) => void): void;
    /** 取消监听激励视频错误事件 */
    offError(callback?: (res: { errMsg: string; errCode: number }) => void): void;
    /** 监听激励视频广告关闭事件 */
    onClose(callback: (res: { isEnded: boolean }) => void): void;
    /** 取消监听激励视频广告关闭事件 */
    offClose(callback?: (res: { isEnded: boolean }) => void): void;
}

/** 创建插屏广告参数 */
interface CreateInterstitialAdOption {
    /** 广告单元 id */
    adUnitId: string;
}

/** 插屏广告组件 */
interface InterstitialAd {
    /** 显示插屏广告 */
    show(): Promise<any>;
    /** 加载插屏广告 */
    load(): Promise<any>;
    /** 销毁插屏广告 */
    destroy(): void;
    /** 监听插屏广告加载事件 */
    onLoad(callback: () => void): void;
    /** 取消监听插屏广告加载事件 */
    offLoad(callback?: () => void): void;
    /** 监听插屏广告错误事件 */
    onError(callback: (res: { errMsg: string; errCode: number }) => void): void;
    /** 取消监听插屏广告错误事件 */
    offError(callback?: (res: { errMsg: string; errCode: number }) => void): void;
    /** 监听插屏广告关闭事件 */
    onClose(callback: () => void): void;
    /** 取消监听插屏广告关闭事件 */
    offClose(callback?: () => void): void;
}

// ==================== UI 交互相关 ====================

/** 显示键盘参数 */
interface ShowKeyboardOption extends BaseCallback {
    /** 当点击完成时键盘是否收起 */
    confirmHold?: boolean;
    /** 键盘右下角按钮的文字，仅在type为text时生效 */
    confirmType?: 'done' | 'next' | 'search' | 'go' | 'send';
    /** 键盘的类型 */
    type?: 'text' | 'number' | 'idcard' | 'digit';
    /** 输入框的初始内容 */
    defaultValue?: string;
    /** 键盘弹起时，是否让页面上滑 */
    adjustPosition?: boolean;
    /** 光标起始位置，自动聚集时有效，需与selection-end搭配使用 */
    cursor?: number;
    /** 光标结束位置，自动聚集时有效，需与selection-start搭配使用 */
    selectionEnd?: number;
    /** 光标起始位置，自动聚集时有效，需与selection-end搭配使用 */
    selectionStart?: number;
}

/** 隐藏键盘参数 */
interface HideKeyboardOption extends BaseCallback {
}

/** 更新键盘参数 */
interface UpdateKeyboardOption extends BaseCallback {
    /** 键盘输入框的当前值 */
    value: string;
}

/** 显示导航栏加载动画参数 */
interface ShowNavigationBarLoadingOption extends BaseCallback {
}

/** 隐藏导航栏加载动画参数 */
interface HideNavigationBarLoadingOption extends BaseCallback {
}

/** 设置导航栏标题参数 */
interface SetNavigationBarTitleOption extends BaseCallback {
    /** 页面标题 */
    title: string;
}

/** 设置导航栏颜色参数 */
interface SetNavigationBarColorOption extends BaseCallback {
    /** 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 */
    frontColor: '#ffffff' | '#000000';
    /** 背景颜色值，有效值为十六进制颜色 */
    backgroundColor: string;
    /** 动画效果 */
    animation?: {
        /** 动画变化时间，单位 ms */
        duration?: number;
        /** 动画变化方式 */
        timingFunc?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
    };
}

/** 显示 tabBar 参数 */
interface ShowTabBarOption extends BaseCallback {
    /** 是否需要动画效果 */
    animation?: boolean;
}

/** 隐藏 tabBar 参数 */
interface HideTabBarOption extends BaseCallback {
    /** 是否需要动画效果 */
    animation?: boolean;
}

/** 显示 tabBar 某一项的右上角的红点参数 */
interface ShowTabBarRedDotOption extends BaseCallback {
    /** tabBar 的哪一项，从左边算起 */
    index: number;
}

/** 隐藏 tabBar 某一项的右上角的红点参数 */
interface HideTabBarRedDotOption extends BaseCallback {
    /** tabBar 的哪一项，从左边算起 */
    index: number;
}

/** 为 tabBar 某一项的右上角添加文本参数 */
interface SetTabBarBadgeOption extends BaseCallback {
    /** tabBar 的哪一项，从左边算起 */
    index: number;
    /** 显示的文本，超过 4 个字符则显示成 ... */
    text: string;
}

/** 移除 tabBar 某一项右上角的文本参数 */
interface RemoveTabBarBadgeOption extends BaseCallback {
    /** tabBar 的哪一项，从左边算起 */
    index: number;
}

/** 设置 tabBar 的整体样式参数 */
interface SetTabBarStyleOption extends BaseCallback {
    /** tab 上的文字默认颜色，HexColor */
    color?: string;
    /** tab 上的文字选中时的颜色，HexColor */
    selectedColor?: string;
    /** tab 的背景色，HexColor */
    backgroundColor?: string;
    /** tabBar上边框的颜色， 仅支持 black / white */
    borderStyle?: 'black' | 'white';
}

/** 设置 tabBar 某一项的内容参数 */
interface SetTabBarItemOption extends BaseCallback {
    /** tabBar 的哪一项，从左边算起 */
    index: number;
    /** tab 上按钮文字 */
    text?: string;
    /** 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片 */
    iconPath?: string;
    /** 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片 */
    selectedIconPath?: string;
}

/** 菜单按钮的布局位置信息 */
interface MenuButtonBoundingClientRect {
    /** 宽度，单位：px */
    width: number;
    /** 高度，单位：px */
    height: number;
    /** 上边界坐标，单位：px */
    top: number;
    /** 右边界坐标，单位：px */
    right: number;
    /** 下边界坐标，单位：px */
    bottom: number;
    /** 左边界坐标，单位：px */
    left: number;
}

/** 设置状态栏样式参数 */
interface SetStatusBarStyleOption extends BaseCallback {
    /** 状态栏前景色，仅支持 black / white */
    style: 'dark' | 'light';
}

/** 显示操作菜单参数 */
interface ShowActionSheetOption extends BaseCallback<ShowActionSheetSuccessCallbackResult> {
    /** 按钮的文字数组，数组长度最大为 6 */
    itemList: string[];
    /** 按钮的文字颜色 */
    itemColor?: string;
}

/** 显示操作菜单成功回调结果 */
interface ShowActionSheetSuccessCallbackResult {
    /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
    tapIndex: number;
    /** 调用结果 */
    errMsg: string;
}

/** 隐藏消息提示框参数 */
interface HideToastOption extends BaseCallback {
}

/** 显示 loading 提示框参数 */
interface ShowLoadingOption extends BaseCallback {
    /** 提示的内容，最多显示 7 个汉字长度的文本 */
    title: string;
}

/** 隐藏 loading 提示框参数 */
interface HideLoadingOption extends BaseCallback {
}

/** 开始下拉刷新参数 */
interface StartPullDownRefreshOption extends BaseCallback {
}

/** 停止当前页面下拉刷新参数 */
interface StopPullDownRefreshOption extends BaseCallback {
}

/** 滚动到页面顶部参数 */
interface PageScrollToOption extends BaseCallback {
    /** 滚动到页面的目标位置，单位 px */
    scrollTop: number;
    /** 滚动动画的时长，单位 ms */
    duration?: number;
}

// ==================== 性能相关 ====================

/** 版本更新管理器 */
interface UpdateManager {
    /** 强制小程序重启并使用新版本 */
    applyUpdate(): void;
    /** 监听向小程序后台新版本就绪事件 */
    onCheckForUpdate(callback: (res: { hasUpdate: boolean }) => void): void;
    /** 监听小程序有版本更新事件 */
    onUpdateReady(callback: () => void): void;
    /** 监听小程序更新失败事件 */
    onUpdateFailed(callback: () => void): void;
}

/** 性能管理器 */
interface Performance {
    /** 获取当前时间戳 */
    now(): number;
    /** 获取性能标记 */
    getEntries(): PerformanceEntry[];
    /** 获取指定名称的性能标记 */
    getEntriesByName(name: string, type?: string): PerformanceEntry[];
    /** 获取指定类型的性能标记 */
    getEntriesByType(type: string): PerformanceEntry[];
    /** 设置性能标记 */
    mark(name: string): void;
    /** 测量性能 */
    measure(name: string, startMark?: string, endMark?: string): void;
    /** 清除性能标记 */
    clearMarks(name?: string): void;
    /** 清除性能测量 */
    clearMeasures(name?: string): void;
}

/** 性能条目 */
interface PerformanceEntry {
    /** 条目名称 */
    name: string;
    /** 条目类型 */
    entryType: string;
    /** 开始时间 */
    startTime: number;
    /** 持续时间 */
    duration: number;
}

/** 开启/关闭 FPS 显示参数 */
interface SetEnableFPSPanelOption extends BaseCallback {
    /** 是否开启 FPS 面板 */
    enabled: boolean;
}

/** 写 debug 日志参数 */
interface WriteDebugLogOption extends BaseCallback {
    /** 日志内容 */
    str: string;
}

/** 设置是否打开调试开关参数 */
interface SetEnableDebugOption extends BaseCallback {
    /** 是否打开调试 */
    enableDebug: boolean;
}

/** 日志管理器 */
interface LogManager {
    /** 写 debug 日志 */
    debug(...args: any[]): void;
    /** 写 info 日志 */
    info(...args: any[]): void;
    /** 写 log 日志 */
    log(...args: any[]): void;
    /** 写 warn 日志 */
    warn(...args: any[]): void;
}

/** 实时日志管理器 */
interface RealtimeLogManager {
    /** 写 debug 日志 */
    debug(...args: any[]): void;
    /** 写 info 日志 */
    info(...args: any[]): void;
    /** 写 log 日志 */
    log(...args: any[]): void;
    /** 写 warn 日志 */
    warn(...args: any[]): void;
    /** 写 error 日志 */
    error(...args: any[]): void;
    /** 设置过滤关键字 */
    setFilterMsg(msg: string): void;
    /** 添加过滤关键字 */
    addFilterMsg(msg: string): void;
    /** 设置实时日志page参数所在的页面 */
    in(pageInstance: any): RealtimeLogManager;
}

// ==================== Worker 多线程 ====================

/** Worker 线程 */
interface Worker {
    /** 向 Worker 发送消息 */
    postMessage(message: any): void;
    /** 监听 Worker 发送的消息 */
    onMessage(callback: (event: { data: any }) => void): void;
    /** 监听 Worker 错误事件 */
    onError(callback: (event: { message: string; filename: string; lineno: number; colno: number; error: Error }) => void): void;
    /** 结束 Worker */
    terminate(): void;
}

// ==================== 支付相关 ====================

/** 支付参数 */
interface PayOption extends BaseCallback<PaySuccessCallbackResult> {
    /** 订单信息 */
    orderInfo: {
        /** 担保交易服务端订单号 */
        order_id: string;
        /** 担保交易订单号 token */
        order_token: string;
    };
    /** 固定值：5（拉起小程序收银台） */
    service: 5;
    /** 仅限调试用 */
    _debug?: number;
}

/** 支付成功回调结果 */
interface PaySuccessCallbackResult {
    /** 支付结果码 */
    code: 0 | 1 | 2 | 3 | 4 | 9;
    /** 调用结果 */
    errMsg: string;
}

// ==================== 广告相关 ====================

/** 横幅广告参数 */
interface CreateBannerAdOption {
    /** 广告单元 id */
    adUnitId: string;
    /** 广告自动刷新的时间间隔，单位为秒，参数值必须大于等于30 */
    adIntervals?: number;
    /** banner 广告组件的样式 */
    style?: {
        /** 广告位区域左上角横坐标 */
        left?: number;
        /** 广告位区域左上角纵坐标 */
        top?: number;
        /** 广告位区域宽度，默认值为128 */
        width?: number;
    };
}

/** 横幅广告对象 */
interface BannerAd {
    /** 显示 banner 广告 */
    show(): Promise<void>;
    /** 隐藏 banner 广告 */
    hide(): void;
    /** 销毁 banner 广告 */
    destroy(): void;
    /** 监听 banner 广告加载事件 */
    onLoad(callback: () => void): void;
    /** 取消监听 banner 广告加载事件 */
    offLoad(callback?: () => void): void;
    /** 监听 banner 广告错误事件 */
    onError(callback: (res: { errMsg: string; errCode: number }) => void): void;
    /** 取消监听 banner 广告错误事件 */
    offError(callback?: (res: { errMsg: string; errCode: number }) => void): void;
    /** 监听 banner 广告尺寸变化事件 */
    onResize(callback: (res: { width: number; height: number }) => void): void;
    /** 取消监听 banner 广告尺寸变化事件 */
    offResize(callback?: (res: { width: number; height: number }) => void): void;
}

/** 插屏广告参数 */
interface CreateInterstitialAdOption {
    /** 广告单元 id */
    adUnitId: string;
}

/** 插屏广告对象 */
interface InterstitialAd {
    /** 显示插屏广告 */
    show(): Promise<void>;
    /** 加载插屏广告 */
    load(): Promise<void>;
    /** 销毁插屏广告 */
    destroy(): void;
    /** 监听插屏广告加载事件 */
    onLoad(callback: () => void): void;
    /** 取消监听插屏广告加载事件 */
    offLoad(callback?: () => void): void;
    /** 监听插屏广告错误事件 */
    onError(callback: (res: { errMsg: string; errCode: number }) => void): void;
    /** 取消监听插屏广告错误事件 */
    offError(callback?: (res: { errMsg: string; errCode: number }) => void): void;
    /** 监听插屏广告关闭事件 */
    onClose(callback: () => void): void;
    /** 取消监听插屏广告关闭事件 */
    offClose(callback?: () => void): void;
}

/** 激励视频广告参数 */
interface CreateRewardedVideoAdOption {
    /** 广告单元 id */
    adUnitId: string;
}

/** 激励视频广告对象 */
interface RewardedVideoAd {
    /** 显示激励视频广告 */
    show(): Promise<void>;
    /** 加载激励视频广告 */
    load(): Promise<void>;
    /** 销毁激励视频广告 */
    destroy(): void;
    /** 监听激励视频广告加载事件 */
    onLoad(callback: () => void): void;
    /** 取消监听激励视频广告加载事件 */
    offLoad(callback?: () => void): void;
    /** 监听激励视频广告错误事件 */
    onError(callback: (res: { errMsg: string; errCode: number }) => void): void;
    /** 取消监听激励视频广告错误事件 */
    offError(callback?: (res: { errMsg: string; errCode: number }) => void): void;
    /** 监听激励视频广告关闭事件 */
    onClose(callback: (res: { isEnded: boolean }) => void): void;
    /** 取消监听激励视频广告关闭事件 */
    offClose(callback?: (res: { isEnded: boolean }) => void): void;
}

/** 九宫格游戏推荐面板参数 */
interface CreateGridGamePanelOption {
    /** 广告单元 id */
    adUnitId: string;
    /** 九宫格游戏推荐面板组件的样式 */
    style: {
        /** left */
        left?: number;
        /** top */
        top?: number;
        /** width */
        width?: number;
        /** height */
        height?: number;
    };
}

/** 九宫格游戏推荐面板对象 */
interface GridGamePanel {
    /** 显示九宫格游戏推荐面板 */
    show(): void;
    /** 隐藏九宫格游戏推荐面板 */
    hide(): void;
    /** 销毁九宫格游戏推荐面板 */
    destroy(): void;
    /** 监听九宫格游戏推荐面板状态变化事件 */
    onStateChange(callback: (res: { state: 'show' | 'hide' }) => void): void;
    /** 取消监听九宫格游戏推荐面板状态变化事件 */
    offStateChange(callback?: (res: { state: 'show' | 'hide' }) => void): void;
}

// ==================== 数据分析相关 ====================

/** 数据分析上报参数 */
interface ReportAnalyticsOption {
    /** 事件名 */
    eventName: string;
    /** 事件参数 */
    data?: Record<string, any>;
}

/** 场景数据上报参数 */
interface ReportSceneOption {
    /** 场景ID */
    scene: string;
    /** 场景参数 */
    data?: Record<string, any>;
}

// ==================== 设备相关 ====================

/** 获取设备信息参数 */
interface GetDeviceInfoOption extends BaseCallback<GetDeviceInfoSuccessCallbackResult> {
}

/** 获取设备信息成功回调结果 */
interface GetDeviceInfoSuccessCallbackResult {
    /** 设备品牌 */
    brand: string;
    /** 设备型号 */
    model: string;
    /** 设备像素比 */
    pixelRatio: number;
    /** 屏幕宽度，单位px */
    screenWidth: number;
    /** 屏幕高度，单位px */
    screenHeight: number;
    /** 可使用窗口宽度，单位px */
    windowWidth: number;
    /** 可使用窗口高度，单位px */
    windowHeight: number;
    /** 状态栏的高度，单位px */
    statusBarHeight: number;
    /** 微信设置的语言 */
    language: string;
    /** 微信版本号 */
    version: string;
    /** 操作系统及版本 */
    system: string;
    /** 客户端平台 */
    platform: string;
    /** 用户字体大小（单位px） */
    fontSizeSetting: number;
    /** 客户端基础库版本 */
    SDKVersion: string;
    /** 设备性能等级 */
    benchmarkLevel: number;
    /** 调用结果 */
    errMsg: string;
}

/** 获取网络类型参数 */
interface GetNetworkTypeOption extends BaseCallback<GetNetworkTypeSuccessCallbackResult> {
}

/** 获取网络类型成功回调结果 */
interface GetNetworkTypeSuccessCallbackResult {
    /** 网络类型 */
    networkType: 'wifi' | '2g' | '3g' | '4g' | '5g' | 'unknown' | 'none';
    /** 调用结果 */
    errMsg: string;
}

/** 网络状态变化回调结果 */
interface OnNetworkStatusChangeCallbackResult {
    /** 当前是否有网络连接 */
    isConnected: boolean;
    /** 网络类型 */
    networkType: 'wifi' | '2g' | '3g' | '4g' | '5g' | 'unknown' | 'none';
}

/** 获取电池信息参数 */
interface GetBatteryInfoOption extends BaseCallback<GetBatteryInfoSuccessCallbackResult> {
}

/** 获取电池信息成功回调结果 */
interface GetBatteryInfoSuccessCallbackResult {
    /** 设备电量，范围 1 - 100 */
    level: number;
    /** 是否正在充电 */
    isCharging: boolean;
    /** 调用结果 */
    errMsg: string;
}

/** 短震动参数 */
interface VibrateShortOption extends BaseCallback {
    /** 震动强度类型 */
    type?: 'heavy' | 'medium' | 'light';
}

/** 长震动参数 */
interface VibrateLongOption extends BaseCallback {
}

// ==================== 文件系统相关 ====================

/** 读取文件参数 */
interface ReadFileOption extends BaseCallback<ReadFileSuccessCallbackResult> {
    /** 文件路径 */
    filePath: string;
    /** 指定读取文件的字符编码 */
    encoding?: 'ascii' | 'base64' | 'binary' | 'hex' | 'ucs2' | 'ucs-2' | 'utf16le' | 'utf-16le' | 'utf-8' | 'utf8' | 'latin1';
}

/** 读取文件成功回调结果 */
interface ReadFileSuccessCallbackResult {
    /** 文件内容 */
    data: string | ArrayBuffer;
    /** 调用结果 */
    errMsg: string;
}

/** 写入文件参数 */
interface WriteFileOption extends BaseCallback {
    /** 文件路径 */
    filePath: string;
    /** 要写入的文本或二进制数据 */
    data: string | ArrayBuffer;
    /** 指定写入文件的字符编码 */
    encoding?: 'ascii' | 'base64' | 'binary' | 'hex' | 'ucs2' | 'ucs-2' | 'utf16le' | 'utf-16le' | 'utf-8' | 'utf8' | 'latin1';
}

/** 删除文件参数 */
interface UnlinkOption extends BaseCallback {
    /** 文件路径 */
    filePath: string;
}

/** 创建目录参数 */
interface MkdirOption extends BaseCallback {
    /** 创建的目录路径 */
    dirPath: string;
    /** 是否在递归创建该目录的上级目录 */
    recursive?: boolean;
}

/** 删除目录参数 */
interface RmdirOption extends BaseCallback {
    /** 要删除的目录路径 */
    dirPath: string;
}

/** 读取目录参数 */
interface ReaddirOption extends BaseCallback<ReaddirSuccessCallbackResult> {
    /** 要读取的目录路径 */
    dirPath: string;
}

/** 读取目录成功回调结果 */
interface ReaddirSuccessCallbackResult {
    /** 指定目录下的文件名数组 */
    files: string[];
    /** 调用结果 */
    errMsg: string;
}

/** 获取文件状态参数 */
interface StatOption extends BaseCallback<StatSuccessCallbackResult> {
    /** 文件/目录路径 */
    path: string;
}

/** 获取文件状态成功回调结果 */
interface StatSuccessCallbackResult {
    /** 文件状态信息 */
    stats: Stats;
    /** 调用结果 */
    errMsg: string;
}

/** 文件状态信息 */
interface Stats {
    /** 文件的类型和存取的权限 */
    mode: number;
    /** 文件大小，单位：B */
    size: number;
    /** 文件最近一次被存取或被执行的时间 */
    lastAccessedTime: number;
    /** 文件最后一次被修改的时间 */
    lastModifiedTime: number;
    /** 判断当前文件是否一个目录 */
    isDirectory(): boolean;
    /** 判断当前文件是否一个普通文件 */
    isFile(): boolean;
}

/** 复制文件参数 */
interface CopyFileOption extends BaseCallback {
    /** 源文件路径 */
    srcPath: string;
    /** 目标文件路径 */
    destPath: string;
}

/** 重命名文件参数 */
interface RenameOption extends BaseCallback {
    /** 源文件路径 */
    oldPath: string;
    /** 新文件路径 */
    newPath: string;
}

/** 判断文件/目录是否存在参数 */
interface AccessOption extends BaseCallback {
    /** 要判断是否存在的文件/目录路径 */
    path: string;
}

// ==================== 媒体相关 ====================

/** 相机上下文 */
interface CameraContext {
    /** 拍照 */
    takePhoto(option: TakePhotoOption): void;
    /** 开始录像 */
    startRecord(option?: StartRecordOption): void;
    /** 结束录像 */
    stopRecord(option?: StopRecordOption): void;
}

/** 拍照参数 */
interface TakePhotoOption extends BaseCallback<TakePhotoSuccessCallbackResult> {
    /** 成像质量 */
    quality?: 'high' | 'normal' | 'low';
}

/** 拍照成功回调结果 */
interface TakePhotoSuccessCallbackResult {
    /** 照片文件的临时路径 */
    tempImagePath: string;
    /** 调用结果 */
    errMsg: string;
}

/** 开始录像参数 */
interface StartRecordOption extends BaseCallback {
    /** 超时时间 */
    timeoutCallback?: () => void;
}

/** 结束录像参数 */
interface StopRecordOption extends BaseCallback<StopRecordSuccessCallbackResult> {
}

/** 结束录像成功回调结果 */
interface StopRecordSuccessCallbackResult {
    /** 封面图片文件的临时路径 */
    tempThumbPath: string;
    /** 视频的文件的临时路径 */
    tempVideoPath: string;
    /** 调用结果 */
    errMsg: string;
}

/** 创建相机上下文参数 */
interface CreateCameraContextOption {
    /** 相机组件的实例 */
    camera: any;
}

// ==================== 网络相关 ====================

/** WebSocket任务 */
interface SocketTask {
    /** 通过 WebSocket 连接发送数据 */
    send(option: SocketTaskSendOption): void;
    /** 关闭 WebSocket 连接 */
    close(option?: SocketTaskCloseOption): void;
    /** 监听 WebSocket 连接打开事件 */
    onOpen(callback: (result: SocketTaskOnOpenCallbackResult) => void): void;
    /** 取消监听 WebSocket 连接打开事件 */
    offOpen(callback?: (result: SocketTaskOnOpenCallbackResult) => void): void;
    /** 监听 WebSocket 接受到服务器的消息事件 */
    onMessage(callback: (result: SocketTaskOnMessageCallbackResult) => void): void;
    /** 取消监听 WebSocket 接受到服务器的消息事件 */
    offMessage(callback?: (result: SocketTaskOnMessageCallbackResult) => void): void;
    /** 监听 WebSocket 连接关闭事件 */
    onClose(callback: (result: SocketTaskOnCloseCallbackResult) => void): void;
    /** 取消监听 WebSocket 连接关闭事件 */
    offClose(callback?: (result: SocketTaskOnCloseCallbackResult) => void): void;
    /** 监听 WebSocket 错误事件 */
    onError(callback: (result: SocketTaskOnErrorCallbackResult) => void): void;
    /** 取消监听 WebSocket 错误事件 */
    offError(callback?: (result: SocketTaskOnErrorCallbackResult) => void): void;
}

/** WebSocket发送数据参数 */
interface SocketTaskSendOption extends BaseCallback {
    /** 需要发送的内容 */
    data: string | ArrayBuffer;
}

/** WebSocket关闭连接参数 */
interface SocketTaskCloseOption extends BaseCallback {
    /** 一个数字值表示关闭连接的状态号 */
    code?: number;
    /** 一个可读的字符串，表示连接被关闭的原因 */
    reason?: string;
}

/** WebSocket连接打开事件回调结果 */
interface SocketTaskOnOpenCallbackResult {
    /** 连接打开的Header */
    header: Record<string, string>;
}

/** WebSocket接收消息事件回调结果 */
interface SocketTaskOnMessageCallbackResult {
    /** 服务器返回的消息 */
    data: string | ArrayBuffer;
}

/** WebSocket连接关闭事件回调结果 */
interface SocketTaskOnCloseCallbackResult {
    /** 一个数字值表示关闭连接的状态号 */
    code: number;
    /** 一个可读的字符串，表示连接被关闭的原因 */
    reason: string;
}

/** WebSocket错误事件回调结果 */
interface SocketTaskOnErrorCallbackResult {
    /** 错误信息 */
    errMsg: string;
}

/** mDNS服务 */
interface MdnsService {
    /** 服务的名字 */
    name: string;
    /** 服务的类型 */
    type: string;
    /** 服务的端口 */
    port: number;
    /** 服务的ip地址 */
    ip: string;
}

/** 开始搜索mDNS服务参数 */
interface StartLocalServiceDiscoveryOption extends BaseCallback<StartLocalServiceDiscoverySuccessCallbackResult> {
    /** 搜索的服务类型 */
    serviceType: string;
}

/** 开始搜索mDNS服务成功回调结果 */
interface StartLocalServiceDiscoverySuccessCallbackResult {
    /** 调用结果 */
    errMsg: string;
}

/** 停止搜索mDNS服务参数 */
interface StopLocalServiceDiscoveryOption extends BaseCallback {
    /** 搜索的服务类型 */
    serviceType: string;
}

/** UDP Socket */
interface UDPSocket {
    /** 绑定一个系统随机分配的可用端口 */
    bind(): number;
    /** 关闭UDP Socket */
    close(): void;
    /** 取消监听关闭事件 */
    offClose(callback?: () => void): void;
    /** 取消监听错误事件 */
    offError(callback?: (result: UDPSocketOnErrorCallbackResult) => void): void;
    /** 取消监听收到消息的事件 */
    offMessage(callback?: (result: UDPSocketOnMessageCallbackResult) => void): void;
    /** 监听关闭事件 */
    onClose(callback: () => void): void;
    /** 监听错误事件 */
    onError(callback: (result: UDPSocketOnErrorCallbackResult) => void): void;
    /** 监听收到消息的事件 */
    onMessage(callback: (result: UDPSocketOnMessageCallbackResult) => void): void;
    /** 向指定的IP和端口发送消息 */
    send(option: UDPSocketSendOption): void;
}

/** UDP Socket错误事件回调结果 */
interface UDPSocketOnErrorCallbackResult {
    /** 错误信息 */
    errMsg: string;
}

/** UDP Socket收到消息事件回调结果 */
interface UDPSocketOnMessageCallbackResult {
    /** 收到的消息 */
    message: ArrayBuffer;
    /** 消息来源的结构化信息 */
    remoteInfo: UDPSocketRemoteInfo;
}

/** UDP Socket远程信息 */
interface UDPSocketRemoteInfo {
    /** 发送消息的socket的地址 */
    address: string;
    /** 发送消息的socket的端口号 */
    port: number;
    /** message的大小，单位：字节 */
    size: number;
}

/** UDP Socket发送消息参数 */
interface UDPSocketSendOption extends BaseCallback {
    /** 要发送的数据 */
    message: string | ArrayBuffer;
    /** 目标地址 */
    address: string;
    /** 目标端口 */
    port: number;
}

// ==================== 支付相关 ====================

/** 通用支付参数 */
interface GeneralPayOption extends BaseCallback<PaySuccessCallbackResult> {
    /** 订单信息 */
    orderInfo: string;
    /** 支付服务类型 */
    serviceType?: number;
}

/** 微信支付参数 */
interface WechatPayOption extends BaseCallback {
    /** 统一下单接口返回的 prepay_id 参数值 */
    prepayId: string;
    /** 签名 */
    sign: string;
    /** 时间戳 */
    timeStamp: string;
    /** 随机字符串 */
    nonceStr: string;
    /** 签名算法 */
    signType?: string;
}

// ==================== Worker相关 ====================

/** Worker */
interface Worker {
    /** 向主线程发送消息 */
    postMessage(message: any): void;
    /** 结束当前 Worker 线程 */
    terminate(): void;
    /** 监听主线程向当前子线程发送的消息的事件 */
    onMessage(callback: (result: WorkerOnMessageCallbackResult) => void): void;
    /** 取消监听主线程向当前子线程发送的消息的事件 */
    offMessage(callback?: (result: WorkerOnMessageCallbackResult) => void): void;
    /** 监听 worker 线程被系统回收事件 */
    onProcessKilled(callback: () => void): void;
    /** 取消监听 worker 线程被系统回收事件 */
    offProcessKilled(callback?: () => void): void;
}

/** Worker消息事件回调结果 */
interface WorkerOnMessageCallbackResult {
    /** 主线程发送的消息 */
    message: any;
}

/** 创建Worker参数 */
interface CreateWorkerOption {
    /** worker 的脚本路径 */
    scriptPath: string;
}

// ==================== 文件系统管理器 ====================

/** 文件系统管理器 */
interface FileSystemManager {
    /** 读取文件 */
    readFile(option: ReadFileOption): void;
    /** 同步读取文件 */
    readFileSync(filePath: string, encoding?: string): string | ArrayBuffer;
    /** 写入文件 */
    writeFile(option: WriteFileOption): void;
    /** 同步写入文件 */
    writeFileSync(filePath: string, data: string | ArrayBuffer, encoding?: string): void;
    /** 删除文件 */
    unlink(option: UnlinkOption): void;
    /** 同步删除文件 */
    unlinkSync(filePath: string): void;
    /** 创建目录 */
    mkdir(option: MkdirOption): void;
    /** 同步创建目录 */
    mkdirSync(dirPath: string, recursive?: boolean): void;
    /** 删除目录 */
    rmdir(option: RmdirOption): void;
    /** 同步删除目录 */
    rmdirSync(dirPath: string): void;
    /** 读取目录 */
    readdir(option: ReaddirOption): void;
    /** 同步读取目录 */
    readdirSync(dirPath: string): string[];
    /** 获取文件状态 */
    stat(option: StatOption): void;
    /** 同步获取文件状态 */
    statSync(path: string): Stats;
    /** 复制文件 */
    copyFile(option: CopyFileOption): void;
    /** 同步复制文件 */
    copyFileSync(srcPath: string, destPath: string): void;
    /** 重命名文件 */
    rename(option: RenameOption): void;
    /** 同步重命名文件 */
    renameSync(oldPath: string, newPath: string): void;
    /** 判断文件/目录是否存在 */
    access(option: AccessOption): void;
    /** 同步判断文件/目录是否存在 */
    accessSync(path: string): void;
}

// ==================== 主要 TT 对象接口 ====================

interface TT {
    // 系统信息
    /** 获取系统信息 */
    getSystemInfo(option: BaseCallback<SystemInfo>): void;
    /** 同步获取系统信息 */
    getSystemInfoSync(): SystemInfo;

    // 生命周期
    /** 监听小游戏回到前台的事件 */
    onShow(callback: (res: OnShowCallbackResult) => void): void;
    /** 监听小游戏隐藏到后台的事件 */
    onHide(callback: () => void): void;
    /** 获取小游戏启动时的参数 */
    getLaunchOptionsSync(): LaunchOptions;

    // 网络请求
    /** 发起 HTTPS 网络请求 */
    request(option: RequestOption): RequestTask;

    /** 下载文件资源到本地 */
    downloadFile(option: DownloadFileOption): DownloadTask;

    /** 将本地资源上传到服务器 */
    uploadFile(option: UploadFileOption): UploadTask;

    /** 创建一个 WebSocket 连接 */
    connectSocket(option: ConnectSocketOption): SocketTask;

    /** 通过 WebSocket 连接发送数据 */
    sendSocketMessage(option: SendSocketMessageOption): void;

    /** 关闭 WebSocket 连接 */
    closeSocket(option?: CloseSocketOption): void;

    /** 监听 WebSocket 连接打开事件 */
    onSocketOpen(callback: (res: { header: any }) => void): void;

    /** 监听 WebSocket 接受到服务器的消息事件 */
    onSocketMessage(callback: (res: { data: string | ArrayBuffer }) => void): void;

    /** 监听 WebSocket 错误事件 */
    onSocketError(callback: (res: { errMsg: string }) => void): void;

    /** 监听 WebSocket 连接关闭事件 */
    onSocketClose(callback: (res: { code: number; reason: string }) => void): void;

    // 数据缓存
    /** 将数据存储在本地缓存中指定的 key 中 */
    setStorage(option: SetStorageOption): void;
    /** 从本地缓存中异步获取指定 key 的内容 */
    getStorage(option: GetStorageOption): void;
    /** 从本地缓存中移除指定 key */
    removeStorage(option: RemoveStorageOption): void;
    /** 同步将数据存储在本地缓存中指定的 key 中 */
    setStorageSync(key: string, data: any): void;
    /** 从本地缓存中同步获取指定 key 的内容 */
    getStorageSync(key: string): any;
    /** 从本地缓存中同步移除指定 key */
    removeStorageSync(key: string): void;
    /** 清理本地数据缓存 */
    clearStorage(): void;
    /** 同步清理本地数据缓存 */
    clearStorageSync(): void;

    // UI 交互
    /** 显示消息提示框 */
    showToast(option: ShowToastOption): void;
    /** 隐藏消息提示框 */
    hideToast(): void;
    /** 显示模态对话框 */
    showModal(option: ShowModalOption): void;
    /** 显示 loading 提示框 */
    showLoading(option: ShowLoadingOption): void;
    /** 隐藏 loading 提示框 */
    hideLoading(): void;

    // 媒体
    /** 创建内部 audio 上下文 InnerAudioContext 对象 */
    createInnerAudioContext(): InnerAudioContext;

    /** 获取全局唯一的游戏录屏管理器 GameRecorderManager */
    getGameRecorderManager(): GameRecorderManager;

    /** 获取全局唯一的录音管理器 RecorderManager */
    getRecorderManager(): RecorderManager;

    /** 拍照或从手机相册中选图 */
    chooseImage(option: ChooseImageOption): void;

    /** 预览图片 */
    previewImage(option: PreviewImageOption): void;

    /** 保存图片到系统相册 */
    saveImageToPhotosAlbum(option: SaveImageToPhotosAlbumOption): void;

    /** 压缩图片接口 */
    compressImage(option: CompressImageOption): void;

    /** 获取图片信息 */
    getImageInfo(option: GetImageInfoOption): void;

    /** 选择视频 */
    chooseVideo(option: ChooseVideoOption): void;

    /** 保存视频到系统相册 */
    saveVideoToPhotosAlbum(option: SaveVideoToPhotosAlbumOption): void;

    /** 获取视频信息 */
    getVideoInfo(option: GetVideoInfoOption): void;

    // 文件
    /** 获取文件系统管理器 */
    getFileSystemManager(): FileSystemManager;

    // 设备
    /** 监听加速度数据变化事件 */
    onAccelerometerChange(callback: (res: AccelerometerData) => void): void;
    /** 开始监听加速度数据 */
    startAccelerometer(option?: BaseCallback): void;
    /** 停止监听加速度数据 */
    stopAccelerometer(option?: BaseCallback): void;

    /** 监听陀螺仪数据变化事件 */
    onGyroscopeChange(callback: (res: GyroscopeData) => void): void;
    /** 开始监听陀螺仪数据 */
    startGyroscope(option?: BaseCallback & { interval?: number }): void;
    /** 停止监听陀螺仪数据 */
    stopGyroscope(option?: BaseCallback): void;

    /** 监听罗盘数据变化事件 */
    onCompassChange(callback: (res: CompassData) => void): void;
    /** 开始监听罗盘数据 */
    startCompass(option?: BaseCallback): void;
    /** 停止监听罗盘数据 */
    stopCompass(option?: BaseCallback): void;

    /** 使手机发生较短时间的振动 */
    vibrateShort(option?: VibrateShortOption): void;
    /** 使手机发生较长时间的振动 */
    vibrateLong(option?: VibrateLongOption): void;

    /** 调起客户端扫码界面进行扫码 */
    scanCode(option: ScanCodeOption): void;

    /** 设置系统剪贴板的内容 */
    setClipboardData(option: SetClipboardDataOption): void;
    /** 获取系统剪贴板的内容 */
    getClipboardData(option: GetClipboardDataOption): void;

    /** 设置屏幕亮度 */
    setScreenBrightness(option: SetScreenBrightnessOption): void;
    /** 获取屏幕亮度 */
    getScreenBrightness(option: GetScreenBrightnessOption): void;
    /** 设置是否保持常亮状态 */
    setKeepScreenOn(option: SetKeepScreenOnOption): void;

    // 开放接口
    /** 调用接口获取登录凭证（code） */
    login(option: LoginOption): void;

    /** 检查登录态是否过期 */
    checkSession(option: CheckSessionOption): void;

    /** 获取用户信息 */
    getUserInfo(option: GetUserInfoOption): void;

    /** 提前向用户发起授权请求 */
    authorize(option: AuthorizeOption): void;

    /** 获取用户的当前设置 */
    getSetting(option: GetSettingOption): void;

    /** 调起客户端小程序设置界面 */
    openSetting(option: OpenSettingOption): void;

    /** 主动拉起转发，进入选择通讯录界面 */
    shareAppMessage(option: ShareAppMessageOption): void;

    /** 监听用户点击右上角菜单的「转发」按钮时触发的事件 */
    onShareAppMessage(callback: (res: OnShareAppMessageCallbackResult) => OnShareAppMessageCallbackResult): void;

    /** 取消监听用户点击右上角菜单的「转发」按钮时触发的事件 */
    offShareAppMessage(callback?: (res: OnShareAppMessageCallbackResult) => OnShareAppMessageCallbackResult): void;

    /** 显示当前页面的转发按钮 */
    showShareMenu(option: ShowShareMenuOption): void;

    /** 隐藏转发按钮 */
    hideShareMenu(option: HideShareMenuOption): void;

    /** 获取转发详细信息 */
    getShareInfo(option: GetShareInfoOption): void;

    /** 创建激励视频广告组件 */
    createRewardedVideoAd(option: CreateRewardedVideoAdOption): RewardedVideoAd;

    /** 创建插屏广告组件 */
    createInterstitialAd(option: CreateInterstitialAdOption): InterstitialAd;

    /** 创建 banner 广告组件 */
    createBannerAd(option: CreateBannerAdOption): BannerAd;

    // UI 交互
    /** 显示键盘 */
    showKeyboard(option: ShowKeyboardOption): void;
    /** 隐藏键盘 */
    hideKeyboard(option?: HideKeyboardOption): void;
    /** 监听键盘高度变化 */
    onKeyboardHeightChange(callback: (res: { height: number }) => void): void;
    /** 取消监听键盘高度变化 */
    offKeyboardHeightChange(callback?: (res: { height: number }) => void): void;
    /** 更新键盘输入框内容 */
    updateKeyboard(option: UpdateKeyboardOption): void;

    /** 显示导航栏加载动画 */
    showNavigationBarLoading(option?: ShowNavigationBarLoadingOption): void;
    /** 隐藏导航栏加载动画 */
    hideNavigationBarLoading(option?: HideNavigationBarLoadingOption): void;
    /** 设置导航栏标题 */
    setNavigationBarTitle(option: SetNavigationBarTitleOption): void;
    /** 设置导航栏颜色 */
    setNavigationBarColor(option: SetNavigationBarColorOption): void;

    /** 显示 tabBar */
    showTabBar(option?: ShowTabBarOption): void;
    /** 隐藏 tabBar */
    hideTabBar(option?: HideTabBarOption): void;
    /** 显示 tabBar 某一项的右上角的红点 */
    showTabBarRedDot(option: ShowTabBarRedDotOption): void;
    /** 隐藏 tabBar 某一项的右上角的红点 */
    hideTabBarRedDot(option: HideTabBarRedDotOption): void;
    /** 为 tabBar 某一项的右上角添加文本 */
    setTabBarBadge(option: SetTabBarBadgeOption): void;
    /** 移除 tabBar 某一项右上角的文本 */
    removeTabBarBadge(option: RemoveTabBarBadgeOption): void;
    /** 设置 tabBar 的整体样式 */
    setTabBarStyle(option: SetTabBarStyleOption): void;
    /** 设置 tabBar 某一项的内容 */
    setTabBarItem(option: SetTabBarItemOption): void;

    /** 创建菜单 */
    getMenuButtonBoundingClientRect(): MenuButtonBoundingClientRect;

    /** 设置状态栏样式 */
    setStatusBarStyle(option: SetStatusBarStyleOption): void;

    /** 显示操作菜单 */
    showActionSheet(option: ShowActionSheetOption): void;

    /** 开始下拉刷新 */
    startPullDownRefresh(option?: StartPullDownRefreshOption): void;
    /** 停止当前页面下拉刷新 */
    stopPullDownRefresh(option?: StopPullDownRefreshOption): void;

    /** 滚动到页面顶部 */
    pageScrollTo(option: PageScrollToOption): void;

    // ==================== 性能相关 ====================

    /** 获取全局唯一的版本更新管理器 */
    getUpdateManager(): UpdateManager;

    /** 获取性能管理器 */
    getPerformance(): Performance;

    /** 开启/关闭 FPS 显示 */
    setEnableFPSPanel(option: SetEnableFPSPanelOption): void;

    /** 触发 GC */
    triggerGC(): void;

    /** 写 debug 日志 */
    writeDebugLog(option: WriteDebugLogOption): void;

    /** 设置是否打开调试开关 */
    setEnableDebug(option: SetEnableDebugOption): void;

    /** 获取日志管理器 */
    getLogManager(): LogManager;

    /** 获取实时日志管理器 */
    getRealtimeLogManager(): RealtimeLogManager;

    // ==================== Worker 多线程 ====================

    /** 创建一个 Worker 线程 */
    createWorker(scriptPath: string): Worker;

    // ==================== 支付相关 ====================

    /** 发起支付 */
    pay(option: PayOption): void;

    // ==================== 广告相关 ====================

    /** 创建横幅广告组件 */
    createBannerAd(option: CreateBannerAdOption): BannerAd;

    /** 创建插屏广告组件 */
    createInterstitialAd(option: CreateInterstitialAdOption): InterstitialAd;

    /** 创建激励视频广告组件 */
    createRewardedVideoAd(option: CreateRewardedVideoAdOption): RewardedVideoAd;

    /** 创建九宫格游戏推荐面板组件 */
    createGridGamePanel(option: CreateGridGamePanelOption): GridGamePanel;

    // ==================== 数据分析相关 ====================

    /** 数据分析上报 */
    reportAnalytics(option: ReportAnalyticsOption): void;

    /** 场景数据上报 */
    reportScene(option: ReportSceneOption): void;

    // ==================== 设备相关 ====================

    /** 获取设备信息 */
    getDeviceInfo(option?: GetDeviceInfoOption): void;

    /** 获取网络类型 */
    getNetworkType(option?: GetNetworkTypeOption): void;

    /** 监听网络状态变化事件 */
    onNetworkStatusChange(callback: (res: OnNetworkStatusChangeCallbackResult) => void): void;

    /** 取消监听网络状态变化事件 */
    offNetworkStatusChange(callback?: (res: OnNetworkStatusChangeCallbackResult) => void): void;

    /** 获取电池信息 */
    getBatteryInfo(option?: GetBatteryInfoOption): void;

    /** 短震动 */
    vibrateShort(option?: VibrateShortOption): void;

    /** 长震动 */
    vibrateLong(option?: VibrateLongOption): void;

    // ==================== 文件系统相关 ====================

    /** 获取全局唯一的文件管理器 */
    getFileSystemManager(): FileSystemManager;

    // ==================== 媒体相关 ====================

    /** 获取全局唯一的录音管理器 */
    getRecorderManager(): RecorderManager;

    /** 创建相机上下文 */
    createCameraContext(option: CreateCameraContextOption): CameraContext;

    // ==================== 网络相关 ====================

    /** 开始搜索局域网下的 mDNS 服务 */
    startLocalServiceDiscovery(option: StartLocalServiceDiscoveryOption): void;

    /** 停止搜索 mDNS 服务 */
    stopLocalServiceDiscovery(option: StopLocalServiceDiscoveryOption): void;

    /** 监听 mDNS 服务发现的事件 */
    onLocalServiceFound(callback: (res: { serviceName: string; serviceType: string; ip: string; port: number }) => void): void;

    /** 取消监听 mDNS 服务发现的事件 */
    offLocalServiceFound(callback?: (res: { serviceName: string; serviceType: string; ip: string; port: number }) => void): void;

    /** 监听 mDNS 服务离开的事件 */
    onLocalServiceLost(callback: (res: { serviceName: string; serviceType: string }) => void): void;

    /** 取消监听 mDNS 服务离开的事件 */
    offLocalServiceLost(callback?: (res: { serviceName: string; serviceType: string }) => void): void;

    /** 创建一个 UDP Socket 实例 */
    createUDPSocket(): UDPSocket;

    // ==================== 支付相关 ====================

    /** 发起支付 */
    requestPayment(option: WechatPayOption): void;

    // ==================== Worker相关 ====================

    /** 创建一个 Worker 线程 */
    createWorker(scriptPath: string): Worker;
}

// ==================== 全局声明 ====================

declare global {
    const tt: TT;
}

export default tt;

// 导出主要接口类型
export {
    TT,
    SystemInfo,
    OnShowCallbackResult,
    RequestOption,
    RequestSuccessCallbackResult,
    SetStorageOption,
    GetStorageOption,
    ShowToastOption,
    ShowModalOption,
    ShowLoadingOption,
    InnerAudioContext,
    GameRecorderManager,
    RecorderManager,
    ChooseImageOption,
    ChooseImageSuccessCallbackResult,
    PreviewImageOption,
    SaveImageToPhotosAlbumOption,
    CompressImageOption,
    CompressImageSuccessCallbackResult,
    GetImageInfoOption,
    GetImageInfoSuccessCallbackResult,
    ChooseVideoOption,
    ChooseVideoSuccessCallbackResult,
    SaveVideoToPhotosAlbumOption,
    GetVideoInfoOption,
    GetVideoInfoSuccessCallbackResult,
    FileSystemManager,
    PayOption,
    PaySuccessCallbackResult,
    BaseCallback,
    SafeArea,
    DeviceScore,
    ReferrerInfo,
    LaunchOptions,
    // 广告相关
    CreateBannerAdOption,
    BannerAd,
    CreateInterstitialAdOption,
    InterstitialAd,
    CreateRewardedVideoAdOption,
    RewardedVideoAd,
    CreateGridGamePanelOption,
    GridGamePanel,
    // 数据分析相关
    ReportAnalyticsOption,
    ReportSceneOption,
    // 设备相关
    GetDeviceInfoOption,
    GetDeviceInfoSuccessCallbackResult,
    GetNetworkTypeOption,
    GetNetworkTypeSuccessCallbackResult,
    OnNetworkStatusChangeCallbackResult,
    GetBatteryInfoOption,
    GetBatteryInfoSuccessCallbackResult,
    VibrateShortOption,
    VibrateLongOption,
    // 文件系统相关
    ReadFileOption,
    ReadFileSuccessCallbackResult,
    WriteFileOption,
    UnlinkOption,
    MkdirOption,
    RmdirOption,
    ReaddirOption,
    ReaddirSuccessCallbackResult,
    StatOption,
    StatSuccessCallbackResult,
    Stats,
    CopyFileOption,
    RenameOption,
    AccessOption,
    // 媒体相关
    CameraContext,
    TakePhotoOption,
    TakePhotoSuccessCallbackResult,
    StartRecordOption,
    StopRecordOption,
    StopRecordSuccessCallbackResult,
    CreateCameraContextOption,
    // 网络相关
    SocketTaskSendOption,
    SocketTaskCloseOption,
    SocketTaskOnOpenCallbackResult,
    SocketTaskOnMessageCallbackResult,
    SocketTaskOnCloseCallbackResult,
    SocketTaskOnErrorCallbackResult,
    MdnsService,
    StartLocalServiceDiscoveryOption,
    StartLocalServiceDiscoverySuccessCallbackResult,
    StopLocalServiceDiscoveryOption,
    UDPSocket,
    UDPSocketOnErrorCallbackResult,
    UDPSocketOnMessageCallbackResult,
    UDPSocketRemoteInfo,
    UDPSocketSendOption,
    // 支付相关
    GeneralPayOption,
    WechatPayOption,
    // Worker相关
    Worker,
    WorkerOnMessageCallbackResult,
    CreateWorkerOption
};
