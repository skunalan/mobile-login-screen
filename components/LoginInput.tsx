import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TAILWIND_CONFIG } from '../constants';
import Ionicons from '@expo/vector-icons/Ionicons';

const LoginInput = (props: { placeholder: string; type: 'email' | 'password' }) => {
  const [isSecure, setIsSecure] = useState(true);

  const handleSecurity = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View className="mb-4">
      <View>
        <TextInput
          secureTextEntry={props.type === `password` ? isSecure : false}
          placeholder={props.placeholder ?? `Placeholder`}
          placeholderTextColor={TAILWIND_CONFIG.colors.placeholder}
          className="h-14 rounded-full bg-secondary text-placeholder"
        />
        {props.type === `password` && (
          <TouchableOpacity
            onPress={handleSecurity}
            className="absolute bottom-0 right-4 top-0 h-full justify-center">
            {isSecure ? <Ionicons size={18} name="eye-off" /> : <Ionicons size={18} name="eye" />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default LoginInput;
