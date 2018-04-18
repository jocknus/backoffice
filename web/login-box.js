(function () {

    var LOGIN_ENDPOINT = "/Login/";

    var usernameEl = document.getElementById('username');
    var passwordEl = document.getElementById('password');
    var button = document.getElementById('submit');
    

    button.addEventListener('click', function() {
        var httpRequest = new XMLHttpRequest()
        httpRequest.onreadystatechange = function (data) {
            if (httpRequest.readyState == XMLHttpRequest.DONE) {
                console.log(httpRequest.responseText);
                if (httpRequest.status == 200) {    
                    window.location.href = "/app";
                    
                }else {
                    passwordEl.value = "";
                    passwordEl.placeholder = "wrong user or password";
                    
                }    
            }        
        }
        httpRequest.open('POST', LOGIN_ENDPOINT,true);
        httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var requestParameters = 'flow=Login1&FORM_USERNAME=' + encodeURIComponent(usernameEl.value) + '&FORM_PASSWORD=' + encodeURIComponent(passwordEl.value);
        httpRequest.send(requestParameters);
        
    });       
})();