$(document).ready(function () {

  $('.radio-div').click(function(e){
    try{
    var oldID = document.getElementsByClassName("selected-radio-div")[0].id
    document.getElementById(oldID).className = "radio-div";
  }
  catch(e){}
    var clickedID = $(this).attr('id');
    document.getElementById(clickedID).className = "selected-radio-div";


  });
});
