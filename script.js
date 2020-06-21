$('#education').click(()=>{
    $('#content').load($('#education').attr('data-component'))
})
$('#skills').click(()=>{
    $('#content').load($('#skills').attr('data-component'))
})
$('#experience').click(()=>{
    $('#content').load($('#experience').attr('data-component'))
})
$('#about').click(()=>{
    $('#content').load($('#about').attr('data-component'))
})
$('#achieve').click(()=>{
    $('#content').load($('#achieve').attr('data-component'))
})

$('#edu').click(()=>{
    $('#content').load($('#education').attr('data-component'))
    $('#navbarSupportedContent').attr('class','collapse navbar-collapse')
})
$('#skls').click(()=>{
    $('#content').load($('#skills').attr('data-component'))
    $('#navbarSupportedContent').attr('class','collapse navbar-collapse')
})
$('#exp').click(()=>{
    $('#content').load($('#experience').attr('data-component'))
    $('#navbarSupportedContent').attr('class','collapse navbar-collapse')
})
$('#abt').click(()=>{
    $('#content').load($('#about').attr('data-component'))
    $('#btn').attr('aria-expanded',false)
    $('#btn').attr('class','navbar-toggler collapsed')
    $('#navbarSupportedContent').attr('class','collapse navbar-collapse')
    
})
$('#ach').click(()=>{
    $('#content').load($('#ach').attr('data-component'))
    $('#navbarSupportedContent').attr('class','collapse navbar-collapse')
})
