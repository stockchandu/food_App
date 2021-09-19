
let time;

 let debounce=((oninput,delay)=>{

    let data=document.getElementById("input_value").value;

    if(data.length<2){
        return false;
    }

    if(time){
        clearTimeout(time);
    }

    time=setTimeout(()=>{
         oninput()
    },delay)
 })

 export {debounce};