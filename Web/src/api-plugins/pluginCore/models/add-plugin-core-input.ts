/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 515096995@qq.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { StatusEnum } from '../../../api-services/models/status-enum';
/**
 * 
 * @export
 * @interface AddPluginCoreInput
 */
export interface AddPluginCoreInput {
    /**
     * 雪花Id
     * @type {number}
     * @memberof AddPluginCoreInput
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof AddPluginCoreInput
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof AddPluginCoreInput
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof AddPluginCoreInput
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof AddPluginCoreInput
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof AddPluginCoreInput
     */
    isDelete?: boolean;
    /**
     * 租户Id
     * @type {number}
     * @memberof AddPluginCoreInput
     */
    tenantId?: number | null;
    /**
     * C#代码
     * @type {string}
     * @memberof AddPluginCoreInput
     */
    csharpCode: string;
    /**
     * 程序集名称
     * @type {string}
     * @memberof AddPluginCoreInput
     */
    assemblyName?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof AddPluginCoreInput
     */
    orderNo?: number;
    /**
     * 
     * @type {StatusEnum}
     * @memberof AddPluginCoreInput
     */
    status?: StatusEnum;
    /**
     * 备注
     * @type {string}
     * @memberof AddPluginCoreInput
     */
    remark?: string | null;
    /**
     * 名称
     * @type {string}
     * @memberof AddPluginCoreInput
     */
    name: string;
}
