document.addEventListener("DOMContentLoaded", function(){

    var memoryMatchModal = document.getElementById('memory-match-modal');
    var memoryMatchModalBtn = document.getElementById('memory-match-modal-button');
    var closeMemoryMatch = document.getElementsByClassName('close-button')[0];

    var sgtModal = document.getElementById('sgt-modal');
    var sgtModalBtn = document.getElementById('sgt-modal-button');
    var closeSgt = document.getElementsByClassName('close-button')[1];
    
    var photoPilgrimModal = document.getElementById('photo-pilgrim-modal');
    var photoPilgrimModalBtn = document.getElementById('photo-pilgrim-modal-button');
    var closePhotoPilgrim = document.getElementsByClassName('close-button')[2]; 

    memoryMatchModalBtn.addEventListener('click', openMemoryMatchModal);
    closeMemoryMatch.addEventListener('click', closeModal);
    sgtModalBtn.addEventListener('click', openSgtModal);
    closeSgt.addEventListener('click', closeModal);
    photoPilgrimModalBtn.addEventListener('click', openPhotoPilgrimModal);
    closePhotoPilgrim.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);


    function openMemoryMatchModal(){
        memoryMatchModal.style.display = 'block';
    }

    function openSgtModal(){
        sgtModal.style.display = 'block';
    }

    function openPhotoPilgrimModal(){
        photoPilgrimModal.style.display = 'block';
    }

    function closeModal(){
        memoryMatchModal.style.display = 'none';
        sgtModal.style.display = 'none';
        photoPilgrimModal.style.display = 'none';
    }

    function outsideClick(e) {
        switch (e.target) {
            case memoryMatchModal:
                memoryMatchModal.style.display = 'none';
                break;
            case sgtModal:
                sgtModal.style.display = 'none';
                break;
            case photoPilgrimModal:
                photoPilgrimModal.style.display = 'none';
                break;
        }
    }
});
