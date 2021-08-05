// JavaScript Document
$(document).ready(function(){
		$(".list-section .list-item li").click(function(){
			$(".list-section .list-item li").removeClass("active");
			$(this).addClass("active");
		});
	});
	$('.selectMe').change(function () {
        $('.group1').hide();
        $('#' + $(this).val()).show();
});
var $contents = $('.tab-content');
$contents.slice(1).hide();
$('.tab').click(function() {
  var $target = $('#' + this.id + 'show').show();
  $contents.not($target).hide();
});
 
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.opacity = "1";
  document.getElementById("mySidenav").style.right = "0";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.opacity = "0";
  document.getElementById("mySidenav").style.right = "-100%";
}
$('.list-item-div button').click( function() {
	$('.offerclaim').slideDown('');
	$([document.documentElement, document.body]).animate({
        scrollTop: $(".offerclaim").offset().top
    }, 1000);	
});
$('.list-item-div li button').click( function() {
	$('.offername').css('padding-right','8px');
});
$('#fashion .list-item-div li:nth-child(1) button').click( function() {
	$('.offername').text('Pantaloons');
});
$('#fashion .list-item-div li:nth-child(2) button').click( function() {
	$('.offername').text('Raymond');
});
$('#fashion .list-item-div li:nth-child(3) button').click( function() {
	$('.offername').text('Peter England');
});
$('#fashion .list-item-div li:nth-child(4) button').click( function() {
	$('.offername').text('Allen Solly');
});
$('#fashion .list-item-div:nth-child(2) li:nth-child(1) button').click( function() {
	$('.offername').text('U.S. Polo Assn.');
});
$('#fashion .list-item-div:nth-child(2) li:nth-child(2) button').click( function() {
	$('.offername').text('Levis');
});
$('#fashion .list-item-div:nth-child(2) li:nth-child(3) button').click( function() {
	$('.offername').text('Flaying Machine');
});
$('#fashion .list-item-div:nth-child(2) li:nth-child(4) button').click( function() {
	$('.offername').text('Westside');
});

$('#tab2show .list-item-div li:nth-child(1) button').click( function() {
	$('.offername').text('Hidesign');
});
$('#tab2show .list-item-div li:nth-child(2) button').click( function() {
	$('.offername').text('Fastrack');
});
$('#tab2show .list-item-div li:nth-child(3) button').click( function() {
	$('.offername').text('Titan');
});
$('#tab2show .list-item-div li:nth-child(4) button').click( function() {
	$('.offername').text('Titan eyeplus');
});
$('#tab2show .list-item-div:nth-child(2) li:nth-child(1) button').click( function() {
	$('.offername').text('William Penn');
});
$('#tab2show .list-item-div:nth-child(2) li:nth-child(2) button').click( function() {
	$('.offername').text('Nike');
});
$('#tab2show .list-item-div:nth-child(2) li:nth-child(3) button').click( function() {
	$('.offername').text('Chumbak');
});

$('#tab3show .list-item-div li:nth-child(1) button').click( function() {
	$('.offername').text('Dominos Pizza');
});

$('#tab4show .list-item-div li:nth-child(1) button').click( function() {
	$('.offername').text('Croma');
});

$('#tab5show .list-item-div li:nth-child(1) button').click( function() {
	$('.offername').text('Lakme');
});

$('#tab6show .list-item-div li:nth-child(1) button').click( function() {
	$('.offername').text('Apollo Pharmacy');
});

$('#tab7show .list-item-div li:nth-child(1) button').click( function() {
	$('.offername').text('3M Car Care');
});

$('#tab8show .list-item-div li:nth-child(1) button').click( function() {
	$('.offername').text('Crossword');
});