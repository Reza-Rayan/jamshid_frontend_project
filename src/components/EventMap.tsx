import React from "react";

interface EventMapProps {
  latitude: number;
  longitude: number;
}

const EventMap: React.FC<EventMapProps> = ({ latitude, longitude }) => {
  return (
   <div className="rounded-lg overflow-hidden">
     <iframe
      title="Event Location"
      width="100%"
      height="200"
      frameBorder="0"
      style={{ border: 0 }}
      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.71488427788034!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e010beff0a169%3A0xecb885f314c8e3cc!2sName%20Cafe!5e0!3m2!1sen!2s!4v1714054193275!5m2!1sen!2s`}
      allowFullScreen
    ></iframe>
   </div>
  );
};

export default EventMap;
