<template>
    <div class="chip-menu" @click="chipMenuClick">
        <div class="chip-menu-row" v-for="(row, i) in chipMenuList" :key="i">
            <div class="chip-menu-item" v-for="item in row" :key="item.id">
                <img :src="getAssetsFile(item.icon)" alt="" :data-id="item.id">
                {{ item.label }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="ChipMenu">
import { computed } from 'vue'
const getAssetsFile = (url: string) => {
    return new URL(url, import.meta.url).href;
}

// import img from '../assets/button/1.png'
interface Iprops {
    list: any;
}

const props = withDefaults(defineProps<Iprops>(), {
    list: () => [],
});
console.log(props.list)
const chipMenuList = computed(() => {
    if(!props.list) return []
    if (Array.isArray(props.list[0])) {
        console.log(1)
        return props.list
    } else {
        let res: any = []
        for (let i = 0; i < props.list.length; i += 4) {
            res.push(props.list.slice(i, i + 4))
        }
        while (res[res.length - 1].length < 4) {
            res[res.length - 1].push({})
        }
        return res
    }
})
const emits = defineEmits<{
  (e: 'chipMenuClick', val: {id: string}): void;
}>();
const chipMenuClick = (val) => {
    emits('chipMenuClick', {id: val.target.dataset.id})
}
</script>

<style lang='scss' scoped>
.chip-menu {
    // padding: 0 12px;
    font-size: #{$fontSize};
    text-align: center;

    .chip-menu-row {
        display: flex;

        &:not(:last-child) {
            margin-bottom: #{$marginBottom};
        }

        .chip-menu-item {
            flex: 1;

            // border-radius: 52px;
            &:not(:last-child) {
                margin-right: #{$marginRight};
            }

            img {
                width: 100%;
                display: block;
            }

        }
    }
}</style>