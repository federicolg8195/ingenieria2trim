var apiUrl = "https://api.bluelytics.com.ar/v2/latest";

fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`Error al obtener datos. Código de estado: ${response.status}`);
    }
  })
  .then(data => {
    var oficialValueAvg = data.oficial.value_avg;
    var blueValueAvg = data.blue.value_avg;
    
  })
  .catch(error => {
    console.error("Ocurrió un error:", error);
  });