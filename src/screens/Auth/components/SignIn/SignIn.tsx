import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

import { useAuthStore } from '@/stores/auth';
import { useLogin } from '@/api/auth';

export function SignIn() {
  const login = useAuthStore((state) => state.login);
  const loginMutation = useLogin();

  GoogleSignin.configure({
    webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(JSON.stringify(userInfo, null, 2));

      loginMutation.mutate(
        {
          email: userInfo.user.email,
          name: userInfo.user.name || '',
          imageUrl: userInfo.user.photo || '',
        },
        {
          onSuccess: (data) => {
            login(data.access_token);
          },
        },
      );
    } catch (error: any) {
      console.log(JSON.stringify(error, null, 2));
    }
  };

  return (
    <GoogleSigninButton size={GoogleSigninButton.Size.Wide} color={GoogleSigninButton.Color.Light} onPress={signIn} />
  );
}
