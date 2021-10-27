import { Bar } from "react-chartjs-2";
import Api from "../../services/api";
import { useEffect, useState } from "react";

const api = new Api()
function BarChart (){
    const [bairros, setBairros] = useState([]) 



    async function QtdBairro(){
        let r = await api.qtdBairro()
        setBairros(r)

    }
    useEffect(
        () => {QtdBairro() }, [] 
    );






    return (
        <div>
            <Bar
                data={{
                    labels: bairros.map(i => i.ds_bairro),
                    datasets: [
                        {
                            label: "",
                            data:  bairros.map(i => i.qtd), 
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

                    plugins: {
                        legend: {
                          display: false,
                        },
                      },
                                   
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


  

  function Graf2(){

    const [cidades, setCidades] = useState([])


   
    async function QtdCidade(){
        let r = await api.qtdCidade()
            setCidades(r)
            console.log(r)
        
    }

    useEffect(
        () => {QtdCidade() }, [] 
    );


      return(
          <div>
              <Bar
                    data={{
                       labels: cidades.map(i => i.ds_cidade),
                        datasets: [
                            {
                                label: "",
                                data: cidades.map(i => i.qtd),
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

                        plugins: {
                            legend: {
                              display: false,
                            },
                          },
                                       
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
                labels: ["jan"],
                datasets: [
                    {
                        label: "",
                        data: [2],
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

                plugins: {
                    legend: {
                      display: false,
                    },
                  },
                               
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