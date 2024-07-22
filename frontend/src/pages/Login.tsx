import React from 'react';
import { useAuth } from '../context/Authcontex';
import { Box,Typography,Button } from '@mui/material'
import CustomInput from '../components/shared/CustomInput'
import { toast} from 'react-hot-toast';

const Login = () => {
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('Email')as string;
    const password = data.get('Password')as string;
    try{
      toast.loading('Signing in...',{id:'login'});
      await auth?.login(email, password);
      toast.success('Signed in successfully',{id:'login'});
    }catch(e){
      console.log(e);
      toast.error('Unable to sign in',{id:'login'});
    }
  }
  return( 
  <Box width={'100%'} height={'100%'} display={'flex'} flex={1}>
    <Box padding={8} mt={8} display={{md:'flex',sm:'none',xs:'none'}}><img src='' alt='' style={{width:'400px'}} /></Box>
    <Box display={'flex'} flex={{xs: 1, md:0.5}} justifyContent={'center'} alignItems={'center'} padding={2} ml={'auto'} mt={16}>
      <form onSubmit={(handleSubmit)} style={{margin:'auto', padding:'30px', boxShadow:'10px 10px 20px #000', borderRadius:'10px', border:'none'}}>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <Typography variant='h4' textAlign={'center'} padding={2} fontWeight={600}>Login</Typography>
          <CustomInput type='Email' name='Email' label='Email' ></CustomInput>
          <CustomInput type='Password' name='Password' label='Password' ></CustomInput>
          <Button type='submit' sx={{px:2,py:2,mt:2,width:'430px',borderRadius:2,bgcolor:'#00fffc',':hover':{bgcolor:'white',color:'black'}}}>Login</Button>
        </Box>
      </form>
    </Box>
  </Box>
  )
}

export default Login