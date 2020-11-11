$(document).ready(
    function () {
        // event handlers
        $("button").click(totalCal);
        function totalCal() {
            var meatCal,vegCal,sizeCal;

            $("#meats").focusout(function() {
                var sum = 0;
                $('#meats :checkbox').click(function (string) {
                    sum = 0;
                    $('#meats :checkbox:checked').each(function(idx, elm) {
                        sum += parseFloat(elm.value, 10);
                        meatCal = meatCal + sum;
                    });

                    $('#meatReview').html(sum);
                    $("#meatsReview").append(' ' + $('[name=meat]:checked').val());

                });
            });



            if (document.getElementById('small').checked) {
                sizeCal = parseFloat(7.00);
            }
            if (document.getElementById('medium').checked) {
                sizeCal = parseFloat(9.00);
            }
            if (document.getElementById('large').checked) {
                sizeCal = parseFloat(12.00);
            }

            if (document.getElementById('pepperoni').checked) {
                meatCal = parseFloat(1.50);
            }
            if (document.getElementById('sausage').checked) {
                meatCal = parseFloat(1.50);
            }
            if (document.getElementById('bacon').checked) {
                meatCal = parseFloat(1.50);
            }

            if (document.getElementById('tomatoes').checked) {
                vegCal = parseFloat(1.00);
            }
            if (document.getElementById('olives').checked) {
                vegCal = parseFloat(1.00);
            }
            if (document.getElementById('mushrooms').checked) {
                vegCal = parseFloat(1.00);
            }

            var preSubTotal = meatCal+vegCal+sizeCal;
            preSubTotal = parseFloat(preSubTotal);
            $("#subTotal").text (preSubTotal.toFixed(2));
        }
    });

         $("#name").focusout(function() {
            $("#nameReview").html($("#name").val());
        });

        $("#address").focusout(function() {
            $("#addressReview").html($("#address").val());
        });

        $("#cell").focusout(function() {
            $("#cellReview").html($("#cell").val());
        });

        $("#veggies").focusout(function() {
            $("#veggiesReview").append(' ' + $('[name=veg]:checked').val());
        });

        $("#pizzaSize").focusout(function (){

            $("#sizeReview").html($('[name=size]:checked').val());
        });

        $("#pizzaCrust").focusout(function (){

            $("#crustReview").html($('[name=crust]:checked').val());
        });


        $("#tabs a").click(showTab);


        // other functions
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }

