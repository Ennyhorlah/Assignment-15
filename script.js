// user data as a parameter
const userData = {
    name: "Esther Mikel",
    age: "56",
    email: "esthermikel@gmail.com"
};

fetch(url)
 .then(response => {
    // response with the userData
 })
 .then(data => console.log(data))


 // Promise.all to handle multiple fetch() request
    const urls = [
        'https://httpbin.org/get',
        'https://httpbin.org/get',
        'https://httpbin.org/get',
        'https://httpbin.org/get'
    ];
    
    Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
        .then((jsons) => {
            jsons.forEach((json) => console.log(json));
        })



// fetch and method DELETE
const id = {
    name: "John Doe",
    address: "Elemona Estate",
    age: "65",
    occupation: "Self Employed",
    email: "johndoe@yahoo.com"
};
fetch(api-url, {
   method: 'DELETE' 
})
.then(response => 'Delete successful')
.then(id => console.log(id))


// asyn fuction using fetch, setting the method to POST
async function postData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',       
        },
        body: JSON.stringify(data), 
      });
  
      
      if (response.ok) {
        const result = await response.json(); 
        console.log('Success:', result);
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  }


  // fetch data from API
  const apiUrl = 'https://api.example.com/users/recent';
const queryParams = {
  timeframe: '30days',
};

const queryString = new URLSearchParams(queryParams).toString();
const fullUrl = `${apiUrl}?${queryString}`;

fetch(fullUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(recentUsers => {
    console.log('Recent Users:', recentUsers);
  })
  .catch(error => {
    console.error('Error:', error);
  });



// async function with specified URL(API endpoint)
async function getResponse() {
	const response = await fetch(
		'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=100&vehicle=SmallDieselCar',
	)
    .then(response.json() ) // Extracting data as a JSON Object from the response
       console.log(getResponse);
}

// wrap fetch code in a try...catch block
const fetchData = async()=>{
    try{
        const response = await fetch('https://api.example.com/data');
        const jsondata = await response.json();
        
    }catch(error){
        console.log("Error Fetching data ",error);
    }
   
}


//input and button
let myUsername = document.getElementById('username');
console.log(myUsername);


// button and an empty ul element
const button = document.addEventListener("submit", (e) => {
    e.preventDefault();
});
fetch(url)
.then(response => response.json())


// create button
fetch('https://fakestoreapi.com/products')
 .then(response => response.json())
 .then(json => console.log(json))  

    return data.json()
   .then((objectdata) => {
    console.log(objectdata);
   })

   
    