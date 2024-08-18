import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { DonutChart } from '@rnpack/charts';

export default function App() {
  return (
    <SafeAreaView style={styles?.container}>
      <ScrollView contentContainerStyle={styles?.content}>
        <DonutChart radius={60} strokeColor={'#FF000A'} percentage={60} />
        <DonutChart
          variant="semi-circle"
          radius={60}
          strokeColor={'#FF000A'}
          percentage={60}
          isCompact
        />
        <DonutChart radius={120} strokeColor={'#FF00FA'} percentage={75} />
        <DonutChart
          variant="semi-circle"
          radius={120}
          strokeColor={'rgba(227, 27, 35, 1)'}
          percentage={82}
          textContainerStyle={{
            borderRadius: 100,
            paddingHorizontal: Platform?.OS === 'ios' ? 7 : 12,
            paddingVertical: 7,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFA',

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <View style={{ alignItems: 'center', rowGap: 5, paddingTop: 10 }}>
            <Text style={{ fontSize: 21, fontWeight: '900' }}>Heart Rate</Text>
            <Text
              numberOfLines={1}
              style={{ fontSize: 18, color: 'rgba(0, 0, 0, 0.6)' }}
            >
              Avg 60 to 100 beats/minute
            </Text>
          </View>
        </DonutChart>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
