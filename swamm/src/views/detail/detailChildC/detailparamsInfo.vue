<template>
  <div class="params">
      <table class="rule">
          <tr v-for="items in paramsInfo.rule">
              <td v-for="item in items">{{item}}</td>
          </tr>
      </table>
      <table class="size">
          <tr v-for="items in paramsInfo.info">
              <td v-for="item in items">{{item}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    props:{
        paramsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.params {
    margin-top: 20px;
}
    .rule,.size {
       font-size: 14px;
       color: #666;
    }
    .rule tr td:nth-child(1),.size tr td:nth-child(1){
        width: 70px;
    }
    .rule tr td,.size tr td{
        padding-right: 40px;
        padding-top:10px;
        text-align: center;
    }
    .size tr td~td{
        text-align: left;
        color: deeppink;
    }
</style>