import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/featureActions';
import AddedFeature from './AddedFeature';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=> props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

// const mapStateToProps = state => {
//   return{
//     features: state.car.features
//   }
// }

// export default connect(
//   null,
//   {addFeature}
// )(AdditionalFeature);