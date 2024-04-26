"use client";

import React, { useState } from "react";
import { TextField } from "../subframe/components/TextField";
import { Button } from "../subframe/components/Button";
import { useNavigate,Link } from 'react-router-dom';
import { LinkButton } from "../subframe/components/LinkButton";

function AuthPage({ setIsLoggedIn }){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (event) => {
      event.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            console.log(data);
            if (response.ok) {
                console.log('Login Successful:', data);
                setIsLoggedIn(true);
                navigate('/itemPage', { replace: true });
            } else {
                console.error('Login Failed:', data.error);
                setError(data.error);
            }
        } catch (error) {
            console.error('Network error:', error);
            setError('Network error');
        }
    };
  return (
    <div className="flex h-screen w-full flex-wrap items-start bg-default-background">
      <div className="flex h-full w-full max-w-[576px] grow shrink-0 basis-0 flex-col items-center gap-12 bg-neutral-800 pt-12 pr-12 pb-12 pl-12 overflow-auto">
        <div className="flex h-full w-full max-w-[448px] grow shrink-0 basis-0 flex-col items-start justify-center gap-12 overflow-hidden">
          <img
            className="h-8 flex-none invert"
            src="https://res.cloudinary.com/subframe/image/upload/v1714076742/uploads/429/stqnid8e73itaovxkd8p.png"
          />
          <div className="flex flex-col items-start justify-center gap-16 pb-32">
            <div className="flex flex-col items-start gap-2">
              <span className="text-heading-2 font-heading-2 text-white">
                Kaizntree
              </span>
              <span className="text-heading-3 font-heading-3 text-brand-200">
              Streamline your sales channels with us
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <img
                className="w-6 flex-none "
                src="https://res.cloudinary.com/subframe/image/upload/v1711417529/shared/ixjzepxndhkdpah53gix.png"
              />
              <img
                className="w-6 flex-none "
                src="https://res.cloudinary.com/subframe/image/upload/v1713930787/uploads/429/rpvfaubhxqmy30zsa9ou.png"
              />
              <img
                className="w-6 flex-none "
                src="https://res.cloudinary.com/subframe/image/upload/v1713930800/uploads/429/v1ldwbqkaif4l8eu2dev.png"
              />
              <img
                className="w-6 flex-none "
                src="https://res.cloudinary.com/subframe/image/upload/v1713930812/uploads/429/qwf3on9gncyaqrae29vb.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-6 border-l border-solid border-neutral-border pt-12 pr-12 pb-12 pl-12">
      <form onSubmit={handleLogin} className="flex h-full w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-6 pt-12 pr-12 pb-12 pl-12">
        <div className="flex w-full max-w-[448px] flex-col items-start justify-center gap-8">
          <div className="flex w-full flex-col items-start gap-1">
            <span className="w-full text-heading-2 font-heading-2 text-default-font">
              Get started today
            </span>
            <div className="flex w-full flex-wrap items-start gap-2">
              <span className="text-body font-body text-subtext-color">
                Don't have an account?
              </span>
              <LinkButton
                variant="brand"
                icon={null}
                iconRight="FeatherChevronRight"
              >
               <Link to="/signup"> Sign Up</Link>
              </LinkButton>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-4">
            <TextField
              className="h-auto w-full flex-none"
              label="Username"
              helpText=""
              icon="FeatherMail"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Email address"
            >
              <TextField.Input placeholder="Email address" />
            </TextField>
            <TextField
              className="h-auto w-full flex-none"
              label="Password"
              helpText=""
              icon="FeatherLock"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            >
              <TextField.Input type="password" placeholder="Password" />
            </TextField>
            <div className="flex items-center gap-6">
            <Button
              disabled={username === '' || password === ''}
              variant="brand-primary"
              size="medium"
              icon={null}
              iconRight={null}
              loading={false}
              type="submit"
            >
              Sign in
            </Button>

           
            </div>

          </div>
        </div>
        </form>
      </div>
    
    </div>
  );
}

export default AuthPage;