window.onload = function(){
  var body, lasttime;

  function getLarsTime(date){
    date = date || new Date();

    return (date.getSeconds() + date.getMilliseconds()/1000 + date.getMinutes()*60 + date.getHours()*3600) / 0.864;
  }

  function formatLarsTime(larstime){
    larstime = larstime || getLarsTime();

    larstime = Math.floor(larstime);
    while (larstime.length < 5) {
      larstime = '0' + larstime;
    }

    return larstime.toString().replace(/(.)(..)(..)/, '$1:$2:$3');
  }

  function updateLarsTime(){
    var thistime;

    thistime = formatLarsTime();
    
    if (lasttime !== thistime){
      lasttime = thistime;
      body.innerHTML = '<span>' + thistime + '</span>';
    }
  }

  body = document.getElementsByTagName('body')[0];

  setInterval(updateLarsTime, 10);
};
