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

import { YesNoEnum } from './yes-no-enum';
 /**
 * 
 *
 * @export
 * @interface UpdateConfigInput
 */
export interface UpdateConfigInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof UpdateConfigInput
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof UpdateConfigInput
     */
    createTime?: Date;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof UpdateConfigInput
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof UpdateConfigInput
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof UpdateConfigInput
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof UpdateConfigInput
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof UpdateConfigInput
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof UpdateConfigInput
     */
    isDelete?: boolean;

    /**
     * 名称
     *
     * @type {string}
     * @memberof UpdateConfigInput
     */
    name: string;

    /**
     * 编码
     *
     * @type {string}
     * @memberof UpdateConfigInput
     */
    code?: string | null;

    /**
     * 参数值
     *
     * @type {string}
     * @memberof UpdateConfigInput
     */
    value?: string | null;

    /**
     * @type {YesNoEnum}
     * @memberof UpdateConfigInput
     */
    sysFlag?: YesNoEnum;

    /**
     * 分组编码
     *
     * @type {string}
     * @memberof UpdateConfigInput
     */
    groupCode?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof UpdateConfigInput
     */
    orderNo?: number;

    /**
     * 备注
     *
     * @type {string}
     * @memberof UpdateConfigInput
     */
    remark?: string | null;
}
