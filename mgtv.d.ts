/**
 * 芒果TV小游戏API类型定义
 * 基于芒果TV开放平台文档生成
 * @see https://open.mgtv.com/docs/minigame/api
 * @date 2025-08-18
 */

/**
 * 设备信息
 */
interface DeviceInfo {
    /** 设备唯一标识 */
    did: string;
    /** MAC地址 */
    mac: string;
    /** IP地址 */
    ip: string;
    /** 制造商 */
    mf: string;
    /** 设备型号 */
    model: string;
    /** 网络类型 */
    networkType: string;
    /** 运营商 */
    carrier: string;
    /** 屏幕宽度 */
    screenWidth: string;
    /** 屏幕高度 */
    screenHeight: string;
    /** 操作系统 */
    os: string;
    /** 操作系统版本 */
    osVersion: string;
    /** 平台 */
    platform: string;
    /** 平台版本 */
    platformVersion: string;
    /** 应用版本 */
    appVersion: string;
    /** SDK版本 */
    SDKVersion: string;
    /** 框架版本 */
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
interface GetDeviceInfoAsyncOptions {
    /** 接口调用成功的回调函数 */
    success?: (res: DeviceInfoAsyncResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/**
 * 异步获取设备信息结果
 */
interface DeviceInfoAsyncResult {
    /** 设备唯一标识 */
    did: string;
    /** MAC地址 */
    mac: string;
    /** IP地址 */
    ip: string;
    /** 制造商 */
    mf: string;
    /** 设备型号 */
    model: string;
    /** 网络类型 */
    networkType: string;
    /** 运营商 */
    carrier: string;
    /** 屏幕宽度 */
    screenWidth: string;
    /** 屏幕高度 */
    screenHeight: string;
    /** 平台 */
    platform: string;
    /** 平台版本 */
    platformVersion: string;
    /** 应用版本 */
    appVersion: string;
    /** SDK版本 */
    SDKVersion: string;
}

/**
 * 异步获取设备信息
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/system/getDeviceInfoAsync
 */
declare function getDeviceInfoAsync(options: GetDeviceInfoAsyncOptions): void;

/**
 * 安全区域信息
 */
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

/**
 * 窗口信息
 */
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
    /** 窗口上边缘的y值 */
    screenTop: number;
}

/**
 * 获取窗口信息
 * @returns 窗口信息
 * @see https://open.mgtv.com/docs/minigame/api/system/getWindowInfo
 */
declare function getWindowInfo(): WindowInfo;

/**
 * 移除全局错误事件监听器
 * @param listener 错误事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/events/offError
 */
declare function offError(listener: (error: any) => void): void;

/**
 * 移除未处理的 Promise 拒绝事件监听器
 * @param listener 未处理的 Promise 拒绝事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/events/offUnhandleRejection
 */
declare function offUnhandleRejection(listener: (res: any) => void): void;

/**
 * 监听全局错误事件
 * @param listener 错误事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/events/onError
 */
declare function onError(listener: (error: any) => void): void;

/**
 * 监听未处理的 Promise 拒绝事件
 * @param listener 未处理的 Promise 拒绝事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/events/onUnhandledRejection
 */
declare function onUnhandledRejection(listener: (res: any) => void): void;

/**
 * 获取小游戏冷启动时的参数
 * @returns 启动参数
 * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/getLaunchOptionsSync
 */
declare function getLaunchOptionsSync(): any;

/**
 * 取消监听小游戏隐藏到后台事件
 * @param listener 事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/offHide
 */
declare function offHide(listener: () => void): void;

/**
 * 取消监听小游戏回到前台的事件
 * @param listener 事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/offShow
 */
declare function offShow(listener: () => void): void;

/**
 * 监听小游戏隐藏到后台事件
 * @param listener 事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/onHide
 */
declare function onHide(listener: () => void): void;

/**
 * 监听小游戏回到前台的事件
 * @param listener 事件监听器
 * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/onShow
 */
declare function onShow(listener: () => void): void;

/**
 * 退出小程序选项
 */
interface ExitMiniProgramOptions {
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/**
 * 退出当前小程序
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/navigation/exitMiniProgram
 */
declare function exitMiniProgram(options?: ExitMiniProgramOptions): void;

/**
 * 隐藏消息提示框选项
 */
interface HideToastOptions {
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/**
 * 隐藏显示消息提示框
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/interaction/hideToast
 */
declare function hideToast(options?: HideToastOptions): void;

/**
 * 显示模态对话框选项
 */
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
    success?: (res: ShowModalResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/**
 * 显示模态对话框结果
 */
interface ShowModalResult {
    /** editable 为 true 时，用户输入的文本 */
    content?: string;
    /** 为 true 时，表示用户点击了确定按钮 */
    confirm: boolean;
    /** 为 true 时，表示用户点击了取消 */
    cancel: boolean;
}

/**
 * 显示模态对话框
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/interaction/showModal
 */
declare function showModal(options: ShowModalOptions): void;

/**
 * 显示消息提示框选项
 */
interface ShowToastOptions {
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
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/**
 * 显示消息提示框
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/interaction/showToast
 */
declare function showToast(options: ShowToastOptions): void;

/**
 * 菜单按钮布局位置信息
 */
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

/**
 * 获取菜单按钮（右上角胶囊按钮）的布局位置信息
 * @returns 菜单按钮的布局位置信息
 * @see https://open.mgtv.com/docs/minigame/api/ui/menu/getMenuButtonBoundingClientRect
 */
declare function getMenuButtonBoundingClientRect(): MenuButtonBoundingClientRect;

/**
 * 菜单按钮操作选项
 */
interface MenuButtonOptions {
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/**
 * 隐藏右上角胶囊按钮
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/menu/hideMenuButton
 */
declare function hideMenuButton(options?: MenuButtonOptions): void;

/**
 * 展示右上角胶囊按钮
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/menu/showMenuButton
 */
declare function showMenuButton(options?: MenuButtonOptions): void;

/**
 * 设置导航栏颜色选项
 */
interface SetNavigationBarColorOptions {
    /** 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 'black' 或 'white' */
    frontColor: 'black' | 'white';
    /** 背景颜色值，有效值为十六进制颜色 */
    backgroundColor: string;
    /** 接口调用成功的回调函数 */
    success?: () => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/**
 * 设置页面导航条颜色
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/navigation-bar/setNavigationBarColor
 */
declare function setNavigationBarColor(options: SetNavigationBarColorOptions): void;

/**
 * 设置导航栏标题选项
 */
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

/**
 * 动态设置当前页面的标题
 * @param options 选项
 * @see https://open.mgtv.com/docs/minigame/api/ui/navigation-bar/setNavigationBarTitle
 */
declare function setNavigationBarTitle(options: SetNavigationBarTitleOptions): void;

/**
 * HTTP请求方法
 */
type HttpMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

/**
 * 数据类型
 */
type DataType = 'json' | string;

/**
 * 网络请求选项
 */
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
 * 网络请求成功结果
 */
interface RequestSuccessResult {
    /** 开发者服务器返回的数据 */
    data: any;
    /** 执行结果消息 */
    errMsg: string;
}

/**
 * 网络请求失败结果
 */
interface RequestFailResult {
    /** 开发者服务器返回的数据 */
    data: any;
    /** 执行结果消息 */
    errMsg: string;
    /** 错误代码 */
    errCode: string;
}

/**
 * 发起 HTTP 网络请求
 * @param options 请求选项
 * @see https://open.mgtv.com/docs/minigame/api/network/request
 */
declare function request(options: RequestOptions): void;

/**
 * 下载文件选项
 */
interface DownloadFileOptions {
    /** 下载资源的url */
    url: string;
    /** HTTP 请求的 Header，Header 中不能设置 Referer */
    header?: Record<string, string>;
    /** 超时时间，单位为毫秒 */
    timeout?: number;
    /** 指定文件下载后存储的路径 (本地路径) */
    filePath?: string;
    /** 接口调用成功的回调函数 */
    success?: (res: DownloadFileSuccessResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/**
 * 下载文件成功结果
 */
interface DownloadFileSuccessResult {
    /** 临时文件路径 (本地路径) */
    tempFilePath?: string;
    /** 用户文件路径 (本地路径) */
    filePath?: string;
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number;
}

/**
 * 下载任务
 */
interface DownloadTask {
    /** 监听下载进度变化事件 */
    onProgressUpdate?: (callback: (res: { progress: number; totalBytesWritten: number; totalBytesExpectedToWrite: number }) => void) => void;
    /** 中断下载任务 */
    abort?: () => void;
}

/**
 * 下载文件资源到本地
 * @param options 下载选项
 * @returns 下载任务对象
 * @see https://open.mgtv.com/docs/minigame/api/network/download/downloadFile
 */
declare function downloadFile(options: DownloadFileOptions): DownloadTask;

/**
 * 上传文件选项
 */
interface UploadFileOptions {
    /** 开发者服务器地址 */
    url: string;
    /** 要上传文件资源的路径 (本地路径) */
    filePath: string;
    /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
    name: string;
    /** HTTP Header，Header 中不能设置 Referer */
    header?: Record<string, string>;
    /** HTTP 请求中其他额外的 form data */
    formData?: Record<string, any>;
    /** 超时时间，单位为毫秒 */
    timeout?: number;
    /** 接口调用成功的回调函数 */
    success?: (res: UploadFileSuccessResult) => void;
    /** 接口调用失败的回调函数 */
    fail?: (error: any) => void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: () => void;
}

/**
 * 上传文件成功结果
 */
interface UploadFileSuccessResult {
    /** 开发者服务器返回的数据 */
    data: string;
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number;
}

/**
 * 上传任务
 */
interface UploadTask {
    /** 监听上传进度变化事件 */
    onProgressUpdate?: (callback: (res: { progress: number; totalBytesSent: number; totalBytesExpectedToSend: number }) => void) => void;
    /** 中断上传任务 */
    abort?: () => void;
}

/**
 * 将本地资源上传到服务器
 * @param options 上传选项
 * @returns 上传任务对象
 * @see https://open.mgtv.com/docs/minigame/api/network/upload/uploadFile
 */
declare function uploadFile(options: UploadFileOptions): UploadTask;

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
    function offError(listener: (error: any) => void): void;

    /**
     * 移除未处理的 Promise 拒绝事件监听器
     * @param listener 未处理的 Promise 拒绝事件监听器
     * @see https://open.mgtv.com/docs/minigame/api/app/events/offUnhandleRejection
     */
    function offUnhandleRejection(listener: (res: any) => void): void;

    /**
     * 监听全局错误事件
     * @param listener 错误事件监听器
     * @see https://open.mgtv.com/docs/minigame/api/app/events/onError
     */
    function onError(listener: (error: any) => void): void;

    /**
     * 监听未处理的 Promise 拒绝事件
     * @param listener 未处理的 Promise 拒绝事件监听器
     * @see https://open.mgtv.com/docs/minigame/api/app/events/onUnhandledRejection
     */
    function onUnhandledRejection(listener: (res: any) => void): void;

    /**
     * 获取小游戏冷启动时的参数
     * @returns 启动参数
     * @see https://open.mgtv.com/docs/minigame/api/app/lifecycle/getLaunchOptionsSync
     */
    function getLaunchOptionsSync(): any;

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

    /**
     * 获取菜单按钮（右上角胶囊按钮）的布局位置信息
     * @returns 菜单按钮的布局位置信息
     * @see https://open.mgtv.com/docs/minigame/api/ui/menu/getMenuButtonBoundingClientRect
     */
    function getMenuButtonBoundingClientRect(): MenuButtonBoundingClientRect;

    /**
     * 隐藏右上角胶囊按钮
     * @param options 选项
     * @see https://open.mgtv.com/docs/minigame/api/ui/menu/hideMenuButton
     */
    function hideMenuButton(options?: MenuButtonOptions): void;

    /**
     * 展示右上角胶囊按钮
     * @param options 选项
     * @see https://open.mgtv.com/docs/minigame/api/ui/menu/showMenuButton
     */
    function showMenuButton(options?: MenuButtonOptions): void;

    /**
     * 设置页面导航条颜色
     * @param options 选项
     * @see https://open.mgtv.com/docs/minigame/api/ui/navigation-bar/setNavigationBarColor
     */
    function setNavigationBarColor(options: SetNavigationBarColorOptions): void;

    /**
     * 动态设置当前页面的标题
     * @param options 选项
     * @see https://open.mgtv.com/docs/minigame/api/ui/navigation-bar/setNavigationBarTitle
     */
    function setNavigationBarTitle(options: SetNavigationBarTitleOptions): void;

    /**
     * 发起 HTTP 网络请求
     * @param options 请求选项
     * @see https://open.mgtv.com/docs/minigame/api/network/request
     */
    function request(options: RequestOptions): void;

    /**
     * 下载文件资源到本地
     * @param options 下载选项
     * @returns 下载任务对象
     * @see https://open.mgtv.com/docs/minigame/api/network/download/downloadFile
     */
    function downloadFile(options: DownloadFileOptions): DownloadTask;

    /**
     * 将本地资源上传到服务器
     * @param options 上传选项
     * @returns 上传任务对象
     * @see https://open.mgtv.com/docs/minigame/api/network/upload/uploadFile
     */
    function uploadFile(options: UploadFileOptions): UploadTask;

    // Storage APIs
    interface StorageOptions {
        key: string;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface SetStorageOptions extends StorageOptions {
        data: any;
    }

    interface GetStorageSuccessResult {
        data: any;
    }

    interface StorageInfoSuccessResult {
        keys: string[];
        currentSize: number;
        limitSize: number;
    }

    function getStorage(options: StorageOptions): void;
    function getStorageSync(key: string): any;
    function setStorage(options: SetStorageOptions): void;
    function setStorageSync(key: string, data: any): void;
    function removeStorage(options: StorageOptions): void;
    function removeStorageSync(key: string): void;
    function clearStorage(options?: { success?: () => void; fail?: (err: any) => void; complete?: () => void; }): void;
    function clearStorageSync(): void;
    function getStorageInfo(options: { success?: (res: StorageInfoSuccessResult) => void; fail?: (err: any) => void; complete?: () => void; }): void;
    function getStorageInfoSync(): StorageInfoSuccessResult;

    // Ad APIs
    interface BannerAdOptions {
        adUnitId: string;
        style?: {
            left?: number;
            top?: number;
            width?: number;
            height?: number;
        };
    }

    interface InterstitialAdOptions {
        adUnitId: string;
    }

    interface RewardedVideoAdOptions {
        adUnitId: string;
    }

    interface BannerAd {
        show(): Promise<void>;
        hide(): void;
        destroy(): void;
        isShow(): boolean;
        onClose(callback: () => void): void;
        offClose(callback: () => void): void;
        onError(callback: (err: any) => void): void;
        offError(callback: (err: any) => void): void;
    }

    interface InterstitialAd {
        show(): Promise<void>;
        destroy(): void;
        onClose(callback: () => void): void;
        offClose(callback: () => void): void;
        onError(callback: (err: any) => void): void;
        offError(callback: (err: any) => void): void;
    }

    interface RewardedVideoAd {
        show(): Promise<void>;
        load(): Promise<void>;
        destroy(): void;
        onClose(callback: (res: { isEnded: boolean }) => void): void;
        offClose(callback: (res: { isEnded: boolean }) => void): void;
        onError(callback: (err: any) => void): void;
        offError(callback: (err: any) => void): void;
        onLoad(callback: () => void): void;
        offLoad(callback: () => void): void;
    }

    function createBannerAd(options: BannerAdOptions): BannerAd;
    function createInterstitialAd(options: InterstitialAdOptions): InterstitialAd;
    function createRewardedVideoAd(options: RewardedVideoAdOptions): RewardedVideoAd;

    // Device APIs
    interface ClipboardDataOptions {
        data?: string;
        success?: (res?: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface GetClipboardDataSuccessResult {
        data: string;
    }

    interface LocationOptions {
        type?: 'wgs84' | 'gcj02';
        altitude?: boolean;
        success?: (res: LocationSuccessResult) => void;
        fail?: (err: any) => void;
        complete?: () => void;
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

    interface KeepScreenOnOptions {
        keepScreenOn: boolean;
        success?: () => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    function getClipboardData(options: { success?: (res: GetClipboardDataSuccessResult) => void; fail?: (err: any) => void; complete?: () => void; }): void;
    function setClipboardData(options: ClipboardDataOptions): void;
    function getLocation(options: LocationOptions): void;
    function setKeepScreenOn(options: KeepScreenOnOptions): void;
    function onUserCaptureScreen(callback: () => void): void;
    function offUserCaptureScreen(callback: () => void): void;
    function vibrateLong(options?: { success?: () => void; fail?: (err: any) => void; complete?: () => void; }): void;
    function vibrateShort(options?: { success?: () => void; fail?: (err: any) => void; complete?: () => void; }): void;
    function onShake(callback: () => void): void;
    function onShakeInterrupted(callback: () => void): void;
    function startWatchShake(options?: { success?: () => void; fail?: (err: any) => void; complete?: () => void; }): void;
    function stopWatchShake(options?: { success?: () => void; fail?: (err: any) => void; complete?: () => void; }): void;

    // Media APIs
    interface InnerAudioContext {
        src: string;
        startTime: number;
        autoplay: boolean;
        loop: boolean;
        obeyMuteSwitch: boolean;
        volume: number;
        duration: number;
        currentTime: number;
        paused: boolean;
        buffered: number;

        play(): void;
        pause(): void;
        stop(): void;
        seek(position: number): void;
        destroy(): void;

        onCanplay(callback: () => void): void;
        offCanplay(callback: () => void): void;
        onPlay(callback: () => void): void;
        offPlay(callback: () => void): void;
        onPause(callback: () => void): void;
        offPause(callback: () => void): void;
        onStop(callback: () => void): void;
        offStop(callback: () => void): void;
        onEnded(callback: () => void): void;
        offEnded(callback: () => void): void;
        onTimeUpdate(callback: () => void): void;
        offTimeUpdate(callback: () => void): void;
        onError(callback: (err: any) => void): void;
        offError(callback: (err: any) => void): void;
        onWaiting(callback: () => void): void;
        offWaiting(callback: () => void): void;
        onSeeking(callback: () => void): void;
        offSeeking(callback: () => void): void;
        onSeeked(callback: () => void): void;
        offSeeked(callback: () => void): void;
    }

    interface ChooseImageOptions {
        count?: number;
        sizeType?: ('original' | 'compressed')[];
        sourceType?: ('album' | 'camera')[];
        success?: (res: ChooseImageSuccessResult) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface ChooseImageSuccessResult {
        tempFilePaths: string[];
        tempFiles: { path: string; size: number }[];
    }

    interface GetImageInfoOptions {
        src: string;
        success?: (res: GetImageInfoSuccessResult) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface GetImageInfoSuccessResult {
        width: number;
        height: number;
        path: string;
        orientation: string;
        type: string;
    }

    interface CompressImageOptions {
        src: string;
        quality?: number;
        success?: (res: { tempFilePath: string }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface PreviewImageOptions {
        urls: string[];
        current?: string;
        success?: () => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface SaveImageToPhotosAlbumOptions {
        filePath: string;
        success?: () => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    function createInnerAudioContext(): InnerAudioContext;
    function chooseImage(options: ChooseImageOptions): void;
    function getImageInfo(options: GetImageInfoOptions): void;
    function compressImage(options: CompressImageOptions): void;
    function previewImage(options: PreviewImageOptions): void;
    function saveImageToPhotosAlbum(options: SaveImageToPhotosAlbumOptions): void;

    // Open APIs
    interface LoginOptions {
        success?: (res: LoginSuccessResult) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface LoginSuccessResult {
        code: string;
        anonymousCode?: string;
    }

    interface UserProfileOptions {
        success?: (res: UserProfileSuccessResult) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface UserProfileSuccessResult {
        userInfo: {
            nickName: string;
            avatarUrl: string;
            gender: number;
            country: string;
            province: string;
            city: string;
            language: string;
        };
    }

    interface UserPhoneOptions {
        success?: (res: { phoneNumber: string; countryCode: string }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface AuthorizeOptions {
        scope: string;
        success?: () => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface GetSettingOptions {
        success?: (res: { authSetting: Record<string, boolean> }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface OpenSettingOptions {
        success?: (res: { authSetting: Record<string, boolean> }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface PayOptions {
        orderInfo: string;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface ShareToOptions {
        title?: string;
        desc?: string;
        path?: string;
        imageUrl?: string;
        success?: () => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface ShowShareMenuOptions {
        withShareTicket?: boolean;
        success?: () => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    interface RequestPaymentGameItemOptions {
        productId: string;
        quantity?: number;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    function isLogin(): boolean;
    function login(options: LoginOptions): void;
    function getUserProfile(options: UserProfileOptions): void;
    function getUserPhone(options: UserPhoneOptions): void;
    function authorize(options: AuthorizeOptions): void;
    function getSetting(options: GetSettingOptions): void;
    function openSetting(options: OpenSettingOptions): void;
    function pay(options: PayOptions): void;
    function shareTo(options: ShareToOptions): void;
    function showShareMenu(options: ShowShareMenuOptions): void;
    function requestPaymentGameItem(options: RequestPaymentGameItemOptions): void;

    // Volume APIs
    interface VolumeChangeResult {
        volume: number;
    }

    function onVolumeChange(callback: (res: VolumeChangeResult) => void): void;
    function offVolumeChange(callback: (res: VolumeChangeResult) => void): void;
    function showVolume(): void;
}
