import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimatedAlert = ({
  isVisible,
  type = 'success', // 'success', 'warning', 'error'
  title = '',
  message = '',
  actionText = '',
  onAction = () => {},
  onClose = () => {},
  animationSources = {
    success: require('../assets/success.json'),
    warning: require('../assets/warning.json'),
    error: require('../assets/error.json'),
  }, // Custom animations
}) => {
  const getAnimationSource = () => {
    switch (type) {
      case 'success':
        return animationSources.success;
      case 'warning':
        return animationSources.warning;
      case 'error':
        return animationSources.error;
      default:
        return animationSources.success;
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {getAnimationSource() && (
            <LottieView
              source={getAnimationSource()}
              autoPlay
              loop={false}
              style={styles.lottie}
            />
          )}
          <Text style={[styles.alertTitle, styles[type]]}>{title}</Text>
          <Text style={styles.alertMessage}>{message}</Text>

          {/* Action Button */}
          <TouchableOpacity
            style={[styles.actionButton, styles[`${type}Button`]]}
            onPress={onAction}
          >
            <Text style={styles.actionButtonText}>{actionText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  lottie: {
    width: 100,
    height: 100,
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  alertMessage: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
    color: '#666',
  },
  actionButton: {
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  success: {
    color: '#4caf50',
  },
  warning: {
    color: '#ff9800',
  },
  error: {
    color: '#f44336',
  },
  successButton: {
    backgroundColor: '#4caf50',
  },
  warningButton: {
    backgroundColor: '#ff9800',
  },
  errorButton: {
    backgroundColor: '#f44336',
  },
});

export default AnimatedAlert;
