const form = document.getElementById('contactForm');
  
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    [name, email, message].forEach(input => {
        input.parentElement.classList.remove('error');
    });


    if (name.value.trim().length < 2) {
        setError(name);
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        setError(email);
        isValid = false;
    }

    if (message.value.trim().length < 10) {
        setError(message);
        isValid = false;
    }

    if (isValid) {
        const btn = form.querySelector('.submit-btn');
        const originalText = btn.textContent;
        
        btn.textContent = "¡Enviado!";
        btn.style.background = "#16a34a";
        
        form.reset();

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = "#0a0a0a";
        }, 3000);
    }
  });

  function setError(input) {
        input.parentElement.classList.add('error');
  }
