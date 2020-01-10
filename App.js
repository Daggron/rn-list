import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';

export default function App() {
  
  const [data , setData] = React.useState([
    {
      name : "Abhay"
    },
    {
      name : "Pallak"
    },
    {
      name : "Bucky"
    }
  ]);

  const [invar , setIn] = React.useState("");

  const handleText = (e)=>{
    setIn(e);
  }

  const submit = ()=>{
    const arr = [...data , {name : invar}];
    setData(arr);
  }
  return (
    <View style={styles.container}>
     <PaperProvider>
       <Text>
         {
           data.map((eachname , index)=>{
             return(
               
                 <Text key={index}>
                  {eachname.name+"\n"}
                </Text>
               
             )
           })
          }

       </Text>

       <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={handleText}
      />
     <Button mode="contained" onPress={submit}>
       Hello
     </Button>
     </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
