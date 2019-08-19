<template>
  <div class="test">
    <h1>获取多层循环的总行数</h1>
    <table border="1" width="100%" align="center">
      <tr>
        <td>父循环第几次</td>
        <td>子循环第几次</td>
        <td>第一种办法</td>
        <td>第二种办法</td>
        <td>json字符串中的行数</td>
        <td>数值</td>
      </tr>
      <tbody v-for="(parent,index) in parentList" :key="index">
        <tr v-for="(child,cindex) in parent.childList" :key="child.index">
          <td>{{index}}</td>
          <td>{{cindex}}</td>
          <td olor="red">
            <font size="3" color="red">{{index*(parent.childList.length)+1+cindex}}</font>
          </td>
          <td>
            <font size="3" color="red">{{getIndex()}}</font>
          </td>
          <td>{{child.index}}</td>
          <td>{{child.childName}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'tset',
  data: () => {
    return {
      parentList: [
        {
          text: '第一',
          childList: [
            {
              index: 1,
              childName: '第一个节点'
            },
            {
              index: 2,
              childName: '第二个节点'
            },
            {
              index: 3,
              childName: '第三个节点'
            },
            {
              index: 4,
              childName: '第四个节点'
            },
            {
              index: 5,
              childName: '第五个节点'
            }
          ]
        },
        {
          text: '第二',
          childList: [
            {
              index: 6,
              childName: '第六个节点'
            },
            {
              index: 7,
              childName: '第七个节点'
            },
            {
              index: 8,
              childName: '第八个节点'
            },
            {
              index: 9,
              childName: '第九个节点'
            },
            {
              index: 10,
              childName: '第十个节点'
            }
          ]
        },
        {
          text: '第三',
          childList: [
            {
              index: 11,
              childName: '第十一个节点'
            },
            {
              index: 12,
              childName: '第十二个节点'
            },
            {
              index: 13,
              childName: '第十三个节点'
            },
            {
              index: 14,
              childName: '第十四个节点'
            },
            {
              index: 15,
              childName: '第十五个节点'
            }
          ]
        }
      ]
    }
  },
  methods: {
    getIndex() {
      if (!this.index) {
        this.index = 1
      } else {
        this.index++
      }
      return this.index
    }
  }
}
</script>

