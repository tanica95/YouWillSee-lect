<?php
if(isset($_FILES['image'])){
    if($_FILES['image']['error'] === 0){  
        // Get the file name and extension
        $name = explode('.', $_FILES['image']['name'])[0] . '_';
        $extension = strtolower(end(explode('.', $_FILES['image']['name'])));
        // Assemble the path
        $path = '../assets/gallery/' . uniqid($name) .  '.' . $extension;
        // Save the file    
        if(move_uploaded_file($_FILES['image']['tmp_name'], $path)){
            echo json_encode(array("ok" => 'Image saved.'));
        } else {
            echo json_encode(array("error" => array($_FILES['image']['tmp_name'], $path, $extension)));
        }            
    } else {
        echo json_encode(array('error' => 'Upload failed.')); 
    }
} else {
    echo json_encode(array('error' => 'Bad request.'));
};