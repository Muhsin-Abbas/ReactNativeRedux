import { connect } from "react-redux";
import Home from "../components/Home";
import {addToCard} from '../services/Actions/actions'

 const mapDispatchToProps=dispatch=>{
     addToCardHandler:data=>dispatch(addToCard(data))
 },
 const mapStateToProps=state=>{
     cardData:state.data
 }
 export default(mapStateToProps,mapDispatchToProps)(Home)