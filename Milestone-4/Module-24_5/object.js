const hero = {
    name: 'sakib khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['raaz', 'Salman', 'Apu', 'Riaz', 'Shuvo'],
    movies: [{name: 'no. 1', year: 2015}, {name: 'king khan', year: 2018}],
    act: function(){
        console.log('acting like Sakib Khan')
    },
    car: {
        brand:'tesla',
        price: 500000000,
        made: 2022,
        manufacturer:{
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA',
        }
    }

}
// console.log(student.car);
console.log(hero.act);
hero.act();