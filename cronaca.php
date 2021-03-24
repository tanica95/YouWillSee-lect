<?php
include 'headNews.php';
?>
<script type="text/javascript" src="lib/node_modules/jquery-3.6.0.min.js"></script>
 <script type="text/javascript">
  if (localStorage.getItem('cronaca') == '0') {
    localStorage.setItem('cronaca', '1')
  }
  $(this).click(function (){
    var cr = Number(localStorage.getItem('Crnews'));
    localStorage.setItem('Crnews', n + 1);
    console.log(n);
  });
      </script>
<h1><?php echo ucfirst($title) ?><h1>

  <?php
  
  $i = 0;
  $num_RSS = 8;
  $url = 'http://newsapi.org/v2/everything?q="crimine"&language=it&apiKey=703a4f88090c47a7b974572dcebfe75e';

include 'bodyNews.php';
