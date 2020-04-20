var app = {
    baseURL: "./data.php",
    productList: {},
    init: function () {
        console.log("init here!");
        // Get the product list from the database
        app.getProductList();
    },
    getProductList: function() {
        let query_string = window.location.search;
        console.log(query_string);
        // make a HTTP GET request
        $.getJSON(`${app.baseURL}${query_string}`)
        .done(app.onSuccess)
        .fail(app.onError);
    },
    onSuccess: function (jsonData) {
        console.log(jsonData);
        // save data in a local variable
        app.productList = jsonData.productList;
        let item = app.productList[0];
        $(".card-title>a").html(item.name);
        $(".card-body>img").attr("src",item.img_url);
    },
    onError: function (e) {
        console.log("error!");
        console.log(JSON.stringify(e));
    }
};

$(document).ready(app.init);