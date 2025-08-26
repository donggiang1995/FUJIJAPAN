import React from 'react';

interface ContactMapProps {
  address: string;
}

const ContactMap = ({ address }: ContactMapProps) => {
  return (
    <div className="aspect-video rounded-lg overflow-hidden">
      <img 
        src="/lovable-uploads/10b9c0fd-132d-49b6-86ab-93dd7ca6c02f.png"
        alt={`Map showing ${address}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ContactMap;