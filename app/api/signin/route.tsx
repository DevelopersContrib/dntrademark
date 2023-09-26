import { NextResponse } from 'next/server';
import axios from 'axios';

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const apiUrl = process.env.API_URL + 'auth?api_key=' + process.env.API_KEY;

    const params = new URLSearchParams();
    params.append('email', data.email);
    params.append('password', data.password);

    const res = await axios.post(apiUrl, params);
    const result = res.data;

    return NextResponse.json(result.data);
  } catch (error) {
    return error;
  }
};