import CardView from '../components/CardView.js';
import ContentTitle from '../components/ContentTitle.js'

class HomePage {
    constructor($main) {
        this.$main = $main;
    }

    render() {
        const title = new ContentTitle(this.$main, "Great People")
        title.render();
        const cardsView = new CardView(this.$main)
        cardsView.render();
    }
}

export default HomePage;