$(() => {
    // DELETE
    $('table').on('click', '.delete-button', function () {
        if (confirm('Are you sure?')) {
            const rowEl = $(this).closest('tr');
            const id = rowEl.find('.id').text();
            $.ajax({
                url: `/account/${id}`,
                method: 'DELETE',
                contentType: 'application/json',
                success(response) {
                    console.log(response);
                    location.reload(); // Create nice refresh button OR remove child
                    // $('#get-button').click(); redirect by Refresh-button
                }
            });
        }
    });

    // // GET/READ
    // // Create nice refresh button
    // $('#get-button').on('click', () => {
    //     $.ajax({
    //         url: '/account',
    //         contentType: 'application/json',
    //         success(response) {
    //             console.log(response);
    //         }
    //     });
    // });

    // CREATE/POST
    $('#Create-button').on('click', (event) => {
        event.preventDefault();

        const emailInput = $('#email');
        const nameInput = $('#name');
        const roleInput = $('#role');
        const passwordInput = $('#password');

        $.ajax({
            url: '/account',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                email: emailInput.val(),
                name: nameInput.val(),
                role: roleInput.val(),
                password: passwordInput.val()
            }),
            success(response) {
                console.log(response);
                nameInput.val('');
                location.reload(); // Create nice refresh button OR remove child
            }
        });
    });

    // UPDATE/PUT
    $('table').on('click', '.update-button', function () {
        const rowEl = $(this).closest('tr');
        const id = rowEl.find('.id').text();
        const emailInput = $('#email');
        const nameInput = $('#name');
        const roleInput = $('#role');
        const passwordInput = $('#password');


        $.ajax({
            url: `/account/${id}`,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({
                email: emailInput.val(),
                name: nameInput.val(),
                role: roleInput.val(),
                password: passwordInput.val()
            }),
            success(response) {
                console.log(response);
                location.reload(); // Create nice refresh button OR remove child
            }
        });
    });
});
