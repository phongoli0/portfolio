$(function () {
  $("#contact-form input,#contact-form textarea").jqBootstrapValidation({
      preventSubmit: true,
      submitError: function ($form, event, errors) {
          // additional error messages or events
      },
      submitSuccess: function ($form, event) {
        $this = $("#sendMessageButton");
        $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages  
        event.preventDefault(); // prevent default submit behaviour
          // get values from FORM
          var form = $('#contact-form');
          var name = $("input#name").val();
          var email = $("input#email").val();
          var subject = $("input#subject").val();
          var message = $("textarea#message").val();
          var firstName = name; // For Success/Failure Message
          // Check for white space in name for Success/Fail message
          if (firstName.indexOf(' ') >= 0) {
              firstName = name.split(' ').slice(0, -1).join(' ');
          }
          // Use native form submission instead of AJAX so hosting (e.g., Netlify) receives the POST.
          // Re-enable button and perform a normal submit.
          setTimeout(function () {
            $this.prop("disabled", false);
            // Trigger native submission
            form.off('submit');
            form[0].submit();
          }, 50);
      },
      filter: function () {
          return $(this).is(":visible");
      },
  });

  $("a[data-toggle=\"tab\"]").click(function (e) {
      e.preventDefault();
      $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
  $('#success').html('');
});