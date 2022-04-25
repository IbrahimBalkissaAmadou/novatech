const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight =0;
        }


        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")){
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";

        }
        else{
            accordionItemBody.style.maxHeight = 0;
        }
    });  
});

let img_slider = document.getElementsByClassName('img_slider');

let etape = 0;

let nbr_img = img_slider.length;

let precedant = document.querySelector('.precedant');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for(let i = 0; i < nbr_img ; i++) {
     img_slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click' , function() {
    etape++;
    if(etape >= nbr_img) {
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
})

precedant.addEventListener('click' , function() {
    etape--;
    if(etape < 0)
        etape = nbr_img - 1;
    enleverActiveImages();
    img_slider[etape].classList.add('active');
})

    
  
    
