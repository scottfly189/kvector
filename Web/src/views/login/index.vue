<template>
	<div class="login-container flex">
		<div class="login-left flex-margin">
			<div class="login-left-logo">
				<img :src="getThemeConfig.logoUrl" />
				<div class="login-left-logo-text">
					<span>{{ getThemeConfig.globalViceTitle }}</span>
					<span class="login-left-logo-text-msg">{{ getThemeConfig.globalViceTitleMsg }}</span>
					<!-- <span class="login-left-logo-text-msg">{{ $t('message.viceDesc') }}</span> -->
				</div>
			</div>
			<el-carousel height="500px" class="login-carousel">
				<el-carousel-item>
					<img :src="loginIconTwo" class="login-icon-group-icon" />
				</el-carousel-item>
				<el-carousel-item>
					<img :src="loginIconTwo1" class="login-icon-group-icon" />
				</el-carousel-item>
				<el-carousel-item>
					<img :src="loginIconTwo2" class="login-icon-group-icon" />
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="login-right flex">
			<div class="login-right-warp flex-margin">
				<span class="login-right-warp-one"></span>
				<span class="login-right-warp-two"></span>
				<div class="login-right-warp-main">
					<div class="login-right-warp-main-title">{{ getThemeConfig.globalTitle }}</div>
					<div class="login-right-warp-main-form">
						<div v-if="!state.isScan">
							<el-tabs v-model="state.tabsActiveName">
								<el-tab-pane :label="$t('message.label.one1')" name="account">
									<Account />
								</el-tab-pane>
								<el-tab-pane :label="$t('message.label.two2')" name="mobile">
									<Mobile />
								</el-tab-pane>
							</el-tabs>
						</div>
						<Scan v-if="state.isScan" />
						<div class="login-content-main-scan" @click="state.isScan = !state.isScan">
							<i class="iconfont" :class="state.isScan ? 'icon-diannao1' : 'icon-barcode-qr'"></i>
							<div class="login-content-main-scan-delta"></div>
						</div>
					</div>
				</div>
			</div>
			<div v-if="getThemeConfig.i18NSwitch" class="change-language">
				<!-- <div class="change-language-title">{{ $t('message.account.changeLanguage') }}:</div> -->
				<div style="cursor: pointer">
					<el-dropdown @command="onLanguageChange">
						<div class="layout-navbars-breadcrumb-user-icon">
							<span :class="`fi fi-${currentCountryCode}`"></span>
						</div>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item v-for="(value, key) in languageList" :key="key" :command="key" :disabled="state.disabledI18n === key">
									<div class="flex items-center">
										<div class="mr-2">
											<span :class="`fi fi-${getCountryCode(key)}`"></span>
										</div>
										<div style="margin-left: 10px">
											{{ value }}
										</div>
									</div>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
			</div>
		</div>
		<div class="copyright" :class="[getThemeConfig.icp ? 'mb25' : 'mt5']">{{ getThemeConfig.copyright }}</div>
		<div v-if="getThemeConfig.icp" class="icp mt5">
			<el-link :href="getThemeConfig.icpUrl" target="_blank">{{ getThemeConfig.icp }}</el-link>
		</div>
	</div>
</template>

<script setup lang="ts" name="loginIndex">
import { defineAsyncComponent, onMounted, reactive, computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useThemeConfig } from '/@/stores/themeConfig';
import { NextLoading } from '/@/utils/loading';
// 引入轮播图
import loginIconTwo from '/@/assets/login-icon-two.svg';
import loginIconTwo1 from '/@/assets/login-icon-two1.svg';
import loginIconTwo2 from '/@/assets/login-icon-two2.svg';
// 引入系统信息
import { loadSysInfo } from '/@/utils/sysInfo';
import { Local } from '/@/utils/storage';
// 引入多语言
import { languageList, getCountryCode } from '/@/i18n';
import '/node_modules/flag-icons/css/flag-icons.min.css';

// 引入组件
const Account = defineAsyncComponent(() => import('/@/views/login/component/account.vue'));
const Mobile = defineAsyncComponent(() => import('/@/views/login/component/mobile.vue'));
const Scan = defineAsyncComponent(() => import('/@/views/login/component/scan.vue'));

const { locale } = useI18n();
const route = useRoute();
const storesThemeConfig = useThemeConfig();
const { themeConfig } = storeToRefs(storesThemeConfig);
const currentCountryCode = ref<string>(getCountryCode(themeConfig.value.globalI18n));
const state = reactive({
	tabsActiveName: 'account',
	isScan: false,
	disabledI18n: 'zh-CN',
});
// 获取布局配置信息
const getThemeConfig = computed(() => {
	return themeConfig.value;
});

// 页面加载时
onMounted(async () => {
	// 获取租户Id标识
	if (!route.query.tid) Local.remove('tid');
	var tenantid = Number(route.query.tid);
	if (isNaN(tenantid)) {
		tenantid = 0;
	} else if (tenantid > 99999) {
		Local.set('tid', tenantid);
	}
	await loadSysInfo(tenantid);

	NextLoading.done();
});

// 切换语言
const onLanguageChange = (lang: string) => {
	Local.remove('themeConfig');
	themeConfig.value.globalI18n = lang;
	Local.set('themeConfig', themeConfig.value);
	currentCountryCode.value = getCountryCode(lang);
	locale.value = lang;
	initI18nOrSize('globalI18n', 'disabledI18n');
};

// 初始化组件大小/i18n
const initI18nOrSize = (value: string, attr: string) => {
	(<any>state)[attr] = Local.get('themeConfig')[value];
};
</script>

<style scoped lang="scss">
.login-container {
	height: 100%;
	background-color: rgba(53, 62, 84);

	.login-left {
		width: 50%;
		height: 100%;
		float: left;
		justify-content: center;

		.login-carousel {
			position: relative;
			top: 50%;
			transform: translateY(-50%);
		}

		.login-left-logo {
			display: flex;
			align-items: center;
			position: absolute;
			top: 30px;
			left: 30px;
			z-index: 1;
			animation: logoAnimation 0.3s ease;

			img {
				// width: 100px;
				height: 64px;
			}

			.login-left-logo-text {
				display: flex;
				flex-direction: column;

				span {
					margin-left: 20px;
					font-size: 28px;
					font-weight: 700;
					color: var(--next-color-white);
				}

				.login-left-logo-text-msg {
					padding-top: 5px;
					font-size: 14px;
					color: var(--next-color-white);
				}
			}
		}

		.login-icon-group-icon {
			width: 85%;
			height: 85%;
			position: absolute;
			left: 10%;
			top: 50%;
			transform: translateY(-50%) translate3d(0, 0, 0);
		}
	}

	.login-right {
		width: 50%;
		float: right;
		background: var(--el-color-white);
		background-image: url('../../assets/bg.svg');
		background-size: 100% auto;
		background-position: 50% calc(50% - 15px);
		background-attachment: fixed;
		background-repeat: no-repeat;

		.login-right-warp {
			border: 1px solid var(--el-color-primary-light-3);
			border-radius: 3px;
			height: 550px;
			position: relative;
			overflow: hidden;
			background-color: var(--el-color-white);

			.login-right-warp-one,
			.login-right-warp-two {
				position: absolute !important;
				display: block;
				width: inherit;
				height: inherit;

				&::before,
				&::after {
					content: '';
					position: absolute;
					z-index: 1;
				}
			}

			.login-right-warp-one {
				&::before {
					filter: hue-rotate(0deg);
					top: 0px;
					left: 0;
					width: 100%;
					height: 1px;
					background: linear-gradient(90deg, transparent, var(--el-color-primary));
					animation: loginLeft 3s linear infinite;
				}

				&::after {
					filter: hue-rotate(0deg);
					top: -100%;
					right: 2px;
					width: 1px;
					height: 100%;
					background: linear-gradient(180deg, transparent, var(--el-color-primary));
					animation: loginTop 3s linear infinite;
					animation-delay: 0.7s;
				}
			}

			.login-right-warp-two {
				&::before {
					filter: hue-rotate(0deg);
					bottom: 2px;
					right: -100%;
					width: 100%;
					height: 1px;
					background: linear-gradient(270deg, transparent, var(--el-color-primary));
					animation: loginRight 3s linear infinite;
					animation-delay: 1.4s;
				}

				&::after {
					filter: hue-rotate(0deg);
					bottom: -100%;
					left: 0px;
					width: 1px;
					height: 100%;
					background: linear-gradient(360deg, transparent, var(--el-color-primary));
					animation: loginBottom 3s linear infinite;
					animation-delay: 2.1s;
				}
			}

			.login-right-warp-main {
				display: flex;
				flex-direction: column;
				height: 100%;
				background-color: var(--el-color-white);

				.login-right-warp-main-title {
					height: 130px;
					line-height: 130px;
					font-size: 32px;
					font-weight: 800;
					text-align: center;
					//letter-spacing: 3px;
					animation: logoAnimation 0.3s ease;
					animation-delay: 0.3s;
					color: var(--el-color-primary);
				}

				.login-right-warp-main-form {
					flex: 1;
					padding: 0 50px 50px;

					.login-content-main-scan {
						position: absolute;
						top: 0;
						right: 0;
						width: 50px;
						height: 50px;
						overflow: hidden;
						cursor: pointer;
						transition: all ease 0.3s;
						color: var(--el-color-primary);

						&-delta {
							position: absolute;
							width: 35px;
							height: 70px;
							z-index: 2;
							top: 2px;
							right: 21px;
							background: var(--el-color-white);
							transform: rotate(-45deg);
						}

						&:hover {
							opacity: 1;
							transition: all ease 0.3s;
							color: var(--el-color-primary) !important;
						}

						i {
							width: 47px;
							height: 50px;
							display: inline-block;
							font-size: 48px;
							position: absolute;
							right: 1px;
							top: 0px;
						}
					}
				}
			}
		}

		/* 在这里可以添加一个伪元素来覆盖原内容，实现磨砂效果 */
		.login-right-warp::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(255, 255, 255, 1);
			filter: blur(4px);
			/* 调整模糊半径以改变磨砂效果强度 */
			z-index: 1;
		}

		/* 保持原有内容可见，放置在伪元素下方 */
		.login-right-warp > * {
			position: relative;
			z-index: 2;
		}

		// 多语言
		.change-language {
			position: relative;
			margin-top: 30px;
			margin-right: 30px;

			// .change-language-title {
			// 	font-size: 12px;
			// 	color: var(--el-text-color-placeholder);
			// }
		}
	}
}

.copyright,
.icp {
	position: absolute;
	bottom: 2%;
	transform: translateX(-50%);
	white-space: nowrap;
}

@media screen and (min-width: 1200px) {
	.login-right-warp {
		width: 500px;
	}

	.copyright,
	.icp {
		left: 75%;
		color: var(--el-text-color-secondary);
	}

	.icp {
		.el-link {
			color: var(--el-text-color-secondary);
		}
	}
}

@media screen and (max-width: 1200px) {
	.copyright,
	.icp {
		left: 50%;
		color: var(--el-color-white);
	}

	.icp {
		.el-link {
			color: var(--el-color-white);
		}
	}

	.change-language {
		display: none;
	}
}

@media screen and (max-width: 580px) {
	.copyright,
	.icp {
		left: 50%;
		color: var(--el-text-color-secondary);
	}

	.icp {
		.el-link {
			color: var(--el-text-color-secondary);
		}
	}
}
</style>
