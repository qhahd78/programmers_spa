class ContentTitle {
    constructor($main, $title) {
        this.$main = $main;
        this.$title = $title
    }

    render (){
        const content_title = document.createElement("div");
        const title_text = document.createElement("h1"); 
        
        content_title.setAttribute("class", "content_title");
        title_text.appendChild(document.createTextNode(this.$title));

        content_title.appendChild(title_text);

        this.$main.appendChild(content_title);
    }
}

export default ContentTitle