<template>
	<div class="syslogex-container">
		<el-card shadow="hover" :body-style="{ padding: '5px 5px 0 5px', display: 'flex', width: '100%', height: '100%', alignItems: 'start' }">
			<el-form :model="state.queryParams" ref="queryForm" :show-message="false" :inlineMessage="true" label-width="auto" style="flex: 1 1 0%">
				<el-row :gutter="10">
					<el-col class="mb5" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
						<el-form-item label="开始时间" prop="name">
							<el-date-picker
								v-model="state.queryParams.startTime"
								type="datetime"
								placeholder="开始时间"
								format="YYYY-MM-DD HH:mm:ss"
								value-format="YYYY-MM-DD HH:mm:ss"
								:shortcuts="shortcuts"
								class="w100"
							/>
						</el-form-item>
					</el-col>
					<el-col class="mb5" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
						<el-form-item label="结束时间" prop="code">
							<el-date-picker
								v-model="state.queryParams.endTime"
								type="datetime"
								placeholder="结束时间"
								format="YYYY-MM-DD HH:mm:ss"
								value-format="YYYY-MM-DD HH:mm:ss"
								:shortcuts="shortcuts"
								class="w100"
							/>
						</el-form-item>
					</el-col>
					<el-col class="mb5" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
						<el-form-item label="模块名称">
							<el-input v-model="state.queryParams.controllerName" placeholder="模块名称" clearable />
						</el-form-item>
					</el-col>
					<el-col class="mb5" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
						<el-form-item label="方法名称">
							<el-input v-model="state.queryParams.actionName" placeholder="方法名称" clearable />
						</el-form-item>
					</el-col>
					<el-col class="mb5" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
						<el-form-item label="账号名称">
							<el-input v-model="state.queryParams.account" placeholder="账号名称" clearable />
						</el-form-item>
					</el-col>
					<el-col class="mb5" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
						<el-form-item label="状态">
							<el-select v-model="state.queryParams.status" placeholder="状态" clearable>
								<el-option label="成功" :value="200" />
								<el-option label="失败" :value="400" />
							</el-select>
						</el-form-item>
					</el-col>
					<el-col class="mb5" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
						<el-form-item label="耗时">
							<el-input v-model="state.queryParams.elapsed" placeholder="耗时>?MS" clearable />
						</el-form-item>
					</el-col>
					<el-col class="mb5" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
						<el-form-item label="IP地址">
							<el-input v-model="state.queryParams.remoteIp" placeholder="IP地址" clearable />
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>

			<el-divider style="height: calc(100% - 5px); margin: 0 10px" direction="vertical" />

			<el-row>
				<el-col>
					<el-button-group>
						<el-button type="primary" icon="ele-Search" @click="handleQuery(true)" v-auth="'sysLogEx/page'" :loading="options.loading"> 查询 </el-button>
						<el-button icon="ele-Refresh" @click="resetQuery" :loading="options.loading"> 重置 </el-button>
					</el-button-group>
				</el-col>
			</el-row>
		</el-card>

		<el-card class="full-table" shadow="hover" style="margin-top: 5px">
			<vxe-grid ref="xGrid" class="xGrid-style" v-bind="options" v-on="gridEvents" @cell-dblclick="handleView">
				<template #toolbar_buttons>
					<el-button icon="ele-FolderOpened" type="primary" @click="exportLog" v-auth="'sysLogEx/export'"> 导出 </el-button>
					<el-button icon="ele-DeleteFilled" type="danger" @click="handleClear" v-auth="'sysLogEx/clear'"> 清空 </el-button>
				</template>
				<template #toolbar_tools> </template>
				<template #empty>
					<el-empty :image-size="200" />
				</template>
				<template #row_logLevel="{ row }">
					<el-tag v-if="row.logLevel === 1">调试</el-tag>
					<el-tag v-else-if="row.logLevel === 2">消息</el-tag>
					<el-tag v-else-if="row.logLevel === 3">警告</el-tag>
					<el-tag v-else-if="row.logLevel === 4">错误</el-tag>
					<el-tag v-else>其他</el-tag>
				</template>
				<template #row_status="{ row }">
					<el-tag v-if="row.status === '200'" type="success">成功</el-tag>
					<el-tag v-else-if="row.status === '304'" type="warning">成功</el-tag>
					<el-tag v-else type="danger">失败</el-tag>
				</template>
				<template #row_buttons="{ row }">
					<el-button icon="ele-InfoFilled" text type="primary" @click="handleView({ row })">详情</el-button>
				</template>
			</vxe-grid>
		</el-card>

		<el-dialog v-model="state.visible" draggable overflow destroy-on-close>
			<template #header>
				<div style="color: #fff">
					<el-icon size="16" style="margin-right: 3px; display: inline; vertical-align: middle"> <ele-Document /> </el-icon>
					<span> 日志详情 </span>
				</div>
			</template>
			<el-tabs v-model="state.activeTab" type="border-card">
				<el-tab-pane label="日志消息" name="message">
					<el-scrollbar height="calc(100vh - 250px)">
						<pre>{{ state.detail.message }}</pre>
					</el-scrollbar>
				</el-tab-pane>
				<el-tab-pane label="请求参数" name="request" :lazy="true">
					<el-scrollbar height="calc(100vh - 250px)">
						<vue-json-pretty :data="state.detail.requestParam" showLength showIcon showLineNumber showSelectController />
					</el-scrollbar>
				</el-tab-pane>
				<el-tab-pane label="返回内容" name="return" :lazy="true">
					<el-scrollbar height="calc(100vh - 250px)">
						<vue-json-pretty :data="state.detail.returnResult" showLength showIcon showLineNumber showSelectController />
					</el-scrollbar>
				</el-tab-pane>
			</el-tabs>
		</el-dialog>
	</div>
</template>

<script lang="ts" setup name="sysLogEx">
import { onMounted, reactive, ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { useDateTimeShortCust } from '/@/hooks/dateTimeShortCust';
import { VxeGridInstance, VxeGridListeners, VxeGridPropTypes } from 'vxe-table';
import { useVxeTable } from '/@/hooks/useVxeTableOptionsHook';
import { Local } from '/@/utils/storage';
import { downloadByData, getFileName } from '/@/utils/download';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import { StringToObj } from '/@/utils/json-utils';

import { getAPI } from '/@/utils/axios-utils';
import { SysLogExApi } from '/@/api-services/api';
import { SysLogEx, PageLogInput } from '/@/api-services/models';

const xGrid = ref<VxeGridInstance>();
const shortcuts = useDateTimeShortCust();
const state = reactive({
	queryParams: {
		startTime: undefined,
		endTime: undefined,
		status: undefined,
		controllerName: undefined,
		actionName: undefined,
		account: undefined,
		elapsed: undefined,
		remoteIp: undefined,
	},
	localPageParam: {
		pageSize: 50 as number,
		defaultSort: { field: 'id', order: 'desc', descStr: 'desc' },
	},
	visible: false,
	detail: {
		requestParam: undefined,
		returnResult: undefined,
		message: '' as string | null | undefined,
		exception: undefined,
	},
	activeTab: 'message',
});

// 本地存储参数
const localPageParamKey = 'localPageParam:sysExLog';
// 表格参数配置
const options = useVxeTable<SysLogEx>(
	{
		id: 'sysExLog',
		name: '异常日志',
		columns: [
			// { type: 'checkbox', width: 40 },
			{ field: 'seq', type: 'seq', title: '序号', width: 60, fixed: 'left' },
			{ field: 'logDateTime', title: '日志时间', minWidth: 160, showOverflow: 'tooltip' },
			{ field: 'controllerName', title: '模块名称', minWidth: 100, showOverflow: 'tooltip' },
			{ field: 'displayTitle', title: '显示名称', minWidth: 150, showOverflow: 'tooltip' },
			{ field: 'actionName', title: '方法名称', minWidth: 100, showOverflow: 'tooltip' },
			{ field: 'httpMethod', title: '请求方式', minWidth: 90, showOverflow: 'tooltip' },
			{ field: 'requestUrl', title: '请求地址', minWidth: 300, showOverflow: 'tooltip' },
			{ field: 'logLevel', title: '级别', minWidth: 70, showOverflow: 'tooltip', slots: { default: 'row_logLevel' } },
			{ field: 'eventId', title: '事件Id', minWidth: 80, showOverflow: 'tooltip' },
			{ field: 'threadId', title: '线程Id', minWidth: 90, showOverflow: 'tooltip' },
			{ field: 'traceId', title: '请求跟踪Id', minWidth: 150, showOverflow: 'tooltip' },
			{ field: 'account', title: '账号名称', minWidth: 100, showOverflow: 'tooltip' },
			{ field: 'realName', title: '真实姓名', minWidth: 100, showOverflow: 'tooltip' },
			{ field: 'remoteIp', title: 'IP地址', minWidth: 100, showOverflow: 'tooltip' },
			{ field: 'location', title: '登录地点', minWidth: 100, showOverflow: 'tooltip' },
			{ field: 'longitude', title: '经度', minWidth: 100, showOverflow: 'tooltip' },
			{ field: 'latitude', title: '纬度', minWidth: 100, showOverflow: 'tooltip' },
			{ field: 'browser', title: '浏览器', minWidth: 100, showOverflow: 'tooltip' },
			{ field: 'os', title: '操作系统', minWidth: 100, showOverflow: 'tooltip' },
			{ field: 'status', title: '状态', minWidth: 70, showOverflow: 'tooltip', slots: { default: 'row_status' } },
			{ field: 'elapsed', title: '耗时(ms)', minWidth: 100, showOverflow: 'tooltip' },
			{ field: 'buttons', title: '操作', fixed: 'right', width: 100, showOverflow: true, slots: { default: 'row_buttons' } },
		],
	},
	// vxeGrid配置参数(此处可覆写任何参数)，参考vxe-table官方文档
	{
		// 代理配置
		proxyConfig: { autoLoad: true, ajax: { query: ({ page, sort }) => handleQueryApi(page, sort) } },
		// 排序配置
		sortConfig: { defaultSort: Local.get(localPageParamKey)?.defaultSort || state.localPageParam.defaultSort },
		// 分页配置
		pagerConfig: { pageSize: Local.get(localPageParamKey)?.pageSize || state.localPageParam.pageSize },
		// 工具栏配置
		toolbarConfig: { export: true },
	}
);

// 页面初始化
onMounted(() => {
	state.localPageParam = Local.get(localPageParamKey) || state.localPageParam;
});

// 查询api
const handleQueryApi = async (page: VxeGridPropTypes.ProxyAjaxQueryPageParams, sort: VxeGridPropTypes.ProxyAjaxQuerySortCheckedParams) => {
	const params = Object.assign(state.queryParams, { page: page.currentPage, pageSize: page.pageSize, field: sort.field, order: sort.order, descStr: 'desc' }) as PageLogInput;
	return getAPI(SysLogExApi).apiSysLogExPagePost(params);
};

// 查询操作
const handleQuery = async (reset = false) => {
	options.loading = true;
	reset ? await xGrid.value?.commitProxy('reload') : await xGrid.value?.commitProxy('query');
	options.loading = false;
};

// 重置操作
const resetQuery = async () => {
	state.queryParams.startTime = undefined;
	state.queryParams.endTime = undefined;
	state.queryParams.status = undefined;
	state.queryParams.controllerName = undefined;
	state.queryParams.actionName = undefined;
	state.queryParams.account = undefined;
	state.queryParams.elapsed = undefined;
	state.queryParams.remoteIp = undefined;
	await xGrid.value?.commitProxy('reload');
};

// 表格事件
const gridEvents: VxeGridListeners<SysLogEx> = {
	// 只对 pager-config 配置时有效，分页发生改变时会触发该事件
	async pageChange({ pageSize }) {
		state.localPageParam.pageSize = pageSize;
		Local.set(localPageParamKey, state.localPageParam);
	},
	// 当排序条件发生变化时会触发该事件
	async sortChange({ field, order }) {
		state.localPageParam.defaultSort = { field: field, order: order!, descStr: 'desc' };
		Local.set(localPageParamKey, state.localPageParam);
	},
};

// 清空日志
const handleClear = async () => {
	ElMessageBox.confirm(`确定要清空日志?`, '提示', {
		confirmButtonText: '确定',
		cancelButtonText: '取消',
		type: 'warning',
	})
		.then(async () => {
			options.loading = true;
			await getAPI(SysLogExApi).apiSysLogExClearPost();
			options.loading = false;
			ElMessage.success('清空成功');
			await handleQuery();
		})
		.catch(() => {});
};

// 查看详情
const handleView = async ({ row }: any) => {
	const { data } = await getAPI(SysLogExApi).apiSysLogExDetailIdGet(row.id);
	state.activeTab = 'message';
	state.detail.message = data?.result?.message;
	// 如果请求参数是JSON字符串，则尝试转为JSON对象
	state.detail.requestParam = StringToObj(data?.result?.requestParam);
	state.detail.returnResult = StringToObj(data?.result?.returnResult);
	state.visible = true;
};

// 导出日志
const exportLog = async () => {
	options.loading = true;
	var res = await getAPI(SysLogExApi).apiSysLogExExportPost(state.queryParams, { responseType: 'blob' });
	options.loading = false;

	var fileName = getFileName(res.headers);
	downloadByData(res.data as any, fileName);
};
</script>

<style lang="scss" scoped>
pre {
	line-height: 20px;
	white-space: pre-wrap;
	white-space: -moz-pre-wrap;
	white-space: -pre-wrap;
	white-space: -o-pre-wrap;
	word-wrap: break-word;
}
</style>
