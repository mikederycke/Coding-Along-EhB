$(document).ready(function(){

    //listen to 'submit' event
    $('form').on('submit', function(e){
        console.log('submit!');
        e.preventDefault();

        //Waarde selecteren
        // let input = $('#invoerveld').val();
        let values = $(this).serializeArray();
        console.log(values);

        //voeg waardes toe aan body
        for(let v of values){
            $('body').append(`<p> ${v.name}: ${v.value} </p>`);
        }


        //Inputveld leegmaken
        $('#invoerveld').val('');


    });
});
