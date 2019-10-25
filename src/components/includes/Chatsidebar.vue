<template>
  <div class="chat-sidebar">
	<div class="chat-sidebar-body">
      <div class="chat_sidebar_1 flex-fill pd-y-20 pd-x-10">
		<div class="d-flex align-items-center justify-content-between pd-x-10 mg-b-10">
          <span class="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1">All Widgets</span>
          <a href="#modalCreateChannel" class="chat-btn-add" data-toggle="modal"><span data-toggle="tooltip" title="Create Channel"><i data-feather="plus-circle"></i></span></a>
		</div>
		<VuePerfectScrollbar>
		<nav id="allChannels" class="nav flex-column nav-chat mg-b-20">
          <a href="#widgeta" class="nav-link active" v-on:click="channel_click"># Widget A</a>
          <a href="#widgetb" class="nav-link" v-on:click="channel_click"># Widget B</a>
          <a href="#widgetc" class="nav-link" v-on:click="channel_click"># Widget C <span class="badge badge-danger">2</span></a>
          <a href="#widgetd" class="nav-link" v-on:click="channel_click"># Widget D</a>
          <a href="#widgete" class="nav-link" v-on:click="channel_click"># Widget E</a>
          <a href="#widgetf" class="nav-link" v-on:click="channel_click"># Widget F</a>
          <a href="#widgetg" class="nav-link" v-on:click="channel_click"># Widget G</a>
          <a href="#widgeth" class="nav-link" v-on:click="channel_click"># Widget H</a>
		</nav>
		</VuePerfectScrollbar>
      </div>
      <div class="chat_sidebar_2 flex-fill pd-y-20 pd-x-10 bd-t">
		<p class="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1 pd-l-10 mg-b-10">Widget C Chat</p>
		<VuePerfectScrollbar>
		<div id="chatDirectMsg" class="chat-msg-list">
          <a href="#" class="media">
			<div class="avatar avatar-sm avatar-online"><img src="static/theme/front/assets/img/countries/british-virgin-islands.png" class="rounded-circle" alt=""></div>
			<div class="media-body mg-l-10">
              <h6 class="mg-b-0">dfbot</h6>
              <small class="d-block tx-color-04">5 mins ago</small>
			</div>
          </a>
          <a href="#" class="media">
			<div class="avatar avatar-sm avatar-online"><img src="static/theme/front/assets/img/countries/brunei.png" class="rounded-circle" alt=""></div>
			<div class="media-body mg-l-10">
              <h6 class="mg-b-0">situmay</h6>
              <small class="d-block tx-color-04">1 hour ago</small>
			</div>
			<span class="badge badge-danger">3</span>
          </a>
          <a href="#" class="media">
			<div class="avatar avatar-sm avatar-offline"><img src="static/theme/front/assets/img/countries/bulgaria.png" class="rounded-circle" alt=""></div>
			<div class="media-body mg-l-10">
              <h6 class="mg-b-0">acantones</h6>
              <small class="d-block tx-color-04">2 hours ago</small>
			</div>
          </a>
          <a href="#" class="media">
			<div class="avatar avatar-sm avatar-offline"><img src="static/theme/front/assets/img/countries/burkina-faso.png" class="rounded-circle" alt=""></div>
			<div class="media-body mg-l-10">
              <h6 class="mg-b-0">rlabares</h6>
              <small class="d-block tx-color-04">2 hours ago</small>
			</div>
          </a>
          <a href="#" class="media">
			<div class="avatar avatar-sm avatar-online"><img src="static/theme/front/assets/img/countries/british-virgin-islands.png" class="rounded-circle" alt=""></div>
			<div class="media-body mg-l-10">
              <h6 class="mg-b-0">dfbot</h6>
              <small class="d-block tx-color-04">5 mins ago</small>
			</div>
          </a>
          <a href="#" class="media">
			<div class="avatar avatar-sm avatar-online"><img src="static/theme/front/assets/img/countries/brunei.png" class="rounded-circle" alt=""></div>
			<div class="media-body mg-l-10">
              <h6 class="mg-b-0">situmay</h6>
              <small class="d-block tx-color-04">1 hour ago</small>
			</div>
			<span class="badge badge-danger">3</span>
          </a>
          <a href="#" class="media">
			<div class="avatar avatar-sm avatar-offline"><img src="static/theme/front/assets/img/countries/bulgaria.png" class="rounded-circle" alt=""></div>
			<div class="media-body mg-l-10">
              <h6 class="mg-b-0">acantones</h6>
              <small class="d-block tx-color-04">2 hours ago</small>
			</div>
          </a>
          <a href="#" class="media">
			<div class="avatar avatar-sm avatar-offline"><img src="static/theme/front/assets/img/countries/burkina-faso.png" class="rounded-circle" alt=""></div>
			<div class="media-body mg-l-10">
              <h6 class="mg-b-0">rlabares</h6>
              <small class="d-block tx-color-04">2 hours ago</small>
			</div>
          </a>
          <a href="#" class="media">
			<div class="avatar avatar-sm avatar-online"><img src="static/theme/front/assets/img/countries/british-virgin-islands.png" class="rounded-circle" alt=""></div>
			<div class="media-body mg-l-10">
              <h6 class="mg-b-0">dfbot</h6>
              <small class="d-block tx-color-04">5 mins ago</small>
			</div>
          </a>
          <a href="#" class="media">
			<div class="avatar avatar-sm avatar-online"><img src="static/theme/front/assets/img/countries/brunei.png" class="rounded-circle" alt=""></div>
			<div class="media-body mg-l-10">
              <h6 class="mg-b-0">situmay</h6>
              <small class="d-block tx-color-04">1 hour ago</small>
			</div>
			<span class="badge badge-danger">3</span>
          </a>
          <a href="#" class="media">
			<div class="avatar avatar-sm avatar-offline"><img src="static/theme/front/assets/img/countries/bulgaria.png" class="rounded-circle" alt=""></div>
			<div class="media-body mg-l-10">
            <h6 class="mg-b-0">acantones</h6>
            <small class="d-block tx-color-04">2 hours ago</small>
			</div>
          </a>
          <a href="#" class="media">
			<div class="avatar avatar-sm avatar-offline"><img src="static/theme/front/assets/img/countries/burkina-faso.png" class="rounded-circle" alt=""></div>
			<div class="media-body mg-l-10">
              <h6 class="mg-b-0">rlabares</h6>
              <small class="d-block tx-color-04">2 hours ago</small>
			</div>
          </a>
		</div>
		</VuePerfectScrollbar>
      </div>
	</div>
  </div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
  name: 'Chatsidebar',
  components: {
    VuePerfectScrollbar
  },
  methods: {
    channel_click (data) {
      console.log(data)
    }
  }
}
</script>
