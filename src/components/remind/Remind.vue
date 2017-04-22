<template>
    <div class="remind">
        <div class="remind-header">
            <div class="remind-head-edit">编辑</div>
            <div class="remind-head-info">服药提醒</div>
            <div class="remind-head-add"><span class="icon-alarm_on"></span></div>
        </div>
        <div class="remind-title">明天</div>
        <div class="remind-item"
             v-for="(med, index) in medicine">
            <div class="item-header">
                <span class="item-time">{{med.time}}</span>
                <span class="item-type">{{med.type}}</span>
            </div>
            <div class="item-main">
                <div class="item-img"><img :src="med.img" /></div>
                <div class="item-name">{{med.name}}</div>
                <div class="item-num">x {{med.num}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'remind',
    data() {
        return {
            medicine: []
        }
    },
    created() {
        this.$http.get('/api/medicine').then((response) => {
            response = response.data;
            if (response.errno === 0) {
                this.medicine = response.medicine;
            }
        })
    }
}
</script>
<style lang="stylus">
.remind
  box-sizing: border-box
  width: 100%
  min-height: 100vh
  background: #f1f1f1
  padding: 50px 10px 50px 10px
  .remind-header
    box-sizing: border-box
    width: 100%
    height: 40px
    position: fixed
    left: 0
    top: 0
    background: #fff
    font-size: 16px
    font-weight: 500
    color: #19CAAD
    padding: 10px 10px
    border-bottom: solid 1px #eee
    display: flex
    justify-content: space-between
    .remind-head-info
      color: #F4606C
    .remind-head-edit
      width: 35px
      text-align: center
    .remind-head-add
      width: 35px
      text-align: center
      font-size: 20px  
  .remind-title
    background:-webkit-gradient(linear, 0 0, 0 bottom, from(#19CAAD), to(#A0EEE1));
    height: 40px
    border-radius: 2px
    font-size: 20px
    color: #fff
    font-weight: 100
    box-sizing: border-box
    padding: 10px 20px
    position: relative
    margin-bottom: 6px
    &::after
      display: block
      content: ' '
      position: absolute
      bottom: -5px
      left: 20px
      border-top: 5px solid #A0EEE1
      border-left: 5px solid transparent
      border-right: 5px solid transparent
  .remind-item
    box-sizing: border-box
    background: #fff
    margin-bottom: 10px
    box-shadow: 0 0 3px #d3d3d3
    padding: 0 15px
    .item-header
      display: flex
      padding: 15px 0
      font-size: 14px
      justify-content: space-between
      color: #999
      border-bottom: solid 1px #eee
    .item-main
      padding: 15px 0
      display: flex
      align-items: center
      .item-img
        height: 50px
        width: 50px
        overflow: hidden
        border-radius: 50%
        margin-right: 20px
        img
          width: 100%
          height: 100%
      .item-name
        flex: 1
        color: #666
      .item-num
        color: #19CAAD
        font-size: 20px                
</style>