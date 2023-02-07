//console.log("hii ahow are you");
/*   object is an instance of class means that we can make multiple object from a class 
and they all share methods and properties 
since object can be enhanced so there are many ways to create an object sharing mehthods and properties
but we want the simplest one
 es6 provide an keyword class
 */

/**
 class is type of function but insted of using function to initiate it, we keyword class.
 and properties are assigned inside constructor() method
 */

class students {   // making class

    constructor(name ,age,cls) {   // using constructor and passing arguments
        this.MyName = name;
        this.myage = age;
        this.cls = cls;
     }
    biodata() {    // instance method if it will be static method then inherit not work
        //for static method we have to  write static and then method name
        console.log(`My name is ${this.MyName}  and is ${this.myage} year old 
                 and my class is ${this.cls}`);
    }

}
  class  players extends students{    // inheritting studens methods and properties using extend keyword in class player
        
    constructor(name,age , cls, game){

        super (name ,age,cls)
        this.MyGame =game; 
      }
      biodata() {  
        
        console.log(`My name is ${this.MyName}  and is ${this.myage} year old 
                 and my class is ${this.cls} and my favGame is ${this.MyGame}`);
    }
  }
s1 = new players("atiqur rahman", 22 , "mtech","cricket");  //making object and using 
s2 = new players("md raji ahmad", 15, "matric","baseball");
s3 = new players("khushboo", 21 , "intermediate", "lappandori");
s4 =new students("zulekha", 20, "B.A part 3","kitti-kitti" );
s1.biodata();   // calling object
s2.biodata();
s3.biodata();
s4.biodata();