fetch('idList.json').then(response => response.json()).then(idList => {
    idList.forEach(id => {
        $('.theme-id-list').append(`<li class="theme">${id}</li>`)
    })
});


