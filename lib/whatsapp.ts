export interface BookingDetails {
  name: string;
  phone: string;
  address: string;
  service: string;
  preferredDate: string;
  description: string;
}

const WHATSAPP_NUMBER = "918590203732"; // Updated with user provided number

export const generateWhatsAppUrl = (details: BookingDetails) => {
  const message = `*New Booking Request*

*Service:* ${details.service}
*Name:* ${details.name}
*Phone:* ${details.phone}
*Address:* ${details.address}
*Preferred Date:* ${details.preferredDate}
*Issue:* ${details.description}`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const redirectToWhatsApp = (details: BookingDetails) => {
  const url = generateWhatsAppUrl(details);
  window.open(url, "_blank");
};
