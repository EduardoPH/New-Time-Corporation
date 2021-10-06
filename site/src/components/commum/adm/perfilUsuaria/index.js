import InfoUsuaria from '../../../Info-Usuaria/';
import ItemDenuncia from '../../../Item-Denuncia-Usu';
export default function Index(props){
    return(
        <div style={{width: '100%'}}>
            <div className="box-infor-user">
                 <InfoUsuaria info={props.location.state.pessoa} displayButton="none"/>
                <div className="denunciasCadastradas">
                    <ItemDenuncia descricao="eeeeeeeeee" data="25/03/2021"/>
                </div>
            </div>
        </div>
    )
}