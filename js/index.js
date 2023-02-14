/* Script to change the nav based on the last clicked. */
$('.navbar-nav>li').on('click', function() {
  //find the current active tab
  $currentActive = $('.active');
  //if the clicked tab is not already     active, set the clicked tab to active and remove the class from the previous tab
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    $currentActive.removeClass('active');
  }
});