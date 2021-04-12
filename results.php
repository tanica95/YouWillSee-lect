<?php
$title = "Gallery";
include 'includes/header.php';
?>

<main class="new">

    <h2>Gallery</h2>

    <section class="wrapper-res">
        <?php

        // $dir_name = "assets/gallery/";
        // $images = glob($dir_name . "*.{jpg}", GLOB_BRACE);
        // foreach (array_slice($images, 12) as $img) {
        //     echo '
        //         <div class="img-res">
        //             <img src="' . $img . '">
        //         </div>
        //     ';
        // }
// lasciamo questo perchè così funziona e punto. NON MODIFICARE!!!
        $numImg = 0;
        $dir_name = "assets/gallery/";
        $images = glob($dir_name . "*.jpg");

        foreach ($images as $file)
        {
        $sorted_files[$file]=filemtime($file);
        }
        arsort($sorted_files);
        
        foreach ($sorted_files as $img=>$mtime) {
            echo '
                <div class="img-res">
                    <img src="' . $img . '">
                </div>
            ';
            if (++$numImg == 12) break;
        }

        ?>
    </section>

</main>

<?php
include 'includes/footer.php';
?>