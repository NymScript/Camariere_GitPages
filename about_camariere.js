const ctx = document.getElementById('lineChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [
            {
                label: 'With Camariere',
                data: [30, 27, 42, 51, 53, 70, 79],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Without Camariere',
                data: [30, 27, 20, 34, 30, 35, 40],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#000000' // Color del texto de los labels del eje y a negro
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#000000' // Color del texto de las leyendas a negro
                }
            }
        }
    }
});

