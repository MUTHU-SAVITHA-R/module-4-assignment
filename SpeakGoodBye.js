var byeSpeaker = {
    speak: function(name) {
      var message = "Good Bye " + name;
      console.log(message);
      // Append to the HTML result
      document.getElementById("result").innerHTML += message + "<br>";
    }
  };
