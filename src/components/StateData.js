
import React from 'react'
import Chart from 'chart.js/auto'
import * as d3 from 'd3'
const Dashboard=()=>{
    
   
   const state='http://localhost:3000/State.csv'
   d3.csv(state).then(function(statedata){
    const district2020=[]
    const year2020=[]
    const rate=[]
    const rate2016=[]
    const rate2017=[]
    const rate2018=[]
    const rate2019=[]
    const rate2020=[]
    const rateipc=[]
    const ratecybercrime=[]
    const ratetheft=[]
    const ratewomencrime=[]
    const ratemurder=[]
    const ratekidnapping=[]
    const states2016=[]
    const states2017=[]
    const states2018=[]
    const states2019=[]
    const states2020=[]
    const staterateipc2016=[]
    
    const stateratetheft2016=[]
    const stateratewomencrime2016=[]
    const stateratemurder2016=[]
    const stateratekidnapping2016=[]
    const staterateipc2017=[]
    const stateratecybercrime2017=[]
    const stateratetheft2017=[]
    const stateratewomencrime2017=[]
    const stateratemurder2017=[]
    const stateratekidnapping2017=[]
    const staterateipc2018=[]
    const stateratecybercrime2018=[]
    const stateratetheft2018=[]
    const stateratewomencrime2018=[]
    const stateratemurder2018=[]
    const stateratekidnapping2018=[]
    const staterateipc2019=[]
    const stateratecybercrime2019=[]
    const stateratetheft2019=[]
    const stateratewomencrime2019=[]
    const stateratemurder2019=[]
    const stateratekidnapping2019=[]
    const staterateipc2020=[]
    const stateratecybercrime2020=[]
    const stateratetheft2020=[]
    const stateratewomencrime2020=[]
    const stateratemurder2020=[]
    const stateratekidnapping2020=[]
    var statecount=0
    for (var i=0;i<statedata.length;i++){
        if(statedata[i].Crime=='Cybercrime'){
            if(statedata[i].Year=='2017'){
                stateratecybercrime2017.push(statedata[i].Count)
                states2017.push(statedata[i].State)
            }
            else if(statedata[i].Year=='2018'){
                stateratecybercrime2018.push(statedata[i].Count)
                states2018.push(statedata[i].State)
            }
            else if(statedata[i].Year=='2019'){
                stateratecybercrime2019.push(statedata[i].Count)
                states2019.push(statedata[i].State)
            }
            else if(statedata[i].Year=='2020'){
                stateratecybercrime2020.push(statedata[i].Count)
                states2020.push(statedata[i].State)
            }
        }
        else if(statedata[i].Crime=='Crime against women'){
            if(statedata[i].Year=='2016'){
                stateratewomencrime2016.push(statedata[i].Count)
                states2016.push(statedata[i].State)
            }
            if(statedata[i].Year=='2017'){
                stateratewomencrime2017.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2018'){
                stateratewomencrime2018.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2019'){
                stateratewomencrime2019.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2020'){
                stateratewomencrime2020.push(statedata[i].Count)
                
            }
        }
        else if(statedata[i].Crime=='IPC Crime'){
            if(statedata[i].Year=='2016'){
                staterateipc2016.push(statedata[i].Count)
                
            }
            if(statedata[i].Year=='2017'){
                staterateipc2017.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2018'){
                staterateipc2018.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2019'){
                staterateipc2019.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2020'){
                staterateipc2020.push(statedata[i].Count)
                
            }
        }
        else if(statedata[i].Crime=='Murder'){
            if(statedata[i].Year=='2016'){
                stateratemurder2016.push(statedata[i].Count)
                
            }
            if(statedata[i].Year=='2017'){
                stateratemurder2017.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2018'){
                stateratemurder2018.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2019'){
                stateratemurder2019.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2020'){
                stateratemurder2020.push(statedata[i].Count)
                
            }
        }
    }
    new Chart(
      document.getElementById('canvas'),
      {
        type: 'line',
        spanGaps: false,
        data: {
          labels: states2018,
          backgroundColor:"#8B0000", 
          
          datasets: [
            {
              label: 'Cyber crime of 2018',
              data: stateratecybercrime2018,
              backgroundColor: '#8B0000',
            },
            {
                label: 'Cyber crime of 2017',
                data: stateratecybercrime2017,
                backgroundColor: '#0000FF',
              }
          ]
        }
      }
    );

   });

    
 
   return(<div className='graph'>
    
    <canvas className="canvas" id="canvas"></canvas>
    
    </div>

   ); 
     

}

export default Dashboard;