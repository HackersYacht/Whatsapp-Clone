import React, {Component} from 'react';
import {View} from 'react-native';
import{
  Container, Header, Content, Button, Text, Form, Input, Item, Label, Body, Right, Left, Title
  , Tabs, Tab, TabHeading, Thumbnail
} from 'native-base'

import Icon from "react-native-vector-icons/MaterialIcons";

import * as list from './components/contacts'
import CHATS from './components/chats'
import STATUS from './components/status'
import CALLS from './components/calls'

export default class App extends Component<Props> {
  state = {
    store : list.store
  }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:"#006257"}} androidStatusBarColor='#006257'>
          <Left>
            <Title>Whatsapp</Title>
          </Left>
          <Right>
            <Button transparent>
              <Icon name="search" size={30}/>
            </Button>
            <Button transparent>
              <Icon name="more-vert" size={30}/>
            </Button>
          </Right>
        </Header>

        <Tabs style={{backgroundColor:"#006257"}}>
          <Tab heading={
            <TabHeading style={{backgroundColor:"#006257"}}>
              <Icon name='photo-camera' size={30}/>
            </TabHeading>
          }
          >
            <Text>Camera goes here</Text>
          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:"#006257"}}>
              <Text style={{color:'white'}}>CHATS</Text>
            </TabHeading>
          }>
              <Button style={{
                position: 'absolute',
                bottom: 30,
                borderRadius: 35,
                width: 70,
                height: 70,
                backgroundColor:'green',
                left: 300
              }}>
                <Icon name='message' color='#fff' size={30} style={{left:20}}/>
              </Button>
              <CHATS chatsList = {this.state.store}/>
          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:"#006257"}}>
              <Text style={{color:'white'}}>STATUS</Text>
            </TabHeading>}>
            <STATUS/>
          </Tab>
          <Tab heading={
            <TabHeading style={{backgroundColor:"#006257"}}>
              <Text style={{color:'white'}}>CALLS</Text>
            </TabHeading>}>
            <CALLS/>
          </Tab>
        </Tabs>

      </Container>
    );
  }
}
