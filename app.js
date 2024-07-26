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

async function buildList() {
  try {
    const apiData = await getApi();

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
    const dateStr = date.toLocaleString();
    currentTime.textContent = `Last updated: ${dateStr}`;
    container.append(currentTime);
  } catch (error) {
    console.error(error);
  }
}

buildList();
