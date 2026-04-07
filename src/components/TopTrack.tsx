import type { TopTrack } from "@/lib/lastfm";

interface TopTrackProps {
  track: TopTrack | null;
}

export default function TopTrack({ track }: TopTrackProps) {
  return (
    <>
      <span className="inline">
        <a
          href={track?.url}
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          {/* regex to get rid of "remastered" thing from song title */}
          {track
            ? track.title.replace(/ ([-–—] |\()((.+)?remaster(.+)?)/i, "")
            : "[UNAVAILABLE]"}
        </a>{" "}
        by {track ? track.artist : "[UNAVAILABLE]"}
      </span>
    </>
  );
}
