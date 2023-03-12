const url = 'https://api.minehut.com/network/simple_stats/'

async function updateData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const serverCount = data.server_count;
    const serverMax = data.server_max;
    document.getElementById('cap').textContent = `${serverCount}/${serverMax}`;
    if (serverCount > serverMax) {
      document.body.style.backgroundColor = 'crimson';
    } else {
      document.body.style.backgroundColor = 'aquamarine';
    }
  } catch (error) {
    console.error(error);
  }
}

setInterval(updateData, 5000);
