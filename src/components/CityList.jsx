import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { UseCities } from "../contexts/CitiesContexts";

function CityList() {
  const { cities, isLoading } = UseCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message=" Add You First City By Clicking On A City On The Map" />
    );

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
}

export default CityList;
