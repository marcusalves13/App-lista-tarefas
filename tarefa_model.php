<?php 

class Tarefa{

    private $id;
    private $id_status;
    private $tarefa;
    private $data_cadastro;

    public function __get($atrr){
        return $this->$atrr;
    }

    public function __set($atrr, $value){
        $this->$atrr = $value;
        return $this;
    }
}



?>