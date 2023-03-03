class SignupPage {
    constructor($main) {
        this.$main = $main; 
    }

    render () {
        const title = new ContentTitle($main, "Sign Up, GreatPeople!");
        title.render();
    }
}

export default SignupPage;