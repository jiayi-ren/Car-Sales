import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/featureActions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const FeaturesReducer = (state = initialState, action) => {
  // console.log("action in the reducer: ", action);

  switch (action.type) {

    case ADD_FEATURE:
      // console.log("ADD_FEATURE", action.payload)
      const newFeatures = state.car.features.includes(action.payload, 0)? [...state.car.features]: [...state.car.features, action.payload];
      const newFeaturesPrice = newFeatures.map( feature => feature.price)
      const newAdditionalPrice = newFeaturesPrice.reduce((accumulator, currentValue)=>accumulator + currentValue, initialState.additionalPrice ) 

      return{
        ...state,
        additionalPrice: newAdditionalPrice,
        car:{
          ...state.car,
          features: newFeatures
        },
        additionalFeatures: state.additionalFeatures.filter( feature => feature.id !== action.payload.id)
      };

    case REMOVE_FEATURE:
      // console.log("RM_FEATURE", action.payload)
      const filterFeatures = state.car.features.filter( feature => feature.id !== action.payload.id)
      const filterFeaturesPrice = filterFeatures.map( feature => feature.price)
      const filterAdditionalPrice = filterFeaturesPrice.reduce((accumulator, currentValue)=>accumulator + currentValue, initialState.additionalPrice ) 

      // const sortAdditionalFeatures = 
      return{
        ...state,
        additionalPrice: filterAdditionalPrice,
        car:{
          ...state.car,
          features: filterFeatures
        },
        additionalFeatures: [
          ...state.additionalFeatures,
          action.payload
        ]
      }
      
    default:
      return state;
  }
}