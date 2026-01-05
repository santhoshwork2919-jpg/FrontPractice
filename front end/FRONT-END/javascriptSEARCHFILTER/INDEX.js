const search=document.getElementById("search");

const items=document.querySelectorAll("#list li");


search.addEventListener("input",e => { 
    //e means event object , e.target means where the event happens , e.target.value means "the curren 
    // text inside the box"
    const q = e.target.value.toLowerCase();
    items.forEach(li=> {li.style.display =
        li.textContent.toLowerCase().includes(q)?"" : "none" });
});