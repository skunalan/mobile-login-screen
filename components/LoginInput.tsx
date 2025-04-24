import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TAILWIND_CONFIG } from '../constants';
import Ionicons from '@expo/vector-icons/Ionicons';

const LoginInput = (props: { placeholder: string; type: 'email' | 'password' }) => {
  const [isSecure, setIsSecure] = useState(true);

  const handleSecurity = () => {
    setIsSecure(!isSecure);
  };

  const leftIconName = () => {
    return props.type === `email` ? `mail-outline` : `lock-closed-outline`
  }

  return (
    <View className="mb-4">
      <View className="flex-row items-center h-20 rounded-full bg-secondary px-4">
      <Ionicons
          name={leftIconName()}
          size={20}
          color={TAILWIND_CONFIG.colors.placeholder}
          className="mr-2"
        />
        <TextInput
          secureTextEntry={props.type === `password` ? isSecure : false}
          placeholder={props.placeholder ?? `Placeholder`}
          placeholderTextColor={TAILWIND_CONFIG.colors.placeholder}
          className="h-20 rounded-full bg-secondary text-placeholder"
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
