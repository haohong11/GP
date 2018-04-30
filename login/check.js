function checkuser() {
         if($('uname' == "jlu") && $('pwd') == "123") {
           return true;
         }else {
            return false;
         }
      }

function $(id) {
    return document.getElementById(id).value;
}