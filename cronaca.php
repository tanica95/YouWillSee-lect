<?php
include 'headNews.php';
?>
 <script type="text/javascript">
  if (sessionStorage.getItem('cronaca') == '0') {
    sessionStorage.setItem('cronaca', '1')
  }
      </script>
<h1><?php echo ucfirst($title) ?><h1>

  <?php
  
  $i = 0;
  $num_RSS = 8;
  $url = 'http://newsapi.org/v2/everything?q="crimine"&language=it&apiKey=703a4f88090c47a7b974572dcebfe75e';

include 'bodyNews.php';
