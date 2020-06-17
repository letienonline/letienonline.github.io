$(function(){

    $('input[type="text"]').keyup(function(){
        
        var searchText = $(this).val().toUpperCase();
        
        $('.tv-search-result-ul-tm > li').each(function(){
            
            var currentLiText = $(this).text().toUpperCase(),
                showCurrentLi = currentLiText.indexOf(searchText) !== -1;
            //$(this).toggle( showCurrentLi);
            if(showCurrentLi){
              $(this).addClass('tv-in-tm').removeClass('tv-out-tm');
            }else{
              $(this).addClass('tv-out-tm').removeClass('tv-in-tm');
            }
            
        });     
    });

});