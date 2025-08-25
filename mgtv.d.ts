/**
 * 芒果TV小游戏API类型定义
 * 基于芒果TV开放平台文档生成
 * @see https://open.mgtv.com/docs/minigame/api
 * @date 2025-08-25
 */

// ============================================================================
// 基础类型定义
// ============================================================================

/** 基础回调接口 */
interface BaseCallback<T = any> {
    /** 接口调用成功的回调函数 */
    success?: (res: T) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/** 基础选项接口 */
interface BaseOptions extends BaseCallback {
    /** 其他扩展属性 */
    [key: string]: any;
}

// ============================================================================
// 设备相关类型
// ============================================================================

/**
 * 设备信息
 */
interface DeviceInfo {
    /** 设备唯一标识，用于标识设备的唯一性 */
    did: string;
    /** MAC地址，设备网络接口的物理地址 */
    mac: string;
    /** IP地址，设备当前的网络IP地址 */
    ip: string;
    /** 制造商，设备的生产厂商名称 */
    mf: string;
    /** 设备型号，具体的设备型号信息 */
    model: string;
    /** 网络类型，如wifi、4g、5g等 */
    networkType: string;
    /** 运营商，网络服务提供商名称 */
    carrier: string;
    /** 屏幕宽度，设备屏幕的像素宽度 */
    screenWidth: string;
    /** 屏幕高度，设备屏幕的像素高度 */
    screenHeight: string;
    /** 操作系统，设备运行的操作系统名称 */
    os: string;
    /** 操作系统版本，具体的系统版本号 */
    osVersion: string;
    /** 平台，运行平台标识 */
    platform: string;
    /** 平台版本，平台的具体版本号 */
    platformVersion: string;
    /** 应用版本，当前应用的版本号 */
    appVersion: string;
    /** SDK版本，芒果TV小游戏SDK的版本号 */
    SDKVersion: string;
    /** 框架版本，底层框架的版本号 */
    frameworkVersion: string;
}

/**
 * 同步获取设备信息
 * @returns 设备信息
 * @see https://open.mgtv.com/docs/minigame/api/system/getDeviceInfo
 */
declare function getDeviceInfo(): DeviceInfo;

/**
 * 异步获取设备信息选项
 */
interface GetDeviceInfoAsyncOptions extends BaseCallback<DeviceInfo> { }

/**
 * 异步获取设备信息
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/system/getDeviceInfoAsync
 */
declare function getDeviceInfoAsync(options: GetDeviceInfoAsyncOptions): void;

// ============================================================================
// 窗口和显示相关类型
// ============================================================================

/** 安全区域信息 */
interface SafeArea {
    /** 安全区域左上角横坐标 */
    left: number;
    /** 安全区域右下角横坐标 */
    right: number;
    /** 安全区域左上角纵坐标 */
    top: number;
    /** 安全区域右下角纵坐标 */
    bottom: number;
    /** 安全区域的宽度，单位逻辑像素 */
    width: number;
    /** 安全区域的高度，单位逻辑像素 */
    height: number;
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
    /** 在竖屏正方向下的安全区域 */
    safeArea: SafeArea;
    /** 窗口上边缘的y值，单位px */
    screenTop: number;
}

/**
 * 获取窗口信息
 * @returns 窗口信息
 * @see https://open.mgtv.com/docs/minigame/api/system/getWindowInfo
 */
declare function getWindowInfo(): WindowInfo;

// ============================================================================
// 应用生命周期和错误处理
// ============================================================================

/** 错误信息对象 */
interface ErrorInfo {
    /** 错误信息 */
    message: string;
    /** 错误调用堆栈 */
    stack: string;
}

/** 错误事件监听器类型 */
type ErrorListener = (error: ErrorInfo) => void;
/** Promise拒绝事件回调结果 */
interface UnhandledRejectionResult {
    /** 拒绝原因，一般是一个 Error 对象 */
    reason: any;
    /** 被拒绝的 promise 对象 */
    promise: Promise<any>;
}
/** Promise拒绝事件监听器类型 */
type RejectionListener = (res: UnhandledRejectionResult) => void;
/** 生命周期事件监听器类型 */
type LifecycleListener = () => void;
/** 摇一摇事件监听器类型 */
type ShakeListener = () => void;

/** 启动参数 */
interface LaunchOptions {
    /** 打开小程序的路径 */
    path: string;
    /** 打开小程序的 query 字段，可通过分享或者唤起协议中配置 */
    query: Record<string, string>;
    /** 场景值 */
    scene: number;
    /** 渠道标识 */
    from: string;
}

/**
 * 移除全局错误事件监听器
 * @param listener 错误事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/events/offError
 */
declare function offError(listener: ErrorListener): void;

/**
 * 移除未处理的 Promise 拒绝事件监听器
 * @param listener 未处理的 Promise 拒绝事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/events/offUnhandledRejection
 */
declare function offUnhandledRejection(listener: RejectionListener): void;

/**
 * 监听全局错误事件
 * @param listener 错误事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/events/onError
 */
declare function onError(listener: ErrorListener): void;

/**
 * 监听未处理的 Promise 拒绝事件
 * @param listener 未处理的 Promise 拒绝事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/events/onUnhandledRejection
 */
declare function onUnhandledRejection(listener: RejectionListener): void;

/**
 * 获取小游戏冷启动时的参数
 * @returns 启动参数
 * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/getLaunchOptionsSync
 */
declare function getLaunchOptionsSync(): LaunchOptions;

/**
 * 取消监听小游戏隐藏到后台事件
 * @param listener 事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/offHide
 */
declare function offHide(listener: LifecycleListener): void;

/**
 * 取消监听小游戏回到前台的事件
 * @param listener 事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/offShow
 */
declare function offShow(listener: LifecycleListener): void;

/**
 * 监听小游戏隐藏到后台事件
 * @param listener 事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/onHide
 */
declare function onHide(listener: LifecycleListener): void;

/**
 * 监听小游戏回到前台的事件
 * @param listener 事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/onShow
 */
declare function onShow(listener: LifecycleListener): void;

// ============================================================================
// UI交互相关类型
// ============================================================================

/** Toast图标类型 */
type ToastIcon = 'success' | 'error' | 'loading' | 'none';

/** 退出小程序选项 */
interface ExitMiniProgramOptions extends BaseCallback { }

/** 隐藏消息提示框选项 */
interface HideToastOptions extends BaseCallback { }

/** 显示消息提示框选项 */
interface ShowToastOptions extends BaseCallback {
    /** 提示的内容 */
    title: string;
    /** 图标，默认为 'none' */
    icon?: ToastIcon;
    /** 自定义图标的本地路径，image 的优先级高于 icon */
    image?: string;
    /** 提示的延迟时间，单位毫秒，默认：1500 */
    duration?: number;
    /** 是否显示透明蒙层，防止触摸穿透，默认：false */
    mask?: boolean;
}

/** 显示模态对话框结果 */
interface ShowModalResult {
    /** editable 为 true 时，用户输入的文本 */
    content?: string;
    /** 为 true 时，表示用户点击了确定按钮 */
    confirm: boolean;
    /** 为 true 时，表示用户点击了取消 */
    cancel: boolean;
}

/** 显示模态对话框选项 */
interface ShowModalOptions extends BaseCallback<ShowModalResult> {
    /** 提示的标题 */
    title?: string;
    /** 提示的内容 */
    content?: string;
    /** 是否显示取消按钮，默认为 true */
    showCancel?: boolean;
    /** 取消按钮的文字，最多 4 个字符，默认为"取消" */
    cancelText?: string;
    /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串，默认为"#000000" */
    cancelColor?: string;
    /** 确认按钮的文字，最多 4 个字符，默认为"确定" */
    confirmText?: string;
    /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串，默认为"#576B95" */
    confirmColor?: string;
}

/**
 * 退出当前小程序
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/navigation/exitMiniProgram
 */
declare function exitMiniProgram(options?: ExitMiniProgramOptions): void;

/**
 * 隐藏显示消息提示框
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/interaction/hideToast
 */
declare function hideToast(options?: HideToastOptions): void;

/**
 * 显示模态对话框
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/interaction/showModal
 */
declare function showModal(options: ShowModalOptions): void;

/**
 * 显示消息提示框
 * @param options 显示消息提示框的选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/interaction/showToast
 */
declare function showToast(options: ShowToastOptions): void;

// ============================================================================
// 菜单和导航栏相关类型
// ============================================================================

/** 菜单按钮布局位置信息 */
interface MenuButtonBoundingClientRect {
    width: number;
    height: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
}

/** 菜单按钮选项 */
interface MenuButtonOptions extends BaseCallback { }

/** 导航栏前景色类型 */
type NavigationBarFrontColor = 'black' | 'white';

/** 设置导航栏颜色选项 */
interface SetNavigationBarColorOptions extends BaseCallback {
    frontColor: NavigationBarFrontColor;
    backgroundColor: string;
}

/** 设置导航栏标题选项 */
interface SetNavigationBarTitleOptions extends BaseCallback {
    title: string;
}

/**
 * 获取菜单按钮的布局位置信息
 * @returns 菜单按钮的布局位置信息
 * @see https://open.mgtv.com/docs/minigame/api/ui/menu/getMenuButtonBoundingClientRect
 */
declare function getMenuButtonBoundingClientRect(): MenuButtonBoundingClientRect;

/**
 * 隐藏菜单按钮
 * @param options 隐藏菜单按钮的选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/menu/hideMenuButton
 */
declare function hideMenuButton(options?: MenuButtonOptions): void;

/**
 * 显示菜单按钮
 * @param options 显示菜单按钮的选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/menu/showMenuButton
 */
declare function showMenuButton(options?: MenuButtonOptions): void;

/**
 * 设置导航栏颜色
 * @param options 设置导航栏颜色的选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/navigation/setNavigationBarColor
 */
declare function setNavigationBarColor(options: SetNavigationBarColorOptions): void;

/**
 * 设置导航栏标题
 * @param options 设置导航栏标题的选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/navigation/setNavigationBarTitle
 */
declare function setNavigationBarTitle(options: SetNavigationBarTitleOptions): void;

// ============================================================================
// 网络请求相关类型
// ============================================================================

/** HTTP请求方法 */
type HttpMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

/** 数据格式类型 */
type DataType = 'json' | string;

/** 网络请求成功结果 */
interface RequestSuccessResult {
    data: any;
    errMsg: string;
}

/** 网络请求失败结果 */
interface RequestFailResult {
    data: any;
    errMsg: string;
    errCode: string;
}

/** 网络请求选项 */
interface RequestOptions {
    /** 开发者服务器接口地址 */
    url: string;
    /** HTTP 请求方法 */
    method?: HttpMethod;
    /** 设置请求的 header，header 中不能设置 Referer */
    header?: Record<string, string>;
    /** 请求的参数 */
    data?: any;
    /** 返回的数据格式 */
    dataType?: DataType;
    /** 接口调用成功的回调函数 */
    success?: (res: RequestSuccessResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (res: RequestFailResult) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/**
 * 发起网络请求
 * @param options 网络请求的选项
 * @see https://open.mgtv.com/docs/minigame/api/network/request
 */
declare function request(options: RequestOptions): void;

/** 下载进度信息 */
interface DownloadProgressResult {
    progress: number;
    totalBytesWritten: number;
    totalBytesExpectedToWrite: number;
}

/** 上传进度信息 */
interface UploadProgressResult {
    progress: number;
    totalBytesSent: number;
    totalBytesExpectedToSend: number;
}

/** 下载文件成功结果 */
interface DownloadFileSuccessResult {
    tempFilePath?: string;
    filePath?: string;
    statusCode: number;
}

/** 上传文件成功结果 */
interface UploadFileSuccessResult {
    data: string;
    statusCode: number;
}

/** 下载文件选项 */
interface DownloadFileOptions extends BaseCallback<DownloadFileSuccessResult> {
    url: string;
    header?: Record<string, string>;
    timeout?: number;
    filePath?: string;
}

/** 上传文件选项 */
interface UploadFileOptions extends BaseCallback<UploadFileSuccessResult> {
    url: string;
    filePath: string;
    name: string;
    header?: Record<string, string>;
    formData?: Record<string, any>;
    timeout?: number;
}

/** 下载任务对象 */
interface DownloadTask {
    onProgressUpdate?: (callback: (res: DownloadProgressResult) => void) => void;
    abort?: () => void;
}

/** 上传任务对象 */
interface UploadTask {
    onProgressUpdate?: (callback: (res: UploadProgressResult) => void) => void;
    abort?: () => void;
}

/**
 * 下载文件
 * @param options 下载文件的选项
 * @returns 下载任务对象
 * @see https://open.mgtv.com/docs/minigame/api/network/downloadFile
 */
declare function downloadFile(options: DownloadFileOptions): DownloadTask;

/**
 * 上传文件
 * @param options 上传文件的选项
 * @returns 上传任务对象
 * @see https://open.mgtv.com/docs/minigame/api/network/uploadFile
 */
declare function uploadFile(options: UploadFileOptions): UploadTask;

// ============================================================================
// WebSocket相关类型
// ============================================================================

/** WebSocket连接选项 */
interface ConnectSocketOptions extends BaseCallback {
    /** 开发者服务器 wss 接口地址 */
    url: string;
    /** HTTP Header，Header 中不能设置 Referrer */
    header?: Record<string, string>;
    /** 子协议数组 */
    protocols?: string[];
}

/** 关闭WebSocket选项 */
interface CloseSocketOptions extends BaseCallback {
    /** 一个数字值表示关闭连接的状态号，表示连接被关闭的原因，默认1000（表示正常关闭连接） */
    code?: number;
    /** 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8文本（不是字符） */
    reason?: string;
}

/** 发送WebSocket消息选项 */
interface SendSocketMessageOptions extends BaseCallback {
    /** 需要发送的内容 */
    data: string | ArrayBuffer;
}

/** WebSocket连接打开事件回调结果 */
interface SocketOpenResult {
    /** 连接打开时的HTTP响应Header */
    header: Record<string, string>;
}

/** WebSocket连接关闭事件回调结果 */
interface SocketCloseResult {
    /** 关闭连接的状态号 */
    code: number;
    /** 关闭连接的原因 */
    reason: string;
}

/** WebSocket错误事件回调结果 */
interface SocketErrorResult {
    /** 错误信息 */
    errMsg: string;
}

/** WebSocket消息事件回调结果 */
interface SocketMessageResult {
    /** 服务器返回的消息 */
    data: string | ArrayBuffer;
}

/** WebSocket事件监听器类型 */
type SocketOpenListener = (res: SocketOpenResult) => void;
type SocketCloseListener = (res: SocketCloseResult) => void;
type SocketErrorListener = (res: SocketErrorResult) => void;
type SocketMessageListener = (res: SocketMessageResult) => void;

/** SocketTask对象 */
interface SocketTask {
    /** 通过 WebSocket 连接发送数据 */
    send(options: SendSocketMessageOptions): void;
    /** 关闭 WebSocket 连接 */
    close(options?: CloseSocketOptions): void;
    /** 监听 WebSocket 连接打开事件 */
    onOpen(callback: SocketOpenListener): void;
    /** 监听 WebSocket 连接关闭事件 */
    onClose(callback: SocketCloseListener): void;
    /** 监听 WebSocket 错误事件 */
    onError(callback: SocketErrorListener): void;
    /** 监听 WebSocket 接受到服务器的消息事件 */
    onMessage(callback: SocketMessageListener): void;
}

/**
 * 创建一个 WebSocket 连接
 * @param options WebSocket连接选项
 * @returns SocketTask对象
 * @see https://open.mgtv.com/docs/minigame/api/network/websocket/connectSocket
 */
declare function connectSocket(options: ConnectSocketOptions): SocketTask;

/**
 * 关闭 WebSocket 连接
 * @param options 关闭选项
 * @see https://open.mgtv.com/docs/minigame/api/network/websocket/closeSocket
 */
declare function closeSocket(options?: CloseSocketOptions): void;

/**
 * 通过 WebSocket 连接发送数据
 * @param options 发送消息选项
 * @see https://open.mgtv.com/docs/minigame/api/network/websocket/sendSocketMessage
 */
declare function sendSocketMessage(options: SendSocketMessageOptions): void;

/**
 * 监听WebSocket连接打开事件
 * @param callback 回调函数
 * @see https://open.mgtv.com/docs/minigame/api/network/websocket/onSocketOpen
 */
declare function onSocketOpen(callback: SocketOpenListener): void;

/**
 * 监听WebSocket连接关闭事件
 * @param callback 回调函数
 * @see https://open.mgtv.com/docs/minigame/api/network/websocket/onSocketClose
 */
declare function onSocketClose(callback: SocketCloseListener): void;

/**
 * 监听WebSocket错误事件
 * @param callback 回调函数
 * @see https://open.mgtv.com/docs/minigame/api/network/websocket/onSocketError
 */
declare function onSocketError(callback: SocketErrorListener): void;

/**
 * 监听WebSocket接受到服务器的消息事件
 * @param callback 回调函数
 * @see https://open.mgtv.com/docs/minigame/api/network/websocket/onSocketMessage
 */
declare function onSocketMessage(callback: SocketMessageListener): void;

// ============================================================================
// 文件系统相关类型
// ============================================================================

/** 文件编码类型 */
type FileEncoding = 'ascii' | 'base64' | 'binary' | 'hex' | 'ucs2' | 'ucs-2' | 'utf16le' | 'utf-16le' | 'utf8' | 'utf-8' | 'latin1';

/** 文件状态信息 */
interface Stats {
    /** 文件的类型和存取的权限，对应 POSIX stat.st_mode */
    mode: string;
    /** 文件大小，单位：B，对应 POSIX stat.st_size */
    size: number;
    /** 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime */
    lastAccessedTime: number;
    /** 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime */
    lastModifiedTime: number;

    /** 判断当前文件是否一个目录 */
    isDirectory(): boolean;
    /** 判断当前文件是否一个普通文件 */
    isFile(): boolean;
}

/** 文件访问选项 */
interface AccessOptions extends BaseCallback {
    /** 要判断是否存在的文件/目录路径 */
    path: string;
}

/** 获取文件信息选项 */
interface GetFileInfoOptions extends BaseCallback<GetFileInfoSuccessResult> {
    /** 要读取的文件的路径 */
    filePath: string;
}

/** 获取文件信息成功结果 */
interface GetFileInfoSuccessResult {
    /** 文件大小，单位B */
    size: number;
}

/** 读取文件选项 */
interface ReadFileOptions extends BaseCallback<ReadFileSuccessResult> {
    /** 要读取的文件的路径 */
    filePath: string;
    /** 指定读取文件的字符编码，如果不传encoding，则以 ArrayBuffer 格式读取文件的二进制内容 */
    encoding?: FileEncoding;
}

/** 读取文件成功结果 */
interface ReadFileSuccessResult {
    /** 文件内容 */
    data: string | ArrayBuffer;
}

/** 写入文件选项 */
interface WriteFileOptions extends BaseCallback {
    /** 要写入的文件路径 */
    filePath: string;
    /** 要写入的文本或二进制数据 */
    data: string | ArrayBuffer;
    /** 指定写入文件的字符编码 */
    encoding?: FileEncoding;
}

/** 保存文件选项 */
interface SaveFileOptions extends BaseCallback<SaveFileSuccessResult> {
    /** 需要保存的临时文件的路径 */
    tempFilePath: string;
    /** 要保存的文件路径 */
    filePath?: string;
}

/** 保存文件成功结果 */
interface SaveFileSuccessResult {
    /** 保存后的本地文件路径 */
    savedFilePath: string;
}

/** 删除保存的文件选项 */
interface RemoveSavedFileOptions extends BaseCallback {
    /** 需要删除的文件路径 */
    filePath: string;
}

/** 获取文件状态选项 */
interface StatOptions extends BaseCallback<StatSuccessResult> {
    /** 文件/目录路径 */
    path: string;
    /** 是否递归获取目录下的每个文件的 Stats 信息 */
    recursive?: boolean;
}

/** 获取文件状态成功结果 */
interface StatSuccessResult {
    /** 当 path 是一个目录时，stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象 */
    stats: Stats | Record<string, Stats>;
}

/** 文件系统管理器 */
interface FileSystemManager {
    /** 判断文件/目录是否存在 */
    access(options: AccessOptions): void;
    /** 同步判断文件/目录是否存在 */
    accessSync(path: string): void;

    /** 获取文件 Stats 信息 */
    stat(options: StatOptions): void;
    /** 同步获取文件 Stats 信息 */
    statSync(path: string, recursive?: boolean): Stats | Record<string, Stats>;

    /** 读取本地文件内容 */
    readFile(options: ReadFileOptions): void;
    /** 同步读取本地文件内容 */
    readFileSync(filePath: string, encoding?: FileEncoding): string | ArrayBuffer;

    /** 写文件 */
    writeFile(options: WriteFileOptions): void;
    /** 同步写文件 */
    writeFileSync(filePath: string, data: string | ArrayBuffer, encoding?: FileEncoding): void;

    /** 保存临时文件到本地 */
    saveFile(options: SaveFileOptions): void;
    /** 同步保存临时文件到本地 */
    saveFileSync(tempFilePath: string, filePath?: string): string;

    /** 删除该小程序下已保存的本地缓存文件 */
    removeSavedFile(options: RemoveSavedFileOptions): void;

    /** 获取该小程序下的本地临时文件或本地缓存文件信息 */
    getFileInfo(options: GetFileInfoOptions): void;
}

/**
 * 获取全局唯一的文件系统管理器
 * @returns 文件系统管理器
 * @see https://open.mgtv.com/docs/minigame/api/file/FileSystemManager/
 */
declare function getFileSystemManager(): FileSystemManager;

// ============================================================================
// 页面视频相关类型
// ============================================================================

/** 页面视频事件监听器类型 */
type PageVideoEventListener = () => void;
type PageVideoErrorListener = (error: any) => void;
type PageVideoTimeUpdateListener = (res: { currentTime: number; duration: number }) => void;
type PageVideoVideoChangedListener = (res: { videoId: string }) => void;
type PageVideoFullScreenListener = (res: { fullScreen: boolean }) => void;

/** 页面视频上下文 */
interface PageVideoContext {
    /** 播放视频 */
    play(): void;
    /** 暂停视频 */
    pause(): void;
    /** 跳转到指定位置 */
    seek(position: number): void;
    /** 切换视频 */
    switch(videoId: string): void;
    /** 获取视频信息 */
    getVideoInfo(): Promise<any>;
    /** 获取当前视频截图 */
    getVideoFrame(): Promise<any>;
    /** 打开全屏 */
    fullScreen(): void;
    /** 发送气泡消息 */
    showBubble(): void;

    /** 监听播放器开始播放事件 */
    onPlay(listener: PageVideoEventListener): void;
    /** 取消监听播放器开始播放事件 */
    offPlay(listener: PageVideoEventListener): void;
    /** 监听播放器暂停播放事件 */
    onPause(listener: PageVideoEventListener): void;
    /** 取消监听播放器暂停播放事件 */
    offPause(listener: PageVideoEventListener): void;
    /** 监听播放器播放进度事件 */
    onTimeUpdate(listener: PageVideoTimeUpdateListener): void;
    /** 取消监听播放器播放进度事件 */
    offTimeUpdate(listener: PageVideoTimeUpdateListener): void;
    /** 监听播放器播放完毕事件 */
    onEnded(listener: PageVideoEventListener): void;
    /** 取消监听播放器播放完毕事件 */
    offEnded(listener: PageVideoEventListener): void;
    /** 监听播放器错误事件 */
    onError(listener: PageVideoErrorListener): void;
    /** 取消监听播放器错误事件 */
    offError(listener: PageVideoErrorListener): void;
    /** 监听播放器视频信息改变事件 */
    onVideoChanged(listener: PageVideoVideoChangedListener): void;
    /** 取消监听播放器视频信息改变事件 */
    offVideoChanged(listener: PageVideoVideoChangedListener): void;
    /** 监听播放器切换全屏事件 */
    onFullScreen(listener: PageVideoFullScreenListener): void;
    /** 取消监听播放器切换全屏事件 */
    offFullScreen(listener: PageVideoFullScreenListener): void;
}

/**
 * 创建半屏视频上下文 PageVideoContext 对象
 * @returns PageVideoContext对象
 * @see https://open.mgtv.com/docs/minigame/api/media/page-video/createPageVideoContext
 */
declare function createPageVideoContext(): PageVideoContext;

// ============================================================================
// 设备相关API补充
// ============================================================================

/** 摇一摇事件中断监听器 */
type ShakeInterruptedListener = () => void;

/**
 * 监听摇一摇事件
 * @param callback 摇一摇事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/device/shake/onShake
 */
declare function onShake(callback: ShakeListener): void;

/**
 * 取消监听摇一摇事件
 * @param callback 摇一摇事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/device/shake/offShake
 */
declare function offShake(callback: ShakeListener): void;

/**
 * 监听摇一摇事件中断
 * @param callback 摇一摇事件中断监听器
 * @see https://open.mgtv.com/docs/minigame/api/device/shake/onShakeInterrupted
 */
declare function onShakeInterrupted(callback: ShakeInterruptedListener): void;

/**
 * 取消监听摇一摇事件中断
 * @param callback 摇一摇事件中断监听器
 * @see https://open.mgtv.com/docs/minigame/api/device/shake/offShakeInterrupted
 */
declare function offShakeInterrupted(callback: ShakeInterruptedListener): void;

/**
 * 开始监听设备摇一摇
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/device/shake/startWatchShake
 */
declare function startWatchShake(options?: BaseCallback): void;

/**
 * 停止监听设备摇一摇
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/device/shake/stopWatchShake
 */
declare function stopWatchShake(options?: BaseCallback): void;

// ============================================================================
// 语音通话相关类型
// ============================================================================

/** 语音通话选项 */
interface VoIPChatOptions extends BaseCallback {
    /** 房间号 */
    roomId: string;
}

/** 语音通话状态变化结果 */
interface VoIPChatStateChangedResult {
    /** 状态码 */
    code: number;
    /** 错误信息 */
    errMsg: string;
}

/** 语音通话成员变化结果 */
interface VoIPChatMembersChangedResult {
    /** 成员列表 */
    members: Array<{
        /** 用户ID */
        openid: string;
        /** 是否静音 */
        muted: boolean;
    }>;
}

/** 语音通话中断结果 */
interface VoIPChatInterruptedResult {
    /** 中断原因 */
    reason: string;
}

/** 更新语音通话静音配置选项 */
interface UpdateVoIPChatMuteConfigOptions extends BaseCallback {
    /** 是否静音麦克风 */
    muteConfig: {
        micMuted: boolean;
    };
}

/** 语音通话事件监听器类型 */
type VoIPChatStateChangedListener = (res: VoIPChatStateChangedResult) => void;
type VoIPChatMembersChangedListener = (res: VoIPChatMembersChangedResult) => void;
type VoIPChatInterruptedListener = (res: VoIPChatInterruptedResult) => void;

/**
 * 加入语音通话
 * @param options 语音通话选项
 * @see https://open.mgtv.com/docs/minigame/api/media/voice/joinVoIPChat
 */
declare function joinVoIPChat(options: VoIPChatOptions): void;

/**
 * 退出语音通话
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/media/voice/exitVoIPChat
 */
declare function exitVoIPChat(options?: BaseCallback): void;

/**
 * 更新语音通话静音配置
 * @param options 更新选项
 * @see https://open.mgtv.com/docs/minigame/api/media/voice/updateVoIPChatMuteConfig
 */
declare function updateVoIPChatMuteConfig(options: UpdateVoIPChatMuteConfigOptions): void;

/**
 * 监听语音通话状态变化事件
 * @param callback 回调函数
 * @see https://open.mgtv.com/docs/minigame/api/media/voice/onVoIPChatStateChanged
 */
declare function onVoIPChatStateChanged(callback: VoIPChatStateChangedListener): void;

/**
 * 取消监听语音通话状态变化事件
 * @param callback 回调函数
 * @see https://open.mgtv.com/docs/minigame/api/media/voice/offVoIPChatStateChanged
 */
declare function offVoIPChatStateChanged(callback: VoIPChatStateChangedListener): void;

/**
 * 监听语音通话成员变化事件
 * @param callback 回调函数
 * @see https://open.mgtv.com/docs/minigame/api/media/voice/onVoIPChatMembersChanged
 */
declare function onVoIPChatMembersChanged(callback: VoIPChatMembersChangedListener): void;

/**
 * 取消监听语音通话成员变化事件
 * @param callback 回调函数
 * @see https://open.mgtv.com/docs/minigame/api/media/voice/offVoIPChatMembersChanged
 */
declare function offVoIPChatMembersChanged(callback: VoIPChatMembersChangedListener): void;

/**
 * 监听语音通话中断事件
 * @param callback 回调函数
 * @see https://open.mgtv.com/docs/minigame/api/media/voice/onVoIPChatInterrupted
 */
declare function onVoIPChatInterrupted(callback: VoIPChatInterruptedListener): void;

/**
 * 取消监听语音通话中断事件
 * @param callback 回调函数
 * @see https://open.mgtv.com/docs/minigame/api/media/voice/offVoIPChatInterrupted
 */
declare function offVoIPChatInterrupted(callback: VoIPChatInterruptedListener): void;

declare namespace mgtv {
    /**
     * 同步获取设备信息
     * @returns 设备信息
     * @see https://open.mgtv.com/docs/minigame/api/system/getDeviceInfo
     */
    function getDeviceInfo(): DeviceInfo;

    /**
     * 异步获取设备信息
     * @param options 选项
     * @see https://open.mgtv.com/docs/minigame/api/system/getDeviceInfoAsync
     */
    function getDeviceInfoAsync(options: GetDeviceInfoAsyncOptions): void;

    /**
     * 获取窗口信息
     * @returns 窗口信息
     * @see https://open.mgtv.com/docs/minigame/api/system/getWindowInfo
     */
    function getWindowInfo(): WindowInfo;

    /**
     * 移除全局错误事件监听器
     * @param listener 错误事件监听器
     * @see https://open.mgtv.com/docs/minigame/api/app/events/offError
     */
    function offError(listener: (error: ErrorInfo) => void): void;

    /**
     * 移除未处理的 Promise 拒绝事件监听器
     * @param listener 未处理的 Promise 拒绝事件监听器
     * @see https://open.mgtv.com/docs/minigame/api/app/events/offUnhandledRejection
     */
    function offUnhandledRejection(listener: (res: UnhandledRejectionResult) => void): void;

    /**
     * 监听全局错误事件
     * @param listener 错误事件监听器
     * @see https://open.mgtv.com/docs/minigame/api/app/events/onError
     */
    function onError(listener: (error: ErrorInfo) => void): void;

    /**
     * 监听未处理的 Promise 拒绝事件
     * @param listener 未处理的 Promise 拒绝事件监听器
     * @see https://open.mgtv.com/docs/minigame/api/app/events/onUnhandledRejection
     */
    function onUnhandledRejection(listener: (res: UnhandledRejectionResult) => void): void;

    /**
     * 获取小游戏冷启动时的参数
     * @returns 启动参数
     * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/getLaunchOptionsSync
     */
    function getLaunchOptionsSync(): LaunchOptions;

    /**
     * 取消监听小游戏隐藏到后台事件
     * @param listener 事件监听器
     * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/offHide
     */
    function offHide(listener: () => void): void;

    /**
     * 取消监听小游戏回到前台的事件
     * @param listener 事件监听器
     * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/offShow
     */
    function offShow(listener: () => void): void;

    /**
     * 监听小游戏隐藏到后台事件
     * @param listener 事件监听器
     * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/onHide
     */
    function onHide(listener: () => void): void;

    /**
     * 监听小游戏回到前台的事件
     * @param listener 事件监听器
     * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/onShow
     */
    function onShow(listener: () => void): void;

    /**
     * 退出当前小程序
     * @param options 选项
     * @see https://open.mgtv.com/docs/minigame/api/navigation/exitMiniProgram
     */
    function exitMiniProgram(options?: ExitMiniProgramOptions): void;

    /**
     * 隐藏显示消息提示框
     * @param options 选项
     * @see https://open.mgtv.com/docs/minigame/api/ui/interaction/hideToast
     */
    function hideToast(options?: HideToastOptions): void;

    /**
     * 显示模态对话框
     * @param options 选项
     * @see https://open.mgtv.com/docs/minigame/api/ui/interaction/showModal
     */
    function showModal(options: ShowModalOptions): void;

    /**
     * 显示消息提示框
     * @param options 选项
     * @see https://open.mgtv.com/docs/minigame/api/ui/interaction/showToast
     */
    function showToast(options: ShowToastOptions): void;

    // ============================================================================
    // 菜单和导航栏API
    // ============================================================================

    /**
     * 获取菜单按钮的布局位置信息
     * @returns 菜单按钮的布局位置信息
     * @see https://open.mgtv.com/docs/minigame/api/ui/menu/getMenuButtonBoundingClientRect
     */
    function getMenuButtonBoundingClientRect(): MenuButtonBoundingClientRect;

    /**
     * 隐藏菜单按钮
     * @param options 隐藏菜单按钮的选项
     * @see https://open.mgtv.com/docs/minigame/api/ui/menu/hideMenuButton
     */
    function hideMenuButton(options?: MenuButtonOptions): void;

    /**
     * 显示菜单按钮
     * @param options 显示菜单按钮的选项
     * @see https://open.mgtv.com/docs/minigame/api/ui/menu/showMenuButton
     */
    function showMenuButton(options?: MenuButtonOptions): void;

    /**
     * 设置导航栏颜色
     * @param options 设置导航栏颜色的选项
     * @see https://open.mgtv.com/docs/minigame/api/ui/navigation/setNavigationBarColor
     */
    function setNavigationBarColor(options: SetNavigationBarColorOptions): void;

    /**
     * 设置导航栏标题
     * @param options 设置导航栏标题的选项
     * @see https://open.mgtv.com/docs/minigame/api/ui/navigation/setNavigationBarTitle
     */
    function setNavigationBarTitle(options: SetNavigationBarTitleOptions): void;

    // ============================================================================
    // 网络请求API
    // ============================================================================

    /**
     * 发起网络请求
     * @param options 网络请求的选项
     * @see https://open.mgtv.com/docs/minigame/api/network/request
     */
    function request(options: RequestOptions): void;

    /**
     * 下载文件
     * @param options 下载文件的选项
     * @returns 下载任务对象
     * @see https://open.mgtv.com/docs/minigame/api/network/downloadFile
     */
    function downloadFile(options: DownloadFileOptions): DownloadTask;

    /**
     * 上传文件
     * @param options 上传文件的选项
     * @returns 上传任务对象
     * @see https://open.mgtv.com/docs/minigame/api/network/uploadFile
     */
    function uploadFile(options: UploadFileOptions): UploadTask;

    // ============================================================================
    // WebSocket API
    // ============================================================================

    /**
     * 创建一个 WebSocket 连接
     * @param options WebSocket连接选项
     * @returns SocketTask对象
     * @see https://open.mgtv.com/docs/minigame/api/network/websocket/connectSocket
     */
    function connectSocket(options: ConnectSocketOptions): SocketTask;

    /**
     * 关闭 WebSocket 连接
     * @param options 关闭选项
     * @see https://open.mgtv.com/docs/minigame/api/network/websocket/closeSocket
     */
    function closeSocket(options?: CloseSocketOptions): void;

    /**
     * 通过 WebSocket 连接发送数据
     * @param options 发送消息选项
     * @see https://open.mgtv.com/docs/minigame/api/network/websocket/sendSocketMessage
     */
    function sendSocketMessage(options: SendSocketMessageOptions): void;

    /**
     * 监听WebSocket连接打开事件
     * @param callback 回调函数
     * @see https://open.mgtv.com/docs/minigame/api/network/websocket/onSocketOpen
     */
    function onSocketOpen(callback: SocketOpenListener): void;

    /**
     * 监听WebSocket连接关闭事件
     * @param callback 回调函数
     * @see https://open.mgtv.com/docs/minigame/api/network/websocket/onSocketClose
     */
    function onSocketClose(callback: SocketCloseListener): void;

    /**
     * 监听WebSocket错误事件
     * @param callback 回调函数
     * @see https://open.mgtv.com/docs/minigame/api/network/websocket/onSocketError
     */
    function onSocketError(callback: SocketErrorListener): void;

    /**
     * 监听WebSocket接受到服务器的消息事件
     * @param callback 回调函数
     * @see https://open.mgtv.com/docs/minigame/api/network/websocket/onSocketMessage
     */
    function onSocketMessage(callback: SocketMessageListener): void;

    // ============================================================================
    // 文件系统API
    // ============================================================================

    /**
     * 获取全局唯一的文件系统管理器
     * @returns 文件系统管理器
     * @see https://open.mgtv.com/docs/minigame/api/file/FileSystemManager/
     */
    function getFileSystemManager(): FileSystemManager;

    // ============================================================================
    // 页面视频API
    // ============================================================================

    /**
     * 创建半屏视频上下文 PageVideoContext 对象
     * @returns PageVideoContext对象
     * @see https://open.mgtv.com/docs/minigame/api/media/page-video/createPageVideoContext
     */
    function createPageVideoContext(): PageVideoContext;

    // ============================================================================
    // 语音通话API
    // ============================================================================

    /**
     * 加入语音通话
     * @param options 语音通话选项
     * @see https://open.mgtv.com/docs/minigame/api/media/voice/joinVoIPChat
     */
    function joinVoIPChat(options: VoIPChatOptions): void;

    /**
     * 退出语音通话
     * @param options 选项
     * @see https://open.mgtv.com/docs/minigame/api/media/voice/exitVoIPChat
     */
    function exitVoIPChat(options?: BaseCallback): void;

    /**
     * 更新语音通话静音配置
     * @param options 更新选项
     * @see https://open.mgtv.com/docs/minigame/api/media/voice/updateVoIPChatMuteConfig
     */
    function updateVoIPChatMuteConfig(options: UpdateVoIPChatMuteConfigOptions): void;

    /**
     * 监听语音通话状态变化事件
     * @param callback 回调函数
     * @see https://open.mgtv.com/docs/minigame/api/media/voice/onVoIPChatStateChanged
     */
    function onVoIPChatStateChanged(callback: VoIPChatStateChangedListener): void;

    /**
     * 取消监听语音通话状态变化事件
     * @param callback 回调函数
     * @see https://open.mgtv.com/docs/minigame/api/media/voice/offVoIPChatStateChanged
     */
    function offVoIPChatStateChanged(callback: VoIPChatStateChangedListener): void;

    /**
     * 监听语音通话成员变化事件
     * @param callback 回调函数
     * @see https://open.mgtv.com/docs/minigame/api/media/voice/onVoIPChatMembersChanged
     */
    function onVoIPChatMembersChanged(callback: VoIPChatMembersChangedListener): void;

    /**
     * 取消监听语音通话成员变化事件
     * @param callback 回调函数
     * @see https://open.mgtv.com/docs/minigame/api/media/voice/offVoIPChatMembersChanged
     */
    function offVoIPChatMembersChanged(callback: VoIPChatMembersChangedListener): void;

    /**
     * 监听语音通话中断事件
     * @param callback 回调函数
     * @see https://open.mgtv.com/docs/minigame/api/media/voice/onVoIPChatInterrupted
     */
    function onVoIPChatInterrupted(callback: VoIPChatInterruptedListener): void;

    /**
     * 取消监听语音通话中断事件
     * @param callback 回调函数
     * @see https://open.mgtv.com/docs/minigame/api/media/voice/offVoIPChatInterrupted
     */
    function offVoIPChatInterrupted(callback: VoIPChatInterruptedListener): void;

    // 存储API
    interface StorageOptions extends BaseCallback {
        /** 本地缓存中指定的 key */
        key: string;
    }

    interface GetStorageOptions extends BaseCallback<GetStorageSuccessResult> {
        /** 本地缓存中指定的 key */
        key: string;
    }

    interface SetStorageOptions extends StorageOptions {
        /** 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象 */
        data: any;
    }

    interface GetStorageSuccessResult {
        /** 获取到的数据 */
        data: any;
    }

    interface StorageInfoSuccessResult {
        /** 当前storage中所有的key */
        keys: string[];
        /** 当前占用的空间大小, 单位KB */
        currentSize: number;
        /** 限制的空间大小，单位KB */
        limitSize: number;
    }

    /**
     * 异步获取本地数据缓存
     * @param options 获取存储数据的选项
     * @see https://open.mgtv.com/docs/minigame/api/storage/getStorage
     */
    function getStorage(options: GetStorageOptions): void;

    /**
     * 同步获取本地数据缓存
     * @param key 本地缓存中指定的 key
     * @returns 获取到的数据
     * @see https://open.mgtv.com/docs/minigame/api/storage/getStorageSync
     */
    function getStorageSync(key: string): any;

    /**
     * 异步将数据存储在本地缓存中
     * @param options 设置存储数据的选项
     * @see https://open.mgtv.com/docs/minigame/api/storage/setStorage
     */
    function setStorage(options: SetStorageOptions): void;

    /**
     * 同步将数据存储在本地缓存中
     * @param key 本地缓存中指定的 key
     * @param data 需要存储的内容
     * @see https://open.mgtv.com/docs/minigame/api/storage/setStorageSync
     */
    function setStorageSync(key: string, data: any): void;

    /**
     * 异步从本地缓存中移除指定 key
     * @param options 移除存储数据的选项
     * @see https://open.mgtv.com/docs/minigame/api/storage/removeStorage
     */
    function removeStorage(options: StorageOptions): void;

    /**
     * 同步从本地缓存中移除指定 key
     * @param key 本地缓存中指定的 key
     * @see https://open.mgtv.com/docs/minigame/api/storage/removeStorageSync
     */
    function removeStorageSync(key: string): void;

    /**
     * 异步清理本地数据缓存
     * @param options 清理存储的选项
     * @see https://open.mgtv.com/docs/minigame/api/storage/clearStorage
     */
    function clearStorage(options?: BaseCallback): void;

    /**
     * 同步清理本地数据缓存
     * @see https://open.mgtv.com/docs/minigame/api/storage/clearStorageSync
     */
    function clearStorageSync(): void;

    /**
     * 异步获取当前storage的相关信息
     * @param options 获取存储信息的选项
     * @see https://open.mgtv.com/docs/minigame/api/storage/getStorageInfo
     */
    function getStorageInfo(options: BaseCallback<StorageInfoSuccessResult>): void;

    /**
     * 同步获取当前storage的相关信息
     * @returns 存储信息
     * @see https://open.mgtv.com/docs/minigame/api/storage/getStorageInfoSync
     */
    function getStorageInfoSync(): StorageInfoSuccessResult;

    // 广告API
    interface AdStyle {
        /** 广告组件的左上角横坐标 */
        left?: number;
        /** 广告组件的左上角纵坐标 */
        top?: number;
        /** 广告组件的宽度 */
        width?: number;
        /** 广告组件的高度 */
        height?: number;
    }

    interface BannerAdOptions {
        /** 广告单元id */
        adUnitId: string;
        /** 广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30 */
        adIntervals?: number;
        /** Banner广告样式 */
        style: {
            /** banner 广告组件的左上角横坐标 */
            left: number;
            /** banner 广告组件的左上角纵坐标 */
            top: number;
            /** banner 广告组件的宽度，宽度在 180-220 之间 */
            width: number;
        };
    }

    interface InterstitialAdOptions {
        /** 广告单元id */
        adUnitId: string;
    }

    interface RewardedVideoAdOptions {
        /** 广告单元id */
        adUnitId: string;
    }

    interface RewardedVideoCloseResult {
        /** 视频是否是在用户完整观看的情况下被关闭的 */
        isEnded: boolean;
    }

    interface BannerAd {
        /** 显示 banner 广告 */
        show(): Promise<void>;
        /** 隐藏 banner 广告 */
        hide(): Promise<void>;
        /** 销毁 banner 广告 */
        destroy(): Promise<void>;
        /** 判断 banner 广告是否显示 */
        isShow(): Promise<boolean>;
        /** 监听 banner 广告关闭事件 */
        onClose(callback: LifecycleListener): void;
        /** 取消监听 banner 广告关闭事件 */
        offClose(callback?: LifecycleListener): void;
        /** 监听 banner 广告错误事件 */
        onError(callback: ErrorListener): void;
        /** 取消监听 banner 广告错误事件 */
        offError(callback?: ErrorListener): void;
    }

    interface InterstitialAd {
        /** 显示插屏广告 */
        show(): Promise<void>;
        /** 销毁插屏广告 */
        destroy(): Promise<void>;
        /** 监听插屏广告关闭事件 */
        onClose(callback: LifecycleListener): void;
        /** 取消监听插屏广告关闭事件 */
        offClose(callback?: LifecycleListener): void;
        /** 监听插屏广告错误事件 */
        onError(callback: ErrorListener): void;
        /** 取消监听插屏广告错误事件 */
        offError(callback?: ErrorListener): void;
    }

    interface RewardedVideoAd {
        /** 显示激励视频广告 */
        show(): Promise<void>;
        /** 加载激励视频广告 */
        load(): Promise<void>;
        /** 销毁激励视频广告 */
        destroy(): void;
        /** 监听激励视频广告关闭事件 */
        onClose(callback: (res: RewardedVideoCloseResult) => void): void;
        /** 取消监听激励视频广告关闭事件 */
        offClose(callback: (res: RewardedVideoCloseResult) => void): void;
        /** 监听激励视频广告错误事件 */
        onError(callback: ErrorListener): void;
        /** 取消监听激励视频广告错误事件 */
        offError(callback: ErrorListener): void;
        /** 监听激励视频广告加载事件 */
        onLoad(callback: LifecycleListener): void;
        /** 取消监听激励视频广告加载事件 */
        offLoad(callback: LifecycleListener): void;
    }

    /**
     * 创建 banner 广告组件
     * @param options 创建 banner 广告的选项
     * @returns banner 广告组件
     * @see https://open.mgtv.com/docs/minigame/api/ad/createBannerAd
     */
    function createBannerAd(options: BannerAdOptions): BannerAd;

    /**
     * 创建插屏广告组件
     * @param options 创建插屏广告的选项
     * @returns 插屏广告组件
     * @see https://open.mgtv.com/docs/minigame/api/ad/createInterstitialAd
     */
    function createInterstitialAd(options: InterstitialAdOptions): InterstitialAd;

    /**
     * 创建激励视频广告组件
     * @param options 创建激励视频广告的选项
     * @returns 激励视频广告组件
     * @see https://open.mgtv.com/docs/minigame/api/ad/createRewardedVideoAd
     */
    function createRewardedVideoAd(options: RewardedVideoAdOptions): RewardedVideoAd;

    // 设备API
    type LocationType = 'wgs84' | 'gcj02';
    type VibrateType = 'light' | 'medium' | 'heavy';

    interface ClipboardDataOptions extends BaseCallback {
        data: string;
    }

    interface GetClipboardDataSuccessResult {
        data: string;
    }

    interface LocationOptions extends BaseCallback<LocationSuccessResult> {
        type?: LocationType;
        altitude?: boolean;
    }

    interface LocationSuccessResult {
        latitude: number;
        longitude: number;
        speed: number;
        accuracy: number;
        altitude?: number;
        verticalAccuracy?: number;
        horizontalAccuracy?: number;
    }

    interface KeepScreenOnOptions extends BaseCallback {
        keepScreenOn: boolean;
    }

    interface VibrateShortOptions extends BaseCallback {
        type?: VibrateType;
    }

    interface ScreenBrightnessOptions extends BaseCallback {
        value: number;
    }

    interface GetScreenBrightnessSuccessResult {
        value: number;
    }

    interface DeviceMotionResult {
        x: number;
        y: number;
        z: number;
    }

    type DeviceMotionListener = (res: DeviceMotionResult) => void;
    type CaptureScreenListener = () => void;
    type ShakeListener = () => void;

    function getClipboardData(options: BaseCallback<GetClipboardDataSuccessResult>): void;
    function setClipboardData(options: ClipboardDataOptions): void;

    function getLocation(options: LocationOptions): void;
    function setKeepScreenOn(options: KeepScreenOnOptions): void;
    function setScreenBrightness(options: ScreenBrightnessOptions): void;
    function getScreenBrightness(options: BaseCallback<GetScreenBrightnessSuccessResult>): void;
    function onUserCaptureScreen(callback: CaptureScreenListener): void;
    function offUserCaptureScreen(callback: CaptureScreenListener): void;
    function vibrateLong(options?: BaseCallback): void;
    function vibrateShort(options?: VibrateShortOptions): void;
    function onShake(callback: ShakeListener): void;
    function offShake(callback: ShakeListener): void;
    function onShakeInterrupted(callback: ShakeListener): void;
    function offShakeInterrupted(callback: ShakeListener): void;
    function startWatchShake(options?: BaseCallback): void;
    function stopWatchShake(options?: BaseCallback): void;
    function onDeviceMotionChange(callback: DeviceMotionListener): void;
    function offDeviceMotionChange(callback: DeviceMotionListener): void;
    function startDeviceMotionListening(options?: BaseCallback): void;
    function stopDeviceMotionListening(options?: BaseCallback): void;

    // 媒体API
    type ImageSizeType = 'original' | 'compressed';
    type ImageSourceType = 'album' | 'camera';
    type ImageOrientation = 'up' | 'down' | 'left' | 'right' | 'up-mirrored' | 'down-mirrored' | 'left-mirrored' | 'right-mirrored';

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
        /** 当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读） */
        duration: number;
        /** 当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位（只读） */
        currentTime: number;
        /** 当前是是否暂停或停止状态（只读） */
        paused: boolean;
        /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读） */
        buffered: number;

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

        /** 监听音频进入可以播放状态的事件 */
        onCanplay(callback: LifecycleListener): void;
        /** 取消监听音频进入可以播放状态的事件 */
        offCanplay(callback: LifecycleListener): void;
        /** 监听音频播放事件 */
        onPlay(callback: LifecycleListener): void;
        /** 取消监听音频播放事件 */
        offPlay(callback: LifecycleListener): void;
        /** 监听音频暂停事件 */
        onPause(callback: LifecycleListener): void;
        /** 取消监听音频暂停事件 */
        offPause(callback: LifecycleListener): void;
        /** 监听音频停止事件 */
        onStop(callback: LifecycleListener): void;
        /** 取消监听音频停止事件 */
        offStop(callback: LifecycleListener): void;
        /** 监听音频自然播放至结束的事件 */
        onEnded(callback: LifecycleListener): void;
        /** 取消监听音频自然播放至结束的事件 */
        offEnded(callback: LifecycleListener): void;
        /** 监听音频播放进度更新事件 */
        onTimeUpdate(callback: LifecycleListener): void;
        /** 取消监听音频播放进度更新事件 */
        offTimeUpdate(callback: LifecycleListener): void;
        /** 监听音频播放错误事件 */
        onError(callback: ErrorListener): void;
        /** 取消监听音频播放错误事件 */
        offError(callback: ErrorListener): void;
        /** 监听音频加载中事件 */
        onWaiting(callback: LifecycleListener): void;
        /** 取消监听音频加载中事件 */
        offWaiting(callback: LifecycleListener): void;
        /** 监听音频进行跳转操作的事件 */
        onSeeking(callback: LifecycleListener): void;
        /** 取消监听音频进行跳转操作的事件 */
        offSeeking(callback: LifecycleListener): void;
        /** 监听音频完成跳转操作的事件 */
        onSeeked(callback: LifecycleListener): void;
        /** 取消监听音频完成跳转操作的事件 */
        offSeeked(callback: LifecycleListener): void;
    }

    interface TempFile {
        /** 本地临时文件路径 */
        path: string;
        /** 本地临时文件大小，单位 B */
        size: number;
    }

    interface ChooseImageOptions extends BaseCallback<ChooseImageSuccessResult> {
        /** 最多可以选择的图片张数，默认9 */
        count?: number;
        /** 所选的图片的尺寸 */
        sizeType?: ImageSizeType[];
        /** 选择图片的来源 */
        sourceType?: ImageSourceType[];
    }

    interface ChooseImageSuccessResult {
        /** 图片的本地临时文件路径列表 */
        tempFilePaths: string[];
        /** 图片的本地临时文件列表 */
        tempFiles: TempFile[];
    }

    interface GetImageInfoOptions extends BaseCallback<GetImageInfoSuccessResult> {
        /** 图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径 */
        src: string;
    }

    interface GetImageInfoSuccessResult {
        /** 图片原始宽度，单位px */
        width: number;
        /** 图片原始高度，单位px */
        height: number;
        /** 图片的本地路径 */
        path: string;
        /** 图片的方向 */
        orientation: ImageOrientation;
        /** 图片的格式 */
        type: string;
    }

    interface CompressImageOptions extends BaseCallback<CompressImageSuccessResult> {
        /** 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径 */
        src: string;
        /** 压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效） */
        quality?: number;
    }

    interface CompressImageSuccessResult {
        /** 压缩后图片的临时文件路径 */
        tempFilePath: string;
    }

    interface PreviewImageOptions extends BaseCallback {
        /** 需要预览的图片链接列表 */
        urls: string[];
        /** 当前显示图片的链接 */
        current?: string;
    }

    interface SaveImageToPhotosAlbumOptions extends BaseCallback {
        /** 图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径 */
        filePath: string;
    }

    function createInnerAudioContext(): InnerAudioContext;
    function chooseImage(options: ChooseImageOptions): void;
    function getImageInfo(options: GetImageInfoOptions): void;
    function compressImage(options: CompressImageOptions): void;
    function previewImage(options: PreviewImageOptions): void;
    function saveImageToPhotosAlbum(options: SaveImageToPhotosAlbumOptions): void;

    // 开放API
    interface UserInfo {
        nickName: string;
        avatarUrl: string;
        gender: number;
        country: string;
        province: string;
        city: string;
        language?: string;
        isVip?: boolean;
        uuid?: string;
        ticket?: string;
        isRelatedMobile?: boolean;
    }

    interface LoginSuccessResult {
        code?: string;
    }

    interface UserProfileSuccessResult {
        data: UserInfo;
    }

    interface UserPhoneSuccessResult {
        data: {
            mobile: string;
            isRelatedMobile: boolean;
        };
    }

    interface AuthorizeOptions extends BaseCallback {
        scope: string;
    }

    interface GetSettingSuccessResult {
        authSetting: Record<string, boolean>;
    }

    interface PaymentOrderInfo {
        /**
         * 单位：分
         */
        totalAmount: number;
    }

    interface PayOptions extends BaseCallback {
        orderInfo: PaymentOrderInfo;
        service: number;
        /**
         * 超时时间，单位：毫秒
         */
        timeout?: number;
        /**
         * 0	订单支付成功
         * 1	订单支付超时
         * 2	订单支付失败
         * 3	订单关闭
         * 4	订单取消支付
         * 5	未知状态
         * 9	等待支付
         */
        getOrderStatus?: () => 0 | 1 | 2 | 3 | 4 | 5 | 9;
        getWxUrl?: () => string;
        getAlipayUrl?: () => string;
    }

    interface ShareToOptions extends BaseCallback {
        url: string;
        title: string;
        /**
         * moments	微信朋友圈
         * wechat	微信
         * weibo	微博
         * qq	    QQ
         * qzone	QQ空间
         * fantuan	饭团
         */
        shareType: string;
        /**
         * 分享类型：
         * - "link"-链接分享
         * - "image"-图片分享
         */
        type?: string;
        img?: string;
        desc?: string;
    }

    interface ShowShareMenuOptions extends BaseCallback {
        url: string;
        title: string;
        /**
         * moments	微信朋友圈
         * wechat	微信
         * weibo	微博
         * qq	    QQ
         * qzone	QQ空间
         * fantuan	饭团
         */
        typeList: string[];
        /**
         * 分享类型：
         * - "link"-链接分享
         * - "image"-图片分享
         */
        type?: string;
        img?: string;
        desc?: string;
    }

    interface RequestPaymentGameItemOptions extends BaseCallback {
        productId: string;
        quantity?: number;
    }

    function isLogin(): boolean;
    function login(options: BaseCallback<LoginSuccessResult>): void;
    function getUserProfile(options: BaseCallback<UserProfileSuccessResult>): void;
    function getUserPhone(options: BaseCallback<UserPhoneSuccessResult>): void;
    function authorize(options: AuthorizeOptions): void;
    function getSetting(options: BaseCallback<GetSettingSuccessResult>): void;
    function openSetting(options: BaseCallback<GetSettingSuccessResult>): void;
    function pay(options: PayOptions): void;
    function shareTo(options: ShareToOptions): void;
    function showShareMenu(options: ShowShareMenuOptions): void;
    function requestPaymentGameItem(options: RequestPaymentGameItemOptions): void;

    // 音量控制API
    interface SetVolumeOptions extends BaseCallback {
        volume: number;
    }

    interface GetVolumeSuccessResult {
        volume: number;
    }

    interface VolumeChangeResult {
        volume: number;
    }

    function setVolume(options: SetVolumeOptions): void;
    function getVolume(options: BaseCallback<GetVolumeSuccessResult>): void;
    function onVolumeChange(callback: (res: VolumeChangeResult) => void): void;
    function offVolumeChange(callback: (res: VolumeChangeResult) => void): void;
    function showVolume(): void;
}
