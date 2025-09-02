$(document).ready(function() {
  // Set the default filter to ".techTsunami"
  var defaultFilter = '.techTsunami';

  // Hide all portfolio items initially
  $('.arlo_tm_portfolio_list > li').hide();

  // Show the items for the default filter
  $(defaultFilter).show();

  // Add the "active" class to the default filter link
  $('.arlo_tm_portfolio_filter a[data-filter="' + defaultFilter + '"]').addClass('active');

  // Handle filter clicks
  $('.arlo_tm_portfolio_filter a').on('click', function(e) {
    e.preventDefault();

    // Remove "active" class from all filter links
    $('.arlo_tm_portfolio_filter a').removeClass('active');

    // Add "active" class to the clicked filter link
    $(this).addClass('active');

    var filter = $(this).data('filter');

    // Hide all portfolio items
    $('.arlo_tm_portfolio_list > li').hide();

    // Show items based on the selected filter
    if (filter === '*') {
      $('.arlo_tm_portfolio_list > li').show();
    } else {
      $(filter).show();
    }
  });
});
