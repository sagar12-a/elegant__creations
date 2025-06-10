const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

// Basic contact form validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if(contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if(name === '' || email === '' || message === '') {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
      formMessage.style.color = 'red';
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you for contacting us!';
    contactForm.reset();
  });
}
 const counters = document.querySelectorAll('.counter-number');
  const speed = 200; // lower is faster

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / speed;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });




    function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => tab.classList.add('hidden'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.remove('hidden');
    event.target.classList.add('active');
  }



  const form = document.getElementById('verifyForm');
  const certInput2021 = document.getElementById('certificateNumber');
  const certCard = document.getElementById('certificateCard');
  const invalidMsg = document.getElementById('invalidMessage');
  const searchAnotherBtn = document.getElementById('searchAnotherBtn');

  const certNumberDisplay = document.getElementById('certNumberDisplay');
  const certName = document.getElementById('certName');
  const certFATHERName = document.getElementById('certFATHERName');
  const certCourse = document.getElementById('certCourse');
  const certDate = document.getElementById('certDate');
  const certGrade = document.getElementById('certGrade');
  const certStartDate = document.getElementById('certStartDate');
  const certEndDate = document.getElementById('certEndDate');

  const certificates = [
    {
      number: "IBSA0000165",
      name: "Jasvir Kaur",
      fathername: "Navjeet Singh",
      course: "International Diploma In Aesthtics And Hair Designing",
      grade: "A+",
      date: "1 February 2025",
      startDate: "1 August 2024",
      endDate: "30 January 2025"
    },
    {
      number: "IBSA0000187",
      name: "Harsh Kumar",
      fathername: "Manjeet Kumar",
      course: "Master In Nail",
      grade: "A+",
      date: "5 May 2025",
      startDate: "1 November 2024",
      endDate: "30 April 2025"
    },
    {
      number: "IBSA0000177",
      name: "Meena Rani",
      fathername: "Dilbag Rai",
      course: "Master In Nail",
      grade: "A+",
      date: "1 January 2025",
      startDate: "1 July 2024",
      endDate: "31 December 2024"
    },
    {
      number: "IBSA0000185",
      name: "Gautami Kumari",
      fathername: "Harbhajan Ram",
      course: "Certification In Cosmetology",
      grade: "A+",
      date: "17 December 2024",
      startDate: "1 June 2024",
      endDate: "30 November 2024"
    }
  ];

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const enteredNumber = certInput2021.value.trim();
    const certData = certificates.find(c => c.number === enteredNumber);

    if (certData) {
      certName.textContent = certData.name;
      certFATHERName.textContent = certData.fathername || "N/A";
      certCourse.textContent = certData.course;
      certNumberDisplay.textContent = certData.number;
      certDate.textContent = certData.date;
      certGrade.textContent = certData.grade || "N/A";
      certStartDate.textContent = certData.startDate || "N/A";
      certEndDate.textContent = certData.endDate || "N/A";

      certCard.classList.remove('hidden');
      invalidMsg.classList.add('hidden');
      searchAnotherBtn.classList.remove('hidden'); // ✅ Show the button
    } else {
      certCard.classList.add('hidden');
      searchAnotherBtn.classList.add('hidden');
      invalidMsg.classList.remove('hidden');
    }
  });

  searchAnotherBtn.addEventListener('click', function () {
    certInput2021.value = '';
    certCard.classList.add('hidden');
    searchAnotherBtn.classList.add('hidden');
    invalidMsg.classList.add('hidden');
    certInput2021.focus();
  });


   document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Replace with your WhatsApp number
    const phoneNumber = "918728985104"; // e.g. 918888888888

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const fullMessage = `*Contact Request*%0A
Name: ${name}%0A
Email: ${email}%0A
Subject: ${subject}%0A
Message: ${message}`;

    const whatsappURL = `https://wa.me/${918728985104}?text=${encodeURIComponent(fullMessage)}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");
  });






  
  window.addEventListener('load', function() {
    const whatsapp = document.getElementById('whatsapp-chat');
    whatsapp.style.opacity = 0;
    whatsapp.style.transform = "translateY(20px)";
    
    setTimeout(() => {
      whatsapp.style.opacity = 1;
      whatsapp.style.transform = "translateY(0)";
    }, 1000);
  });



  
