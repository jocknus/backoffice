(function () {

    var LOGIN_ENDPOINT = "/KjBackend/rest/login/auth";

    var usernameEl = document.getElementById('username');
    var passwordEl = document.getElementById('password');
    var button = document.getElementById('submit');


    button.addEventListener('click', function(e) {
        e.preventDefault();
        var httpRequest = new XMLHttpRequest()
        httpRequest.onreadystatechange = function (data) {
            if (httpRequest.readyState == XMLHttpRequest.DONE) {
                console.log(httpRequest.responseText);
                if (httpRequest.status == 200) {
                    window.location.href = "/KjBackend/web/homescreenresults.html";

                }else {
                    
                    passwordEl.value = "";
                    passwordEl.placeholder = "wrong user or password";

                }
            }
        }
        //var requestParameters = 'user=' + usernameEl.value + '&credentials=' + passwordEl.value;
        var requestParameters = 'user=' + encodeURIComponent(usernameEl.value) + '&credentials=' + encodeURIComponent(passwordEl.value);
        httpRequest.open('POST', LOGIN_ENDPOINT+"?"+requestParameters,true);
        //httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //var requestParameters = 'user=' + encodeURIComponent(usernameEl.value) + '&credentials=' + encodeURIComponent(passwordEl.value);
        //var requestParameters = 'user=' + usernameEl.value + '&credentials=' + passwordEl.value;
        //httpRequest.send(requestParameters);
        httpRequest.send();

    });
})();
