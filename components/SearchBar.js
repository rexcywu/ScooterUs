import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: 'asdfghj',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type something...!!"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}