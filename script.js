/** References: https://mottie.github.io/tablesorter/docs/
**/

$(document).ready(function () {
  $("#reset").click(function () {
    reset();
    createTable();
  });
  createTable();
  $("#submit").click(postQuery);
  $("#table1").tablesorter();
  $("#table2").tablesorter();
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

/**helper function for task 3
 * update the table
 **/
function updateTable(arr) {
  $tbody = $("tbody:first");
  // adding content per row
  for (let product of arr) {
    $tbody.prepend("<tr></tr>");
    delete product['id'];
    for (let key in product) {
      if (key == "image") {
        str = `<td><img class="pic" src=${product[key]}></td>`;
        $node = $(str);

      }
      else {
        str = `<td>${product[key]}</td>`;
        $node = $(str);
      }

      $("tr:eq(1)").append($node);

    }
  }
  // update new content to tablesorter
  $("#table1").trigger("update");
}

// clear the table
function clear() {
  $tbody = $("tbody:first");
  $tbody.empty();
}

//task 3 dynamic table content
/** get data from the website and update
 * the table by using the data
 **/
function createTable() {
  clear();
  $.ajax({
    url: "https://wt.ops.labs.vu.nl/api22/534341f7",
    method: "GET",
    dataType: "json"
  }).done(function (result) {
    updateTable(result);
  });
}

//task 4 submit new table content
function postQuery() {
  let l = {};
  l["brand"] = $("#brand").val();
  l["model"] = $("#model").val();
  l["os"] = $("#os").val();
  l["image"] = $("#image").val();
  l["screensize"] = $("#screensize").val();

  $.ajax({
    url: "https://wt.ops.labs.vu.nl/api22/534341f7",
    data: l,
    method: "POST",
    dataType: "json",
  }).done(function () {
    createTable();
  });
}