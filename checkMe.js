import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Expo from 'expo';

export default class App extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        isLoading: true
      };
    }
  
  async componentWillMount(){
   await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({isLoading: false});
  }

  render(){
    // if(this.state.isLoading){
    //   return 0;
    // }
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:'https://images.pexels.com/photos/371285/pexels-photo-371285.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940'}} />
                <Body>
                  <Text>Tejaswini Mullewmar</Text>
                  <Text note>Hyderabad</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri:'https://images.pexels.com/photos/952057/pexels-photo-952057.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
 
}


