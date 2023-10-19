import songs from './songs';

export default function Home() {
  return (
    <main className="min-h-screen p-12 bg-gray-200">
      <h1 className="text-3xl font-bold">Melhores Músicas do Mundo</h1>
      {songs.map((song) => (
        <a href={`/${song.slug}`}>
        <article className="p-4 mt-8 bg-white rounded-lg">
          <h2 className="text-2xl font-bold">{song.title}</h2>
          <h3>{song.artist}</h3>
        </article>
        </a>
      ))}
    </main>
  );
}
