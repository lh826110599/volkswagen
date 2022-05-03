<?php
/**

 * 发送post请求

 * @param string $url 请求地址

 * @param array $post_data post键值对数据

 * @return string

 */
header("Content-Type: text/html; charset=UTF-8");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT,DELETE');
// function send_post($url, $post_data) {

  

//     $postdata = http_build_query($post_data);
  
//     $options = array(
  
//       'http' => array(
  
//         'method' => 'POST',
  
//         'header' => 'Content-type:application/x-www-form-urlencoded',
  
//         'content' => $postdata,
  
//         'timeout' => 15 * 60 // 超时时间（单位:s）
  
//       )
  
//     );
  
//     $context = stream_context_create($options);
  
//     $result = file_get_contents($url, false, $context);

//     echo $result;
  
//   }
  
    
  
//   //使用方法
  
//   $post_data = array(
//     "USERNAME" => $_POST['USERNAME'],
//     "PASSWORD" => $_POST['PASSWORD'],
//         "TIMESTAMP" => $_POST['TIMESTAMP'],
//         "SOURCE" => $_POST['SOURCE'],
//         "CONTENT" => http_build_query($_POST['CONTENT'])
//   );
//   send_post('https://lincoln.iooo.net/media_test/core.php/api/apply/media', $post_data);


// function http_post_json($url, $jsonStr)
// {
//     $ch = curl_init();
//     curl_setopt($ch, CURLOPT_POST, 1);
//     curl_setopt($ch, CURLOPT_URL, $url);
//     curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonStr);
//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//     curl_setopt($ch, CURLOPT_HTTPHEADER, array(
//             'Content-Type: application/json; charset=utf-8',
//             'Content-Length: ' . strlen($jsonStr)
//         )
//     );
//     $response = curl_exec($ch);
//     $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
//     curl_close($ch);
 
//     return array($httpCode, $response);
// }
// // $current_time=time();
// $a="123456";
// $b=time();
// $c= md5($a.$b);

// function udate($format = 'u', $utimestamp = null)
// {
//     if (is_null($utimestamp)){
//         $utimestamp = microtime(true);
//     }
//     $timestamp = floor($utimestamp);
//     $milliseconds = round(($utimestamp - $timestamp) * 10000);//改这里的数值控制毫秒位数
//     return date(preg_replace('`(?<!\\\\)u`', $milliseconds, $format), $timestamp);
// }
// echo udate('YmdHisu');
// echo '<pre/>';
// echo $c;
// $url      = 'https://lincoln.iooo.net/media/core.php/api/apply/media';
// $json_str = '{  "USERNAME": "sohu",  "PASSWORD": "4f3ce22c3447f16a6cd49c3b7bce37a5Array",  "TIMESTAMP": "202010121126086356",  "SOURCE": "wxpyq",  "CONTENT": [    {      "UNIQUE_ID": "85290364",      "LAST_NAME": "Chen",      "FIRST_NAME": "",      "GENDER": "",      "MOBILE": "13916099943",      "PROVINCE": "$ProvinceCode",      "CITY": "$CityCode",      "DISTRICT": "",      "DEALER_CODE": "$DealerCode",      "MODEL": "",      "EXPECT_ORDER_DATE_TYPE": "$DateCode",      "CAMPAIGN_NAME": "2020_APR_TENCENT NEWS_Corsair Launch",      "MEDIA_NAME": "TENCENT NEWS",      "IS_SEND_WECHAT": "0"    }  ]}';
// $res      = http_post_json($url, $json_str, 60);
// print_r($res);


function http_post_json($url, $jsonStr)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonStr);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json; charset=utf-8',
            'Content-Length: ' . strlen($jsonStr)
        )
    );
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
 
    return array($httpCode, $response);
}
$new_content = [];
for ($i = 12300000001; $i <= 12300000001; $i++) {
    $new_content[] = [
        'UNIQUE_ID'     => uniqid(),
        'FIRST_NAME'    => $_POST['FIRST_NAME'],
        'LAST_NAME'     => $_POST['LAST_NAME'],
        'GENDER'        => $_POST['GENDER'],
        'MOBILE'        => $_POST['MOBILE'],
        'PROVINCE'      => $_POST['PROVINCE'],
        'CITY'          => $_POST['CITY'],
        'DEALER_CODE'   => $_POST['DEALER_CODE'],
        'EXPECT_ORDER_DATE_TYPE'         => $_POST['EXPECT_ORDER_DATE_TYPE'],
        'CAMPAIGN_NAME' => $_POST['CAMPAIGN_NAME'],
        'MEDIA_NAME'    => $_POST['MEDIA_NAME']
    ];
}

//try {
$utimestamp   = microtime(true);
$timestamp    = floor($utimestamp);
$milliseconds = round(($utimestamp - $timestamp) * 10000); //改这里的数值控制毫秒位数
$t            = date('YmdHis', $timestamp);
$t            .= '' . $milliseconds;
$url          = 'https://lincoln.iooo.net/media/core.php/api/apply/media';


$json_str = json_encode([
    'USERNAME'  => 'sohu',
    'PASSWORD'  => strtolower(md5('D93j2DSFj938jsf9' . $t)),
    'TIMESTAMP' => $t,
    'SOURCE'    => 'sohu',
    'CONTENT'   => $new_content
]);
//echo $json_str . '<br><br>';
$res = http_post_json($url, $json_str);
print_r(json_encode($res));
?> 