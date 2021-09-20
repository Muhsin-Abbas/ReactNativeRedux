import { connect } from "react-redux";
import Home from "../components/Home";
import {addToCard} from '../services/Actions/actions'

 const mapDispatchToProps=dispatch=>{
     addtocardHandler:data=>dispatch(addToCard(data))
 },
 const mapStateToProps=state=>{

 }
 export default(mapStateToProps,mapDispatchToProps)(Home)