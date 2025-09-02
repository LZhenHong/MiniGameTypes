/**
 * 支付宝小游戏 API TypeScript 类型定义
 * 基于支付宝开放平台官方文档生成
 * @see https://opendocs.alipay.com/mini-game/
 * @date 2025-09-02
 */

/**
 * -------------------
 * 基础能力
 * -------------------
 */

declare namespace my {
    /** my.canIUse - 判断小游戏入参或返回值、组件、属性等是否在当前版本可用 */
    function canIUse(schema: string): boolean;

    /** my.getAccountInfoSync - 获取小游戏版本信息 */
    interface MiniProgramInfo {
        /** 小游戏 appId */
        appId: string;
        /** 当前运行版本: release | trial | develop */
        envVersion: 'release' | 'trial' | 'develop';
        /** 当前运行环境的小游戏版本号 */
        version: string;
    }

    interface PluginInfo {
        /** 插件 appId */
        appId: string;
        /** 插件版本号 */
        version: string;
    }

    interface AccountInfoSyncResult {
        miniProgram: MiniProgramInfo;
        plugin?: PluginInfo;
    }

    function getAccountInfoSync(): AccountInfoSyncResult;

    /** my.arrayBufferToBase64 - 将 ArrayBuffer 对象转成 Base64 字符串 */
    function arrayBufferToBase64(arrayBuffer: ArrayBuffer): string;

    /** my.base64ToArrayBuffer - 将 Base64 字符串转成 ArrayBuffer 对象 */
    function base64ToArrayBuffer(base64: string): ArrayBuffer;

    /** my.isCollected - 查询当前小游戏是否被收藏 */
    interface IsCollectedOptions {
        success?: (res: { isCollected: boolean }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    function isCollected(options?: IsCollectedOptions): void;

    /** my.isIDE - 判断当前是否为 IDE 环境 */
    const isIDE: boolean;

    /** my.env - 获取小游戏环境变量对象 */
    interface MyEnv {
        USER_DATA_PATH: string;
        clientName?: string;
        clientVersion?: string;
        clientEnv?: 'prod' | 'sandbox';
        language?: 'zh-Hans' | 'en' | 'zh-HK' | 'zh-Hant';
        platform?: 'iOS' | 'Android' | 'unknown';
    }

    const env: MyEnv;

    /** my.exitProgram - 退出当前小游戏 */
    function exitProgram(): void;

    /** my.SDKVersion - 获取基础库版本号 */
    const SDKVersion: string;
}

/**
 * -------------------
 * 系统信息与设备
 * -------------------
 */

declare namespace my {
    /** my.getSystemInfoSync - 同步获取手机系统信息 */
    interface SystemInfo {
        pixelRatio: number;
        screenHeight: number;
        screenWidth: number;
        windowWidth: number;
        windowHeight: number;
        model: string;
        system: string;
        platform: string;
        language: 'zh-Hans' | 'en' | 'zh-Hant' | 'zh-HK';
        version: string;
        isIphoneXSeries?: boolean;
        pcPlatform?: 'Browser';
    }

    function getSystemInfoSync(): SystemInfo;

    /** my.getSystemInfo - 异步获取手机系统信息 */
    interface GetSystemInfoOptions {
        success?: (res: SystemInfo) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }

    function getSystemInfo(options?: GetSystemInfoOptions): void;

    /** my.getWindowInfo - 同步获取窗口信息 */
    interface SafeArea {
        left: number;
        right: number;
        top: number;
        bottom: number;
        height: number;
        width: number;
    }

    interface WindowInfo {
        pixelRatio: number;
        screenWidth: number;
        screenHeight: number;
        windowWidth: number;
        windowHeight: number;
        statusBarHeight: number;
        safeArea: SafeArea;
        screenTop: number;
    }

    function getWindowInfo(): WindowInfo;

    /** my.getMenuButtonBoundingClientRect - 获取菜单按钮的布局位置信息 */
    interface MenuButtonBoundingClientRect {
        width: number;
        height: number;
        top: number;
        bottom: number;
        left: number;
        right: number;
        optionMenuStatus?: string;
        success?: boolean;
    }

    function getMenuButtonBoundingClientRect(): MenuButtonBoundingClientRect;

    /** my.getSystemSetting - 获取系统设置 */
    interface SystemSetting {
        bluetoothEnabled: boolean;
        locationEnabled: boolean;
        wifiEnabled: boolean;
    }

    function getSystemSetting(): SystemSetting;

    /** my.getAppBaseInfo - 获取支付宝客户端基础信息 */
    interface AppBaseInfo {
        SDKVersion: string;
        language: 'zh-Hans' | 'en' | 'zh-Hant' | 'zh-Hans';
        version: string;
    }

    function getAppBaseInfo(): AppBaseInfo;

    /** my.getAppAuthorizeSetting - 获取支付宝 APP 授权设置 */
    type AuthorizedStatus = 'authorized' | 'denied' | 'not determined';

    interface AppAuthorizeSetting {
        albumAuthorized?: AuthorizedStatus;
        bluetoothAuthorized?: AuthorizedStatus;
        cameraAuthorized?: AuthorizedStatus;
        locationAuthorized?: AuthorizedStatus;
        locationReducedAccuracy?: boolean;
        microphoneAuthorized?: AuthorizedStatus;
        notificationAuthorized?: AuthorizedStatus;
        notificationAlertAuthorized?: AuthorizedStatus;
        notificationBadgeAuthorized?: AuthorizedStatus;
        notificationSoundAuthorized?: AuthorizedStatus;
        overlayAuthorized?: AuthorizedStatus;
        phoneCalendarAuthorized?: AuthorizedStatus;
    }

    function getAppAuthorizeSetting(): AppAuthorizeSetting;

    /** my.getBatteryInfo - 获取电量信息 */
    interface BatteryInfo {
        level: number;
        isCharging: boolean;
    }
    interface GetBatteryInfoOptions {
        success?: (res: BatteryInfo) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getBatteryInfo(options?: GetBatteryInfoOptions): void;
    function getBatteryInfoSync(): BatteryInfo;

    /** my.getScreenBrightness - 获取屏幕亮度 */
    interface GetScreenBrightnessOptions {
        success?: (res: { brightness: number }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getScreenBrightness(options?: GetScreenBrightnessOptions): void;

    /** my.setScreenBrightness - 设置屏幕亮度 */
    interface SetScreenBrightnessOptions {
        brightness: number;
        success?: (res: { success: boolean }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function setScreenBrightness(options: SetScreenBrightnessOptions): void;

    /** my.setKeepScreenOn - 设置屏幕常亮 */
    interface SetKeepScreenOnOptions {
        keepScreenOn?: boolean;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function setKeepScreenOn(options: SetKeepScreenOnOptions): void;
}

/**
 * -------------------
 * 生命周期事件
 * -------------------
 */

declare namespace my {
    /** my.getEnterOptionsSync - 获取本次进入小程序的参数 */
    interface ReferrerInfo {
        appId?: string;
        extraData?: Record<string, any>;
    }

    interface EnterOptionsSyncResult {
        query?: Record<string, any>;
        scene: string;
        path: string;
        referrerInfo?: ReferrerInfo;
        apiCategory?: 'default' | 'embedded';
    }

    function getEnterOptionsSync(): EnterOptionsSyncResult;

    /** my.getLaunchOptionsSync - 同步获取小游戏启动时的参数 */
    interface LaunchOptionsSyncResult {
        query: Record<string, any>;
        scene: number;
        referrerInfo?: ReferrerInfo;
    }

    function getLaunchOptionsSync(): LaunchOptionsSyncResult;

    /** my.onShow - 监听小游戏回到前台的事件 */
    interface OnShowOptions {
        query: Record<string, any>;
        referrerInfo: ReferrerInfo;
    }

    function onShow(listener: (options: OnShowOptions) => void): void;

    /** my.offShow - 取消监听小游戏回到前台的事件 */
    function offShow(listener?: (options: OnShowOptions) => void): void;

    /** my.onHide - 监听小游戏退到后台的事件 */
    function onHide(listener: () => void): void;

    /** my.offHide - 关闭小游戏退到后台的事件监听 */
    function offHide(listener?: () => void): void;

    /** my.onError - 监听小程序 JS 错误 */
    function onError(listener: (message: string) => void): void;

    /** my.onUnhandledRejection - 监听未处理的 Promise 拒绝事件 */
    interface UnhandledRejectionRes {
        reason: unknown;
        promise?: Promise<unknown>;
    }

    function onUnhandledRejection(listener: (res: UnhandledRejectionRes) => void): void;

    /** my.offUnhandledRejection - 移除未处理的 Promise 拒绝事件的监听函数 */
    function offUnhandledRejection(listener: (res: UnhandledRejectionRes) => void): void;
}

/**
 * -------------------
 * 页面跳转与打开
 * -------------------
 */

declare namespace my {
    /** my.navigationToMiniProgram - 跳转到其它小程序 */
    interface NavigationToMiniProgramOptions {
        appId: string;
        path?: string;
        query?: Record<string, any>;
        extraData?: Record<string, any>;
        events?: Record<string, (data: any) => void>;
        success?: (res: { eventChannel?: any }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function navigationToMiniProgram(options: NavigationToMiniProgramOptions): void;

    /** my.ap.openURL - 打开指定 URL */
    interface ApOpenURLOptions {
        url: string;
        success?: (res: any) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    namespace ap {
        function openURL(options: ApOpenURLOptions): void;
    }

    /** my.navigateBackMiniProgram - 跳转回上一个小程序 */
    interface NavigateBackMiniProgramOptions {
        extraData?: Record<string, any>;
        success?: (res: any) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function navigateBackMiniProgram(options: NavigateBackMiniProgramOptions): void;

    /** my.openEmbeddedMiniProgram - 以半屏方式打开小程序 */
    interface OpenEmbeddedMiniProgramOptions {
        appId: string;
        path?: string;
        query?: Record<string, any>;
        extraData?: Record<string, any>;
        success?: (res: { success: boolean }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function openEmbeddedMiniProgram(options: OpenEmbeddedMiniProgramOptions): void;
}

/**
 * -------------------
 * UI 交互与提示
 * -------------------
 */

declare namespace my {
    /** my.showLoading */
    interface ShowLoadingOptions {
        content?: string;
        mask?: boolean;
        delay?: number;
        success?: (res: { success: boolean }) => void;
        fail?: (err: { error: number; errorMessage: string; message?: string }) => void;
        complete?: () => void;
    }
    function showLoading(options?: ShowLoadingOptions): void;

    /** my.hideLoading */
    interface HideLoadingOptions {
        page?: any; // Page 实例
        success?: (res: { success: boolean }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function hideLoading(options?: HideLoadingOptions): void;

    /** my.showToast */
    type ToastType = 'none' | 'success' | 'fail' | 'exception' | 'loading';
    interface ShowToastOptions {
        content?: string;
        duration?: number;
        type?: ToastType;
        image?: string;
        mask?: boolean;
        success?: () => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function showToast(options: ShowToastOptions): void;

    /** my.hideToast */
    interface HideToastOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function hideToast(options?: HideToastOptions): void;

    /** my.alert */
    interface AlertOptions {
        title?: string;
        content?: string;
        buttonText?: string;
        success?: () => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function alert(options: AlertOptions): void;

    /** my.confirm */
    interface ConfirmOptions {
        title?: string;
        content?: string;
        confirmButtonText?: string;
        cancelButtonText?: string;
        confirmColor?: string;
        cancelColor?: string;
        success?: (res: { confirm: boolean }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function confirm(options: ConfirmOptions): void;

    /** my.showModal */
    interface ShowModalOptions {
        title?: string;
        content?: string;
        showCancel?: boolean;
        cancelText?: string;
        cancelColor?: string;
        confirmText?: string;
        confirmColor?: string;
        editable?: boolean;
        placeholderText?: string;
        success?: (res: { confirm: boolean; content?: string }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function showModal(options: ShowModalOptions): void;

    /** my.prompt */
    type PromptAlign = 'left' | 'center' | 'right';
    interface PromptOptions {
        title?: string;
        message?: string;
        align?: PromptAlign;
        placeholder?: string;
        okButtonText?: string;
        cancelButtonText?: string;
        confirmColor?: string;
        cancelColor?: string;
        inputValue?: string;
        success?: (res: { ok: boolean; inputValue: string }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function prompt(options: PromptOptions): void;

    /** my.showActionSheet */
    type BadgeType = 'none' | 'point' | 'num' | 'text' | 'more';
    interface ActionSheetBadge {
        index: number;
        type?: BadgeType;
        text?: string;
    }
    interface ShowActionSheetOptions {
        title?: string;
        items: string[];
        itemColor?: string;
        cancelButtonText?: string;
        destructiveBtnIndex?: number;
        badges?: ActionSheetBadge[];
        success?: (res: { index: number }) => void;
        fail?: (err: { error: number; errorMessage: string; message?: string }) => void;
        complete?: () => void;
    }
    function showActionSheet(options: ShowActionSheetOptions): void;
}

/**
 * -------------------
 * 用户输入与事件
 * -------------------
 */

declare namespace my {
    /** my.Touch 对象 */
    interface MyTouch {
        /** 唯一标识符 */
        identifier: number;
        /** 触点相对于屏幕左边沿的 X 坐标 */
        clientX: number;
        /** 触点相对于屏幕上边沿的 Y 坐标 */
        clientY: number;
    }
    /** 触摸事件 */
    interface TouchEventRes {
        touches: MyTouch[];
    }
    function onTouchStart(listener: (res: TouchEventRes) => void): void;
    function onTouchMove(listener: (res: TouchEventRes) => void): void;
    function onTouchEnd(listener: (res: TouchEventRes) => void): void;
    function onTouchCancel(listener: (res: TouchEventRes) => void): void;
    function offTouchStart(listener?: (res: TouchEventRes) => void): void;
    function offTouchMove(listener?: (res: TouchEventRes) => void): void;
    function offTouchEnd(listener?: (res: TouchEventRes) => void): void;
    function offTouchCancel(listener?: (res: TouchEventRes) => void): void;

    /** 键盘事件 */
    interface KeyboardInputRes {
        value: string;
    }
    function onKeyboardInput(listener: (res: KeyboardInputRes) => void): void;
    function onKeyboardConfirm(listener: (res: KeyboardInputRes) => void): void;
    function onKeyboardComplete(listener: (res: KeyboardInputRes) => void): void;
    function offKeyboardInput(listener?: (res: KeyboardInputRes) => void): void;
    function offKeyboardConfirm(listener?: (res: KeyboardInputRes) => void): void;
    function offKeyboardComplete(listener?: (res: KeyboardInputRes) => void): void;

    /** 显示键盘 */
    interface ShowKeyboardOptions {
        defaultValue?: string;
        maxLength?: number;
        multiple?: boolean;
        confirmHold?: boolean;
        confirmType?: 'done' | 'next' | 'search' | 'go' | 'send';
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function showKeyboard(options: ShowKeyboardOptions): void;

    /** 隐藏键盘 */
    interface HideKeyboardOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function hideKeyboard(options?: HideKeyboardOptions): void;
}

/**
 * -------------------
 * 网络相关
 * -------------------
 */

declare namespace my {
    type NetworkType = 'UNKNOWN' | 'NOTREACHABLE' | 'WWAN' | 'WIFI' | '2G' | '3G' | '4G' | '5G';
    interface NetworkStatusRes {
        isConnected: boolean;
        networkType: NetworkType;
    }
    function onNetworkStatusChange(listener: (res: NetworkStatusRes) => void): void;
    function offNetworkStatusChange(listener?: (res: NetworkStatusRes) => void): void;

    interface GetNetworkTypeRes {
        networkAvailable: boolean;
        networkType: NetworkType;
        signalStrength?: number;
        hasSystemProxy?: boolean;
    }
    interface GetNetworkTypeOptions {
        success?: (res: GetNetworkTypeRes) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getNetworkType(options?: GetNetworkTypeOptions): void;

    /** WebSocket */
    interface ConnectSocketOptions {
        url: string;
        data?: Record<string, any>;
        header?: Record<string, string>;
        multiple?: boolean;
        protocols?: string[];
        timeout?: number;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function connectSocket(options: ConnectSocketOptions): any; // 返回 SocketTask（multiple=true）或 void

    interface CloseSocketOptions {
        code?: number;
        reason?: string;
        success?: (res: { message: string }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function closeSocket(options?: CloseSocketOptions): void;

    interface SendSocketMessageOptions {
        data: string | ArrayBuffer;
        isBuffer?: boolean;
        success?: (res: any) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function sendSocketMessage(options: SendSocketMessageOptions): void;

    function onSocketOpen(listener: (res: { header?: Record<string, string> }) => void): void;
    function offSocketOpen(listener?: (res: { header?: Record<string, string> }) => void): void;
    function onSocketClose(listener: (res: { reason?: string; code?: number }) => void): void;
    function offSocketClose(listener?: (res: { reason?: string; code?: number }) => void): void;
    function onSocketError(listener: (res: { error: number; errorMessage: string }) => void): void;
    function offSocketError(listener?: (res: { error: number; errorMessage: string }) => void): void;
    function onSocketMessage(listener: (res: { data: string; isBuffer: boolean }) => void): void;
    function offSocketMessage(listener?: (res: { data: string; isBuffer: boolean }) => void): void;
}

/**
 * -------------------
 * 文件与存储
 * -------------------
 */

declare namespace my {
    /** 文件系统 FileSystemManager */
    interface ReadFileOptions {
        filePath: string;
        encoding?: string;
        position?: number;
        length?: number;
        success?: (res: { data: string | ArrayBuffer; dataType: string }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    interface ReadFileSyncResult {
        data: string | ArrayBuffer;
        dataType: string;
        success?: boolean;
        error?: number;
        errorMessage?: string;
    }
    interface FileSystemManager {
        access(options: { path: string; success?: (res: any) => void; fail?: (err: any) => void; complete?: () => void }): void;
        accessSync(filePath: string): any;
        appendFile(options: { filePath: string; data: string | ArrayBuffer; encoding?: string; success?: (res: any) => void; fail?: (err: any) => void; complete?: () => void }): void;
        appendFileSync(filePath: string, data: string | ArrayBuffer, encoding?: string): any;
        copyFile(options: { srcPath: string; destPath: string; success?: (res: any) => void; fail?: (err: any) => void; complete?: () => void }): void;
        copyFileSync(srcPath: string, destPath: string): any;
        getFileInfo(options: { filePath: string; digestAlgorithm?: 'md5' | 'sha1'; success?: (res: { size: number; digest: string }) => void; fail?: (err: any) => void; complete?: () => void }): void;
        getFileInfoSync(options: { filePath: string; digestAlgorithm?: 'md5' | 'sha1' }): { size: number; digest: string };
        getSavedFileList(options: { success?: (res: { fileList: Array<{ filePath: string; size: number; createTime: number }>; success: boolean }) => void; fail?: (err: any) => void; complete?: () => void }): void;
        mkdir(options: { dirPath: string; recursive?: boolean; success?: (res: any) => void; fail?: (err: any) => void; complete?: () => void }): void;
        mkdirSync(dirPath: string, recursive?: boolean): any;
        readFile(options: ReadFileOptions): void;
        readFileSync(filePath: string, encoding?: string, position?: number, length?: number): ReadFileSyncResult;
        writeFile(options: { filePath: string; data: string | ArrayBuffer; encoding?: string; success?: (res: any) => void; fail?: (err: any) => void; complete?: () => void }): void;
        writeFileSync(filePath: string, data: string | ArrayBuffer, encoding?: string): any;
        readdir(options: { dirPath: string; success?: (res: { files: string[] }) => void; fail?: (err: any) => void; complete?: () => void }): void;
        readdirSync(dirPath: string): { files: string[] } | { error: number; errorMessage: string };
        rmdir(options: { dirPath: string; recursive?: boolean; success?: (res: any) => void; fail?: (err: any) => void; complete?: () => void }): void;
        rmdirSync(dirPath: string, recursive?: boolean): any;
        unlink(options: { filePath: string; success?: (res: any) => void; fail?: (err: any) => void; complete?: () => void }): void;
        unlinkSync(filePath: string): any;
        saveFile(options: { tempFilePath: string; filePath?: string; success?: (res: { savedFilePath: string }) => void; fail?: (err: any) => void; complete?: () => void }): void;
        removeSavedFile(options: { filePath: string; success?: (res: any) => void; fail?: (err: any) => void; complete?: () => void }): void;
        removeSavedFileSync(options: { filePath: string }): any;
        unzip(options: { zipFilePath: string; targetPath: string; success?: (res: any) => void; fail?: (err: any) => void; complete?: () => void }): void;
        stat(options: { path: string; recursive?: boolean; success?: (res: { stats: any }) => void; fail?: (err: any) => void; complete?: () => void }): void;
        statSync(path: string, recursive?: boolean): { stats: any } | { error: number; errorMessage: string };
        rename(options: { oldPath: string; newPath: string; success?: (res: any) => void; fail?: (err: any) => void; complete?: () => void }): void;
        renameSync(oldPath: string, newPath: string): any;
    }
    function getFileSystemManager(): FileSystemManager;

    /** 本地存储 */
    interface SetStorageSyncOptions {
        key: string;
        data: any;
    }
    function setStorageSync(options: SetStorageSyncOptions): { success?: boolean; error?: number; errorMessage?: string };
    interface SetStorageOptions {
        key: string;
        data: any;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function setStorage(options: SetStorageOptions): void;
    interface GetStorageSyncOptions {
        key: string;
    }
    function getStorageSync(options: GetStorageSyncOptions): { data?: any; error?: number; errorMessage?: string };
    interface GetStorageOptions {
        key: string;
        success?: (res: { data: any }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getStorage(options: GetStorageOptions): void;
    interface RemoveStorageSyncOptions {
        key: string;
    }
    function removeStorageSync(options: RemoveStorageSyncOptions): any;
    interface RemoveStorageOptions {
        key: string;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function removeStorage(options: RemoveStorageOptions): void;
    function clearStorageSync(): any;
    interface ClearStorageOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function clearStorage(options?: ClearStorageOptions): void;
    interface StorageInfoSync {
        keys: string[];
        currentSize: number;
        limitSize: number;
        success?: boolean;
    }
    function getStorageInfoSync(): StorageInfoSync;
    interface GetStorageInfoOptions {
        success?: (res: { keys: string[]; currentSize: number; limitSize: number }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getStorageInfo(options?: GetStorageInfoOptions): void;

    /** 文件操作 */
    interface DetectFileTypeOptions {
        filePath: string;
        success?: (res: { type: string; extension: string }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function detectFileType(options: DetectFileTypeOptions): void;
    interface SaveFileToDiskOptions {
        filePath: string;
        success?: (res: { success: boolean }) => void;
        fail?: (err: { error: number; errorMessage: string; message?: string }) => void;
        complete?: () => void;
    }
    function saveFileToDisk(options: SaveFileToDiskOptions): void;
    type OpenDocumentFileType = 'pdf' | 'doc' | 'docx' | 'xls' | 'xlsx' | 'ppt' | 'pptx';
    interface OpenDocumentOptions {
        filePath: string;
        fileType: OpenDocumentFileType;
        showMenu?: 'true' | 'false';
        success?: (res: any) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function openDocument(options: OpenDocumentOptions): void;
}

/**
 * -------------------
 * 蓝牙相关
 * -------------------
 */

declare namespace my {
    interface BluetoothDevice {
        name?: string;
        deviceName?: string;
        localName?: string;
        deviceId: string;
        RSSI?: number;
        advertisData?: string;
        manufacturerData?: string;
    }
    interface BLEService {
        serviceId: string;
        isPrimary: boolean;
    }
    interface BLECharacteristicProperties {
        read?: boolean;
        write?: boolean;
        notify?: boolean;
        indicate?: boolean;
        writeDefault?: boolean;
        writeNoResponse?: boolean;
    }
    interface BLECharacteristic {
        characteristicId: string;
        serviceId: string;
        value: string;
        properties: BLECharacteristicProperties;
    }
    interface BluetoothAdapterState {
        discovering: boolean;
        available: boolean;
    }
    interface BLEConnectionStateChangedRes {
        deviceId: string;
        connected: boolean;
    }
    interface BLECharacteristicValueChangeRes {
        deviceId: string;
        serviceId: string;
        characteristicId: string;
        value: string;
    }
    interface OpenBluetoothAdapterOptions {
        autoClose?: boolean;
        success?: (res: { isSupportBLE: boolean }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function openBluetoothAdapter(options?: OpenBluetoothAdapterOptions): void;
    // ... 其他蓝牙相关方法
    interface CloseBluetoothAdapterOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function closeBluetoothAdapter(options?: CloseBluetoothAdapterOptions): void;
    interface GetBluetoothAdapterStateOptions {
        success?: (res: BluetoothAdapterState) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getBluetoothAdapterState(options?: GetBluetoothAdapterStateOptions): void;
    function onBluetoothAdapterStateChange(listener: (res: BluetoothAdapterState) => void): void;
    function offBluetoothAdapterStateChange(listener?: (res: BluetoothAdapterState) => void): void;
    interface StartBluetoothDevicesDiscoveryOptions {
        allowDuplicatesKey?: boolean;
        interval?: number;
        services?: string[];
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function startBluetoothDevicesDiscovery(options?: StartBluetoothDevicesDiscoveryOptions): void;
    interface StopBluetoothDevicesDiscoveryOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function stopBluetoothDevicesDiscovery(options?: StopBluetoothDevicesDiscoveryOptions): void;
    interface OnBluetoothDeviceFoundRes {
        devices: BluetoothDevice[];
    }
    function onBluetoothDeviceFound(listener: (res: OnBluetoothDeviceFoundRes) => void): void;
    function offBluetoothDeviceFound(listener?: (res: OnBluetoothDeviceFoundRes) => void): void;
    interface GetBluetoothDevicesOptions {
        success?: (res: { devices: BluetoothDevice[] }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getBluetoothDevices(options?: GetBluetoothDevicesOptions): void;
    interface GetConnectedBluetoothDevicesOptions {
        success?: (res: { devices: BluetoothDevice[] }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getConnectedBluetoothDevices(options?: GetConnectedBluetoothDevicesOptions): void;
    interface MakeBluetoothPairOptions {
        deviceId: string;
        pin?: ArrayBuffer;
        timeout?: number;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function makeBluetoothPair(options: MakeBluetoothPairOptions): void;
    interface GetBluetoothPairsOptions {
        success?: (res: { devices: BluetoothDevice[] }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getBluetoothPairs(options?: GetBluetoothPairsOptions): void;
    interface CancelBluetoothPairOptions {
        deviceId: string;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function cancelBluetoothPair(options: CancelBluetoothPairOptions): void;
    interface ConnectBLEDeviceOptions {
        deviceId: string;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function connectBLEDevice(options: ConnectBLEDeviceOptions): void;
    interface DisconnectBLEDeviceOptions {
        deviceId: string;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function disconnectBLEDevice(options: DisconnectBLEDeviceOptions): void;
    interface GetBLEDeviceServicesOptions {
        deviceId: string;
        success?: (res: { services: BLEService[] }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getBLEDeviceServices(options: GetBLEDeviceServicesOptions): void;
    interface GetBLEDeviceCharacteristicsOptions {
        deviceId: string;
        serviceId: string;
        success?: (res: { characteristics: BLECharacteristic[] }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getBLEDeviceCharacteristics(options: GetBLEDeviceCharacteristicsOptions): void;
    interface NotifyBLECharacteristicValueChangeOptions {
        deviceId: string;
        serviceId: string;
        characteristicId: string;
        descriptorId?: string;
        state?: boolean;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function notifyBLECharacteristicValueChange(options: NotifyBLECharacteristicValueChangeOptions): void;
    function onBLECharacteristicValueChange(listener: (res: BLECharacteristicValueChangeRes) => void): void;
    function offBLECharacteristicValueChange(listener?: (res: BLECharacteristicValueChangeRes) => void): void;
    interface WriteBLECharacteristicValueOptions {
        deviceId: string;
        serviceId: string;
        characteristicId: string;
        value: ArrayBuffer | string;
        writeType?: 'write' | 'writeNoResponse';
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function writeBLECharacteristicValue(options: WriteBLECharacteristicValueOptions): void;
    interface ReadBLECharacteristicValueOptions {
        deviceId: string;
        serviceId: string;
        characteristicId: string;
        success?: (res: { characteristic: { characteristicId: string; serviceId: string; value: string } }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function readBLECharacteristicValue(options: ReadBLECharacteristicValueOptions): void;
    interface GetBLEDeviceRSSIOptions {
        deviceId: string;
        success?: (res: { RSSI: number }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getBLEDeviceRSSI(options: GetBLEDeviceRSSIOptions): void;
    interface GetBLEDeviceStatusOptions {
        success?: (res: { authStatus?: number; powerStatus?: number }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getBLEDeviceStatus(options?: GetBLEDeviceStatusOptions): void;
    interface SetBLEMTUOptions {
        deviceId: string;
        mtu: number;
        success?: (res: { mtu: number }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function setBLEMTU(options: SetBLEMTUOptions): void;
    interface GetBLEMTUOptions {
        deviceId: string;
        success?: (res: { mtu: number }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getBLEMTU(options: GetBLEMTUOptions): void;
    function onBLEConnectionStateChanged(listener: (res: BLEConnectionStateChangedRes) => void): void;
    function offBLEConnectionStateChanged(listener?: (res: BLEConnectionStateChangedRes) => void): void;
}

/**
 * -------------------
 * Wi-Fi 能力
 * -------------------
 */

declare namespace my {
    interface WifiInfo {
        BSSID: string;
        SSID: string;
        secure: boolean;
        signalStrength: number;
    }
    interface StartWifiOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function startWifi(options?: StartWifiOptions): void;
    interface StopWifiOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function stopWifi(options?: StopWifiOptions): void;
    interface ConnectWifiOptions {
        SSID: string;
        BSSID?: string;
        isWEP?: boolean;
        password: string;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function connectWifi(options: ConnectWifiOptions): void;
    interface GetWifiListOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getWifiList(options?: GetWifiListOptions): void;
    interface OnGetWifiListRes {
        wifiList: WifiInfo[];
    }
    function onGetWifiList(listener: (res: OnGetWifiListRes) => void): void;
    function offGetWifiList(listener?: (res: OnGetWifiListRes) => void): void;
    interface OnWifiConnectedRes {
        wifi: WifiInfo;
    }
    function onWifiConnected(listener: (res: OnWifiConnectedRes) => void): void;
    function offWifiConnected(listener?: (res: OnWifiConnectedRes) => void): void;
    interface GetConnectedWifiOptions {
        success?: (res: { wifi: WifiInfo }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getConnectedWifi(options?: GetConnectedWifiOptions): void;
}

/**
 * -------------------
 * Canvas & 渲染
 * -------------------
 */

declare namespace my {
    interface Canvas {
        width: number;
        height: number;
        getContext(contextType: '2d' | 'webgl'): MyRenderingContext;
        toDataURL(): string;
    }
    type MyRenderingContext = CanvasRenderingContext2D | WebGLRenderingContext;
    function createCanvas(): Canvas;
    interface Image {
        src: string;
        readonly width: number;
        readonly height: number;
        onload?: () => void;
        onerror?: (err: any) => void;
    }
    function createImage(): Image;
    function loadFont(fontPath: string): string | null;
    function setPreferredFramesPerSecond(fps: number): void;
    function triggerGC(): void;
}
declare function requestAnimationFrame(callback: () => void): number;
declare function clearInterval(intervalID: number): void;
declare function clearTimeout(timeoutID: number): void;
declare function setInterval(callback: (...args: any[]) => void, delay: number, ...args: any[]): number;
declare function setTimeout(callback: (...args: any[]) => void, delay: number, ...args: any[]): number;

/**
 * -------------------
 * 用户授权与用户信息
 * -------------------
 */

declare namespace my {
    interface GetAuthCodeOptions {
        scopes?: string | string[];
        success?: (res: { authCode: string; authErrorScopes?: Record<string, any>; authSuccessScopes?: string[] }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function getAuthCode(options?: GetAuthCodeOptions): void;
    interface GetAuthUserInfoOptions {
        success?: (res: { nickName: string; avatar: string }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getAuthUserInfo(options?: GetAuthUserInfoOptions): void;
}

/**
 * -------------------
 * 多媒体
 * -------------------
 */

declare namespace my {
    /** 图片与视频 */
    interface ChooseImageOptions {
        count?: number;
        sizeType?: Array<'original' | 'compressed'>;
        sourceType?: Array<'camera' | 'album'>;
        highQuality?: boolean;
        useFrontCamera?: boolean;
        success?: (res: {
            apFilePaths?: string[];
            tempFilePaths?: string[];
            tempFiles?: Array<{ path: string; size: number }>;
            scene?: string;
        }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function chooseImage(options: ChooseImageOptions): void;
    interface ChooseVideoOptions {
        sourceType?: Array<'album' | 'camera'>;
        compressed?: boolean;
        maxDuration?: number;
        camera?: 'back' | 'front';
        success?: (res: {
            filePath: string;
            tempFilePath: string;
            duration: number;
            size: number;
            height: number;
            width: number;
            tempVideoThumbPath?: string;
            [key: string]: any;
        }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function chooseVideo(options: ChooseVideoOptions): void;
    interface GetImageInfoOptions {
        src: string;
        success?: (res: {
            width: number;
            height: number;
            path: string;
            orientation: string;
            type: string;
        }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function getImageInfo(options: GetImageInfoOptions): void;
    interface CompressImageOptions {
        apFilePaths: string[];
        compressLevel?: 0 | 1 | 2 | 3 | 4;
        compressedWidth?: number;
        compressedHeight?: number;
        success?: (res: { apFilePaths: string[] }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function compressImage(options: CompressImageOptions): void;
    type GenerateImageFormat = 'QRCODE' | 'BARCODE';
    type GenerateImageCorrectLevel = 'L' | 'M' | 'Q' | 'H';
    interface GenerateImageFromCodeOptions {
        code: string;
        format: GenerateImageFormat;
        width: number;
        height?: number;
        codeColor?: string;
        backgroundColor?: string;
        forceNoPadding?: boolean;
        correctLevel?: GenerateImageCorrectLevel;
        success?: (res: { image: string }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function generateImageFromCode(options: GenerateImageFromCodeOptions): void;
    interface GetVideoInfoOptions {
        src: string;
        success?: (res: {
            orientation: 'up' | 'down' | 'left' | 'right';
            type: string;
            duration: number;
            size: number;
            height: number;
            width: number;
            fps: number;
            bitrate: number;
        }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function getVideoInfo(options: GetVideoInfoOptions): void;
    interface SaveImageToPhotosAlbumOptions {
        filePath: string;
        hideToast?: boolean;
        success?: (res: { success: boolean }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function saveImageToPhotosAlbum(options: SaveImageToPhotosAlbumOptions): void;
    interface SaveVideoToPhotosAlbumOptions {
        filePath: string;
        success?: (res: { success: boolean }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function saveVideoToPhotosAlbum(options: SaveVideoToPhotosAlbumOptions): void;
    /** 音频 */
    interface InnerAudioContext {
        src: string;
        play(): void;
        pause(): void;
        stop(): void;
        seek(position: number): void;
        destroy(): void;
        onPlay(callback: () => void): void;
        onPause(callback: () => void): void;
        onStop(callback: () => void): void;
        onEnded(callback: () => void): void;
        onError(callback: (err: any) => void): void;
        onCanPlay(callback: () => void): void;
    }
    function createInnerAudioContext(): InnerAudioContext;
    interface RecorderManager {
        start(options?: any): void;
        stop(): void;
        pause(): void;
        resume(): void;
        onStart(callback: () => void): void;
        onStop(callback: (res: any) => void): void;
        onPause(callback: () => void): void;
        onResume(callback: () => void): void;
        onError(callback: (err: any) => void): void;
    }
    function getRecorderManager(): RecorderManager;
    interface GetAvailableAudioSourcesOptions {
        success?: (res: { audioSources: string[] }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getAvailableAudioSources(options?: GetAvailableAudioSourcesOptions): void;
}

/**
 * -------------------
 * 位置与联系人
 * -------------------
 */

declare namespace my {
    /** my.getLocation */
    interface StreetNumber {
        number: string;
        street: string;
    }
    interface Poi {
        name: string;
        address: string;
    }
    interface GetLocationRes {
        longitude: string;
        latitude: string;
        accuracy: string;
        horizontalAccuracy: string;
        country?: string;
        countryCode?: string;
        province?: string;
        provinceAdcode?: string;
        city?: string;
        cityAdcode?: string;
        district?: string;
        districtAdcode?: string;
        streetNumber?: StreetNumber;
        pois?: Poi[];
        altitude?: string;
        verticalAccuracy?: string;
    }
    interface GetLocationOptions {
        cacheTimeout?: number;
        type?: 0 | 1 | 2 | 3;
        adVersion?: string;
        success?: (res: GetLocationRes) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function getLocation(options?: GetLocationOptions): void;

    /** my.chooseLocation - 选择地理位置 */
    interface ChooseLocationOptions {
        title?: string;
        latitude?: number;
        longitude?: number;
        success?: (res: {
            name: string;
            address: string;
            longitude: number;
            latitude: number;
            provinceName: string;
            cityName: string;
            adCode: string;
            adName: string;
            cityCode: string;
            provinceCode: string;
        }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function chooseLocation(options: ChooseLocationOptions): void;

    /** my.openLocation - 打开地图显示指定位置 */
    interface OpenLocationOptions {
        longitude: number;
        latitude: number;
        name: string;
        address: string;
        scale?: number;
        success?: (res: any) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function openLocation(options: OpenLocationOptions): void;

    /** my.chooseCity - 选择城市 */
    interface ChooseCityOptions {
        showLocatedCity?: boolean;
        showHotCities?: boolean;
        setLocatedCity?: boolean;
        cities?: Array<{ city: string; adCode: string; spell?: string }>;
        hotCities?: Array<{ city: string; adCode: string; spell?: string }>;
        customHistoryCities?: Array<{ city: string; adCode: string; spell?: string }>;
        success?: (res: { city: string; adCode: string; longitude?: number; latitude?: number }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    interface ChooseCityTask {
        onLocatedComplete(listener: (res: { longitude: number; latitude: number }) => void): void;
        offLocatedComplete(listener?: (res: { longitude: number; latitude: number }) => void): void;
        setLocatedCity(options: { locatedCityName: string; locatedCityAdCode?: string; locatedCityPinyin?: string; success?: (res: { locatedCityName: string }) => void; fail?: (err: { error: number; errorMessage: string }) => void; complete?: () => void }): void;
    }
    function chooseCity(options: ChooseCityOptions): ChooseCityTask;

    /** my.chooseDistrict - 地区选择器 */
    interface ChooseDistrictOptions {
        mode?: 0 | 1 | 2;
        src?: string;
        mainTitle?: string;
        mainHeadList?: any[];
        mainNormalList?: any[];
        mainMergeOptions?: Record<string, string>;
        seniorTitle?: string;
        seniorPageList?: any[];
        success?: (res: { name: string; adCode: string; ext?: string }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function chooseDistrict(options: ChooseDistrictOptions): void;

    /** my.regionPicker - 多级省市区选择器 */
    interface RegionPickerOptions {
        title?: string;
        customItems?: string[];
        mergeOptions?: any;
        selectedItem?: string[];
        success?: (res: { data: string[]; code: string[] }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function regionPicker(options: RegionPickerOptions): void;

    /** my.multiLevelSelect - 级联选择器 */
    interface MultiLevelSelectOptions {
        title?: string;
        list: Array<any>;
        success?: (res: { success: boolean; result: Array<{ name: string; input: any }> }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function multiLevelSelect(options: MultiLevelSelectOptions): void;

    /** my.optionsSelect - 选项选择器 */
    interface OptionsSelectOptions {
        title?: string;
        optionsOne: string[];
        optionsTwo?: string[];
        selectedOneIndex?: number;
        selectedTwoIndex?: number;
        positiveString?: string;
        negativeString?: string;
        success?: (res: {
            selectedOneIndex?: number;
            selectedOneOption?: string;
            selectedTwoIndex?: number;
            selectedTwoOption?: string;
        }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function optionsSelect(options: OptionsSelectOptions): void;

    /** my.getMainSelectedCity - 获取支付宝首页所选城市 */
    interface GetMainSelectedCityOptions {
        success?: (res: {
            fullName: string;
            enName?: string;
            name: string;
            code: string;
            chineseMainLand: boolean;
            isManualSelected: boolean;
            settingTime: number;
        }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function getMainSelectedCity(options?: GetMainSelectedCityOptions): void;
}

/**
 * -------------------
 * 其他能力
 * -------------------
 */

declare namespace my {
    /** 剪贴板 */
    interface GetClipboardOptions {
        success?: (res: { text: string }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function getClipboard(options?: GetClipboardOptions): void;
    interface SetClipboardOptions {
        text: string;
        success?: (res: { success: boolean }) => void;
        fail?: (err: { error: number; errorMessage: string; message?: string }) => void;
        complete?: () => void;
    }
    function setClipboard(options: SetClipboardOptions): void;

    /** 传感器 */
    interface AccelerometerChangeRes {
        x: number;
        y: number;
        z: number;
        timestamp?: number;
    }
    interface StartAccelerometerOptions {
        interval?: 'game' | 'ui' | 'normal';
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function startAccelerometer(options?: StartAccelerometerOptions): void;
    interface StopAccelerometerOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function stopAccelerometer(options?: StopAccelerometerOptions): void;
    function onAccelerometerChange(listener: (res: AccelerometerChangeRes) => void): void;
    function offAccelerometerChange(listener?: (res: AccelerometerChangeRes) => void): void;
    interface DeviceMotionChangeRes {
        alpha: number;
        beta: number;
        gamma: number;
    }
    interface StartDeviceMotionListeningOptions {
        interval?: 'game' | 'ui' | 'normal';
        success?: (res: any) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function startDeviceMotionListening(options?: StartDeviceMotionListeningOptions): void;
    interface StopDeviceMotionListeningOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function stopDeviceMotionListening(options?: StopDeviceMotionListeningOptions): void;
    function onDeviceMotionChange(listener: (res: DeviceMotionChangeRes) => void): void;
    function offDeviceMotionChange(listener?: (res: DeviceMotionChangeRes) => void): void;
    interface CompassChangeRes {
        direction: number;
        timestamp?: number;
    }
    interface StartCompassOptions {
        interval?: 'game' | 'ui' | 'normal';
        success?: (res: any) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function startCompass(options?: StartCompassOptions): void;
    interface StopCompassOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function stopCompass(options?: StopCompassOptions): void;
    function onCompassChange(listener: (res: CompassChangeRes) => void): void;
    function offCompassChange(listener?: (res: CompassChangeRes) => void): void;
    interface GyroscopeChangeRes {
        x: number;
        y: number;
        z: number;
        timestamp?: number;
    }
    interface StartGyroscopeOptions {
        interval?: 'game' | 'ui' | 'normal';
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function startGyroscope(options?: StartGyroscopeOptions): void;
    interface StopGyroscopeOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function stopGyroscope(options?: StopGyroscopeOptions): void;
    function onGyroscopeChange(listener: (res: GyroscopeChangeRes) => void): void;
    function offGyroscopeChange(listener?: (res: GyroscopeChangeRes) => void): void;

    /** 震动 */
    interface VibrateOptions {
        success?: (res: { success: boolean }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function vibrate(options?: VibrateOptions): void;
    interface VibrateShortOptions {
        type?: 'heavy' | 'medium' | 'light';
        success?: (res: { success: boolean }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function vibrateShort(options?: VibrateShortOptions): void;
    function vibrateLong(options?: VibrateOptions): void;

    /** 摇一摇 */
    interface WatchShakeOptions {
        success?: (res: any) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function watchShake(options?: WatchShakeOptions): void;

    /** 扫码 */
    type ScanType = 'qrCode' | 'barCode' | 'dmCode' | 'pdf417Code' | 'narrowCode' | 'hmCode';
    interface ScanCodeRes {
        code: string;
        result: string;
        scanType: string;
        imageChannel: 'album' | 'camera';
        rawData: string;
    }
    interface ScanCodeOptions {
        scanType?: ScanType[];
        hideAlbum?: boolean;
        success?: (res: ScanCodeRes) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function scanCode(options?: ScanCodeOptions): void;

    /** 服务器时间 */
    interface GetServerTimeOptions {
        success?: (res: { time: number }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function getServerTime(options?: GetServerTimeOptions): void;

    /** 内存不足告警 */
    interface MemoryWarningRes {
        level?: 5 | 10 | 15;
    }
    function onMemoryWarning(listener: (res: MemoryWarningRes) => void): void;
    function offMemoryWarning(listener?: (res: MemoryWarningRes) => void): void;

    /** 用户截屏事件 */
    interface UserCaptureScreenRes {
        NBPageUrl?: string;
    }
    function onUserCaptureScreen(listener: (res: UserCaptureScreenRes) => void): void;
    function offUserCaptureScreen(listener?: (res: UserCaptureScreenRes) => void): void;

    /** 权限引导 */
    type AuthGuideType =
        | 'BLUETOOTH'
        | 'SHORTCUT'
        | 'NOTIFICATION'
        | 'MICROPHONE'
        | 'ADDRESSBOOK'
        | 'CAMERA'
        | 'PHOTO'
        | 'LBS'
        | 'LBSHIGHACCURACY'
        | 'LOCATION';
    interface ShowAuthGuideOptions {
        authType: AuthGuideType;
        success?: (res: { shown: boolean }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function showAuthGuide(options: ShowAuthGuideOptions): void;

    /** 联系人 */
    interface AddPhoneContactOptions {
        photoFilePath?: string;
        nickName?: string;
        lastName?: string;
        middleName?: string;
        firstName?: string;
        remark?: string;
        mobilePhoneNumber?: string;
        alipayAccount?: string;
        addressCountry?: string;
        addressState?: string;
        addressCity?: string;
        addressStreet?: string;
        addressPostalCode?: string;
        organization?: string;
        title?: string;
        workFaxNumber?: string;
        workPhoneNumber?: string;
        hostNumber?: string;
        email?: string;
        url?: string;
        workAddressCountry?: string;
        workAddressState?: string;
        workAddressCity?: string;
        workAddressStreet?: string;
        workAddressPostalCode?: string;
        homeFaxNumber?: string;
        homePhoneNumber?: string;
        homeAddressCountry?: string;
        homeAddressState?: string;
        homeAddressCity?: string;
        homeAddressStreet?: string;
        homeAddressPostalCode?: string;
        success?: (res: any) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function addPhoneContact(options: AddPhoneContactOptions): void;
    interface MakePhoneCallOptions {
        number: string;
        success?: (res: any) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function makePhoneCall(options: MakePhoneCallOptions): void;
    interface SendSMSOptions {
        mobile?: string;
        content?: string;
        success?: (res: { status?: 'Success' | 'Failed' | 'Canceled' }) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function sendSMS(options: SendSMSOptions): void;
    interface ChooseContactOptions {
        chooseType: 'single' | 'multi';
        includeMobileContactMode?: 'none' | 'known' | 'all';
        includeMe?: boolean;
        multiChooseMax?: number;
        multiChooseMaxTips?: string;
        success?: (res: {
            contactsDicArray: Array<{
                userId: string;
                avatar: string;
                mobile?: string;
                realName: string;
                displayName: string;
            }>
        }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function chooseContact(options: ChooseContactOptions): void;
    interface ChooseAlipayContactOptions {
        count?: number;
        success?: (res: {
            contacts: Array<{
                realName: string;
                avatar: string;
                email?: string;
                userId: string;
                mobile?: string;
            }>
        }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function chooseAlipayContact(options: ChooseAlipayContactOptions): void;
    interface ChoosePhoneContactOptions {
        success?: (res: { name: string; mobile: string }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function choosePhoneContact(options: ChoosePhoneContactOptions): void;

    /** 广告 */
    interface BannerAd {
        show(): Promise<void>;
        hide(): void;
        destroy(): void;
        onLoad(listener: () => void): void;
        onError(listener: (err: { error: number; errorMessage: string }) => void): void;
    }
    interface CreateBannerAdOptions {
        adUnitId: string;
        style: {
            left: number;
            top: number;
            width: number;
        };
    }
    function createBannerAd(options: CreateBannerAdOptions): BannerAd;
    interface RewardedAd {
        load(): Promise<void>;
        show(): Promise<void>;
        onLoad(listener: () => void): void;
        onError(listener: (err: { error: number; errorMessage: string }) => void): void;
        onClose(listener: (res: { isEnded: boolean }) => void): void;
    }
    interface CreateRewardedAdOptions {
        adUnitId: string;
        multiton?: boolean;
    }
    function createRewardedAd(options: CreateRewardedAdOptions): RewardedAd;
    interface InterstitialAd {
        show(): Promise<void>;
        onLoad(listener: () => void): void;
        onError(listener: (err: { error: number; errorMessage: string }) => void): void;
        onClose(listener: (res: { type?: 'CLOSE' | 'JUMP'; bizId?: string }) => void): void;
    }
    interface CreateInterstitialAdOptions {
        adUnitId: string;
    }
    function createInterstitialAd(options: CreateInterstitialAdOptions): InterstitialAd;

    /** 更新管理 */
    interface UpdateManager {
        applyUpdate(): void;
        onCheckForUpdate(listener: (res: { hasUpdate: boolean }) => void): void;
        onUpdateReady(listener: (res: { success: true }) => void): void;
        onUpdateFailed(listener: (res: { success: false }) => void): void;
    }
    function getUpdateManager(): UpdateManager;

    /** 游戏圈 */
    interface GameClubButtonStyle {
        left: number;
        top: number;
        width: number;
        height: number;
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        borderRadius?: number;
        color?: string;
        fontSize?: number;
        textAlign?: string;
    }
    interface CreateGameClubButtonOptions {
        type: 'text' | 'image';
        text?: string;
        image?: string;
        icon?: 'blue' | 'white' | 'dark' | 'light';
        openlink?: string;
        style: GameClubButtonStyle;
    }
    interface GameClubButton {
        show(): void;
        hide(): void;
        destroy(): void;
        onTap(listener: (res?: any) => void): void;
        offTap(listener?: (res?: any) => void): void;
    }
    function createGameClubButton(options: CreateGameClubButtonOptions): GameClubButton;
    interface GetGameClubDataOptions {
        dataTypeList: Array<{ type: number }>;
        success?: (res: Array<{ dataType: number; value: number }>) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function getGameClubData(options: GetGameClubDataOptions): void;

    /** 分享 */
    type OnShareAppMessageReturn = {
        title?: string;
        desc?: string;
        imageUrl?: string;
        path?: string;
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: (res: any) => void;
    };
    var onShareAppMessage: () => OnShareAppMessageReturn;
    function showSharePanel(options?: { success?: (res: any) => void; fail?: (err: any) => void; complete?: () => void }): void;
    interface ShowShareMenuOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function showShareMenu(options?: ShowShareMenuOptions): void;
    function hideShareMenu(options?: ShowShareMenuOptions): void;
    interface HideAddToDesktopMenuOptions {
        success?: (res: any) => void;
        fail?: (err: any) => void;
        complete?: () => void;
    }
    function hideAddToDesktopMenu(options?: HideAddToDesktopMenuOptions): void;

    /** 支付 */
    interface RequestGamePaymentOptions {
        customId: string;
        buyQuantity: number;
        extraInfo?: Record<string, any>;
        success?: (res: { resultCode: string }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function requestGamePayment(options: RequestGamePaymentOptions): void;
    interface PaySignCenterOptions {
        signStr: string;
        success?: (res: { result: string; resultStatus: string }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function paySignCenter(options: PaySignCenterOptions): void;

    /** 游戏中心 */
    interface CanAddGameCenterToMyAppsOptions {
        success?: (res: { canAddAppToMyApps: boolean }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function canAddGameCenterToMyApps(options?: CanAddGameCenterToMyAppsOptions): void;
    interface AddGameCenterToMyAppsOptions {
        success?: (res: { addAppToMyApps: boolean }) => void;
        fail?: (err: { error: number; errorMessage: string }) => void;
        complete?: () => void;
    }
    function addGameCenterToMyApps(options?: AddGameCenterToMyAppsOptions): void;

    /** 埋点上报 */
    namespace gameBiz {
        function reportLoadingCompleted(): void;
        function reportGamePlay(): void;
        function reportGameCharacterCreated(initial: boolean): void;
        function reportAuthorized(): void;
        function reportCustomEvent(eventName: string, eventData: Record<string, any>): void;
    }
}
