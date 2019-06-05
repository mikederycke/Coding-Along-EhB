$(function() {
    //Page ready
    console.log('script2 linked');

    let list;

    $.ajax({
        url: 'data/studenten.json',
        method: 'GET'
    }).done(function(response){
        console.log(response);
        list = response;

        for(let klas in list){
            $('#klasgroep').append(`<option>${klas}</option>`);
        }

        //add eventlisteners
        $('#klasgroep').on('change', selectKlas);
        $('#leerlingen').on('change', selectLeerling);

    }).fail(function(err1, err2){
        console.log(err1);
        console.log(err2);
    });

    let selectKlas = () => {
        //Get value of dropdown
        let klas = $('#klasgroep').val();
        //empty dropdown students
        $('#leerlingen').empty();

        for(let leerling in list[klas]){
            let option = $('<option/>')
                .attr('value', leerling)
                .text(list[klas][leerling]);

            $('#leerlingen').append(option);
        }
    };

    let selectLeerling = () => {
        //Get value of dropdown
        let leerling = $('#leerlingen').val();
        let name = $('#leerlingen').find(':selected').text();

        $('h1').text(name).next().text(`Student ID: ${leerling}`);

    };


});
