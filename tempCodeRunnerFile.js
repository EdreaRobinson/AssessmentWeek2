class Employee {
    constructor(name, shifts) {
        this.name = name;
        this.shifts = shifts;
    }
    getSchedule(){
        console.log(`${this.name} works on ${this.shifts}`)
    }
}

let karenS = new Employee ("Karen", "Saturday")
karenS.getSchedule()


/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

//CODE HERE

let empOne = new Employee ("Jess", "weekday mornings and weekday afternoons")

/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

//CODE HERE
empOne.getSchedule()

/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the 
    spread operator or reassign it using 
    dot or bracket notation.
*/

//CODE HERE

let empTwo = {... empOne}
empTwo.name = "Nick"
console.log(empTwo)