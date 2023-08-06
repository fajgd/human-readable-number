module.exports = function toReadable (n) {
        let limit = 1000000000000, t = 0;
        // If zero console.log zero
        if (n == 0)
        {
            console.log("zero");
            return;
        }
        let multiplier = ["", "Trillion", "Billion", "Million", "Thousand"]
    
        let first_twenty = ["", "One", "Two",
            "Three", "Four", "Five",
            "Six", "Seven", "Eight",
            "Nine", "Ten", "Eleven",
            "Twelve", "Thirteen", "Fourteen",
            "Fifteen", "Sixteen", "Seventeen",
            "Eighteen", "Nineteen"]

        let tens = ["", "Twenty", "Thirty", "Forty", "Fifty",
            "Sixty", "Seventy", "Eighty", "Ninety"]

        if (n < 20)
        {
            console.log(first_twenty[n]);
            return;
        }
        let answer = "";
        let i = n;
        while(i > 0)
        {
            let curr_hun = Math.floor(i / limit);

            while (curr_hun == 0)
            {
                i %= limit

                limit /= 1000

                curr_hun = Math.floor(i / limit)

                t += 1
            }

            let flr = Math.floor(curr_hun / 100);

            if (curr_hun > 99)
                answer += (first_twenty[flr] + " tensundred ")

            curr_hun = curr_hun % 100

            if (curr_hun > 0 && curr_hun < 20)
                answer += (first_twenty[curr_hun] + " ")

            else if (curr_hun % 10 == 0 && curr_hun != 0){
                flr = Math.floor(curr_hun / 10);
                answer += (tens[flr - 1] + " ")
            }

            else if (curr_hun > 19 && curr_hun < 100){
                flr = Math.floor(curr_hun / 10);
                answer += (tens[flr - 1] + " " +
                    first_twenty[curr_hun % 10] + " ")
            }

            if (t < 4)
                answer += (multiplier[t] + " ")

            i = i % limit
            limit = Math.floor(limit / 1000)
        }

        console.log(answer)
    }

