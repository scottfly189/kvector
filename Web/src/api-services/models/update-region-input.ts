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

import { SysRegion } from './sys-region';
 /**
 * 
 *
 * @export
 * @interface UpdateRegionInput
 */
export interface UpdateRegionInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof UpdateRegionInput
     */
    id?: number;

    /**
     * 父Id
     *
     * @type {number}
     * @memberof UpdateRegionInput
     */
    pid?: number;

    /**
     * 简称
     *
     * @type {string}
     * @memberof UpdateRegionInput
     */
    shortName?: string | null;

    /**
     * 组合名
     *
     * @type {string}
     * @memberof UpdateRegionInput
     */
    mergerName?: string | null;

    /**
     * 行政代码
     *
     * @type {string}
     * @memberof UpdateRegionInput
     */
    code?: string | null;

    /**
     * 邮政编码
     *
     * @type {string}
     * @memberof UpdateRegionInput
     */
    zipCode?: string | null;

    /**
     * 区号
     *
     * @type {string}
     * @memberof UpdateRegionInput
     */
    cityCode?: string | null;

    /**
     * 层级
     *
     * @type {number}
     * @memberof UpdateRegionInput
     */
    level?: number;

    /**
     * 类型
     *
     * @type {string}
     * @memberof UpdateRegionInput
     */
    type?: string | null;

    /**
     * 拼音
     *
     * @type {string}
     * @memberof UpdateRegionInput
     */
    pinYin?: string | null;

    /**
     * 经度
     *
     * @type {number}
     * @memberof UpdateRegionInput
     */
    longitude?: number;

    /**
     * 纬度
     *
     * @type {number}
     * @memberof UpdateRegionInput
     */
    latitude?: number;

    /**
     * 排序
     *
     * @type {number}
     * @memberof UpdateRegionInput
     */
    orderNo?: number;

    /**
     * 备注
     *
     * @type {string}
     * @memberof UpdateRegionInput
     */
    remark?: string | null;

    /**
     * 机构子项
     *
     * @type {Array<SysRegion>}
     * @memberof UpdateRegionInput
     */
    children?: Array<SysRegion> | null;

    /**
     * 名称
     *
     * @type {string}
     * @memberof UpdateRegionInput
     */
    name: string;
}
