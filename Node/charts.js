const Chart = require('chart.js');

const materialChart = new Chart(document.getElementById('material-chart'), {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Matériaux',
      data: [],
      backgroundColor: []
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Matériaux utilisés'
    }
  }
});

const furnitureDesignChart = new Chart(document.getElementById('furniture-design-chart'), {
  type: 'pie',
  data: {
    labels: [],
    datasets: [{
      label: 'Conceptions de meubles',
      data: [],
      backgroundColor: []
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Conceptions de meubles'
    }
  }
});

//...