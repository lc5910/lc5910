<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      testResult: ""
    };
  },
  mounted() {},
  methods: {
    ES6_2015() {
      /* Generator 语法 */
      /* function* helloWorldGenerator() {
        yield 'hello';
        yield 'world';
        return 'ending';
      }
      var hw = helloWorldGenerator(); hw.next();  // {value: "hello", done: false} */
    },
    ES7_2016() {
      /* includes 的用法 */
      /* let arr = ['react', 'angular', 'vue'];
      console.log(arr.includes('vue')); // true
      console.log(2**10); // 1024 */
    },
    ES8_2017() {
      /* Object.value 的用法 */
      /* const obj = {a: 1, b: 2, c: 3};
      const values=Object.values(obj);
      console.log(values); // [1, 2, 3] */

      /* Object.entries 的用法 */
      /* const obj = {a: 1, b: 2, c: 3};
      for(let [key,value] of Object.entries(obj)){
          console.log(`key: ${key} value:${value}`)
      } */

      /* async 和 for of */
      /* async function process(array) {
        for await (let i of array) {
          console.log(i);
        }
      }
      process([1,2]); // 1 2 */
    },
    ES9_2018() {},
    ES10_2019() {}
  }
};
</script>
