import React from "react";

const WhatWeDo = () => {
  const activities = [
    {
      title: "Evangelism",
      description:
        "We organize outreach programs, missions, and evangelistic campaigns to share the message of Christ with communities.",
    },
    {
      title: "Discipleship",
      description:
        "Our discipleship programs equip believers with Biblical knowledge and spiritual growth through Bible studies and mentorship.",
    },
    {
      title: "Community Support",
      description:
        "FECIN provides humanitarian aid, educational support, and medical assistance to underserved communities.",
    },
    {
      title: "Prayer & Worship",
      description:
        "We foster a strong prayer network and organize worship events to strengthen faith and unity among believers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">What We Do</h1>
        <p className="text-lg text-gray-700 mb-12">
          Fellowship of Eggon Christians in Nigeria (FECIN) is committed to spreading the Gospel, strengthening faith, and supporting communities through various programs and initiatives.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">
              {activity.title}
            </h2>
            <p className="text-gray-700">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
