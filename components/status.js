import React, {Component} from 'react'
import{
  Container, Header, Content, Button, Text, Form, Input, Item, Label, Body, Right, Left, Title, Icon
  , Tabs, Tab, TabHeading, Thumbnail
} from 'native-base'

import{View, ScrollView} from 'react-native'
import * as list from './statuses'

export default class Status extends Component{
  state = {
    contacts : list.contacts
  }

  render(){
    return(
      <ScrollView style={{flex:1}}>
        <View style={{flexDirection:'row'}}>
          <View style={{margin:10}}>
            <Thumbnail source={require('../images/spider.jpg')} style={{
              width: 60,
              height: 60
            }}/>
          </View>
          <View>
            <View style={{marginTop:10}}>
              <Text style={{color:'black', fontWeight:'bold', fontSize:20}}>My Status</Text>
              <Text style={{color:'gray'}}>Tap to add status update</Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor:'#EFF2EF', padding:10}}>
          <Text style={{color:'#006257', fontWeight:'bold', fontSize:20}}>Recent Updates</Text>
        </View>
        {this.state.contacts !== 0 ?
          this.state.contacts.map((item, index)=>{
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
                    <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{item.name}</Text>
                    <Text style={{color:'gray'}}>{item.time}</Text>
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
