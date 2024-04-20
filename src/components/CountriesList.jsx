import styles from "./CountriesList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { UseCities } from "../contexts/CitiesContexts";

function CountriesList() {
  const { cities, isLoading } = UseCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message=" Add You First City By Clicking On A City On The Map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <div className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </div>
  );
}

export default CountriesList;
