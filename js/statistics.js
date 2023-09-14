

  var proteinCtx = document.getElementById('protein-chart').getContext('2d');
  var proteinData = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    datasets: [{
      label: 'Білки',
      data: [80, 90, 70, 85, 75, 95, 100], // Додайте дані для білків
      backgroundColor: '#ff5733',
    }]
  };
  var proteinChart = new Chart(proteinCtx, {
    type: 'line',
    data: proteinData,
  });



  var carbsCtx = document.getElementById('carbs-chart').getContext('2d');
  var carbsData = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    datasets: [{
      label: 'Вуглеводи',
      data: [150, 140, 160, 145, 155, 135, 130], // Додайте дані для вуглеводів
      backgroundColor: '#33ff57',
    }]
  };
  var carbsChart = new Chart(carbsCtx, {
    type: 'line',
    data: carbsData,
  });



  var fatsCtx = document.getElementById('fats-chart').getContext('2d');
  var fatsData = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
    datasets: [{
      label: 'Жири',
      data: [50, 45, 55, 60, 48, 52, 58], // Додайте дані для жирів
      backgroundColor: '#5733ff',
    }]
  };
  var fatsChart = new Chart(fatsCtx, {
    type: 'line',
    data: fatsData,
  });

