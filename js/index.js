function additional(x){
  switch (x%4){
    case 1:
      return 3;
    case 2:
      return 2;
    case 3:
      return 1;
    case 0:
      return 0;
  }
};

document.onreadystatechange = function () {
  if (document.readyState == "complete") {

    document.getElementById('submit').onclick = function(){
      pagenumber = document.getElementById('pagenumber').value;
      output="You need "+additional(pagenumber)+" more blank pages at the end of your document.";
      pagenumber= Number(pagenumber) + Number(additional(pagenumber));
      times = pagenumber/4;
      counter = 0;
      resultstring="";
      for (i=0;i<times;i++){
        resultstring+=pagenumber+",";
        pagenumber--;
        counter++;
        resultstring+=counter+",";
        counter++;
        resultstring+=counter+",";
        resultstring+=pagenumber+",";
        pagenumber--;
      }
      resultstring=resultstring.slice(0,resultstring.length-1);
      document.getElementById('output').setHTML(output);
      document.getElementById('copystring').value=resultstring;
      document.getElementById('success').setHTML('');
    }
    document.getElementById('copybutton').onclick = function(){
      document.getElementById('copystring').focus();
      document.getElementById('copystring').select();
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        document.getElementById('success').setHTML('Copying text command was ' + msg);
      } catch (err) {
        document.getElementById('success').setHTML('Oops, unable to copy');
      }
    }
  }
};
