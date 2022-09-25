google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data

    let item = 7
    let array = []
    let first = 50
    array.unshift(['Price', 'Size'])

    for (let i = 7; i <= 15; i++) {
        array.push([first += 10, Math.floor(Math.random() * 10)])
    }

    data = google.visualization.arrayToDataTable(array);
    // Set Options
    var options = {
        title: 'zbt',
        hAxis: { title: 'Square Meters' },
        vAxis: { title: 'Price in Millions' },
        legend: 'none'
    };
    // Draw
    var chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
}