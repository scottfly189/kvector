import { useUserInfo } from '/@/stores/userInfo';
import { judgementSameArr } from '/@/utils/arrayOperation';
import { resolveDirective, withDirectives } from 'vue';

/**
 * 单个权限验证
 * @param value 权限值
 * @returns 有权限，返回 `true`，反之则反
 */
export function auth(value: string): boolean {
	const stores = useUserInfo();
	return stores.userInfos.authApiList.some((v: string) => v === value);
}

/**
 * 多个权限验证，满足一个则为 true
 * @param value 权限值
 * @returns 有权限，返回 `true`，反之则反
 */
export function auths(value: Array<string>): boolean {
	let flag = false;
	const stores = useUserInfo();
	stores.userInfos.authApiList.map((val: string) => {
		value.map((v: string) => {
			if (val === v) flag = true;
		});
	});
	return flag;
}

/**
 * 多个权限验证，全部满足则为 true
 * @param value 权限值
 * @returns 有权限，返回 `true`，反之则反
 */
export function authAll(value: Array<string>): boolean {
	const stores = useUserInfo();
	return judgementSameArr(value, stores.userInfos.authApiList);
}
/**
 * 单个权限验证，是否满足，返回VNode
 * @param VNode 元素
 * @param value 权限值
 * @returns VNode
 */
export function hAuth<T extends VNode>(el: T, value: string): T {
	return withDirectives(el, [[resolveDirective('auth'), value]]);
}
/**
 * 多个权限验证，判断是否满足一个，返回VNode
 * @param VNode 元素
 * @param value 权限值
 * @returns VNode
 */
export function hAuths<T extends VNode>(el: T, value: Array<string>): T {
	return withDirectives(el, [[resolveDirective('auths'), value]]);
}
/**
 * 多个权限验证，判断是否全部满足，返回VNode
 * @param VNode 元素
 * @param value 权限值
 * @returns VNode
 */
export function hAuthAll<T extends VNode>(el: T, value: Array<string>): T {
	return withDirectives(el, [[resolveDirective('auth-all'), value]]);
}
