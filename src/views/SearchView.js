import React, {useState, useEffect} from 'react';
import theme from '../generalstyle/theme';
import HomeCardComponent from '../components/HomeCardComponent';
import SimpleCardComponent from '../components/SimpleCardComponent';
import {
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Animated,
  FlatList
} from 'react-native';

import mainstyle from '../generalstyle/mainstyle';
import SearchComponent from '../components/SearchComponent';

import {SafeAreaView} from 'react-native-safe-area-context';



const image = {
  uri: 'https://github.com/ademilter/turkce-sozluk/blob/master/src/assets/bg.jpg?raw=true',
};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const styles = StyleSheet.create({
  animatedView: {
    position: 'relative',
    backgroundColor: theme.colors.softRed,
  },

  imageBackground: {
    position: 'relative',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  MySearchComponent: {
    position: 'absolute',
    bottom: -25,
  },
});

function SearchView({navigation}) {
  const [focus, setFocus] = useState(false);

  const heroAnim = new Animated.Value(250);
  const heroOpacitiy = new Animated.Value(1);

  const [homeData,setHomeData]=useState(null)

 async function getData() {
    const response=await fetch("https://sozluk.gov.tr/icerik");
    const data=await response.json()
    setHomeData(data)

  }
  useEffect(()=>{
    getData()
  },[])

  useEffect(() => {
    if (focus) {
      Animated.timing(heroAnim, {
        toValue: 50,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      Animated.timing(heroOpacitiy, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(heroAnim, {
        toValue: 250,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      Animated.timing(heroOpacitiy, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [focus]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.light}}>
      <StatusBar
        barStyle={focus ? 'dark-content' : 'light-content'}
        backgroundColor={focus ? theme.colors.softRed : theme.colors.red}
      />
      <View>
        <Animated.View style={[styles.animatedView, {height: heroAnim}]}>
          <Animated.View style={{opacity: heroOpacitiy}}>
            <ImageBackground
              source={image}
              style={styles.imageBackground}></ImageBackground>
          </Animated.View>
          <SearchComponent
            onSearchFocus={e => {
              setFocus(e);
            }}
            mystyle={[styles.MySearchComponent]}
          />
        </Animated.View>
      </View>
      {!focus && (
  <View>
    
    <HomeCardComponent onPress={()=> navigation.navigate("Detail",{title:homeData?.atasoz[0].madde})} atip="A Idiom" title={homeData?.atasoz[0].madde} summary={homeData?.atasoz[0].anlam}/>
      
  
      <HomeCardComponent onPress={()=> navigation.navigate("Detail",{title:homeData?.atasoz[0].madde})} atip="A Idiom" title={homeData?.atasoz[0].madde} summary={homeData?.atasoz[0].anlam}/>
       
   
  </View>
      
      
      
      
      )}{focus &&  
      
<View>
  

    
    
    
    
    

    
    
<FlatList
        data={DATA}
        renderItem={({item}) => <SimpleCardComponent title={item.title}/>}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Text style={{marginTop:10,marginLeft:15}}>Last Search</Text>}
        style={{marginTop:10}}
      />
    
</View>
    
    
    }
    
    </SafeAreaView>
  );
}

export default SearchView;
