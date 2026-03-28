import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.Button} {...rest}>
      <Text style={styles.TextButton}>{title}</Text>
    </TouchableOpacity>
  );
}