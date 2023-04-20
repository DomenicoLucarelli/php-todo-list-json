<?php

if(isset($_POST['newEl'])){

    // prendo la stringa presente in todos.json
    $objectJson = file_get_contents('todos.json');

    // la decodifico in un oggetto php
    $objectPhp = json_decode($objectJson);

    // pusho il nuovo elemento che ho fatto inserie all'utente
    $objectPhp[] = $_POST['newEl'];

    // ritrasformo in oggetto json
    $newObjectJson = json_encode($objectPhp);

    // lo salvo nel file json
    file_put_contents('todos.json', $newObjectJson);


}else{

    // prendo la stringa presente in todos.json
    $objectJson = file_get_contents('todos.json');
    
    // la decodifico in un oggetto php
    $objectPhp = json_decode($objectJson);
    
    // dico al browser che questa pagina la deve visualizzare come json
    header('Content-type: application/json');
    
    // stampo l'oggetto una volta che l'ho ritrasformato in oggetto json
    
    echo json_encode($objectPhp);

}
