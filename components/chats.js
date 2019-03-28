import React, {Component} from 'react'
import{
  Container, Header, Content, Button, Text, Form, Input, Item, Label, Body, Right, Left, Title,Tabs, Tab, TabHeading, Thumbnail
} from 'native-base'

import Icon from "react-native-vector-icons/MaterialIcons";

import{View, ScrollView} from 'react-native'

export default class Chats extends Component{
  render(){
    return(
      <ScrollView style={{flex:1}}>
        {this.props.chatsList !== 0 ?
          this.props.chatsList.map((item, index)=>{
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
                    <Text style={{color:'black', fontWeight:'bold', fontSize:20}}>{item.name}</Text>
                    <View style={{flexDirection:'row'}}>
                      <Icon name="done-all" style={{marginTop:0}} color="blue" size={20}/>
                      {item.message.length > 40 ?
                        <Text style={{color:'gray'}}>{item.message.slice(0,40) + '...'}</Text>
                        :(
                          <Text>{item.message}</Text>
                        )
                      }
                    </View>
                  </View>
                  <View style={{position:'absolute', right: 0, marginLeft: 5,
                  marginRight:5, marginTop:15}}>
                    <Text style={{color:'gray', }}>YESTERDAY</Text>
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
