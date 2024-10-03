
   
                let jobVotes = 0;
                let otherVotes = 0;
        
                function vote(option) {
                    if (option === 'job') {
                        jobVotes++;
                        document.getElementById('jobCount').innerText = jobVotes;
                        document.getElementById('jobButton').classList.add('active-btn');
                        document.getElementById('otherButton').classList.remove('other-active-btn');
                    } else {
                        otherVotes++;
                        document.getElementById('otherCount').innerText = otherVotes;
                        document.getElementById('otherButton').classList.add('other-active-btn');
                        document.getElementById('jobButton').classList.remove('active-btn');
                    }
        
                    updateProgress();
                    showMessage();
                }
        
                function updateProgress() {
                    const totalVotes = jobVotes + otherVotes;
                    const jobPercentage = totalVotes ? (jobVotes / totalVotes) * 100 : 0;
                    const otherPercentage = totalVotes ? (otherVotes / totalVotes) * 100 : 0;
        
                    document.getElementById('jobProgress').style.width = jobPercentage + '%';
                    document.getElementById('jobProgress').innerText = Math.round(jobPercentage) + '%';
                    document.getElementById('otherProgress').style.width = otherPercentage + '%';
                    document.getElementById('otherProgress').innerText = Math.round(otherPercentage) + '%';
                }
        
                function showMessage() {
                    if (jobVotes > 0 && otherVotes > 0) {
                        document.getElementById('message').innerText = 'More select this 2';
                        document.getElementById('message').style.display = 'block';
                    } else {
                        document.getElementById('message').style.display = 'none';
                    }
                }
           





                document.getElementById('navigateBtn').addEventListener('click', function() {
                    // Scroll to the form section
                    document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
                  });

                  document.getElementById('navigateBtns').addEventListener('click', function() {
                    // Scroll to the form section
                    document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
                  });

                  document.getElementById('navigateBtna').addEventListener('click', function() {
                    // Scroll to the form section
                    document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
                  });

                  document.getElementById('navigateBtnb').addEventListener('click', function() {
                    // Scroll to the form section
                    document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
                  });

                  document.getElementById('navigateBtnc').addEventListener('click', function() {
                    // Scroll to the form section
                    document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
                  });
                  document.getElementById('navigateBtnd').addEventListener('click', function() {
                    // Scroll to the form section
                    document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
                  });


              
              
                  // JavaScript for form submission
                  document.getElementById('contactForm').addEventListener('submit', function(event) {
                    event.preventDefault();
              
                    const name = document.getElementById('name').value;
                    const whatsapp = document.getElementById('whatsapp').value;
                    const email = document.getElementById('email').value;
                    const message = document.getElementById('message').value;
                    const option = document.getElementById('options').value;
              
                    if (name && whatsapp && email && option) {
                   // alert(`Form Submitted!\n\nName: ${name}\nWhatsApp: ${whatsapp}\nEmail: ${email}\nMessage: ${message}\nOption: ${option}`);
                   

                     
                         localStorage.setItem('name', name);
                        localStorage.setItem('email', email);
                        localStorage.setItem('message', message);



                     window.location.href = 'Application.html'; 

                     



                   
                    } else {
                      alert('Please fill out all required fields.');
                    }
                  });

                  document.getElementById('username').textContent = localStorage.getItem('name');
                  document.getElementById('displayEmail').textContent = localStorage.getItem('email');
                  document.getElementById('displayMessage').textContent = localStorage.getItem('message');


//https://api.whatsapp.com/send?text=Hey%2C%20check%20out%20this%20Internship%20opportunity%20https%3A%2F%2Fmuskurahat.org.in%2Finternship-application%3Futm_source
                

function sendEmail(){
    Email.send({
         Host : "smtp.gmail.com",
         Username : "akashzzh146@gmail.com",
         Password : "akash123",
         To : 'akashqq146@gmail.com',
         From : document.getElementById("email").value,
         Subject : "New Contact Form Enquiry",
         Body : "And this is the body"
     }).then(
       message => alert(message)
     );
}
//hr@muskurahat.org.in