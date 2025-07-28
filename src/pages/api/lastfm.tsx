import { NextApiRequest, NextApiResponse } from "next";

export default async function lastfm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // set api key and username
  const { LASTFM_API_KEY, NEXT_PUBLIC_LASTFM_USERNAME } = process.env;

  if (!LASTFM_API_KEY || !NEXT_PUBLIC_LASTFM_USERNAME) {
    return res.status(500).json({ error: "missing api key or username" });
  }

  // last.fm tracks with most scrobbles from jakeybakers in the 7 days, in json format
  const API_URL = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${NEXT_PUBLIC_LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&period=1month`;

  try {
    const response = await fetch(API_URL); // fetch api response from last.fm url (wait for fetching)
    const data = await response.json(); // get data from fetched response (wait for conversion to json)
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "error fetching last.fm data" });
  }
}
