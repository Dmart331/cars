
 //  Create a function named Car with one property named `manufactured_date`
 //  whose value will be Date.now()
 // */
function Car() {
 this.manufactured_date = Date.now();
  // Create the manufactured date property (see above)
};


/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value. 
         For, example, this.manufacturer = "Ford".
 */
function FavMake () {
  this.manufacturer = "Honda";
}
// Set the prototype to a new Car instance

FavMake.prototype = new Car();

let newCar = new FavMake();
/*
  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
function FavoriteModel () {
  this.model = "Civic Hatch";
  this.engine = "B18C";
  this.boost = true;
}

FavoriteModel.prototype = new FavMake();

firstCivic = new FavoriteModel()
firstCivic.color = "teal";
firstCivic.hp = 280;
console.log("first: " , firstCivic);


function SecondModel(){
  this.engine = "H22A";
  this.boost = false;
  this.suspension = "Skunk2";
}

SecondModel.prototype = new FavoriteModel();

let secCivic = new SecondModel();
console.log("Second: " , secCivic);

function ThirdModel(){
  this.engine = "d16";
  this.boost = false;
  this.color = "White";
  this.smoke = true;
  this.MPG = 45 + "mpg";
}

ThirdModel.prototype = new FavoriteModel();
let thirdCivic = new ThirdModel();
console.log("Third: " , thirdCivic)
// Set the prototype to appropriate model you created above and set the model name argument
// YourFavoriteModel.prototype = new ???;

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/
// var myFirstFavoriteCar = new ???;
// myFirstFavoriteCar.plate_number = "";
// ...


/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
function AnotherModel () {
  this.model = "S2000";
  this.engine = "F20C";
}

AnotherModel.prototype = new FavoriteModel();
/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */



// /*
//   Now create an instance of this new car model to put in your garage. Remember
//   to give it a plate number.
//  