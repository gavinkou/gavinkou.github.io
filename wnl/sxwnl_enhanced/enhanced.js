window.onload = function() {
    
    if( $("#targetdiv").length != 1 ) {
        // console.log(  $("#targetdiv").length  ) ; 
        // console.log( typeof  jQuery ) ; 
        
        
        $('input[value="确定"]').parent().prepend("<div style='margin:15px 10px;font-size:16px;' >根据朝代/年号选择年份：<div id='targetdiv' style='font-size:18px;padding:8px'></div></div><div style='margin:15px 10px 5px 10px;font-size:16px;'>或者直接输入</div>") ;
       
    $('#targetdiv select').css("font-size",'18px');
    // obb.JNB[0]  起始年
    // obb.JNB[1]  年数
    // obb.JNB[2]  月份
    // obb.JNB[3]  朝代
    // obb.JNB[4]  帝号
    // obb.JNB[5]  帝王姓氏
    // obb.JNB[6]  年号
    var i, j, c, s, dynasty = '' ;
    ob = obb.JNB;
    
    json_data ={"displaytext":"选择朝代","children":[]} ;
    // json_data.children[ json_data.children.length ] ; 
    
    for (i = 0; i < ob.length; i += 7) {
        var NH = { "head_year": ob[i],
                "period": ob[ i + 1 ],
                "begin_month" : ob[ i +2 ], 
                "dynasty": ob[ i + 3 ] ,
                "diHao":  ob[ i + 4 ],
                "name": ob[ i + 5 ],
                "NH": ob[i + 6 ] } ;
                
        if( dynasty = checkExist( json_data.children, NH.dynasty ) ) {
            //返回朝代,
            
            if( diHao = checkExist( dynasty.children, NH.diHao + '-' + NH.name ) ) {
                
                diHao.children.push( 
                    {"value": NH.NH + '元年(公元' + NH.head_year + '年)',
                         "displaytext": NH.NH,
                         "children":[]
                         }
                );
            } else { //新皇帝/帝号
               
                dynasty.children.push(  
                    {
                      "value":NH.diHao + '-' + NH.name,
                      "displaytext":"选择年号",
                      "children": [
                            {"value": NH.NH + '元年(公元' + NH.head_year + '年)',
                             "displaytext": NH.NH,
                             "children":[]
                             }
                          ]
                    }
                );
            }
            
        }else{
           
            json_data.children[ json_data.children.length ] = {
                 "value": NH.dynasty,
                  "displaytext":"选择帝王",
                  "children":[{
                      "value":NH.diHao + '-' + NH.name,
                      "displaytext":"选择年号",
                      "children": [
                            {"value": NH.NH + '元年(公元' + NH.head_year + '年)',
                             "displaytext": NH.NH,
                             "children":[]
                             }
                          ]
                      }]
                  
            }
            
           
            
        }

    }
    
    //检查 children_list 的每个元素，是否某个元素的value是否与value2Check相同
    // 如果有一个相同，则返回该元素对象，否则遍历完之后，返回False。
    function checkExist( children_list, value2Check ) {
        var i ;
        for( i = 0 ; i < children_list.length; i++ ) {
                   if(  children_list[ i ].value == value2Check ) {
                       return children_list[ i ] ;
                   }
        }
        return false ;
    }
    

        
    $('#targetdiv').multiLevelSelect({
		data: json_data,
		// arrangement: 'vertical'
        arrangement: 'horizontal'
	}) ;
     
     $('#targetdiv select').css("font-size", '16px') ;
     
     $('#targetdiv').on('change','select', function() {
          $('#targetdiv select').css("font-size", '16px') ;
     } );
     
    $('#targetdiv').on('change','#targetdiv_mls_2', function() {
       
       var reg = /公元(-?\d+)年/;
       matched = reg.exec( $(this).val() );
       // console.log( matched[ 1 
       if( matched.length > 1 ) {
           $('#Cal_y').val( matched[1] ) ;
           // $('input[value="确定"]').click();
       } 
       


    });
    
         
    }
    

    
    
};