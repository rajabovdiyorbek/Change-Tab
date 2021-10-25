const inputIndex = document.querySelector('.inputindex');
const btnChange = document.querySelector('.btnchange');

//content

const positive = document.querySelector('.positive');
const negative = document.querySelector('.negative');
const neutral = document.querySelector('.neutral');

//result

const result = document.querySelector('.result');


btnChange.addEventListener('click', ()=>{
    if(inputIndex.value == 1){
        positive.classList.add('change__active');
        result.textContent = "Positive content";
        inputIndex.value = "";
        negative.classList.remove('change__active');
        neutral.classList.remove('change__active');

    }else if(inputIndex.value == 2){
        negative.classList.add('change__active');
        result.textContent = "Negative content";
        inputIndex.value = "";
        positive.classList.remove('change__active');
        neutral.classList.remove('change__active');
    }else if(inputIndex.value == 3){
        neutral.classList.add('change__active');
        result.textContent = "Neutral content";
        inputIndex.value = "";
        positive.classList.remove('change__active');
        negative.classList.remove('change__active');
    }else{
        alert('index is invalid');
        inputIndex.value = "";
    }    
});

positive.addEventListener('click', ()=>{
    positive.classList.add('change__active');
    result.textContent = "Positive content";
    inputIndex.value = "";
    negative.classList.remove('change__active');
    neutral.classList.remove('change__active');
})

negative.addEventListener('click', ()=>{
    negative.classList.add('change__active');
    result.textContent = "Negative content";
    inputIndex.value = "";
    positive.classList.remove('change__active');
    neutral.classList.remove('change__active');
})

neutral.addEventListener('click', ()=>{
    neutral.classList.add('change__active');
    result.textContent = "Neutral content";
    inputIndex.value = "";
    positive.classList.remove('change__active');
    negative.classList.remove('change__active');
})