import { ReactNode } from 'react';
import { View } from '../View';
import { styles } from './LoadingSpinner.styles';
import './LoadingSpinner.styles.css';

import { ILoadingSpinnerProps } from './LoadingSpinner.types';

const LoadingSpinner = ({ loadingType = false }: ILoadingSpinnerProps) => {
  const _renderSpinnerComponent = () => <div className="loading-spinner" />;

  const _renderSpinnerSection = () => (
    <View style={styles.loadingSpinnerContainer}>
      <div className="loading-spinner-section" />
    </View>
  );

  const _renderSpinnerPage = () => (
    <View style={styles.loadingSpinnerContainer}>
      <div className="loading-spinner-page" />
    </View>
  );

  return (
    <>
      {loadingType === 'page'
        ? _renderSpinnerPage()
        : loadingType === 'section'
        ? _renderSpinnerSection()
        : _renderSpinnerComponent()}
    </>
  );
};

export default LoadingSpinner;
