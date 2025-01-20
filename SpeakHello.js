var helloSpeaker = {
    speak: function(name) {
      var message = "Hello " + name;
      console.log(message);
      // Append to the HTML result
      document.getElementById("result").innerHTML += message + "<br>";
    }
  };
