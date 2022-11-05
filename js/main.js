var a = document.getElementById("loader");

window.onload = function() {
    setTimeout(function(){
        hidden();
    },800);
}

function hidden(){
    a.classList.add("hidden");
}