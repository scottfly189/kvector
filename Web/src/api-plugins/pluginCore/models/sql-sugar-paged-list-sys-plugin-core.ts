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
import { SysPluginCore } from './sys-plugin-core';
/**
 * 分页泛型集合
 * @export
 * @interface SqlSugarPagedListSysPluginCore
 */
export interface SqlSugarPagedListSysPluginCore {
    /**
     * 页码
     * @type {number}
     * @memberof SqlSugarPagedListSysPluginCore
     */
    page?: number;
    /**
     * 页容量
     * @type {number}
     * @memberof SqlSugarPagedListSysPluginCore
     */
    pageSize?: number;
    /**
     * 总条数
     * @type {number}
     * @memberof SqlSugarPagedListSysPluginCore
     */
    total?: number;
    /**
     * 总页数
     * @type {number}
     * @memberof SqlSugarPagedListSysPluginCore
     */
    totalPages?: number;
    /**
     * 当前页集合
     * @type {Array<SysPlugin>}
     * @memberof SqlSugarPagedListSysPluginCore
     */
    items?: Array<SysPluginCore> | null;
    /**
     * 是否有上一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysPluginCore
     */
    hasPrevPage?: boolean;
    /**
     * 是否有下一页
     * @type {boolean}
     * @memberof SqlSugarPagedListSysPluginCore
     */
    hasNextPage?: boolean;
}
