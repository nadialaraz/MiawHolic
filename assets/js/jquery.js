window.onload = function() {

    var options = {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Data Sebaran Asal Member PawHolic di Indonesia"
        },
        legend:{
            horizontalAlign: "right",
            verticalAlign: "center"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: {y} (#percent%)",
            indexLabel: "{name}",
            legendText: "{name} (#percent%)",
            indexLabelPlacement: "inside",
            dataPoints: [
                { y: 75, name: "Sumatera" },
                { y: 102, name: "Jawa" },
                { y: 24, name: "Sulawesi" },
                { y: 28, name: "Kalimantan" },
                { y: 8, name: "Papua"},
            ]
        }]
    };
    
    $("#chartContainer").CanvasJSChart(options);
    
    }