import logo from 'assets/logo60.png';
import { useEffect, useState } from 'react';
import Loading from 'components/LoadingBox';
import Error from 'components/ErrorBox';
import NotFound from 'components/NotFound';
import Card from 'components/Card';

// Style App header
function App() {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchInitialCards() {
      try {
        const response = await fetch('https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json');
        const parsedResponse = await response.json();

        if (parsedResponse?.trees?.length > 0) {
          setCards(parsedResponse.trees);
        }
      } catch (err) {
        setError(err || 'There has been a problem with the fetch operation');
      }
      setIsLoading(false);
    }

    fetchInitialCards();
  }, []);

  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <span className="bold">
          Tree Showcase
        </span>
      </header>
      {isLoading && <Loading />}
      {error && <Error msg={error} />}
      {cards && (
        <div className="flex flex-wrap justify-around flex-col lg:flex-row">
          {cards.map((cardData) => (
            <Card
              key={`${cardData.name}-${cardData.species_name}`}
              name={cardData.name}
              speciesName={cardData.species_name}
              imageSrc={cardData.image}
            />
          ))}
        </div>
      )}
      {!isLoading && !cards && !error && <NotFound />}
    </div>
  );
}

export default App;
