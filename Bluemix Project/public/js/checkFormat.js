
function checkFormat(input) {
    var r = /[0-9]{1,2}[/][0-9]{1,2}[/][0-9]{4}T[0-9]{2}:[0-9]{2}:[0-9]{2}[.,:][0-9]{4}.Z/;
    if (!input){
      return r.test(input);
    }

}
