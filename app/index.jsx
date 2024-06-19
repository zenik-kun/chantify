import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl font-lblack">Attendly</Text>
      <StatusBar style="auto" />
      <Link className="font-lbold text-xl" href="/home" style={{ color: "crimson" }}>Go to Home</Link>
    </View>
  );
}


