const allBtn = document.getElementsByClassName("btn");
for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        console.log(event.target);

        const Seat = event.target.innerText;

        const selectedContainer = document.getElementById("selected-ticket-container");
        const div = document.createElement("div");

//seat count update


//event.target.setAttribute("disabled",false);


const firstSitCount = getConvertedValue("count-seat");
if (firstSitCount + 1 > 5) {
    alert ("Limit cross");
    return;
}
event.target.style.backgroundColor = "green";


const count = getConvertedValue("seat-count");
document.getElementById("seat-count").innerText = count -1;

const totalSitCount = getConvertedValue("count-seat");
document.getElementById("count-seat").innerText = totalSitCount +1;





        div.classList.add("flex");
        div.classList.add("place-content-around")

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = Seat;
        p2.innerText = "Ecomomy";
        p3.innerText = 550;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);
        updateTotalCost(550);
        updateGrandTotal();
    })
}


//coupon function//

function updateGrandTotal(status) {
    const totalCost = getConvertedValue("total-cost");
    if (status == undefined) {
        document.getElementById("grand-total").innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById("coupon-code").value;
        console.log(couponCode);
        if (couponCode == "NEW15") {
            
            const discounted = totalCost * 0.2;
            document.getElementById("grand-total").innerText = total-cost - discounted;
        }
        else{
            alert ("Please enter a valid coupon code.");
        }
    }
}



function updateTotalCost(value) {
    const totalCost = getConvertedValue("total-cost");
    sum = totalCost + (value);
    document.getElementById("total-cost").innerText = sum;
}




function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}
const result = getConvertedValue("seat");
