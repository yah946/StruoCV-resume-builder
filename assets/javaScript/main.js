let steps = document.getElementById('steps');
let circles = document.querySelectorAll('.circle');
let progressInd = document.getElementById('ind');
let progressWidth = ['0%','20%','35%','50%','65%','80%','100%'];
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');
let form = document.getElementById('form');
let counter=0;
let formPart = document.querySelectorAll('.form__part');
function updateStatus() {
    for(i=1;i<formPart.length;i++){
        formPart[i].style.display='none'
    }
    nextBtn.addEventListener('click',function(e){
        e.preventDefault();
        if(counter>=0 && counter<6){
            formPart[counter].style.display='none';
            counter++;
            formPart[counter].style.display='block';
            progressInd.style.width=progressWidth[counter];
            circles[counter].className='active circle';
        }
    })
        prevBtn.addEventListener('click',function(e){
        e.preventDefault();
        if(counter>0 && counter<=7){
            formPart[counter].style.display='none';
            counter--;
            formPart[counter].style.display='block';
            progressInd.style.width=progressWidth[counter];
            circles[counter+1].className='circle';
        }
    })

}
function infoValidation(callBack){
    form.addEventListener('click',function(e){
        e.preventDefault();
        
        callBack();
    })
}
infoValidation(updateStatus);
