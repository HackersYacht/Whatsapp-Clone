import React, {Component} from 'react'
import{
  Container, Header, Content, Button, Text, Form, Input, Item, Label, Body, Right, Left, Title,Tabs, Tab, TabHeading, Thumbnail
} from 'native-base'

import Icon from "react-native-vector-icons/MaterialIcons";

import{View, ScrollView} from 'react-native'
import * as list from './caller'

export default class Calls extends Component{
  state = {
    caller : list.caller
  }
  render(){
    return(
      <ScrollView style={{flex:1}}>
        {this.state.caller !== 0 ?
          this.state.caller.map((item, index)=>{
            return(
              <View key={index} style={{flexDirection:'row'}}>
                <View style={{margin:10}}>
                  <Thumbnail source={require('../images/spider.jpg')} style={{
                    width: 60,
                    height: 60
                  }}/>
                </View>
                <View style={{borderBottomWidth:0.3, flexDirection:'row',flex:1}}>
                  <View style={{marginLeft: 5, marginRight:5, marginTop:15}}>
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{item.number}</Text>
                    <View style={{flexDirection:'row'}}>
                      <Icon name="call-received" color="green" style={{marginTop:5}} size={20}/>
                      <Text style={{color:'gray'}}>{item.date}</Text>
                    </View>
                  </View>
                  <View style={{marginTop: 20, marginRight:15, position:'absolute', right:0}}>
                    <Icon name="call" color='#006257' size={30}/>
                  </View>
                </View>
              </View>
            )

            }):(
              <Text>What</Text>
          )
        }
      </ScrollView>
    )
  }
}
