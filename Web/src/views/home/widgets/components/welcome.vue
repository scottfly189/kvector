<template>
	<el-card shadow="hover" :header="$t('message.list.welcome')">
		<template #header>
			<el-icon style="display: inline; vertical-align: middle"> <ele-Promotion /> </el-icon>
			<span> {{ $t('message.list.welcome') }} </span>
		</template>
		<div class="welcome">
			<div class="logo">
				<!-- <img src="/@/assets/logo.png" style="height: 150px;"/> -->
				<h2>{{ $t('message.list.welcomeUse') }} {{ themeConfig.globalTitle }}</h2>
			</div>
			<div class="tips">
				<div class="tips-item">
					<div class="tips-item-icon">
						<el-icon><ele-Menu /></el-icon>
					</div>
					<div class="tips-item-message">{{ $t('message.list.welcome1') }}</div>
				</div>
				<div class="tips-item">
					<div class="tips-item-icon">
						<el-icon><ele-Promotion /></el-icon>
					</div>
					<div class="tips-item-message">{{ $t('message.list.welcome2') }}</div>
				</div>
				<div class="tips-item">
					<div class="tips-item-icon">
						<el-icon><ele-MilkTea /></el-icon>
					</div>
					<div class="tips-item-message">{{ $t('message.list.welcome3') }}</div>
				</div>
			</div>
			<div class="actions">
				<el-button type="primary" icon="ele-Guide" size="large" @click="godoc">{{ $t('message.list.goDoc') }}</el-button>
			</div>
		</div>
	</el-card>
</template>

<script setup lang="ts" name="welcome">
const godoc = () => {
	window.open('https://adminnet.top/');
};
</script>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useThemeConfig } from '/@/stores/themeConfig';

const storesThemeConfig = useThemeConfig();
const { themeConfig } = storeToRefs(storesThemeConfig);

export default {
	title: 'Welcome',
	icon: 'ele-Promotion',
	description: '项目特色以及文档链接',
};
</script>

<style scoped>
.welcome .logo {
	text-align: center;
}

.welcome .logo img {
	vertical-align: bottom;
	width: 100px;
	height: 100px;
	margin-bottom: 20px;
}

.welcome .logo h2 {
	font-size: 30px;
	font-weight: normal;
	display: flex;
	align-items: center;
	justify-content: center;
}

.tips {
	margin-top: 20px;
	padding: 0 40px;
}

.tips-item {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 7.5px 0;
}

.tips-item-icon {
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	font-size: 18px;
	margin-right: 20px;
	color: var(--el-color-primary);
	background: rgba(180, 180, 180, 0.1);
}

.tips-item-message {
	flex: 1;
	font-size: 14px;
}

.actions {
	text-align: center;
	margin: 40px 0 20px 0;
}
</style>
