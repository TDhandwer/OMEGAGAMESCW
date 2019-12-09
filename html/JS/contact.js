

function submitForm() {
    event.preventDefault();
    
    var contact = document.getElementById('contact-form');

    var formData = {
        forename: contact.elements.namedItem('name').value,
        surname: contact.elements.namedItem('surname').value,
        email: contact.elements.namedItem('email').value,
        subject: contact.elements.namedItem('need').value,
        message: contact.elements.namedItem('message').value
    }

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function() {
        console.log(this);
        console.log(this.status);
        if (this.readyState == 4 && this.status == 201) {
          var data = JSON.parse(this.responseText);
          console.log("success");
          
          var success = document.getElementById('success');
          success.classList.remove("hidden");

        }
      };

    ajax.open('post', './handlecontact');
    ajax.setRequestHeader("Content-Type", "application/json" );
    ajax.send(JSON.stringify(formData));

}