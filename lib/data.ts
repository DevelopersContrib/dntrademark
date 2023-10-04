// Note the .ts extension for non-component files.
import axios from "axios";

const DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL || 'javapoint.com';

// Use a generic fetcher function to handle API requests.
async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export function getDomain(): string {
  // Removed headers dependency, you can get domain in another way if it's crucial.
  // For example, by passing it as an argument to functions if it's known in components.
  return DOMAIN;
}

export async function getData() {
  const domain = getDomain();
  const url = `${process.env.CONTRIB_API1}&domain=${domain}`;
  return fetcher(url);
}

export async function getTopsites() {
  const domain = getDomain();
  const url = `${process.env.CONTRIB_API1_TOPSITES}&domain=${domain}`;
  return fetcher(url);
}

export async function getUserWidget() {
  const domain = getDomain();
  const url = `${process.env.CONTRIB_USERS}&domain=${domain}`;
  return fetcher(url);
}

export async function getRelatedDomains() {
  const domain = getDomain();
  const url = `${process.env.RELATED_DOMAINS}&domain=${domain}`;
  return fetcher(url);
}

export async function getScript(url: string) {
  try {
    const res = await axios.get(url);
    return res.data.data.content;
  } catch (e) {
    console.error("Error getScript", e);
    throw e; // or return an error object if you prefer
  }
}
