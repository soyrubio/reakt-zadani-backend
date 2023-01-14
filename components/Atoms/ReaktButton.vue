<template>
    <component class="inline-flex items-center reakt-button" :is="computedTag" v-bind="$attrs" :type="computedTag === 'button' ? nativeType : undefined" :class="[type, size, {'is-link-size':linkOnly}, {'rounded-full':rounded},  {'is-outlined':outlined}, {'has-icon' : iconLeft || iconRight}, {'w-full justify-center':expanded}, {'w-full':expandedLeft}]">
        <slot />
    </component>
</template>

<script>
    const nuxtLinkDefine = defineNuxtLink({});
    const defaultLinkTags = [
        'a',
        'button',
        'input',
        'router-link',
        'nuxt-link',
        'n-link',
        'RouterLink',
        'NuxtLink',
        'NLink'
    ]
    export default {
        props:{
            type:{
                type: String,
                default: 'is-primary'
            },
            rounded:{
                type: Boolean,
                default: false
            },
            outlined: {
                type: Boolean,
                default: false
            },
            iconLeft:{
                type: String,
                required: false
            },
            iconRight:{
                type: String,
                required: false
            },
            iconAnimation: {
                type: String,
                required: false
            },
            expanded: {
                type: Boolean,
                default: false
            },
            expandedLeft:{
                type: Boolean,
                default: false
            },
            nativeType: {
                type: String,
                default: 'button',
                validator: (value) => {
                    return [
                        'button',
                        'submit',
                        'reset'
                    ].indexOf(value) >= 0
                }
            },
            size:{
                type: String,
                default:'is-medium'
            },
            linkOnly:{
                type: Boolean,
                default: false,
             
            },
            tag: {
                type: String,
                default: 'button',
                validator: (value) => {
                    return defaultLinkTags.indexOf(value) >= 0
                }
            }
        },
        computed: {
            computedTag() {
                if (this.$attrs.disabled !== undefined && this.$attrs.disabled !== false) {
                    return 'button'
                }
                if (this.tag === 'NuxtLink' || this.tag === 'nuxt-link' || this.$attrs.to !== undefined) {
                    return nuxtLinkDefine
                }
                return this.tag
            },
        }
    }
</script>

<style>
</style>