// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
$(document).ready(function() {

    const checkbox = document.getElementById('showContent');
const content = document.getElementById('content');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    content.style.display = 'table';
  } else {
    content.style.display = 'none';
  }
  this.tabIndexshowContent.style.display = 'table';
});

// functions go here

});