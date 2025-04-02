import React from 'react'

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        What We Do
      </h1>
      <p className="text-lg text-center mb-12">
        Fellowship of Eggon Christians in Nigeria (FECIN) is committed to spreading the Gospel, strengthening faith, and supporting communities through various programs and initiatives.
      </p>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-500">Evangelism</h2>
          <p className="mt-2 text-gray-700">
            We organize outreach programs, missions, and evangelistic campaigns to share the message of Christ with communities.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-500">Discipleship</h2>
          <p className="mt-2 text-gray-700">
            Our discipleship programs equip believers with Biblical knowledge and spiritual growth through Bible studies and mentorship.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-500">Community Support</h2>
          <p className="mt-2 text-gray-700">
            FECIN provides humanitarian aid, educational support, and medical assistance to underserved communities.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-500">Prayer & Worship</h2>
          <p className="mt-2 text-gray-700">
            We foster a strong prayer network and organize worship events to strengthen faith and unity among believers.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WhatWeDo