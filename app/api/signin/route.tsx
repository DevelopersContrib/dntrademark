import { NextResponse } from 'next/server';
import axios from 'axios';

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    // const apiUrl = process.env.API_URL + 'auth/login?api_key=' + process.env.API_KEY;
    const apiUrl = 'https://api.dntrademark.com/api/v1/auth/login?api_key=6334aed4bdce9855f400653800596920';

    console.log(apiUrl);

    const params = new URLSearchParams();
    params.append('email', data.email);
    params.append('password', data.password);

    const res = await axios.post(apiUrl, params);
    const result = res.data;

    return NextResponse.json(result);
  } catch (error) {
    return error;
  }
};
