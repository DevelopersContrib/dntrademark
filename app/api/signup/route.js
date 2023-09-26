import axios from 'axios'

export const POST = async (request) => {
	const data = await request.json();
	const email = data.email;

	try {
        const urlCheck = process.env.API_URL+'/user/check?api_key='+process.env.API_KEY+'&email='+email
        // wakekeke
        const checkRes = await axios.get(urlCheck);
        if(/*!checkRes.data.data.success &&*/ checkRes.data.data.data.length==0){
            /*const params = new URLSearchParams();
            params.append('first_name', data.firstName);
            params.append('last_name', data.lastName);
            params.append('email', data.email);
            params.append('password', data.password);
            
            const urlSave = process.env.API_URL+'/user/save?api_key='+process.env.API_KEY           
            const saveRes = await axios.post(urlSave, params);
            
            if(saveRes.data.data.success){                
                const signinUrl = process.env.API_URL+'/auth/login?api_key='+process.env.API_KEY+'&email='+data.email+'&password='+data.password
                const signinRes = await axios.post(signinUrl,params);
                
                return new Response(JSON.stringify({success:true,data:signinRes.data}), { status: 201 })
            }else{
                return new Response(JSON.stringify(saveRes.data.data), { status: 201 })
            }*/
            return new Response(JSON.stringify({success:true}), { status: 201 })
        }else{
            return new Response(JSON.stringify({success:false,error:'User already exist'}), { status: 201 })
        }
	} catch (error) {
        console.log('error',error)
        return new Response(JSON.stringify({urlCheck:process.env.API_URL+'/user/check?api_key='+process.env.API_KEY+'&email='+email, success:false,error:error,errorMsg:"An error occurred"}), { status: 500 });
	}
}