import LoginInput from 'components/LoginInput'
import SocialMediaButton from 'components/SocialMediaButton'
import { View, Text, Image,TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



const LoginScreen = () => {
  return (
<SafeAreaView className='bg-background flex-1'>
  <View className='p-page'>
  <Image className='mx-auto' source={require(`../assets/images/mbadok-logo.png`)}/>
  <Text className='text-foreground text-lg text-center mt-4'>
    Please enter your e-mail address and enter password
  </Text>
  <View className='mt-10 gap-3'>
  <LoginInput placeholder='Enter your email' type='email'/>
  <LoginInput placeholder='Enter your password' type='password'/>
  </View>
  <View className='mt-48 gap-4'>
  <TouchableOpacity>
      <Text className="text-link text-center font-medium">
        Forgot password?
      </Text>
    </TouchableOpacity>
  <TouchableOpacity className='bg-primary rounded-full w-72 h-16 justify-center items-center self-center'>
    <Text className='text-secondary text-center text-xl font-bold'>
      Login
    </Text>
  </TouchableOpacity>
  <Text className='text-foreground text-center'>
    Don't have an account? {` `} 
    <Text onPress={()=> console.log("Sign Up clicked")} className='text-link font-medium'>
      Sign Up
    </Text>
  </Text>
  </View>
    <View className='mt-4 w-full flex-row items-center py-2 mt-10'>
    <View className='bg-foreground h-[0.4px] flex-1'/>
    <Text className='text-foreground px-2'>Sign in with</Text>
    <View className='bg-foreground h-[0.4px] flex-1'/>
    </View>
    <View className='flex-row items-center justify-center gap-10 mt-6'>
      <SocialMediaButton/>
      <SocialMediaButton/>
      <SocialMediaButton/>
    </View>
  </View>
</SafeAreaView>
  )
}

export default LoginScreen