<template>
	<div class="detail-data-list">
		<template v-if="list && list.length">
			<div v-for="(item, i) in list" :key="i" class="flex flex-tow detail-data" :class="{ symmetric_bar: symmetric }">
				<div v-if="item" class="flex" :class="{ symmetric }">
					<div class="title" :class="{ auto: auto }">{{ item.title }}</div>
					<div class="val" :style="{ color: item.color }">
						<img v-if="item.img" :src="item.img" />
						<div :class="{ imgMsg: item.img }">{{ item.val }}</div>
					</div>
				</div>
				<div v-if="item && item.copy" v-clipboard="item.val" class="copy">复制</div>
				<div class="slot">
					<slot v-if="item.slot" :name="item.slot" :item="item"></slot>
				</div>
			</div>
		</template>
		<template v-else>
			<div class="empty">
				<!-- <img src="@/assets/img/common/empty.png" alt="" /> -->
				<div>{{ emptyMsg }}</div>
			</div>
		</template>
	</div>
</template>
  
<script lang="ts" setup name="DetailDataList">
interface Iprops {
	list: Array<{
		title: string;
		val: string | number;
		copy?: boolean;
		color?: string;
		img?: string;
		slot?: string;
		other?: any;
	}> | null;
	auto?: Boolean;
	symmetric?: Boolean;
	emptyMsg?: string;
}

const props = withDefaults(defineProps<Iprops>(), {
	list: () => null,
	auto: () => false,
	symmetric: () => false,
	emptyMsg: '暂无相关记录',
});
console.log(props);
</script>
  
<style lang="scss" scoped>
.flex {
	display: flex;
}

.flex-tow {
	justify-content: space-between;
	align-items: center;
}

.symmetric_bar {
	display: block;
}

.detail-data-list {
	font-size: #{$fontSize};
	line-height: #{$lineHeight};

	.symmetric {
		justify-content: space-between;
		display: flex;
		width: 100%;
	}

	.empty {
		font-size: fontSize;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		text-align: center;

		img {
			width: 8rem;
			height: 8rem;
			margin-bottom: 0.6rem;
			margin-top: 1.3rem;
		}
	}
}

.title {
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #666666;
	width: 3.3rem;
}

.auto {
	width: auto;
}

.detail-data:not(:first-child) {
	// margin-top: 16px;
}

.val {
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #333333;
	// margin-left: 18px;
	position: relative;

	img {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		position: absolute;
		top: calc(50% - 30px);
	}

	.imgMsg {
		margin-left: 66px;
	}
}

.copy {
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #4682e2;
}</style>