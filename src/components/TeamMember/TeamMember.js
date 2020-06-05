import React from 'react';
import './TeamMember.css';
import '../TeamDescriptionPanel/Panel.css';
import TeamMemberPopup from '../TeamMemberPopup/TeamMemberPopup';
import { show_addmember_popup } from '../../actions';
import {connect} from 'react-redux';



const Members=()=>{
    const [addMemberPopup, setaddMemberPopup] = React.useState(false);
    const [content, setContent] = React.useState(<></>);

    const show=()=> {   
        setaddMemberPopup(true);
        setContent(<TeamMemberPopup />);
    }

   
    return(
        <div className='members'>
            <div className='panel__top'>
                <h2 className="panel__name">
                    Members
                </h2>
            </div>
            <div className="divider"/>
            <div className='member_list'>
                
                <div className='Add_member' onClick={show}>
                    <div className='circle' >
                    <span class="material-icons add_icon">add</span></div>
                    <span><h3 className='Add_text'>Add member</h3> </span>
                </div>
                {addMemberPopup && (
                    <div>
                        {content}
                    </div>
                )}
                <div className='circle_1'><p className='init_1'>S</p>
                    <span className='info_1'><h3>Silvia</h3>
                    <h4>hxiaoyin@gmail.com</h4></span>
                </div>
                <div className='circle_2'><p className='init_2'>CX</p>
                    <span className='info_2'><h3>Chuyue Xiao</h3>
                    <h4>sarah19930930@gmail.com</h4></span>
                </div>
                <div className='circle_3'><p className='init_3'> O</p>
                    <span className='info_3'><h3>Ollie</h3>
                    <h4>myself.ollie.lee@gmail.com</h4></span>
                </div>
                <div className='circle_4'><p className='init_4'>SW</p>
                    <span className='info_4'><h3>Scott Wang</h3>
                    <h4>scotteau@gmail.com</h4></span>
                </div>
                <div className='circle_5'><p className='init_5'>YL</p>
                    <span className='info_5'><h3>Yelin Liu</h3>
                    <h4>lawrence@gmail.com</h4></span>
                </div>
                
                <div className='Add_member'>
                    <div className='circle_bottom'>
                    <span class="material-icons more_icon">more_horiz</span></div>
                    <span ><h3 className='Add_text'>See all members</h3></span>
                </div>
                
            </div> 
        </div>
    )
};

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps, {
//     show_addmember_popup,
// })(Members);
export default Members;