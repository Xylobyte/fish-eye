let modalOpen = false;

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "grid";
    document.getElementById('close_modal').focus();
    modalOpen = true;
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.getElementById('open_modal').focus();
    modalOpen = false;
}

function sendForm(e) {
    e.preventDefault();

    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    console.log(`First name: ${firstname.value} - Last name: ${lastname.value} - Email: ${email.value} - Message: ${message.value}`);

    closeModal();

    firstname.value = '';
    lastname.value = '';
    email.value = '';
    message.value = '';
}

document.getElementById('contact_form').addEventListener('submit', sendForm);

document.getElementById('contact_modal').addEventListener('keydown', (e) => {
    if (modalOpen && e.key === 'Escape') {
        closeModal();
    }
})
