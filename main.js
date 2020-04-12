function formatQueryParams() {

}

function listenForSubmit() {
    $('form').submit(e => {
        e.preventDefault();
        let userName = $('#user-name').val();
        console.log(userName);
    });

    formatQueryParams();
}

function getUserRepos() {

}

function handleEvents() {
    listenForSubmit()
}

$(handleEvents)