import 'whatwg-fetch'

export default class Http{

    static async get(url,data){
        if(data){
            var params = Object.entries(data).reduce((arr, [k, v]) => arr.concat(encodeURIComponent(k) + '=' + encodeURIComponent(v)), []).join('&');
        }else{
            var params = false;
        }
        

        
        try{
            if(params){
                var response = await window.fetch(url+'?'+params);
            } else{
                var response = await window.fetch(url);
            }
            let data = await response.json();
            
            return data;
        } catch(error){
            console.log(error);
        }
    }

    static async post(url,data){
        try{
            let response = await fetch(url,{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    data
                })
            })

            return response;
        }catch(error){
            throw new Error(error)
        }
    }
  }