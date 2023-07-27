if(customElements.get('gunchung-scrolltext') == null){
    class GunChungScroll extends HTMLElement {
        constructor() {
            super();
            this.itemWidth = 0;//子元素宽度
            this.totalWidth = 0;//总宽度
            this.initPosition = 0;//初始化位置
        }

        connectedCallback() {
            this.items = this.querySelectorAll('.gunchung-scroll-item');
            this.direction = this.dataset.direction === 'left' ? 1 : -1;
            this.scrollSpeed = this.dataset.speed*0.5*this.direction;
            // 复制所有元素，并将复制的元素添加到末尾
            for (let i = 0; i < this.items.length; i++) {
                let copy = this.items[i].cloneNode(true);
                this.appendChild(copy);
            }
            this.itemWidth = this.items[0].offsetWidth;
            this.totalWidth = this.items.length * this.itemWidth;
            if(this.direction < 0){
                this.initPosition = this.totalWidth;
            }
            this.scrollLeft = this.initPosition;
            this.scroll = this.scroll.bind(this);
            this.scroll(); // 开始滚动
        }

        scroll() {
            this.scrollLeft += this.scrollSpeed;
            // 当滚动到所有元素的总宽度时，重置滚动条的位置
            if(this.direction < 0 && this.scrollLeft <= 0){
                this.scrollLeft = this.initPosition;
            }else if(this.scrollLeft >= this.totalWidth) {
                this.scrollLeft = this.initPosition;
            }
            requestAnimationFrame(this.scroll);
        }
    }

    customElements.define('gunchung-scroll', GunChungScroll);
}

