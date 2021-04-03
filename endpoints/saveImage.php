<?php
if(isset($_FILES['image']) && $_FILES['image'] !== null){
    if($_FILES['image']['error'] === 0){  
        // Get the image extension
        $extension = strtolower(end(explode('.', $_FILES['image']['name'])));
        // Assemble the path
        $path = '../media/' . uniqid($_FILES['image']['name']) .  '.' . $extension;
        // Save the file    
        if(move_uploaded_file($_FILES['image']['tmp_name'], $path)){
            echo json_encode(array("ok" => 'Image saved.'));
        } else {
            echo json_encode(array("error" => "Image not saved."));
        }            
    } else {
        echo json_encode(array('error' => 'Upload failed.')); 
    }
} else {
    echo json_encode(array('error' => 'Bad request.'));
};