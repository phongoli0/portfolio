document.addEventListener("DOMContentLoaded", function(){

    // Modal markup is not on the page right now; wire up whatever exists so this
    // stays a no-op until a modal is added back. Each modal is opened by a
    // trigger with id `<modal-id>-button` and closed by its `.close-button`.
    var modals = Array.prototype.slice.call(document.querySelectorAll('.modal'));

    modals.forEach(function(modal){
        var trigger = document.getElementById(modal.id + '-button');
        var closeButton = modal.querySelector('.close-button');

        if(trigger){
            trigger.addEventListener('click', function(){
                modal.style.display = 'block';
            });
        }

        if(closeButton){
            closeButton.addEventListener('click', function(){
                modal.style.display = 'none';
            });
        }
    });

    window.addEventListener('click', function(e){
        if(e.target.classList.contains('modal')){
            e.target.style.display = 'none';
        }
    });
});
