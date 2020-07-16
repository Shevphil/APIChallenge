//api key :$2a$10$UHCHoNOAFXiZlmpPd3kIkOxzQvrVZKm1vewUPQDncTvCZoB9QIlzW

const apiKey = '$2a$10$UHCHoNOAFXiZlmpPd3kIkOxzQvrVZKm1vewUPQDncTvCZoB9QIlzW';

let sortHat = async(houseName) => {
    try {
        let result = await fetch('https://www.potterapi.com/v1/sortingHat');
        let data = await result.json();
        console.log(data);
        displayHouse(data);

        let houseResult = await fetch(`https://www.potterapi.com/v1/houses?key=`+ apiKey);
        let newData = await houseResult.json();
                console.log(newData);
                displayValues(newData, data)
                
                //display function here *invoke it
       
            } catch {
                console.error('YOURE A MUGGLE!');
            }
            
        }
 
let houseMember = async(memberId) => {
    try {
        let memberResults = await fetch(`https://www.potterapi.com/v1/characters/${memberId}?key=` + apiKey);
        let memberData = await memberResults.json();
        await console.log(memberData);
        displayHouseMember(memberData);

    } catch {
        console.error('YOU IDIOT SANDWICH');
    }
}
        document.getElementById('sortingButton').addEventListener('click', event => {event.preventDefault();sortHat();}); 
        
        let resultArea = document.getElementById('results');
        
        let displayHouse = (data) => {
            resultArea.textContent = undefined;
            let house = document.createElement('h2');
            house.innerText = 'Better Be ' + data + "!";
            resultArea.appendChild(house);
        }
        let displayValues = (newData, data) => {
            let values = document.createElement('h3');
            let headOfHouse =document.createElement('h1')
            for (let i=0; i< newData.length; i++)
                if (newData[i].name === data) {
                values.innerText = newData[i].values[0] + ', ' + newData[i].values[1] + ', ' + newData[i].values[2] +', ' + newData[i].values[3];
                resultArea.appendChild(values);
                headOfHouse.innerText = 'Your Head of House: ' + newData[i].headOfHouse;
                resultArea.appendChild(headOfHouse); 
                let memberId = newData[i].members[11];
                let memberIDTwo = newData[i].members[6];
                houseMember(memberId);
                houseMember(memberIDTwo);
                } 
}

        let displayHouseMember = (memberData) => {
            let memberName = document.createElement('h1');
            memberName.innerText = memberData.name;
            resultArea.appendChild(memberName);
        }
//      if {
//         document.getElementsByTagName("p")[1].innerText = `Better Be... ${data.json}!`;
//      } else {

//      }   
// });

//let displayHouse = sortedStudent() {

//}

// fetch('https://www.potterapi.com/v1/sortingHat')
//     .then(function(response) {
//         return response.json();
//         console.log(response);
//     })
//     .catch((error)=> console.error(error));

// let House = fetch('https://www.potterapi.com/v1/sortingHat')
// .then(function(sorted){
//     return sorted.json();
    
// }).then(function(json){
//     console.log(json);
// })



//event => { event.preventDefault(); House()
        //})
