export const cardDiv = (index) => {
    const card_div = document.createElement("div");
    card_div.setAttribute("idx", index); 
    card_div.setAttribute("class", "card");

    let cardStorage = JSON.parse(localStorage.getItem("cardStatus"));

    // 없는 경우
    if (!cardStorage[index]) {
        card_div.setAttribute("class", "card");
        cardStorage.push({
            "idx":index,
            "status": "card"
        });
        localStorage.setItem("cardStatus", JSON.stringify(cardStorage));
    // localStorage 에 해당 카드의 값이 있는 경우
    } else {
        card_div.setAttribute("class", cardStorage[index].status );
    }

    // click 이벤트 등록 
    card_div.addEventListener("click", (e) => {
        // toggle !!!! 
        card_div.classList.toggle("is-flipped"); 

        let cardStorage = JSON.parse(localStorage.getItem("cardStatus"));
        cardStorage[index].status = card_div.getAttribute('class');
        localStorage.setItem("cardStatus", JSON.stringify(cardStorage));
    })

    
    

    return card_div;
}

export const cardPlane = (side, data) => {
    const cardPlane_div = document.createElement("div"); 
    cardPlane_div.setAttribute("class", "card_plane card_plane--" + side);

    cardPlane_div.appendChild(document.createTextNode(data));

    return cardPlane_div;
}