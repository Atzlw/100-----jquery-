
;(function(){
    var aLi = $('.search .lanmu li');
    var oText = $('.search').find('.inp .input');
    var arrText =[
           '例如：多久啊可是大事看见大家',
           '例如：打发打发手动阀手动阀手动阀',
           '例如：会让她会突然回头任何人',
           '例如：发士大夫士大夫十分',
           '例如：今天据说他和他哥'
    ];
    var iCur = 0;
    oText.val(arrText [iCur]);

    aLi.each(function(index){
        $(this).click(function(){
            iCur =index;
            oText.val(arrText[iCur]);
            aLi.attr('class','gradient');
            $(this).attr('class','active')
        })
    });

    oText.focus(function(){

        if($(this).val()==arrText[iCur]){
            $(this).val('');
        }

    });
    oText.blur(function(){
        if($(this).val()==''){
            $(this).val(arrText[iCur])
        }

    })

})();



//文字滑动

;(function(){
    var $oheadline = $('.headline');
    var $oUl = $oheadline.find('ul');
    var $btnup = $('.button .btnup');
    var $btndown = $('.button .btndown');
    var tid = null;
    var arrdata=[
        {'name':'author','time':'100','title':'奥术大师大所多','url':'http://www.e6at.com/123'},
        {'name':'author','time':'100','title':'让双方各按四个色','url':'http://www.56eat.com/123'},
        {'name':'author','time':'100','title':'三个傻瓜社工','url':'http://www.e56at.com/123'},
        {'name':'author','time':'100','title':'确认过后确认提供后勤人','url':'http://www.ea45.com/123'},
        {'name':'author','time':'100','title':'啊然后然后刚','url':'http://www.eat456.com/123'},
      

    ];
    var str='';
    var iH=0;
    var iNow = 0;
    for(var i=0;i<arrdata.length;i++){
        str +='<li><a href="'+arrdata[i].url+'"><strong>'+arrdata[i].name+'</strong><span>'+
            arrdata[i].time + '分前</span>写了一个新文章 '+ arrdata[i].title+'...</a></li>';
    }

    $oUl.html(str);
    iH = $oUl.find('li').height();

    $btnup.click(function(){
        doMove(-1)
    });
    $btndown.click(function(){
        doMove(1);
    });

    $oheadline .hover(function(){
        clearInterval(tid);
    },function(){
        autoPlay()
    });
    autoPlay();
    function autoPlay(){
        tid = setInterval(function(){
            doMove(-1);
        },3000)
    }

    function doMove(index){

        iNow +=index;


        if(Math.abs(iNow)>arrdata.length-1)iNow = 0;
        if(iNow>0)iNow=-(arrdata.length-1);

        $oUl.animate({'top':iH*iNow},2000)

    }



})();

//菜单切换
;(function(){
     tab($('.hotshop .dianpu ul'),$('.jiudian ul li'),'click');
     tab($('.coupons .carte ul'),$('.content2 ul '),'click');
     tab($('.advice .admenu ul'),$('.adcontent ul '),'click');
     tab($('.subway .map ul'),$('.subway1 ul '),'click');

      function tab(oList,oContent,ev){
          var aLi = oList.children();
          oContent.hide().eq(0).show();

          aLi.each(function(index){
                $(this).on(ev,function(){
                    //console.log('1111111111');
                     aLi.removeClass('active').addClass('gradient');
                     $(this).removeClass('gradient').addClass('active');
                    oContent.hide().eq(index).show();
                })
          })
      }
})();


//图片切换
;(function(){
    var orec = $('.recommend .rec');
    var opic = $('.recommend .pic');
    var ali = orec.find('ul li');
    var oli = opic.find('ul li');
    var oP = opic.find('p');
    var arrText = ["计量第一帅颂好几","类啊啊啊啊啊啊啊","方式十分的结果还是防静电"];
    var tid = null;
    var iNow = 0;

    fade();
    function fade(){
        ali.each(function(index){
            if(iNow!=index){
                ali.eq(index).fadeOut().css('zIndex',1);
                oli.eq(index).removeClass('active').addClass('gradient');
            }else{
                ali.eq(index).fadeIn().css('zIndex',2);
                oli.eq(index).removeClass('gradient').addClass('active');
            }

            oP.text(arrText[iNow]);
        })

    }

    oli.click(function(){
        iNow=oli.index(this);
        fade();
    });

    autoPlay();

    function autoPlay(){
        tid =  setInterval(function(){
            iNow++;
            if(iNow==arrText.length)iNow=0;
            fade()
        },2000)
    }

   oli.hover(
        function(){
            clearInterval(tid)
        },
        function(){
            autoPlay();
        }
    )

})();




  // day

;(function(){
   // 找对象

    var aImg = $('.week ul li img');
    var oPrompt = $('.info');
    var oP = oPrompt.find('p');
    var curImg = oPrompt.find('img');
    var oStrong = oPrompt.find('strong');
    var aDay = $('.week h5 ')

    aImg.hover(function(){
            //alert(aImg.length)
            var iTop = $(this).parent().position().top-30;
            var iLeft = $(this).parent().position().left+50;

            var index = $(this).parent().index()%aDay.length;

            oPrompt.show().css({'left':iLeft,'top':iTop});
            oP.text($(this).attr('info'));
            curImg.attr('src',$(this).attr('src'));
            oStrong.text(aDay.eq(index).text())

    },function(){
            oPrompt.hide();
        }
    )

})();

//ren

;(function(){
         var arrRen=[
            '',
             '姓名1<br />区域<br /> 人气1001',
             '姓名2<br />区域<br /> 人气1521',
             '姓名3<br />区域<br /> 人气1001',
             '姓名4<br />区域<br /> 人气1675701',
             '姓名5<br />区域<br /> 人气1001',
             '姓名6<br />区域<br /> 人气68871',
             '姓名7<br />区域<br /> 人气106781',
             '姓名8<br />区域<br /> 人气106781',
             '姓名9<br />区域<br /> 人气1001',
             '姓名10<br />区域<br /> 人气106781'
         ];

       $('.hotstar ul li').mouseover(function(){

           if($(this).index()==0) return;
               $('.hotren p').remove();
              $(this).find('div').append('<p  style="width:'+($(this).width())+'px;height:'+($(this).height()-12)+'px">'+ arrRen[$(this).index()]+'</p>');
       })
    })();



// BBS

;(function(){
    $('.bbs .bbs_content ul li').mouseover(function(){
        var index = $(this).index();
        $('.bbs .bbs_content ul li').removeClass('active').eq(index).addClass('active');
    })

})();


