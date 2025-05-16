export const fetchData = async () => {
    const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
    return response.json();
  };
  