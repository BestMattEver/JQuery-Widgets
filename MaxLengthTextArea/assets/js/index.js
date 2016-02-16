'use strict';

var area = $("#textArea");
var howMuchLeft =$("#howMuchLeft")

var maxLength = area.prop("maxlength");
console.log(maxLength);

var currLength = area.val().length;

area.keydown(function(){
  currLength =area.val().length;
  howMuchLeft.text((maxLength-currLength) + " Remaining characters");
 });
