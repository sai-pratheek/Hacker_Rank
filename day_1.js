function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var num, dec, str;
    // Read and save an integer, double, and String to your variables.
    num = parseInt(readLine());
    dec = parseFloat(readLine());
    str = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(i + num);
    // Print the sum of the double variables on a new line.
    console.log((d + dec).toFixed(1));
    // Concatenate and print the String variables on a new line
    console.log(s + str);
    // The 's' variable above should be printed first.

}
