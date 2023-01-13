   var messages = ["Happy birthday to Harsh Vardhan",
    "Happy birthday to Horse vai",
    "Happy birthday to 10 roti chicken"];
     
    var i = messages.length;
    var s = Math.floor(Math.random() * i);
     
    document.getElementById("msg")
    .innerHTML = '" ' + messages[s] + ' "';