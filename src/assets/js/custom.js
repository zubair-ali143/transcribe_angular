$(document).ready(function(){
    // scroll function for header background on scroll //
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 0) {
			$("body").addClass("scrolled");
		} else {
			$("body").removeClass("scrolled");
		}
	});
	//toolTip//
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
//login input feild js//
$('.input').on('focusin', function() {
  $(this).parent().find('label').addClass('dashboard-active');
});
 
$('.input').on('focusout', function() {
  if (!this.value) {
    $(this).parent().find('label').removeClass('dashboard-active');
  }
});
//add new service input form//
$('.signle-input').on('focusin', function() {
	$(this).parent().find('label').addClass('addnewservice-active ');
  });
   
  $('.signle-input').on('focusout', function() {
	if (!this.value) {
	  $(this).parent().find('label').removeClass('addnewservice-active');
	}
});
//append div//
$("#append").click(function(){
    $(".newServiceFormContainer").after().append(`<div class="input-box" style="margin-top:10px;">
	<form class="form-control">
	  <div class="flex-between pb-2">
		<div class="service1">
		  <h5>Service 1</h5>
		</div>
		<div class="delete-box">
		  <a href="#" id="remove"><img src="./assets/images/delete-icon.svg" alt=""></a>
		</div>
	  </div>
	  <div class="row">
		<div class="col-6">
		  <div class="serviceFormInputs">
			<label for="Name">Name</label>
			<input type="text" class="form-control signle-input">
		  </div>
		</div>
		<div class="col-6">
		  <div class="serviceFormInputs">
			<label for="Name">Price</label>
			<input type="text" class="form-control signle-input">
		  </div>
		</div>
		</div>
		<div class="row pt-3">
		  <div class="col-6">
			<div class="serviceFormInputs">
			  <label for="Name">Items</label>
			  <input type="text" class="form-control signle-input">
			</div>
		  </div>
		  <div class="col-6">
			<div class="input-border flex-between">
				<input type="text" class="form-control" placeholder="Feature Image">
				<button class="input-btn">Brows</button>
			</div>
		</div>
	  </div>
	</form>
  </div>`);
  $(".newServiceFormContainer").css('padding','25px');
  $("#remove").click(function(){
	$('.input-box').hide();
	$('.newServiceFormContainer').css('padding','0');
  });
  });
//   $(function() {
// 	$('.selectpicker').selectpicker();
//   });
});

