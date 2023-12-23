
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate__animated');

        function isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.bottom <= windowHeight * 0.8;
      }
        function isScrolledOutView(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.bottom <= windowHeight * 0.2;
      }

    elements.forEach((element)=>{
        const classes = element.classList;
        const filteredClasses = Array.from(classes).filter(className => className !== 'animate__animated');
        const extractedWords = filteredClasses.join(' ');
        var afterUnderscore = extractedWords.split("__")[1];
   
        element.classList.remove(`animate__${afterUnderscore}`)
        element.classList.add(`ex-animate__${afterUnderscore}`)


    var styleSheets = document.styleSheets;
        if(afterUnderscore.includes("In")){
        for (var i = 0; i < styleSheets.length; i++) {
            var styleSheet = styleSheets[i];
            if (styleSheet.href && styleSheet.href.includes('animated.css')) {
                for (var j = 0; j < styleSheet.cssRules.length; j++) {
                    var rule = styleSheet.cssRules[j];
                    if (rule.type === CSSRule.KEYFRAMES_RULE && rule.name === `${afterUnderscore}`) {
                        for (var k = 0; k < rule.cssRules.length; k++) {
                            var keyframe = rule.cssRules[k];
                            if (keyframe.type === CSSRule.KEYFRAME_RULE && keyframe.keyText === '0%') {
                                var keyframeCSS = keyframe.cssText;
                                const startT = keyframeCSS.substr(4);
                                const endT = startT.substr(0, startT.length - 1)
                                element.style.cssText = `${endT}`;
                                break; 
                                }
                            }
                        }
                    }
                }
            }
        }
        else if(afterUnderscore.includes("Out")){
        for (var i = 0; i < styleSheets.length; i++) {
            var styleSheet = styleSheets[i];
            if (styleSheet.href && styleSheet.href.includes('animated.css')) {
                for (var j = 0; j < styleSheet.cssRules.length; j++) {
                    var rule = styleSheet.cssRules[j];
                    if (rule.type === CSSRule.KEYFRAMES_RULE && rule.name === `${afterUnderscore}`) {
                        for (var k = 0; k < rule.cssRules.length; k++) {
                            var keyframe = rule.cssRules[k];
                            if (keyframe.type === CSSRule.KEYFRAME_RULE && keyframe.keyText === '100%') {
                                var keyframeCSS = keyframe.cssText;
                                const startT = keyframeCSS.substr(4);
                                const endT = startT.substr(0, startT.length - 1)
                                element.style.cssText = `${endT}`;
                                break; 
                                }
                            }
                        }
                    }
                }
            }
        }
    })
    
    function handleScrollAnimation() {
        elements.forEach((element)=>{
            if (isScrolledIntoView(element)) {
                const classes = element.classList;
                const filteredClasses = Array.from(classes).filter(className => className !== 'animate__animated');
                const extractedWords = filteredClasses.join(' ');
                var afterUnderscore = extractedWords.split("__")[1];
                if(afterUnderscore.includes("In")){
                element.classList.add(`animate__${afterUnderscore}`)
                element.classList.remove(`ex-animate__${afterUnderscore}`)
                }
            } 
            if (isScrolledOutView(element)) {
                const classes = element.classList;
                const filteredClasses = Array.from(classes).filter(className => className !== 'animate__animated');
                const extractedWords = filteredClasses.join(' ');
                var afterUnderscore = extractedWords.split("__")[1];
                if(afterUnderscore.includes("Out")){
                element.classList.add(`animate__${afterUnderscore}`)
                element.classList.remove(`ex-animate__${afterUnderscore}`)
                }
            }
        })
    }



window.addEventListener("scroll", handleScrollAnimation);
handleScrollAnimation();
  });