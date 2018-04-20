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
                    
                    var table = document.getElementById('player-result');
                    table.setAttribute("border","0");
                    table.tBodies[0].innerHTML = "<tr><th>PID</th><th>Username</th><th>Site</th><th>Email</th><th>Last login</th><th>Created</th></tr>";    
                   
                    data.forEach(function (s){
                        // Id
                        var row = document.createElement("tr");
                    
                        var tdId = document.createElement("td");
                        tdId.appendChild(document.createTextNode(s.id))
                        tdId.setAttribute('align', 'center');
                        tdId.addEventListener('click', function(e) {
                            
                        });
                        row.appendChild(tdId);
                        
                        var tdUsername = document.createElement("td");
                        tdUsername.setAttribute('align', 'center');
                        tdUsername.appendChild(document.createTextNode(s.username));
                        row.appendChild(tdUsername);
                        
                        var tdSite = document.createElement("td");
                        tdSite.setAttribute('align', 'center');
                        tdSite.appendChild(document.createTextNode(s.site));
                        row.appendChild(tdSite);

                        var tdEmail = document.createElement("td");
                        tdEmail.setAttribute('align', 'center');
                        tdEmail.appendChild(document.createTextNode(s.email));
                        row.appendChild(tdEmail);

                        var tdLastlogin = document.createElement("td");
                        tdLastlogin.setAttribute('align', 'center');
                        tdLastlogin.appendChild(document.createTextNode(s.lastlogin));
                        row.appendChild(tdLastlogin);

                        var tdRegDate = document.createElement("td");
                        tdRegDate.setAttribute('align', 'center');
                        tdRegDate.appendChild(document.createTextNode(s.created));
                        row.appendChild(tdRegDate);

                        
                        
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
