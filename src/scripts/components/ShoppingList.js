export class ShoppingList{
    constructor(){

        this.list = [];

        this.selectors();
        this.events();
    }
        selectors(){
            this.form = document.querySelector('.container__form');

            this.itemInput = document.querySelector('.item__wrapper__item__input');

            this.quantityInput = document.querySelector('.inputs__quantity__wrapper__input');

            this.incrementButton = document.querySelector('.inputs__quantity__wrapper__increment__button');

            this.decrementButton = document.querySelector('.inputs__quantity__wrapper__decrement__button');

            this.items = document.querySelector('.container__result__items');
    }

    events(){
        this.incrementButton.addEventListener("click", this.incrementQuantity.bind(this));
        this.decrementButton.addEventListener("click", this.decrementQuantity.bind(this));
        this.form.addEventListener("submit", this.addItemToList.bind(this));
    }

     incrementQuantity() {
        const currentValue = Number(this.quantityInput.value);
        const newValue = currentValue + 1;

        this.quantityInput.value = newValue;
    }

     decrementQuantity() {
        const currentValue = Number(this.quantityInput.value);
        const newValue = currentValue - 1;

        if (newValue > 0) {
            this.quantityInput.value = newValue;
        }
    }

     addItemToList(event) {
        event.preventDefault();

        const itemName = event.target["item__name"].value;
        const itemQuantity = event.target["item__quantity"].value;

        if (itemName != "") {
            const item = {
                name: itemName,
                quantity: itemQuantity,
            };

            this.list.push(item);
            this.renderListItems();
            this.resetInputs();
        }
    }

     renderListItems() {
        let itemsStructure = "";

        this.list.forEach( function(item) {
            itemsStructure += `
            <li class = "container__result__item">
                <span>${item.name}</span>
                <span>${item.quantity}</span>
            </li>`;

        });

        this.items.innerHTML = itemsStructure;
    }

     resetInputs() {
        this.itemInput.value = "";
        this.quantityInput.value = 1;
    }
}
