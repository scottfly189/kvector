<template>
	<div class="sys-dictData-container">
		<el-dialog v-model="state.visible" draggable :close-on-click-modal="false" width="700px">
			<template #header>
				<div style="color: #fff">
					<el-icon size="16" style="margin-right: 3px; display: inline; vertical-align: middle"> <ele-Edit /> </el-icon>
					<span> {{ props.title }} </span>
				</div>
			</template>
			<el-form :model="state.ruleForm" ref="formRef" label-width="auto">
				<el-row :gutter="10">
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="显示文本" prop="label" :rules="[{ required: true, message: '显示文本不能为空', trigger: 'blur' }]">
							<el-input v-model="state.ruleForm.label" placeholder="显示文本" clearable />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="字典值" prop="value" :rules="[{ required: true, message: '字典值不能为空', trigger: 'blur' }]">
							<el-input v-model="state.ruleForm.value" placeholder="字典值" clearable />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="编码" prop="code" :rules="[{ required: true, message: '编码不能为空', trigger: 'blur' }]">
							<el-input v-model="state.ruleForm.code" placeholder="编码" clearable />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="标签类型">
							<el-radio-group v-model="state.ruleForm.tagType">
								<el-radio value="primary"><el-tag type="primary">主题色</el-tag></el-radio>
								<el-radio value="success"><el-tag type="success">success</el-tag></el-radio>
								<el-radio value="info"><el-tag type="info">info</el-tag></el-radio>
								<el-radio value="warning"><el-tag type="warning">warning</el-tag></el-radio>
								<el-radio value="danger"><el-tag type="danger">danger</el-tag></el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="样式(Style)" prop="styleSetting">
							<el-input v-model="state.ruleForm.styleSetting" placeholder="样式(Style)" clearable />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="样式(Class)" prop="classSetting">
							<el-input v-model="state.ruleForm.classSetting" placeholder="样式(Class)" clearable />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="状态">
							<el-radio-group v-model="state.ruleForm.status">
								<el-radio :value="1">启用</el-radio>
								<el-radio :value="2">禁用</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item label="排序">
							<el-input-number v-model="state.ruleForm.orderNo" placeholder="排序" class="w100" />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="备注">
							<el-input v-model="state.ruleForm.remark" placeholder="请输入备注内容" clearable type="textarea" />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item label="拓展数据">
							<el-input v-model="state.ruleForm.extData" placeholder="请输入拓展数据" clearable type="textarea" :rows="6" />
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

<script lang="ts" setup name="sysEditDictData">
import { reactive, ref } from 'vue';

import { getAPI } from '/@/utils/axios-utils';
import { SysDictDataApi } from '/@/api-services/api';
import { UpdateDictDataInput } from '/@/api-services/models';

const props = defineProps({
	title: String,
	dictTypeId: Number,
});
const emits = defineEmits(['handleQuery', 'handleUpdate']);
const formRef = ref();
const state = reactive({
	visible: false,
	ruleForm: {} as UpdateDictDataInput,
});

// 打开弹窗
const openDialog = (row: any) => {
	state.ruleForm = JSON.parse(JSON.stringify(row));
	if (JSON.stringify(row) == '{}') {
		state.ruleForm.dictTypeId = props.dictTypeId;
	}
	state.visible = true;
	formRef.value?.resetFields();
};

// 关闭弹窗
const closeDialog = () => {
	emits('handleQuery');
	state.visible = false;
};

// 取消
const cancel = () => {
	state.visible = false;
};

// 提交
const submit = () => {
	formRef.value.validate(async (valid: boolean) => {
		if (!valid) return;
		if (state.ruleForm.id != undefined && state.ruleForm.id > 0) {
			await getAPI(SysDictDataApi).apiSysDictDataUpdatePost(state.ruleForm);
		} else {
			await getAPI(SysDictDataApi).apiSysDictDataAddPost(state.ruleForm);
		}
		emits('handleUpdate');
		closeDialog();
	});
};

// 导出对象
defineExpose({ openDialog });
</script>
