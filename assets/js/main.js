/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// MENU SHOW
// validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// MENU HIDDEN
// validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // when we click on each nav__link , we remove show-menu class

    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const main = document.querySelector('.main').addEventListener('click', () => {
    if (navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
    }
})
/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height , add the scroll-header class to the header tag

    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        }
        else {
            sectionsClass.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__data , .footer__container , .footer__group`);
sr.reveal(`.home__img`, { delay: 700, origin: 'bottom' });
sr.reveal(`.logo__img , .program__card , .pricing__card`, { interval: 100 });
sr.reveal(`.choose__img , .calculate__content`, { origin: 'left' });
sr.reveal(`.choose__content , .calculate__img`, { origin: 'right' });

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault();

    // check if fields have a value
    if (calculateCm.value === '' || calculateKg === '') {
        // add and remove color
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        // show message
        calculateMessage.textContent = "Fill in the Height and Weight 😶";

        // remove message after three seconds
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000)
    }
    else {
        // BMI FORMULA

        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm));

        // show your health
        if (bmi < 18.5) {
            // add color and display message
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny 😪`;
        }
        else if (bmi < 25) {
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are Healthy 🥳`;
        }
        else {
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😣`;
        }

        // To clear the input fields
        calculateCm.value = '';
        calculateKg.value = '';

        // remove message after four seconds
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 4000)

    }
}

calculateForm.addEventListener('submit', calculateBmi);
/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user'),
    contactBtn = document.getElementById('Subscribe-btn');

const sendEmail = (e) => {
    e.preventDefault();

    // check if the field has a value
    if (contactUser.value === '') {
        // Add and remove color
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');

        // show message
        contactMessage.textContent = 'You must enter your email 👆';

        // Remove message three seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 3000);
    } else {

        // serviceId - templateId - #form - publicKey
        emailjs.sendForm('service_iqix6uf', 'template_75tijgv', '#contact-form', 'eAnT8J59E0VVaBYim')
            .then(() => {

                // show message and add color
                contactMessage.classList.add('color-green');
                contactMessage.textContent = "You registered successfully 💪";

                // Remove message three seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 3000);
            }, (error) => {
                //  Mail sending error
                alert('OOPS? SOMETHING HAS FAILED... ', error);
            })

        // To clear the input field
        contactUser.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail);