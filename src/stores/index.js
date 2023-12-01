import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        information:[{username:123456,password:123456}]
    }),
    // 也可以这样定义
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++
        },
    },
})