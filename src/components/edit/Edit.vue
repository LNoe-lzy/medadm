<template>
    <div class="edit">
        <div class="edit-header">
            <router-link to="/more"
                         class="edit-header-back">更多</router-link>
            <div class="edit-header-info">个人信息</div>
            <div class="edit-header-noop"></div>
        </div>
        <div class="edit-main">
            <div class="edit-user">
                <div class="edit-type">头像</div>
                <div class="edit-avatar">
                    <img :src="user.avatar" />
                </div>
            </div>
            <div class="edit-panels">
                <div class="edit-pane">
                    <span class="panel-type">名字</span>
                    <div class="panel-info">
                        {{user.name}}
                    </div>
                </div>
                <div class="border-1px"></div>
                <div class="edit-pane">
                    <span class="panel-type">健康号</span>
                    <div class="panel-info">
                        {{user.id}}
                    </div>
                </div>
            </div>
    
            <div class="logout"
                 @click="logout">退出登录</div>
        </div>
    
    </div>
</template>
<script>
export default {
    name: 'more',
    data() {
        return {
            user: null
        }
    },
    created() {
        this.user = this.$store.state.user;
    },
    methods: {
        logout() {
            this.user = null;
            this.$store.dispatch('logout');
            this.$router.push('/more');
        }
    }
}
</script>
<style lang="stylus">
.edit
  width: 100%
  min-height: 100vh
  background: #f1f1f1
  .edit-header
    width: 100%
    height: 40px
    background: #fff
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 15px
    box-sizing: border-box
   .edit-header-noop
     width: 32px
   .edit-header-back
     width: 32px   
   .edit-header-info
     color: #F4606C
  .edit-main
    width: 100%
    padding: 10px
    display: flex
    flex-direction: column
    box-sizing: border-box
    .logout
      width: 100%
      text-align: center
      margin-top: 100px
      background: -webkit-gradient(linear, 0 0, 0 bottom, from(#19CAAD), to(#A0EEE1));
      height: 40px
      line-height: 40px
      color: #fff
      font-weight: 500
      border-radius: 3px
    .edit-user
      box-sizing: border-box
      display: flex
      justify-content: space-between
      align-items: center
      padding: 15px
      background: #fff
      width: 100%
      box-shadow: 0 0 3px #d3d3d3
      .edit-type
        color: #7e8c8d
        font-size: 18px
      .edit-avatar
        height: 50px
        width: 50px
        overflow: hidden
        border-radius: 50%
        img
          width: 100%
          height: 100%   
    .edit-panels
      width: 100%
      padding: 0 20px
      box-sizing: border-box   
      margin-top: 15px
      background: #fff   
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
      .edit-pane
        display: flex
        justify-content: space-between
        padding: 15px 0
        .panel-type
          color: #7e8c8d
        .panel-info
          font-size: 18px       
</style>