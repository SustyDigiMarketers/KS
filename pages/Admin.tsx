import React, { useState } from 'react';
import { Lock, Plus, Settings, Users, Image as ImageIcon } from 'lucide-react';

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
          <div className="text-center">
            <Lock className="mx-auto h-12 w-12 text-brand-600" />
            <h2 className="mt-6 text-3xl font-extrabold text-slate-900">Admin Login</h2>
            <p className="mt-2 text-sm text-slate-600">Enter your credentials to manage the site.</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-t-md focus:outline-none focus:ring-brand-500 focus:border-brand-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  defaultValue="admin"
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-b-md focus:outline-none focus:ring-brand-500 focus:border-brand-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  defaultValue="password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="text-center text-xs text-slate-400">
             (Demo Mode: Click "Sign in")
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>
            <button onClick={() => setIsLoggedIn(false)} className="text-slate-600 hover:text-red-600 font-medium">Logout</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Dashboard Cards */}
          <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition cursor-pointer">
            <div className="p-5 flex items-center">
              <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-slate-500 truncate">Manage Services</dt>
                  <dd className="flex items-baseline">
                    <div className="text-lg font-semibold text-slate-900">5 Active</div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="bg-slate-50 px-5 py-3">
              <div className="text-sm text-brand-700 font-medium flex items-center">
                <Plus size={16} className="mr-1"/> Add Service
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition cursor-pointer">
            <div className="p-5 flex items-center">
              <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-slate-500 truncate">Clients</dt>
                  <dd className="flex items-baseline">
                    <div className="text-lg font-semibold text-slate-900">4 Listed</div>
                  </dd>
                </dl>
              </div>
            </div>
             <div className="bg-slate-50 px-5 py-3">
              <div className="text-sm text-brand-700 font-medium flex items-center">
                <Plus size={16} className="mr-1"/> Add Client
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition cursor-pointer">
            <div className="p-5 flex items-center">
              <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                <ImageIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-slate-500 truncate">Gallery Images</dt>
                  <dd className="flex items-baseline">
                    <div className="text-lg font-semibold text-slate-900">6 Uploaded</div>
                  </dd>
                </dl>
              </div>
            </div>
             <div className="bg-slate-50 px-5 py-3">
              <div className="text-sm text-brand-700 font-medium flex items-center">
                <Plus size={16} className="mr-1"/> Upload Photo
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white shadow rounded-lg p-6">
            <h3 className="text-lg leading-6 font-medium text-slate-900 mb-4">Recent Inquiries (Mock Data)</h3>
            <div className="border-t border-slate-200">
                <ul className="divide-y divide-slate-200">
                    <li className="py-4">
                        <div className="flex space-x-3">
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium">Rajesh Kumar</h3>
                                    <p className="text-sm text-slate-500">1h ago</p>
                                </div>
                                <p className="text-sm text-slate-500">Looking for CCTV installation quote for my apartment complex.</p>
                            </div>
                        </div>
                    </li>
                    <li className="py-4">
                        <div className="flex space-x-3">
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium">Sneha P</h3>
                                    <p className="text-sm text-slate-500">Yesterday</p>
                                </div>
                                <p className="text-sm text-slate-500">My Dell laptop screen is broken. Do you have replacement in stock?</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;