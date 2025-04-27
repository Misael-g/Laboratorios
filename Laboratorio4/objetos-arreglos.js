// objetos

const user = {
    name: "Michael",
    lastname: "Garzón",
    age: 22,
    address: {
     streets: "Av. Amazonas y Naciones Unidas"
    }
  };
  
  const {name, lastname, age, address: { streets } } = user;
  console.log(name, lastname, age, streets);
  

  

// arrays
const users = [
    {
      name: "Andréa",
      lastname: "López",
      age: 21,
      address: { streets: "Av. 6 de Diciembre" }
    },
    {
      name: "Sebastián",
      lastname: "Álvarez",
      age: 23,
      address: { streets: "Av. República" }
    },
    {
      name: "Jorge",
      lastname: "Isa",
      age: 24,
      address: { streets: "Av. Shyris" }
    }
];

// Imprimiendo los datos del primer usuario
const { name: nameUser, lastname: lastnameUser, age: ageUser, address: { streets: streetUser } } = users[0];
console.log(nameUser, lastnameUser, ageUser, streetUser);