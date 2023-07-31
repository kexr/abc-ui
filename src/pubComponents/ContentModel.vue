<template>
	<div class="content_model">
		<div class="content">
			<h1>{{ title }}</h1>
			<div class="card">
				<slot name="content"></slot>
			</div>
		</div>
		<div class="view_h5 card">
			<slot name="content_h5"></slot>
		</div>
	</div>
</template>

<script setup>
let props = defineProps({
	title: {
		type: String,
		default: '',
	},
});
</script>

<style lang='scss' scoped>
$content_margin: 8px;

.content_model {
	// min-height: 100%;
	display: flex;

	.card {
		border-radius: $content_margin;
		background-color: #fff;
		padding: 1rem;
		padding-top: 0;
		text-align: left;
	}

	.content {
		// flex: 1;
		flex: none;
		width: calc(100% - 24rem);
		height: auto;
		margin: $content_margin;
		h1 {
			margin: .8rem 0 1.8rem .4rem;
			text-align: left;
			font-weight: 400;
		}
	}

	.view_h5 {
		overflow-y: scroll;
		padding: 1rem 1rem;
		padding-top: 0;
		width: 20rem;
		height: 34rem;
		margin: $content_margin $content_margin 20px 0;
		flex: none;
		background-color: #fff;

		.title {
			text-align: left;
			padding: 1rem 0;
			font-size: 1rem;
			font-weight: bold;
		}
	}
}
</style>