<template>
	<div class="table">
		<div class="col col-title">
			<div class="row row-title"></div>
			<div v-for="(item, i) in tableColList" class="row">{{ item }}</div>
		</div>
		<div v-for="(item, i) in tableList" :key="i" class="col">
			<div class="row row-title">{{ item.name }}</div>
			<div v-for="(item2, i2) in tableColList" class="row">{{ item[i2] }}</div>
		</div>
	</div>
</template>
  
<script setup>
let props = defineProps({
	tableList: {
		type: Array,
		default: () => [],
	},
	tableColList: {
		type: Object,
		default: () => ({})
	}
});
</script>
  
<style lang="scss" scoped>
.table {
	display: flex;
	font-size: 0.6rem;
	font-weight: 400;
	line-height: 0.1rem;
	border-radius: 12px;
	overflow: hidden;
	width: 100%;

	.col {
		flex: 1;
		.row {
			height: 2rem;
			padding: 0 0.3rem;
			border: 1px solid rgba(224, 224, 224, 50%);
			//   text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.col-title {
		// flex: 1;
		background: #fbfbfb;
	}

	.row.row-title {
		// background: #fff4e5;
		background: #eff5fb;
		// border: 1px solid rgba(255, 168, 0, 50%);
		border: 1px solid #6fa7dcc7;
		font-weight: 500;
		// color: #ff8c00;
		color: #6fa8dc;
	}

	.col:first-child .row:first-child {
		border-radius: 12px 0px 0px 0px;
	}

	.col:first-child .row:last-child {
		border-radius: 0px 0px 0px 12px;
	}

	.col:last-child .row:first-child {
		border-radius: 0px 12px 0px 0px;
	}

	.col:last-child .row:last-child {
		border-radius: 0px 0px 12px 0px;
	}
}
</style>