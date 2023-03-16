//Functions
const form = document.getElementById("inputStudentID");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const studentID = document.getElementById("studentID").value;
  getCert(studentID);
});

function getCert(studentID) {
    const url = `./recognition/${studentID}.pdf`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('No Student ID found');
        }
        window.location.href = url;
      })
      .catch(error => {
        alert(error.message);
      });
  }
  

//Animations
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarhaha").style.top = "0";
  } else {
    document.getElementById("navbarhaha").style.top = "-3.0rem";
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
