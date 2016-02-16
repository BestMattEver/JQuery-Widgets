var btn = $("#showMod");

btn.click(function(){
  $(".modal").css("display", "inline");

  btn.text("I jqueried!");
});

$("#closeModal").click(hideModal);
$("#grayArea").click(hideModal);

function hideModal(){
  $(".modal").css("display", "none");
}
