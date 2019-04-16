/* exported $dlgGoto*/
var $dlgGoto=(function(){
  var $dlg=$(''
    +'<div class="notepad-goto-dlg">'
      +'<div class="box">'
        +'<div class="titlebar">'
          +'<p>转到指定行</p>'
          +'<span class="btn-close">×</span>' 
        +'</div>'
        +'<div class="main">'
          +'<label for="" class="num">行号(L):</label><br>'
          +'<input type="text" class="txt" autofocus><br>'
          +'<input type="button" class="goto" value="转到">'
          +'<input type="button" class="cancel" value="取消">'
        +'</div>'
      +'</div>'
    +'</div>'
  );
  var $btnClose=$dlg.find('.btn-close'),                    
      $btnCancel=$dlg.find('.cancel'),
      $titlebar=$dlg.find('.titlebar'),
      $btnGoto = $dlg.find('.goto'),
      $lineNum=$('.txt');
  var cfg = {
    lineNum: 1,
    totalLine: 1,
    gotoHandler: null
  };
  function destory(){$dlg.remove();}
  function gotoHandler() {
    cfg.gotoHandler(); 
    destory();
  }
  function show(conf){
    $.extend(cfg,conf);
    $('body').append($dlg);
    $dlg.find('.box').draggable({handle:$titlebar}); 
    $btnClose.click(destory);
    $btnCancel.click(destory);
    $btnGoto.click(gotoHandler);
    $lineNum.val(cfg.lineNum);
    $lineNum.select();
  };
  return {show:show};
})();

