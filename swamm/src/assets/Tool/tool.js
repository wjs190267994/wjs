export function debounds(func,delay) {
     let timer = null;
     return function(){
         if(timer) clearTimeout(timer);
         let arg = arguments;
         timer = setTimeout(() => {
             func.apply(this,...arg);
            //  console.log("ddfdfd")
         }, delay);
        
     }
}