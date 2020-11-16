/* eslint-disable indent */
/* eslint-disable strict */

function main() {
    $("#number-chooser").on('submit', function(event) {
        event.preventDefault();
        $(".js-results").empty();
        let number = $("#number-choice").val();
        console.log(number);
        const results = [];

        for (let x = 0; x <= number; x++) {
            if (x % 15 === 0) {
                results.push('<div class="fizz-buzz-item fizzbuz"><span>FizzBuzz!</span></div>');
            } else if ( x % 5 === 0) {
                results.push('<div class="fizz-buzz-item buz"><span>Buzz!</span></div>');
            } else if (x % 3 === 0) {
                results.push('<div class="fizz-buzz-item fizz"><span>Fizz!</span></div>');
            } else {
                results.push(`<div class="fizz-buzz-item"><span>${x}</span></div>`);
            }
        }
        $('.js-results').append(results);
    });
}

$(main);