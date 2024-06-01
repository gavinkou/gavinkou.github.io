var myMonths=[3,0,7,0,0,6,0,0,4,0,0,2,0,7,0,0,5,0,0,3,0,8,0,0,6,0,0,4,0,0,3,0,7,0,0,5,0,0,4,0,8,0,0,6,0,0,4,0,10,0,0,6,0,0,5,0,0,3,0,8,0,0,5,0,0,4,0,0,2,0,7,0,0,5,0,0,4,0,9,0,0,6,0,0,4,0,0,2,0,6,0,0,5,0,0,3],
lunarInfo = [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835],
Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
nStr0 = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
nStr1 = ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
nStr2 = ["初", "十", "廿", "卅", "□"];
function cyclical(a) {
	return Gan[a % 10] + Zhi[a % 12]
}
function monthDays(a, c) {
	return lunarInfo[a - 1900] & 65536 >> c ? 30 : 29
}
function cDay(a) {
	var c;
	switch (a) {
	case 10:
		c = "初十";
		break;
	case 20:
		c = "二十";
		break;
	case 30:
		c = "三十";
		break;
	default:
		c = nStr2[Math.floor(a / 10)];
		c += nStr1[a % 10]
	}
	return c
}

setpSdate.prototype.DaysInMonth = function(year, month) {
	var date = new Date(year, month, 0);
	return date.getDate();
}

setpSdate.prototype.stepsYear=function(){
	var Y=this.selYear,M=this.selMonth,D=this.selDay;
 	Y.get(0).options.length =0;
	for (i = this.minItem; i<= this.maxItem; i++) {
		Y.get(0).options.add(new Option(i+"年",i));
	}
	Y.find("option").eq(this.iYear-this.minItem).attr("selected",true);
}
setpSdate.prototype.stepsMonth=function(){
	var Y=this.selYear,M=this.selMonth,D=this.selDay,sely=Y.get(0).selectedIndex;
 	M.get(0).options.length =0;
 	for (var i = 0; i < 12; i++) {
		M.get(0).options.add(new Option((i+1)+"月",i+1));
	}
	M.find("option").eq(this.iMonth-1).attr("selected",true);
}
setpSdate.prototype.stepsDay=function(){
	var Y=this.selYear,M=this.selMonth,D=this.selDay,sY=Y.get(0).selectedIndex+1936,sM=M.get(0).selectedIndex+1,l=this.DaysInMonth(sY,sM);
 	D.get(0).options.length =0;
	for (k = 1; k <=l ; k++) {
		D.get(0).options.add(new Option(k+"日",k));
	}
	D.find("option").eq(this.iDay-1).attr("selected",true);
}
function setpSdate(selYear,selMonth,selDay,min,max){
	if(!min) min=1900;
	if(!max) max=2030;
	var dt=new Date(),op=this;
	op.selYear = $(selYear);
	op.selMonth = $(selMonth);
	op.selDay = $(selDay);
	op.iYear=dt.getFullYear();
	op.iMonth=dt.getMonth() + 1;
	op.iDay=dt.getDate();
	op.minItem=min;
	op.maxItem=max;
	if (arguments.length == 6) {
		op.iYear=arguments[3];
		op.iMonth=arguments[4];
		op.iDay=arguments[5];
	}
	if(selYear) op.selYear.change(function(){op.stepsMonth()});
	op.selMonth.change(function(){op.stepsDay()});
	if(selYear) op.stepsYear();
	op.stepsMonth();
	op.stepsDay();
}

setpLdate.prototype.steplYear=function(){
	var Y=this.selYear,M=this.selMonth,D=this.selDay;
 	Y.get(0).options.length =0;
	for (i = this.minItem; i<= 2033 ; i++) {
			Y.get(0).options.add(new Option(cyclical(i - 1900 + 36)+"年("+i+")",i));
	}
	Y.find("option").eq(this.iYear-this.minItem).attr("selected",true);
}
setpLdate.prototype.steplMonth=function(){
	var Y=this.selYear,M=this.selMonth,D=this.selDay,sely=Y.get(0).selectedIndex;
 	M.get(0).options.length =0;
 	for (var i = 0; i < 12; i++) {
		M.get(0).options.add(new Option(nStr0[i]+"月",i+1));
 		if(myMonths[sely]!=0&&myMonths[sely]-1==i) M.get(0).options.add(new Option("闰"+nStr0[i]+"月",-(i+1)));
	}
	M.find("option").eq(this.iMonth).attr("selected",true);
}
setpLdate.prototype.steplDay=function(){
	var Y=this.selYear,M=this.selMonth,D=this.selDay,sY=Y.get(0).selectedIndex+1936,sM=M.get(0).selectedIndex+1,l=monthDays(sY,sM);
 	D.get(0).options.length =0;
	for (k = 1; k <=l ; k++) {
		D.get(0).options.add(new Option(cDay(k),k));
	}
	D.find("option").eq(this.iDay-1).attr("selected",true);
}
function setpLdate(selYear,selMonth,selDay){
	var dt=new Date(),op=this;
	op.selYear = $(selYear);
	op.selMonth = $(selMonth);
	op.selDay = $(selDay);
	op.iYear=dt.getFullYear();
	op.iMonth=dt.getMonth() - 1;
	op.iDay=dt.getDate()>0?dt.getDate()-1:1;
	op.minItem=1936;
	if (arguments.length == 6) {
		op.iYear=arguments[3];
		op.iMonth=arguments[4];
		op.iDay=arguments[5];
	}
	op.selYear.change(function(){op.steplMonth()});
	op.selMonth.change(function(){op.steplDay()});
	op.steplYear();
	op.steplMonth();
	op.steplDay();
}

	/**获取当前时间*/
		var thisyear = new Date().getFullYear();    //获取完整的年份(4位,1970-????)
		var thisMonth = (new Date().getMonth() +1);       //获取当前月份(0-11,0代表1月)
		var thisDay = new Date().getDate();        //获取当前日(1-31)
		
		/**
		*	初始化
		*/
		function init(monthID,dayID){
			addMonth(monthID,dayID);//每年都有12个月  所以就直接放到这里
			initDays(monthID,dayID);//初始化天
		}

		
		/**
		*	增加月份
		*/
		function addMonth(monthID,dayID){
			document.getElementById(monthID).options.length = 0;//清空
			var month = document.getElementById(monthID);
			for(var index = 1; index <= 12; index++){
				month.options.add(new Option((index+'月'),index));//第一个是显示的属性（text），第二个是Value（值）
				
				//if(index === thisMonth)//判断次月份是否与当前月份相等
				//	month.options[index - 1].selected = true;
			}
			month.onchange = function(){
				addDays(this,dayID);
			}
		}
		
		/**
		*	初始化天
		*/
		function initDays(monthID,dayID){
			
			/**先要移除天选项的所有选项*/
			document.getElementById(dayID).options.length=0; 
			
			var month = document.getElementById(monthID).value;

			if(month != 2){
			
				var dayNum = getLastDay(thisyear,month);//得到本月的天数
				
				var daySel = document.getElementById(dayID);
				
				for(var day = 1 ; day <= dayNum ; day++){
					daySel.options.add(new Option((day+'日'),day));//第一个是显示的属性（text），第二个是Value（值）
					
					//if(day === thisDay)
					//	daySel.options[day - 1].selected = true;
				}
			}else{
				for(var index = 1; index <= 29; index++){
					daySel.options.add(new Option((index),index));//第一个是显示的属性（text），第二个是Value（值）
				}
			}
		}
		
		/**
		*	增加日期
		*/
		function addDays(obj,dayID){ 
			var daySel = document.getElementById(dayID);
			/**先要移除天选项的所有选项*/
			daySel.options.length=0;
			if(obj.value == 2){
				for(var index = 1; index <= 29; index++){
					daySel.options.add(new Option((index),index));//第一个是显示的属性（text），第二个是Value（值）
				}
			}else{
				var dayNum = getLastDay(thisyear,obj.value);//得到本月的天数
				
				for(var day = 1 ; day <= dayNum ; day++){
					daySel.options.add(new Option((day+'日'),day));//第一个是显示的属性（text），第二个是Value（值）
				}
			}
		}
		/**
		*	获取当月多少天
		*/
		function getLastDay(year,month){        
			var new_year = year;    //取当前的年份        
			var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）        
			if(month>12){   //如果当前大于12月，则年份转到下一年     
				  new_month -=12;        //月份减        
				  new_year++;            //年份增        
			}        
			var new_date = new Date(new_year,new_month,1);                //取当年当月中的第一天        
			return (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期        
		}
		/*判断为公历还是农历的显示于隐藏*/
		function flag(event) {  
       if(event.value == "公历生日") {  
          //获取公历
		 document.getElementById('data') .style.display = 'block'; 
		 document.getElementById("bodz").value = 1;
		 document.getElementById('data2') .style.display = 'none';
		 
		 
		
          
       }  
       if(event.value == "农历生日") {  
          //获取农历  
		   document.getElementById('data') .style.display = 'none';
		  document.getElementById("bodz").value = 2;
		   document.getElementById('data2') .style.display = 'block';
		   
       }  
     }