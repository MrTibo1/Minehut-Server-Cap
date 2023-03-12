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
      document.getElementById('info').textContent = `Yes! You will have to wait In Queue for your server to start`;
    } else {
      document.body.style.backgroundColor = 'aquamarine';
      document.getElementById('info').textContent = `No! You can start your server immediately`;
    }
  } catch (error) {
    console.error(error);
  }
}
updateData()
setInterval(updateData, 5000);
