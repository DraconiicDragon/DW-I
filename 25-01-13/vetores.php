<?php

//Vetor com array()
$vetor = array(32, 54.3, 65, "Nome", 87);
for($i = 0; $i < count($vetor); $i++) {
    echo $vetor[$i], '<br>';
}

//Foreach simples
$vetor = array(10 => 32, 54.3, 65, 20 => "Nome", 87);
foreach ($vetor as $i) {
    echo $i, '<br>';
}

//Foreach com indice
$vetor = array(10 => 32, 54.3, 65, 20 => "Nome", 87);
foreach ($vetor as $chave => $valor) {
    echo $chave, ': ', $valor, '<br>';
}

//Vetor com chaves textuais (Map C++)
$vetor = array(
    'nome' => 'Nome',
    'sobrenome' => 'Sobrenome',
    'idade' => 30
);
foreach ($vetor as $chave => $valor) {
    echo $chave, ': ', $valor, '<br>';
}

//Vetor com colchetes
$vetor = [
    'nome' => 'Nome',
    'sobrenome' => 'Sobrenome',
    'idade' => 30
];

//Vetor por demanda
$v2['nome'] = 'Nome';
$v2['idade'] = 80;
$v2[] = 2.4;
echo $v2[0];