<template>
	<div class="content_model">
		<div class="content">
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
		flex: 1;
		height: auto;
		margin: $content_margin;

	}

	.view_h5 {
		padding: 1rem;
		padding-top: 0;
		width: 350px;
		height: 550px;
		margin: $content_margin $content_margin 20px 0;

		.title {
			text-align: left;
			padding: 1rem 0;
			font-size: 16px;
			font-weight: bold;
		}
	}
}
</style>