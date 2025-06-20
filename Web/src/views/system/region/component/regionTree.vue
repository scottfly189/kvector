<template>
	<el-card class="box-card" shadow="hover" body-style="height:100%; overflow:auto;padding:5px;">
		<template #header>
			<div class="card-header">
				<div class="tree-h-flex">
					<div class="tree-h-left">
						<el-input :prefix-icon="Search" v-model="filterText" clearable placeholder="行政区域名称" />
					</div>
					<div class="tree-h-right">
						<el-dropdown @command="handleCommand">
							<el-button style="margin-left: 8px; width: 34px">
								<el-icon class="el-icon--center">
									<more-filled />
								</el-icon>
							</el-button>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item command="expandAll">全部展开</el-dropdown-item>
									<el-dropdown-item command="collapseAll">全部折叠</el-dropdown-item>
									<el-dropdown-item command="rootNode">根节点</el-dropdown-item>
									<el-dropdown-item command="refresh">刷新</el-dropdown-item>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</div>
				</div>
			</div>
		</template>
		<div style="margin-bottom: 45px" v-loading="state.loading">
			<el-scrollbar>
				<el-tree
					ref="treeRef"
					class="filter-tree"
					:data="state.regionData"
					node-key="id"
					:props="{ children: 'children', label: 'name' }"
					:filter-node-method="filterNode"
					@node-click="nodeClick"
					highlight-current
					check-strictly
					accordion
					lazy
					:load="loadNode"
				/>
			</el-scrollbar>
		</div>
	</el-card>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue';
import type { ElTree } from 'element-plus';
import { Search, MoreFilled } from '@element-plus/icons-vue';
import { TreeKey } from 'element-plus/es/components/tree/src/tree.type';

import { getAPI } from '/@/utils/axios-utils';
import { SysRegionApi } from '/@/api-services/api';
import { SysRegion } from '/@/api-services/models';

const filterText = ref('');
const treeRef = ref<InstanceType<typeof ElTree>>();
const state = reactive({
	loading: false,
	regionData: [] as Array<SysRegion>,
});

onMounted(() => {
	fetchTreeData();
});

watch(filterText, (val) => {
	treeRef.value!.filter(val);
});

const fetchTreeData = async () => {
	state.loading = true;
	var res = await getAPI(SysRegionApi).apiSysRegionListGet(0);
	state.regionData = res.data.result ?? [];
	state.loading = false;
};

const loadNode = async (node: any, resolve: any) => {
	if (node.data == undefined || Array.isArray(node.data)) return;

	state.loading = true;
	var res = await getAPI(SysRegionApi).apiSysRegionListGet(node.data.id);
	var data = res.data.result ?? [];
	state.loading = false;
	resolve(data);
};

// 获取已经选择
const getCheckedKeys = () => {
	return treeRef.value!.getCheckedKeys();
};

const filterNode = (value: string, data: any) => {
	if (!value) return true;
	return data.name.includes(value);
};

const handleCommand = async (command: string | number | object) => {
	if ('expandAll' == command) {
		for (let i = 0; i < treeRef.value!.store._getAllNodes().length; i++) {
			treeRef.value!.store._getAllNodes()[i].expanded = true;
		}
	} else if ('collapseAll' == command) {
		for (let i = 0; i < treeRef.value!.store._getAllNodes().length; i++) {
			treeRef.value!.store._getAllNodes()[i].expanded = false;
		}
	} else if ('refresh' == command) {
		fetchTreeData();
	} else if ('rootNode' == command) {
		treeRef.value?.setCurrentKey();
		emits('node-click', { id: 0, name: '' });
	}
};

// 与父组件的交互逻辑
const emits = defineEmits(['node-click']);
const nodeClick = (node: any) => {
	emits('node-click', { id: node.id, name: node.name });
};

// 设置当前选中节点
const setCurrentKey = (key?: TreeKey | undefined, shouldAutoExpandParent?: boolean | undefined) => {
	treeRef.value?.setCurrentKey(key, shouldAutoExpandParent);
};

// 导出对象
defineExpose({ fetchTreeData, getCheckedKeys, setCurrentKey });
</script>

<style lang="scss" scoped>
.box-card {
	flex: 1;
	> :deep(.el-card__header) {
		padding: 5px;
	}
}
.tree-h-flex {
	display: flex;
}

.tree-h-left {
	flex: 1;
	width: 100%;
}

.tree-h-right {
	width: 42px;
	min-width: 42px;
}
</style>
