//<!--#protect
// Prevent Submit
var preventSubmit = function(event) {
    event.preventDefault();
    handleSelectChange();
};
    
//results under each department
function deptResultCheck(currentElement,searchResultsDept){
    if(currentElement.querySelectorAll(".visually-hidden").length===currentElement.querySelectorAll(".picture-item").length){
        searchResultsDept.classList.add("visually-hidden");
    }else{
        searchResultsDept.classList.remove("visually-hidden");
    }
}

// attach event listener for form submissions
document.getElementById("formDiscipline").addEventListener("submit", preventSubmit);

// Add an event listener for drop down change
$('#filter-discipline').on('select2:select', function (e) {
    handleSelectChange(e);
});

// Add an event listener for key presses.
document.getElementById('search-directory').addEventListener('keyup', handleSearchKeyup);    

//Search results below search inputs 
function displaySearchResults(searchText, deptSelect){
    
    let searchResults = document.getElementById("search-results");
    let departmentName;
    
    if(deptSelect===""){
        departmentName="All Departments";
    }else{
        departmentName=deptSelect;
    }

    if(searchText.length>0){
        searchResults.classList.remove("visually-hidden");
        searchResults.innerHTML = "Search Results for <em>" + searchText + "</em> searching <em>" + departmentName + "</em>";
    }else{
        if(deptSelect.selectedIndex===0){
            searchResults.classList.add("visually-hidden");
        }else{
            searchResults.innerHTML = "Search Results for <em>" + departmentName + "</em>";    
        }
    }
}

//handles drop down search
function handleSelectChange(event) {
    
    handleSearchKeyup();
    if(location.hash){
        location.hash = "";
        location.hash = "#search-results";
    }else{
        location.hash = "#search-results";
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
    
    let deptSelect=document.getElementById("filter-discipline").options[document.getElementById("filter-discipline").selectedIndex].text;
    let deptSelectVal=document.getElementById("filter-discipline").value;        
    
    if(deptSelect===""){
        departmentName="All Departments";
    }else{
        departmentName=deptSelect;
    }        
    
    displaySearchResults(searchText, deptSelect);
    searchText = searchText.toLowerCase();
    let titleElement = "";
    let titleText = "";
        
    $('.photo-gallery').each(function (i, element) {
        
        if(parseInt(element.id)===parseInt(deptSelectVal)){
            $("#" + element.id  + " > .picture-item").each(function (i, element) {
                titleElement = element.querySelector('.profile-card-content');
                titleText = titleElement.textContent.toLowerCase().trim();
                if(!titleText.includes(searchText)){
                    element.classList.add("visually-hidden");
                }else{
                    element.classList.remove("visually-hidden");
                }
            });
        }else if(departmentName==="All Departments"){
            $("#" + element.id  + " > .picture-item").each(function (i, element) {
                titleElement = element.querySelector('.profile-card-content');
                titleText = titleElement.textContent.toLowerCase().trim();
                if(!titleText.includes(searchText)){
                    element.classList.add("visually-hidden");
                }else{
                    element.classList.remove("visually-hidden");
                }
            });             
        }else{
            $("#" + element.id  + " > .picture-item").each(function (i, element) {
                element.classList.add("visually-hidden");
            });                 
        }
        
        let currentElement=document.getElementById(element.id);
        let searchResultsDept=document.querySelector(".search-results-" + element.id);
        
        //Show no results if there are no results for the department
        deptResultCheck(currentElement,searchResultsDept);
    });
}
//#protect-->