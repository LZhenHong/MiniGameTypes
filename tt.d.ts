/**
 * 抖音小游戏 API TypeScript 类型定义
 * 基于抖音开放平台官方文档生成
 * @see https://developer.open-douyin.com/docs/resource/zh-CN/mini-game/develop/api/overview
 * @date 2025-08-18
 */

// ==================== 基础类型定义 ====================

/** 通用回调函数类型 */
interface BaseCallback<T = any> {
  /** 接口调用成功的回调函数 */
  success?: (res: T) => void;
  /** 接口调用失败的回调函数 */
  fail?: (res: { errMsg: string;[key: string]: any }) => void;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  complete?: (res: T | { errMsg: string;[key: string]: any }) => void;
}

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

/** 设备性能评分 */
interface DeviceScore {
  /** CPU 分数 */
  cpu: number;
  /** GPU 分数 */
  gpu: number;
  /** 内存分数 */
  memory: number;
  /** 综合评分 */
  overall: number;
}

// ==================== 系统信息相关 ====================

/** 系统信息 */
interface SystemInfo {
  /** 操作系统版本 */
  system: string;
  /** 操作系统类型 */
  platform: 'ios' | 'android';
  /** 手机品牌 */
  brand: string;
  /** 手机型号 */
  model: string;
  /** 宿主 App 版本号 */
  version: string;
  /** 宿主 APP 名称 */
  appName: 'Toutiao' | 'Douyin' | 'news_article_lite' | 'douyin_lite' | 'aweme_hotsoon' | 'XiGua' | 'novel_fm' | 'novelapp';
  /** 客户端基础库版本 */
  SDKVersion: string;
  /** 屏幕宽度 */
  screenWidth: number;
  /** 屏幕高度 */
  screenHeight: number;
  /** 可使用窗口宽度 */
  windowWidth: number;
  /** 可使用窗口高度 */
  windowHeight: number;
  /** 安全区域 */
  safeArea: SafeArea;
  /** 设备像素比 */
  pixelRatio: number;
  /** 机型性能评分 */
  deviceScore: DeviceScore;
  /** 设备方向 */
  deviceOrientation: 'portrait' | 'landscape';
}

// ==================== 生命周期相关 ====================

/** 来源信息 */
interface ReferrerInfo {
  /** 来源小程序 appId */
  appId: string;
  /** 来源小程序传过来的数据 */
  extraData: Record<string, any>;
}

/** 小游戏显示回调参数 */
interface OnShowCallbackResult {
  /** 启动参数 */
  query: Record<string, string>;
  /** 启动场景值 */
  scene: string;
  /** 来源信息 */
  refererInfo: ReferrerInfo;
  /** 唤起小游戏页面的来源方式 */
  showFrom: 0 | 10;
  /** 启动场景字段 */
  launch_from?: string;
  /** 启动场景字段 */
  location?: string;
}

// ==================== 网络请求相关 ====================

/** 网络请求参数 */
interface RequestOption extends BaseCallback<RequestSuccessCallbackResult> {
  /** 开发者服务器接口地址 */
  url: string;
  /** 请求的参数 */
  data?: string | Record<string, any> | ArrayBuffer;
  /** 请求的 header */
  header?: Record<string, string>;
  /** HTTP 请求方法 */
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'TRACE' | 'CONNECT';
  /** 返回的数据格式 */
  dataType?: 'json' | 'text' | 'base64' | 'arraybuffer';
  /** 响应的数据类型 */
  responseType?: 'text' | 'arraybuffer';
  /** 超时时间，单位为毫秒 */
  timeout?: number;
}

/** 网络请求成功回调结果 */
interface RequestSuccessCallbackResult {
  /** 开发者服务器返回的数据 */
  data: string | Record<string, any> | ArrayBuffer;
  /** 开发者服务器返回的 HTTP 状态码 */
  statusCode: number;
  /** 开发者服务器返回的 HTTP Response Header */
  header: Record<string, string>;
  /** 调用结果 */
  errMsg: string;
}

// ==================== 存储相关 ====================

/** 设置存储参数 */
interface SetStorageOption extends BaseCallback {
  /** 本地缓存中指定的 key */
  key: string;
  /** 需要存储的内容 */
  data: any;
}

/** 获取存储参数 */
interface GetStorageOption extends BaseCallback<GetStorageSuccessCallbackResult> {
  /** 本地缓存中指定的 key */
  key: string;
}

/** 获取存储成功回调结果 */
interface GetStorageSuccessCallbackResult {
  /** key对应的内容 */
  data: any;
  /** 调用结果 */
  errMsg: string;
}

/** 移除存储参数 */
interface RemoveStorageOption extends BaseCallback {
  /** 本地缓存中指定的 key */
  key: string;
}

// ==================== UI 交互相关 ====================

/** 显示消息提示框参数 */
interface ShowToastOption extends BaseCallback {
  /** 提示的内容 */
  title: string;
  /** 图标 */
  icon?: 'success' | 'loading' | 'none';
  /** 自定义图标的本地路径 */
  image?: string;
  /** 提示的延迟时间 */
  duration?: number;
  /** 是否显示透明蒙层，防止触摸穿透 */
  mask?: boolean;
}

/** 显示模态对话框参数 */
interface ShowModalOption extends BaseCallback<ShowModalSuccessCallbackResult> {
  /** 提示的标题 */
  title?: string;
  /** 提示的内容 */
  content?: string;
  /** 是否显示取消按钮 */
  showCancel?: boolean;
  /** 取消按钮的文字，最多 4 个字符 */
  cancelText?: string;
  /** 取消按钮的文字颜色 */
  cancelColor?: string;
  /** 确认按钮的文字，最多 4 个字符 */
  confirmText?: string;
  /** 确认按钮的文字颜色 */
  confirmColor?: string;
}

/** 显示模态对话框成功回调结果 */
interface ShowModalSuccessCallbackResult {
  /** 为 true 时，表示用户点击了确定按钮 */
  confirm: boolean;
  /** 为 true 时，表示用户点击了取消 */
  cancel: boolean;
  /** 调用结果 */
  errMsg: string;
}

/** 显示 loading 提示框参数 */
interface ShowLoadingOption extends BaseCallback {
  /** 提示的内容 */
  title: string;
  /** 是否显示透明蒙层，防止触摸穿透 */
  mask?: boolean;
}

// ==================== 媒体相关 ====================

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
  getLaunchOptionsSync(): OnShowCallbackResult;

  // 网络请求
  /** 发起 HTTPS 网络请求 */
  request(option: RequestOption): void;

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

  // 文件
  /** 获取文件系统管理器 */
  getFileSystemManager(): FileSystemManager;

  // 支付
  /** 发起支付 */
  pay(option: PayOption): void;
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
  FileSystemManager,
  PayOption,
  PaySuccessCallbackResult,
  BaseCallback,
  SafeArea,
  DeviceScore,
  ReferrerInfo
};
