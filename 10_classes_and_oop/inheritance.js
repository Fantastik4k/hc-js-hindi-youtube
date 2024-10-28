class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// kbhi iss user ko techaer, kbhi admin, kbhi student bnana pry ga, but username to sub ka rhy ga hi na.

class Teacher extends User{
    constructor(username, email, password){
        // old code mein hmein idhr .call(this, ) ak use krna prta tha.
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")


// masalaChai.addCoure() -- error
masalaChai.logMe()

console.log(chai instanceof User);
