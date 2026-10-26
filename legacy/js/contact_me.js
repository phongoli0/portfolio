/*
 contact_me.js
 - Client-side validation and native-submit flow for the contact form.
 - Compatible with static hosts and Netlify Forms. If deploying to Netlify,
   ensure your `<form>` has `data-netlify="true"` and a `name` attribute.
   This script will add the required hidden `form-name` input before submission.
*/

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
          // If Netlify Forms is used, ensure the hidden `form-name` input exists.
          setTimeout(function () {
            $this.prop("disabled", false);
            // If form opts into Netlify, add the required hidden input
            try {
              if (form.attr('data-netlify') === 'true') {
                var formName = form.attr('name') || 'contact';
                if (form.find('input[name="form-name"]').length === 0) {
                  form.prepend('<input type="hidden" name="form-name" value="' + formName + '">');
                }
              }
            } catch (e) {
              // noop
            }
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