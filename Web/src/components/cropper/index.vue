<template>
	<div>
		<el-dialog v-model="state.isShowDialog" width="769px" :before-close="onCancel">
			<template #header>
				<div style="color: #fff">
					<el-icon size="16" style="margin-right: 3px; display: inline; vertical-align: middle"> <ele-Edit /> </el-icon>
					<span>{{ props.title }}</span>
				</div>
			</template>
			<div class="cropper-warp">
				<div class="cropper-warp-left">
					<img :src="state.cropperImg" class="cropper-warp-left-img" />
				</div>
				<div class="cropper-warp-right">
					<div class="cropper-warp-right-title">预览</div>
					<div class="cropper-warp-right-item">
						<div class="cropper-warp-right-value">
							<img :src="state.cropperImgBase64" class="cropper-warp-right-value-img" />
						</div>
						<div class="cropper-warp-right-label">100 x 100</div>
					</div>
					<div class="cropper-warp-right-item">
						<div class="cropper-warp-right-value">
							<img :src="state.cropperImgBase64" class="cropper-warp-right-value-img cropper-size" />
						</div>
						<div class="cropper-warp-right-label">50 x 50</div>
					</div>
				</div>
			</div>
			<template #footer>
				<span class="dialog-footer">
					<el-upload
						ref="uploadSignRef"
						accept=".jpg,.png"
						:limit="1"
						:show-file-list="false"
						:auto-upload="false"
						:on-change="selectPicture"
						:on-exceed="selectPictureExceed"
						style="display: inline-block; position: absolute; right: 182px"
					>
						<el-button icon="ele-Picture">选择图片</el-button>
					</el-upload>
					<el-button icon="ele-CircleCloseFilled" @click="onCancel">取 消</el-button>
					<el-button type="primary" icon="ele-CircleCheckFilled" @click="onSubmit">确 定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script setup lang="ts" name="cropper">
import { reactive, nextTick, ref } from 'vue';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import { genFileId } from 'element-plus';
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus';

const props = defineProps({
	title: {
		type: String,
		default: () => '',
	},
});
const emits = defineEmits(['uploadCropperImg']);
const uploadSignRef = ref<UploadInstance>();
// 定义变量内容
const state = reactive({
	isShowDialog: false,
	cropperImg: '',
	cropperImgBase64: '',
	cropper: '' as RefType,
});

// 打开弹窗
const openDialog = (imgs: string) => {
	state.cropperImg = imgs;
	state.isShowDialog = true;
	nextTick(() => {
		initCropper();
	});
};
// 关闭弹窗
const closeDialog = () => {
	state.cropper.destroy();
	state.isShowDialog = false;
};
// 取消
const onCancel = () => {
	closeDialog();
};
// 更换/上传
const onSubmit = async () => {
	const img = await getCroppedCanvas();
	emits('uploadCropperImg', { img: img });
	closeDialog();
};
// 初始化cropperjs图片裁剪
const initCropper = () => {
	const letImg = <HTMLImageElement>document.querySelector('.cropper-warp-left-img');
	if (letImg) {
		letImg.setAttribute('crossOrigin', 'anonymous');
	}
	state.cropper = new Cropper(letImg, {
		viewMode: 1,
		dragMode: 'none',
		initialAspectRatio: 1,
		aspectRatio: 1,
		preview: '.before',
		background: true,
		autoCropArea: 1,
		// zoomOnWheel: false,
		checkCrossOrigin: false,
		crop: () => {
			state.cropperImgBase64 = state.cropper.getCroppedCanvas()!.toDataURL('image/jpeg');
		},
	});
};

// 获取裁切后的图片 (包装为Promise)
const getCroppedCanvas = () => {
	return new Promise((resolve) => {
		state.cropper.getCroppedCanvas().toBlob((blob: any) => {
			resolve(blob);
		});
	});
};

// 选择图片
const selectPicture = async (file: any) => {
	let URL = window.URL || window.webkitURL;
	state.cropperImg = URL.createObjectURL(file.raw);
	state.cropper.replace(state.cropperImg);
};

// 选择图片超出数量限制时执行
const selectPictureExceed: UploadProps['onExceed'] = (files) => {
	uploadSignRef.value!.clearFiles();
	const file = files[0] as UploadRawFile;
	file.uid = genFileId();
	uploadSignRef.value!.handleStart(file);
};

// 暴露变量
defineExpose({
	openDialog,
});
</script>

<style scoped lang="scss">
.cropper-warp {
	display: flex;
	.cropper-warp-left {
		position: relative;
		display: inline-block;
		height: 350px;
		flex: 1;
		border: 1px solid var(--el-border-color);
		background: var(--el-color-white);
		overflow: hidden;
		background-repeat: no-repeat;
		cursor: move;
		border-radius: var(--el-border-radius-base);
		.cropper-warp-left-img {
			width: 100%;
			height: 100%;
		}
	}
	.cropper-warp-right {
		width: 150px;
		height: 350px;
		.cropper-warp-right-title {
			text-align: center;
			height: 20px;
			line-height: 20px;
		}
		.cropper-warp-right-item {
			margin: 15px 0;
			.cropper-warp-right-value {
				display: flex;
				.cropper-warp-right-value-img {
					width: 100px;
					height: 100px;
					border-radius: var(--el-border-radius-circle);
					margin: auto;
				}
				.cropper-size {
					width: 50px;
					height: 50px;
				}
			}
			.cropper-warp-right-label {
				text-align: center;
				font-size: 12px;
				color: var(--el-text-color-primary);
				height: 30px;
				line-height: 30px;
			}
		}
	}
}
</style>
