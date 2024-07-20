import { AppBar,Toolbar } from '@mui/material'
import React from 'react'
import Logo from './shared/Logo';
import { useAuth } from '../context/Authcontex';
import NavigationLink from './shared/NavigationLink';

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar sx={{bgcolor: "transparent",position:"static",boxShadow:"none"}}>
      <Toolbar sx={{ display:"flex"}}>
        <Logo/>
        <div>
          {auth?.isLogedIn ?<>
                              <NavigationLink to='/chat' bg='#00fffc' text='Go To Chat' textColor='black' />
                              <NavigationLink to='/' bg='#51538f' text='Logout' textColor='black' onClick={auth.logout} />
                            </>:
                            <>
                              <NavigationLink to='/login' bg='#00fffc' text='Login' textColor='black' />
                              <NavigationLink to='/signup' bg='#00fffc' text='Sign up' textColor='black' />
                            </>
          }
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;