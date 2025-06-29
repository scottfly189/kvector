<template>
	<div v-show="state.isShowLockScreen">
		<div class="layout-lock-screen-mask"></div>
		<div class="layout-lock-screen-img" :class="{ 'layout-lock-screen-filter': state.isShowLoockLogin }"></div>
		<div class="layout-lock-screen">
			<div
				class="layout-lock-screen-date"
				ref="layoutLockScreenDateRef"
				@mousedown="onDownPc"
				@mousemove="onMovePc"
				@mouseup="onEnd"
				@touchstart.stop="onDownApp"
				@touchmove.stop="onMoveApp"
				@touchend.stop="onEnd"
			>
				<div class="layout-lock-screen-date-box">
					<div class="layout-lock-screen-date-box-time">
						{{ state.time.hm }}<span class="layout-lock-screen-date-box-minutes">{{ state.time.s }}</span>
					</div>
					<div class="layout-lock-screen-date-box-info">{{ state.time.mdq }}</div>
				</div>
				<div class="layout-lock-screen-date-top">
					<SvgIcon name="ele-Top" />
					<div class="layout-lock-screen-date-top-text">{{ $t('message.layout.unlock') }}</div>
				</div>
			</div>
			<transition name="el-zoom-in-center">
				<div v-show="state.isShowLoockLogin" class="layout-lock-screen-login">
					<div class="layout-lock-screen-login-box">
						<div class="layout-lock-screen-login-box-img">
							<img :src="userInfos.avatar || 'https://img2.baidu.com/it/u=1978192862,2048448374&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500'" />
						</div>
						<div class="layout-lock-screen-login-box-name">{{ userInfos.account }}</div>
						<div v-if="state.showMessage" class="layout-lock-screen-login-box-message">
							<span>{{ state.message }}</span>
							<el-button style="max-width: 80px; margin-top: 20px" size="default" @click="hideMessage"> {{ $t('message.layout.confirm') }} </el-button>
						</div>
						<div v-else class="layout-lock-screen-login-box-value">
							<el-input
								:placeholder="needPassword"
								:type="state.isShowPassword ? 'text' : 'password'"
								ref="layoutLockScreenInputRef"
								size="default"
								v-model="state.lockScreenPassword"
								@keyup.enter.native.stop="onLockScreenSubmit()"
							>
								<template #append>
									<el-button @click="onLockScreenSubmit">
										<el-icon class="el-input__icon">
											<ele-Right />
										</el-icon>
									</el-button>
								</template>
								<template #suffix>
									<i
										class="iconfont el-input__icon login-content-password"
										:class="state.isShowPassword ? 'icon-yincangmima' : 'icon-xianshimima'"
										@click="state.isShowPassword = !state.isShowPassword"
									>
									</i>
								</template>
							</el-input>
						</div>
					</div>
					<div class="layout-lock-screen-login-icon">
						<SvgIcon name="ele-Microphone" :size="20" />
						<SvgIcon name="ele-AlarmClock" :size="20" />
						<SvgIcon name="ele-SwitchButton" :size="20" />
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts" name="layoutLockScreen">
import { nextTick, onMounted, reactive, ref, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useThemeConfig } from '/@/stores/themeConfig';
import { useUserInfo } from '/@/stores/userInfo';
import { sm2 } from 'sm-crypto-v2';
import { loadSysInfo } from '/@/utils/sysInfo';
import { formatDate } from '/@/utils/formatTime';
import { Local } from '/@/utils/storage';

import { feature, getAPI } from '/@/utils/axios-utils';
import { SysAuthApi, SysConfigApi } from '/@/api-services';

const { t, locale } = useI18n();

const needPassword = ref('');
needPassword.value = t('message.layout.needPassword');
// 定义变量内容
const layoutLockScreenDateRef = ref<HtmlType>();
const layoutLockScreenInputRef = ref();
const storesThemeConfig = useThemeConfig();
const { themeConfig } = storeToRefs(storesThemeConfig);
const storesUserInfo = useUserInfo();
const { userInfos } = storeToRefs(storesUserInfo);
const state = reactive({
	transparency: 1,
	downClientY: 0,
	moveDifference: 0,
	isShowLoockLogin: false,
	isFlags: false,
	querySelectorEl: '' as HtmlType,
	time: {
		hm: '',
		s: '',
		mdq: '',
	},
	setIntervalTime: 0,
	isShowLockScreen: false,
	isShowLockScreenIntervalTime: 0,
	lockScreenPassword: '',
	message: '',
	showMessage: false,
	isShowPassword: false,
});
const route = useRoute();
// 鼠标按下 pc
const onDownPc = (down: MouseEvent) => {
	state.isFlags = true;
	state.downClientY = down.clientY;
};
// 鼠标按下 app
const onDownApp = (down: TouchEvent) => {
	state.isFlags = true;
	state.downClientY = down.touches[0].clientY;
};
// 鼠标移动 pc
const onMovePc = (move: MouseEvent) => {
	state.moveDifference = move.clientY - state.downClientY;
	onMove();
};
// 鼠标移动 app
const onMoveApp = (move: TouchEvent) => {
	state.moveDifference = move.touches[0].clientY - state.downClientY;
	onMove();
};
// 鼠标移动事件
const onMove = () => {
	if (state.isFlags) {
		const el = <HTMLElement>state.querySelectorEl;
		const opacitys = (state.transparency -= 1 / 200);
		if (state.moveDifference >= 0) return false;
		el.setAttribute('style', `top:${state.moveDifference}px;cursor:pointer;opacity:${opacitys};`);
		if (state.moveDifference < -400) {
			el.setAttribute('style', `top:${-el.clientHeight}px;cursor:pointer;transition:all 0.3s ease;`);
			state.moveDifference = -el.clientHeight;
			setTimeout(() => {
				el && el.parentNode?.removeChild(el);
			}, 300);
		}
		if (state.moveDifference === -el.clientHeight) {
			state.isShowLoockLogin = true;
			layoutLockScreenInputRef.value.focus();
		}
	}
};
// 鼠标松开
const onEnd = () => {
	state.isFlags = false;
	state.transparency = 1;
	if (state.moveDifference >= -400) {
		(<HTMLElement>state.querySelectorEl).setAttribute('style', `top:0px;opacity:1;transition:all 0.3s ease;`);
	}
};
// 获取要拖拽的初始元素
const initGetElement = () => {
	nextTick(() => {
		state.querySelectorEl = layoutLockScreenDateRef.value;
	});
};
// 时间初始化
const initTime = () => {
	state.time.hm = formatDate(new Date(), 'HH:MM');
	state.time.s = formatDate(new Date(), 'SS');
	state.time.mdq = formatDate(new Date(), 'mm-dd，WWW');
};
// 时间初始化定时器
const initSetTime = () => {
	initTime();
	state.setIntervalTime = window.setInterval(() => {
		initTime();
	}, 1000);
};
// 锁屏时间定时器
const initLockScreen = () => {
	if (themeConfig.value.isLockScreen) {
		state.isShowLockScreenIntervalTime = window.setInterval(() => {
			// 锁屏时间为null重置为300秒，防止白屏
			if (themeConfig.value.lockScreenTime == null) {
				themeConfig.value.lockScreenTime = 300;
				setLocalThemeConfig();
				return false;
			}
			if (themeConfig.value.lockScreenTime <= 1) {
				state.isShowLockScreen = true;
				setLocalThemeConfig();
				return false;
			}
			themeConfig.value.lockScreenTime--;
		}, 1000);
	} else {
		clearInterval(state.isShowLockScreenIntervalTime);
	}
};
// 存储布局配置
const setLocalThemeConfig = () => {
	themeConfig.value.isDrawer = false;
	Local.set('themeConfig', themeConfig.value);
};
// 密码输入点击事件
const onLockScreenSubmit = async () => {
	if (state.lockScreenPassword) {
		try {
			// 用户信息不存在时直接解锁（清理缓存后）
			if (userInfos.value.account === void 0) {
				themeConfig.value.isLockScreen = false;
				themeConfig.value.lockScreenTime = 300;
				setLocalThemeConfig();
				return;
			}
			// SM2加密密码
			var publicKey = window.__env__.VITE_SM_PUBLIC_KEY;
			if (publicKey == '') {
				var res1 = await getAPI(SysConfigApi).apiSysConfigSmPublicKeyGet();
				publicKey = window.__env__.VITE_SM_PUBLIC_KEY = res1.data.result ?? '';
			}
			const password = sm2.doEncrypt(state.lockScreenPassword, publicKey, 1);
			const [err, res] = await feature(getAPI(SysAuthApi).apiSysAuthUnLockScreenPost(password));
			if (err) {
				state.message = err.message;
				state.showMessage = true;
				state.lockScreenPassword = '';
				return;
			}
			if (res.data.result) {
				themeConfig.value.isLockScreen = false;
				themeConfig.value.lockScreenTime = 300;
				setLocalThemeConfig();
			}
		} catch (ex: any) {
			state.message = `出错了:${ex}`;
			state.showMessage = true;
		}
	}
};
// 隐藏消息
const hideMessage = () => {
	state.showMessage = false;
	nextTick(() => {
		layoutLockScreenInputRef.value.focus();
	});
};
// 页面加载时
onMounted(async () => {
	initGetElement();
	initSetTime();
	initLockScreen();
	// 获取租户Id标识
	var tenantid = Number(route.query.tid);
	if (isNaN(tenantid)) {
		tenantid = 0;
	} else if (tenantid > 99999) {
		Local.set('tid', tenantid);
	}
	await loadSysInfo(tenantid);
	// 侦听ENTER按钮事件
	document.onkeydown = (e) => {
		if (e.key === 'Enter') {
			// 当显示锁屏页时，按ENTER切到密码输入
			if (state.isShowLoockLogin == false) {
				const moveInterval = setInterval(() => {
					state.isFlags = true;
					state.moveDifference = state.moveDifference - 10;
					onMove();
					// 超过410像素则结束
					if (state.moveDifference < -410 && moveInterval) clearInterval(moveInterval);
				}, 5);
			}
			// 当显示消息时，按ENTER切到密码输入
			if (state.showMessage == true) hideMessage();
		}
	};
});
// 页面卸载时
onUnmounted(() => {
	window.clearInterval(state.setIntervalTime);
	window.clearInterval(state.isShowLockScreenIntervalTime);
});
</script>

<style scoped lang="scss">
.layout-lock-screen-fixed {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.layout-lock-screen-filter {
	filter: blur(1px);
}
.layout-lock-screen-mask {
	background: var(--el-color-white);
	@extend .layout-lock-screen-fixed;
	z-index: 9999990;
}
.layout-lock-screen-img {
	@extend .layout-lock-screen-fixed;
	background-image: url('/@/assets/lockscreen.img');
	background-size: 100% 100%;
	z-index: 9999991;
}
.layout-lock-screen {
	@extend .layout-lock-screen-fixed;
	z-index: 9999992;
	&-date {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		color: var(--el-color-white);
		z-index: 9999993;
		user-select: none;
		&-box {
			position: absolute;
			left: 30px;
			bottom: 50px;
			&-time {
				font-size: 100px;
				color: var(--el-color-white);
			}
			&-info {
				font-size: 40px;
				color: var(--el-color-white);
			}
			&-minutes {
				font-size: 16px;
			}
		}
		&-top {
			width: 40px;
			height: 40px;
			line-height: 40px;
			border-radius: 100%;
			border: 1px solid var(--el-border-color-light, #ebeef5);
			background: rgba(255, 255, 255, 0.1);
			color: var(--el-color-white);
			opacity: 0.8;
			position: absolute;
			right: 30px;
			bottom: 50px;
			text-align: center;
			overflow: hidden;
			transition: all 0.3s ease;
			i {
				transition: all 0.3s ease;
			}
			&-text {
				opacity: 0;
				position: absolute;
				top: 150%;
				font-size: 12px;
				color: var(--el-color-white);
				left: 50%;
				line-height: 1.2;
				transform: translate(-50%, -50%);
				transition: all 0.3s ease;
				width: 35px;
			}
			&:hover {
				border: 1px solid rgba(255, 255, 255, 0.5);
				background: rgba(255, 255, 255, 0.2);
				box-shadow: 0 0 12px 0 rgba(255, 255, 255, 0.5);
				color: var(--el-color-white);
				opacity: 1;
				transition: all 0.3s ease;
				i {
					transform: translateY(-40px);
					transition: all 0.3s ease;
				}
				.layout-lock-screen-date-top-text {
					opacity: 1;
					top: 50%;
					transition: all 0.3s ease;
				}
			}
		}
	}
	&-login {
		position: relative;
		z-index: 9999994;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: var(--el-color-white);
		&-box {
			text-align: center;
			margin: auto;
			&-img {
				width: 180px;
				height: 180px;
				margin: auto;
				img {
					width: 100%;
					height: 100%;
					border-radius: 100%;
				}
			}
			&-name {
				font-size: 26px;
				margin: 15px 0 30px;
			}
			&-message {
				font-size: 16px;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			&-value {
				min-height: 73px;
			}
		}
		&-icon {
			position: absolute;
			right: 30px;
			bottom: 30px;
			i {
				font-size: 20px;
				margin-left: 15px;
				cursor: pointer;
				opacity: 0.8;
				&:hover {
					opacity: 1;
				}
			}
		}
	}
}
:deep(.el-input-group__append) {
	background: var(--el-color-white);
	padding: 0px 15px;
}
:deep(.el-input__wrapper.is-focus) {
	box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset !important;
}
:deep(.el-input__inner) {
	border-right-color: var(--el-border-color-extra-light);
	&:hover {
		border-color: var(--el-border-color-extra-light);
	}
}
</style>
