// when "Run Tests" button is clicked
document.querySelector(".tests").addEventListener("click", function() {
  $(".liquor-options li").trigger("click");
  console.log(document.getElementsByClassName("list-group-item active disabled")[1] );
});

