
import React, { useState, useEffect, useRef  } from 'react';
import Chart from 'chart.js/auto'
import * as d3 from 'd3'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import IndiaMap from './IndiaMap.js';
import '../css/Dashboard.css';



const Dashboard=()=>{
    const [n, setN] = useState(0);
   
   const state='http://localhost:3000/StateCrime.csv'
   d3.csv(state).then(function(statedata){
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
    for (var i=0;i<statedata.length;i++){
        if(statedata[i].Crimetype=='Crime committed against Women'){
            if(statedata[i].Year=='2016'){
                stateratewomencrime2016.push(statedata[i].Count)
                states2016.push(statedata[i].State)
            }
            if(statedata[i].Year=='2017'){
                stateratewomencrime2017.push(statedata[i].Count)
                states2017.push(statedata[i].State)
                
            }
            else if(statedata[i].Year=='2018'){
                stateratewomencrime2018.push(statedata[i].Count)
                states2018.push(statedata[i].State)
                
            }
            else if(statedata[i].Year=='2019'){
                stateratewomencrime2019.push(statedata[i].Count)
                states2019.push(statedata[i].State)
                
            }
            else if(statedata[i].Year=='2020'){
                stateratewomencrime2020.push(statedata[i].Count)
                states2020.push(statedata[i].State)
                
            }
        }
        else if(statedata[i].Crimetype=='Cyber Crime'){
            if(statedata[i].Year=='2017'){
                stateratecybercrime2017.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2018'){
                stateratecybercrime2018.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2019'){
                stateratecybercrime2019.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2020'){
                stateratecybercrime2020.push(statedata[i].Count)
                
            }
        }
        
        else if(statedata[i].Crimetype=='IPC Crime'){
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
        else if(statedata[i].Crimetype=='Murder'){
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
        else if(statedata[i].Crimetype=='Kidnapping and Abduction'){
          console.log('here')
            if(statedata[i].Year=='2016'){
                stateratekidnapping2016.push(statedata[i].Count)
                console.log('here')
                
            }
            if(statedata[i].Year=='2017'){
                stateratekidnapping2017.push(statedata[i].Count)
                console.log('here')
                
            }
            else if(statedata[i].Year=='2018'){
                stateratekidnapping2018.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2019'){
                stateratekidnapping2019.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2020'){
                stateratekidnapping2020.push(statedata[i].Count)
                
            }
        }
        else if(statedata[i].Crimetype=='Theft and Burglary'){
            if(statedata[i].Year=='2016'){
                stateratetheft2016.push(statedata[i].Count)
                
            }
            if(statedata[i].Year=='2017'){
                stateratetheft2017.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2018'){
                stateratetheft2018.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2019'){
                stateratetheft2019.push(statedata[i].Count)
                
            }
            else if(statedata[i].Year=='2020'){
                stateratetheft2020.push(statedata[i].Count)
                
            }
        }
    }
    
    new Chart(
      document.getElementById('cybercrime'),
      {
        type: 'line',
        spanGaps: false,
        data: {
          labels: states2020,
          backgroundColor:"#8B0000", 
          
          datasets: [
            {
              label: 'Cyber crime of 2018',
              data: stateratecybercrime2018,
            
            },
            {
                label: 'Cyber crime of 2017',
                data: stateratecybercrime2017,
                
              },
              {
                label: 'Cyber crime of 2019',
                data: stateratecybercrime2019,
                
              },
              {
                label: 'Cyber crime of 2020',
                data: stateratecybercrime2020,
                
              }
          ]
        }
      }
    );

    new Chart(
        document.getElementById('crime against women'),
        {
          type: 'line',
          spanGaps: false,
          data: {
            labels: states2020,
            backgroundColor:"#8B0000", 
            
            datasets: [
                {
                    label: 'Crime against women 2016',
                    data: stateratewomencrime2016,
                  
                  },
                  {
                    label: 'Crime against women 2017',
                    data: stateratewomencrime2017,
                  
                  },
                  {
                    label: 'Crime against women 2018',
                    data: stateratewomencrime2018,
                  
                  },
                  {
                    label: 'Crime against women 2019',
                    data: stateratewomencrime2019,
                  
                  },
                  {
                    label: 'Crime against women 2020',
                    data: stateratewomencrime2020,
                  
                  },
            ]
          }
        }
      );
      new Chart(
        document.getElementById('murder'),
        {
          type: 'line',
          spanGaps: false,
          data: {
            labels: states2020,
            backgroundColor:"#8B0000", 
            
            datasets: [
                {
                    label: 'Murder 2016',
                    data: stateratemurder2016,
                  
                  },
                  {
                    label: 'Murder 2017',
                    data: stateratemurder2017,
                  
                  },
                  {
                    label: 'Murder 2018',
                    data: stateratemurder2018,
                  
                  },
                  {
                    label: 'Murder 2019',
                    data: stateratemurder2019,
                  
                  },
                  {
                    label: 'Murder 2020',
                    data: stateratemurder2020,
                  
                  },
            ]
          }
        }
      );
      console.log(stateratekidnapping2016)
      new Chart(
        document.getElementById('kidnapping'),
        {
          type: 'line',
          spanGaps: false,
          data: {
            labels: states2020,
            backgroundColor:"#8B0000", 
            
            datasets: [
                {
                    label: 'kidnapping 2016',
                    data: stateratekidnapping2016,
                  
                  },
                  {
                    label: 'kidnapping 2017',
                    data: stateratekidnapping2017,
                  
                  },
                  {
                    label: 'kidnapping 2018',
                    data: stateratekidnapping2018,
                  
                  },
                  {
                    label: 'kidnaping 2019',
                    data: stateratekidnapping2019,
                  
                  },
                  {
                    label: 'kidnapping 2020',
                    data: stateratekidnapping2020,
                  
                  },
            ]
          }
        }
      );
      new Chart(
        document.getElementById('theft'),
        {
          type: 'line',
          spanGaps: false,
          data: {
            labels: states2020,
            backgroundColor:"#8B0000", 
            
            datasets: [
                {
                    label: 'Theft and Burglary 2016',
                    data: stateratetheft2016,
                  
                  },
                  {
                    label: 'Theft and Burglary 2017',
                    data: stateratetheft2017,
                  
                  },
                  {
                    label: 'Theft and Burglary 2018',
                    data: stateratetheft2018,
                  
                  },
                  {
                    label: 'Theft and Burglary 2019',
                    data: stateratetheft2019,
                  
                  },
                  {
                    label: 'Theft and Burglary 2020',
                    data: stateratetheft2020,
                  
                  },
            ]
          }
        }
      );
      
      // new Chart(
      //   document.getElementById('ipc'),
      //   {
      //     type: 'bar',
      //     spanGaps: false,
      //     data: {
      //       labels: states2020,
      //       backgroundColor:"#8B0000", 
            
      //       datasets: [
      //           {
      //               label: 'IPC Crime 2016',
      //               data: staterateipc2016,
                  
      //             },
      //             {
      //               label: 'IPC Crime 2017',
      //               data: staterateipc2017,
                  
      //             },
      //             {
      //               label: 'IPC Crime 2018',
      //               data: staterateipc2018,
                  
      //             },
      //             {
      //               label: 'IPC Crime 2019',
      //               data: staterateipc2019,
                  
      //             },
      //             {
      //               label: 'IPC Crime 2020',
      //               data: staterateipc2020,
                  
      //             },
      //       ]
      //     }
      //   }
      // );

   });




   const chartdata='http://localhost:3000/CrimeData.csv'
   d3.csv(chartdata).then(function(datapoints)
   {
    
    const rate=[]
    const rate2016=[]
    const rate2017=[]
    const rate2018=[]
    const rate2019=[]
    const rate2020=[]
    const rateipc=[]
    const rateipc2016=[]
    const rateipc2017=[]
    const rateipc2018=[]
    const rateipc2019=[]
    const rateipc2020=[]
    const ratecybercrime=[]
    const ratetheft=[]
    const ratewomencrime=[]
    const ratemurder=[]
    const ratekidnapping=[]
    for (var i=0;i<datapoints.length;i++){
        rate.push(datapoints[i].Count);
      if(datapoints[i].Year=='2020'){
        // year2020.push(datapoints[i].Year);
        // district2020.push(datapoints[i].District);
        rate2020.push(datapoints[i].Count);
        if(datapoints[i].Crime=='Cybercrime'){
            ratecybercrime.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='IPC Crime'){
            rateipc.push(datapoints[i].Count);
            rateipc2020.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Theft and Burglary'){
            ratetheft.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Crime committed against Women'){
            ratewomencrime.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Murder'){
            ratemurder.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Kidnapping and Abduction'){
            ratekidnapping.push(datapoints[i].Count);
        }
      }
      else if(datapoints[i].Year=='2019'){
        // year2019.push(datapoints[i].Year);
        // district2019.push(datapoints[i].District);
        rate2019.push(datapoints[i].Count);
        if(datapoints[i].Crime=='Cybercrime'){
            ratecybercrime.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='IPC Crime'){
            rateipc.push(datapoints[i].Count);
            rateipc2019.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Theft and Burglary'){
            ratetheft.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Crime committed against Women'){
            ratewomencrime.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Murder'){
            ratemurder.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Kidnapping and Abduction'){
            ratekidnapping.push(datapoints[i].Count);
        }
      }
      else if(datapoints[i].Year=='2018'){
        // year2018.push(datapoints[i].Year);
        // district2018.push(datapoints[i].District);
        rate2018.push(datapoints[i].Count);
        if(datapoints[i].Crime=='Cybercrime'){
            ratecybercrime.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='IPC Crime'){
            rateipc.push(datapoints[i].Count);
            rateipc2018.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Theft and Burglary'){
            ratetheft.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Crime committed against Women'){
            ratewomencrime.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Murder'){
            ratemurder.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Kidnapping and Abduction'){
            ratekidnapping.push(datapoints[i].Count);
        }
      }
      else if(datapoints[i].Year=='2017'){
        // year2017.push(datapoints[i].Year);
        // district2017.push(datapoints[i].District);
        rate2017.push(datapoints[i].Count);
        if(datapoints[i].Crime=='Cybercrime'){
            ratecybercrime.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='IPC Crime'){
            rateipc.push(datapoints[i].Count);
            rateipc2017.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Theft and Burglary'){
            ratetheft.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Crime committed against Women'){
            ratewomencrime.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Murder'){
            ratemurder.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Kidnapping and Abduction'){
            ratekidnapping.push(datapoints[i].Count);
        }
      }
      else if(datapoints[i].Year=='2016'){
        // year2016.push(datapoints[i].Year);
        // district2016.push(datapoints[i].District);
        rate2016.push(datapoints[i].Count);
        if(datapoints[i].Crime=='Cybercrime'){
            ratecybercrime.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='IPC Crime'){
            rateipc.push(datapoints[i].Count);
            rateipc2016.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Theft and Burglary'){
            ratetheft.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Crime committed against Women'){
            ratewomencrime.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Murder'){
            ratemurder.push(datapoints[i].Count);
        }
        else if(datapoints[i].Crime=='Kidnapping and Abduction'){
            ratekidnapping.push(datapoints[i].Count);
        }
      }
      
    }
    // let totalcrime = 0;

    // for (let num of rate){

    //     totalcrime = totalcrime + Number(num)
    // }
    
    // let totalcrime2016 = 0;

    // for (let num of rate2016){

    //     totalcrime2016 = totalcrime2016 + Number(num)
    // }
    // let totalcrime2017 = 0;

    // for (let num of rate2017){

    //     totalcrime2017 = totalcrime2017 + Number(num)
    // }
    // let totalcrime2018 = 0;

    // for (let num of rate2018){

    //     totalcrime2018 = totalcrime2018 + Number(num)
    // }
    // let totalcrime2019 = 0;

    // for (let num of rate2019){

    //     totalcrime2019 = totalcrime2019 + Number(num)
    // }
    // let totalcrime2020 = 0;

    // for (let num of rate2020){

    //     totalcrime2020 = totalcrime2020 + Number(num)
    // }
    
    let totalcybercrime = 0;
    // for (let num of ratecybercrime){

    //     totalcybercrime = totalcybercrime + Number(num)
    // }
  
    let totalwomencrime = 0;

    for (let num of ratewomencrime){

        totalwomencrime = totalwomencrime + Number(num)
    }
    let totalkidnappingrime = 0;

    for (let num of ratekidnapping){

        totalkidnappingrime = totalkidnappingrime+ Number(num)
    }
    let totalmurdercrime = 0;

    for (let num of ratemurder){

        totalmurdercrime = totalmurdercrime + Number(num)
    }
    let totaltheftcrime = 0;

    for (let num of ratetheft){

        totaltheftcrime = totaltheftcrime + Number(num)
    }
    let ipc2016 = 0;

    for (let num of rateipc2016){

        ipc2016 = ipc2016 + Number(num)
    }
    let ipc2017 = 0;

    for (let num of rateipc2017){

        ipc2017 = ipc2017 + Number(num)
    }
    let ipc2018 = 0;

    for (let num of rateipc2018){

        ipc2018 = ipc2018 + Number(num)
    }
    let ipc2019 = 0;

    for (let num of rateipc2019){

        ipc2019 = ipc2019 + Number(num)
    }
    let ipc2020 = 0;

    for (let num of rateipc2020){

        ipc2020 = ipc2020 + Number(num)
    }
    let totalcrime=0
    totalcrime=ipc2016+ipc2017+ipc2018+ipc2019+ ipc2020
    console.log(totalcrime)
    setN(totalcrime);
    console.log(n)
    



    new Chart(
        
        document.getElementById('barchart'),
        {
          type: 'bar',
          
          data: {
            labels: [2016,2017,2018,2019,2020],
            backgroundColor:"#8B0000", 
            
            datasets: [
              {
                label: 'Total crime over the years',
                data: [ipc2016,ipc2017,ipc2018,ipc2019,ipc2020],
                backgroundColor: '#8B0000',
              }
            ]
          }
        }
      );
    
    new Chart(
        document.getElementById('pie'),
        {
          type: 'pie',
          
          
          data: {
            labels: ['Cybercrime','Murder','Crime against women','Theft and burglary','Kidnapping'],
           
            
            datasets: [
              {
                label: 'Total crime',
                data: [totalcybercrime,totalmurdercrime,totalwomencrime,totaltheftcrime,totalkidnappingrime],
                
              }
            ]
          }
        }
      );
     
      
   });
   return(<div className='graph'>
    <br></br>
    
    <Container fluid>
      <Row style={{textAlign:'center',color:'#b74c4d'}}>
        <Col><h1>{n}</h1>
        <h4>Total crime in India till 2020</h4></Col>
      </Row>
    </Container>
    <br></br>
    <hr></hr>
    <Container className='container'>
       
        <Row> 
           
        </Row>
      <Row className='row'>
        <Col lg className='col'><canvas className="canvas" id="cybercrime"></canvas></Col>
        <Col lg className='col'><canvas className="canvas" id="crime against women"></canvas></Col>
        
        
      </Row>
      <Row className='row'>
      <Col lg className='col'><canvas className="canvas" id="kidnapping"></canvas></Col>
      <Col lg className='col'><canvas className="canvas" id="theft"></canvas></Col>
      </Row>
      <Row className='row'>
      <Col lg className='col'><canvas className="canvas" id="murder"></canvas></Col>
      
      <Col lg className='colpie' style={{height:'40vh',width:'40vw'}}><canvas className="canvas" id="pie"></canvas></Col>
        
      </Row>
    </Container>
    <Container fluid>
      <Row>
      <Col lg className='col'><canvas className="canvas" id="barchart"></canvas></Col>
      
        <Col>
        <IndiaMap></IndiaMap>
        </Col>
        
      </Row>
    </Container>
    

    
    </div>

   ); 
     

}

export default Dashboard;