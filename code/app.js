var app = {
    baseURL: "./data.php",
    productList: {},
    init: function () {
        console.log("init here!");
        $("title").text("Web app template");
        // Get the product list from the database
        app.getProductList();
    },
    getProductList: function() {
        // make a HTTP GET request
        $.getJSON(`${app.baseURL}`)
        .done(app.onSuccess)
        .fail(app.onError);
    },
    onSuccess: function (jsonData) {
        console.log(jsonData);
        // Delete the current table
        $("#table-body").html("");
        // save data in a local variable
        app.productList = jsonData.productList;
        // update the list
        // for each element, get both the object (element) and its index (idx) in the list
        // create a different data-id attribute for each plus button
        app.productList.forEach((element, idx) => {
            let productRow = `<div class="table-row">
            <div class="table-cell">${element.product}</div>
            <div class="table-cell">${element.price} euro</div>
            </div>`;
            $("#table-body").append(productRow);
            console.log(productRow);
        });
    },
    onError: function (e) {
        console.log("error!");
        console.log(JSON.stringify(e));
    }
};

$(document).ready(app.init);