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


 function Graf3(){

 /* 
    const [qtd, setQtd] = useState([])
    const [meses, setMeses] = useState([])

   
    async function QtdMes(){
        let r = await api.qtdMes()
              r.map(i =>{if(i.mes === "01")
                setMeses({mes:"Jan", qtd:i.qtd})
               
            if(i.mes === "02")
                setMeses({mes:"Fev", qtd:i.qtd})

            if(i.mes === "03")
                setMeses({mes:"Mar", qtd:i.qtd})
            })

            if(i.mes === "04")
                setMeses({mes:"Abr", qtd:i.qtd})

            if(i.mes === "05")
                setMeses({mes:"Mai", qtd:i.qtd})

            if(i.mes === "06")
                setMeses({mes:"Jun", qtd:i.qtd})

            if(i.mes === "07")
                setMeses({mes:"Jul", qtd:i.qtd})

            if(i.mes === "08")
                setMeses({mes:"Ago", qtd:i.qtd})

            if(i.mes === "09")
                setMeses({mes:"Set", qtd:i.qtd})

            if(i.mes === "10")
                setMeses({mes:"Out", qtd:i.qtd})

            if(i.mes === "11")
                setMeses({mes:"Nov", qtd:i.qtd})

            if(i.mes === "12")
                setMeses({meses:"Dez", qtd:i.qtd})
   

             
         

    
    setQtd(r.meses) 
    console.log(r.meses)
    }

    useEffect(
        () => {QtdMes() }, [] 
    );
 */





    const [dm, setDM] = useState([])
    const [dqtd, setDqtd] = useState([])

   
    async function QtdDM(){
        let r = await api.qtdMes()
            setDM(r)
            console.log(r)
        
    }

    useEffect(
        () => {QtdDM()}, [] 
    );





      return (
          <div>
              <Bar
              
              data={{
                labels: dm.map(i=> i.dt_cadastro),
                datasets: [
                    {
                        label: "",
                        data: dm.map(i => i.qtd),
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



export { BarChart, Graf2,  Graf3}