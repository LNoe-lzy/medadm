<template>
    <div class="footer">
        <router-link to="/remind" class="footer-item">
            <div class="footer-icon">
                <span class="icon-schedule"></span>
            </div>
            <span class="footer-info">服药提醒</span>
        </router-link>
        <router-link to="/record" class="footer-item">
            <div class="footer-icon">
                <span class="icon-filter_frames"></span>
            </div>
            <span class="footer-info">服药记录</span>
        </router-link>
        <router-link to="/more" class="footer-item">
            <div class="footer-icon">
                <span class="icon-more_horiz"></span>
            </div>
            <span class="footer-info">更多</span>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'footer'
}
</script>
<style lang="stylus">
.footer
  height: 50px
  width: 100%
  position: fixed
  bottom: 0
  left: 0
  right: 0
  display: flex
  align-items: center
  justify-content: space-around
  border-top: 1px solid #d3d3d3
  background: #fff
  .router-link-active
    color: #19CAAD
  .footer-item
    height: 60px
    width: 60px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    .footer-icon
      width 20px
      height: 20px
      font-size: 20px
      display: flex
    .footer-info
      font-size: 10px
      display: block
      margin-top: 5px
</style>