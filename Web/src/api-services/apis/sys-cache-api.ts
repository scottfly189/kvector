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
import { AdminNETResultIDisposable } from '../models';
import { AdminNETResultInt32 } from '../models';
import { AdminNETResultListString } from '../models';
import { AdminNETResultObject } from '../models';
/**
 * SysCacheApi - axios parameter creator
 * @export
 */
export const SysCacheApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 申请分布式锁 🔖
         * @param {string} key 要锁定的key
         * @param {number} msTimeout 申请锁等待的时间，单位毫秒
         * @param {number} msExpire 锁过期时间，超过该时间没有主动是放则自动是放，必须整数秒，单位毫秒
         * @param {boolean} throwOnFailure 失败时是否抛出异常,如不抛出异常，可通过判断返回null得知申请锁失败
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCacheBeginCacheLockKeyMsTimeoutMsExpireThrowOnFailurePost: async (key: string, msTimeout: number, msExpire: number, throwOnFailure: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling apiSysCacheBeginCacheLockKeyMsTimeoutMsExpireThrowOnFailurePost.');
            }
            // verify required parameter 'msTimeout' is not null or undefined
            if (msTimeout === null || msTimeout === undefined) {
                throw new RequiredError('msTimeout','Required parameter msTimeout was null or undefined when calling apiSysCacheBeginCacheLockKeyMsTimeoutMsExpireThrowOnFailurePost.');
            }
            // verify required parameter 'msExpire' is not null or undefined
            if (msExpire === null || msExpire === undefined) {
                throw new RequiredError('msExpire','Required parameter msExpire was null or undefined when calling apiSysCacheBeginCacheLockKeyMsTimeoutMsExpireThrowOnFailurePost.');
            }
            // verify required parameter 'throwOnFailure' is not null or undefined
            if (throwOnFailure === null || throwOnFailure === undefined) {
                throw new RequiredError('throwOnFailure','Required parameter throwOnFailure was null or undefined when calling apiSysCacheBeginCacheLockKeyMsTimeoutMsExpireThrowOnFailurePost.');
            }
            const localVarPath = `/api/sysCache/beginCacheLock/{key}/{msTimeout}/{msExpire}/{throwOnFailure}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)))
                .replace(`{${"msTimeout"}}`, encodeURIComponent(String(msTimeout)))
                .replace(`{${"msExpire"}}`, encodeURIComponent(String(msExpire)))
                .replace(`{${"throwOnFailure"}}`, encodeURIComponent(String(throwOnFailure)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
         * @summary 清空所有缓存 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCacheClearPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCache/clear`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
         * @summary 根据键名前缀删除缓存 🔖
         * @param {string} prefixKey 键名前缀
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCacheDeleteByPreKeyPrefixKeyPost: async (prefixKey: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'prefixKey' is not null or undefined
            if (prefixKey === null || prefixKey === undefined) {
                throw new RequiredError('prefixKey','Required parameter prefixKey was null or undefined when calling apiSysCacheDeleteByPreKeyPrefixKeyPost.');
            }
            const localVarPath = `/api/sysCache/deleteByPreKey/{prefixKey}`
                .replace(`{${"prefixKey"}}`, encodeURIComponent(String(prefixKey)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
         * @summary 删除缓存 🔖
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCacheDeleteKeyPost: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling apiSysCacheDeleteKeyPost.');
            }
            const localVarPath = `/api/sysCache/delete/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
         * @summary 获取缓存键名集合 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCacheKeyListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysCache/keyList`;
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
         * @summary 根据键名前缀获取键名集合 🔖
         * @param {string} prefixKey 键名前缀
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCacheKeysByPrefixKeyPrefixKeyGet: async (prefixKey: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'prefixKey' is not null or undefined
            if (prefixKey === null || prefixKey === undefined) {
                throw new RequiredError('prefixKey','Required parameter prefixKey was null or undefined when calling apiSysCacheKeysByPrefixKeyPrefixKeyGet.');
            }
            const localVarPath = `/api/sysCache/keysByPrefixKey/{prefixKey}`
                .replace(`{${"prefixKey"}}`, encodeURIComponent(String(prefixKey)));
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
         * @summary 获取缓存值 🔖
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysCacheValueKeyGet: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling apiSysCacheValueKeyGet.');
            }
            const localVarPath = `/api/sysCache/value/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
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
 * SysCacheApi - functional programming interface
 * @export
 */
export const SysCacheApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 申请分布式锁 🔖
         * @param {string} key 要锁定的key
         * @param {number} msTimeout 申请锁等待的时间，单位毫秒
         * @param {number} msExpire 锁过期时间，超过该时间没有主动是放则自动是放，必须整数秒，单位毫秒
         * @param {boolean} throwOnFailure 失败时是否抛出异常,如不抛出异常，可通过判断返回null得知申请锁失败
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheBeginCacheLockKeyMsTimeoutMsExpireThrowOnFailurePost(key: string, msTimeout: number, msExpire: number, throwOnFailure: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminNETResultIDisposable>>> {
            const localVarAxiosArgs = await SysCacheApiAxiosParamCreator(configuration).apiSysCacheBeginCacheLockKeyMsTimeoutMsExpireThrowOnFailurePost(key, msTimeout, msExpire, throwOnFailure, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 清空所有缓存 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheClearPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysCacheApiAxiosParamCreator(configuration).apiSysCacheClearPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 根据键名前缀删除缓存 🔖
         * @param {string} prefixKey 键名前缀
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheDeleteByPreKeyPrefixKeyPost(prefixKey: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminNETResultInt32>>> {
            const localVarAxiosArgs = await SysCacheApiAxiosParamCreator(configuration).apiSysCacheDeleteByPreKeyPrefixKeyPost(prefixKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除缓存 🔖
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheDeleteKeyPost(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminNETResultInt32>>> {
            const localVarAxiosArgs = await SysCacheApiAxiosParamCreator(configuration).apiSysCacheDeleteKeyPost(key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取缓存键名集合 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheKeyListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminNETResultListString>>> {
            const localVarAxiosArgs = await SysCacheApiAxiosParamCreator(configuration).apiSysCacheKeyListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 根据键名前缀获取键名集合 🔖
         * @param {string} prefixKey 键名前缀
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheKeysByPrefixKeyPrefixKeyGet(prefixKey: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminNETResultListString>>> {
            const localVarAxiosArgs = await SysCacheApiAxiosParamCreator(configuration).apiSysCacheKeysByPrefixKeyPrefixKeyGet(prefixKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取缓存值 🔖
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheValueKeyGet(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminNETResultObject>>> {
            const localVarAxiosArgs = await SysCacheApiAxiosParamCreator(configuration).apiSysCacheValueKeyGet(key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysCacheApi - factory interface
 * @export
 */
export const SysCacheApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 申请分布式锁 🔖
         * @param {string} key 要锁定的key
         * @param {number} msTimeout 申请锁等待的时间，单位毫秒
         * @param {number} msExpire 锁过期时间，超过该时间没有主动是放则自动是放，必须整数秒，单位毫秒
         * @param {boolean} throwOnFailure 失败时是否抛出异常,如不抛出异常，可通过判断返回null得知申请锁失败
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheBeginCacheLockKeyMsTimeoutMsExpireThrowOnFailurePost(key: string, msTimeout: number, msExpire: number, throwOnFailure: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminNETResultIDisposable>> {
            return SysCacheApiFp(configuration).apiSysCacheBeginCacheLockKeyMsTimeoutMsExpireThrowOnFailurePost(key, msTimeout, msExpire, throwOnFailure, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 清空所有缓存 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheClearPost(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysCacheApiFp(configuration).apiSysCacheClearPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 根据键名前缀删除缓存 🔖
         * @param {string} prefixKey 键名前缀
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheDeleteByPreKeyPrefixKeyPost(prefixKey: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminNETResultInt32>> {
            return SysCacheApiFp(configuration).apiSysCacheDeleteByPreKeyPrefixKeyPost(prefixKey, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除缓存 🔖
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheDeleteKeyPost(key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminNETResultInt32>> {
            return SysCacheApiFp(configuration).apiSysCacheDeleteKeyPost(key, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取缓存键名集合 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheKeyListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminNETResultListString>> {
            return SysCacheApiFp(configuration).apiSysCacheKeyListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 根据键名前缀获取键名集合 🔖
         * @param {string} prefixKey 键名前缀
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheKeysByPrefixKeyPrefixKeyGet(prefixKey: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminNETResultListString>> {
            return SysCacheApiFp(configuration).apiSysCacheKeysByPrefixKeyPrefixKeyGet(prefixKey, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取缓存值 🔖
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysCacheValueKeyGet(key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminNETResultObject>> {
            return SysCacheApiFp(configuration).apiSysCacheValueKeyGet(key, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysCacheApi - object-oriented interface
 * @export
 * @class SysCacheApi
 * @extends {BaseAPI}
 */
export class SysCacheApi extends BaseAPI {
    /**
     * 
     * @summary 申请分布式锁 🔖
     * @param {string} key 要锁定的key
     * @param {number} msTimeout 申请锁等待的时间，单位毫秒
     * @param {number} msExpire 锁过期时间，超过该时间没有主动是放则自动是放，必须整数秒，单位毫秒
     * @param {boolean} throwOnFailure 失败时是否抛出异常,如不抛出异常，可通过判断返回null得知申请锁失败
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCacheApi
     */
    public async apiSysCacheBeginCacheLockKeyMsTimeoutMsExpireThrowOnFailurePost(key: string, msTimeout: number, msExpire: number, throwOnFailure: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminNETResultIDisposable>> {
        return SysCacheApiFp(this.configuration).apiSysCacheBeginCacheLockKeyMsTimeoutMsExpireThrowOnFailurePost(key, msTimeout, msExpire, throwOnFailure, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 清空所有缓存 🔖
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCacheApi
     */
    public async apiSysCacheClearPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysCacheApiFp(this.configuration).apiSysCacheClearPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 根据键名前缀删除缓存 🔖
     * @param {string} prefixKey 键名前缀
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCacheApi
     */
    public async apiSysCacheDeleteByPreKeyPrefixKeyPost(prefixKey: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminNETResultInt32>> {
        return SysCacheApiFp(this.configuration).apiSysCacheDeleteByPreKeyPrefixKeyPost(prefixKey, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除缓存 🔖
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCacheApi
     */
    public async apiSysCacheDeleteKeyPost(key: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminNETResultInt32>> {
        return SysCacheApiFp(this.configuration).apiSysCacheDeleteKeyPost(key, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取缓存键名集合 🔖
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCacheApi
     */
    public async apiSysCacheKeyListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminNETResultListString>> {
        return SysCacheApiFp(this.configuration).apiSysCacheKeyListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 根据键名前缀获取键名集合 🔖
     * @param {string} prefixKey 键名前缀
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCacheApi
     */
    public async apiSysCacheKeysByPrefixKeyPrefixKeyGet(prefixKey: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminNETResultListString>> {
        return SysCacheApiFp(this.configuration).apiSysCacheKeysByPrefixKeyPrefixKeyGet(prefixKey, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取缓存值 🔖
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysCacheApi
     */
    public async apiSysCacheValueKeyGet(key: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminNETResultObject>> {
        return SysCacheApiFp(this.configuration).apiSysCacheValueKeyGet(key, options).then((request) => request(this.axios, this.basePath));
    }
}
