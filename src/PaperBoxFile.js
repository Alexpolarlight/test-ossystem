import React from 'react'; 
import Paper from 'material-ui/Paper';
import ProductItemComponent from './ProductItem';

    


const style = {
  height: 170,
  width: 150,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: 424242
};


const PaperBoxStuff = () => (
  <div>
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={3} />
  </div>
);

export default PaperBoxStuff;