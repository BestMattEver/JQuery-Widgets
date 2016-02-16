// <input type="textbox" id="mommy"></input>

'use strict';

var mommyBox = $("#mommy");//this is the box that never goes away.
var daddyBox = $("#daddy");//this is the box that gets propigated

$("#boxContainer").keydown(function(){ //if we put a key down inside the div containing all the boxes
  var boxes= $(".wordBox").get(); //this should return an array of all the textboxes in the document every time we type or delete.

  for(var i =0;i<=boxes.length;i++)//this iterates through the array of all the possible checkboxes
  if(check(boxes[i]))//if any of the boxes have text in them
  {
    //insert another textbox into the array right after this one.
    boxes.splice(i, daddybox);
    //crap. this dosent work. I need to check if each box has already has a child...
  }
  else
  {
    //if the checkbox is empty. delete it. but check to make sure its not the mommybox first...
  }

  //then iterate through the box array, and add each one to the page.

  // I tried to use $.each(boxes, check(boxes[index])) but I coudlnt figure out how to do it right....
  //im just used to using for loops. i understand those.

});//end keydown function


function check(box)
{
  if(((box.val().length) <= 0 ))//if there's nothing in the textbox, return false
  {
    console.log(box.val().length);
    return false;
  }
  else//if there's text in there return true.
  {
    console.log(box.val().length);
    return true;
  }
}//end check
