<template>
	<div class="sys-codeGenFk-container">
		<el-dialog v-model="state.isShowDialog" draggable :close-on-click-modal="false" width="700px">
			<template #header>
				<div style="color: #fff">
					<el-icon size="16" style="margin-right: 3px; display: inline; vertical-align: middle"> <ele-Edit /> </el-icon>
					<span> 外键配置 </span>
				</div>
			</template>
			<el-form :model="state.ruleForm" ref="ruleFormRef" label-width="auto">
				<el-row :gutter="10">
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="库定位器" prop="configId">
							<el-select clearable v-model="state.ruleForm.configId" placeholder="库名" filterable @change="DbChanged()" class="w100">
								<el-option v-for="item in state.dbData" :key="item.configId" :label="item.configId" :value="item.configId" />
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="数据库表" prop="tableName">
							<el-select v-model="state.ruleForm.tableName" filterable clearable @change="TableChanged()" class="w100">
								<el-option v-for="item in state.tableData" :key="item.entityName" :label="item.entityName + ' ( ' + item.tableName + ' )[' + item.tableComment + ']'" :value="item.tableName" />
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="显示字段" prop="columnName">
							<el-select v-model="state.ruleForm.columnName" filterable class="w100">
								<el-option v-for="item in state.columnData" :key="item.columnName" :label="item.columnName + ' [' + item.columnComment + ']'" :value="item.columnName" />
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="链接字段" prop="linkColumnName">
							<el-select v-model="state.ruleForm.linkColumnName" filterable class="w100">
								<el-option v-for="item in state.columnData" :key="item.columnName" :label="item.columnName + ' [' + item.columnComment + ']'" :value="item.columnName" />
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button icon="ele-CircleCloseFilled" @click="cancel">取 消</el-button>
					<el-button type="primary" icon="ele-CircleCheckFilled" @click="submit">确 定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang="ts" setup name="sysCodeGenFk">
import { onMounted, reactive, ref } from 'vue';

import { getAPI } from '/@/utils/axios-utils';
import { SysCodeGenApi } from '/@/api-services/api';

var rowdata = {} as any;
const emits = defineEmits(['submitRefreshFk']);
const ruleFormRef = ref();
const state = reactive({
	isShowDialog: false,
	ruleForm: {} as any,
	dbData: [] as any,
	tableData: [] as any,
	columnData: [] as any,
});

onMounted(async () => {
	await getDbList();

	// 默认使用第一个库
	//state.ruleForm.configId = state.dbData[0].configId;
	//await DbChanged();
});

const DbChanged = async () => {
	state.tableData = [];
	state.columnData = [];
	await getTableInfoList();
};

const TableChanged = async () => {
	state.columnData = [];
	await getColumnInfoList();
};

const getDbList = async () => {
	var res = await getAPI(SysCodeGenApi).apiSysCodeGenDatabaseListGet();
	state.dbData = res.data.result;
};

const getTableInfoList = async () => {
	if (state.ruleForm.configId == '') return;
	var res = await getAPI(SysCodeGenApi).apiSysCodeGenTableListConfigIdGet(state.ruleForm.configId);
	state.tableData = res.data.result;
};

const getColumnInfoList = async () => {
	if (state.ruleForm.configId == '' || state.ruleForm.tableName == '') return;
	console.log(state.ruleForm.configId, state.ruleForm.tableName);
	var res = await getAPI(SysCodeGenApi).apiSysCodeGenColumnListByTableNameTableNameConfigIdGet(state.ruleForm.tableName, state.ruleForm.configId);
	state.columnData = res.data.result;
};

// 打开弹窗
const openDialog = async (row: any) => {
	rowdata = row;
	if (rowdata.fkConfigId) {
		await getDbList();
		state.ruleForm.tableName = rowdata.fkTableName;
		state.ruleForm.columnName = rowdata.fkColumnName;
		state.ruleForm.linkColumnName = rowdata.fkLinkColumnName;
		state.ruleForm.configId = rowdata.fkConfigId;
		await DbChanged();
		await TableChanged();
	}
	state.isShowDialog = true;
};

// 关闭弹窗
const closeDialog = () => {
	rowdata.fkTableName = state.ruleForm.tableName;
	let tableData = state.tableData.filter((x: any) => x.tableName == state.ruleForm.tableName);
	rowdata.fkEntityName = tableData.length == 0 ? '' : tableData[0].entityName;
	rowdata.fkColumnName = state.ruleForm.columnName;
	rowdata.fkLinkColumnName = state.ruleForm.linkColumnName;
	rowdata.fkConfigId = state.ruleForm.configId;
	let columnData = state.columnData.filter((x: any) => x.columnName == state.ruleForm.columnName);
	rowdata.fkColumnNetType = columnData.length == 0 ? '' : columnData[0].netType;
	emits('submitRefreshFk', rowdata);
	cancel();
};

// 取消
const cancel = () => {
	state.isShowDialog = false;
	ruleFormRef.value?.resetFields();
	state.ruleForm = {};
	state.dbData.value = [];
	state.tableData.value = [];
	state.columnData.value = [];
};

// 提交
const submit = () => {
	ruleFormRef.value.validate(async (valid: boolean) => {
		if (!valid) return;
		closeDialog();
	});
};

// 导出对象
defineExpose({ openDialog });
</script>
