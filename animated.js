document.addEventListener("DOMContentLoaded", function() {

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const topThreshold = windowHeight * 0.1; // 10% from the top
        const bottomThreshold = windowHeight * 0.1; // 10% from the bottom
    
        return (
          rect.top >= topThreshold &&
          rect.bottom <= (windowHeight - bottomThreshold)
        );
      }
    const elements = document.querySelectorAll('.animate__animated');

    elements.forEach((element)=>{
        var classes = element.classList;
        classes = Array.from(classes).filter(className => className !== 'animate__animated');
        let inIsThere = false
        let outIsThere = false
        classes.forEach((classs)=>{
            if(classs.includes('In') && classs.includes('animate')){
                inIsThere = true
            }
            if(classs.includes('Out')  && classs.includes('animate')){
                outIsThere = true
            }
        });
        if(inIsThere && !outIsThere){
            classes.forEach((classs)=>{
                if(classs.includes('In')  && classs.includes('animate')){
                    var afterUnderscore = classs.split("__")[1];
                    let newString = afterUnderscore.replace(/In/g, "Out");
                    element.classList.remove(`ex-animate__${afterUnderscore}`)
                    element.classList.add(`animate__${afterUnderscore}`)   
                    element.classList.add(`animate__${newString}`) 
                    element.classList.add(`animate_Extra`)
                }
            })
        }
        if(!inIsThere && !outIsThere){
            classes.forEach((classs)=>{
                if(classs.includes('animate')){
                    var afterUnderscore = classs.split("__")[1];
                    element.classList.remove(`animate__${afterUnderscore}`)
                    element.classList.add(`ex-animate__${afterUnderscore}`)
                    element.classList.add(`animate_Extra`)
                }
            })
        }
        
    });

    function handleScrollAnimation(){
        elements.forEach((element)=>{
            var classes = element.classList;
            classes = Array.from(classes).filter(className => className !== 'animate__animated');
            let inIsThere = false
            let outIsThere = true
            classes.forEach((classs)=>{
                if(classs.includes('In') && classs.includes('animate')){
                    inIsThere = true
                }
                if(classs.includes('Extra') && classs.includes('animate')){
                    outIsThere = false
                }
            });
            if(inIsThere && outIsThere){
                if(isElementInViewport(element)){
                    var classes = element.classList;
                    classes = Array.from(classes).filter(className => className !== 'animate__animated');
                    classes.forEach((classs)=>{
                        if(classs.includes('In') && classs.includes('animate')){
                            var afterUnderscore = classs.split("__")[1];
                            element.classList.remove(`ex-animate__${afterUnderscore}`)
                            element.classList.add(`animate__${afterUnderscore}`)
                        }
                        if(classs.includes('Out') && classs.includes('animate')){
                            var afterUnderscore = classs.split("__")[1];
                            element.classList.remove(`animate__${afterUnderscore}`)
                            element.classList.add(`ex-animate__${afterUnderscore}`)
                        }
                    })               
                }
                else{
                    var classes = element.classList;
                    classes = Array.from(classes).filter(className => className !== 'animate__animated');
                    classes.forEach((classs)=>{
                        if(classs.includes('Out') && classs.includes('animate')){
                            var afterUnderscore = classs.split("__")[1];
                            element.classList.remove(`ex-animate__${afterUnderscore}`)
                            element.classList.add(`animate__${afterUnderscore}`)
                        }
                        if(classs.includes('In') && classs.includes('animate')){
                            var afterUnderscore = classs.split("__")[1];
                            element.classList.remove(`animate__${afterUnderscore}`)
                            element.classList.add(`ex-animate__${afterUnderscore}`)
                        }
                    })
                }
            }
            else if(inIsThere && !outIsThere){
                if(isElementInViewport(element)){
                    var classes = element.classList;
                    classes = Array.from(classes).filter(className => className !== 'animate__animated');
                    classes.forEach((classs)=>{
                        if(classs.includes('In') && classs.includes('animate')){
                            var afterUnderscore = classs.split("__")[1];
                            element.classList.remove(`ex-animate__${afterUnderscore}`)
                            element.classList.add(`animate__${afterUnderscore}`)
                        }
                        if(classs.includes('Out') && classs.includes('animate')){
                            var afterUnderscore = classs.split("__")[1];
                            element.classList.remove(`animate__${afterUnderscore}`)
                            element.classList.remove(`animate__Extra`)
                        }
                    })               
                }
            }
            else if(!inIsThere && !outIsThere){
                if(isElementInViewport(element)){
                    var classes = element.classList;
                    classes = Array.from(classes).filter(className => className !== 'animate__animated');
                    classes.forEach((classs)=>{
                        if(classs.includes('animate')){
                            var afterUnderscore = classs.split("__")[1];
                            element.classList.remove(`ex-animate__${afterUnderscore}`)
                            element.classList.add(`animate__${afterUnderscore}`)
                            element.classList.remove(`animate__Extra`)
                            element.classList.remove(`animate__undefined`)
                        }
                    });
                }
            }
        })
    }

window.addEventListener("scroll", handleScrollAnimation);
handleScrollAnimation();
});