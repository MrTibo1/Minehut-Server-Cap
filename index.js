const url = 'https://api.minehut.com/network/simple_stats'

async function updatePlayerCount() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const serverCount = data.server_count;
    const serverMax = data.server_max;
    document.getElementById('cap').textContent = `${server_count}/${serveR_max}`;
  } catch (error) {
    console.error(error);
  }
}

setInterval(updatePlayerCount, 10000);
