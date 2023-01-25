const axios = require('axios');

const getData = async function () {
    let data = [];
    await axios.get('https://dummy.restapiexample.com/api/v1/employees')
        .then((response) => {
            data = response.data.data;
        })
        .catch((error) => {
            console.log(error);
        })
    
        data.map((employe)=> {
            console.log(employe.id);
        })
}

getData();
