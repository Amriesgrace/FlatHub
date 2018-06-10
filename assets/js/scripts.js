$(document).ready(function(){
    $("#view_apartments").on('change', function(ev){

        if($(this).val() === 'list'){
            $("#list_content").removeClass("dis-none");
            $("#location_content").addClass("dis-none");
        }else{
            $("#list_content").addClass("dis-none");
            $("#location_content").removeClass("dis-none");
        }
    })
})