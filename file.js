//Memory Update
const attachedMemory=document.getElementById('attached-memory');
const extraMemory=document.getElementById('extra-memory');
const memoryCost=document.getElementById('memory-cost');

attachedMemory.addEventListener('click',function(){
    memoryCost.innerText='0';
    totalPrice();
});
extraMemory.addEventListener('click',function(){
    memoryCost.innerText ='180';
    totalPrice();
})

//Storage update
const attachedStorage=document.getElementById('attached-storage');
const extraStorage1=document.getElementById('extra-storage1');
const extraStorage2=document.getElementById('extra-storage2');
const storageCost=document.getElementById('storage-cost');

attachedStorage.addEventListener('click',function(){
    storageCost.innerText='0';
    totalPrice();
});
extraStorage1.addEventListener('click',function(){
  storageCost.innerText='100';
   totalPrice();
})
extraStorage2.addEventListener('click',function(){
    storageCost.innerText='180';
    totalPrice();
})

//Delivery Update
const freeDelivery=document.getElementById('free-delivery');
const deliveryCharge=document.getElementById('delivery-charge');
const deliveryCost=document.getElementById('delivery-cost');

freeDelivery.addEventListener('click',function(){
    deliveryCost.innerText = '0';
    totalPrice();
});
deliveryCharge.addEventListener('click',function(){
    deliveryCost.innerText='20';
    totalPrice();
})

//Total Price
function totalPrice(){
    const total=document.getElementById('total-price');
    const memoryCostTotal=parseInt(memoryCost.innerText);
    const storageCostTotal=parseInt(storageCost.innerText);
    const deliveryCostTotal=parseInt(deliveryCost.innerText);
    const grandTotal=parseInt(memoryCostTotal+storageCostTotal+deliveryCostTotal)+1299;
    total.innerText=grandTotal;
    const fullAmount=grandTotal;
    document.getElementById('total-amount').innerText=fullAmount;
}

//Promo Code
document.getElementById('apply-button').addEventListener('click',function(){
    const promoCode=document.getElementById('promo-code');
    const promoInput=promoCode.value;
    if(promoInput =='stevekaku'){
        const total=document.getElementById('total-price');
        const totalPriceFooter= document.getElementById('total-amount');
        const totalPriceAmount=parseFloat(total.innerText);
        const taxTotal=totalPriceAmount*0.8;
        total.innerText=taxTotal;
        totalPriceFooter.innerText=taxTotal;
    }
    promoCode.value='';
})
