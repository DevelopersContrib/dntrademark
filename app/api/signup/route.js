import axios from 'axios'

export const POST = async (request) => {
	const data = await request.json();
	const email = data.email;

	try {
        const urlCheck = process.env.API_URL+'/users/get?api_key='+process.env.API_KEY+'&field=email&value='+email

        const checkRes = await axios.get(urlCheck);
        if(/*!checkRes.data.data.success &&*/ checkRes.data.data.data.length==0){
            const params = new URLSearchParams();
            params.append('first_name', data.firstName);
            params.append('last_name', data.lastName);
            params.append('email', data.email);
            params.append('password', data.password);
            
            const urlSave = process.env.API_URL+'/users/add?api_key='+process.env.API_KEY
            
            const saveRes = await axios.post(urlSave, params);
            
            //console.log('saveRes.data.data.success',saveRes.data.data.success)
            
            if(saveRes.data.data.success){
                return new Response(JSON.stringify(saveRes.data.data), { status: 201 })
            }else{
                return new Response(JSON.stringify(saveRes.data.data), { status: 201 })
            }
            //return new Response(JSON.stringify({test:1}), { status: 201 })
        }else{
            return new Response(JSON.stringify({success:false,error:'User already exist'}), { status: 201 })
        }
	} catch (error) {
        console.log('error',error)
        return new Response("An error occurred", { status: 500 });
	}
}