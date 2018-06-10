let apartmentView = document.getElementById("view_apartments");

function apartmentViewHandler(ev){
    if( ev.target.value = "location" ){
        console.log(ev.target.value)
        $("#list_content").hide();
        $("#area_content").hide();
        $("#location_content").show();
    } /* else if( ev.target.value = "list" ){
        console.log(ev.target.value)
        $("#area_content").hide();
        $("#location_content").hide();
        $("#list_content").show();
    } else if( ev.target.value = "area" ){
        console.log(ev.target.value)
        $("#list_content").hide();
        $("#location_content").hide();
        $("#area_content").show();
    }
    else{
        console.log('you chose default')
    } */
}

apartmentView.addEventListener('change', apartmentViewHandler);
