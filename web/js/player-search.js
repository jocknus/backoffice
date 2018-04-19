(function () {

    var PLAYER_SEARCH_ENDPOINT = "/KjBackend/rest/player/find/";

    var searchEl = document.getElementById('player-id-search');
    var button = document.getElementById('search-button');


    button.addEventListener('click', function(e) {
        e.preventDefault();
        var httpRequest = new XMLHttpRequest()
        httpRequest.onreadystatechange = function (data) {
            if (httpRequest.readyState == XMLHttpRequest.DONE) {
                
                if (httpRequest.status == 200) {
                    var data = JSON.parse(httpRequest.responseText);
                    console.log(data);
                    
                   
                    data.forEach(function (s){
                        // Id
                        var row = document.createElement("tr");
                        
                        var tdId = document.createElement("td");
                        tdId.appendChild(document.createTextNode(s.id));
                        row.appendChild(tdId);
                        
                        var tdUsername = document.createElement("td");
                        tdUsername.appendChild(document.createTextNode(s.username));
                        row.appendChild(tdUsername);
                        
                        var tdSite = document.createElement("td");
                        tdSite.appendChild(document.createTextNode(s.site));
                        row.appendChild(tdSite);

                        var tdEmail = document.createElement("td");
                        tdEmail.appendChild(document.createTextNode(s.email));
                        row.appendChild(tdEmail);

                        var tdLastlogin = document.createElement("td");
                        tdLastlogin.appendChild(document.createTextNode(s.lastlogin));
                        row.appendChild(tdLastlogin);

                        
                        
                        var table = document.getElementById('player-result');
                        table.tBodies[0].appendChild(row);    
                        
                        
                    });

                
                }else {
                    

                }
            }
        }
        
        httpRequest.open('GET', PLAYER_SEARCH_ENDPOINT+encodeURIComponent(searchEl.value),true);
        httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        httpRequest.send();

    });
    
})();
