/** References: https://mottie.github.io/tablesorter/docs/
**/
$(document).ready(function () {
  $("#table1").tablesorter();
  $("#reset").click(reset);
});



//task 2 reset the data in the database
function reset() {
  $.ajax({
    url: "https://wt.ops.labs.vu.nl/api22/534341f7/reset",
    method: "GET",
    dataType: "json"
  }).done(function (data) {
    console.log("reset the database");
  });
}


$.ajax({
  url: "https://wt.ops.labs.vu.nl/api22/534341f7",
  method: "GET",
  dataType: "json"
}).done(function (result) {
  //update(result)
  //console.log(result[0].brand)
  $tbody = $("tbody:first");
  $tbody.append("<tr></tr>");
  delete result[0]['id'];
  for (let product in result[0]){
    //console.log(result[0][product]);
    str = `<td>${result[0][product]}</td>`;
    //console.log(str);
    node = $(str)

    $("tr:eq(1)").append(node);
    
  }
  
});








//task 3 dynamic table content
function createTable(data) {
  var col = ['brand', 'model', 'os', 'screensize', 'image']

}

//task 4 submit new table content




