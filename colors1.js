var Links = { //링크가 걸린 글씨의 생삭을 바꾸는 객체 Links. 사용)Links.setColor(색상명);
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    // var i=0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i+=1;
    // }
    $('a').css('color', color);
    alist[1].style.color = 'purple';
  }
}

var Body = { //배경색상과 글씨들의 생삭을 바꾸는 객체 Body. 사용)Body.setColor(색상명);
  setColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self){ //(Links객체와 연결)버튼 클릭시 배경화면의 색상과 글씨들의 색상을 바꾸는 함수 nightDayHandler
    var target = document.querySelector('body');
    if(self.value === 'night mod'){
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      self.value = 'day mod';

      Links.setColor('powderblue');
    }

    else{
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      self.value = 'night mod';

      Links.setColor('black');
    }
  }
