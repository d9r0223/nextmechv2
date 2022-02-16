const accordionItemHeaders = document.querySelectorAll('.accordion__item--header')

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {
        event.target.classlist.toggle('active');
    });
});

