google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data

    let item = 7
    let array = []
    let array2 = []
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

//---------------------------------------
//Devexpress AutoComplete
$(function () {
    const dataSource = new DevExpress.data.DataSource({
        store: {
            type: 'array',
            data: employeesTasks,
            key: 'ID',
        },
        //group: 'Assignee',
    });

    $('#autocomplete').dxAutocomplete({
        dataSource,
        valueExpr: "ID",
        searchExpr: ["Assignee", "ID", "Subject", "tel"],
        label: "Search for a task",
        labelMode: "floating",
        //grouped: true,
        showClearButton: true,
        // groupTemplate ({ key }) {
        //     return "Assigned to " + key;
        // },
        onValueChanged: function (e) {
            console.log(e.value);
            console.log(e.previousValue);
        },
        itemTemplate({ Subject, Assignee }, index) {
            return index + 1 + '. ' + Subject + '-' + Assignee;
        },
        wrapItemText: true,
        searchTimeout: 300,
        maxLength: 20,
    });
});