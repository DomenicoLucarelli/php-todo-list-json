<?php

// prendo la stringa presente in todos.json
$objectJson = file_get_contents('todos.json');

// la decodifico in un oggetto php
$objectPhp = json_decode($objectJson);

// dico al browser che questa pagina la deve visualizzare come json
header('Content-type: application/json');

// stampo l'oggetto una volta che l'ho ritrasformato in oggetto json

echo json_encode($objectPhp);
