<?
header("content-type:image/png");
$text=$_GET['words'];
$fontsize=24;
//$text="你好好，<br>我但分萨芬hi师大范德萨<br>发的萨芬神打辐射大辐射大";
$text=str_replace("，","，<br>",$text);
$text=str_replace("。","。<br>",$text);
$text=str_replace("！","！<br>",$text);
$text=iconv("GB2312","UTF-8",$text);
$array_text=explode('<br>',$text);
$all_num=count($array_text);
$pic_height=35*($all_num+1);
$fontfamily="font/simhei.ttf";
$img=ImageCreate(640,$pic_height); 
$bgcolor=ImageColorAllocate($img,0,0,0); 
$fontcolor=ImageColorAllocate($img,255,0,0); 
$bgcolortrans=ImageColorTransparent($img,$bgcolor);
for ($i=0;$i<count($array_text);$i++) { 
   imagettftext($img, $fontsize, 0, 0, $fontsize*(1+$i)+12*(1+$i), $fontcolor, $fontfamily, $array_text[$i]);
}
ImagePng($img); 
ImageDestroy($img); 
?> 

