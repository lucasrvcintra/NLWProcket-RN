import { Text, View } from 'react-native';

import { colors } from '@/styles/theme';
import { s } from './styles';
import { Feather } from '@expo/vector-icons';

type Props = {
  title: string;
  description: string;
  name: keyof typeof Feather.glyphMap;
};

export function Step({ title, description, name }: Props) {
  return (
    <View style={s.container}>
      {Feather && <Feather name={name} size={32} color={colors.red.base} />};
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}
