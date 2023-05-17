const user = {
    FirstName : 'nika',
    LastName : 'ruxa',
    banks : {
        address :{
            city : 'khashuri'
        }
    }
};

const {banks: {address : {city} = {}}} =user;

console.log(city)

const user1 = {
    FirstName : 'nika',
    LastName : 'rukha',
    address :{
        street : 'lorem ipsum street'
    }

}

const user2 ={
    ...user1,
    address : {
        ...user1.address
    }
}

user2.address = 'somethings street'


console.log(user2)