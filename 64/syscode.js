// JavaScript Document
//syscode统一接口

(function(){
	if(window.syscode){
		return;
	}
	var syscode=window.syscode={};

	syscode.buxian='-1,不限';

	syscode.qingxuanze='-1,请选择';
	
	syscode.qingxuanze2='0,请选择';
	syscode.buqingchu='-2,不清楚';
	//岁	
	syscode.annum =["19,19岁","20,20岁","21,21岁","22,22岁","23,23岁","24,24岁","25,25岁","26,26岁","27,27岁","28,28岁","29,29岁","30,30岁","31,31岁","32,32岁","33,33岁","34,34岁","35,35岁","36,36岁","37,37岁","38,38岁","39,39岁","40,40岁"];
	//年份
	syscode.years=["1996,1996年","1995,1995年","1994,1994年","1993,1993年","1992,1992年","1991,1991年","1990,1990年","1989,1989年","1988,1988年","1987,1987年","1986,1986年","1985,1985年","1984,1984年","1983,1983年","1982,1982年","1981,1981年","1980,1980年","1979,1979年","1978,1978年","1977,1977年","1976,1976年","1975,1975年","1974,1974年","1973,1973年",
				   "1972,1972年","1971,1971年","1970,1970年","1969,1969年","1968,1968年","1967,1967年","1966,1966年","1965,1965年","1964,1964年","1963,1963年","1962,1962年","1961,1961年","1960,1960年","1959,1959年","1958,1958年","1957,1957年","1956,1956年","1955,1955年","1954,1954年","1953,1953年",
				   "1952,1952年","1951,1951年","1950,1950年","1949,1949年","1948,1948年","1947,1947年","1946,1946年","1945,1945年","1944,1944年","1943,1943年","1942,1942年","1941,1941年","1940,1940年","1939,1939年","1938,1938年","1937,1937年","1936,1936年","1935,1935年","1934,1934年","1933,1933年",
				   "1932,1932年","1931,1931年","1930,1930年","1929,1929年","1928,1928年","1927,1927年","1926,1926年","1925,1925年","1924,1924年","1923,1923年","1922,1922年","1921,1921年"];
	//月份
	syscode.months=["1,1月","2,2月","3,3月","4,4月","5,5月","6,6月","7,7月","8,8月","9,9月","10,10月","11,11月","12,12月"];
	//日期
	syscode.days=["1,1日","2,2日","3,3日","4,4日","5,5日","6,6日","7,7日","8,8日","9,9日","10,10日","11,11日","12,12日","13,13日","14,14日","15,15日","16,16日","17,17日","18,18日","19,19日","20,20日","21,21日","22,22日","23,23日","24,24日","25,25日","26,26日","27,27日","28,28日","29,29日","30,30日","31,31日"];
	//出生时辰
	syscode.hours=["1,1","2,2","3,3","4,4","5,5","6,6","7,7","8,8","9,9","10,10","11,11","12,12","13,13","14,14","15,15","16,16","17,17","18,18","19,19","20,20","21,21","22,22","23,23"];
	//预测范围
	syscode.fanwei=["0,选择范围","1,预测财运","2,预测婚姻","3,预测事业","4,预测家宅","5,预测生意","6,预测学业","7,预测疾病","8,预测失物"];
	syscode.qim=["0,双字：刘德华","1,单字：王菲"];
	//性别
	syscode.sex=["0,男士","1,女士"];
	//性别
	syscode.sex1=["0,公子","1,公主"];

	//血型
	syscode.bloodtype=["1,A型","2,B型","3,AB型","4,O型"];
	//血型
	syscode.bloodtypeb=["1,A型男","2,B型男","3,AB型男","4,O型女"];
	//血型
	syscode.bloodtypeg=["1,A型女","2,B型女","3,AB型女","4,O型女"];
	//运势
	syscode.yunshi=["1,今日运势","2,2015年运势"];
	//生肖性格
	syscode.trait=["1,性格"];
	//生肖幸运颜色
	syscode.colour=["1,幸运色"];
	//生肖
	syscode.animal=["1,属鼠","2,属牛","3,属虎","4,属兔","5,属龙","6,属蛇","7,属马","8,属羊","9,属猴","10,属鸡","11,属狗","12,属猪"];
	syscode.animals=["1,属鼠男","2,属牛男","3,属虎男","4,属兔男","5,属龙男","6,属蛇男","7,属马男","8,属羊男","9,属猴男","10,属鸡男","11,属狗男","12,属猪男"];
	syscode.animalsg=["1,属鼠女","2,属牛女","3,属虎女","4,属兔女","5,属龙女","6,属蛇女","7,属马女","8,属羊女","9,属猴女","10,属鸡女","11,属狗女","12,属猪女"];
	//星座
	syscode.sign=["1,白羊座","2,金牛座","3,双子座","4,巨蟹座","5,狮子座","6,处女座","7,天秤座","8,天蝎座","9,射手座","10,魔羯座","11,水瓶座","12,双鱼座"];
	syscode.boy=["1,白羊座男","2,金牛座男","3,双子座男","4,巨蟹座男","5,狮子座男","6,处女座男","7,天秤座男","8,天蝎座男","9,射手座男","10,魔羯座男","11,水瓶座男","12,双鱼座男"];
	syscode.girl=["1,白羊座女","2,金牛座女","3,双子座女","4,巨蟹座女","5,狮子座女","6,处女座女","7,天秤座女","8,天蝎座女","9,射手座女","10,魔羯座女","11,水瓶座女","12,双鱼座女"];
	
	syscode.family =["1,独生子女","2,2","3,3","4,4","5,5","6,6","7,7","8,8"];
	//年龄
	syscode.age =["18,18","19,19","20,20","21,21","22,22","23,23","24,24","25,25","26,26","27,27","28,28","29,29","30,30","31,31","32,32","33,33","34,34","35,35","36,36","37,37","38,38","39,39","40,40","41,41","42,42","43,43","44,44","45,45","46,46","47,47","48,48","49,49","50,50","51,51","52,52","53,53","54,54","55,55","56,56","57,57","58,58","59,59","60,60","61,61","62,62","63,63","64,64","65,65","66,66","67,67","68,68","69,69","70,70","71,71","72,72","73,73","74,74","75,75","76,76","77,77","78,78","79,79","80,80","81,81","82,82","83,83","84,84","85,85","86,86","87,87","88,88","89,89","90,90","91,91","92,92","93,93","94,94","95,95","96,96","97,97","98,98","99,99"];
	//名字形式
	syscode.shape = ['1,双字：刘德华','2,单字:刘单'];
	//面相十二宫
	syscode.zodiac=['1,命宫：两眉之间','2, 兄弟宫：眉毛的位置','3,财帛宫：鼻头准头部位','4,田宅宫：眉毛与眼之间','5,子女宫：眼肚部位','6,奴仆宫：面颊下','7,妻妾宫：眼尾','8,疾厄宫：鼻梁中间','9,迁移宫：额头两侧','10,官禄宫：额头中央','11,福德宫：眉尾上部','12,相貌宫：整个脸部'];
	//面相脸型
	syscode.feature=['1,由字脸形','2, 甲字脸形','3,申字脸形','4,田字脸形','5,同字脸形','6,王字脸形','7,圆字脸形','8,目字脸形','9,用字脸形','10,风字脸形','11,国字脸','12,长型脸','13,扁型脸','14,梯型脸','15,菱型脸','16,倒三角型脸','17,瓜子脸','18,三角型脸','19,圆型脸'];
	//鼻型
	syscode.nose=["1,蒜头鼻","2,塌鼻子","3,朝天鼻","4,悬胆鼻","5,鹰钩鼻","6,希腊鼻","7,罗马鼻","8,孤峰鼻","9,小俏鼻","10,剑峰鼻","11,二奶鼻","12,驼峰鼻","13,婴儿鼻","14,竹节鼻","15,伏犀鼻","16,盛囊鼻","17,狗鼻","18,龙鼻","19,牛鼻","20,截筒鼻","21,鲫鱼鼻","22,虎鼻","23,猴鼻","24,胡羊鼻","25,三弯三曲鼻","26,露脊鼻","27,猩猩鼻","28,偏凹鼻","29,露窍鼻","30,獐鼻","31,猿鼻","32,鹿鼻","33,剑脊鼻","34,狮鼻"];
	//眼型
	syscode.eye=["1,龙眼","2,鸡眼","3,鹰眼","4,猫眼","5,桃花眼","6,丹凤眼","7,阴阳眼","8,杏眼眼","9,卧蚕眼","10,马眼","11,狐眼","12,三白眼","13,凤眼眼","14,三角眼","15,虾眼","16,雁眼","17,鸾眼","18,孔雀眼","19,鹊眼","20,鹅眼","21,雀眼","22,鹭鸶眼","23,熊眼","24,犬眼","25,蛇眼","26,鼠目眼","27,鱼眼","28,龟眼","29,醉眼","30,新月眼","31,猿眼","32,狼眼","33,细眼","34,圆眼","35,圆眼","36,鹤眼","37,猪眼","38,猴眼","39,牛眼","40,羊眼","41,虎眼","42,东乡族","43,象眼","44,鸽眼","45,伏犀眼","46,鹿眼","47,蟹眼","48,燕眼","49,鹧鸪眼"];
	//手纹
	syscode.handprint=["1,婚姻线","2,事业线","3,感情线","4,智慧线","5,上进线","6,障碍线","7,成功线","8,生命线","9,财运线","10,健康线","11,影响线","12,活力线","13,烦恼线","14,纵欲线","15,宠爱线","16,创作纹","17,希望纹","18,努力纹","19,不测纹","20,人缘纹","21,反抗纹","22,小人纹","23,守财纹","24,财富纹","25,贵人纹","26,旅行线","27,变动线","28,手腕线","29,上吊纹","30,手腕线","31,子女线","32,棺材纹","33,浪费纹","34,赌运纹","35,获利纹","36,豪宅纹","37,黑子纹","38,公印文","39,遇贵纹","40,祖庇纹"];
	//婚姻线
	syscode.marriage=["1,婚姻线图解","2,婚姻线男左女右","3,没有婚姻线","4,一条婚姻线","5,两条婚姻线","6,三条婚姻线","7,四条婚姻线","8,很多条婚姻线","9,婚姻线分叉线","10,婚姻线看嫁人时机","11,失败的婚姻线","12,幸福的婚姻线","13,婚姻线中断","14,婚姻线出现短线","15,婚姻线上有岛纹","16,婚姻线末端上升","17,婚姻线弯曲","18,生命线短","19,生命线浅阔","20,生命线太短","21,生命线断开","22,生命线有岛纹","23,两条生命线","24,财富纹","25,贵人纹","26,旅行线","27,变动线","28,手腕线","29,上吊纹","30,手腕线","31,子女线","32,棺材纹","33,浪费纹","34,赌运纹","35,获利纹","36,豪宅纹","37,黑子纹","38,公印文","39,遇贵纹","40,祖庇纹","41,虎眼","42,东乡族","43,象眼","44,鸽眼","45,伏犀眼","46,鹿眼","47,蟹眼","48,燕眼","49,鹧鸪眼"];
	//智慧线算命
	syscode.wisdom=["1,智慧线图解","2,智慧线很短","3,智慧线末端分叉","4,智慧线中间分叉","5,智慧线长","6,智慧线穿过生命线","7,智慧线有乱纹","8,智慧线有十字纹","9,智慧线有岛纹","10,智慧线有球状纹","11,智慧线深明而长","12,智慧线深入月丘","13,智慧线断续","14,智慧线像锁链","15,智慧线在掌中分叉","16,两条智慧线","17,智慧线与生命线分开","18,智慧线接近情感线","19,智慧线横越过手掌","20,智慧线伸至小指下方"];
	//事业线算命
	syscode.cause=["1,事业线图解","2,男人事业线","3,两条事业线","4,事业线曲折","5,事业线中断","6,事业线从手颈线处上升","7,事业线从月丘上升","8,事业线从生命线上升","9,事业线末端细尖","10,事业线线深直","11,事业线浅细","12,事业线浅阔","13,事业线尾端分叉","14,事业线有副纹","15,两条事业线","16,事业线偏斜","17,事业线达智慧线","18,事业线复杂","19,事业线切断","20,事业线如须","21,事业线生命线重叠","22,事业线末端分叉","23,事业线起于感情线","24,事业线起点分两叉","25,事业线止于智慧线","26,事业线止于感情线","27,事业线从智慧线升起","28,事业线明显深刻","29,事业线从手边上伸","30,事业线和生命线相连","31,事业线有支线上伸","32,事业线的中断"];
	//生命线
	syscode.being=["1,生命线图解","2,没有生命线","3,生命线分叉","4,生命线很乱","5,生命线很长","6,有疾病的生命线","7,生命线有上升线","8,事业好的生命线","9,幸福的生命线","10,有贵人的生命线","11,生命线有横线","12,生命线支线进月丘","13,生命线起端有分叉","14,生命线未端有分叉","15,生命线弯曲","16,生命线中断","17,生命线破损","18,生命线短","19,生命线浅阔","20,生命线太短","21,生命线断开","22,生命线有岛纹","23,两条生命线"];
		//感情线算命
	syscode.feeling=["1,感情线图解","2,没有感情线","3,感情线上有痣","4,感情线上有三角纹","5,两条感情线","6,感情线短","7,感情线有岛纹","8,感情线分岔","9,多条感情线","10,感情线与智慧线交叉","11,感情线与智慧线重叠","12,感情线和智慧线相交","13,感情线分叉到智慧线","14,感情线止于无名指","15,感情线止于食指","16,感情线有十字纹","17,感情线有横线","18,感情线上有岛纹","19,感情线呈链状","20,感情线分三叉","21,感情线断裂","22,感情线看情感","23,感情线复杂","24,感情线很弯","25,感情线止于指缝"];
	//方向
		syscode.direction=["-1,未知","1,南","2,北","3,西","4,东","5,东南","6,东北","7,西南","8,西北"];
	
	//生成下拉框
	/*
	* classStyle 样式
	* id select的id名称
	* name select的name名称
	* realValue 当前选项，用于数据回填
	* arrayObj 对应的数组
	* title 下拉框标题
	* event 选择框改变事件
	* isDisabled 是否禁用
	*/
	syscode.selectHtml=function(classStyle,id,name,realValue,defaultValue,options,title,event,isDisabled){
		if(event){
			if(isDisabled){
				var html='<select class="'+classStyle+'" id="'+id+'" name="'+name+'" onchange="'+event+'(this.value);return false;" disabled="disabled">';
			}else{
				var html='<select class="'+classStyle+'" id="'+id+'" name="'+name+'" onchange="'+event+'(this.value);return false;">';
			}
		}else{
			if(isDisabled){
				var html='<select class="'+classStyle+'" id="'+id+'" name="'+name+'" disabled="disabled">';
			}else{
				var html='<select class="'+classStyle+'" id="'+id+'" name="'+name+'">';
			}
			
		}
		if(title){
			var selected = '';
			var option = title.split(",");
			if(realValue!=null&&realValue!=''&&realValue==option[0]){
				selected = ' selected="selected"';
			}else if(defaultValue!=null&&defaultValue!=''&&defaultValue==option[0]){
					selected = ' selected="selected"';
			}
			html = html + '<option value="'+option[0]+'"'+selected+'>'+option[1]+'</option>';
		}
		for(var i=0;i<options.length;i++){
			var selected = '';
			var option = options[i].split(",");
			if(realValue!=null&&realValue!=''){
				if(realValue==option[0]){
					selected = ' selected="selected"';
				}
			}else if(defaultValue!=null&&defaultValue!=''&&defaultValue==option[0]){
					selected = ' selected="selected"';
			}
			html = html + '<option value="'+option[0]+'"'+selected+'>'+option[1]+'</option>';
		}
		html = html + '</select>';
		return html;
	};

	syscode.select=function(classStyle,id,name,realValue,defaultValue,options,title,event,isDisabled){
		document.write(syscode.selectHtml(classStyle,id,name,realValue,defaultValue,options,title,event,isDisabled));
	};

	/*添加下拉列表选项
	* text 显示的文本内容
	* value 选项值
	* obj 列表框
	*/
	syscode.addOption=function(text,value,select){
		var option = document.createElement("option");
		option.appendChild(document.createTextNode(text));
		option.setAttribute("value",value);
		select.appendChild(option);
	};

	//生成年份下拉框
	syscode.yearsSelect=function(classStyle,id,name,realValue){
		var html = '<select  class="'+classStyle+'" id="'+id+'" name="'+name+'">';
		html = html + '<option value="-1">请选择</option>';
		for(var i=0;i<syscode.years.length;i++){
			var selected = '';
			if(realValue!=null&&realValue!=''&&realValue==syscode.years[i]){
				selected = 'selected="selected"';
			}
			html = html + '<option value="'+syscode.years[i]+'" '+selected+'>'+syscode.years[i]+'</option>';
		}
		html = html + '</select>';
		document.write(html);
	}

	//生成月份下拉框
	syscode.monthsSelect=function(classStyle,id,name,realValue){
		var html = '<select  class="'+classStyle+'" id="'+id+'" name="'+name+'">';
		html = html + '<option value="-1">请选择</option>';
		for(var i=0;i<syscode.months.length;i++){
			var selected = '';
			if(realValue!=null&&realValue!=''&&realValue==syscode.months[i]){
				selected = 'selected="selected"';
			}
			html = html + '<option value="'+syscode.months[i]+'" '+selected+'>'+syscode.months[i]+'</option>';
		}
		html = html + '</select>';
		document.write(html);
	}
	//生成日期day下拉框
	syscode.daysSelect=function(classStyle,id,name,realValue){
		var html = '<select  class="'+classStyle+'" id="'+id+'" name="'+name+'">';
		html = html + '<option value="-1">请选择</option>';
		for(var i=0;i<syscode.days.length;i++){
			var selected = '';
			if(realValue!=null&&realValue!=''&&realValue==syscode.days[i]){
				selected = 'selected="selected"';
			}
			html = html + '<option value="'+syscode.days[i]+'" '+selected+'>'+syscode.days[i]+'</option>';
		}
		html = html + '</select>';
		document.write(html);
	}

	syscode.uncheckBuxian=function(thiz,buxian) {
		if(thiz.checked){
			buxian.checked=false;
		}
	}

	syscode.uncheckBuxian2=function(thiz,buxian) {
		if(thiz.checked){
			buxian.checked=false;
		}
		var oo=$(thiz);
		var id=oo.attr('id');
		var temp = new Array();
		temp = id.split("_");		
		var len = $("input[name="+temp[0]+"]:checked").size();
		if(len==0){
			$('#personal_'+temp[0]).removeClass('darrow current').addClass('darrow');
			document.getElementById(temp[0]+"_-1").checked="checked";
		}
	}

	syscode.checkBuxian=function(buxian,values) {
		if(buxian.checked){
			for(var j = 0; j<values.length;j++) {
				if(values.eq(j).attr('id')!=buxian.id){
					values.eq(j).removeAttr('checked');
				}
			}
		}
	}

	syscode.checkboxHtml=function(id,name,realValue,arrayObj,wrapperTagName,title){
		wrapperTagName=wrapperTagName||'li';
		var html = '';
		for(var i=0;i<arrayObj.length;i++){
			var selected = '';
			var valueArray = arrayObj[i].split(",");
			if(realValue!=null&&realValue!=''&&realValue.indexOf(","+valueArray[0]+",")>-1){
				selected = 'checked="checked"';
			}
			var onclick='';
			if(title){
				var titleArray=title.split(",");
				onclick="syscode.uncheckBuxian(this,document.getElementById('"+id+"_"+titleArray[0]+"'))";
			}
			html = html + '<'+wrapperTagName+'><input id="'+id+'_'+valueArray[0]+'" name="'+name+'" type="checkbox" value="'+valueArray[0]+'" onclick="'+onclick+'" '+selected+'/><label for="'+id+'_'+valueArray[0]+'">'+valueArray[1]+'</label></'+wrapperTagName+'>';
		}
		if(title){
			var valueArray=title.split(",");
			html+='<'+wrapperTagName+'><input id="'+id+'_'+valueArray[0]+'" name="'+name+'" type="checkbox" value="'+valueArray[0]+'" onclick="syscode.checkBuxian(this,$(\'input[name='+name+']\'));" /><label for="'+id+'_'+valueArray[0]+'">'+valueArray[1]+'</label></'+wrapperTagName+'>';
		}
		return html;
	}
	syscode.checkboxHtmlInZQ=function(id,name,realValue,arrayObj,wrapperTagName,wrapperTagClassName,className,title){
		wrapperTagName=wrapperTagName||'li';
		var html = '';
		for(var i=0;i<arrayObj.length;i++){
			var selected = '';
			var valueArray = arrayObj[i].split(",");
			if(realValue!=null&&realValue!=''&&realValue.indexOf(","+valueArray[0]+",")>-1){
				selected = 'checked="checked"';
			}
			var onclick='';
			if(title){
				var titleArray=title.split(",");
				onclick="syscode.uncheckBuxian(this,document.getElementById('"+id+"_"+titleArray[0]+"'))";
			}
			html = html + '<'+wrapperTagName+' class="'+wrapperTagClassName+'"><input class="'+className+'" id="'+id+'_'+valueArray[0]+'" name="'+name+'" type="checkbox" value="'+valueArray[0]+'" onclick="'+onclick+'" '+selected+'/>'+valueArray[1]+'</'+wrapperTagName+'>';
		}
		if(title){
			var valueArray=title.split(",");
			html+='<'+wrapperTagName+' class="'+wrapperTagClassName+'"><input class="'+className+'" '+id+'_'+valueArray[0]+'" name="'+name+'" type="checkbox" value="'+valueArray[0]+'" onclick="syscode.checkBuxian(this,$(\'input[name='+name+']\'));" />'+valueArray[1]+'</'+wrapperTagName+'>';
		}
		return html;
	}


	syscode.checkBuxian2=function(buxian,values,o) {
		if(buxian.checked){
			for(var j = 0; j<values.length;j++) {
				if(values.eq(j).attr('id')!=buxian.id){
					values.eq(j).removeAttr('checked');
				}
			}
			$('#'+o+"_title").remove();
			$('#personal_'+o).removeClass('current darrow').addClass('darrow');
		}
	}

	syscode.checkboxHtml2=function(id,name,realValue,arrayObj,wrapperTagName,title,itemname){
		wrapperTagName=wrapperTagName||'li';
		var html = '';
		var flag = false;
		for(var i=0;i<arrayObj.length;i++){
			var selected = '';
			var valueArray = arrayObj[i].split(",");
				if((realValue!=null&&realValue!=''&&realValue.indexOf(","+valueArray[0]+",")>-1)){
					selected = 'checked="checked"';
				}
			var onclick='';
			if(title){
				var titleArray=title.split(",");
				onclick="syscode.uncheckBuxian2(this,document.getElementById('"+id+"_"+titleArray[0]+"'))";
			}
			html = html + '<'+wrapperTagName+'><input id="'+id+'_'+valueArray[0]+'" name="'+name+'" type="checkbox" value="'+valueArray[0]+'" onclick="'+onclick+';addCondition(\''+itemname+'\',\''+valueArray[0]+'\',\''+valueArray[1]+'\');" '+selected+'/><label for="'+id+'_'+valueArray[0]+'">'+valueArray[1]+'</label></'+wrapperTagName+'>';
		}
		if(title){
			var valueArray=title.split(",");
			html+='<'+wrapperTagName+'><input id="'+id+'_'+valueArray[0]+'" name="'+name+'" type="checkbox" value="'+valueArray[0]+'" onclick="syscode.checkBuxian2(this,$(\'input[name='+name+']\'),\''+itemname+'\');" '+selected+' /><label for="'+id+'_'+valueArray[0]+'">'+valueArray[1]+'</label></'+wrapperTagName+'>';
		}
		return html;
	}	

	//生成checkbox
	/*
	* id select的id名称
	* name select的name名称
	* realValue 当前选项
	* arrayObj 对应的数组
	*/
	syscode.checkbox=function(id,name,realValue,arrayObj,wrapperTagName,title){
		document.write(syscode.checkboxHtml(id,name,realValue,arrayObj,wrapperTagName,title));
	}
	
	syscode.checkbox2=function(id,name,realValue,arrayObj,wrapperTagName,title,itemname){
		document.write(syscode.checkboxHtml2(id,name,realValue,arrayObj,wrapperTagName,title,itemname));
	}
	syscode.occupationSelectHtml=function(classStyle, id, name, occupationId, realValue, defaultValue, title) {
		var html = '<select class="'+classStyle+'" id="'+id+'" name="'+name+'" onchange=\'syscode.changeOccupation2Select(this.value,"'+occupationId+'","'+title+'");\'>';
		if(title){
			var selected = '';
			var option = title.split(",");
			if(realValue&&realValue==option[0]){
				selected = ' selected="selected"';
			}
			html = html + '<option value="'+option[0]+'"'+selected+'>'+option[1]+'</option>';
		}
		for (var i = 0; i < syscode.occupation.length; i++) {
			var selected = "";
			var option = syscode.occupation[i].split(",");
			if(realValue && realValue != '-1') {
				if (realValue-realValue%100 == option[0]) {
						selected = ' selected="selected"';
				}
			} else if (defaultValue && defaultValue != "-1") {
				if (defaultValue-defaultValue%100 == option[0]) {
					selected = ' selected="selected"';
				}
			}
			html = html + '<option value="' + option[0] + '"'+selected+'>' + option[1] + '</option>';
		}
		html = html + "</select>";
		return html;
	};

	syscode.occupationSelect=function(classStyle, id, name, occupationId, realValue, defaultValue, title){
		document.write(occupationSelectHtml(classStyle, id, name, occupationId, realValue, defaultValue, title));
	}

	syscode.changeOccupation2Select=function(value,occupation2Id,title){
		if(!occupation2Id){
			return;
		}
		var occupation2 = document.getElementById(occupation2Id);
		if(!occupation2){
			return;
		}
		if(value==-1){
			if(occupation2.options[0].value==-1||occupation2.options[0].value%100==0){
				occupation2.options.length=1;
				occupation2.options[0].value='-1';
			}else{
				occupation2.options.length=1;
				occupation2.options[0].value='-1';
				occupation2.options[0].value='';
			}
			return;
		}
		if(occupation2.options[0].value==-1||occupation2.options[0].value%100==0){
			occupation2.options.length=1;
			occupation2.options[0].value=value-value%100;
		}else{
			occupation2.options.length=0;
		}
		for (var i = 0; i < syscode.occupation2.length; i++) {
			var option = syscode.occupation2[i].split(",");
			if (option[0]-option[0]%100 == value) {
				syscode.addOption(option[1],option[0],occupation2);
			}
		}
	}

	syscode.occupation2SelectHtml=function(classStyle,id,name,realValue,defaultValue,title){
		var html = '<select class="'+classStyle+'" id="'+id+'" name="'+name+'">';
		if(title){
			var selected = '';
			var option = title.split(",");
			if(realValue&&realValue==option[0]){
				selected = ' selected="selected"';
			}else if(realValue){
				option[0]=realValue-realValue%100;
			}
			html = html + '<option value="'+option[0]+'"'+selected+'>'+option[1]+'</option>';
		}
		if(!realValue||realValue == '-1'){
			html = html + '</select>';
			return html;
		}
		for(var i=0;i<syscode.occupation2.length;i++){
			var selected = '';
			var option = syscode.occupation2[i].split(",");
			if(realValue&&realValue!='-1'){
				if(realValue==option[0]){
					selected = ' selected="selected"';
				}
				if(option[0]-option[0]%100==realValue-realValue%100){
					html += '<option value="'+option[0]+'"'+selected+'>'+option[1]+'</option>';
				}
			}else if(defaultValue&&defaultValue!='-1'){
				if(realValue==option[0]){
					selected = ' selected="selected"';
				}
				if(option[0]-option[0]%100==realValue-realValue%100){
					html += '<option value="'+option[0]+'"'+selected+'>'+option[1]+'</option>';
				}
			}
		}
		html = html + '</select>';
		return html;
	};

	syscode.occupation2Select=function(classStyle,id,name,realValue,defaultValue,title){
		document.write(occupation2SelectHtml(classStyle,id,name,realValue,defaultValue,title));
	}

	if ( typeof module === "object" && module && typeof module.exports === "object" ) {
   		module.exports = syscode;
	} else {
	    if ( typeof define === "function" ) {
	        define(function () { return syscode; } );
	    }
	}
   // if ( typeof define === "function" && define.amd) {
	//	define(function () { return syscode; } );
	//}

}());
