function formatRequest(user) {
    let url = `https://api.github.com/users/${user}/repos`;
    console.log('formatRequest ran')
    getUserRepos(url)
}

function listenForSubmit() {
    let userName = $('#user-name').val('');
    $('form').submit(e => {
        $('ul').empty();
        e.preventDefault();
        let userName = $('#user-name').val();
        console.log(userName);
        
    formatRequest(userName);
    });

}

function getUserRepos(link) {
    console.log(`getUserRepos ran with ${link}`)
    fetch(link)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
        $('.hidden').text('something went wrong');
    });
    
}

function displayResults(responseJson) {
    $('#user-name').val('');
    const results = responseJson;
    console.log(results);
    for (let i = 0; i < results.length; i++) {
        $('ul').append(`<li>
        <a href='https://github.com/${results[i]["full_name"]}'>${results[i]['name']}</a></li>`);
    }
}

function handleEvents() {
    listenForSubmit()
}

$(handleEvents)