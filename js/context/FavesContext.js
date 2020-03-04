import React, {Component} from 'react';
export const FavesContext = React.createContext();
class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  // more code will go here!
}
export default FavesProvider;
