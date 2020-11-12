$(document).ready(
    function () {
        // event handlers

        $("#totalTable").hide();
        $("button").click(totalCal);

        function totalCal() {
            var sizeCal;
            var delivery = 2.00, tax = .051, total = 0;
            var baconCal = 0, pepCal = 0, sausageCal = 0;
            var tomatoesCal = 0, olivesCal = 0, mushroomCal = 0;
            $("#totalTable").show();

            if (document.getElementById('small').checked) {
                sizeCal = parseFloat(7.00);
            }
            if (document.getElementById('medium').checked) {
                sizeCal = parseFloat(9.00);
            }
            if (document.getElementById('large').checked) {
                sizeCal = parseFloat(12.00);
            }

            if (document.getElementById('tomatoes').checked) {
                tomatoesCal = parseFloat(1.00);
            }
            if (document.getElementById('olives').checked) {
                olivesCal = parseFloat(1.00);
            }
            if (document.getElementById('mushrooms').checked) {
                mushroomCal = parseFloat(1.00);
            }

            if (document.getElementById('bacon').checked) {
                baconCal = parseFloat(1.50);

            }
            if (document.getElementById('pepperoni').checked) {
               pepCal = parseFloat(1.50);
            }
            if (document.getElementById('sausage').checked) {
                sausageCal = parseFloat(1.50);
            }

            var preSubTotal = sizeCal + baconCal + pepCal + sausageCal +
            tomatoesCal + olivesCal + mushroomCal;
            preSubTotal = parseFloat(preSubTotal);
            tax = tax * preSubTotal;
            total = tax + delivery + preSubTotal;

            $("#subTotal").text(preSubTotal.toFixed(2));
            $("#delivery").text(delivery.toFixed(2));
            $("#taxShow").text(tax.toFixed(2));
            $("#totalAmount").text(total.toFixed(2));
        }
    });

$("#name").focusout(function () {
    $("#nameReview").html($("#name").val());
});

$("#address").focusout(function () {
    $("#addressReview").html($("#address").val());
});

$("#cell").focusout(function () {
    $("#cellReview").html($("#cell").val());
});


$("#pizzaSize").focusout(function () {

    $("#sizeReview").html($('[name=size]:checked').val());
});

$("#pizzaCrust").focusout(function () {

    $("#crustReview").html($('[name=crust]:checked').val());
});

$("#bacon").change(function () {

    $("#meatsReview").append(" bacon ");
});

$("#pepperoni").change(function () {

    $("#meatsReview").append(" pepperoni ");
});

$("#sausage").change(function () {

    $("#meatsReview").append(" sausage ");
});

$("#tomatoes").change(function () {

    $("#veggiesReview").append(" tomatoes ");
});

$("#olives").change(function () {

    $("#veggiesReview").append(" olives ");
});

$("#mushrooms").change(function () {

    $("#veggiesReview").append(" mushrooms ");
});


$("#tabs a").click(showTab);


// other functions
function showTab(event) {
    event.preventDefault();
    $(this).tab("show");
}

