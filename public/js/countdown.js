(function($) {

  'use strict';

  $.fn.countdown = function(options, callback) {

    // :: custom 'this' selector
    var thisEl = $(this);

    // :: array of custom settings
    var settings = { 
      'date': null,
      'format': null
    };

    // :: append the settings array to options
    if(options) {
      $.extend(settings, options);
    }
    
    // :: main countdown function
    function countdown_proc() {
      
      var eventDate = Date.parse(settings['date']) / 1000;
      var currentDate = Math.floor($.now() / 1000);
      
      if(eventDate <= currentDate) {
        // Check if callback exists before calling it
        if (typeof callback === 'function') {
          callback.call(thisEl);
        }
        clearInterval(interval);
      }
      
      var seconds = eventDate - currentDate;
      
      var days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
      seconds -= days * 60 * 60 * 24; //update the seconds variable with no. of days removed
      
      var hours = Math.floor(seconds / (60 * 60));
      seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed
      
      var minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60; //update the seconds variable with no. of minutes removed
      
      // :: conditional Ss
      if (days == 1) { thisEl.find(".timeRefDays").text("day"); } else { thisEl.find(".timeRefDays").text("days"); }
      if (hours == 1) { thisEl.find(".timeRefHours").text("hour"); } else { thisEl.find(".timeRefHours").text("hours"); }
      if (minutes == 1) { thisEl.find(".timeRefMinutes").text("minute"); } else { thisEl.find(".timeRefMinutes").text("minutes"); }
      if (seconds == 1) { thisEl.find(".timeRefSeconds").text("second"); } else { thisEl.find(".timeRefSeconds").text("seconds"); }
      
      // :: logic for the two_digits ON setting
      if(settings['format'] == "on") {
        var days = (String(days).length >= 2) ? days : "0" + days;
        var hours = (String(hours).length >= 2) ? hours : "0" + hours;
        var minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
        var seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
      }
      
      // :: update the countdown's html values.
      if(!isNaN(eventDate)) {
        thisEl.find(".days").text(days);
        thisEl.find(".hours").text(hours);
        thisEl.find(".minutes").text(minutes);
        thisEl.find(".seconds").text(seconds);
      } else { 
        console.warn("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00");
        clearInterval(interval); 
      }
    }
    
    // :: run the function if there's a valid date
    if (settings['date']) {
      countdown_proc();
      
      // :: loop the function
      var interval = setInterval(countdown_proc, 1000);
    }
    
    return this;
  }
}) (jQuery);