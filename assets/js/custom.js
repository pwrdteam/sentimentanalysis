$(document).ready(function () {
    // Circular Progressbar library Activation

    $('.circlechart').circlechart();

    $(window).on('load', function () {
        $('#myModal').modal('show');
    });
    // $('#filter-select label').click( function() {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });

    // User Greeting 
    var CD = new Date();
    var hrs = CD.getHours();
    var greet;
    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';
    // document.getElementById('lblGreetings').innerHTML =  greet  + ' Mark,';

    // DatePicker Activation
    $(function() {
            var start = moment().subtract(29, 'days');
            var end = moment();
            function cb(start, end) {
                $('#reportrange span').html(start.format("D MMM'YY") + ' - ' + end.format("D MMM'YY"));
            }
            $('#reportrange').daterangepicker({
                startDate: start,
                endDate: end,
                ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            }, cb);

            cb(start, end);

    });

    // StackBar Controller 
    var ctx = document.getElementById('ctx').getContext('2d');

        var chart = new Chart(ctx, {
        type: 'bar',
        tooltips: {
            enabled: true
        },
         hover: {
            animationDuration: 0
        },
        height:215,
        data: {
            //labels: ['Standing costs', 'Running costs'], // responsible for how many bars are gonna show on the chart
            //create 12 datasets, since we have 12 items
            //data[0] = labels[0] (data for first bar - 'Standing costs') | data[1] = labels[1] (data for second bar - 'Running costs')
            //put 0, if there is no data for the particular bar
            labels: [''],
            datasets: [{
                label: 'Abusive',
                data: [3],
                backgroundColor: '#e52854'
            }, {
                label: 'Negative',
                data: [3],
                backgroundColor: '#8a8987'
            }, {
                label: 'Neutral',
                data: [3],
                backgroundColor: '#efc715'
            }, {
                label: 'Very Good',
                data: [3],
                backgroundColor: '#00a887'
            }]
        },
            options: {
                maintainAspectRatio: false,
                showAllTooltips: true,
                responsive: false,
                tooltips: {
                  displayColors: false,

                },
                legend: {
                    position: 'bottom', // place legend on the right side of chart
                    fill: false,
                    labels: {
                        usePointStyle: true,
                        boxWidth: 0.5,
                        pointRadius: 5,
                        fontSize: 7,
                        align:'right'
                 }
                },
                scales: {
                    xAxes: [{
                        stacked: true, // this should be set to make the bars stacked
                        display: false,
                        barThickness : 35,
                        maxBarThickness: 35,
                        minBarLength: 30,
                    }],
                    yAxes: [{
                        stacked: true, // this also..
                        display: false
                    }]
                }
            },
    });
});


// Apex Charts
// Amp Charts
// Canvas JS
// Chart Js
// High Charts
