import {menuArray as menu} from "./data.js" 

let cart = []

function render() {
    let htmlString = ""
    menu.forEach((items) => { 
        htmlString +=   `<div class="main-menu"> 
                        <img src="${items.photo}" style="width: 60px; height:50px;" 
                        alt="image of a ${items.name}"> 
                        <div class="info-area"> 
                            <p style="font-weight: 600; font-size: 1.25rem;">${items.name}</p> 
                            <p style="font-weight: 300; font-size: 0.5rem;">${items.ingredients}</p> 
                            <p>$${items.price}</p>
                        </div> 
                        <button id="add-item" aria-label="add item to menu" data-id=${items.id}>+</button>
                        </div>`

    }) 
    document.querySelector(".list-menu").innerHTML = htmlString 
} 


function listPop() { 
    document.querySelector(".list-menu").addEventListener("click", function(event) { 
        if (event.target.dataset.id) {
            const clickedId = Number(event.target.dataset.id) 
            const selectedItem = menu.find((item) => {
                return item.id === clickedId 
            })
            cart.push(selectedItem) 
            renderCart()
        }
    }) 
} 

function renderCart() {
    let orderList = `<h2 style="text-align: center;">Your Order</h2>` 
        cart.forEach((selectedItem) => {
            orderList +=  ` 
                <div style="display: flex; padding: 10px; gap: 5px; 
                justify-content: space-between;"> 
                    <div> 
                        <p>${selectedItem.name}</p> 
                        <button style="border: 1px dotted grey; background-color: white; 
                        border-radius: 10px;" class="remove-btn" data-id="${selectedItem.id}">remove</button>
                    </div> 
                    <p>$${selectedItem.price}</p>
                    </div> 
                `
            })
    document.querySelector(".order-list").innerHTML = orderList 
    finalOrder()
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-btn")) {
        const clickedId = Number(event.target.dataset.id);
        const index = cart.findIndex(item =>
            item.id === clickedId
        );
        if (index !== -1) {
            cart.splice(index, 1);
        }
        renderCart();
    }
}); 

function finalOrder() { 
    const totalPrice = cart.reduce((totalPrice, item) => {
        return totalPrice + item.price  
    }, 0) 

    if(cart.length === 0) {
        document.querySelector(".order-list").innerHTML = "" 
        document.querySelector(".total-menu").innerHTML = "" 
        return
    }

    document.querySelector(".total-menu").innerHTML = ` 
            <div style="display: flex; justify-content: space-between; 
            padding: 20px;"> 
                <p>Total Price: </p> 
                <p>$${totalPrice}</p> 
            </div> 
            <button id="order-btn" style="background-color: olive; color: whitesmoke; 
            text-shadow: 0px 0px 1px black; padding: 7.5px 75px; 
            border: none; border-radius: 10px; text-align: center; margin: 5px 20px;">Complete Order</button>

    `
}


function placeOrder() {
    document.addEventListener("click", function(event) {
        if (event.target.id === "order-btn") {
        setTimeout(function() { 
                document.querySelector(".card-details").innerHTML = 
                `  
                    <h2>Enter Card Details</h2> 
                    <form class="order-form"> 
                        <input type="text" placeholder="enter your name" id="username" required aria-label="enter your name"/> 
                        <input type="text" minlength="13" maxlength="19" 
                        inputmode="numeric" placeholder="enter your card number" id="card-number"  aria-label="enter your card number" required/> 
                        <input type="text" placeholder="enter CVV" minlength="3" maxlength="3" 
                        aria-label="enter your CVV" inputmode="numeric" id="cvv-number"/> 
                        <input type="submit" id="pay-btn" value="pay" style="background-color: olivedrab; 
                        color: whitesmoke; font-size: 1.25rem;" />
                    </form>
            ` 
            }, 1500)
            document.querySelector(".card-details").style.display = "block"; 
        }
    }) 
    document.addEventListener("submit", function(event) { 
        if (event.target.classList.contains("order-form")) {
            event.preventDefault() 
            const name = document.getElementById("username").value
            setTimeout(function() {
                document.querySelector(".card-details").innerHTML = ` 
                <div style="display: flex; justify-content: center; flex-direction: column; 
                align-items: center; width: 150px;"> 
                <img src="https://img.icons8.com/bubbles/100/checked-2.png" style="width: 50px; height: 50px;"/> 
                <p>Hurray ${name}!<br>Your Order is Placed</p>
                </div> 
                `
            }, 1000)
        }
    })
}

render()
listPop() 
placeOrder()
