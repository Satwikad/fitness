const form=document.querySelector('form');
const thankyou=document.querySelector('.thanks');
const nameInput=document.querySelector('input[name="name"]');
const emailInput=document.querySelector('input[name="email"]');
let isFormValid=false;
const resetElm=(elm)=>{
    elm.classList.remove('invalid');
    elm.nextElementSibling.classList.add("hidden");
};
const incalidateElm=(elm)=>{
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");
}
const validateInputs=()=>{
    isFormValid=true;
    resetElm(nameInput);
    resetElm(emailInput);
        if(!nameInput.value){
        isFormValid=false;
        invalidateElm(nameInput);
    }
    if(!emailInput.value){
        isFormValid=false;
        invalidateElm(emailInput);
    }
};
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateInputs();
    if(isFormValid){
        form.remove();
        thankyou.classList.remove("hidden");
    }
});
nameInput.addEventListener("input", ()=>{
    validateInputs();
})
