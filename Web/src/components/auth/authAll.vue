<template>
	<slot v-if="getUserAuthApiList" />
</template>

<script setup lang="ts" name="authAll">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserInfo } from '/@/stores/userInfo';
import { judgementSameArr } from '/@/utils/arrayOperation';

// 定义父组件传过来的值
const props = defineProps({
	value: {
		type: Array,
		default: () => [],
	},
});

// 定义变量内容
const stores = useUserInfo();
const { userInfos } = storeToRefs(stores);

// 获取 pinia 中的用户权限
const getUserAuthApiList = computed(() => {
	return judgementSameArr(props.value, userInfos.value.authApiList);
});
</script>
