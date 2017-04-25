<template>
    <div class="signup">
        <div class="signup-header">
            <div class="signup-header-info">
                <h1>早上好</h1>
                <p>请先注册吧</p>
            </div>
            <router-link to="/more"
                         class="signup-header-close">
                <span class="icon-close"></span>
            </router-link>
        </div>
        <div class="signup-main">
            <div class="errmsg">{{errmsg}}</div>
            <div class="signup-form">
                <form>
                    <input type="text"
                           placeholder="用户名"
                           v-model="name" />
                    <input type="text"
                           placeholder="手机号"
                           v-model="tel" />
                    <input type="password"
                           placeholder="密码"
                           v-model="pwd" />
                    <button @click="signin">注册</button>
                </form>
            </div>
            <div class="signup-bottom">
                <router-link to="/signup"
                             class="to-signin">已有账号,请登录</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'signin',
    data() {
        return {
            name: '',
            tel: '',
            pwd: '',
            errmsg: ''
        }
    },
    methods: {
        signin() {
            this.$http.post('/api/signin', {
                name: this.name,
                pwd: this.pwd,
                tel: this.tel
            }).then((response) => {
                response = response.body;
                if (response.errno === 0) {
                    this.$store.state.user = response.user;
                    this.$router.push('/more');
                } else if (response.errno === 1) {
                    this.errmsg = response.errmsg
                }
            })
        }
    }
}
</script>
<style lang="stylus">
.signup
  width: 100%
  height: 100vh
  .signup-header
    box-sizing: border-box
    height: 40vh
    width: 100%
    background: -webkit-gradient(linear, 0 0, 0 bottom, from(#19CAAD), to(#A0EEE1));
    padding: 15px
    display: flex
    justify-content: space-between
    color: #fff
    .signup-header-close
      font-size: 20px
      color: #fff
    .signup-header-info
      align-self: flex-end
      h1
        font-size: 25px
        font-weight: 100
        margin-bottom: 10px
      p
        font-size: 18px
        font-weight: 100
  .signup-main
    box-sizing: border-box
    padding: 0 15px
    .errmsg
      margin-top: 10px
      color: #F4606C
      text-align: center
    .signup-form
      margin-top: 10px
      form
        display: flex
        flex-direction: column
        input 
          border: solid 1px #d3d3d3
          outline: none
          height: 40px
          box-sizing: border-box
          padding-left: 20px
          border-radius: 5px
          margin-bottom: 15px
        button
          height: 40px
          background: -webkit-gradient(linear, 0 0, 0 bottom, from(#19CAAD), to(#A0EEE1));
          outline: none
          border: none
          border-radius: 5px
          color: #fff
          font-size: 16px
          font-weight: 100
    .signup-bottom
      margin-top: 15px
      display: flex
      justify-content: space-between
      align-items: center
      .forget
        color: #19CAAD      
        font-size: 14px
      .to-signin
        color: #19CAAD
        border: solid 1px #19CAAD
        border-radius: 3px
        padding: 5px
        font-size: 14px         
</style>