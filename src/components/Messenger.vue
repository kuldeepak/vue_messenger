<template>
  <div id="messenger">
	<Header/>
    <div class="chat-wrapper">
      <Chatsidebar/>
      <Chatcontent/>
    </div>
    <div class="modal fade effect-scale" id="modalCreateChannel" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-body pd-20">
            <button type="button" class="close pos-absolute t-15 r-15" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i data-feather="x" class="wd-20"></i></span>
            </button>
            <h6 class="tx-uppercase tx-spacing-1 tx-semibold mg-b-20">Create Channel</h6>
            <input type="text" class="form-control" placeholder="Channel name" value="">
          </div>
          <div class="modal-footer pd-x-20 pd-b-20 pd-t-0 bd-t-0">
            <button type="button" class="btn btn-secondary tx-13" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary tx-13">Create</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade effect-scale" id="modalInvitePeople" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body pd-20 pd-sm-30">
            <button type="button" class="close pos-absolute t-20 r-20" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"><i data-feather="x" class="wd-20"></i></span>
            </button>
            <h6 class="tx-18 tx-sm-20 mg-b-5">Invite People</h6>
            <p class="tx-color-03 mg-b-20">Share this link to your friend to grant access and join to this channel</p>
            <div class="input-group mg-b-5">
              <input type="text" class="form-control" value="http://themepixels.me/dashforge" readonly>
              <div class="input-group-append">
                <button class="btn btn-outline-light" type="button" id="button-addon2">Copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/includes/Header'
import Chatsidebar from '@/components/includes/Chatsidebar'
import Chatcontent from '@/components/includes/Chatcontent'
export default {
  // el: '#messenger',
  name: 'Messenger',
  components: {Header, Chatsidebar, Chatcontent}
}
</script>
