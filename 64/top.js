
var d1= new Date();
var year = d1.getFullYear();
var month = d1.getMonth() + 1;
var date = d1.getDate();
var datec = d1.getDate();
var week = d1.getDay();

/*获取当前农历*/
function showCal(){
if (year<100) year="19"+year;
return GetLunarDay(year,month,date);
}
		/*获取当前日期*/
function getCurrentDateTime() {
var curDateTime = year;
if (month > 9)
curDateTime = curDateTime + "年" + month;
else
curDateTime = curDateTime + "年0" + month;
if (date > 9)
curDateTime = curDateTime + "月" + date + "日";
else
curDateTime = curDateTime + "月0" + date + "日";
var weekday = "";
if (week == 0)
weekday = "星期日";
else if (week == 1)
weekday = "星期一";
else if (week == 2)
weekday = "星期二";
else if (week == 3)
weekday = "星期三";
else if (week == 4)
weekday = "星期四";
else if (week == 5)
weekday = "星期五";
else if (week == 6)
weekday = "星期六";
curDateTime = curDateTime + " " + weekday;
return curDateTime;
}

 
//定义全局变量
var CalendarData=new Array(100);
var madd=new Array(12);
var tgString="甲乙丙丁戊己庚辛壬癸";
var dzString="子丑寅卯辰巳午未申酉戌亥";
var numString="一二三四五六七八九十";
var monString="正二三四五六七八九十冬腊";
var weekString="日一二三四五六";
var sx="鼠牛虎兔龙蛇马羊猴鸡狗猪";
var cYearnl,cMonthnl,cDaynl,TheDate;
CalendarData = new Array(0xA4B,0x5164B,0x6A5,0x6D4,0x415B5,0x2B6,0x957,0x2092F,0x497,0x60C96,0xD4A,0xEA5,0x50DA9,0x5AD,0x2B6,0x3126E, 0x92E,0x7192D,0xC95,0xD4A,0x61B4A,0xB55,0x56A,0x4155B, 0x25D,0x92D,0x2192B,0xA95,0x71695,0x6CA,0xB55,0x50AB5,0x4DA,0xA5B,0x30A57,0x52B,0x8152A,0xE95,0x6AA,0x615AA,0xAB5,0x4B6,0x414AE,0xA57,0x526,0x31D26,0xD95,0x70B55,0x56A,0x96D,0x5095D,0x4AD,0xA4D,0x41A4D,0xD25,0x81AA5,0xB54,0xB6A,0x612DA,0x95B,0x49B,0x41497,0xA4B,0xA164B, 0x6A5,0x6D4,0x615B4,0xAB6,0x957,0x5092F,0x497,0x64B, 0x30D4A,0xEA5,0x80D65,0x5AC,0xAB6,0x5126D,0x92E,0xC96,0x41A95,0xD4A,0xDA5,0x20B55,0x56A,0x7155B,0x25D,0x92D,0x5192B,0xA95,0xB4A,0x416AA,0xAD5,0x90AB5,0x4BA,0xA5B, 0x60A57,0x52B,0xA93,0x40E95);
madd[0]=0;
madd[1]=31;
madd[2]=59;
madd[3]=90;
madd[4]=120;
madd[5]=151;
madd[6]=181;
madd[7]=212;
madd[8]=243;
madd[9]=273;
madd[10]=304;
madd[11]=334;
 
function GetBit(m,n){
return (m>>n)&1;
}
//农历转换
function e2c(){
TheDate= (arguments.length!=3) ? new Date() : new Date(arguments[0],arguments[1],arguments[2]);
var total,m,n,k;
var isEnd=false;
var tmp=TheDate.getYear();
if(tmp<1900){
tmp+=1900;
}
total=(tmp-1921)*365+Math.floor((tmp-1921)/4)+madd[TheDate.getMonth()]+TheDate.getDate()-38;
 
if(TheDate.getYear()%4==0&&TheDate.getMonth()>1) {
total++;
}
for(m=0;;m++){
k=(CalendarData[m]<0xfff)?11:12;
for(n=k;n>=0;n--){
if(total<=29+GetBit(CalendarData[m],n)){
isEnd=true; break;
}
total=total-29-GetBit(CalendarData[m],n);
}
if(isEnd) break;
}
cYearnl=1921 + m;
cMonthnl=k-n+1;
cDaynl=total;
if(k==12){
if(cMonthnl==Math.floor(CalendarData[m]/0x10000)+1){
cMonthnl=1-cMonthnl;
}
if(cMonthnl>Math.floor(CalendarData[m]/0x10000)+1){
cMonthnl--;
}
}
}
 
function GetcDateString(){
var tmp="";
/*显示农历年：（ 如：甲午(马)年 ）*/
tmp+=tgString.charAt((cYearnl-4)%10);
tmp+=dzString.charAt((cYearnl-4)%12);
tmp+="(";
tmp+=sx.charAt((cYearnl-4)%12);
tmp+=")年 ";
if(cMonthnl<1){
tmp+="(闰)";
tmp+=monString.charAt(-cMonthnl-1);
}else{
tmp+=monString.charAt(cMonthnl-1);
}
tmp+="月";
tmp+=(cDaynl<11)?"初":((cDaynl<20)?"十":((cDaynl<30)?"廿":"三十"));
if (cDaynl%10!=0||cDaynl==10){
tmp+=numString.charAt((cDaynl-1)%10);
}
return tmp;
}
 
function GetLunarDay(solarYear,solarMonth,solarDay){
//solarYear = solarYear<1900?(1900+solarYear):solarYear;
if(solarYear<1921 || solarYear>2020){
return "";
}else{
solarMonth = (parseInt(solarMonth)>0) ? (solarMonth-1) : 11;
e2c(solarYear,solarMonth,solarDay);
return GetcDateString();
}
}



 $(function(){
var date = getCurrentDateTime();
var calendar = showCal();
 document.getElementById("currentDate").innerHTML='公历：'+ date +' 农历：'+calendar+' →<strong><a target="_blank" href="/huangli/'+year+'/'+year+'n'+month+'y'+datec+'r.html"  class="cf0 f14">今日黄历</a></strong>';
});		
	


function getAstrocx()
			{
				var m=$("#month2").val();
				var d=$("#day2").val();
				
				if(m==2&&d>29)
				{
				alert("您输入的日期不正确！");
				}
				else
				{
				alert(m+"月"+d+"日出生的人的星座是："+getAstro(m,d)+"座");
				}
				$('#xzcx').css('display','block');
				
				}			
			   
			 function getAstro(m,d){    
            return "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m*2-(d<"102223444433".charAt(m-1)- -19)*2,2);
             }	
