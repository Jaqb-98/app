<template>
	<transition appear name="fade-transition">
		<div class="overlay" data-testid="raw-modal">
			<div class="modal-enter" @click.self="overlayClick">
				<div class="modal" :class="{ shake }">
					<div class="header space-between">
						<slot name="header" />
						<a @click="close" class="clickable">x</a>
					</div>
					<div class="flex-grow pa-3">
						<slot name="content" />
					</div>
					<div class="center-y">
						<Button color="primary" @click="close">
							{{ "Exit" }}
						</Button>
						<slot name="actions" :close="close" />
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>




<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	data() {
		return {
			shake: false,
			shakeTimeout: null,
			isLeaving: false,
			isCancelled: false,
		}
	},
	methods: {
		overlayClick() {
			this.shake = true
			clearTimeout(this.shakeTimeout)
			this.shakeTimeout = setTimeout(() => {
				this.shake = false
			}, 150)
		},
		close() {
			this.$emit('close')
		},
	},

})
</script>

<style lang="scss" scoped>
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.15);
	align-items: center;
	display: flex;
	justify-content: center;
	z-index: 11;
	font-weight: initial;
}

.modal-enter {
	animation: modal 0.15s;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.modal {
	background-color: #fff;
	display: flex;
	flex-direction: column;
	max-height: 80%;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

	.header {
		font-weight: 600;
		padding: 10px 13px;
	}

	&:not(.mobile) {
		margin: 13px;
		border-radius: 10px;
		overflow: hidden;
	}

	&.mobile {
		max-height: 100%;
		height: 100%;
		width: 100%;
	}

	&.shake {
		animation-duration: 0.15s;
		animation-name: shake;
		animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
	}
	&.leave {
		transition: 0.12s;
		transform: translateY(20px);
	}
}

@keyframes modal {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes shake {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.03);
	}
	100% {
		transform: scale(1);
	}
}
</style>
