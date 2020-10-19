class Student{
    constructor(Id,Name,Email,mobile_number){
        this.Id = Id;
        this.Name = Name;
        this.Email = Email;
        this.mobile_number = mobile_number;}

        name(){
            return this.Id.toString();

        }
        mobile(){
            return Number(this.Id);
        }

    }

    let student1 = new Student('123443','Sara','sara@orange.com','0777777777');

    console.log(student1);
    console.log(student1.name());
    console.log(student1.mobile());