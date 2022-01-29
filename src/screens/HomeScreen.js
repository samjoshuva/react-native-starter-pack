import React, {useEffect} from 'react';
import {getProfile} from '../apis/user';
import { PopUpGeneral } from '../core/components/layouts/PopupGeneral';
import {Text} from '../core/components/outputs/Text';
import {View} from '../core/components/outputs/View';

export default function HomeScreen() {
  useEffect(() => {}, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <PopUpGeneral  title="Success!"
          docked
          visible={true}
          onDismiss={() => {}}/>
    </View>
  );
}
