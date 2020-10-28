
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let countTo = parseInt($("input#countTo").val());
    let countBy = parseInt($("input#countBy").val());
    let currentValue = 0;
    let limit = (countTo/countBy - 1)
    let final = [];
    $("#maths").html("");

    if (countBy > countTo) {
      alert("Your count by value is larger than your count to value.");
    } else if (countTo < 0 || countBy < 0) {
      alert("We can't calculate with negatives :(");
    } else {
      for (let index = 0; index <= limit; index ++) {
        currentValue = currentValue + countBy;
        final.push(currentValue);       
      }
      let finalFormatted = final.join(", ")
      $("#maths").append(finalFormatted);
      $("#results").show();
    }
  });
});