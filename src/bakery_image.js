import { GameController, Reason } from './bakery_game.js';


export default class Image {
    constructor(){
        this.bgImage = document.querySelector('.game__background');
        this.gameField = document.querySelector('.game__field');
        this.items = document.querySelectorAll('img');
        this.itemsCount = this.items.length - 1;
        this.bread = document.querySelector('.bread');
        this.runji = document.querySelector('runji');
        this.gameField.addEventListener('click', this.onFieldClickListener);
    }

    create(itemsCount) {
        for (let i = 0; i < itemsCount; i++) {
            const x =  Math.floor( Math.random() * this.gameField.offsetWidth );
            const y =  Math.floor( Math.random() * this.gameField.offsetHeight );

            this.items[i].classList.remove("hidden"); 
            this.items[i].style.left = x + 'px';
            this.items[i].style.bottom = y + 'px';
        }
    }

    hide() {
        this.gameField.classList.add("hidden");
    }

    setItemClickListener(onItemClick) {
        this.onItemClick = onItemClick;
    }
    
    onFieldClickListener = (e) => {
        if (e.target.matches('.runji')) {
            this.onItemClick && this.onItemClick('runji');
        } else if (e.target.matches('.bread')) {
            e.target.classList.add("hidden")
            this.onItemClick && this.onItemClick('bread');
        }
    }

}