import React, { useEffect, useState } from 'react';

const Artikel = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=pertanian&language=id&apiKey=${process.env.REACT_APP_BERITA}`);
        const data = await response.json();

        if (data && Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          setArticles([]);
          ``;
          console.error('Articles tidak ditemukan di response');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchBerita();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Berita Pertanian Terbaru</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : Array.isArray(articles) && articles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 6).map((article, index) => (
            <div key={index} className="bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-lg  rounded-lg  overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={article.urlToImage || 'https://via.placeholder.com/400x250'} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col h-full">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 dark:text-gray-200 flex-grow">{article.description ? article.description.substring(0, 100) + '...' : 'Tidak ada deskripsi'}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold">
                  Baca Selengkapnya &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Tidak ada berita ditemukan.</p>
      )}
    </div>
  );
};

export default Artikel;
