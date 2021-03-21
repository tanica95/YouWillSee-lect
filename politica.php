<?php
include 'headNews.php';
?>
 <script type="text/javascript">
  if (localStorage.getItem('politica') == '0') {
    localStorage.setItem('politica', '1')
  }
      </script>

<h1><?php echo ucfirst($title) ?><h1>

  <?php

  $i = 0;
  $num_RSS = 8;
  $url = 'https://newsapi.org/v2/everything?q=politica-italiana&language=it&apiKey=703a4f88090c47a7b974572dcebfe75e';

include 'bodyNews.php';
