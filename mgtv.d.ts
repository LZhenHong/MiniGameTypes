/**
 * 芒果TV小游戏API类型定义
 * 基于芒果TV开放平台文档生成
 * @see https://open.mgtv.com/docs/minigame/api
 * @date 2025-08-18
 */

// ============================================================================
// 基础类型定义
// ============================================================================

/** 通用回调函数类型 */
interface BaseCallback {
    /** 接口调用成功的回调函数 */
    success?: (res: any) => void;
    /** 接口调用失败的回调函数 */
    fail?: (res: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: (res: any) => void;
}

/** 错误响应 */
interface ErrorResponse {
    /** 错误信息 */
    errMsg: string;
    /** 错误码 */
    errCode?: number;
}

// ============================================================================
// 生命周期相关类型
// ============================================================================

/** 小游戏启动参数 */
interface LaunchOptions {
    /** 启动小游戏的路径 */
    path: string;
    /** 启动小游戏的 query 参数 */
    query: Record<string, any>;
    /** 启动小游戏的场景值 */
    scene: number;
    /** shareTicket，详见获取更多转发信息 */
    shareTicket?: string;
    /** 当场景为由从另一个小程序或公众号或App打开时，返回此字段 */
    referrerInfo?: ReferrerInfo;
}

/** 来源信息 */
interface ReferrerInfo {
    /** 来源小程序或公众号或App的 appId */
    appId: string;
    /** 来源小程序传过来的数据，scene=1037或1038时支持 */
    extraData?: Record<string, any>;
}

/** 小游戏切前台参数 */
interface OnShowOptions extends LaunchOptions { }

/** 小游戏切后台参数 */
interface OnHideOptions { }

/** 小游戏发生脚本错误或 API 调用报错时触发 */
interface OnErrorOptions {
    /** 错误信息，包含堆栈 */
    message: string;
    /** 发生错误的文件名 */
    filename: string;
    /** 发生错误的行号 */
    lineno: number;
    /** 发生错误的列号 */
    colno: number;
    /** 错误对象 */
    error: Error;
}

/** 未处理的 Promise 拒绝事件 */
interface OnUnhandledRejectionOptions {
    /** 被拒绝的 Promise 对象 */
    promise: Promise<any>;
    /** 拒绝原因，一般是一个 Error 对象 */
    reason: string | Error;
}

/** 音频因为受到系统占用而被中断开始事件 */
interface OnAudioInterruptionBeginOptions { }

/** 音频中断结束事件 */
interface OnAudioInterruptionEndOptions { }

// ============================================================================
// 网络请求相关类型
// ============================================================================

/** 网络请求参数 */
interface RequestOptions extends BaseCallback {
    /** 开发者服务器接口地址 */
    url: string;
    /** 请求的参数 */
    data?: string | object | ArrayBuffer;
    /** 设置请求的 header，header 中不能设置 Referer */
    header?: Record<string, string>;
    /** HTTP 请求方法 */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'TRACE' | 'CONNECT';
    /** 返回的数据格式 */
    dataType?: 'json' | 'text';
    /** 响应的数据类型 */
    responseType?: 'text' | 'arraybuffer';
    /** 超时时间，单位为毫秒 */
    timeout?: number;
    /** 开启 http2 */
    enableHttp2?: boolean;
    /** 开启 quic */
    enableQuic?: boolean;
    /** 开启 cache */
    enableCache?: boolean;
    /** 是否开启 HttpDNS 服务 */
    enableHttpDNS?: boolean;
    /** HttpDNS 服务商 Id */
    httpDNSServiceId?: string;
    /** 开启 transfer-encoding chunked */
    enableChunked?: boolean;
    /** wifi下使用移动网络发送请求 */
    forceCellularNetwork?: boolean;
}

/** 网络请求响应 */
interface RequestResponse {
    /** 开发者服务器返回的数据 */
    data: string | object | ArrayBuffer;
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number;
    /** 开发者服务器返回的 HTTP Response Header */
    header: Record<string, string>;
    /** 网络请求过程中一些调试信息 */
    profile?: RequestProfile;
}

/** 网络请求调试信息 */
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
    /** 协议层统计 */
    httpRttEstimate: number;
    /** 协议层统计 */
    transportRttEstimate: number;
}

// ============================================================================
// 系统信息相关类型
// ============================================================================

/** 系统信息 */
interface SystemInfo {
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
    /** 用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准 */
    fontSizeSetting: number;
    /** 客户端基础库版本 */
    SDKVersion: string;
    /** 设备性能等级，-2 或 0：该设备无法运行小游戏，-1：性能未知，>=1 设备性能值，该值越高，设备性能越好 (目前设备性能值包括：1、2、3、4、5、6、7、8、9、10、11) */
    benchmarkLevel: number;
    /** 允许微信使用相册的开关（仅 iOS 有效） */
    albumAuthorized?: boolean;
    /** 允许微信使用摄像头的开关 */
    cameraAuthorized?: boolean;
    /** 允许微信使用定位的开关 */
    locationAuthorized?: boolean;
    /** 允许微信使用麦克风的开关 */
    microphoneAuthorized?: boolean;
    /** 允许微信通知的开关 */
    notificationAuthorized?: boolean;
    /** 允许微信通知带有提醒的开关（仅 iOS 有效） */
    notificationAlertAuthorized?: boolean;
    /** 允许微信通知带有标记的开关（仅 iOS 有效） */
    notificationBadgeAuthorized?: boolean;
    /** 允许微信通知带有声音的开关（仅 iOS 有效） */
    notificationSoundAuthorized?: boolean;
    /** 蓝牙的系统开关 */
    bluetoothEnabled?: boolean;
    /** 地理位置的系统开关 */
    locationEnabled?: boolean;
    /** Wi-Fi 的系统开关 */
    wifiEnabled?: boolean;
    /** 竖屏正方向下的安全区域 */
    safeArea: SafeArea;
    /** 在竖屏正方向下的安全区域插入位置 */
    safeAreaInsets: SafeAreaInsets;
    /** 窗口上边缘的 y 值 */
    screenTop: number;
}

/** 窗口信息 */
interface WindowInfo {
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
    /** 竖屏正方向下的安全区域 */
    safeArea: SafeArea;
    /** 窗口上边缘的 y 值 */
    screenTop: number;
}

/** 设备信息 */
interface DeviceInfo {
    /** 设备品牌 */
    brand: string;
    /** 设备型号 */
    model: string;
    /** 操作系统及版本 */
    system: string;
    /** 客户端平台 */
    platform: string;
    /** 设备性能等级 */
    benchmarkLevel: number;
}

/** 应用基础信息 */
interface AppBaseInfo {
    /** 客户端基础库版本 */
    SDKVersion: string;
    /** 是否已打开调试。可通过右上角菜单或 mgtv.setEnableDebug 打开调试 */
    enableDebug: boolean;
    /** 当前小程序运行的宿主环境 */
    host: AppBaseInfoHost;
    /** 微信设置的语言 */
    language: string;
    /** 微信版本号 */
    version: string;
    /** 系统当前主题，取值为light或dark，全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏） */
    theme?: 'light' | 'dark';
}

/** 宿主环境信息 */
interface AppBaseInfoHost {
    /** 宿主 app 对应的 appId */
    appId: string;
}

/** 安全区域 */
interface SafeArea {
    /** 左上角横坐标 */
    left: number;
    /** 右下角横坐标 */
    right: number;
    /** 左上角纵坐标 */
    top: number;
    /** 右下角纵坐标 */
    bottom: number;
    /** 安全区域的宽度 */
    width: number;
    /** 安全区域的高度 */
    height: number;
}

/** 安全区域插入位置 */
interface SafeAreaInsets {
    /** 顶部安全区域插入位置 */
    top: number;
    /** 左侧安全区域插入位置 */
    left: number;
    /** 右侧安全区域插入位置 */
    right: number;
    /** 底部安全区域插入位置 */
    bottom: number;
}

// ============================================================================
// 存储相关类型
// ============================================================================

/** 设置存储参数 */
interface SetStorageOptions extends BaseCallback {
    /** 本地缓存中指定的 key */
    key: string;
    /** 需要存储的内容。只支持原生类型、Date、及能够通过 JSON.stringify 序列化的对象 */
    data: any;
}

/** 获取存储参数 */
interface GetStorageOptions extends BaseCallback {
    /** 本地缓存中指定的 key */
    key: string;
    /** 接口调用成功的回调函数 */
    success?: (res: GetStorageResponse) => void;
}

/** 获取存储响应 */
interface GetStorageResponse {
    /** key对应的内容 */
    data: any;
}

/** 移除存储参数 */
interface RemoveStorageOptions extends BaseCallback {
    /** 本地缓存中指定的 key */
    key: string;
}

/** 获取存储信息响应 */
interface GetStorageInfoResponse {
    /** 当前storage中所有的key */
    keys: string[];
    /** 当前占用的空间大小, 单位 KB */
    currentSize: number;
    /** 限制的空间大小，单位 KB */
    limitSize: number;
}

// ============================================================================
// 路由相关类型
// ============================================================================

/** 保留当前页面，跳转到应用内的某个页面参数 */
interface NavigateToOptions {
    /** 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数 */
    url: string;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 关闭当前页面，跳转到应用内的某个页面参数 */
interface RedirectToOptions {
    /** 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数 */
    url: string;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 跳转到 tabBar 页面参数 */
interface SwitchTabOptions {
    /** 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数 */
    url: string;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 关闭所有页面，打开到应用内的某个页面参数 */
interface ReLaunchOptions {
    /** 需要跳转的应用内页面路径，路径后可以带参数 */
    url: string;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 关闭当前页面，返回上一页面或多级页面参数 */
interface NavigateBackOptions {
    /** 返回的页面数，如果 delta 大于现有页面数，则返回到首页 */
    delta?: number;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 获取当前页面栈结果 */
interface GetCurrentPagesResult {
    /** 页面路径 */
    route: string;
    /** 页面参数 */
    options: Record<string, any>;
}

// ============================================================================
// 设备相关类型
// ============================================================================

/** 获取剪贴板数据参数 */
interface GetClipboardDataOptions extends BaseCallback {
    /** 接口调用成功的回调函数 */
    success?: (res: GetClipboardDataResponse) => void;
}

/** 获取剪贴板数据响应 */
interface GetClipboardDataResponse {
    /** 剪贴板的内容 */
    data: string;
}

/** 设置剪贴板数据参数 */
interface SetClipboardDataOptions extends BaseCallback {
    /** 剪贴板的内容 */
    data: string;
}

// ============================================================================
// UI界面相关类型
// ============================================================================

/** 菜单按钮布局位置信息 */
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

/** 显示模态对话框参数 */
interface ShowModalOptions {
    /** 提示的标题 */
    title?: string;
    /** 提示的内容 */
    content?: string;
    /** 是否显示取消按钮 */
    showCancel?: boolean;
    /** 取消按钮的文字，最多 4 个字符 */
    cancelText?: string;
    /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    cancelColor?: string;
    /** 确认按钮的文字，最多 4 个字符 */
    confirmText?: string;
    /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    confirmColor?: string;
    /** 接口调用成功的回调函数 */
    success?: (result: ShowModalResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 显示模态对话框结果 */
interface ShowModalResult {
    /** 为 true 时，表示用户点击了确定按钮 */
    confirm: boolean;
    /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） */
    cancel: boolean;
}

/** 显示操作菜单参数 */
interface ShowActionSheetOptions {
    /** 按钮的文字数组，数组长度最大为 6 */
    itemList: string[];
    /** 按钮的文字颜色 */
    itemColor?: string;
    /** 接口调用成功的回调函数 */
    success?: (result: ShowActionSheetResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 显示操作菜单结果 */
interface ShowActionSheetResult {
    /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
    tapIndex: number;
}

/** 显示消息提示框参数 */
interface ShowToastOptions extends BaseCallback {
    /** 提示的内容 */
    title: string;
    /** 图标 */
    icon?: 'success' | 'error' | 'loading' | 'none';
    /** 自定义图标的本地路径，image 的优先级高于 icon */
    image?: string;
    /** 提示的延迟时间 */
    duration?: number;
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean;
}

/** 显示 loading 提示框参数 */
interface ShowLoadingOptions {
    /** 提示的内容 */
    title: string;
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 隐藏消息提示框参数 */
interface HideToastOptions {
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 隐藏 loading 提示框参数 */
interface HideLoadingOptions {
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 设置导航条标题参数 */
interface SetNavigationBarTitleOptions {
    /** 页面标题 */
    title: string;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 设置导航条颜色参数 */
interface SetNavigationBarColorOptions {
    /** 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 */
    frontColor: string;
    /** 背景颜色值，有效值为十六进制颜色 */
    backgroundColor: string;
    /** 动画效果 */
    animation?: {
        /** 动画变化时间，单位 ms */
        duration?: number;
        /** 动画变化方式 */
        timingFunc?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
    };
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

// ============================================================================
// 媒体相关类型
// ============================================================================

/** 音频上下文 */
interface InnerAudioContext {
    /** 音频资源的地址，用于直接播放 */
    src: string;
    /** 开始播放的位置（单位：s），默认为 0 */
    startTime: number;
    /** 是否自动开始播放，默认为 false */
    autoplay: boolean;
    /** 是否循环播放，默认为 false */
    loop: boolean;
    /** 是否遵循系统静音开关，默认为 true */
    obeyMuteSwitch: boolean;
    /** 音量。范围 0~1。默认为 1 */
    volume: number;
    /** 播放速度。范围 0.5-2.0，默认为 1。（Android 需要 6 及以上版本） */
    playbackRate: number;
    /** 当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读） */
    readonly duration: number;
    /** 当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读） */
    readonly currentTime: number;
    /** 当前是是否暂停或停止状态（只读） */
    readonly paused: boolean;
    /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读） */
    readonly buffered: number;

    /** 播放 */
    play(): void;
    /** 暂停。暂停后的音频再播放会从暂停处开始播放 */
    pause(): void;
    /** 停止。停止后的音频再播放会从头开始播放 */
    stop(): void;
    /** 跳转到指定位置 */
    seek(position: number): void;
    /** 销毁当前实例 */
    destroy(): void;

    /** 音频进入可以播放状态的事件回调 */
    onCanplay(callback: () => void): void;
    /** 音频播放事件回调 */
    onPlay(callback: () => void): void;
    /** 音频暂停事件回调 */
    onPause(callback: () => void): void;
    /** 音频停止事件回调 */
    onStop(callback: () => void): void;
    /** 音频自然播放至结束的事件回调 */
    onEnded(callback: () => void): void;
    /** 音频播放进度更新事件回调 */
    onTimeUpdate(callback: () => void): void;
    /** 音频播放错误事件回调 */
    onError(callback: (error: any) => void): void;
    /** 音频加载中事件回调 */
    onWaiting(callback: () => void): void;
    /** 音频进行跳转操作的事件回调 */
    onSeeking(callback: () => void): void;
    /** 音频完成跳转操作的事件回调 */
    onSeeked(callback: () => void): void;

    /** 取消监听音频进入可以播放状态的事件 */
    offCanplay(callback?: () => void): void;
    /** 取消监听音频播放事件 */
    offPlay(callback?: () => void): void;
    /** 取消监听音频暂停事件 */
    offPause(callback?: () => void): void;
    /** 取消监听音频停止事件 */
    offStop(callback?: () => void): void;
    /** 取消监听音频自然播放至结束的事件 */
    offEnded(callback?: () => void): void;
    /** 取消监听音频播放进度更新事件 */
    offTimeUpdate(callback?: () => void): void;
    /** 取消监听音频播放错误事件 */
    offError(callback?: (error: any) => void): void;
    /** 取消监听音频加载中事件 */
    offWaiting(callback?: () => void): void;
    /** 取消监听音频进行跳转操作的事件 */
    offSeeking(callback?: () => void): void;
    /** 取消监听音频完成跳转操作的事件 */
    offSeeked(callback?: () => void): void;
}

/** 选择图片参数 */
interface ChooseImageOptions {
    /** 最多可以选择的图片张数 */
    count?: number;
    /** 所选的图片的尺寸 */
    sizeType?: ('original' | 'compressed')[];
    /** 选择图片的来源 */
    sourceType?: ('album' | 'camera')[];
    /** 接口调用成功的回调函数 */
    success?: (result: ChooseImageResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 选择图片结果 */
interface ChooseImageResult {
    /** 图片的本地临时文件路径列表 */
    tempFilePaths: string[];
    /** 图片的本地临时文件列表 */
    tempFiles: ChooseImageTempFile[];
}

/** 选择图片临时文件 */
interface ChooseImageTempFile {
    /** 本地临时文件路径 */
    path: string;
    /** 本地临时文件大小，单位 B */
    size: number;
}

/** 预览图片参数 */
interface PreviewImageOptions {
    /** 需要预览的图片链接列表 */
    urls: string[];
    /** 当前显示图片的链接 */
    current?: string;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 获取图片信息参数 */
interface GetImageInfoOptions {
    /** 图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径 */
    src: string;
    /** 接口调用成功的回调函数 */
    success?: (result: GetImageInfoResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 获取图片信息结果 */
interface GetImageInfoResult {
    /** 图片原始宽度，单位px。不考虑旋转 */
    width: number;
    /** 图片原始高度，单位px。不考虑旋转 */
    height: number;
    /** 图片的本地路径 */
    path: string;
    /** 图片的方向 */
    orientation?: 'up' | 'down' | 'left' | 'right' | 'up-mirrored' | 'down-mirrored' | 'left-mirrored' | 'right-mirrored';
    /** 图片的格式 */
    type?: string;
}

/** 选择视频参数 */
interface ChooseVideoOptions {
    /** 是否压缩所选择的视频文件 */
    compressed?: boolean;
    /** 拍摄视频最长拍摄时间，单位秒 */
    maxDuration?: number;
    /** 选择视频的来源 */
    sourceType?: ('album' | 'camera')[];
    /** 摄像头朝向 */
    camera?: 'back' | 'front';
    /** 接口调用成功的回调函数 */
    success?: (result: ChooseVideoResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 选择视频结果 */
interface ChooseVideoResult {
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
}

/** 视频上下文 */
interface VideoContext {
    /** 播放视频 */
    play(): void;
    /** 暂停视频 */
    pause(): void;
    /** 停止视频 */
    stop(): void;
    /** 跳转到指定位置 */
    seek(position: number): void;
    /** 静音/取消静音 */
    muted(muted: boolean): void;
    /** 退出全屏 */
    exitFullScreen(): void;
}

/** 页面内视频上下文 */
interface PageVideoContext extends VideoContext {
    /** 停止 */
    stop(): void;
}

// ============================================================================
// 开放接口相关类型
// ============================================================================

/** 调用接口获取登录凭证参数 */
interface LoginOptions {
    /** 超时时间，单位ms */
    timeout?: number;
    /** 接口调用成功的回调函数 */
    success?: (result: LoginResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 登录结果 */
interface LoginResult {
    /** 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 api，使用 code 换取 openid 和 session_key 等信息 */
    code: string;
}

/** 获取用户信息参数 */
interface GetUserInfoOptions {
    /** 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 mgtv.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息 */
    withCredentials?: boolean;
    /** 显示用户信息的语言 */
    lang?: 'en' | 'zh_CN' | 'zh_TW';
    /** 接口调用成功的回调函数 */
    success?: (result: GetUserInfoResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 获取用户信息结果 */
interface GetUserInfoResult {
    /** 用户信息对象，不包含 openid 等敏感信息 */
    userInfo: UserInfo;
    /** 不包括敏感信息的原始数据字符串，用于计算签名 */
    rawData: string;
    /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息是否无篡改 */
    signature: string;
    /** 包括敏感数据在内的完整用户信息的加密数据 */
    encryptedData?: string;
    /** 加密算法的初始向量 */
    iv?: string;
}

/** 用户信息 */
interface UserInfo {
    /** 用户昵称 */
    nickName: string;
    /** 用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效 */
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
    language: 'en' | 'zh_CN' | 'zh_TW';
}

/** 提前向用户发起授权请求参数 */
interface AuthorizeOptions {
    /** 需要获取权限的 scope */
    scope: string;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 获取用户的当前设置参数 */
interface GetSettingOptions {
    /** 接口调用成功的回调函数 */
    success?: (result: GetSettingResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 获取用户的当前设置结果 */
interface GetSettingResult {
    /** 用户授权结果 */
    authSetting: Record<string, boolean>;
}

/** 调起客户端小程序设置界面参数 */
interface OpenSettingOptions {
    /** 接口调用成功的回调函数 */
    success?: (result: OpenSettingResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 调起客户端小程序设置界面结果 */
interface OpenSettingResult {
    /** 用户授权结果 */
    authSetting: Record<string, boolean>;
}

// ============================================================================
// 支付相关类型
// ============================================================================

/** 道具直购支付参数 */
interface RequestPaymentGameItemOptions extends BaseCallback {
    /** 支付原串 */
    signData: string;
    /** 支付签名 */
    sign: string;
    /** 时间戳 */
    timestamp: number;
}

/** 支付原串数据 */
interface PaymentSignData {
    /** 支付的类型，道具直购为 goods */
    mode: 'goods';
    /** 购买数量 */
    buyQuantity: number;
    /** 道具ID */
    productId: string;
    /** 道具名称 */
    productName: string;
    /** 道具描述 */
    productDesc?: string;
    /** 道具单价（分） */
    goodsPrice: number;
    /** 业务订单号 */
    outTradeNo: string;
    /** 平台，ios 或 android */
    platform?: 'ios' | 'android';
    /** 透传数据 */
    attach?: string;
}

// ============================================================================
// 网络上传下载相关类型
// ============================================================================

/** 上传文件参数 */
interface UploadFileOptions extends BaseCallback {
    /** 开发者服务器地址 */
    url: string;
    /** 要上传文件资源的路径 (本地路径) */
    filePath: string;
    /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
    name: string;
    /** HTTP Header，Header 中不能设置 Referrer */
    header?: Record<string, string>;
    /** HTTP 请求中其他额外的 form data */
    formData?: Record<string, any>;
    /** 超时时间，单位为毫秒 */
    timeout?: number;
    /** 接口调用成功的回调函数 */
    success?: (res: UploadFileResponse) => void;
}

/** 上传文件响应 */
interface UploadFileResponse {
    /** 开发者服务器返回的数据 */
    data: string;
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number;
}

/** 下载文件参数 */
interface DownloadFileOptions extends BaseCallback {
    /** 下载资源的 url */
    url: string;
    /** HTTP Header，Header 中不能设置 Referrer */
    header?: Record<string, string>;
    /** 超时时间，单位为毫秒 */
    timeout?: number;
    /** 指定文件下载后存储的路径 (本地路径) */
    filePath?: string;
    /** 接口调用成功的回调函数 */
    success?: (res: DownloadFileResponse) => void;
}

/** 下载文件响应 */
interface DownloadFileResponse {
    /** 临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件 */
    tempFilePath?: string;
    /** 用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致 */
    filePath?: string;
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number;
}

/** 上传任务对象 */
interface UploadTask {
    /** 监听上传进度变化事件 */
    onProgressUpdate(callback: (res: UploadProgressCallbackResult) => void): void;
    /** 取消监听上传进度变化事件 */
    offProgressUpdate(callback?: (res: UploadProgressCallbackResult) => void): void;
    /** 监听 HTTP Response Header 事件 */
    onHeadersReceived(callback: (res: OnHeadersReceivedCallbackResult) => void): void;
    /** 取消监听 HTTP Response Header 事件 */
    offHeadersReceived(callback?: (res: OnHeadersReceivedCallbackResult) => void): void;
    /** 中断上传任务 */
    abort(): void;
}

/** 下载任务对象 */
interface DownloadTask {
    /** 监听下载进度变化事件 */
    onProgressUpdate(callback: (res: DownloadProgressCallbackResult) => void): void;
    /** 取消监听下载进度变化事件 */
    offProgressUpdate(callback?: (res: DownloadProgressCallbackResult) => void): void;
    /** 监听 HTTP Response Header 事件 */
    onHeadersReceived(callback: (res: OnHeadersReceivedCallbackResult) => void): void;
    /** 取消监听 HTTP Response Header 事件 */
    offHeadersReceived(callback?: (res: OnHeadersReceivedCallbackResult) => void): void;
    /** 中断下载任务 */
    abort(): void;
}

/** 上传进度回调结果 */
interface UploadProgressCallbackResult {
    /** 上传进度百分比 */
    progress: number;
    /** 已经上传的数据长度，单位 Bytes */
    totalBytesSent: number;
    /** 预期需要上传的数据总长度，单位 Bytes */
    totalBytesExpectedToSend: number;
}

/** 下载进度回调结果 */
interface DownloadProgressCallbackResult {
    /** 下载进度百分比 */
    progress: number;
    /** 已经下载的数据长度，单位 Bytes */
    totalBytesWritten: number;
    /** 预期需要下载的数据总长度，单位 Bytes */
    totalBytesExpectedToWrite: number;
}

/** HTTP Response Header 事件回调结果 */
interface OnHeadersReceivedCallbackResult {
    /** 开发者服务器返回的 HTTP Response Header */
    header: Record<string, string>;
}

// ============================================================================
// 文件系统相关类型
// ============================================================================

/** 文件系统管理器 */
interface FileSystemManager {
    /** 读取文件 */
    readFile(options: ReadFileOptions): void;
    /** 写入文件 */
    writeFile(options: WriteFileOptions): void;
    /** 删除文件 */
    unlink(options: UnlinkOptions): void;
    /** 创建目录 */
    mkdir(options: MkdirOptions): void;
    /** 删除目录 */
    rmdir(options: RmdirOptions): void;
    /** 获取文件信息 */
    stat(options: StatOptions): void;
    /** 重命名文件 */
    rename(options: RenameOptions): void;
    /** 复制文件 */
    copyFile(options: CopyFileOptions): void;
    /** 获取目录内文件列表 */
    readdir(options: ReaddirOptions): void;
}

/** 读取文件参数 */
interface ReadFileOptions extends BaseCallback {
    /** 要读取的文件的路径 */
    filePath: string;
    /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容 */
    encoding?: 'ascii' | 'base64' | 'binary' | 'hex' | 'ucs2' | 'ucs-2' | 'utf16le' | 'utf-16le' | 'utf-8' | 'utf8' | 'latin1';
    /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte */
    position?: number;
    /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte */
    length?: number;
}

/** 写入文件参数 */
interface WriteFileOptions extends BaseCallback {
    /** 要写入的文件路径 */
    filePath: string;
    /** 要写入的文本或二进制数据 */
    data: string | ArrayBuffer;
    /** 指定写入文件的字符编码 */
    encoding?: 'ascii' | 'base64' | 'binary' | 'hex' | 'ucs2' | 'ucs-2' | 'utf16le' | 'utf-16le' | 'utf-8' | 'utf8' | 'latin1';
}

/** 删除文件参数 */
interface UnlinkOptions extends BaseCallback {
    /** 要删除的文件路径 */
    filePath: string;
}

/** 创建目录参数 */
interface MkdirOptions extends BaseCallback {
    /** 创建的目录路径 */
    dirPath: string;
    /** 是否在递归创建该目录的上级目录后再创建该目录 */
    recursive?: boolean;
}

/** 删除目录参数 */
interface RmdirOptions extends BaseCallback {
    /** 要删除的目录路径 */
    dirPath: string;
    /** 是否递归删除目录 */
    recursive?: boolean;
}

/** 获取文件信息参数 */
interface StatOptions extends BaseCallback {
    /** 文件/目录路径 */
    path: string;
    /** 是否递归获取目录下的每个文件的 Stats 信息 */
    recursive?: boolean;
}

/** 重命名文件参数 */
interface RenameOptions extends BaseCallback {
    /** 源文件路径，可以是普通文件或目录 */
    oldPath: string;
    /** 新文件路径 */
    newPath: string;
}

/** 复制文件参数 */
interface CopyFileOptions extends BaseCallback {
    /** 源文件路径，只可以是普通文件 */
    srcPath: string;
    /** 目标文件路径 */
    destPath: string;
}

/** 获取目录内文件列表参数 */
interface ReaddirOptions extends BaseCallback {
    /** 要读取的目录路径 */
    dirPath: string;
}

// ============================================================================
// 分享相关类型
// ============================================================================

/** 转发参数 */
interface ShareAppMessageOptions {
    /** 转发标题，不传则默认使用当前小游戏的昵称 */
    title?: string;
    /** 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径 */
    imageUrl?: string;
    /** 查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 mgtv.getLaunchOptionsSync() 或 mgtv.onShow() 获取启动参数中的 query */
    query?: string;
    /** 转发的类型 */
    imageUrlId?: string;
    /** 是否转发到当前群。该参数只对从群工具栏打开的场景下生效，默认转发到当前群，填入false时可转发到其他会话 */
    toCurrentGroup?: boolean;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 分享到朋友圈参数 */
interface ShareTimelineOptions {
    /** 自定义分享标题，即朋友圈列表页上显示的标题 */
    title?: string;
    /** 自定义分享的查询字符串，必须是 key1=val1&key2=val2 的格式。分享的页面路径将是当前页面 path 加上 query。从这个分享链接进入小程序时，可通过 mgtv.onShow() 或 mgtv.getLaunchOptionsSync() 中的 query 参数获取到这个自定义的查询字符串 */
    query?: string;
    /** 自定义分享图片，可以是本地文件或者网络图片。支持 PNG 及 JPG，显示图片长宽比是 1:1 */
    imageUrl?: string;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 获取转发详细信息参数 */
interface GetShareInfoOptions {
    /** shareTicket */
    shareTicket: string;
    /** 超时时间，单位 ms */
    timeout?: number;
    /** 接口调用成功的回调函数 */
    success?: (result: GetShareInfoResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 获取转发详细信息结果 */
interface GetShareInfoResult {
    /** 错误信息 */
    errMsg: string;
    /** 包括敏感数据在内的完整转发信息的加密数据 */
    encryptedData: string;
    /** 加密算法的初始向量 */
    iv: string;
}

/** 隐藏转发按钮参数 */
interface HideShareMenuOptions {
    /** 本接口为 Beta 版本，暂只在 Android 平台支持。需要隐藏的转发按钮名称列表，默认['shareAppMessage', 'shareTimeline']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" */
    menus?: string[];
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 显示转发按钮参数 */
interface ShowShareMenuOptions {
    /** 需要显示的转发按钮名称列表，默认['shareAppMessage', 'shareTimeline']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" */
    menus?: string[];
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 更新转发属性参数 */
interface UpdateShareMenuOptions {
    /** 是否使用带 shareTicket 的转发 */
    withShareTicket?: boolean;
    /** 是否是动态消息，详见动态消息 */
    isUpdatableMessage?: boolean;
    /** 动态消息的 activityId。通过 updatableMessage.createActivityId 接口获取 */
    activityId?: string;
    /** 动态消息的模板信息 */
    templateInfo?: UpdatableMessageTemplateInfo;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 动态消息的模板信息 */
interface UpdatableMessageTemplateInfo {
    /** 参数列表 */
    parameterList: UpdatableMessageParameter[];
}

/** 动态消息参数 */
interface UpdatableMessageParameter {
    /** 参数名 */
    name: string;
    /** 参数值 */
    value: string;
}

// ============================================================================
// 广告相关类型
// ============================================================================

/** 创建激励视频广告参数 */
interface CreateRewardedVideoAdOptions {
    /** 广告单元 id */
    adUnitId: string;
}

/** 激励视频广告关闭回调参数 */
interface RewardedVideoAdCloseCallbackResult {
    /** 视频是否是在用户完整观看的情况下被关闭的，true 表示用户是在视频播放完以后关闭的视频，false 表示用户在视频播放过程中关闭了视频 */
    isEnded: boolean;
}

/** 激励视频广告错误回调参数 */
interface RewardedVideoAdErrorCallbackResult {
    /** 错误信息 */
    errMsg: string;
    /** 错误码 */
    errCode?: number;
}

/** 激励视频广告组件 */
interface RewardedVideoAd {
    /** 加载激励视频广告 */
    load(): Promise<void>;

    /** 显示激励视频广告 */
    show(): Promise<void>;

    /** 销毁激励视频广告组件 */
    destroy(): void;

    /** 监听激励视频广告加载事件 */
    onLoad(callback: () => void): void;

    /** 取消监听激励视频广告加载事件 */
    offLoad(callback?: () => void): void;

    /** 监听激励视频错误事件 */
    onError(callback: (res: RewardedVideoAdErrorCallbackResult) => void): void;

    /** 取消监听激励视频错误事件 */
    offError(callback?: (res: RewardedVideoAdErrorCallbackResult) => void): void;

    /** 监听用户关闭广告事件 */
    onClose(callback: (res: RewardedVideoAdCloseCallbackResult) => void): void;

    /** 取消监听用户关闭广告事件 */
    offClose(callback?: (res: RewardedVideoAdCloseCallbackResult) => void): void;
}

// ============================================================================
// 环境变量
// ============================================================================

/** 环境变量 */
interface Env {
    /** 文档目录 */
    USER_DATA_PATH: string;
}

// ============================================================================
// 主要的mgtv全局对象
// ============================================================================

/** 芒果TV小游戏全局对象 */
interface MGTV {
    // 生命周期相关
    /** 获取小游戏启动时的参数 */
    getLaunchOptionsSync(): LaunchOptions;
    /** 监听小游戏切前台事件 */
    onShow(callback: (options: OnShowOptions) => void): void;
    /** 取消监听小游戏切前台事件 */
    offShow(callback?: (options: OnShowOptions) => void): void;
    /** 监听小游戏切后台事件 */
    onHide(callback: (options: OnHideOptions) => void): void;
    /** 取消监听小游戏切后台事件 */
    offHide(callback?: (options: OnHideOptions) => void): void;
    /** 监听小游戏错误事件 */
    onError(callback: (options: OnErrorOptions) => void): void;
    /** 取消监听小游戏错误事件 */
    offError(callback?: (options: OnErrorOptions) => void): void;
    /** 监听未处理的 Promise 拒绝事件 */
    onUnhandledRejection(callback: (options: OnUnhandledRejectionOptions) => void): void;
    /** 取消监听未处理的 Promise 拒绝事件 */
    offUnhandledRejection(callback?: (options: OnUnhandledRejectionOptions) => void): void;
    /** 监听音频因为受到系统占用而被中断开始事件 */
    onAudioInterruptionBegin(callback: (options: OnAudioInterruptionBeginOptions) => void): void;
    /** 取消监听音频因为受到系统占用而被中断开始事件 */
    offAudioInterruptionBegin(callback?: (options: OnAudioInterruptionBeginOptions) => void): void;
    /** 监听音频中断结束事件 */
    onAudioInterruptionEnd(callback: (options: OnAudioInterruptionEndOptions) => void): void;
    /** 取消监听音频中断结束事件 */
    offAudioInterruptionEnd(callback?: (options: OnAudioInterruptionEndOptions) => void): void;

    // 网络请求
    /** 网络请求 */
    request(options: RequestOptions): void;

    // 网络上传下载相关
    /** 将本地资源上传到服务器 */
    uploadFile(options: UploadFileOptions): UploadTask;
    /** 下载文件资源到本地 */
    downloadFile(options: DownloadFileOptions): DownloadTask;

    // 系统信息相关
    /** 获取系统信息 */
    getSystemInfo(options?: {
        /** 接口调用成功的回调函数 */
        success?: (result: SystemInfo) => void;
        /** 接口调用失败的回调函数 */
        fail?: (error: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }): void;

    /** 同步获取系统信息 */
    getSystemInfoSync(): SystemInfo;

    /** 获取设备信息 */
    getDeviceInfo(options?: {
        /** 接口调用成功的回调函数 */
        success?: (result: DeviceInfo) => void;
        /** 接口调用失败的回调函数 */
        fail?: (error: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }): void;

    /** 同步获取设备信息 */
    getDeviceInfoSync(): DeviceInfo;

    /** 获取微信APP基础信息 */
    getAppBaseInfo(options?: {
        /** 接口调用成功的回调函数 */
        success?: (result: AppBaseInfo) => void;
        /** 接口调用失败的回调函数 */
        fail?: (error: any) => void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: () => void;
    }): void;

    /** 同步获取微信APP基础信息 */
    getAppBaseInfoSync(): AppBaseInfo;

    /** 获取窗口信息 */
    getWindowInfo(): WindowInfo;

    /** 同步获取窗口信息 */
    getWindowInfoSync(): WindowInfo;

    // 本地存储
    /** 将数据存储在本地缓存中指定的 key 中 */
    setStorage(options: SetStorageOptions): void;
    /** 从本地缓存中异步获取指定 key 的内容 */
    getStorage(options: GetStorageOptions): void;
    /** 从本地缓存中移除指定 key */
    removeStorage(options: RemoveStorageOptions): void;
    /** 清理本地数据缓存 */
    clearStorage(options?: BaseCallback): void;
    /** 异步获取当前storage的相关信息 */
    getStorageInfo(options?: BaseCallback & { success?: (res: GetStorageInfoResponse) => void }): void;
    /** 同步获取当前storage的相关信息 */
    getStorageInfoSync(): GetStorageInfoResponse;
    /** 同步将数据存储在本地缓存中指定的 key 中 */
    setStorageSync(key: string, data: any): void;
    /** 同步从本地缓存中获取指定 key 的内容 */
    getStorageSync(key: string): any;
    /** 同步从本地缓存中移除指定 key */
    removeStorageSync(key: string): void;
    /** 同步清理本地数据缓存 */
    clearStorageSync(): void;

    // 设备相关
    /** 获取系统剪贴板的内容 */
    getClipboardData(options: GetClipboardDataOptions): void;
    /** 设置系统剪贴板的内容 */
    setClipboardData(options: SetClipboardDataOptions): void;

    // UI界面
    /** 获取菜单按钮（右上角胶囊按钮）的布局位置信息 */
    getMenuButtonBoundingClientRect(): MenuButtonBoundingClientRect;
    /** 显示模态对话框 */
    showModal(options: ShowModalOptions): void;
    /** 显示操作菜单 */
    showActionSheet(options: ShowActionSheetOptions): void;
    /** 显示消息提示框 */
    showToast(options: ShowToastOptions): void;
    /** 隐藏消息提示框 */
    hideToast(options?: HideToastOptions): void;
    /** 显示 loading 提示框 */
    showLoading(options: ShowLoadingOptions): void;
    /** 隐藏 loading 提示框 */
    hideLoading(options?: HideLoadingOptions): void;
    /** 设置当前页面的标题 */
    setNavigationBarTitle(options: SetNavigationBarTitleOptions): void;
    /** 设置页面导航条颜色 */
    setNavigationBarColor(options: SetNavigationBarColorOptions): void;
    /** 隐藏菜单按钮 */
    hideMenuButton(): void;
    /** 显示菜单按钮 */
    showMenuButton(): void;

    // 媒体相关
    /** 创建内部 audio 上下文 InnerAudioContext 对象 */
    createInnerAudioContext(): InnerAudioContext;
    /** 从本地相册选择图片或使用相机拍照 */
    chooseImage(options: ChooseImageOptions): void;
    /** 在新页面中全屏预览图片 */
    previewImage(options: PreviewImageOptions): void;
    /** 获取图片信息 */
    getImageInfo(options: GetImageInfoOptions): void;
    /** 拍摄视频或从手机相册中选视频 */
    chooseVideo(options: ChooseVideoOptions): void;
    /** 创建 video 上下文 VideoContext 对象 */
    createVideoContext(id: string): VideoContext;
    /** 创建页面内的 video 上下文 PageVideoContext 对象 */
    createPageVideoContext(): PageVideoContext;

    // 开放接口相关
    /** 调用接口获取登录凭证（code） */
    login(options?: LoginOptions): void;
    /** 获取用户信息 */
    getUserInfo(options?: GetUserInfoOptions): void;
    /** 提前向用户发起授权请求 */
    authorize(options: AuthorizeOptions): void;
    /** 获取用户的当前设置 */
    getSetting(options?: GetSettingOptions): void;
    /** 调起客户端小程序设置界面 */
    openSetting(options?: OpenSettingOptions): void;

    // 支付相关
    /** 发起道具直购支付请求 */
    requestPaymentGameItem(options: RequestPaymentGameItemOptions): void;

    // 文件系统
    /** 获取文件系统管理器 */
    getFileSystemManager(): FileSystemManager;

    // 分享相关
    /** 主动拉起转发，进入选择通讯录界面 */
    shareAppMessage(options?: ShareAppMessageOptions): void;
    /** 分享到朋友圈 */
    shareTimeline(options?: ShareTimelineOptions): void;
    /** 获取转发详细信息 */
    getShareInfo(options: GetShareInfoOptions): void;
    /** 隐藏转发按钮 */
    hideShareMenu(options?: HideShareMenuOptions): void;
    /** 显示当前页面的转发按钮 */
    showShareMenu(options?: ShowShareMenuOptions): void;
    /** 更新转发属性 */
    updateShareMenu(options?: UpdateShareMenuOptions): void;

    // 广告相关
    /** 创建激励视频广告组件 */
    createRewardedVideoAd(options: CreateRewardedVideoAdOptions): RewardedVideoAd;

    // 路由相关
    /** 保留当前页面，跳转到应用内的某个页面 */
    navigateTo(options: NavigateToOptions): void;
    /** 关闭当前页面，跳转到应用内的某个页面 */
    redirectTo(options: RedirectToOptions): void;
    /** 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 */
    switchTab(options: SwitchTabOptions): void;
    /** 关闭所有页面，打开到应用内的某个页面 */
    reLaunch(options: ReLaunchOptions): void;
    /** 关闭当前页面，返回上一页面或多级页面 */
    navigateBack(options?: NavigateBackOptions): void;
    /** 获取当前页面栈 */
    getCurrentPages(): GetCurrentPagesResult[];

    // 环境变量
    /** 环境变量 */
    env: Env;
}

// ============================================================================
// 全局声明
// ============================================================================

// 全局声明
declare global {
    const mgtv: MGTV;
}

// 导出类型
export {
    MGTV,
    BaseCallback,
    ErrorResponse,
    LaunchOptions,
    ReferrerInfo,
    OnShowOptions,
    OnHideOptions,
    OnErrorOptions,
    OnUnhandledRejectionOptions,
    OnAudioInterruptionBeginOptions,
    OnAudioInterruptionEndOptions,
    RequestOptions,
    RequestResponse,
    RequestProfile,
    UploadFileOptions,
    UploadFileResponse,
    DownloadFileOptions,
    DownloadFileResponse,
    UploadTask,
    DownloadTask,
    UploadProgressCallbackResult,
    DownloadProgressCallbackResult,
    OnHeadersReceivedCallbackResult,
    SystemInfo,
    WindowInfo,
    DeviceInfo,
    AppBaseInfo,
    AppBaseInfoHost,
    SafeArea,
    SafeAreaInsets,
    NavigateToOptions,
    RedirectToOptions,
    SwitchTabOptions,
    ReLaunchOptions,
    NavigateBackOptions,
    GetCurrentPagesResult,
    SetStorageOptions,
    GetStorageOptions,
    GetStorageResponse,
    RemoveStorageOptions,
    GetStorageInfoResponse,
    GetClipboardDataOptions,
    GetClipboardDataResponse,
    SetClipboardDataOptions,
    MenuButtonBoundingClientRect,
    ShowModalOptions,
    ShowModalResult,
    ShowActionSheetOptions,
    ShowActionSheetResult,
    ShowToastOptions,
    ShowLoadingOptions,
    HideToastOptions,
    HideLoadingOptions,
    SetNavigationBarTitleOptions,
    SetNavigationBarColorOptions,
    InnerAudioContext,
    ChooseImageOptions,
    ChooseImageResult,
    ChooseImageTempFile,
    PreviewImageOptions,
    GetImageInfoOptions,
    GetImageInfoResult,
    ChooseVideoOptions,
    ChooseVideoResult,
    VideoContext,
    PageVideoContext,
    LoginOptions,
    LoginResult,
    GetUserInfoOptions,
    GetUserInfoResult,
    UserInfo,
    AuthorizeOptions,
    GetSettingOptions,
    GetSettingResult,
    OpenSettingOptions,
    OpenSettingResult,
    RequestPaymentGameItemOptions,
    PaymentSignData,
    FileSystemManager,
    ReadFileOptions,
    WriteFileOptions,
    UnlinkOptions,
    MkdirOptions,
    RmdirOptions,
    StatOptions,
    RenameOptions,
    CopyFileOptions,
    ReaddirOptions,
    ShareAppMessageOptions,
    ShareTimelineOptions,
    GetShareInfoOptions,
    GetShareInfoResult,
    HideShareMenuOptions,
    ShowShareMenuOptions,
    UpdateShareMenuOptions,
    UpdatableMessageTemplateInfo,
    UpdatableMessageParameter,
    CreateRewardedVideoAdOptions,
    RewardedVideoAdCloseCallbackResult,
    RewardedVideoAdErrorCallbackResult,
    RewardedVideoAd,
    Env
};

export default mgtv;
