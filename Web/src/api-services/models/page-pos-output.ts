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

import { StatusEnum } from './status-enum';
import { SysUser } from './sys-user';
 /**
 * 职位分页列表输出参数
 *
 * @export
 * @interface PagePosOutput
 */
export interface PagePosOutput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof PagePosOutput
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof PagePosOutput
     */
    createTime?: Date;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof PagePosOutput
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof PagePosOutput
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof PagePosOutput
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof PagePosOutput
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof PagePosOutput
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof PagePosOutput
     */
    isDelete?: boolean;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof PagePosOutput
     */
    tenantId?: number | null;

    /**
     * 名称
     *
     * @type {string}
     * @memberof PagePosOutput
     */
    name: string;

    /**
     * 编码
     *
     * @type {string}
     * @memberof PagePosOutput
     */
    code?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof PagePosOutput
     */
    orderNo?: number;

    /**
     * 备注
     *
     * @type {string}
     * @memberof PagePosOutput
     */
    remark?: string | null;

    /**
     * @type {StatusEnum}
     * @memberof PagePosOutput
     */
    status?: StatusEnum;

    /**
     * 在职人员
     *
     * @type {Array<SysUser>}
     * @memberof PagePosOutput
     */
    userList?: Array<SysUser> | null;

    /**
     * 租户名称
     *
     * @type {string}
     * @memberof PagePosOutput
     */
    tenantName?: string | null;
}
