import React, { useState } from 'react';
import { View, Button } from 'react-native';
import AnimatedAlert from 'react-native-sweet-alert'; // Import your package

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <Button title="Show Alert" onPress={() => setIsVisible(true)} />
      <AnimatedAlert
        isVisible={isVisible}
        type="success"
        title="Success!"
        message="Your action was successful."
        actionText="OK"
        onAction={() => setIsVisible(false)}
      />
    </View>
  );
}
