<template>
    <div class="more">
        <v-header name="更多"></v-header>
        <router-link to="/edit"
                     class="more-user"
                     v-if="user.name">
            <div class="user-avatar">
                <img :src="user.avatar" />
            </div>
            <div class="user-info">
                <span class="user-name">{{user.name}}</span>
            </div>
            <div class="right-icon">
                <span class="icon-keyboard_arrow_right"></span>
            </div>
        </router-link>
        <router-link to="/signup"
                     class="more-user"
                     v-else>
            <div class="user-avatar">
                <span class="icon-person_add"></span>
            </div>
            <div class="user-info">
                <span class="user-name">登录/注册</span>
                <span class="user-id">登录后可激活更多功能</span>
            </div>
            <div class="right-icon">
                <span class="icon-keyboard_arrow_right"></span>
            </div>
        </router-link>
    
        <div class="more-panel">
            <div class="panel-icon">
                <span class="icon-add"></span>
            </div>
            <span class="panel-info">添加新药</span>
            <div class="right-icon">
                <span class="icon-keyboard_arrow_right"></span>
            </div>
        </div>
    
        <div class="more-panels">
            <div class="more-pane">
                <div class="panel-icon">
                    <span class="icon-supervisor_account"></span>
                </div>
                <span class="panel-info">家人</span>
                <div class="right-icon">
                    <span class="icon-keyboard_arrow_right"></span>
                </div>
            </div>
            <div class="border-1px"></div>
            <div class="more-pane">
                <div class="panel-icon">
                    <span class="icon-enhanced_encryption"></span>
                </div>
                <span class="panel-info">买药提醒</span>
                <div class="right-icon">
                    <span class="icon-keyboard_arrow_right"></span>
                </div>
            </div>
        </div>
    
        <div class="more-panel">
            <div class="panel-icon">
                <span class="icon-settings"></span>
            </div>
            <span class="panel-info">设置</span>
            <div class="right-icon">
                <span class="icon-keyboard_arrow_right"></span>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../header/Header';
export default {
    name: 'more',
    data() {
        return {
            user: null
        }
    },
    created() {
        this.user = this.$store.state.user;
        console.log(this.user);
    },
    components: {
        'v-header': Header
    }
}
</script>
<style lang="stylus">
.more
  box-sizing: border-box
  width: 100%
  min-height: 100vh
  background: #f1f1f1
  padding: 50px 10px 50px 10px
  .more-user
    width: 100%
    height: 80px
    background: #fff
    box-shadow: 0 0 5px #d3d3d3
    box-sizing: border-box
    padding: 15px
    display: flex
    align-items: center
    .user-avatar
      width: 50px
      height: 50px
      overflow: hidden
      border-radius: 50%
      margin-right: 15px
      display: flex
      justify-content: center
      align-items: center
      img
        width: 100%
        height: 100%
      span
        display: block
        font-size: 30px
        color: #19CAAD
    .user-info
      display: flex
      flex: 1
      flex-direction: column
      .user-name
        color: #7e8c8d
        font-size: 20px
      .user-id
        color: #999  
        font-size: 12px
        display: block
        margin-top: 5px
    .right-icon
      height 30px
      font-size: 30px    
      color: #999
  .more-panel
    margin-top: 15px
    padding: 15px 20px
    box-sizing: border-box
    background: #fff  
    box-shadow: 0 0 3px #d3d3d3  
    font-size: 14px
    color: #333
    display: flex
    .panel-icon
      color: #19CAAD
      margin-right: 10px
    .panel-info
      flex: 1 
    .right-icon
      color: #999
  .more-panels
    margin-top: 15px
    padding: 0 20px
    box-sizing: border-box
    background: #fff    
    display: flex
    flex-direction: column
    box-shadow: 0 0 3px #d3d3d3
    .border-1px
      position: relative
      height: 1px
      &::after
        display: block
        content: ' '
        position: absolute
        left: 0
        bottom: 0
        width: 100%
        border-top: 1px solid #eee
    .more-pane
      display: flex
      padding: 15px 0
      font-size: 14px
      .panel-icon
        color: #19CAAD
        margin-right: 10px
      .panel-info
        flex: 1  
      .right-icon
        color: #999  
</style>