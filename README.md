#Usage
import SweetAlert from 'react-native-sweet-alert';

<SweetAlert
  isVisible={true}
  type="success"
  title="Success"
  message="Your action was successful!"
  actionText="OK"
  onAction={() => console.log('Action button clicked!')}
  animationSources={{
    success: require('./success.json'),
    warning: require('./warning.json'),
    error: require('./error.json'),
  }}
/>
