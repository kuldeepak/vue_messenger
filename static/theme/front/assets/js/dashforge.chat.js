
$(function(){
  'use strict'

  $('[data-toggle="tooltip"]').tooltip()

  // chat sidebar body scrollbar
  //new PerfectScrollbar('.chat-sidebar-body', {
    //suppressScrollX: true
  //});
  
  //new PerfectScrollbar('#allChannels', {
    //suppressScrollX: true
  //});
  //new PerfectScrollbar('#chatDirectMsg', {
    //suppressScrollX: true
  //});

  // chat content body scrollbar
  //new PerfectScrollbar('.chat-content-body', {
    //suppressScrollX: true
  //});

  // chat sidebar right scrollbar
  //new PerfectScrollbar('.chat-sidebar-right', {
    //suppressScrollX: true
  //});


  ///// UI INTERACTION /////

  // channel click
  $('#allChannels a').on('click', function(e){
    e.preventDefault()
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    $('#chatDirectMsg .active').removeClass('active');

    // replace channel title
    var href = $(this).attr('href');
    $('#channelTitle').text(href);

    // view channel title
    $('#channelTitle').removeClass('d-none');
    $('#directTitle').addClass('d-none');

    // view channel nav icon
    $('#channelNav').removeClass('d-none');
    $('#directNav').addClass('d-none');
	if($('.chat-navleft').css('left')=="0px"){
		$('body').removeClass('show-sidebar-right');
	}
	else{
		$('body').addClass('show-sidebar-right');
	}
	$(".chat-navleft").show();
    if(window.matchMedia('(max-width: 991px)').matches) {
      showChatContent();
    }
  })

  $('.chat-navleft a').on('click', function(e){
	e.preventDefault();  
	$('body').addClass('chat-content-show show-sidebar-right');
	showChatContent();
  })
  
  // direct message click
  $('#chatDirectMsg .media').on('click', function(e){
    e.preventDefault();

    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    var directUser = $(this).find('h6').text();
    $('#directTitle h6').text('@'+directUser);

    var avatar = $(this).find('.avatar');
    $('#directTitle .avatar').replaceWith(avatar.clone());

    // view direct title
    $('#channelTitle').addClass('d-none');
    $('#directTitle').removeClass('d-none');

    // view direct nav icon
    //$('#channelNav').addClass('d-none');
    //$('#directNav').removeClass('d-none');

	if($('.chat-navleft').css('left')=="0px"){
		$('body').removeClass('show-sidebar-right');
	}
	else{
		$('body').addClass('show-sidebar-right');
	}
	$(".chat-navleft").show();
	showChatContent();
  })

  function showChatContent() {
    $('#mainMenuOpen').addClass('d-none');
    $('#chatContentClose').removeClass('d-none');

    $('body').addClass('chat-content-show');
  }

  function hideChatContent() {
    $('#chatContentClose').addClass('d-none');
    $('#mainMenuOpen').removeClass('d-none');

    $('body').removeClass('chat-content-show');
  }

  $('#showMemberList').on('click', function(e){
    e.preventDefault()
    $(this).toggleClass('active');
    $('body').toggleClass('show-sidebar-right');
  })

  $('#chatContentClose').on('click', function(e){
    e.preventDefault()
	$(".chat-navleft").hide();
	$(".chat-sidebar").css("left","0px");
    hideChatContent();
  })

  // making sure navleft and sidebar are display when resizing to desktop
  $(window).resize(function(){
    if(window.matchMedia('(min-width: 992px)').matches) {
      $('.chat-navleft').removeClass('d-none');
      $('.chat-sidebar').removeClass('d-none');
    }
  })

})
