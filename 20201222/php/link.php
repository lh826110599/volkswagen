<?php
header("Content-Type: text/html; charset=utf-8");
// $dbhost = '127.0.0.1';  // mysql服务器主机地址
// $dbuser = 'root';            // mysql用户名
// $dbpass = '';          // mysql用户名密码
// $dbname = "test";
$dbhost = 'shdbrw.db2.sohuno.com';  // mysql服务器主机地址
$dbuser = 'shdbadd';            // mysql用户名
$dbpass = 'shdbadd0712';          // mysql用户名密码
$dbname = "shdb";
@$NAME = $_GET["NAME"];
@$MOBILE = $_GET["MOBILE"];

@$PROVINCE = $_GET["PROVINCE"];
@$CITY = $_GET["CITY"];
@$DEALER_CODE = $_GET["DEALER_CODE"];
@$carType = $_GET["carType"];

@$ipaddress = $_GET["ipaddress"];
@$location = $_GET["location"];
@$projectType ="tb_Volkswagen_20201222";
date_default_timezone_set('PRC');
$current_time=date("Y-m-d H:i:s",time());//当前时间
// $ip=getIp();//客户端ip
// $ip_transform=getIpSource($ip);//获取IP地址来源地



$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
// if(! $conn )
// {
//     die('Could not connect: ' . mysqli_error());
// }
// echo '数据库连接成功！';

//  $sql = "INSERT INTO tb_lynk_20201014 (UNIQUEID,LASTNAME,FIRSTNAME,GENDER,MOBILE,PROVINCE,CITY,DEALERCODE,EXPECTORDERDATETYPE,CAMPAIGNNAME,NewMEDIANAME,currentTime,projectType)
//  VALUES ('$UNIQUE_ID','$LAST_NAME','$FIRST_NAME','$GENDER','$MOBILE',,'$PROVINCE','$CITY','$DEALER_CODE','$EXPECT_ORDER_DATE_TYPE','$CAMPAIGN_NAME','$MEDIA_NAME','$current_time','$projectType')";

$result = $conn->query("SELECT MOBILE from tb_Volkswagen_20201222 WHERE MOBILE='$MOBILE'");
$row = mysqli_fetch_array($result);
$r=count($row);


if($r>=1){
    echo json_encode(array(
        'status' => '404',
        'msg' => '手机号已存在',

    ));
    return;
}

$sql = "INSERT INTO tb_Volkswagen_20201222 (cusNAME,MOBILE,PROVINCE,CITY,DEALER_CODE,currentTime,projectType,ipaddress,iplocation)
 VALUES ('$NAME','$MOBILE','$PROVINCE','$CITY','$DEALER_CODE','$current_time','$projectType','$ipaddress','$location')";

if (mysqli_query($conn, $sql)) {
    // echo "新记录插入成功";
    echo json_encode(array(
        'status' => '200',
        'msg' => '新记录插入成功',

    ));
} else {
    // echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    echo json_encode(array(
        'status' => '404',
        'msg' => '新记录插入失败',

    ));
}
 

// $sql1 = "SELECT collected FROM tb_moshadong";
// $result = $conn->query($sql1);
 
// if ($result->num_rows > 0) {
//     // 输出数据
        
//     while($row = $result->fetch_assoc()) {
//         echo "collected: " . $row["collected"];
//     }
// } else {
//     echo "0 结果";
// }


mysqli_close($conn);
// mysqli_close($conn);
?>