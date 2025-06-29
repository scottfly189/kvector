/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。整合最新技术，模块插件式开发，前后端分离，开箱即用。<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 系统信息保存输入参数
 *
 * @export
 * @interface SysInfoInput
 */
export interface SysInfoInput {

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof SysInfoInput
     */
    tenantId?: number;

    /**
     * 图标（Data URI scheme base64 编码）
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    logoBase64?: string | null;

    /**
     * 图标文件名
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    logoFileName?: string | null;

    /**
     * 主标题
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    title: string;

    /**
     * 副标题
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    viceTitle?: string | null;

    /**
     * 副描述
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    viceDesc?: string | null;

    /**
     * 版权信息
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    copyright: string;

    /**
     * ICP备案号
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    icp: string;

    /**
     * ICP地址
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    icpUrl: string;

    /**
     * 水印
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    watermark?: string | null;

    /**
     * 版本号
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    version?: string | null;

    /**
     * 主题颜色
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    themeColor: string;

    /**
     * 布局模式
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    layout: string;

    /**
     * 页面动画
     *
     * @type {string}
     * @memberof SysInfoInput
     */
    animation: string;

    /**
     * 图形验证码
     *
     * @type {boolean}
     * @memberof SysInfoInput
     */
    captcha?: boolean;

    /**
     * 登录二次验证
     *
     * @type {boolean}
     * @memberof SysInfoInput
     */
    secondVer?: boolean;

    /**
     * 轮播图
     *
     * @type {Array<Blob>}
     * @memberof SysInfoInput
     */
    carouselFiles?: Array<Blob> | null;
}
