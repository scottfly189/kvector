<template>
	<div class="sendMessage-container">
		<el-dialog v-model="state.isShowDialog" draggable :close-on-click-modal="false" width="900px">
			<template #header>
				<div style="color: #fff">
					<el-icon size="16" style="margin-right: 3px; display: inline; vertical-align: middle"> <ele-Edit /> </el-icon>
					<span> {{ props.title }} </span>
				</div>
			</template>
			<el-form :model="state.ruleForm" ref="ruleFormRef" label-width="auto">
				<el-row :gutter="10">
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item :label="$t('message.list.recipient')" prop="receiveUserName" :rules="[{ required: true, message: $t('message.list.recipientRequired'), trigger: 'blur' }]">
							<el-input v-model="state.ruleForm.receiveUserName" :placeholder="$t('message.list.recipient')" disabled />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
						<el-form-item :label="$t('message.list.title')" prop="title" :rules="[{ required: true, message: $t('message.list.titleRequired'), trigger: 'blur' }]">
							<el-input v-model="state.ruleForm.title" :placeholder="$t('message.list.title')" clearable />
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
						<el-form-item :label="$t('message.list.content')" prop="message" :rules="[{ required: true, message: $t('message.list.contentRequired'), trigger: 'blur' }]">
							<Editor v-model:get-html="state.ruleForm.message" />
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button type="primary" icon="ele-Position" @click="submit"> {{ $t('message.list.send') }} </el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang="ts" setup name="sendMessage">
import { reactive, ref } from 'vue';
import { useUserInfo } from '/@/stores/userInfo';
import { storeToRefs } from 'pinia';
import Editor from '/@/components/editor/index.vue';

import { signalR } from '../signalR';

const stores = useUserInfo();
const { userInfos } = storeToRefs(stores);
const props = defineProps({
	title: String,
});
// const emits = defineEmits(['handleQuery']);
const ruleFormRef = ref();
const state = reactive({
	isShowDialog: false,
	ruleForm: {} as any,
});

// 打开弹窗
const openDialog = (row: any) => {
	ruleFormRef.value?.resetFields();

	var receiveUser = JSON.parse(JSON.stringify(row));
	state.ruleForm.receiveUserId = receiveUser.userId;
	state.ruleForm.receiveUserName = receiveUser.realName + '/' + receiveUser.userName;
	state.ruleForm.connectionId = receiveUser.connectionId;

	state.ruleForm.sendUserId = userInfos.value.id;
	state.isShowDialog = true;
};

// 发送
const submit = () => {
	ruleFormRef.value.validate(async (valid: boolean) => {
		if (!valid) return;

		// 发送消息给某人
		signalR.send('ClientsSendMessage', state.ruleForm);
	});
};

// 导出对象
defineExpose({ openDialog });
</script>
