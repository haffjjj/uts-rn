import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, H2, Content, Form,Item,Label, Input, Button, Text, Textarea } from 'native-base';

export default class App extends Component{

  state = {
      sukuPertama:null,
      jumlahMargin:null,
      jumlahSuku:null,
      hasil:[]
  }

  handleCount =()=>{

    const {sukuPertama, jumlahMargin, jumlahSuku} = this.state

    if(this.state.hasil.length == 0){
      for (let index = 0; index < jumlahSuku; index++) {
        hasil = this.state.hasil
        
        if(this.state.hasil.length == 0){
          hasil.push(parseInt(sukuPertama))
        }
        else{
          hasil.push(this.state.hasil.slice(-1).pop() + parseInt(jumlahMargin))
        }
  
        this.setState({
          hasil
        })
      }
    }
    else{
      alert('reset')
      this.setState({
        sukuPertama:null,
        jumlahMargin:null,
        jumlahSuku:null,
        hasil:[]
      })
    }
    
    

    // hasil = sukuPertama*jumlahMargin*jumlahSuku
   
  }

  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>UTS</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <H2 style={{margin:20, alignSelf:'center'}}>Deret Aritmatika</H2>
          <Form>
            <Item floatingLabel>
              <Label>Masukan Suku Pertama</Label>
              <Input value={this.state.sukuPertama} onChangeText={(text)=>this.setState({...this.state,sukuPertama:text})} />
            </Item>
            <Item floatingLabel last>
              <Label>Masukan Jumlah Margin</Label>
              <Input value={this.state.jumlahMargin} onChangeText={(text)=>this.setState({...this.state,jumlahMargin:text})} />
            </Item>
            <Item floatingLabel last>
              <Label>Masukan Jumlah Suku</Label>
              <Input value={this.state.jumlahSuku} onChangeText={(text)=>this.setState({...this.state,jumlahSuku:text})} />
            </Item>
          </Form>
          <Button style={{alignSelf:'center', margin:10}} onPress={()=>this.handleCount()}>
            <Text>Hitung</Text>
          </Button>
          <Form style={{margin:10}}>
            <Textarea value={this.state.hasil.join(' ')} rowSpan={5} bordered placeholder="hasil" />
          </Form>
        </Content>
      </Container>
    );
  }
}
