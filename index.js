const btn = document.getElementById('btn');
const socials = document.getElementById('socialList');
const dropdown = document.getElementById('dropdown');


function openDropdown() {
    if (socials.style.display === 'block') {
        socials.style.display = 'none';
        dropdown.style.transform = 'rotate(0deg)';
    } 
    else {
        socials.style.display = 'block';
        
        dropdown.style.transform = 'rotate(180deg)';
    }
}


btn.addEventListener('click', openDropdown);





