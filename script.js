const container = document.querySelectorAll(".text-container");
const arrow = document.getElementById("arrow-1");
const hidden = document.getElementsByClassName("hidden");

    
for(let i = 0; i < container.length; i++){
    container[i].addEventListener('click', (event) => {
        const active = document.querySelector('.active');
        const currentContainer = event.currentTarget;
        
        currentContainer.classList.toggle('active');
        active?.classList.remove('active');
    });
}
        

