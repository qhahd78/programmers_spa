import { cardDiv, cardPlane } from "./Card.js";
import { setCardStatus } from "./Storage.js";

class CardView {
    constructor($main) {
        this.$main = $main;
    }

    infiniteScroll(container, localStorage) {
        let target = document.getElementById("cards_container").lastChild;
        const io = new IntersectionObserver((entry, observer) => {
            if (entry[0].isIntersecting) {
                // io.unobserve(target)
            }
        }, {
            threshold: 0.7
        });

        io.observe(target);
    }

    render() {
        const cards_container = document.createElement('div'); 
        cards_container.setAttribute("id", "cards_container");
        
        this.$main.appendChild(cards_container);
        
        const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));

        setCardStatus();
        
        for (let i = 0; i < personalInfo.length; i++) {
            const card = cardDiv(i);

            card.appendChild(cardPlane("front", personalInfo[i].nickname))
            card.appendChild(cardPlane("back", personalInfo[i].mbti));

            cards_container.appendChild(card);
        }

        this.infiniteScroll(cards_container, personalInfo)   
    }

}

export default CardView;

