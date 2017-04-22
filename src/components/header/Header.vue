<template>
    <div class="header">
        <div class="header-info">{{name}}</div>
    </div>
</template>
<script>
export default {
    name: 'header',
    props: {
        name: {
            type: String
        }
    }
}
</script>
<style lang="stylus">
.header
  box-sizing: border-box
  width: 100%
  height: 40px
  position: fixed
  left: 0
  top: 0
  background: #fff
  font-size: 16px
  font-weight: 500
  color: #F4606C
  text-align: center 
  line-height: 20px
  padding: 10px 0
  border-bottom: solid 1px #eee
</style>