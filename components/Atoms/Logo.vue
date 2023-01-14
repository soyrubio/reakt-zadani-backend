<template>
    <component :is="computedTag" class="logo" :style="cssVars">
        <div class="relative flex items-center lg:items-auto">
            Hodinky
        </div>

    </component>
</template>

<script>
    const nuxtLinkDefine = defineNuxtLink({});

    export default {
        props: {
            tag: {
                type: String,
                default: 'NuxtLink'
            },
            width: {
                type: String,
                default: '127'
            },
            height: {
                type: String,
                default: '28'
            },
            color: {
                type: String,
                default: '#0F0A0A'
            }
        },
        computed: {
            cssVars() {
                return {
                    "--primaryColor": this.color,
                };
            },
            computedTag() {
                if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
                    return 'button'
                }
                if (this.tag === 'NuxtLink' || this.tag === 'nuxt-link') {
                    return nuxtLinkDefine
                }
                return this.tag
            },
        }
    }
</script>

<style scoped lang="scss">
    .logo>div {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -1px;
        color: #272937;
    }
</style>