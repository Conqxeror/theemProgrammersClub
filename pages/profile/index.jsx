import React from 'react';
import Layout from '../../components/Layout';
import { Avatar } from '@nextui-org/avatar';
import { useSession } from 'next-auth/react';
import { Divider } from '@nextui-org/divider';
import { Button } from '@nextui-org/button';
import LogOutIcon from '../../public/Images/Hero/LogOutIcon';
import { signOut } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();
  if(session){
    return (
      <Layout>
        <div className='flex-col min-h-screen'>
          <div className='flex w-full py-5 justify-center items-center'>
            <Avatar isBordered color="primary" src={session.session.user.image} className="w-20 h-20 text-large" />
          </div> 
          <div className='grid text-center'>
            <p1 className="text-sm">{session.session.user.email}</p1>
            <h1><b>{session.session.user.name}</b>
            </h1>
          </div>
          <div className='flex justify-center py-5'>
            <Button color="danger" variant="bordered" startContent={<LogOutIcon />} onClick={signOut}>
              Log Out
            </Button>
          </div>
        </div>
        <Divider className='my-5'/>
        <div>
          <h1 className='text-lg'><b>Articles</b></h1>
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <div className='w-full min-h-screen flex justify-center items-center '>
        <h1 className='text-lg'><b>You are Logged Out</b></h1>
      </div>
    </Layout>
  )
}
