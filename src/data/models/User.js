export default class User {
    constructor(firstName, lastName, email, pass, birthday,
                salonName, city, country, phone, acceptTerms, newsLetter) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.pass = pass;
        this.birthday = birthday;
        this.salonName = salonName;
        this.city = city;
        this.country = country;
        this.phone = phone;
        this.acceptTerms = acceptTerms;
        this.newsLetter = newsLetter;
    }
}