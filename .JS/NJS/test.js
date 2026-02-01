function cssStyle2DomStyle(sName) {
   // 填写JavaScript
   if (sName[0] == '-') {
      sName = sName.slice(1);
   }
   let reg = new RegExp(/-([a-z])/g);
   return sName.replace(reg, function (match,) {
      console.log(match);
      return match.slice(1).toUpperCase();
   });
}

// cssStyle2DomStyle('font-size')
console.log(cssStyle2DomStyle('font-size')) // fontSize;
