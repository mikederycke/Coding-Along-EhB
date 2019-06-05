$(function() {
    //Page ready
    console.log('script3 linked');
    //event listener on all buttons
    $('.btn').click(loadHtml);

    function loadHtml(){
        let filename = $(this).attr('id') + '.html';
        console.log(filename);

        $('#pagefragment').load(`html/${filename}`);
    }

});
