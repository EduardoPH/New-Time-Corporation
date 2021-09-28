import { Bar } from "react-chartjs-2";



const BarChart = () =>{
    return (
        <div>
            <Bar
                data={{
                    labels: ["Sé (São Paulo)", "Barra Funda (São Paulo)", "Cidade de Deus (Rio de Janeiro)", "Campo Grande (Rio de Janeiro)", "Sítio Cercado (Curitiba)"],
                    datasets: [
                        {
                            data: [77,70,86,64,56],
                            backgroundColor:[
                                '#A3E5F6',
                                '#A3E5F6',
                                '#A3E5F6',
                                '#A3E5F6',
                                
                            ],
                            borderColor: [
                                '#FFFFFF',
                                '#FFFFFF',
                                '#FFFFFF',
                                '#FFFFFF',
                                '#FFFFFF'
                            ],
                            borderWidth:3
                        }
                    ]
                }}

                width={400}
                height={650}
                options={{ 
                    maintainAspectRatio: false,
                                   
                    legend:{labels:{fontSize: 25, fontColor: '#FFFFF'}}, 

                    scales: {
                        y:{ticks: {color:'white'},  grid:{color: '#FFB6C1'}},
                        x:{ticks: {color:'white',  font:{size: 13} }, grid:{none: 'none'}},
                        
                    }
                    
                }}
             />

        </div>
    )
   }


  const Graf2 = () => {
      return(
          <div>
              <Bar
                    data={{
                       labels: ["Salvador", "Rio de Janeiro", "Curitiba", "São Paulo", "Porto Alegre"],
                        datasets: [
                            {
                                data: [71,89,96,83,67],
                                backgroundColor:[
                                    '#A3E5F6',
                                    '#A3E5F6',
                                    '#A3E5F6',
                                    '#A3E5F6',
                                    
                                ],
                                borderColor: [
                                    '#FFFFFF',
                                    '#FFFFFF',
                                    '#FFFFFF',
                                    '#FFFFFF',
                                    '#FFFFFF'
                                ],
                                borderWidth:3
                            }
                        ]
                    }}

                    width={400}
                    height={650}
                    options={{ 
                        maintainAspectRatio: false,
                                       
                        legend:{labels:{fontSize: 25, fontColor: '#FFFFF'}}, 
    
                        scales: {
                            y:{ticks: {color:'white'},  grid:{color: '#FFB6C1'}},
                            x:{ticks: {color:'white',  font:{size: 13} }, grid:{none: 'none'}},
                            
                        }
                        
                    }}/>
          </div>
      )
  }



  const Graf3 = () =>{
      return (
          <div>
              <Bar
              
              data={{
                labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set"],
                datasets: [
                    {
                        data: [23,36,48,28,33,43,62,69,73],
                        backgroundColor:[
                            '#A3E5F6',
                            '#A3E5F6',
                            '#A3E5F6',
                            '#A3E5F6',
                            
                        ],
                        borderColor: [
                            '#FFFFFF',
                            '#FFFFFF',
                            '#FFFFFF',
                            '#FFFFFF',
                            '#FFFFFF'
                        ],
                        borderWidth:3
                    }
                ]
            }}

            width={400}
            height={650}
            options={{ 
                maintainAspectRatio: false,
                               
                legend:{labels:{fontSize: 25, fontColor: '#FFFFF'}}, 

                scales: {
                    y:{ticks: {color:'white'},  grid:{color: '#FFB6C1'}},
                    x:{ticks: {color:'white',  font:{size: 13} }, grid:{none: 'none'}},
                    
                }
                
            }}/>
          </div>
      )
  }



export { BarChart, Graf2, Graf3}