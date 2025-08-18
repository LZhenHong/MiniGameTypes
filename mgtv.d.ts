/**
 * 芒果TV小游戏API类型定义
 * 基于芒果TV开放平台文档生成
 * @see https://open.mgtv.com/docs/minigame/introduction
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

// ============================================================================
// 媒体相关类型
// ============================================================================

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
    // 网络请求
    /** 发起 HTTPS 网络请求 */
    request(options: RequestOptions): void;

    // 系统信息
    /** 获取窗口信息 */
    getWindowInfo(): WindowInfo;

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
    /** 显示消息提示框 */
    showToast(options: ShowToastOptions): void;
    /** 隐藏消息提示框 */
    hideToast(options?: BaseCallback): void;
    /** 隐藏菜单按钮 */
    hideMenuButton(): void;
    /** 显示菜单按钮 */
    showMenuButton(): void;

    // 媒体相关
    /** 创建 video 上下文 VideoContext 对象 */
    createVideoContext(id: string): VideoContext;
    /** 创建页面内的 video 上下文 VideoContext 对象 */
    createPageVideoContext(): VideoContext;

    // 支付相关
    /** 发起道具直购支付请求 */
    requestPaymentGameItem(options: RequestPaymentGameItemOptions): void;

    // 文件系统
    /** 获取文件系统管理器 */
    getFileSystemManager(): FileSystemManager;

    // 广告相关
    /** 创建激励视频广告组件 */
    createRewardedVideoAd(options: { adUnitId: string }): any;

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
    RequestOptions,
    RequestResponse,
    RequestProfile,
    WindowInfo,
    SafeArea,
    SetStorageOptions,
    GetStorageOptions,
    GetStorageResponse,
    RemoveStorageOptions,
    GetStorageInfoResponse,
    GetClipboardDataOptions,
    GetClipboardDataResponse,
    SetClipboardDataOptions,
    MenuButtonBoundingClientRect,
    ShowToastOptions,
    VideoContext,
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
    Env
};

export default mgtv;
