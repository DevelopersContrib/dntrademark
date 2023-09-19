'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signin = () => {
  // const [data, setData] = useState({
  //   email: '',
  //   password: '',
  // });

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email address.').required('Enter your email address.'),
    password: Yup.string().required('Password is required.').min(5).max(20),
  });
  interface IValues {
    email: String;
    password: String;
  }

  const handleSignin = async (values: IValues) => {
    try {
      const res = await fetch('/api/signin', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();
      if (result.success) {
        const user = {
          userId: result.data.id,
          user: result.data.first_name + ' ' + result.data.last_name,
          email: result.data.email,
          packageId: result.data.package_id,
          accessToken: result.data.access_token,
        };

        localStorage.setItem('user', JSON.stringify(user));

        if (user.packageId) {
          window.location.href = '/dashboard';
        } else {
          window.location.href = '/pricing';
        }
      }

      console.log(result.data);
    } catch (error) {}
  };

  return (
    <>
      {/* <!-- ===== SignIn Form Start ===== --> */}
      <section className="pt-32.5 lg:pt-45 xl:pt-50 pb-12.5 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1016 relative z-1 pt-10 lg:pt-15 xl:pt-20 pb-7.5 px-7.5 lg:px-15 xl:px-20">
          <div className="absolute -z-1 rounded-lg left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#F8F9FF] to-[#dee7ff47] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
          <div className="absolute -z-1 bottom-17.5 left-0 w-full h-1/3">
            <Image src="/images/shape/shape-dotted-light.svg" alt="Dotted" className="dark:hidden" fill />
            <Image src="/images/shape/shape-dotted-dark.svg" alt="Dotted" className="hidden dark:block" fill />
          </div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top shadow-solid-8 rounded-lg bg-white dark:bg-black dark:border dark:border-strokedark pt-7.5 xl:pt-15 px-7.5 xl:px-15"
          >
            <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-15 text-center">Login to Your Account</h2>
            <div className="flex flex-col">
              <div className="flex items-center gap-8">
                <button
                  aria-label="sign with google"
                  className="mb-6 flex w-full items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] py-3 px-6 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
                >
                  <span className="mr-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_95:967)">
                        <path
                          d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_95:967">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Signup with Google
                </button>

                <button
                  aria-label="signup with github"
                  className="mb-6 flex w-full items-center justify-center rounded-sm border border-stroke bg-[#f8f8f8] py-3 px-6 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none"
                >
                  <span className="mr-3">
                    <svg fill="currentColor" width="22" height="22" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C50.1 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.7998 44.6 45.4998 37.8 46.1998C38.9 47.1998 39.9 49.1998 39.9 51.9998C39.9 56.1998 39.8 59.4998 39.8 60.4998C39.8 61.2998 40.4 62.1998 41.9 61.8998C54.1 57.7998 63 46.2998 63 32.5998C62.9 15.5998 49 1.7998 32 1.7998Z" />
                    </svg>
                  </span>
                  Signup with Github
                </button>
              </div>
            </div>
            <div className="mb-10 flex items-center justify-center">
              <span className="hidden h-[1px] w-full max-w-[200px] bg-stroke dark:bg-stroke-dark sm:block"></span>
              <p className="w-full px-5 text-center text-base text-body-color dark:text-body-color-dark">Or, login with your email</p>
              <span className="hidden h-[1px] w-full max-w-[200px] bg-stroke dark:bg-stroke-dark sm:block"></span>
            </div>

            <Formik
              initialValues={{ email: 'kjcastanos@gmail.com', password: 'chicosci' }}
              validationSchema={schema}
              onSubmit={(values: IValues) => {
                setTimeout(() => {
                  handleSignin(values);
                }, 500);
              }}
            >
              {(formik) => (
                <Form>
                  <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5 lg:mb-12.5">
                    <Field
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="w-full lg:w-1/2 !bg-white dark:!bg-black border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                    />
                    {formik.errors.email && formik.touched.email ? <ErrorMessage name="email" component="small" className="text-danger" /> : null}

                    <Field
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="w-full lg:w-1/2 !bg-white dark:!bg-black border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                    />
                    {formik.errors.password && formik.touched.password ? <ErrorMessage name="password" component="small" className="text-danger" /> : null}
                  </div>

                  <div className="flex flex-wrap items-center md:justify-between gap-10 xl:gap-15">
                    <div className="flex flex-wrap gap-4 md:gap-10">
                      <div className="flex items-center mb-4">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="default-checkbox" className="max-w-[425px] flex cursor-pointer select-none pl-3">
                          Keep me signed in
                        </label>
                      </div>

                      <a href="#" className="hover:text-primary">
                        Forgot Password?
                      </a>
                    </div>

                    <button aria-label="login with email and password" className="inline-flex items-center gap-2.5 bg-black dark:bg-btndark hover:bg-blackho ease-in-out duration-300 font-medium text-white rounded-full px-6 py-3">
                      Log in
                      <svg className="fill-white" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" fill="" />
                      </svg>
                    </button>
                  </div>

                  <div className="text-center border-t border-stroke dark:border-strokedark mt-12.5 py-5">
                    <p>
                      Don't have an account?{' '}
                      <Link className="text-black dark:text-white hover:text-primary hover:dark:text-primary" href="/auth/signup">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== SignIn Form End ===== --> */}
    </>
  );
};

export default Signin;
