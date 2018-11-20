var house = {
        areas: [{
            livingRoom: {
                items: ['tv','sofa'],
            },
            bedroomOne: {
                items: ['bed','washing machine'],
                    windows: 3
            },
            bedroomTwo:{
                items: ['bed','bed','desk'],
                    windows: 4
            },

            kitchen:{
                items: ['fridge','broken chair'],
            }
            }],

        garden: [true, 'Red Rose'],

        garage: {
            car: {
                    color: 'red',
                    wheels: 4,
                    honk: ()=>{alert("Beep")}
                    }
                }       
            }



// Find total number of areas in the house

let totalAreas = Object.keys(house.areas[0]);
console.log('Total areas in the house are ',totalAreas.length);

// Add a dining table to the living room

house.areas[0].livingRoom.items.push('dining table');
console.log('Check out my new dining table!' , house.areas[0].livingRoom.items);

// Add a stove to the kitchen

house.areas[0].kitchen.items.push('stove');
console.log('Check out my stove!', house.areas[0].kitchen.items)

// Remove the washing machine from bedroomOne

house.areas[0].bedroomOne.items.pop();
console.log('total # items in bedroomOne is', house.areas[0].bedroomOne.items)

// Find the total number of beds in all rooms

let totalBeds = 0;
Object.values(house.areas[0]).forEach(
    (area)=>{
        if(area.items.includes('bed')){
           // Find all items that are 'bed' and put it into an array
           let allTheBeds = area.items.filter(item=>item == 'bed');
           // Increase bedCounter
           totalBeds += allTheBeds.length;
        }
    }
);
console.log('total number of beds', totalBeds);

// Change the color of the car to blue

house.garage.car.color = 'blue';
console.log('The car color is now ',house.garage.car.color);

// Add a another car to the garage with a honk function
house.garage.newCar = {
    color: "magenta",
    wheels: 4,
        honk: ()=>{
            alert("BEEEEPPP BEEEEPPPPPPPP")
        }
}

// Make the new car honk

house.garage.newCar.honk();

// Change the 'broken chair' in the kitchen to 'new chair'

let positionOfBrokenChair = house.areas[0].kitchen.items.indexOf('broken chair')

house.areas[0].kitchen.items[positionOfBrokenChair]

house.areas[0].kitchen.items[positionOfBrokenChair] = 'new chair'

console.log('Do you like my new chair?', house.areas[0].kitchen.items)

// If the house has a garden, console.log the name of the flower

if (house.garden[0]) {
   console.log('the name of the flower is', house.garden[1]);
}




