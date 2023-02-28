const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let toogleElement = (element,className) => {
    $(element).classList.toggle(className);
}
const contactQuestions = $$('.js-contact__question');
const contactReplys = $$('.js-contact__reply');

contactQuestions.forEach(function(contactQuestion,index) {
    contactQuestion.onclick = function(){
        const contactReply = contactReplys[index]
        $('.contact__question.contact__question--active').classList.remove('contact__question--active');
        $('.js-contact__reply.contact__reply--active').classList.remove('contact__reply--active');

        this.classList.add('contact__question--active')
        contactReply.classList.add('contact__reply--active')
    }
});

const btnSpecifications = $$('.btn__specifications');
const specificationsLists = $$('.specifications__list');

btnSpecifications.forEach(function(btnSpecification,index) {
    btnSpecification.onclick = function(){
        const specificationsList = specificationsLists[index]
        $('.btn__specifications.btn--active').classList.remove('btn--active');
        $('.specifications__list.specifications__list--active').classList.remove('specifications__list--active');

        this.classList.add('btn--active')
        specificationsList.classList.add('specifications__list--active')
    }
});
