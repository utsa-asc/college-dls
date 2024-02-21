    //<!--#protect
    // Prevent Submit
    var preventSubmit = function(event) {
        event.preventDefault();
        
        const name = document.getElementById("search-directory").value;
        let queryString="?";
        
        if(name!==null){
            queryString=queryString + "name=" + name + "&";
        }
        
        const directory = document.getElementById("filter-discipline").value;
        
        if(directory){
            queryString=queryString + "directory=" + directory;
        }
        
        // console.log(queryString);
        window.location = document.getElementById("formDiscipline").action + queryString;
        
    };

    // attach event listener for form submissions
    document.getElementById("formDiscipline").addEventListener("submit", preventSubmit);
    //#protect-->