$(function (){
    let blockSlided = false;
    $(document).on('click', 'button.btn', function (){
        if ($(document).find('#name-input').val().length == 0) {
            // alert('Введите название!');
            $(document).find('#name-input').css('box-shadow','0 0 3px 1px red');
            return
        } else {
            $(document).find('#name-input').css('box-shadow','0');
        }
        if ($(document).find('div.case').length == 0)
            $(document).find('div.col-1').html('<p class="block-name" id="to-do-list">Список дел:</p>');

        $('#to-do-list').after(`
        <div class="case">
            <div class="case-name">
                <p>${$("#name-input").val()}</p>
                <p class="delete-block">&#10060;</p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 960 1" enable-background="new 0 0 960 560" xml:space="preserve" class="slide-block">
                    <g id="Rounded_Rectangle_33_copy_4_1_">
                        <path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937   c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937   c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
                    </g>
                </svg>
            </div>
            <div class="case-text">
                ${$("#text-input").val()}
            </div>
        </div>
        `)
    })

    $(document).on('click', 'p.delete-block', function (){
        $(this).parents('div.case').fadeOut(300, function(){
            $(this).remove();
            console.log($(document).find('div.case').length);
            if($(document).find('div.case').length == 0)
                $(document).find('div.col-1').append('<p class="case-text" style="font-size: 13px; padding-left: 0px;">Спиоск пуст...</p>')
        });
    })

    $(document).on('click', 'svg.slide-block', function (){

        // $(this).parents('div.case').find('.case-text').slideToggle("fast");
        $(this).parents('div.case').animate({
            height: $(this).parents('div.case').height() < 136 ? "+=85px" : "-=85px"
        }, 300, function() {
            $(this).find('.case-text').css('display', $(this).height() < 136 ? "none" : "block");
            $(this).find('svg.slide-block')
                .css({
                    'transform': $(this).height() < 136 ? 'SCALEY(-1)' : 'SCALEY(1)',
                    'margin-top': $(this).height() < 136 ? '20px' : '0',
                })
        });

        // $(this).parents('div.case').height( $(this).parents('div.case').height() < 136 ? "+=85px" : "-=85px" );
    })



})