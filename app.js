// app.js

// Replace 'your-link-here' with the actual link you want to convert to a QR code
function handleSubmit() {
    // Get the input value
    var inputValue = document.getElementById('inputField').value;

    // Do something with the input value (e.g., log it to the console)
    // console.log('Input Value:', inputValue);

    // Prevent the form from actually submitting (which would reload the page)
    
const linkToConvert = inputValue;

// Create a QR code using qrcode.js
const qrcode = new QRCode(document.getElementById('qrcode'), {
    text: linkToConvert,
    width: 200,
    height: 200,
});

document.getElementById('button_1').disabled = true;

return false;
}

// reset the page
function resetPage() {
    // Reload the current page
    location.reload();
    document.getElementById('button_1').disabled = false;
}
