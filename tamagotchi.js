
class Tamagotchi {
    constructor  () {
       this.name = this.name
       this.energy = 9
       this.full = 8
       this.mood = 6
       this.sick = false
       this.rehomed = false
    }

    greet () {
        console.log(` Hello, I'm ${this.name}`)
    }

    status(){
        console.log(`********************
        My mood is: ${this.mood}
        I am this full: 8
        My energy is: 9
        I am ${!this.sick? "" : "not"} sick
        ********************`)
    }

   
    eat() {
        this.full += 2;
        this.energy -= 1;

        if (this.full > 10) {
            this.sick = true;
            
        }
    }
    
    medicate () {
         if (this.sick = true) {
            this.full = 9;
            this.energy - 3;
         } else {
            console.log(`${this.name} refused to take medicine`)
            this.energy - 1;
         }
     }

    sleep () {
        this.energy +4 ;
        this.full -3;
    }
    
    

}
//         name: string
// energy: number, default value 9
// full: number, default value 8
// mood: number, default value 6
// sick: boolean, default false
// rehomed: boolean, default false
// Do not edit below this line

module.exports = Tamagotchi;
