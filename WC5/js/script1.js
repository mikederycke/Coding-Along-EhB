$(function(){
    //Page ready
    console.log('script1 linked');

    $.ajax({
        url: 'data/data.json',
        method: 'GET'
    }).done(function(response){
        console.log('Done');
        console.log(response);
        //Load data onto page
        $('#content').text(response.name);


    }).fail(function(err1, err2){
        console.log('Fail');
        console.log(err1);
        console.log(err2);
    }).always(function(){
        console.log('always');
    });

});

