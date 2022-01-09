const form = document.querySelector('.contact-form');

const submitButton = document.querySelector(".submit-button");

const scriptUrl = "https://script.google.com/macros/s/AKfycbyMy4szib-bqCaWm0yFBHvKGMa_x9zoqJrNJmyEeJnd96wT-6pA58DEmPi5DcZOOm-U/exec";

const statusBar = document.querySelector('.status-bar');

form.addEventListener('submit',async(e) => {
    e.preventDefault();
    let formData = new FormData(form);
    console.log(formData);
    submitButton.innerText = "Submitting...";
    const response = await fetch(scriptUrl,{method:"POST",body:formData});
    submitButton.innerText = "Submitted";
    statusBar.style.display = "block";
    console.log(response);
    setTimeout(() => {
        location.reload();
    },5000)
    // fetch(scriptURL, { method: 'POST', body: new FormData(form)}).then(response => console.log("request sent")
    //      .catch(error => console.log('Error!', error.message))
})