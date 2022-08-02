import { userState } from '@/store/user';
import { UserStateProps } from '@/types/user';
import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { getCurrentUser, loginCheck } from '@/api/Auth';
import { axios } from '@/lib';
import { AxiosResponse } from 'axios';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useSetRecoilState(userState);

  async function getAccessToken(): Promise<AxiosResponse> {
    await loginCheck();// access, refresh 갱신하는 api
    const user = await getCurrentUser(); // user 데이터 가져오는 api
    return user;
  }

  useEffect(() => {
    getAccessToken()
      .then(res => setUser(res.data))
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(true));
  }, []);

  return { isLoading };
};