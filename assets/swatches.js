const radioBtns=Array.from(document.querySelectorAll('.radio-btn'));
const select_color=document.querySelector('.select_color');
const select_size=document.querySelector('.select_size');
const addToCartBtn=document.querySelector('.product-form__submit');
const buyNowBtn=document.querySelector('.shopify-payment-button__button');
const checkSelected=()=>{
    // condition to disable the buy and cart button when unselected is choosed in size option 
    if (select_size.value=="Unselected") {
      addToCartBtn.disabled=true;  
      buyNowBtn.disabled=true;  
    } 

}
checkSelected()
//linking the pills/swatches with the dropdown
radioBtns.forEach(btn=>{
btn.addEventListener('click',()=>{
    select_color.value=btn.value;
    if (select_size.value=="Unselected") {
        select_size.value="Small";
    }
});
})