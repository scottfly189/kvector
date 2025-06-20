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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AdminNETResultListConstOutput } from '../models';
/**
 * SysConstApi - axios parameter creator
 * @export
 */
export const SysConstApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 根据类名获取常量数据 🔖
         * @param {string} typeName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysConstDataTypeNameGet: async (typeName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'typeName' is not null or undefined
            if (typeName === null || typeName === undefined) {
                throw new RequiredError('typeName','Required parameter typeName was null or undefined when calling apiSysConstDataTypeNameGet.');
            }
            const localVarPath = `/api/sysConst/data/{typeName}`
                .replace(`{${"typeName"}}`, encodeURIComponent(String(typeName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取所有常量列表 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysConstListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysConst/list`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SysConstApi - functional programming interface
 * @export
 */
export const SysConstApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 根据类名获取常量数据 🔖
         * @param {string} typeName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysConstDataTypeNameGet(typeName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminNETResultListConstOutput>>> {
            const localVarAxiosArgs = await SysConstApiAxiosParamCreator(configuration).apiSysConstDataTypeNameGet(typeName, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取所有常量列表 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysConstListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminNETResultListConstOutput>>> {
            const localVarAxiosArgs = await SysConstApiAxiosParamCreator(configuration).apiSysConstListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysConstApi - factory interface
 * @export
 */
export const SysConstApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 根据类名获取常量数据 🔖
         * @param {string} typeName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysConstDataTypeNameGet(typeName: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminNETResultListConstOutput>> {
            return SysConstApiFp(configuration).apiSysConstDataTypeNameGet(typeName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取所有常量列表 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysConstListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminNETResultListConstOutput>> {
            return SysConstApiFp(configuration).apiSysConstListGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysConstApi - object-oriented interface
 * @export
 * @class SysConstApi
 * @extends {BaseAPI}
 */
export class SysConstApi extends BaseAPI {
    /**
     * 
     * @summary 根据类名获取常量数据 🔖
     * @param {string} typeName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysConstApi
     */
    public async apiSysConstDataTypeNameGet(typeName: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminNETResultListConstOutput>> {
        return SysConstApiFp(this.configuration).apiSysConstDataTypeNameGet(typeName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取所有常量列表 🔖
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysConstApi
     */
    public async apiSysConstListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminNETResultListConstOutput>> {
        return SysConstApiFp(this.configuration).apiSysConstListGet(options).then((request) => request(this.axios, this.basePath));
    }
}
