<template>
    <button
        class="normal"
        :class="type"
        :disabled="disabled"
        @click="onClick($event)"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "ClockAssistButton",
    props: {
        type: String,
        disabled: Boolean
    },
    methods: {
        onClick: function (e) {
            this.$emit('click', e);
        }
    },
}
</script>

<style scoped>

</style>
