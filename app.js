// YOUR JS CODE HERE
const container = document.querySelector(".container");

async function getApi() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1"
  );
  const data = await res.json();
  //   console.log(data);
  return data;
}

// getApi();

async function buildList() {
  const apiData = await getApi();
  //   console.log(apiData);
  //   apiData.forEach((post) => {
  //     const h1 = document.createElement("h1");
  //   });
  const tempHeader = document.createElement("h1");
  tempHeader.textContent = `${apiData.current.temperature_2m} ${apiData.current_units.temperature_2m}`;
  container.append(tempHeader);

  const h2 = document.createElement("h2");
  h2.textContent = `Wind speed: ${apiData.current.wind_speed_10m} ${apiData.current_units.wind_speed_10m}`;
  container.append(h2);

  const zoneHeader = document.createElement("h1");
  zoneHeader.textContent = `${apiData.timezone}`;
  container.append(zoneHeader);

  const currentTime = document.createElement("p");
  const date = new Date(`${apiData.current.time}`);
  //   console.log(typeof date, date);
  const dateStr = date.toLocaleString();
  //   console.log(typeof dateStr, dateStr);
  currentTime.textContent = `Last updated: ${dateStr}`;
  //   console.log(`Last updated: ${dateStr}`);
  container.append(currentTime);
}

buildList();

// const date = new Date("2024-11-25T10:00PM");
// date.toLocaleString();
