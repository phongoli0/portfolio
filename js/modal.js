document.addEventListener("DOMContentLoaded", function(){

    var memoryMatchModal = document.getElementById('memory-match-modal');
    var memoryMatchModalBtn = document.getElementById('memory-match-modal-button');
    var closeMemoryMatch = document.getElementsByClassName('close-button')[0];

    memoryMatchModalBtn.addEventListener('click', openMemoryMatchModal);
    closeMemoryMatch.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);


    function openMemoryMatchModal(){
        memoryMatchModal.style.display = 'block';
    }


    function closeModal(){
        memoryMatchModal.style.display = 'none';
    }

    function outsideClick(e) {
        switch (e.target) {
            case memoryMatchModal:
                memoryMatchModal.style.display = 'none';
                break;
        }
    }
});
