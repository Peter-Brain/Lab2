class Port {

    constructor(name,country,number,adress) {
        this.piers = []
        this.name = name;
        this.country=country;
        this.number=number;
        this.adress=adress;
    }
}
class Ship {
    constructor(name,bnumber,country,tonnage
        ) {
   
        this.bnumber=bnumber;
        this.country=country;
        this.tonnage=tonnage;
        this.name = name;
    }
}

class Pier {
    constructor(port,number,max) {
        
        this.port=port.name;
        this.number=number;
        this.ships=[];
        
    }
}
var ships = []
var ports = []
var piers = []


/* a */
function addShip(name,bnumber,country,tonnage){
    ships.push(new Ship(name,bnumber,country,tonnage)
    )
}

/* b */
function editShip(ships, index, newName ){
    ships[index].name = newName
   
}

/* c */
function removeShip(ships, index){
    ships.splice(index,1);
}

/* d */
function searchShip(ships, name){
    for (var i = 0; i < ships.length; i++){
        if (ships[i].name === name){
            return ships[i]
        }
    }
}
function addPort(name,country,number,adress){
    ports.push(new Port(name,country,number,adress))
}

/* b */
function editPort(ports, index, newName ){
    ports[index].name = newName
   
}

/* c */
function removePort(ports, index){
    ports.splice(index,1);
}

/* d */
function searchPort(ports, name){
    for (var i = 0; i < ports.length; i++){
        if (ports[i].name === name){
            return ports[i]
        }
    }
}
function addPiertoPort(port,number,max){

    port.piers.push(new Pier(port,number,max));
}
function removePierfromPort(port, index){
    port.piers.splice(index,1);
}
function addShiptoPier(pier,ship){

    pier.ships.push(ship);
}
function removeShipfromPier(pier, index){
    pier.ships.splice(index,1);
}
function allShips(ships){
    for (var i = 0; i < ships.length; i++){
        console.log('\t' + ships[i].name+'\t'+ships[i].country+' '+ships[i].bnumber)
    }
    console.log('\n\n')
    
}
function allShipsOnPort(port){
    for (var i = 0; i < port.piers.length; i++){
        console.log('Pier :'+port.piers[i].number+'\t');
        for (var j = 0; j < port.piers[i].ships.length; j++){

        console.log('\t' + port.piers[i].ships[j].name +'\t' + port.piers[i].ships[j].country)
    }
}
    console.log('\n\n')
    
}
addShip('S1',101,"Romania",1054);
addShip('S2',102,"Georgia",2078);
addShip('S3',103,"Bulgaria",4093);
addShip('S4',104,"Romania",2247);
addShip('S5',105,"Turkey",3394);
addShip('S6',106,"Russia",2543);
addShip('S7',107,"Bulgaria",1987);
addShip('S8',108,"Turkey",3121);
addShip('S9',109,"Romania",2400);
addShip('S10',110,"Bulgaria",2853);
addShip('S11',111,"Georgia",3495);

allShips(ships);
//editShip(ships,0,'M1');
//allShips(ships);
//removeShip(ships,3);
allShips(ships);
//console.log(searchShip(ships,'S2'));


addPort('Port_1','Ukraine',1,'Odessa');
addPort('Port_2','Ukraine',2,'Herson');
console.log(ports);

//editPort(ports,1,'P4')
//console.log(ports);
//removePort(ports,1);
//console.log(ports);
//console.log(searchPort(ports,'P1'))

 
addPiertoPort(ports[0],1,5);
addPiertoPort(ports[0],2,3);
addPiertoPort(ports[0],3,4);
addPiertoPort(ports[0],4,4);
addPiertoPort(ports[1],5,4);
addPiertoPort(ports[1],6,4);

//console.log(searchPort(ports,'Port_1'))
//removePierfromPort(ports[1],1);
addShiptoPier(ports[0].piers[0],ships[0]);
addShiptoPier(ports[0].piers[1],ships[1]);
addShiptoPier(ports[0].piers[1],ships[2]);
addShiptoPier(ports[0].piers[2],ships[3]);
addShiptoPier(ports[0].piers[2],ships[4]);
addShiptoPier(ports[0].piers[3],ships[5]);
addShiptoPier(ports[0].piers[3],ships[6]);
addShiptoPier(ports[0].piers[3],ships[7]);
addShiptoPier(ports[1].piers[0],ships[8]);
addShiptoPier(ports[1].piers[0],ships[9]);
addShiptoPier(ports[1].piers[1],ships[10]);
//addShiptoPier(ports[0].piers[0],ships[1]);
//console.log('\n');

//console.log(ports[0].piers[1]);
allShipsOnPort(ports[1]);


//console.log(ports[1].piers[0]);
//console.log('\n');
//allShips(ships)

