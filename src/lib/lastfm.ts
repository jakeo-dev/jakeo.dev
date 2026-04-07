const LASTFM_API_URL =
  "https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks";

export interface TopTrack {
  title: string;
  artist: string;
  albumArt: string;
  url: string;
  playcount: number;
}

async function fetchLastFmData(): Promise<unknown> {
  const { LASTFM_API_KEY, NEXT_PUBLIC_LASTFM_USERNAME } = process.env;

  if (!LASTFM_API_KEY || !NEXT_PUBLIC_LASTFM_USERNAME) {
    return null;
  }

  const url = `${LASTFM_API_URL}&user=${NEXT_PUBLIC_LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&period=1month`;
  const response = await fetch(url);
  return response.json();
}

export async function getTopTrack(): Promise<TopTrack | null> {
  try {
    const data = (await fetchLastFmData()) as {
      toptracks?: { track?: Array<Record<string, unknown>> };
    };
    const track = data.toptracks?.track?.[0];

    if (!track) return null;

    const artist = track.artist as { name: string };
    const image = track.image as Array<{ "#text"?: string }> | undefined;

    return {
      title: track.name as string,
      artist: artist?.name ?? "",
      albumArt: image?.[2]?.["#text"] ?? "",
      url: track.url as string,
      playcount: Number(track.playcount) ?? 0,
    };
  } catch {
    return null;
  }
}

export async function getLastFmRaw(): Promise<unknown> {
  try {
    return await fetchLastFmData();
  } catch {
    return null;
  }
}
