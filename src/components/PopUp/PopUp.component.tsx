import { FC } from 'react';
import { View } from '../View';
import { Text } from '../Text';
import { Button } from '../Button';

import { IPopUpProps } from './PopUp.types';
import { styles } from './PopUp.component.styles';
import { Colors } from '../../constants/Colors';

const PopUp: FC<IPopUpProps> = ({
  backgroundButtonColor = Colors.black,
  isLoading = false,
  popUpData,
  visible = false,
}: IPopUpProps) =>
  visible ? (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.headerTitle} children={popUpData?.title} />

          <Text style={styles.headerDescription} children={popUpData?.description} />
        </View>

        <Button
          backgroundColor={backgroundButtonColor}
          isLoading={isLoading}
          label={popUpData?.labelAccept}
          onPress={popUpData?.onPressAccept}
        />
      </View>
    </View>
  ) : null;

export default PopUp;
