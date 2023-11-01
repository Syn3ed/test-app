const regionInput = document.getElementById('region');
const cityInput = document.getElementById('city');
const streetInput = document.getElementById('street');
const locationInput = document.getElementById('location');
const saveButton = document.getElementById('save-button');

const inputs = [regionInput, cityInput, streetInput, locationInput];

//window.Telegram.WebApp
function checkFormValidity() {
    const allFilled = inputs.every(input => input.value.trim() !== '');
    saveButton.disabled = !allFilled;
}

inputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
});

// document.getElementById('address-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     alert('Адрес сохранен!');
// });
