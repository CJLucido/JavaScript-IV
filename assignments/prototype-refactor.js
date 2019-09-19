/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(props){
    this.createdAt= props.createdAt;
    this.name= props.name;
    this.dimensions = props.dimensions;
  
    GameObject.prototype.destroy = function(){
      return `${this.name} was removed from the game.`;
    };
  
  
  
  }; //end of GameObject constructor
  
  function CharacterStats(stats){
    GameObject.call(this, stats);//inherits from the higher constructor
    this.healthPoints = stats.healthPoints;
  
  }//end of CharStats constructor
  
  CharacterStats.prototype = Object.create(GameObject.prototype); //inherits/creates from the higher prototype
  
  CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage.`;
  };//1:1 CharacterStats prototype Fns
  
  
  function Humanoid(traits){
    CharacterStats.call(this, traits);
    
    this.team = traits.team;
    this.weapons = traits.weapons;
    this.language = traits.language;
  } // end of humanoid constructor
  
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  
  Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}.`
  }
  
  function Hero(virtues){
    Humanoid.call(this, virtues);
    this.divineMight = function(){
        return `${this.name} is immune to plights, makes it rain fire and radioactive light on opponent, destroying all villains`
    };
  }//end of hero constructor
  
  Hero.prototype = Object.create(Humanoid.prototype);
  
  function Villain(vices){
    Humanoid.call(this, vices);
    this.unrulyPlight = function(){
      return `A spell spoken in ${this.language} unleashes airbourne flesh eating bacteria, all but heros are taken to near death.`
    };
  }
  
  Villain.prototype = Object.create(Humanoid.prototype);
  
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const paladin = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 7,
        width: 7,
        height: 7,
      },
      healthPoints: 1000,
      name: 'Saint',
      team: 'Higher Realms',
      weapons: [
        'Incapatability of presence',
        'Sword',
      ],
      language: 'Unknown- Alpha Hz',
    });
  
    const demon = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 6,
        width: 6,
        height: 6,
      },
      healthPoints: 1,
      name: 'Materiel',
      team: 'Denser realms',
      weapons: [
        'Your vices',
        'Guilt',
        'Fear',
      ],
      language: 'Low Frequency',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(demon.unrulyPlight());
    console.log(paladin.divineMight());
    console.log(demon.destroy());
  
  