import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-orange-600">Privacy Policy</h1>
      <p className="mb-3">
        Your privacy is important to us. This Privacy Policy explains how we collect, use,
        and protect your personal information when you use our services.
      </p>
      <p className="mb-3">
        We only collect information necessary to provide you with the best healthcare experience.
        Your data will never be shared with third parties without your consent.
      </p>
      <p>
        If you have any questions about this policy, feel free to contact us at
        <span className="text-orange-600"> info@example.com</span>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
