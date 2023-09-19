import React from 'react'
import { SlHome, SlSettings, SlEnergy } from "react-icons/sl"
import { RiArrowRightSLine, RiMenuLine, RiSearchLine,RiNotification3Line } from "react-icons/ri"
import Image from 'next/image'
const page = () => {
  return (
    <>
      {/* Start:: Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform overflow-y-auto">
        <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
          <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded object-cover" />
          <span className="text-lg font-bold text-white ml-3">Logo</span>
        </a>
        <ul className="mt-4">
          <li className="mb-1 group active">
            <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
              <SlHome className='mr-3 text-lg' />
              <span className="text-sm">Dashboard</span>
            </a>
          </li>
          <li className="mb-1 group">
            <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
              <SlEnergy className='mr-3 text-lg' />
              <span className="text-sm">Services</span>
              <RiArrowRightSLine className="ml-auto group-[.selected]:rotate-90" />
            </a>
            <ul className="pl-7 mt-2 hidden group-[.selected]:block">
              <li className="mb-4">
                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Manage services</a>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
              <SlSettings className='mr-3 text-lg' />
              <span className="text-sm">Settings</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
      {/* End:: Sidebar */}

      {/* <!-- start: Main --> */}
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
          <button type="button" className="text-lg text-gray-600 sidebar-toggle">
            <RiMenuLine />
          </button>
          <ul className="flex items-center text-sm ml-4">
            <li className="mr-2">
              <a href="#" className="text-gray-400 hover:text-gray-600 font-medium">Dashboard</a>
            </li>
            <li className="text-gray-600 mr-2 font-medium">/</li>
            <li className="text-gray-600 mr-2 font-medium">Analytics</li>
          </ul>
          <ul className="ml-auto flex items-center">
            <li className="mr-1 dropdown">
              <button type="button" className="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600">
                <RiSearchLine  />
              </button>
              <div className="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
                <form action="" className="p-4 border-b border-b-gray-100">
                  <div className="relative w-full">
                    <input type="text" className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500" placeholder="Search..." />
                      <RiSearchLine className='absolute top-1/2 left-4 -translate-y-1/2 text-gray-400'  />
                  </div>
                </form>
                <div className="mt-3 mb-2">
                  <div className="text-[13px] font-medium text-gray-400 ml-4 mb-2">Recently</div>
                  <ul className="max-h-64 overflow-y-auto">
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                            <div className="text-[11px] text-gray-400">$345</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                            <div className="text-[11px] text-gray-400">$345</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                            <div className="text-[11px] text-gray-400">$345</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                            <div className="text-[11px] text-gray-400">$345</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                            <div className="text-[11px] text-gray-400">$345</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                            <div className="text-[11px] text-gray-400">$345</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                            <div className="text-[11px] text-gray-400">$345</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">Create landing page</div>
                            <div className="text-[11px] text-gray-400">$345</div>
                          </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <button type="button" className="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600">
                <RiNotification3Line />
              </button>
              <div className="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
                <div className="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
                  <button type="button" data-tab="notification" data-tab-page="notifications" className="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1 active">Notifications</button>
                  <button type="button" data-tab="notification" data-tab-page="messages" className="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1">Messages</button>
                </div>
                <div className="my-2">
                  <ul className="max-h-64 overflow-y-auto" data-tab-for="notification" data-page="notifications">
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
                            <div className="text-[11px] text-gray-400">from a user</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
                            <div className="text-[11px] text-gray-400">from a user</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
                            <div className="text-[11px] text-gray-400">from a user</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
                            <div className="text-[11px] text-gray-400">from a user</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div>
                            <div className="text-[11px] text-gray-400">from a user</div>
                          </div>
                      </a>
                    </li>
                  </ul>
                  <ul className="max-h-64 overflow-y-auto hidden" data-tab-for="notification" data-page="messages">
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
                            <div className="text-[11px] text-gray-400">Hello there!</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
                            <div className="text-[11px] text-gray-400">Hello there!</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
                            <div className="text-[11px] text-gray-400">Hello there!</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
                            <div className="text-[11px] text-gray-400">Hello there!</div>
                          </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 px-4 flex items-center hover:bg-gray-50 group">
                        <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
                          <div className="ml-2">
                            <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div>
                            <div className="text-[11px] text-gray-400">Hello there!</div>
                          </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="dropdown ml-3">
              <button type="button" className="dropdown-toggle flex items-center">
                <Image width="0" height="0" src="/images/icon/default-icon-32x32.jpg" alt="" className="w-8 h-8 rounded block object-cover align-middle" />
              </button>
              <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                <li>
                  <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="p-6"> 
          {/* ------------------------------ Page content here ------------------------------ */}
          hello dashboard
        </div>
      </main>
      {/* <!-- end: Main --> */}
    </>
  )
}

export default page