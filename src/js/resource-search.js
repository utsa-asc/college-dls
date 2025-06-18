    //<!--#protect
    // Prevent Submit
    var preventSubmit = function(event) {
        event.preventDefault();
        handleSearchKeyup();
    };
    
    // attach event listener for form submissions
    document.getElementById("formResources").addEventListener("submit", preventSubmit);
    
    // Add an event listener for key presses
    document.getElementById('search-resources').addEventListener('keyup', handleSearchKeyup);    
    
    //Search results below search inputs 
    function displaySearchResults(searchText){
        
        let searchResults = document.getElementById("search-results");

        if(searchText.length>0){
            searchResults.classList.remove("visually-hidden");
            searchResults.innerHTML = "Search Results for <em>" + searchText + "</em>";
        }else{
            searchResults.classList.add("visually-hidden");
            searchResults.innerHTML = "";
        }
    }
    
    //search after user starts typing
    function handleSearchKeyup(event) {
        let searchText = "";
        if(event){
            searchText = event.target.value;
        }else{
            searchText = document.getElementById("search-directory").value;
        }      
        
        displaySearchResults(searchText);
        searchText = searchText.toLowerCase();
        let titleElement = "";
        let titleText = "";
        $(".picture-item").each(function (i, element) {
            titleElement = element.querySelector('.content-card-content');
            titleText = titleElement.textContent.toLowerCase().trim();
            console.log(titleText, searchText);
            if(!titleText.includes(searchText)){
                element.classList.add("visually-hidden");
            }else{
                element.classList.remove("visually-hidden");
            }
        });
    }

    function queryCheck(){

        const queryParams = new URLSearchParams(window.location.search);
        
        // get the values
        const directory = queryParams.get('directory');
        const name = queryParams.get('name');
        
        if(name!==null){
            document.getElementById("search-directory").value = name;
        }
        
    }
    
    document.addEventListener("DOMContentLoaded", queryCheck);
    //#protect-->