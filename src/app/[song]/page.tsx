import React from 'react';
import songs from '../songs';

export function generateStaticParams() {
  return songs.map((song) => ({
    song: song.slug,
  }));
}

export default function SongPage({ params }: { params: { song: string } }) {
  const song = songs.find((song) => song.slug === params.song);
  return (
    <div>
      <h1>{song?.title}</h1>
      <h2>{song?.artist}</h2>
      <p>{song?.duration}</p>
      <p>{song?.lyrics}</p>
    </div>
  );
}
