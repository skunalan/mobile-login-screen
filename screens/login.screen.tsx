import LoginInput from 'components/LoginInput'
import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



const LoginScreen = () => {
  return (
<SafeAreaView className='bg-background flex-1'>
  <View className='p-page'>
  <Image className='mx-auto' source={require(`../assets/images/mbadok-logo.png`)}/>
  <Text className='text-foreground text-lg text-center mt-4'>
    Please enter your e-mail address and enter password
  </Text>
  <View className='mt-5'>
  <LoginInput placeholder='Enter your email' type='email'/>
  <LoginInput placeholder='Enter your password' type='password'/>
  </View>
  <Text>
    Forgot password?
  </Text>
  <TouchableOpacity className='bg-primary rounded-full w-48 h-14 justify-center items-center mt-40 self-center'>
    <Text className='text-secondary text-center text-xl font-bold'>
      Login
    </Text>
  </TouchableOpacity>
  </View>
</SafeAreaView>
  )
}

export default LoginScreen