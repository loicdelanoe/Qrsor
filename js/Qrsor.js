import {settings} from "./settings.js";

export class Qrsor {

    constructor(selectors = [], parallaxSpeed = 0) {
        this.parallaxSpeed = parallaxSpeed;
        this.selectors = selectors;

        document.body.insertAdjacentHTML('afterbegin', `<div class="cursor"></div>`);

        this.cursor = document.querySelector('.cursor');

        this.handleMouseMove(this.cursor);

        this.selectors.forEach((selector) => {
            this.addCursorStyle(selector, this.parallaxSpeed);
        })
    }

    addTransition(elements) {
        elements.style.transition = settings.elements.transitionDuration;
    }

    handleMouseMove(element) {
        document.addEventListener('mousemove', (e) => {
            element.style.top = e.pageY + 'px';
            element.style.left = e.pageX + 'px';
        })
    }

    addCursorStyle(selector, parallaxSpeed) {
        this.elements = document.querySelectorAll(selector);

        this.elements.forEach((element) => {
            this.addTransition(element);

            element.addEventListener('mouseover', () => {
                this.addOnHover();
            });

            element.addEventListener('mousemove', (e) => {
                this.handleParallax(element, e, parallaxSpeed);
            });

            element.addEventListener('mouseleave', () => {
                this.removeWhenOutside(element);
            });
        })
    }

    addOnHover() {
        this.cursor.style.width = settings.cursor.radius.hover;
        this.cursor.style.height = settings.cursor.radius.hover;
        this.cursor.style.backgroundColor = "transparent";
    }
    removeWhenOutside(element) {
        this.cursor.style.width = settings.cursor.radius.base;
        this.cursor.style.height = settings.cursor.radius.base;
        this.cursor.style.backgroundColor = settings.cursor.color;
        element.style.transform = "";
    }


    handleParallax(element, event, speed) {
        const boxElement = element.getBoundingClientRect();
        const x = event.clientX - boxElement.left;
        const y = event.clientY - boxElement.top;

        const moveX = (x - boxElement.width / 2) * speed;
        const moveY = (y - boxElement.height / 2) * speed;

        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
}