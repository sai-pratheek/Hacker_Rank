function Person(initialAge){
    // Add some more code to run some checks on initialAge
    let age = 0;
    if( initialAge < 0){
        age = 0;
        console.log("Age is not valid, setting age to 0.")
    }else{
        age = initialAge;
    }
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    if( age < 13){
        console.log("You are young.");
    }else if(age >=13 && age <18){
        console.log("You are a teenager.");
    }else{
        console.log("You are old.");
    }
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
          age++;
   };
}

function main() {

var T=parseInt(readLine());
for(i=0;i<T;i++){
    var age=parseInt(readLine());
    var p=new Person(age);
    p.amIOld();
    for(j=0;j<3;j++){
        p.yearPasses();
        
    }
    p.amIOld();
    console.log("");   
    }
}
