/**
HomeWork: hãy viết module có tên SuperString có một số hàm như:

Nghịch đảo chuỗi: invert
Chuyển sang Camel case (ký tự đầu tiên của từ viết chữ hoa): camelCase
Trả về từ dài nhất: longestWord
**/
module.exports = {
    invertString: function (string) {

        var newString = "";

        for (var i = string.length - 1; i >= 0; i--) {
            newString += string[i];
        }

        return newString;
    },

    functionlongestWord : function(string) {
        var str = string.split(" ");
        var longest = 0;
        var word = null;
        for (var i = 0; i < str.length; i++) {
            if (longest < str[i].length) {
                longest = str[i].length;
                word = str[i];
            }
        }
        return word;
    },

    camelCase : function(string) {
    var result = "";
    var prevChar = undefined;
    for (var i = 0; i < string.length; i++){
        var currentChar = string.charAt(i);
        if (i == 0 || prevChar == " ") {
            result += currentChar.toUpperCase();
        } else {
            result += currentChar;
        }
        prevChar = currentChar;
    }
    return result;
}
};
