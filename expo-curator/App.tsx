import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import NhmTagList  from './components/NhmTagList';
import NhmGroupList from './components/NhmGroupList';
import NhmPackageList from './components/NhmPackageList';
import MuseumObjects from './components/MuseumObjects';
import MuseumObjectDetail from './components/MuseumObjectDetail';
import ArticlesList from './components/ArticlesList';
import MuseumDepartments from './components/MuseumDepartments';


export default function App() {
//export  const App: React.FC = () => {
  return (
    <View style={styles.container}>
       
      <Text>Open up App.tsx to start working on your app!</Text>
      <Header/>
      
      {/* <NhmTagList />
      <NhmGroupList />
      <NhmPackageList /> */}
      <MuseumDepartments />
      <MuseumObjects />
      <MuseumObjectDetail/>
      {/* <ArticlesList /> */}
      <StatusBar style="auto" />
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
