import React from 'react';
import { Text, View} from 'react-native';

const App: () => Node = () => {

  var msDiff = new Date(2023,0,12); // Months are 0-index based.
  var currentDate = new Date();
  // Date counts time in milliseconds. We multiply it by 1000(to get a second) * 60( get minute) * 60(get hour) * 24(day). Floor to get even days.
  var amountOfDays = Math.floor((currentDate.getTime() - msDiff.getTime()) / (1000 * 60 * 60 * 24));
  const dailyDistance = 1000/365;
  var amountOfSwedishMiles = amountOfDays * dailyDistance;

  return (
    <View style={{alignSelf:'center', alignContent:'center', flex:1, justifyContent:'center'}}>
      <Text> Bilen hämtades 12 Januari.</Text>
      <Text> Det är {amountOfDays} dagar sedan.</Text>

      <Text> I genomsnitt är det {Math.floor(amountOfSwedishMiles * 10)}km</Text>

    </View>
  );
};
export default App;
