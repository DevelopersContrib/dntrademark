import React from 'react';
import NewsletterForm from './vnoc-newsletter';

const VNOC_newsletter: React.FC = () => {
  return (
    <div>
        <p className="mb-4 w-[90%]">
                    Subscribe to receive future updates
        </p>
      <NewsletterForm />
    </div>
  );
};

export default VNOC_newsletter;
