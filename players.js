const nodeList = document.querySelectorAll(".dropdown");
for (let i = 0; i < nodeList.length; i++){
    const element = nodeList[i];
    const targetId = element.getAttribute("data-target");
    const target = document.getElementById(targetId);

    element.addEventListener('click',function(event) {

            target.classList.toggle("collapsed");
            element.querySelector(".icon-up").classList.toggle("hidden");
            element.querySelector(".icon-down").classList.toggle("hidden");
        
    });
}