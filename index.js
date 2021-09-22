document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('phone')
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault();


        let formData = new FormData(form)

        if (input.value.length === 0) {
            alert('Заполни поле')
        } else {
            form.classList.add('_sending')
            let response = await fetch('dummy.php', {
                method: 'POST',
                body: formData
            })
                .then((res) => res.text())
                .then((text) => console.log(text))
            if (response.ok) {
                let result = await response.json();
                alert(result.message)
                form.reset();
                form.classList.remove('_sending')
            }
        }
        return false;
    }
})
