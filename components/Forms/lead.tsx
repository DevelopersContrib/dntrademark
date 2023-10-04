// components/LeadForm.tsx
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

// Define constant domain using environment variable
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || 'dntrademark.com';

interface ApiResponse {
  status: boolean;
  lead?: any;
  email?: string;
  result?: string;
  error?: string;
}

const LeadForm = () => {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post<ApiResponse>('/api/lead/route', { email, domain: DOMAIN });
      setStatus(response.data.status ? 'Success' : 'Failed');
    } catch (error) {
      setStatus('Error occurred while submitting the form');
    }
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleInputChange(setEmail)} required />
      </label>
      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default LeadForm;
