console.log("This is working you can start coding");
let paper=document.getElementById('paper');
let rock=document.getElementById('rock');
let sissor=document.getElementById('sissor');

paper.addEventListener('click' ,paper1);
rock.addEventListener('click' ,rock1);
sissor.addEventListener('click' ,sissor1);
let comps=0;
let yous=0;
let yos=document.getElementById('yos');
let cos=document.getElementById('cos');
function paper1() {
    let y = document.getElementById('you');
   
    
    // let html=""
    // html+=`<img src="paper.jpg" alt="" >`
    y.src='paper.jpg'
    console.log('yes paper button is working ');
    let z=Math.round(1+(3-1)*Math.random());
    let comp=document.getElementById('comp');
    if(z==1){
        setTimeout(() => {
            
            comp.src='images.png'
        }, 2000);
        comp.src='loading.jpg'
        
    }
    else if(z==2){
        setTimeout(() => {
            
            comp.src='paper.jpg'
        }, 2000);
        comp.src='loading.jpg'
    }
    else{
        setTimeout(() => {
            
            comp.src='scissors.png'
        }, 2000);
        comp.src='loading.jpg'
    }
    
    if(z==1){
        setTimeout(() => {
            
            para.innerHTML='you won'
            yous++
            yos.innerHTML=` <h2 id="yos">YOU:${yous}</h2>`
        }, 2000);
        para.innerHTML='Waiting for computer'
        
    }
    else if(z==2){
        setTimeout(() => {
            
            para.innerHTML='Match Drawn'
        }, 2000);
        para.innerHTML='Waiting for computer'
    }
    else{
        setTimeout(() => {
            
            para.innerHTML='computer won the game'
            comps++
            cos.innerHTML=`<h2 id="cos">COMP:${comps}</h2>`
        }, 2000);
        para.innerHTML='Waiting for computer'
    }
    
    
}
function rock1() {
    let y = document.getElementById('you');
    // let html=""
    // html+=`<img src="paper.jpg" alt="" >`
    y.src='images.png'
    console.log('yes paper button is working ');
    let z=Math.round(1+(3-1)*Math.random());
    let comp=document.getElementById('comp');
    let para=document.getElementById('para');
    if(z==1){
             setTimeout(() => {
            
        comp.src='images.png'
    }, 2000);
        
    comp.src='loading.jpg'
}
else if(z==2){
    setTimeout(() => {
            
        comp.src='paper.jpg'
    }, 2000);
    comp.src='loading.jpg'
}
else{    
     setTimeout(() => {
            
    comp.src='scissors.png'
}, 2000);
    comp.src='loading.jpg'
}


if(z==1){
    setTimeout(() => {
        
        para.innerHTML='Match Drawn'
    }, 2000);
       para.innerHTML='Waiting for computer'
    }
    else if(z==2){
        setTimeout(() => {
            
            para.innerHTML='computer won the game'
            comps++
            cos.innerHTML=`<h2 id="cos">COMP:${comps}</h2>`
        }, 2000);
        para.innerHTML='Waiting for computer'
    }
    else{
        setTimeout(() => {
            
            para.innerHTML='you Won'
            yous++
            yos.innerHTML=` <h2 id="yos">YOU:${yous}</h2>`
        }, 2000);
        para.innerHTML='Waiting for computer'
    }
}
function sissor1() {
    let y = document.getElementById('you');
    // let html=""
    // html+=`<img src="paper.jpg" alt="" >`
    y.src='scissors.png'
    console.log('yes paper button is working ');
    
    let z=Math.round(1+(3-1)*Math.random());
    let comp=document.getElementById('comp');
    if(z==1){ 
            setTimeout(() => {
            
        comp.src='images.png'
    }, 2000);
        comp.src='loading.jpg'
        
    }
    else if(z==2){
        setTimeout(() => {
            
            comp.src='paper.jpg'
        }, 2000);
        comp.src='loading.jpg'
    }
    else{     
        setTimeout(() => {
        
        comp.src='scissors.png'
    }, 2000);
    comp.src='loading.jpg'
    }
    
        if(z==1){
            setTimeout(() => {
            
                para.innerHTML='computer won the game'
                comps++
                cos.innerHTML=`<h2 id="cos">COMP:${comps}</h2>`
            }, 2000);
            para.innerHTML='Waiting for computer'
        }
        else if(z==2){
            setTimeout(() => {
            
                para.innerHTML='you Won'
                yous++
                yos.innerHTML=` <h2 id="yos">YOU:${yous}</h2>`
            }, 2000);
            para.innerHTML='Waiting for computer'
            
        }
        else{
            setTimeout(() => {
                
                para.innerHTML='Match Drawn'
            }, 2000);
            para.innerHTML='Waiting for computer'
        }
}
