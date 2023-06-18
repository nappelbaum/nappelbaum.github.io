// let getdbSkills = [];

async function getResourse(url) {
  const res = await fetch(`${url}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error(`Could not fetch${url}, status: ${res.status}`);
  }

  return await res.json();
}

function getSkills() {
  getResourse("")
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.error(err));
}

window.addEventListener("DOMContentLoaded", getSkills);

// export default getSkills;
