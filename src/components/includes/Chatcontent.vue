<template>
<div>
  <div class="chat-content">
	<div class="chat-content-header">
      <h6 id="channelTitle" class="mg-b-0">#general</h6>
      <div id="directTitle" class="d-none">
        <div class="d-flex align-items-center">
          <div class="avatar avatar-sm avatar-online"><span class="avatar-initial rounded-circle">b</span></div>
          <h6 class="mg-l-10 mg-b-0">@dfbot</h6>
		</div>
      </div>
      <div class="d-flex">
		<div class="d-flex align-items-center mic">
          <a href="#"><i data-feather="mic"></i></a>
          <a href="#"><i data-feather="settings"></i></a>
		</div>
		<nav id="directNav" class="d-none">
          <a href="#" data-toggle="tooltip" title="Call User"><i data-feather="phone"></i></a>
          <a href="#" data-toggle="tooltip" title="User Details"><i data-feather="info"></i></a>
          <a href="#" data-toggle="tooltip" title="Add to Favorites"><i data-feather="star"></i></a>
          <a href="#" data-toggle="tooltip" title="Flag User"><i data-feather="flag"></i></a>
		</nav>
		<div class="search-form mg-l-15 d-none d-sm-flex">
          <input type="search" class="form-control" placeholder="Search">
          <button class="btn" type="button"><i data-feather="search"></i></button>
		</div>
		<nav class="mg-sm-l-10">
          <a href="#" data-toggle="tooltip" title="Channel Settings" data-placement="left"><i data-feather="more-vertical"></i></a>
		</nav>
      </div>
	</div>
	<div id="parent">
      <VuePerfectScrollbar>
      <vue-resizable width="70%" @resize:move="startResize">
		<div class="chat-content-body" id="div1">
          <div class="chat-group">
			<div class="chat-group-divider">February 20, 2019</div>
			<div class="media">
              <div class="avatar avatar-sm avatar-online"><span class="avatar-initial rounded-circle">k</span></div>
              <div class="media-body">
				<h6>katherine <small>Today at 1:30am</small></h6>
				<p>Hello everyone, this is my first message to this channel</p>
				<p>anybody here?</p>
              </div>
            </div>
			<div class="chat-group-divider">February 21, 2019</div>
			<div class="media">
              <div class="avatar avatar-sm avatar-online"><span class="avatar-initial rounded-circle">k</span></div>
              <div class="media-body">
				<h6>katherine <small>Yesterday at 4:10am</small></h6>
				<p>I'm back once again!!</p>
				<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
				<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
              </div>
			</div>
			<div class="media">
              <div class="avatar avatar-sm avatar-online"><img src="static/theme/front/assets/img/img6.jpg" class="rounded-circle" alt=""></div>
              <div class="media-body">
				<h6>situmay <small>Yesterday at 4:15am</small></h6>
				<p>Excepteur sint occaecat cupidatat non proident</p>
				<p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse...</p>
              </div>
			</div>
			<div class="chat-group-divider">February 22, 2019</div>
			<div class="media">
            <div class="avatar avatar-sm avatar-offline"><img src="static/theme/front/assets/img/img8.jpg" class="rounded-circle" alt=""></div>
              <div class="media-body">
				<h6>rlabares <small>Today at 9:40am</small></h6>
				<p>Nam libero tempore, cum soluta nobis</p>
              </div>
			</div>
			<div class="media">
              <div class="avatar avatar-sm avatar-online"><span class="avatar-initial rounded-circle">k</span></div>
              <div class="media-body">
				<h6>katherine <small>Today at 10:05am</small></h6>
				<p>I'm back once again!!</p>
				<p>Et harum quidem rerum facilis est et expedita distinctio.</p>
				<p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
              </div>
			</div>
          </div>
		</div>
		<div class="chat-content-footer">
			<a href="javascript:void(0);" class="user_secret" :style="styling1" v-on:click="check_send_msg">
				<i class="fas fa-user-secret"></i>
			</a>
			<input type="text" class="form-control align-self-center bd-0" placeholder="Message" :style="styling2">
			<nav>
				<a href="javascript:void(0);" data-toggle="tooltip" title="Send"><i data-feather="send"></i></a>
				<a href="javascript:void(0);" data-toggle="tooltip" title="Add Smiley"><i data-feather="smile"></i></a>
				<a href="javascript:void(0);" data-toggle="tooltip" title="Add Gift"><i data-feather="gift"></i></a>
			</nav>
		</div>
      </vue-resizable>
      </VuePerfectScrollbar>
      <div class="chat-sidebar-right" id="div2" :style="div2_styling">
		<div class="pd-y-20 pd-x-10" v-show="content_1">
          <div><input type="text" class="visitor_code" value="v156743567798645"/></div>
          <div><input type="email" class="visitor_email" placeholder="visitor Email"/></div>
          <div class="chat_history">
			<span class="left">Peris, France</span>
			<span class="right">12.33.65.44<br/>12:31 AM</span>
          </div>
		</div>
		<div class="pd-y-20 pd-x-10" v-show="content_2">
          Content 2 here...
		</div>
		<div class="pd-y-20 pd-x-10" v-show="content_3">
          Content 3 here...
		</div>
		<nav class="nav_right">
			<a href="javascript:void(0);" data-toggle="tooltip" title="Alert Circle" class="alert_circle"><i data-feather="alert-circle"></i></a>
			<a href="javascript:void(0);" data-toggle="tooltip" title="Eye Off" class="eye_off"><i data-feather="eye-off"></i></a>
		</nav>
      </div>
	</div>
  </div>
  <div class="chat-navleft">
    <nav class="nav flex-column">
      <a href="javascript:void(0);" class="nav-link active" data-toggle="tooltip" title="Messages" data-placement="right" v-on:click="content1">
      <i data-feather="message-square"></i>
      </a>
      <a href="javascript:void(0);" class="nav-link" data-toggle="tooltip" title="Contacts" data-placement="right" v-on:click="content2">
      <i data-feather="users"></i>
      </a>
      <a href="javascript:void(0);" class="nav-link" data-toggle="tooltip" title="Phone Calls" data-placement="right" v-on:click="content3">
      <i data-feather="phone"></i>
      </a>
      <!--
		<a href="#" class="nav-link" data-toggle="tooltip" title="Mentions" data-placement="right">
		<i data-feather="at-sign"></i>
		</a>
		<a href="#" class="nav-link" data-toggle="tooltip" title="Help" data-placement="right">
		<i data-feather="help-circle"></i>
		</a>
		-->
	</nav>
  </div>
</div>
</template>
<script>
import VueResizable from 'vue-resizable'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import $ from 'jquery'
export default {
  name: 'Chatcontent',
  data () {
    return {
      content_1: true,
      content_2: false,
      content_3: false,
      border: 'solid 0px red',
      color: '',
      div2_width: ''
    }
  },
  components: {VueResizable, VuePerfectScrollbar},
  methods: {
    startResize (data) {
      this.div2_width = ($('#parent').width() - data.width) + 'px'
    },
    check_send_msg () {
      if (!this.counter) {
        this.border = 'solid 1px red'
        this.color = 'red'
        this.counter = 1
      } else {
        this.border = 'solid 0px red'
        this.color = ''
        this.counter = 0
      }
    },
    content1 () {
      this.content_1 = true
      this.content_2 = false
      this.content_3 = false
    },
    content2 () {
      this.content_1 = false
      this.content_2 = true
      this.content_3 = false
    },
    content3 () {
      this.content_1 = false
      this.content_2 = false
      this.content_3 = true
    }
  },
  computed: {
    styling1: function () {
      return {
        color: this.color
      }
    },
    styling2: function () {
      return {
        border: this.border
      }
    },
    div2_styling: function () {
      return {
        width: this.div2_width
      }
    }
  }
}
</script>
