const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let toogleElement = (element,className) => {
    $(element).classList.toggle(className);
}
const contactIconts = $$('.js-contact__icon');
const contactReplys = $$('.js-contact__reply');

contactIconts.forEach(function(contactIcont,index) {
    contactIcont.onclick = function(){
        const contactReply = contactReplys[index]
        $('.contact__icon.contact__icon--active').classList.remove('contact__icon--active');
        $('.js-contact__reply.contact__reply--active').classList.remove('contact__reply--active');

        this.classList.add('contact__icon--active')
        contactReply.classList.add('contact__reply--active')
    }
});

