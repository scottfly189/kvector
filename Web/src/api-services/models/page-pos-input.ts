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

import { Filter } from './filter';
import { Search } from './search';
 /**
 * 
 *
 * @export
 * @interface PagePosInput
 */
export interface PagePosInput {

    /**
     * @type {Search}
     * @memberof PagePosInput
     */
    search?: Search;

    /**
     * 模糊查询关键字
     *
     * @type {string}
     * @memberof PagePosInput
     */
    keyword?: string | null;

    /**
     * @type {Filter}
     * @memberof PagePosInput
     */
    filter?: Filter;

    /**
     * 当前页码
     *
     * @type {number}
     * @memberof PagePosInput
     */
    page?: number;

    /**
     * 页码容量
     *
     * @type {number}
     * @memberof PagePosInput
     */
    pageSize?: number;

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof PagePosInput
     */
    field?: string | null;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof PagePosInput
     */
    order?: string | null;

    /**
     * 降序排序
     *
     * @type {string}
     * @memberof PagePosInput
     */
    descStr?: string | null;

    /**
     * 名称
     *
     * @type {string}
     * @memberof PagePosInput
     */
    name?: string | null;

    /**
     * 编码
     *
     * @type {string}
     * @memberof PagePosInput
     */
    code?: string | null;
}
