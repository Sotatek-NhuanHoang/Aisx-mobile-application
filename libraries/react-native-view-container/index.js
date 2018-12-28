import { SafeAreaView, View, Platform } from 'react-native';

export default ( Platform.OS === 'ios' ? SafeAreaView : View);
