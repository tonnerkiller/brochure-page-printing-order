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

$("document").ready(function(){
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
    //output+=resultstring;
    $('#output').html(output);
    document.getElementById('copystring').value=resultstring;
    $('#success').html('');
  }
  document.getElementById('copybutton').onclick = function(){
    document.getElementById('copystring').focus();
    document.getElementById('copystring').select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      $('#success').html('Copying text command was ' + msg);
    } catch (err) {
      $('#success').html('Oops, unable to copy');
    }
  }
});
