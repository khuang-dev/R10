import React, {Component, createFactory} from 'react';
export const FavesContext = React.createContext();
import {createFave, deleteFave, queryFaves} from '../config/models';

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  componentDidMount = () => {
    this.getFavedSessionsId();
  };

  getFavedSessionsId = async () => {
    try {
      const faves = await queryFaves();
      const ids = faves.map(f => f[0]);
      this.setState({
        faveIds: ids,
      });
    } catch (e) {
      console.log(e);
    }
  };
  addFaveSession = async sessionId => {
    try {
      await createFave(sessionId);
      if (newFav) {
        this.setState({faveIds: [...this.state.faveIds, newFav.id]});
      }
      this.getFavedSessionsId();
    } catch (e) {
      console.log(e);
    }
  };
  removeFaveSession = async sessionId => {
    try {
      await deleteFave(sessionId);
      this.getFavedSessionsId();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export default FavesProvider;
