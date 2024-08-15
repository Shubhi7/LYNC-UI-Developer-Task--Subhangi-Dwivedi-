// Toggle Menu
// document.querySelector('.menu-toggle').addEventListener('click', function() {
//     this.classList.toggle('open');
   
// });

// Scroll Smooth for FAQ links
// document.querySelectorAll('.faq-item a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

       // JavaScript to toggle the mobile menu
       document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.querySelector(".menu-toggle");
        const menuIcon = document.querySelector(".menu-icon");
    
        menuToggle.addEventListener("click", function () {
            menuIcon.classList.toggle("active");
        });
    });
    // JavaScript to toggle the mobile menu end
    


    ////////wallet

    document.addEventListener('DOMContentLoaded', () => {
        const copyIcons = document.querySelectorAll('.copy-icon');
        
        copyIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                const text = e.target.previousElementSibling.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    alert('Copied to clipboard');
                });
            });
        });
    });
    
/////////////////wallet end


////gamescreen start
document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for JS functionalities, like toggling auto-tickle or updating the progress bar.
});
////gamescreen end

document.addEventListener('DOMContentLoaded', function () {
    const copyIcons = document.querySelectorAll('.copy-icon');
    copyIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const textToCopy = this.previousElementSibling.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Copied to clipboard!');
            });
        });
    });
});




        // Toggle menu icon for mobile devices
        document.getElementById("menu-icon").addEventListener("click", function () {
            const menuIcon = document.querySelector(".menu-icon");
            menuIcon.classList.toggle("change");
        });

        // Pagination functionality
        document.querySelector(".prev").addEventListener("click", function () {
            // Add logic for previous page
        });

        document.querySelector(".next").addEventListener("click", function () {
            // Add logic for next page
        });

