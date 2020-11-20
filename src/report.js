const baseHeaders = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'POST',
}

const report = (data, baseURL) => {
  fetch(baseURL, { ...baseHeaders, body: JSON.stringify(data) })
    .catch((res) => { console.log(res) })
};

export default report;
