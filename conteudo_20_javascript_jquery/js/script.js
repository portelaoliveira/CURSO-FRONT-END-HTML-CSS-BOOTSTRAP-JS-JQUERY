// $('p').hide(7000)
// $('p').addClass('destaque')
$('[botao]').click(function() {
    // $('#conteudo').removeClass('destaque')
    // $('[botao]').addClass('destaque')
    // $('ul#listas li').addClass('destaque')
    // $('*').addClass('destaque')

    // Encadeamento

    //$('h1')
    //	.css('color', 'blue')
    //	.addClass('destaque')

    // Seletores exclusivos do jQuery

    // $('ul#listas li:first').addClass('destaque')
    // $('ul#listas li:last').addClass('destaque')
    // $('ul#listas li:eq(0)').addClass('destaque')
    //Linha zebrada $('ul#listas li:odd').addClass('destaque')
    // $('ul#listas li:gt(3)').addClass('destaque')
    // $('ul#listas li:lt(3)').addClass('destaque')
    // Cabeçalho $(':header').addClass('destaque')
    $('#area :header').addClass('destaque')
});