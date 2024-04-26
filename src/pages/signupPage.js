"use client";

import React,{useState} from "react";
import { LinkButton } from "../subframe/components/LinkButton";
import { TextField } from "../subframe/components/TextField";
import * as SubframeCore from "@subframe/core";
import { Button } from "../subframe/components/Button";
import { Link } from 'react-router-dom';

/**
 * A component for user signup page
 * @component
 * @example
 *   <SignupPage />
 * @description
 *   - This component renders a signup page for new users.
 *   - It collects user's email, username, and password for registration.
 *   - It communicates with the backend to handle form submission and display error messages.
 *   - Upon successful registration, it redirects the user to the homepage.
 * @state {string} company - The user's email address
 * @state {string} username - The user's desired username
 * @state {string} password - The user's desired password
 * @state {string} error - Error message to be displayed if registration fails
 * @prop {string} variant - The color variant of the button (e.g. "brand", "brand-primary")
 * @prop {string} size - The size of the button (e.g. "small", "medium")
 * @prop {string} icon - The name of the icon to be displayed on the button (e.g. "FeatherMail")
 * @prop {string} iconRight - The name of the icon to be displayed on the right side of the button (e.g. "FeatherChevronRight")
 * @prop {boolean} loading - Indicates if the button is in a loading state
 * @lifecycle
 *   componentDidMount - Called after the component is mounted. Used to fetch data from the backend.
 *   componentDidUpdate - Called after the component is updated. Used to handle form submission and display error messages.
 * @key_rendering_logic
 *   - The handleSubmit function handles form submission by creating an object with the user's input and sending it to the backend.
 *   - The Button component is used to display the "Sign up" button and handle its click event.
 *   - The LinkButton component is used to display links to the Terms of Service and Privacy Policy pages.
 */
function SignupPage() {
  const [company, setCompany] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior

    // Create the object to be sent to the backend
    const userData = {
        username: username,
        email: company, // Assuming 'company' field is actually intended to collect email
        password: password,
    };

    try {
        const response = await fetch('http://localhost:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();
        if (response.ok) {
            window.location.href = "/";

            console.log('Success:', data);
            // Handle successful registration (e.g., redirect or clear form)
        } else {
            console.error('Signup failed:', data);
            setError('Signup failed: ' + (data.message || 'Unknown error'));
            // Handle errors (e.g., show error message)
        }
    } catch (error) {
        console.error('Network error:', error);
        setError('Network error: ' + error.message);
        // Handle network errors
    }
};
  return (
    <div className="flex h-screen w-full flex-wrap items-start bg-default-background">
      <div className="flex h-full w-full max-w-[576px] grow shrink-0 basis-0 flex-col items-center gap-12 bg-neutral-800 pt-12 pr-12 pb-12 pl-12">
        <div className="flex h-full w-full max-w-[448px] grow shrink-0 basis-0 flex-col items-start justify-center gap-12">
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
                className="w-6 flex-none"
                src="https://res.cloudinary.com/subframe/image/upload/v1711417529/shared/ixjzepxndhkdpah53gix.png"
              />
              <img
                className="w-6 flex-none"
                src="https://res.cloudinary.com/subframe/image/upload/v1713930787/uploads/429/rpvfaubhxqmy30zsa9ou.png"
              />
              <img
                className="w-6 flex-none"
                src="https://res.cloudinary.com/subframe/image/upload/v1713930800/uploads/429/v1ldwbqkaif4l8eu2dev.png"
              />
              <img
                className="w-6 flex-none"
                src="https://res.cloudinary.com/subframe/image/upload/v1713930812/uploads/429/qwf3on9gncyaqrae29vb.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-6 border-l border-solid border-neutral-border pt-12 pr-12 pb-12 pl-12">
        <div className="flex w-full max-w-[448px] flex-col items-start justify-center gap-8">
          <div className="flex w-full flex-col items-start gap-1">
            <span className="w-full text-heading-2 font-heading-2 text-default-font">
              Get started today
            </span>
            <div className="flex w-full flex-wrap items-start gap-2">
              <span className="text-body font-body text-subtext-color">
                Already have an account?
              </span>
              <LinkButton
                variant="brand"
                icon={null}
                iconRight="FeatherChevronRight"
              >
               <Link to="/"> Sign In</Link>
              </LinkButton>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-4">
          <form onSubmit={handleSubmit} className="flex w-full flex-col items-start justify-center gap-4">
            <TextField
              className="h-auto w-full flex-none"
              label=""
              helpText=""
              icon="FeatherMail"
              value={company}
              onChange={(e) => setCompany(e.target.value)}

            >
              <TextField.Input placeholder="Email" />
            </TextField>
            <TextField
              className="h-auto w-full flex-none"
              label=""
              helpText=""
              icon="FeatherUser"
              onChange={(e) => setUsername(e.target.value)}
                placeholder="User Name"
            >
              <TextField.Input placeholder="User Name" />
            </TextField>
            <TextField
              className="h-auto w-full flex-none"
              label=""
              helpText=""
              icon="FeatherLock"
              onChange={(e) => setPassword(e.target.value)}
                type="password"
            >
              <TextField.Input type="password" placeholder="Password" />
            </TextField>
           
            <Button
              disabled={false}
              variant="brand-primary"
              size="medium"
              icon={null}
              iconRight={null}
              loading={false}
              type="submit"
            >
              Sign up
            </Button>
            {error && <div style={{ color: 'red' }}>{error}</div>}

            
            </form>
          </div>
          <div className="flex flex-wrap items-start gap-1">
            <span className="text-caption font-caption text-subtext-color">
              By signing up you agree to the
            </span>
            <LinkButton variant="brand" size="small" icon={null}>
              Terms of Service
            </LinkButton>
            <span className="text-caption font-caption text-subtext-color">
              and
            </span>
            <LinkButton variant="brand" size="small" icon={null}>
              Privacy Policy
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;