import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';

const HomePage = () => {

   return (

    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    
      <Text> PUC Minas </Text>
      
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button>

    </View>

  );

}

export default HomePage;