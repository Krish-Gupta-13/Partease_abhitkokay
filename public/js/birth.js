// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
// coll[i].addEventListener("click", function() {
// // this.classList.toggle("active");
// var content = this.nextElementSibling;
// if (content.style.display === "block") {
//   content.style.display = "none";
// } else {
//   content.style.display = "block";
// }
// });
// }
const collapsibles = document.querySelectorAll('.collp');

collapsibles.forEach(collapsible => {
  const header = collapsible.querySelector('.collapsible');
  const content = collapsible.querySelector('.content');
  
  // Initially hide the content section
  content.style.display = 'none';
  
  // Add a click event listener to the header
  header.addEventListener('click', () => {
    // Toggle the content section display property
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    
    // Toggle the "collapsed" class on the header
    header.classList.toggle('collapsed');
  });
  
  // Add the "collapsed" class to the header by default
  header.classList.add('collapsed');
});


// REVEAL

window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0; i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop<windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

// SCROLL TO TOP

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}