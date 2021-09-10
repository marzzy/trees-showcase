import logo from 'assets/logo60.png';
import { useEffect, useState } from 'react';
import Loading from 'components/LoadingBox';
import Error from 'components/ErrorBox';
import NotFound from 'components/NotFound';

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
      {/* TODO: cards */}
      {cards && <div> render cards </div>}
      {!isLoading && !cards && !error && <NotFound />}
    </div>
  );
}

export default App;
