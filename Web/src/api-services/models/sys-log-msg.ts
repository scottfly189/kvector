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
 * 系统消息日志表
 *
 * @export
 * @interface SysLogMsg
 */
export interface SysLogMsg {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysLogMsg
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof SysLogMsg
     */
    createTime?: Date;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof SysLogMsg
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof SysLogMsg
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof SysLogMsg
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof SysLogMsg
     */
    isDelete?: boolean;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof SysLogMsg
     */
    tenantId?: number | null;

    /**
     * 消息标题
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    title?: string | null;

    /**
     * 消息内容
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    message?: string | null;

    /**
     * 接收者Id
     *
     * @type {number}
     * @memberof SysLogMsg
     */
    receiveUserId?: number;

    /**
     * 接收者名称
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    receiveUserName?: string | null;

    /**
     * 接收者Id集合
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    receiveUserIds?: string | null;

    /**
     * 接收者IP
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    receiveIp?: string | null;

    /**
     * 接收者浏览器
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    receiveBrowser?: string | null;

    /**
     * 接收者操作系统
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    receiveOs?: string | null;

    /**
     * 接收者设备
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    receiveDevice?: string | null;

    /**
     * 发送者Id
     *
     * @type {number}
     * @memberof SysLogMsg
     */
    sendUserId?: number;

    /**
     * 发送者名称
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    sendUserName?: string | null;

    /**
     * 发送时间
     *
     * @type {Date}
     * @memberof SysLogMsg
     */
    sendTime?: Date;

    /**
     * 发送者IP
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    sendIp?: string | null;

    /**
     * 发送者浏览器
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    sendBrowser?: string | null;

    /**
     * 发送者操作系统
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    sendOs?: string | null;

    /**
     * 发送者设备
     *
     * @type {string}
     * @memberof SysLogMsg
     */
    sendDevice?: string | null;
}
