<template>
	<div class="layout-breadcrumb-seting">
		<el-drawer :title="$t('message.layout.configTitle')" v-model="getThemeConfig.isDrawer" direction="rtl" destroy-on-close size="280px" @close="onDrawerClose">
			<el-scrollbar class="layout-breadcrumb-seting-bar">
				<!-- 全局主题 -->
				<el-divider content-position="center">{{ $t('message.layout.oneTitle') }}</el-divider>
				<div class="layout-breadcrumb-seting-bar-flex">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.themeColors') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-color-picker v-model="getThemeConfig.primary" size="default" @change="onColorPickerChange"> </el-color-picker>
					</div>
				</div>
				<div style="margin: 10px 0">
					<el-button style="width: 100%" size="default" class="copy-config-btn" type="primary" ref="onColorRef" @click="state.onColorSet = true"> {{ $t('message.layout.moreColors') }} </el-button>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsDark') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isIsDark" size="small" @change="onAddDarkChange"></el-switch>
					</div>
				</div>

				<!-- 顶栏设置 -->
				<el-divider content-position="center">{{ $t('message.layout.twoTopTitle') }}</el-divider>
				<div class="layout-breadcrumb-seting-bar-flex">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoTopBar') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-color-picker v-model="getThemeConfig.topBar" size="default" @change="onBgColorPickerChange('topBar')"> </el-color-picker>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoTopBarColor') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-color-picker v-model="getThemeConfig.topBarColor" size="default" @change="onBgColorPickerChange('topBarColor')"> </el-color-picker>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt10">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoIsTopBarColorGradual') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isTopBarColorGradual" size="small" @change="onTopBarGradualChange"></el-switch>
					</div>
				</div>

				<!-- 菜单设置 -->
				<el-divider content-position="center">{{ $t('message.layout.twoMenuTitle') }}</el-divider>
				<div class="layout-breadcrumb-seting-bar-flex">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoMenuBar') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-color-picker v-model="getThemeConfig.menuBar" size="default" @change="onBgColorPickerChange('menuBar')"> </el-color-picker>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoMenuBarColor') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-color-picker v-model="getThemeConfig.menuBarColor" size="default" @change="onBgColorPickerChange('menuBarColor')"> </el-color-picker>
					</div>
				</div>
				<!-- <div class="layout-breadcrumb-seting-bar-flex">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoMenuBarActiveColor') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-color-picker v-model="getThemeConfig.menuBarActiveColor" size="default" show-alpha @change="onBgColorPickerChange('menuBarActiveColor')" />
					</div>
				</div> -->
				<div class="layout-breadcrumb-seting-bar-flex mt14">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoIsMenuBarColorGradual') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isMenuBarColorGradual" size="small" @change="onMenuBarGradualChange"></el-switch>
					</div>
				</div>

				<!-- 分栏设置 -->
				<el-divider content-position="center" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">{{ $t('message.layout.twoColumnsTitle') }}</el-divider>
				<div class="layout-breadcrumb-seting-bar-flex" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoColumnsMenuBar') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-color-picker v-model="getThemeConfig.columnsMenuBar" size="default" @change="onBgColorPickerChange('columnsMenuBar')" :disabled="getThemeConfig.layout !== 'columns'">
						</el-color-picker>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoColumnsMenuBarColor') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-color-picker v-model="getThemeConfig.columnsMenuBarColor" size="default" @change="onBgColorPickerChange('columnsMenuBarColor')" :disabled="getThemeConfig.layout !== 'columns'">
						</el-color-picker>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt14" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoIsColumnsMenuBarColorGradual') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isColumnsMenuBarColorGradual" size="small" @change="onColumnsMenuBarGradualChange" :disabled="getThemeConfig.layout !== 'columns'"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt14" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoIsColumnsMenuHoverPreload') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isColumnsMenuHoverPreload" size="small" @change="onColumnsMenuHoverPreloadChange" :disabled="getThemeConfig.layout !== 'columns'"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt11">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoColumnsLogoHeight') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-input-number
							v-model="getThemeConfig.columnsLogoHeight"
							controls-position="right"
							:min="1"
							:max="9999"
							@change="onColumnsLogoHeightChange"
							size="small"
							style="width: 90px; margin-right: 1px"
						>
						</el-input-number>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt11">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoColumnsMenuWidth') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-input-number
							v-model="getThemeConfig.columnsMenuWidth"
							controls-position="right"
							:min="1"
							:max="9999"
							@change="onColumnsMenuWidthChange"
							size="small"
							style="width: 90px; margin-right: 1px"
						>
						</el-input-number>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt11">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.twoColumnsMenuHeight') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-input-number
							v-model="getThemeConfig.columnsMenuHeight"
							controls-position="right"
							:min="1"
							:max="9999"
							@change="onColumnsMenuHeightChange"
							size="small"
							style="width: 90px; margin-right: 1px"
						>
						</el-input-number>
					</div>
				</div>

				<!-- 界面设置 -->
				<el-divider content-position="center">{{ $t('message.layout.threeTitle') }}</el-divider>
				<div class="layout-breadcrumb-seting-bar-flex" :style="{ opacity: getThemeConfig.layout === 'transverse' ? 0.5 : 1 }">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.threeIsCollapse') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isCollapse" :disabled="getThemeConfig.layout === 'transverse'" size="small" @change="onThemeConfigChange"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15" :style="{ opacity: getThemeConfig.layout === 'transverse' ? 0.5 : 1 }">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.threeIsUniqueOpened') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isUniqueOpened" :disabled="getThemeConfig.layout === 'transverse'" size="small" @change="setLocalThemeConfig"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.threeIsFixedHeader') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isFixedHeader" size="small" @change="onIsFixedHeaderChange"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15" :style="{ opacity: getThemeConfig.layout !== 'classic' ? 0.5 : 1 }">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.threeIsClassicSplitMenu') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isClassicSplitMenu" :disabled="getThemeConfig.layout !== 'classic'" size="small" @change="onClassicSplitMenuChange"> </el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.threeIsLockScreen') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isLockScreen" size="small" @change="setLocalThemeConfig"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt11">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.threeLockScreenTime') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-input-number v-model="getThemeConfig.lockScreenTime" controls-position="right" :min="1" :max="9999" @change="setLocalThemeConfig" size="small" style="width: 90px; margin-right: 1px">
						</el-input-number>
					</div>
				</div>

				<!-- 界面显示 -->
				<el-divider content-position="center">{{ $t('message.layout.fourTitle') }}</el-divider>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsShowLogo') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isShowLogo" size="small" @change="onIsShowLogoChange"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15" :style="{ opacity: getThemeConfig.layout === 'classic' || getThemeConfig.layout === 'transverse' ? 0.5 : 1 }">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsBreadcrumb') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch
							v-model="getThemeConfig.isBreadcrumb"
							:disabled="getThemeConfig.layout === 'classic' || getThemeConfig.layout === 'transverse'"
							size="small"
							@change="onIsBreadcrumbChange"
						></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsBreadcrumbIcon') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isBreadcrumbIcon" size="small" @change="setLocalThemeConfig"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsTagsview') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isTagsview" size="small" @change="setLocalThemeConfig"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsTagsviewIcon') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isTagsviewIcon" size="small" @change="setLocalThemeConfig"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsCacheTagsView') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isCacheTagsView" size="small" @change="setLocalThemeConfig"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15" :style="{ opacity: state.isMobile ? 0.5 : 1 }">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsSortableTagsView') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isSortableTagsView" :disabled="state.isMobile ? true : false" size="small" @change="onSortableTagsViewChange"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsShareTagsView') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isShareTagsView" size="small" @change="onShareTagsViewChange"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsFooter') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isFooter" size="small" @change="setLocalThemeConfig"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsGrayscale') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isGrayscale" size="small" @change="onAddFilterChange('grayscale')"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsInvert') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-switch v-model="getThemeConfig.isInvert" size="small" @change="onAddFilterChange('invert')"></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourIsWatermark') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<!-- 由参数配置 sys_watermark 控制 -->
						<el-switch v-model="getThemeConfig.isWatermark" size="small" @change="onWatermarkChange" disabled></el-switch>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt14">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fourWatermarkText') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-input v-model="getThemeConfig.watermarkText" size="small" style="width: 90px; margin-right: 1px" @input="onWatermarkTextInput" disabled></el-input>
					</div>
				</div>

				<!-- 其它设置 -->
				<el-divider content-position="center">{{ $t('message.layout.fiveTitle') }}</el-divider>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fiveTagsStyle') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-select v-model="getThemeConfig.tagsStyle" :placeholder="$t('message.layout.chooseStyle')" size="small" style="width: 90px; margin-right: 1px" @change="setLocalThemeConfig">
							<el-option :label="$t('message.layout.style1')" value="tags-style-one"></el-option>
							<el-option :label="$t('message.layout.style4')" value="tags-style-four"></el-option>
							<el-option :label="$t('message.layout.style5')" value="tags-style-five"></el-option>
						</el-select>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fiveAnimation') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-select v-model="getThemeConfig.animation" :placeholder="$t('message.layout.chooseStyle')" size="small" style="width: 90px; margin-right: 1px" @change="setLocalThemeConfig">
							<el-option label="slide-right" value="slide-right"></el-option>
							<el-option label="slide-left" value="slide-left"></el-option>
							<el-option label="opacitys" value="opacitys"></el-option>
							<el-option label="fade" value="fade"></el-option>
							<el-option label="fadeUp" value="fadeUp"></el-option>
							<el-option label="fadeDown" value="fadeDown"></el-option>
							<el-option label="fadeLeft" value="fadeLeft"></el-option>
							<el-option label="fadeRight" value="fadeRight"></el-option>
							<el-option label="lightSpeedLeft" value="lightSpeedLeft"></el-option>
							<el-option label="lightSpeedRight" value="lightSpeedRight"></el-option>
							<el-option label="zoom" value="zoom"></el-option>
							<el-option label="zoomUp" value="zoomUp"></el-option>
							<el-option label="zoomDown" value="zoomDown"></el-option>
							<el-option label="zoomLeft" value="zoomLeft"></el-option>
							<el-option label="zoomRight" value="zoomRight"></el-option>
							<el-option label="flip" value="flip"></el-option>
							<el-option label="flipX" value="flipX"></el-option>
							<el-option label="flipY" value="flipY"></el-option>
							<el-option label="backUp" value="backUp"></el-option>
							<el-option label="backDown" value="backDown"></el-option>
							<el-option label="backLeft" value="backLeft"></el-option>
							<el-option label="backRight" value="backRight"></el-option>
							<el-option label="bounce" value="bounce"></el-option>
							<el-option label="bounceUp" value="bounceUp"></el-option>
							<el-option label="bounceDown" value="bounceDown"></el-option>
							<el-option label="bounceLeft" value="bounceLeft"></el-option>
							<el-option label="bounceRight" value="bounceRight"></el-option>
						</el-select>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fiveColumnsAsideStyle') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-select
							v-model="getThemeConfig.columnsAsideStyle"
							:placeholder="$t('message.layout.chooseStyle')"
							size="small"
							style="width: 90px; margin-right: 1px"
							:disabled="getThemeConfig.layout !== 'columns' ? true : false"
							@change="setLocalThemeConfig"
						>
							<el-option :label="$t('message.layout.round')" value="columns-round"></el-option>
							<el-option :label="$t('message.layout.card')" value="columns-card"></el-option>
						</el-select>
					</div>
				</div>
				<div class="layout-breadcrumb-seting-bar-flex mt15 mb27" :style="{ opacity: getThemeConfig.layout !== 'columns' ? 0.5 : 1 }">
					<div class="layout-breadcrumb-seting-bar-flex-label">{{ $t('message.layout.fiveColumnsAsideLayout') }}</div>
					<div class="layout-breadcrumb-seting-bar-flex-value">
						<el-select
							v-model="getThemeConfig.columnsAsideLayout"
							:placeholder="$t('message.layout.chooseStyle')"
							size="small"
							style="width: 90px; margin-right: 1px"
							:disabled="getThemeConfig.layout !== 'columns' ? true : false"
							@change="setLocalThemeConfig"
						>
							<el-option :label="$t('message.layout.horizontal')" value="columns-horizontal"></el-option>
							<el-option :label="$t('message.layout.vertical')" value="columns-vertical"></el-option>
						</el-select>
					</div>
				</div>

				<!-- 布局切换 -->
				<el-divider content-position="center">{{ $t('message.layout.sixTitle') }}</el-divider>
				<div class="layout-drawer-content-flex">
					<!-- defaults 布局 -->
					<div class="layout-drawer-content-item" @click="onSetLayout('defaults')">
						<section class="el-container el-circular" :class="{ 'drawer-layout-active': getThemeConfig.layout === 'defaults' }">
							<aside class="el-aside" style="width: 20px"></aside>
							<section class="el-container is-vertical">
								<header class="el-header" style="height: 10px"></header>
								<main class="el-main"></main>
							</section>
						</section>
						<div class="layout-tips-warp" :class="{ 'layout-tips-warp-active': getThemeConfig.layout === 'defaults' }">
							<div class="layout-tips-box">
								<p class="layout-tips-txt">{{ $t('message.layout.sixDefaults') }}</p>
							</div>
						</div>
					</div>
					<!-- classic 布局 -->
					<div class="layout-drawer-content-item" @click="onSetLayout('classic')">
						<section class="el-container is-vertical el-circular" :class="{ 'drawer-layout-active': getThemeConfig.layout === 'classic' }">
							<header class="el-header" style="height: 10px"></header>
							<section class="el-container">
								<aside class="el-aside" style="width: 20px"></aside>
								<section class="el-container is-vertical">
									<main class="el-main"></main>
								</section>
							</section>
						</section>
						<div class="layout-tips-warp" :class="{ 'layout-tips-warp-active': getThemeConfig.layout === 'classic' }">
							<div class="layout-tips-box">
								<p class="layout-tips-txt">{{ $t('message.layout.sixClassic') }}</p>
							</div>
						</div>
					</div>
					<!-- transverse 布局 -->
					<div class="layout-drawer-content-item" @click="onSetLayout('transverse')">
						<section class="el-container is-vertical el-circular" :class="{ 'drawer-layout-active': getThemeConfig.layout === 'transverse' }">
							<header class="el-header" style="height: 10px"></header>
							<section class="el-container">
								<section class="el-container is-vertical">
									<main class="el-main"></main>
								</section>
							</section>
						</section>
						<div class="layout-tips-warp" :class="{ 'layout-tips-warp-active': getThemeConfig.layout === 'transverse' }">
							<div class="layout-tips-box">
								<p class="layout-tips-txt">{{ $t('message.layout.sixTransverse') }}</p>
							</div>
						</div>
					</div>
					<!-- columns 布局 -->
					<div class="layout-drawer-content-item" @click="onSetLayout('columns')">
						<section class="el-container el-circular" :class="{ 'drawer-layout-active': getThemeConfig.layout === 'columns' }">
							<aside class="el-aside-dark" style="width: 10px"></aside>
							<aside class="el-aside" style="width: 20px"></aside>
							<section class="el-container is-vertical">
								<header class="el-header" style="height: 10px"></header>
								<main class="el-main"></main>
							</section>
						</section>
						<div class="layout-tips-warp" :class="{ 'layout-tips-warp-active': getThemeConfig.layout === 'columns' }">
							<div class="layout-tips-box">
								<p class="layout-tips-txt">{{ $t('message.layout.sixColumns') }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="copy-config">
					<el-alert :title="$t('message.layout.tipText')" type="warning" :closable="false"> </el-alert>
					<el-button size="default" class="copy-config-btn" type="primary" ref="copyConfigBtnRef" @click="onCopyConfigClick">
						<el-icon class="mr5">
							<ele-CopyDocument />
						</el-icon>
						{{ $t('message.layout.copyText') }}
					</el-button>
					<el-button size="default" class="copy-config-btn-reset" type="info" @click="onResetConfigClick">
						<el-icon class="mr5">
							<ele-RefreshRight />
						</el-icon>
						{{ $t('message.layout.resetText') }}
					</el-button>
				</div>
			</el-scrollbar>
		</el-drawer>

		<el-dialog v-model="state.onColorSet">
			<template #header>
				<div style="color: #fff">
					<el-icon size="16" style="margin-right: 3px; display: inline; vertical-align: middle"> <ele-MagicStick /> </el-icon>
					<span> {{ $t('message.layout.chineseTraditionalColors') }} </span>
				</div>
			</template>
			<div style="height: 70vh; overflow-y: scroll; overflow-x: hidden">
				<el-row :gutter="20">
					<el-col :xs="6" :sm="4" :md="4" :lg="4" :xl="3" class="mb15" v-for="i in chineseColorArr" :key="i" @click="cliChineseColor(i.hex)">
						<div class="traditionalColors" :style="'background:' + i.hex">
							<el-icon class="traditionalColors-circleCheck" v-if="getThemeConfig.primary == i.hex" size="20" color="#fff"><ele-CircleCheck /></el-icon>
						</div>
						<div class="traditionalColors-chines mt10" style="cursor: grab">{{ i.name }}</div>
						<div class="traditionalColors-chines" style="cursor: grab; color: gray">{{ i.hex }}</div>
					</el-col>
				</el-row>
			</div>
		</el-dialog>
	</div>
</template>

<script setup lang="ts" name="layoutBreadcrumbSeting">
import { nextTick, onUnmounted, onMounted, computed, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useThemeConfig } from '/@/stores/themeConfig';
import { useChangeColor } from '/@/utils/theme';
import { verifyAndSpace } from '/@/utils/toolsValidate';
import { Local, Session } from '/@/utils/storage';
import Watermark from '/@/utils/watermark';
import commonFunction from '/@/utils/commonFunction';
import other from '/@/utils/other';
import mittBus from '/@/utils/mitt';
import chineseColorArr from './colors.json';

const { t } = useI18n();

// 定义变量内容
const { locale } = useI18n();
const storesThemeConfig = useThemeConfig();
const { themeConfig } = storeToRefs(storesThemeConfig);
const { copyText } = commonFunction();
const { getLightColor, getDarkColor } = useChangeColor();
const state = reactive({
	isMobile: false,
	onColorSet: false,
});

// 更换主题色
const cliChineseColor = (e: any) => {
	navigator.clipboard.writeText(e);
	getThemeConfig.value.primary = e;
	onColorPickerChange();

	ElMessage.info(`${t('message.layout.themeColorCopied')}：【${e}】`);
};

// 获取布局配置信息
const updateThemeConfig = () => {
	if (!themeConfig.value.columnsMenuWidth) {
		themeConfig.value.columnsMenuWidth = 70;
	}
	if (!themeConfig.value.columnsMenuHeight) {
		themeConfig.value.columnsMenuHeight = 50;
	}
	if (!themeConfig.value.columnsLogoHeight) {
		themeConfig.value.columnsLogoHeight = 50;
	}
};
const getThemeConfig = computed(() => {
	updateThemeConfig();
	return themeConfig.value;
});
// 1、全局主题
const onColorPickerChange = () => {
	if (!getThemeConfig.value.primary) return ElMessage.warning(t('message.layout.globalThemePrimaryColorCannotBeEmpty'));
	// 颜色加深
	document.documentElement.style.setProperty('--el-color-primary-dark-2', `${getDarkColor(getThemeConfig.value.primary, 0.1)}`);
	document.documentElement.style.setProperty('--el-color-primary', getThemeConfig.value.primary);
	document.documentElement.style.setProperty('--vxe-ui-font-primary-color', getThemeConfig.value.primary);
	// 颜色变浅
	for (let i = 1; i <= 9; i++) {
		document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, `${getLightColor(getThemeConfig.value.primary, i / 10)}`);
		if (i == 3) document.documentElement.style.setProperty('--vxe-ui-font-primary-lighten-color', `${getLightColor(getThemeConfig.value.primary, i / 10)}`);
	}
	setDispatchThemeConfig();
};
// 2、菜单 / 顶栏
const onBgColorPickerChange = (bg: string) => {
	document.documentElement.style.setProperty(`--next-bg-${bg}`, themeConfig.value[bg]);
	if (bg === 'menuBar') {
		document.documentElement.style.setProperty(`--next-bg-menuBar-light-1`, getLightColor(getThemeConfig.value.menuBar, 0.05));
	}
	onTopBarGradualChange();
	onMenuBarGradualChange();
	onColumnsMenuBarGradualChange();
	setDispatchThemeConfig();
};
// 2、菜单 / 顶栏 --> 顶栏背景渐变
const onTopBarGradualChange = () => {
	setGraduaFun('.layout-navbars-breadcrumb-index', getThemeConfig.value.isTopBarColorGradual, getThemeConfig.value.topBar);
};
// 2、菜单 / 顶栏 --> 菜单背景渐变
const onMenuBarGradualChange = () => {
	setGraduaFun('.layout-container .el-aside', getThemeConfig.value.isMenuBarColorGradual, getThemeConfig.value.menuBar);
};
// 2、菜单 / 顶栏 --> 分栏菜单背景渐变
const onColumnsMenuBarGradualChange = () => {
	setGraduaFun('.layout-container .layout-columns-aside', getThemeConfig.value.isColumnsMenuBarColorGradual, getThemeConfig.value.columnsMenuBar);
};
// 2、菜单 / 顶栏 --> 背景渐变函数
const setGraduaFun = (el: string, bool: boolean, color: string) => {
	nextTick(() => {
		setTimeout(() => {
			let els = document.querySelector(el);
			if (!els) return false;
			document.documentElement.style.setProperty('--el-menu-bg-color', document.documentElement.style.getPropertyValue('--next-bg-menuBar'));
			if (bool) els.setAttribute('style', `background:linear-gradient(to bottom , ${color}, ${getLightColor(color, 0.5)})`);
			else els.setAttribute('style', ``);
			setLocalThemeConfig();
		}, 300);
	});
};
// 2、分栏设置 -> 分栏菜单鼠标悬停预加载
const onColumnsMenuHoverPreloadChange = () => {
	setLocalThemeConfig();
};
// 2、分栏设置 -> 分栏Logo高度
const onColumnsLogoHeightChange = () => {
	document.documentElement.style.setProperty('--el-columnsLogoHeight', `${themeConfig.value.columnsLogoHeight}px`);
	setLocalThemeConfig();
};
// 2、分栏设置 -> 分栏菜单宽度
const onColumnsMenuWidthChange = () => {
	document.documentElement.style.setProperty('--el-columnsMenuWidth', `${themeConfig.value.columnsMenuWidth}px`);
	document.documentElement.style.setProperty('--el-columnsMenuRoundWidth', `${themeConfig.value.columnsMenuWidth - 5}px`);
	setLocalThemeConfig();
};
// 2、分栏设置 -> 分栏菜单高度
const onColumnsMenuHeightChange = () => {
	document.documentElement.style.setProperty('--el-columnsMenuHeight', `${themeConfig.value.columnsMenuHeight}px`);
	document.documentElement.style.setProperty('--el-columnsMenuRoundHeight', `${themeConfig.value.columnsMenuHeight - 5}px`);
	setLocalThemeConfig();
};
// 3、界面设置 --> 菜单水平折叠
const onThemeConfigChange = () => {
	setDispatchThemeConfig();
};
// 3、界面设置 --> 固定 Header
const onIsFixedHeaderChange = () => {
	getThemeConfig.value.isFixedHeaderChange = getThemeConfig.value.isFixedHeader ? false : true;
	setLocalThemeConfig();
};
// 3、界面设置 --> 经典布局分割菜单
const onClassicSplitMenuChange = () => {
	getThemeConfig.value.isBreadcrumb = false;
	setLocalThemeConfig();
	mittBus.emit('getBreadcrumbIndexSetFilterRoutes');
};
// 4、界面显示 --> 侧边栏 Logo
const onIsShowLogoChange = () => {
	getThemeConfig.value.isShowLogoChange = getThemeConfig.value.isShowLogo ? false : true;
	setLocalThemeConfig();
};
// 4、界面显示 --> 面包屑 Breadcrumb
const onIsBreadcrumbChange = () => {
	if (getThemeConfig.value.layout === 'classic') {
		getThemeConfig.value.isClassicSplitMenu = false;
	}
	setLocalThemeConfig();
};
// 4、界面显示 --> 开启 TagsView 拖拽
const onSortableTagsViewChange = () => {
	mittBus.emit('openOrCloseSortable');
	setLocalThemeConfig();
};
// 4、界面显示 --> 开启 TagsView 共用
const onShareTagsViewChange = () => {
	mittBus.emit('openShareTagsView');
	setLocalThemeConfig();
};
// 4、界面显示 --> 灰色模式/色弱模式
const onAddFilterChange = (attr: string) => {
	if (attr === 'grayscale') {
		if (getThemeConfig.value.isGrayscale) getThemeConfig.value.isInvert = false;
	} else {
		if (getThemeConfig.value.isInvert) getThemeConfig.value.isGrayscale = false;
	}
	const cssAttr = attr === 'grayscale' ? `grayscale(${getThemeConfig.value.isGrayscale ? 1 : 0})` : `invert(${getThemeConfig.value.isInvert ? '80%' : '0%'})`;
	const appEle = document.body;
	appEle.setAttribute('style', `filter: ${cssAttr}`);
	setLocalThemeConfig();
};
// 4、界面显示 --> 深色模式
const onAddDarkChange = () => {
	const body = document.documentElement as HTMLElement;
	if (getThemeConfig.value.isIsDark) {
		body.setAttribute('data-theme', 'dark');
		body.setAttribute('data-vxe-ui-theme', 'dark');
	} else {
		body.setAttribute('data-theme', '');
		body.setAttribute('data-vxe-ui-theme', 'light');
	}
};
// 4、界面显示 --> 开启水印
const onWatermarkChange = () => {
	getThemeConfig.value.isWatermark ? Watermark.set(getThemeConfig.value.watermarkText) : Watermark.del();
	setLocalThemeConfig();
};
// 4、界面显示 --> 水印文案
const onWatermarkTextInput = (val: string) => {
	getThemeConfig.value.watermarkText = verifyAndSpace(val);
	if (getThemeConfig.value.watermarkText === '') return false;
	if (getThemeConfig.value.isWatermark) Watermark.set(getThemeConfig.value.watermarkText);
	setLocalThemeConfig();
};
// 5、布局切换
const onSetLayout = (layout: string) => {
	Local.set('oldLayout', layout);
	if (getThemeConfig.value.layout === layout) return false;
	if (layout === 'transverse') getThemeConfig.value.isCollapse = false;
	getThemeConfig.value.layout = layout;
	getThemeConfig.value.isDrawer = false;
	initLayoutChangeFun();
};
// 设置布局切换函数
const initLayoutChangeFun = () => {
	onBgColorPickerChange('menuBar');
	onBgColorPickerChange('menuBarColor');
	onBgColorPickerChange('menuBarActiveColor');
	onBgColorPickerChange('topBar');
	onBgColorPickerChange('topBarColor');
	onBgColorPickerChange('columnsMenuBar');
	onBgColorPickerChange('columnsMenuBarColor');
};
// 关闭弹窗时，初始化变量。变量用于处理 layoutScrollbarRef.value.update() 更新滚动条高度
const onDrawerClose = () => {
	getThemeConfig.value.isFixedHeaderChange = false;
	getThemeConfig.value.isShowLogoChange = false;
	getThemeConfig.value.isDrawer = false;
	setLocalThemeConfig();
};
// 布局配置弹窗打开
const openDrawer = () => {
	getThemeConfig.value.isDrawer = true;
};
// 触发 store 布局配置更新
const setDispatchThemeConfig = () => {
	setLocalThemeConfig();
	setLocalThemeConfigStyle();
};
// 存储布局配置
const setLocalThemeConfig = () => {
	Local.remove('themeConfig');
	Local.set('themeConfig', getThemeConfig.value);
};
// 存储布局配置全局主题样式（html根标签）
const setLocalThemeConfigStyle = () => {
	Local.set('themeConfigStyle', document.documentElement.style.cssText);
};
// 一键复制配置
const onCopyConfigClick = () => {
	let copyThemeConfig = Local.get('themeConfig');
	copyThemeConfig.isDrawer = false;
	copyText(JSON.stringify(copyThemeConfig)).then(() => {
		getThemeConfig.value.isDrawer = false;
	});
};
// 一键恢复默认
const onResetConfigClick = () => {
	Local.clear();
	Session.clear();
	window.location.reload();
	// @ts-ignore
	Local.set('version', __NEXT_VERSION__);
};
// 初始化菜单样式等
const initSetStyle = () => {
	// 2、菜单 / 顶栏 --> 顶栏背景渐变
	onTopBarGradualChange();
	// 2、菜单 / 顶栏 --> 菜单背景渐变
	onMenuBarGradualChange();
	// 2、菜单 / 顶栏 --> 分栏菜单背景渐变
	onColumnsMenuBarGradualChange();
};
onMounted(() => {
	nextTick(() => {
		// 判断当前布局是否不相同，不相同则初始化当前布局的样式，防止监听窗口大小改变时，布局配置logo、菜单背景等部分布局失效问题
		if (!Local.get('frequency')) initLayoutChangeFun();
		Local.set('frequency', 1);
		// 监听窗口大小改变，非默认布局，设置成默认布局（适配移动端）
		mittBus.on('layoutMobileResize', (res: LayoutMobileResize) => {
			getThemeConfig.value.layout = res.layout;
			getThemeConfig.value.isDrawer = false;
			initLayoutChangeFun();
			state.isMobile = other.isMobile();
		});
		setTimeout(() => {
			// 默认样式
			onColorPickerChange();
			// 灰色模式
			if (getThemeConfig.value.isGrayscale) onAddFilterChange('grayscale');
			// 色弱模式
			if (getThemeConfig.value.isInvert) onAddFilterChange('invert');
			// 深色模式
			if (getThemeConfig.value.isIsDark) onAddDarkChange();
			// 开启水印
			onWatermarkChange();
			// 设置分栏Logo高度
			onColumnsLogoHeightChange();
			// 设置分栏菜单宽度
			onColumnsMenuWidthChange();
			// 设置分栏菜单高度
			onColumnsMenuHeightChange();
			// 语言国际化
			if (Local.get('themeConfig')) locale.value = Local.get('themeConfig').globalI18n;
			// 初始化菜单样式等
			initSetStyle();
		}, 100);
	});
});
onUnmounted(() => {
	mittBus.off('layoutMobileResize', () => {});
});

// 暴露变量
defineExpose({
	openDrawer,
});
</script>

<style scoped lang="scss">
.layout-breadcrumb-seting-bar {
	height: calc(100vh - 50px);
	padding: 0 15px;
	:deep(.el-scrollbar__view) {
		overflow-x: hidden !important;
	}
	.layout-breadcrumb-seting-bar-flex {
		display: flex;
		align-items: center;
		margin-bottom: 5px;
		&-label {
			flex: 1;
			color: var(--el-text-color-primary);
		}
	}
	.layout-drawer-content-flex {
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
		margin: 0 -5px;
		.layout-drawer-content-item {
			width: 50%;
			height: 70px;
			cursor: pointer;
			border: 1px solid transparent;
			position: relative;
			padding: 5px;
			.el-container {
				height: 100%;
				.el-aside-dark {
					background-color: var(--next-color-seting-header);
				}
				.el-aside {
					background-color: var(--next-color-seting-aside);
				}
				.el-header {
					background-color: var(--next-color-seting-header);
				}
				.el-main {
					background-color: var(--next-color-seting-main);
				}
			}
			.el-circular {
				border-radius: 2px;
				overflow: hidden;
				border: 1px solid transparent;
				transition: all 0.3s ease-in-out;
			}
			.drawer-layout-active {
				border: 1px solid;
				border-color: var(--el-color-primary);
			}
			.layout-tips-warp,
			.layout-tips-warp-active {
				transition: all 0.3s ease-in-out;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				border: 1px solid;
				border-color: var(--el-color-primary-light-5);
				border-radius: 100%;
				padding: 4px;
				.layout-tips-box {
					transition: inherit;
					width: 30px;
					height: 30px;
					z-index: 9;
					border: 1px solid;
					border-color: var(--el-color-primary-light-5);
					border-radius: 100%;
					.layout-tips-txt {
						transition: inherit;
						position: relative;
						top: 5px;
						font-size: 12px;
						line-height: 1;
						letter-spacing: 2px;
						white-space: nowrap;
						color: var(--el-color-primary-light-5);
						text-align: center;
						transform: rotate(30deg);
						left: -1px;
						background-color: var(--next-color-seting-main);
						width: 32px;
						height: 17px;
						line-height: 17px;
					}
				}
			}
			.layout-tips-warp-active {
				border: 1px solid;
				border-color: var(--el-color-primary);
				.layout-tips-box {
					border: 1px solid;
					border-color: var(--el-color-primary);
					.layout-tips-txt {
						color: var(--el-color-primary) !important;
						background-color: var(--next-color-seting-main) !important;
					}
				}
			}
			&:hover {
				.el-circular {
					transition: all 0.3s ease-in-out;
					border: 1px solid;
					border-color: var(--el-color-primary);
				}
				.layout-tips-warp {
					transition: all 0.3s ease-in-out;
					border-color: var(--el-color-primary);
					.layout-tips-box {
						transition: inherit;
						border-color: var(--el-color-primary);
						.layout-tips-txt {
							transition: inherit;
							color: var(--el-color-primary) !important;
							background-color: var(--next-color-seting-main) !important;
						}
					}
				}
			}
		}
	}
	.copy-config {
		margin: 10px 0;
		.copy-config-btn {
			width: 100%;
			margin-top: 15px;
		}
		.copy-config-btn-reset {
			width: 100%;
			margin: 10px 0 0;
		}
	}
}

.traditionalColors {
	height: 50px;
	position: relative;
}
.traditionalColors-chines {
	text-align: center;
}
.traditionalColors-circleCheck {
	position: absolute;
	left: calc(50% - 10px);
	top: calc(50% - 10px);
}
:deep(#color-box) {
	.el-dialog__body {
		padding: 0 !important;
	}
}
</style>
