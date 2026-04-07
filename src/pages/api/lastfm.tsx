import { NextApiRequest, NextApiResponse } from "next";
import { getLastFmRaw } from "@/lib/lastfm";

export default async function lastfm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await getLastFmRaw();

    if (!data) {
      return res.status(500).json({ error: "error" });
    }

    res.status(200).json(data);
  } catch {
    res.status(500).json({ error: "error fetching last.fm data" });
  }
}
