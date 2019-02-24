<template>
  <div class="greet">
    <image src="http://pn7s54ruh.bkt.clouddn.com/heart-animation.gif" class="head" alt="" />
    <scroll-view
    scroll-y
    class="box"
    >
    <div class="item"
    v-for="(item, index) in userList"
     :key="index">
     <image :src="item.user.avatarUrl" alt="" />
     <p>{{item.user.nickName}}</p>
    </div>
    </scroll-view>
    <p class="count">
      {{userList.length}}位好友送祝福
    </p>
  <div>
    <button class="left" open-type="getUserInfo"
    @getuserinfo="sendGreet"
    >
    送上祝福
    </button>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Greet',
  data () {
    return {
      openID: null,
      userList: []
    }
  },
  onShow() {
    this.getUserList()
  },
  methods: {
    sendGreet (e) {
      if (e.target.errMsg === 'getUserInfo:ok') {
        wx.getUserInfo({
          success: (res) => {
            this.userInfo = res.userInfo
            this.getOpenId()
          }
        })
      }
    },
    getOpenId () {
      wx.cloud.callFunction({
        name: 'user',
        data: {}
      })
      .then(res => {
        this.openID = res.result.openid
        this.getIsExist()
      })
    },
    getIsExist () {
      const db = wx.cloud.database()
      const user = db.collection('user')
      user.where({
        _openid: this.openID
      })
      .get()
      .then(res => {
        if(res.data.length === 0) {
          this.addUser()
        } else {
          // tools.show
        }
      })
    },
    addUser () {
      const db = wx.cloud.database();
      const user = db.collection('user');

      user.add({
        data: {
          user: this.userInfo
        }
      })
      .then(res => {
        this.getUserList()
      })
    },
    getUserList () {
      wx.cloud.callFunction({
        name: 'userList',
        data: {}
      })
      .then(res => {
        // {data: []}
        console.log('get user list', res.result);
        this.userList = res.result.data.reverse()
      })
    }
  }
}
</script>
<style lang="stylus"  scoped>
.greet
    width 100%
    height 100%
    .head
        height 150rpx
        width 200rpx
        margin 0 auto
    .box
        height 700rpx
        width 690rpx
        margin-left 30rpx
        border-radius 16rpx
        box-shadow 0 0 10rpx rgba(0, 0, 0, 0.1)
        display flex
        justify-content flex-start
        align-items flex-start
        flex-wrap wrap
        .item
            width 120rpx
            display flex
            flex-direction column
            justify-content flex-start
            align-items center
            padding 25rpx
            float left
            image
                width 100rpx
                height 100rpx
                border-radius 50rpx
            p
                height 50rpx
                line-height 50rpx
                font-size 24rpx
                color #444
                width 100rpx
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                text-align center
    .bottom
        height 140rpx
        position fixed
        bottom 0
        left 0
        background rgba(255, 255, 255, 0.5)
        display flex
        justify-content center
        align-items center
        width 100%
        .left
            height 80rpx
            line-height 80rpx
            font-size 28rpx
            width 300rpx
            color #fff
            background #E62C6B
            margin-right 20rpx
        .right
            height 80rpx
            line-height 80rpx
            font-size 28rpx
            color #fff
            width 300rpx
            background #2CA6F9
    .count
        height 60rpx
        line-height 60rpx
        background rgba(255, 255, 255, 0.5)
        position fixed
        bottom 140rpx
        left 0
        font-size 28rpx
        color #444
        text-align center
        width 100%
</style>



