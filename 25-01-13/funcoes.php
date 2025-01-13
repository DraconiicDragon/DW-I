<?php
function funcao($param) {
    echo '<h1>', $param, '</h1>';
}

funcao('Texto');

$f2 = function () {
    echo 'Função sem nome <br>';
};
$f2();

$f3 = fn($x) => $x ** 2;
echo $f3(3);