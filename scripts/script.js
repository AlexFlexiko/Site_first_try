const modalControler = ({modal, butOpen, butClose}) =>{
    const buttonElem =document.querySelector(butOpen);
    const modalElem = document.querySelector(modal);

    modalElem.style.cssText =   `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opasity 300ms ease-in-out;
    `;

    const closeModal = event => {
        const target = event.target;


        if (target === modalElem || target.closest(butClose)) {
            modalElem.style.opacity = 0;


            setTimeout (()=> {
                modalElem.style.visibility = 'hidden';
            }, 300)

        }
    }

    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;

    };

    buttonElem.addEventListener('click', openModal);
    modalElem.addEventListener('click',closeModal);
};

modalControler({
    modal: '.modal_Denji',
    butOpen: '.Denji',
    butClose: '.modal_close'

});

modalControler({
    modal: '.modal_Power',
    butOpen: '.Power',
    butClose: '.modal_close'

});

modalControler({
    modal: '.modal_Aki',
    butOpen: '.Aki',
    butClose: '.modal_close'

});

modalControler({
    modal: '.modal_Himeno',
    butOpen: '.Himeno',
    butClose: '.modal_close'

});

modalControler({
    modal: '.modal_Kobeni',
    butOpen: '.Kobeni',
    butClose: '.modal_close'

});

modalControler({
    modal: '.modal_Yuji',
    butOpen: '.Yuji',
    butClose: '.modal_close'

});

modalControler({
    modal: '.modal_Miwa',
    butOpen: '.Miwa',
    butClose: '.modal_close'

});

modalControler({
    modal: '.modal_Mai',
    butOpen: '.Mai',
    butClose: '.modal_close'

});