const prices = {
    'landing-page': {
        pm: 700,
        design: 600,
        developer: 1200,
        qa: 500
    },
    'online-store': {
        pm: 1200,
        design: 900,
        developer: 2500,
        qa: 800,
    },
    'web-application': {
        pm: 2000,
        design:1100,
        developer:3000,
        qa: 1000,
    },
    'mobile-application': {
        pm: 3000,
        design: 1500,
        developer: 4000,
        qa: 1300,
    }
};

function getFromevalues () {

    const websiteTypeElement = document.querySelector ('#project-price-form-select');

    const pmElement = document.querySelector ('#project-managment');
    const desingElement = document.querySelector ('#design');
    const developerlement = document.querySelector ('#developer');
    const qaElement = document.querySelector ('#qa');

    // console.log(websiteTypeElement.value);

    // console.log(pmElement.checked);
    // console.log(desingElement.checked);
    // console.log(developerlement.checked);
    // console.log(qaElement.checked);

    return {
        websiteType: websiteTypeElement.value,
        
        pm: pmElement.checked,
        design: desingElement.checked,
        developer: developerlement.checked,
        qa: qaElement.checked,
    }

}

function calculateWorck () {
    const values = getFromevalues();
    
    let totalPrice = 0;

    const worckTypes = prices[values.websiteType];


    if (values.pm) {
        totalPrice = worckTypes.pm
    };


    if (values.design) {
        totalPrice = totalPrice + worckTypes.design
    };


    if (values.developer) {
        totalPrice = totalPrice + worckTypes.developer
    };


    if (values.qa) {
        totalPrice = totalPrice + worckTypes.qa
    };


    const totalPriceElement = document.querySelector ('#total-price');

    totalPriceElement.textContent = totalPrice;

    console.log(totalPrice)

}



const formElemet = document.querySelector ('#project-price-form');

const emailModal = document.querySelector ('#modal-email');
const successModal = document.querySelector ('#success-modal');




formElemet.addEventListener('change', calculateWorck);


formElemet.addEventListener('submit', function (event) {
    event.preventDefault();

    emailModal.classList.add('modal-active');

} );


const buttonsCloseIcon = document.querySelectorAll ('.cross-icon-button');

buttonsCloseIcon.forEach( function (buttonCloseIcon) {

    buttonCloseIcon.addEventListener('click', function (){

        const inputConainer = document.querySelector ('#email-input-conainer');
        inputConainer.classList.remove('email-input-error-conainer');
        
        emailModal.classList.remove('modal-active');
        successModal.classList.remove('modal-active');

    });

});

const modalEmailContainer = document.querySelector ('#modal-email-container')

modalEmailContainer.addEventListener('submit', function (event) {
    event.preventDefault();

    const userEmailInput = document.querySelector ('#user-email');

    if (userEmailInput.value) {

        const formData = new FormData(formElemet);

        formData.append('Email', userEmailInput.value)

        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        
        .then(function() {

            emailModal.classList.remove('modal-active');
            successModal.classList.add('modal-active');
        })

        .catch(() => alert('Не вдалося відправити форму'))

        return;
    };
    
    const inputConainer = document.querySelector ('#email-input-conainer');
    inputConainer.classList.add('email-input-error-conainer');
});


