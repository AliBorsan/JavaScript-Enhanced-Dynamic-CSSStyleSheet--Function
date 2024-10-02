   /*
    Dynamic CSSStyleSheet Inert, Update Function
    By : Ali Borsan
    InserStyleSheetRules(styleSheet,selector, css)
    github : @AliBorsan
   */
   //--------------get Style Sheet-----------------
    //--------------MDN Function-----------------
   function getStyleSheet(unique_title) {
    for (const sheet of document.styleSheets) {
      if (sheet.title === unique_title) {
        return sheet;
      }
    }
  }



//--------------addRules Function -----------------

let stx = getStyleSheet('custom');

 InserStyleSheetRules = function(styleSheet,selector, css){
  let selectors = [],
  _rules = styleSheet.cssRules,
  _rule = CSSStyleRule,
  newStyles = Array.isArray(css)? css.join(';') : css;
  for(let i = 0, len= _rules.length; i < len;i++){
   selectors.push(_rules[i]['selectorText'])
 
 }
 // Check for existing rules and selectors
  if(!(selectors.includes(selector))){
 // Adding rules if they don't exist
    styleSheet.insertRule(`${selector} { ${newStyles} }`, 0);
  }else{ // Altering the existing rules instead of adding dublicated rules
    for(_rule of _rules){
    if(_rule.selectorText === selector){
// Keep the old Rule
      let recent = _rule.style.cssText ;
      // add the new Rule/Rules to the existing rules
      _rule.style = recent + newStyles;

    }
  
  }
     
  }
   
 }
 