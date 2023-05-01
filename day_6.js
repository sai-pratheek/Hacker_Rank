function processData(input) {
    //Enter your code here
    if (typeof input !== 'string')
        throw new TypeError('Invalid Type - String expected');
    if (input.trim().length === 0)
        throw new TypeError('input cannot be empty');

    input = input.split('\n');

    for (i = 1; i < input.length; i++) {
        var splitWord = input[i].split('');

        var even = '';
        var odd = '';

        for (x = 0; x < splitWord.length; x++) {
            if (x % 2 === 0) {
                even += splitWord[x];
            } else {
                odd += splitWord[x];
            }
        }
        console.log(even + ' ' + odd);
    }
}
     

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
