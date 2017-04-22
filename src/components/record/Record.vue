<template>
    <div class="record">
        <v-header name="服药记录"></v-header>
        <div class="record-item"
             v-for="(med, index) in medicine">
            <div class="record-check">
                <input type="checkbox" :checked="med.completed" />
            </div>
            <div class="record-time">{{med.time}}</div>
            <div class="record-name">{{med.name}}</div>
            <div class="right-icon">
                <span class="icon-keyboard_arrow_right"></span>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../header/Header';
export default {
    name: 'remord',
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
        });
    },
    components: {
        'v-header': Header
    }
}
</script>
<style lang="stylus">
.record
  width: 100%
  min-height: 100vh
  box-sizing: border-box
  background: #f1f1f1
  padding: 50px 10px 50px 10px
  .record-item
    background: #fff
    margin-bottom: 10px
    box-shadow: 0 0 3px #d3d3d3
    display: flex
    align-items: center
    padding: 15px 20px
    .record-time
      margin-left: 15px
      color: #999
      font-size: 14px
    .record-name
      margin-left: 15px
      flex: 1
    .right-icon
      height 20px
      font-size: 20px    
      color: #999    
</style>