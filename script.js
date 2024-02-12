<script>
  var small_menu = document.querySelector(".small_menu");
  var menu = document.querySelector(".menu");
  small_menu.onclick = function(){
      small_menu.classList.toggle('active');
      menu.classList.toggle('small');
  }
</script>

