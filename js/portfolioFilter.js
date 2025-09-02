$(document).ready(function() {
  // Hide all portfolio items on page load
  $('.arlo_tm_portfolio_list > li').hide();

  // Show items when a filter is clicked
  $('.arlo_tm_portfolio_filter a').on('click', function(e) {
    e.preventDefault();
    var filter = $(this).data('filter');
    $('.arlo_tm_portfolio_list > li').hide();
    if (filter === '*') {
      $('.arlo_tm_portfolio_list > li').show();
    } else {
      $('.arlo_tm_portfolio_list > li' + filter).show();
    }
    // Optional: highlight selected filter
    $('.arlo_tm_portfolio_filter a').removeClass('active');
    $(this).addClass('active');
  });
});
