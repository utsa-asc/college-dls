console.log('hello theme hacker');

const rootHandler = document.querySelector('.Navigation');

rootHandler.addEventListener('click', event => {

    const eT = event.target;
    
    console.log(Math.random(), eT.tagName, eT.classList)
    console.log('PARENT? ' + eT.parentNode.classList)

    // dont need this now and might not at all....
    // handler for component collections
    // if (eT.parentNode.classList.contains('is-current')) {
    //     // remove is-current class from all links
    //     document.querySelectorAll('.thumbLink').forEach(tLink => {
    //         tLink.classList.remove('is-current')
    //     });
    //     // add is-current class to current selection
    //     eT.parentNode.classList.add('is-current');

    // }
    // this interferes with mandlebrot JS eventHandlers
    // event.preventDefault();

});