$(document).ready(function() {
    $('.delete').click(function(){
        let name = $('#target').text()
        console.log(name)
        $.post('/delete-user', {name:name}, function(data, status) {
            console.log(`${data.message} and status is ${status}`)
            alert(data.message)
            setTimeout(function() {
                location.reload();
            }, 2000);
        })
    })



    $('.send').click(function() {
        let newName = $('#nombre').val()
        console.log(newName);
        if (newName && newName.length > 0) {
            $.post('/save-user', {name:newName}, function(data, status) {
                console.log(`${data.message} and status is ${status}`)
                alert(data.message)
                setTimeout(function() {
                    location.reload();
                }, 2000);
            })
        }
    })
})
