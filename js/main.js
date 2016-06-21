/* 
      main.js : Main javascript file
      -----------------------------
*/      
      
      var issues_found;
      var issues_message;

      function load_biography_form() {
          store_signup_data();
          document.location.href = "biography.html";
      }
     
      function display_user_profile() {
          store_biography_data();
          document.location.href = "display_profile.html";
      }

      function validate_eventcreation() {
          store_event_data();
          document.location.href = "display_event.html";
      }

      function validate_eventhostdata() {
        var start_datetime = document.getElementById('event_start_when');
        var start_datetime_value = new Date(start_datetime.value);
        var end_datetime = document.getElementById('event_end_when');
        var end_datetime_value = new Date(end_datetime.value);
        var event_title_value = document.getElementById('event_title').value;
        var event_venue_value = document.getElementById('event_venue').value;
        var event_type_value = document.getElementById('event_type').value;
        var event_desc_value = document.getElementById('event_desc').value;

        var host_name_value = document.getElementById('host_name').value;
        var host_org_value = document.getElementById('host_org').value;
        var host_phone_value = document.getElementById('host_phone').value;
        var host_email_value = document.getElementById('host_email').value;
        var host_website_value = document.getElementById('host_website').value;
        var guest_list_value = document.getElementById('guest_list').value;
        var re;
        
        issues_found = 0;
        issues_message = "There are some issues with the information you provided. Please fix them in order to proceed. ";
        
        if ((event_title_value === "") ||
            (start_datetime_value === "") ||
            (event_venue_value === "") ||
            (host_name_value === "") ||
            (host_phone_value === "") ||
            (host_email_value === "") 
           )
        {
           issues_message = issues_message + "Please make sure that all the mandatory information (Event title, Start date and time, Venue, Host name, Contact number and Email address) is entered. ";
           if(issues_found === 0) {
              document.getElementById('Issues').innerHTML = issues_message;
              issues_found = 1;
              /*return 1;*/
           }
        }

        if (!((end_datetime_value - start_datetime_value) === NaN) &&
            !((end_datetime_value - start_datetime_value) > 0)) {
           issues_message = issues_message + "Event is ending before it starts. ";
           if(issues_found === 0) {
              document.getElementById('start_datetime').focus();
              issues_found = 1;
           }
        }

        re = /[a-zA-Z]/;
        if (!(host_name_value.match(re))) {
           issues_message = issues_message + "Host name is invalid. ";
           if(issues_found === 0) {
              document.getElementById('host_name').focus();
              issues_found = 1;
           }
        }

        if (!(host_phone_value.match(/[0-9]/))) {
           issues_message = issues_message + "Contact number is invalid. ";
           if(issues_found === 0) {
              document.getElementById('host_phone').focus();
              issues_found = 1;
           }
        }

        if (!(host_email_value.match(/[a-z]/)) ||
            !(host_email_value.match(/\@/)) ||
            !(host_email_value.match(/\./)) ) {
           issues_message = issues_message + "Email address is invalid. ";
           if(issues_found === 0) {
              document.getElementById('host_email').focus();
              issues_found = 1;
           }
        }

        if (issues_found === 1) {
           document.getElementById('Issues').innerHTML = issues_message;
        }

        return issues_found;
      }

  function load_event_form() {   
          /*store_signup_data();*/
          document.location.href = "events.html";
      }

  function storageAvailable(type) {
    try {
          var storage = window[type],
          x = '__storage_test__';
          storage.setItem(x, x);
          storage.removeItem(x);
          return true;
        }
    catch(e) {
    return false;
    }
  }

  function store_signup_data() {
    if (storageAvailable('localStorage')) {
      populateSignupStorage();
    }
  }

  function populateSignupStorage() {
  localStorage.setItem('name_value', document.getElementById('name_value').value);
  localStorage.setItem('email_value', document.getElementById('email_value').value);
  localStorage.setItem('new_password_value', document.getElementById('new_password_value').value);
  localStorage.setItem('repeat_password_value', document.getElementById('repeat_password_value').value);
  }

  function store_biography_data() {
    if (storageAvailable('localStorage')) {
      populateBiographyStorage();
    }
  }

  function populateBiographyStorage() {
  localStorage.setItem('contact_num', document.getElementById('contact_num').value);
  localStorage.setItem('birthdate', document.getElementById('birthdate').value);
  localStorage.setItem('organization', document.getElementById('organization').value);
  localStorage.setItem('title', document.getElementById('title').value);
  localStorage.setItem('employer_website', document.getElementById('employer_website').value);
  }

  function store_event_data() {
    if (storageAvailable('localStorage')) {
      //if (!localStorage.getItem('contact_num')) {
         populateEventStorage();
      //}
    }
  }

  function populateEventStorage() {
  localStorage.setItem('event_title', document.getElementById('event_title').value);
  localStorage.setItem('event_start_when', document.getElementById('event_start_when').value);
  localStorage.setItem('event_end_when', document.getElementById('event_end_when').value);
  localStorage.setItem('event_venue', document.getElementById('event_venue').value);
  localStorage.setItem('event_type', document.getElementById('event_type').value);
  localStorage.setItem('event_desc', document.getElementById('event_desc').value);
  localStorage.setItem('host_name', document.getElementById('host_name').value);
  localStorage.setItem('host_org', document.getElementById('host_org').value);
  localStorage.setItem('host_phone', document.getElementById('host_phone').value);
  localStorage.setItem('host_email', document.getElementById('host_email').value);
  localStorage.setItem('host_website', document.getElementById('host_website').value);
  localStorage.setItem('guest_list', document.getElementById('guest_list').value);
  }

function validate_name () {
   var inputval = document.getElementById("name_value");
   document.getElementById('Issues').innerHTML = "";
   if(inputval.value === "") {
     document.sign_up_form.name_value.focus();
     document.getElementById('Issues').innerHTML = "Please enter your name.";
   }
}

function validate_email () {
   var inputval = document.getElementById("email_value");
   document.getElementById('Issues').innerHTML = "";
   if(inputval.value === "") {
     document.sign_up_form.email_value.focus();
     document.getElementById('Issues').innerHTML = "Please enter your email address.";
   } 
   else if ((!(inputval.value.match(/['@']/))) || (!(inputval.value.match(/['.']/)))) {
     document.sign_up_form.email_value.focus();
     document.getElementById('Issues').innerHTML = "Email address does not seem right. ";        
   }
}

function validate_new_password () {
   var inputval = document.getElementById("new_password_value");
   document.getElementById('Issues').innerHTML = "";
   if(inputval.value === "") {
     document.sign_up_form.new_password_value.focus();
     document.getElementById('Issues').innerHTML = "Please enter your password.";
   }
   else if (inputval.value.length < 8) {
     document.sign_up_form.new_password_value.focus();
     document.getElementById('new_password_value').value = "";
     document.getElementById('Issues').innerHTML = "Password should have at least 8 characters. Your password is too short.";
   }
   else if (inputval.value.length > 15) {
     document.sign_up_form.new_password_value.focus();
     document.getElementById('new_password_value').value = "";
     document.getElementById('Issues').innerHTML = "Password should contain at the most 15 characters. Your password is too long.";
   }
   else if (!(inputval.value.match(/[a-z]/)) ||
            !(inputval.value.match(/[A-Z]/)) ||
            !(inputval.value.match(/[0-9]/))
           ) {
          document.getElementById('Issues').innerHTML =  "Password should be a combination of lowercase letter, uppercase letters, and numbers. ";
          document.getElementById('new_password_value').value = "";
          document.sign_up_form.new_password_value.focus();
        } 
}

function validate_repeat_password () {
   var inputval = document.getElementById("repeat_password_value");
   var newpassword = document.getElementById("new_password_value");

   document.getElementById('Issues').innerHTML = "";
   if(inputval.value === "") {
     document.sign_up_form.repeat_password_value.focus();
     document.getElementById('Issues').innerHTML = "Please enter your password.";
   }
   else if (inputval.value !== newpassword.value) {
     document.sign_up_form.repeat_password_value.focus();
     document.getElementById('repeat_password_value').value = "";
     document.getElementById('Issues').innerHTML = "Repeat password does not match your previously entered password. Please try again.";
   }   
}

function validate_event_title () {
   var inputval = document.getElementById("event_title");

   if(inputval.value === "") {
     document.event_form.event_title.focus();
     document.getElementById('Issues').innerHTML = "Please enter the title of your event.";
   }
}

function validate_event_start_when () {
   var inputval = document.getElementById("event_start_when");
   if(inputval.value === "") {
     document.event_form.event_start_when.focus();
     document.getElementById('Issues').innerHTML = "Please enter the starting date and time.";
   }
}

function validate_event_end_when () {
   var inputval = document.getElementById("event_end_when");
   var start_datetime_value = document.getElementById("event_start_when");
   /*document.write(inputval.value);*/

   if(inputval.value === "") {
     document.event_form.event_end_when.focus();
     document.getElementById('Issues').innerHTML = "Please enter the ending date and time.";
   }
   else if (!((inputval.value - start_datetime_value) === NaN) &&
            !(((inputval.value - start_datetime_value) <= 0) ||
              (inputval.value <= start_datetime_value))
           ) {
           document.getElementById('Issues').innerHTML = "Event is ending before it starts. Please enter valid dates and times";
           document.getElementById('event_start_when').focus();
        }
}

function validate_event_venue () {
   var inputval = document.getElementById("event_venue");
   
   if(inputval.value === "") {
      document.event_form.event_venue.focus();
      document.getElementById('Issues').innerHTML = "Please enter the venue.";
   }
   else {
      document.getElementById('Issues').innerHTML = "";
   }
}

function validate_host_name () {

   var inputval = document.getElementById("host_name");
   re = /[a-zA-Z]/;

   if(inputval.value === null) {
      document.event_form.host_name.focus();
      document.getElementById('Issues').innerHTML = "Please enter the name of the contact.";
   }
   else if (!(inputval.value.match(re))) {
           document.event_form.host_name.focus();
           document.getElementById('Issues').innerHTML = "Host name is invalid. ";
           /*document.getElementById("host_name").focus();*/
           }
}

function validate_host_phone () {
   var inputval = document.getElementById("host_phone");

   if(inputval.value === "") {
      document.event_form.host_phone.focus();
      document.getElementById('Issues').innerHTML = "Please enter the phone number of the contact.";
   }
   else if (!(inputval.value.match(/[0-9]/))) {
      document.event_form.host_phone.focus();
      document.getElementById('Issues').innerHTML = "Contact number is invalid.";
      
   }
}

function validate_host_email () {
    var inputval = document.getElementById("host_email");

    if(inputval.value === "") {
      document.event_form.host_email.focus();
      document.getElementById('Issues').innerHTML = "Please enter the email address of the contact.";
   }
   else if (!(inputval.value.match(/[a-zA-Z]/)) ||
            !(inputval.value.match(/\@/)) ||
            !(inputval.value.match(/\./)) ) {
           document.getElementById('Issues').innerHTML = "Email address is invalid. ";
           document.getElementById('host_email').focus();
        }
}

function validate_guest_emails () {
    var inputval = document.getElementById("guest_list");

    if(inputval.value === "") {
      document.event_form.guest_list.focus();
      document.getElementById('Issues').innerHTML = "Please enter the email addresses of the guests.";
   }
   else if (!(inputval.value.match(/[a-zA-Z]/)) ||
            !(inputval.value.match(/\@/)) ||
            !(inputval.value.match(/\./)) ) {
           document.getElementById('Issues').innerHTML = "Invalid guest list. ";
           document.getElementById('guest_list').focus();
        }
}