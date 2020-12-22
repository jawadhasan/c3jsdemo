
var app = function () {

    var summary = c3.generate({
        bindto: `#chart` ,
        data: {
            columns: [
                ['yes', 356],
                ['no', 120],
                ['none', 35]
            ],
            type: 'pie'
        },
        size:{
            height: 250,
            width: 250,
        }
    });

   var lineChart =  c3.generate({
            bindto: '#timeline',
            data: {
                x:'label',//Add: name should match with label-array in columns-section
                columns: [
                    //Add
                    ['label', 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    ['yes', 30,200,100,400,150,250,44,22,33,11,30,200],
                    ['no', 50,220,109,420,135,245,11,22,33,44,50,220],
                    ['none',42,162,81,329,122,212,14,24,34,44,42,162]
                ],
                types: {
                    //column,line,bar etc
                    'yes': 'bar',
                    'no': 'bar',
                    'none': 'line'
                }
            },
            axis:{
                x:{ //Add
                    type: 'category' //this way, we'll use all the values from label in column-section
                },
                y:{
                    label: { 
                        text: 'Nr. Users',
                        position: 'outer-middle'
                      }
                }
            }
        });
    

}();






