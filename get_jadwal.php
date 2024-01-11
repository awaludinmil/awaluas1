<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json; charset=utf-8");

include "config.php";
$data = array();
$query = mysqli_query($kon, "SELECT hari,matkul,dosen FROM jadwal ORDER BY FIELD(hari,'Senin','Selasa','Rabu','Kamis','Jumat','Sabtu')");
while ($rows = mysqli_fetch_array($query)) {
    $data[] = array(
        'hari' => $rows['hari'],
        'matkul' => $rows['matkul'],
        'dosen' => $rows['dosen'],
    );
    
    // $hari = $rows['hari'];
    // $matkul = $rows['matkul'];
    
    // if (!isset($data[$hari])) {
    //     $data[$hari] = array();
    // }
   
    // $data[$hari][] = $matkul;
}

// $result = array();

// foreach ($data as $hari => $matkul) {
//     $result[] = array(
//         'hari' => $hari,
//         'matkul' => $matkul
//     );
// }

// if ($query) {
//     $result = json_encode(array('success' => true, 'result' => $result));
// } else {
//     $result = json_encode(array('success' => false));
// }
// echo $result;

    
if($query){
    $result = json_encode(array('success'=>true, 'result'=>$data));
}else{
    $result = json_encode(array('success'=>false));
}
echo $result;
?>