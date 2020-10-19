class teacher extends student{
    constructor(Id, Name, Email, Mobile, salary, subjects){
        super(Id, Name, Email, Mobile);
        this.salary=salary;
        this.subject=subject;
        
    }
    end(){
        console.log(salary.toString());
        console.log(subject);

        }
}
    
let teacher1= new student(96432,'sadi','sadi@orange.com',0777788888,800,'[English, Arabic, Math, Science]');