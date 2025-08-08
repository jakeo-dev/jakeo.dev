import { useEffect, useState } from "react";

export default function TopTrack() {
  const [currentSong, setCurrentSong] = useState<{
    title: string;
    artist: string;
    albumArt: string;
    url: string;
    playcount: number;
  } | null>(null);

  useEffect(() => {
    async function fetchSong() {
      try {
        const response = await fetch("/api/lastfm"); // fetch api response from api route: lastfm.tsx (wait for fetching)
        const data = await response.json(); // get data from fetched response (wait for conversion to json)
        const track = data.toptracks?.track?.[0]; // get the first track in the list of top tracks
        console.log(data);
        console.log(track);

        setCurrentSong({
          title: track.name,
          artist: track.artist["name"],
          albumArt: track.image?.[2]["#text"],
          url: track.url,
          playcount: track.playcount,
        });
      } catch (error) {
        console.error("error fetching last.fm data: " + error);
      }
    }

    fetchSong();

    // re-fetch data every 3600000 milliseconds (1 hour)
    //const interval = setInterval(fetchSong, 3600000);
    //return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className="inline">
        <a
          href={currentSong?.url}
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          {currentSong ? currentSong.title : "[LOADING]"}
        </a>{" "}
        by {currentSong ? currentSong.artist : "[LOADING]"}
        {/* , with{" "}
        {currentSong ? currentSong.playcount : 0} scrobbles this month */}
      </span>
    </>
  );
}

{
  /* <div className="w-fit text-left md:text-right">
      <div className="flex items-center md:float-right">
        <FontAwesomeIcon
          icon={faMusic}
          className="mr-1.5 text-sm"
          aria-hidden
        />
        <h2>{currentSong ? currentSong.title : "Loading song..."}</h2>
      </div>
      <p className="block text-sm text-gray-600">
        {currentSong ? currentSong.artist : "..."}
      </p>
      <p className="block text-sm text-gray-600">
        {currentSong ? currentSong.playcount : 0} scrobbles this month
      </p>
    </div> */
}
